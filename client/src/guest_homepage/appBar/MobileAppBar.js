import * as React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Container, Button, SwipeableDrawer, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExploreIcon from '@mui/icons-material/Explore';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import './AppBar.css'

const pages = [
    { name: 'Discover', icon: <ExploreIcon sx={{ color: '#686869'}}/> },
    { name: 'Susita Market', icon: <StorefrontRoundedIcon sx={{ color: '#686869'}} /> },
    { name: 'Clubs', icon: <Groups2RoundedIcon sx={{ color: '#686869'}}/> },
  ];

function MobileAppBar(props) {
    const joinNowButtonRef = React.useRef(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setDrawerOpen(open);
    };

    const list = (
        <Box
            sx={{ width: '190px' }}
            role="presentation"
        >
            <List>
                {pages.map((page) => (
                    <ListItemButton key={page.name} sx={{ padding: 2 }}>
                        {page.icon}
                        <ListItemText primary={page.name} sx={{ ml: 2 }} />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );


    return (
        <AppBar position="static" sx={{ backgroundColor: '#ffffff' }} elevation={0}>
            <Container sx={{ border: '0px solid black', pt: '0px' }}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{

                            display: { xs: 'flex', md: 'flex' },
                            fontFamily: 'Open Sans',
                            fontWeight: 400,
                            letterSpacing: '1.5rem',
                            color: '#768A54',
                        }}
                    >
                        <img src=".\susita_logo_name.png" width={'80px'} height="auto" />
                    </Typography>
                    <Box sx={{ ml: 'auto', display: { xs: 'flex', md: 'flex' }, alignItems: 'center' }}>
                        <Button
                            ref={joinNowButtonRef}
                            id="JoinNow"
                            onClick={() => {
                                props.JoinNowCallBack(joinNowButtonRef.current);
                            }}
                            disabled={false}
                            size="small"
                            variant="text"
                            sx={{
                                '&:hover': {
                                    backgroundColor: '#d9d7d7',
                                    color: 'black',
                                    '& > *': { color: 'black' },
                                },
                                ml: '1px',
                                width: '80px',
                                height: '45px'
                            }}>
                            <Typography
                                sx={{
                                    fontSize: 13, color: '#686869', fontFamily: 'Open Sans', fontWeight: 700,
                                    letterSpacing: '.0.5rem', textTransform: 'none'
                                }}>
                                Join now
                            </Typography>
                        </Button>
                        <Button
                            disabled={false}
                            size="small"
                            variant="outlined"
                            style={{ borderRadius: '30px', border: '1px solid #636E51' }}
                            sx={{
                                '&:hover': {
                                    backgroundColor: '#Eef3eb',
                                    color: 'black',
                                    '& > *': { color: '#383d2f' },
                                },
                                ml: '5px',
                                width: '80px',
                                height: '45px'
                            }}>
                            <Typography
                                sx={{
                                    fontSize: 13, color: '#686869', fontFamily: 'Open Sans', fontWeight: 700,
                                    letterSpacing: '.0.5rem', textTransform: 'none'
                                }}>
                                Sign in
                            </Typography>
                        </Button>
                        <IconButton
                            edge="end"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ ml: 2, color: "#Cb6605" }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
            <SwipeableDrawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
                {list}
            </SwipeableDrawer>
        </AppBar>
    );
}
export default MobileAppBar;