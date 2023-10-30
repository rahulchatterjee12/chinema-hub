import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useEffect, useState } from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import TvIcon from '@mui/icons-material/Tv';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    overrides: {
        MuiBottomNavigationAction: {
            root: {
                selected: {
                    fontSize: '40px',
                    color: 'red'
                },
            },
        },
    },
});

const Navbar = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate()
    useEffect(() => {
        if (value === 0) navigate('/')
        else if (value === 1) navigate('/movies');
        else if (value === 2) navigate('/series');
        else if (value === 3) navigate('/search')
    }, [value, navigate])

    return (
        <ThemeProvider theme={theme}>
            <BottomNavigation
                sx={{
                    width: '100%',
                    position: "fixed",
                    bottom: 0,
                    backgroundColor: "#51308E",
                    zIndex: 100
                }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction sx={{ color: '#fff' }} label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction sx={{ color: '#fff' }} label="Movies" icon={<MovieCreationIcon />} />
                <BottomNavigationAction sx={{ color: '#fff' }} label="TV Series" icon={<TvIcon />} />
                <BottomNavigationAction sx={{ color: '#fff' }} label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </ThemeProvider>
    )
}

export default Navbar;