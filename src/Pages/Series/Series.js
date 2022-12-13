import React, { useEffect, useState } from 'react'
import Genres from '../../components/Navbar/Genres'
import CustomPagination from '../../components/Pagination/CustomPagination'
import SingleContent from '../../components/SingleContent/SingleContent'
import useGenre from "../../hooks/useGenre"
import axios from 'axios'

const Series = () => {
  const [page,setPage]= useState(1)
  const [content,setContent]= useState([])
  const [numOfPages,setNumOfPages] = useState()
  const [selectedGenres,setSelectedGenres]= useState([])
  const [ genres,setGenres]= useState([]);
const genreforURL = useGenre(selectedGenres)

const fetchMovie = async()=>{
  const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
  // console.log(data)
  setContent(data.results)
  setNumOfPages(data.total_pages)
}

useEffect(()=>{
fetchMovie()
// eslint-disable-next-line
},[page, genreforURL])

  return (
    <div>
      <span className='pageTitle'>TV Series</span>
      <Genres type='tv' selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres} genres={genres} setGenres={setGenres} setPage={setPage}/>
      <div className='trending'>
                {content && content.map((el) => (
                    <SingleContent key={el.id} id={el.id} poster={el.poster_path} title={el.title || el.name} date={el.first_air_date || el.release_date} media_type='tv' vote_average={el.vote_average} />
                ))}
            </div>
            {numOfPages>1 && (
              <CustomPagination setPage={setPage} numOfPages={numOfPages} />
            )}
    </div>
  )
}

export default Series