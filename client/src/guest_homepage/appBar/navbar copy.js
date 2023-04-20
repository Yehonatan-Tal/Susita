import * as React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Divider, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExploreIcon from '@mui/icons-material/Explore';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import './AppBar.css'

const pages = ['Discover', 'Susita Market', 'Clubs'];


function ResponsiveAppBar(props) {

    const joinNowButtonRef = React.useRef(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" sx={{ backgroundColor: '#ffffff' }} elevation={0}>
            <Container maxWidth="xl" sx={{ border: "0px solid black", pt: '0px' }}>
                <Box>
                    <Toolbar disableGutters >
                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'Open Sans', fontWeight: 900, letterSpacing: '.1.5rem',
                                color: '#768A54',
                                textDecoration: 'none'
                            }}
                        >
                            <img src=".\susita_logo_name.png" width={'150px'} height='auto' />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography sx={{ color: '#626262' }} textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ justifyContent: 'flex-end', marginRight: '5%', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Stack direction="row" spacing={2} sx={{ p: '5px' }}>

                                <IconButton sx={{ p: '5px', height: '40px', color: '#686869' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <ExploreIcon sx={{ width: '25px', height: 'auto' }} />
                                        <Typography
                                            sx={{
                                                '&:hover': { color: 'black' },
                                                fontSize: 13.5, color: '#686869', fontFamily: 'Open Sans', fontWeight: 300,
                                                letterSpacing: '.0.5rem', textTransform: 'none'
                                            }}>
                                            Discover
                                        </Typography>
                                    </Box>
                                </IconButton>
                                <IconButton sx={{ p: '5px', height: '40px', color: '#686869' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: '5px', m: '5px' }}>
                                        <StorefrontRoundedIcon sx={{ width: '25px', height: 'auto' }} />
                                        <Typography
                                            sx={{
                                                '&:hover': { color: 'black' },
                                                fontSize: 13.5, color: '#686869', fontFamily: 'Open Sans', fontWeight: 300,
                                                letterSpacing: '.0.5rem', textTransform: 'none'
                                            }}>
                                            Susita Market
                                        </Typography>
                                    </Box>
                                </IconButton>
                                <IconButton sx={{
                                    p: '5px', height: '40px', color: '#686869', '&:hover': {
                                        color: 'black',
                                        '& > *': { color: 'black' },
                                    },
                                }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Groups2RoundedIcon sx={{ width: '25px', height: 'auto' }} />
                                        <Typography
                                            sx={{
                                                fontSize: 13.5, color: '#686869', fontFamily: 'Open Sans', fontWeight: 300,
                                                letterSpacing: '.0.5rem', textTransform: 'none'
                                            }}>
                                            Clubs
                                        </Typography>
                                    </Box>
                                </IconButton>
                            </Stack>
                            <Divider orientation="vertical" variant="middle" flexItem sx={{ borderRightWidth: 2, height: '40px', alignSelf: 'center', ml: '20px' }} />
                            <Button
                                ref={joinNowButtonRef}
                                id="JoinNow"
                                onClick={() => {
                                    props.JoinNowCallBack(joinNowButtonRef.current);
                                }}
                                disabled={false}
                                size="medium"
                                variant="text"
                                style={{ borderRadius: '30px' }}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#d9d7d7',
                                        color: 'black',
                                        '& > *': { color: 'black' },
                                    },
                                    ml: '5px',
                                    width: '120px',
                                }}>
                                <Typography
                                    sx={{
                                        fontSize: 15, color: '#686869', fontFamily: 'Open Sans', fontWeight: 700,
                                        letterSpacing: '.0.5rem', textTransform: 'none'
                                    }}>
                                    Join now
                                </Typography>
                            </Button>
                            <Button
                                disabled={false}
                                size="medium"
                                variant="outlined"
                                style={{ borderRadius: '30px', border: '2px solid #636E51' }}
                                sx={{
                                    '&:hover': {
                                        backgroundColor: '#Eef3eb',
                                        color: 'black',
                                        '& > *': { color: '#383d2f' },
                                    },
                                    ml: '5px',
                                    width: '120px',
                                }}>
                                <Typography
                                    sx={{
                                        fontSize: 15, color: '#686869', fontFamily: 'Open Sans', fontWeight: 700,
                                        letterSpacing: '.0.5rem', textTransform: 'none'
                                    }}>
                                    Sign in
                                </Typography>
                            </Button>
                        </Box>
                    </Toolbar>
                </Box>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;