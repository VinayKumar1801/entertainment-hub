import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import {useNavigate} from "react-router-dom"


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
    const navigate= useNavigate()
    React.useEffect(() => {
        if(value===0){
            navigate('/')
        }
        else if(value===1) navigate('/movies')
        else if(value===2) navigate('/series')
        else if(value===3) navigate('/search')
    }, [navigate,value])
    


    return (
        <Box sx={{
            width: "100%", position: "fixed",
            bottom: 0,
            backgroundColor: "#2d313a",
            zIndex: 100,
        }}>
            <BottomNavigation
                showLabels
                style={{ backgroundColor: "#2d313a"}}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    style={{ color:"white",  fontWeight:"800" }}
                    label="Trending"
                    
                    icon={<WhatshotIcon />}
                />
                <BottomNavigationAction
                    style={{ color:"white",fontWeight:"800" }}
                    label="Movies"
                    icon={<MovieIcon />}
                />
                <BottomNavigationAction
                    style={{ color:"white", fontWeight:"800"}}
                    label="TV Series"
                    icon={<TvIcon />}
                />
                <BottomNavigationAction
                    style={{ color:"white", fontWeight:"800"}}
                    label="Search"
                    icon={<SearchIcon />}
                />
            </BottomNavigation>
        </Box>
    );
}