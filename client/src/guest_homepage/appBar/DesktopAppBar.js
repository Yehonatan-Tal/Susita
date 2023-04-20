import * as React from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Container, Button, Divider, Stack } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import Groups2RoundedIcon from '@mui/icons-material/Groups2Rounded';
import './AppBar.css'

const pages = ['Discover', 'Susita Market', 'Clubs'];


function DesktopAppBar(props) {

    const joinNowButtonRef = React.useRef(null);



    return (
        <AppBar position="static" sx={{ backgroundColor: '#ffffff' }} elevation={0}>
            <Container maxWidth="xl">
                    <Toolbar >
                        <Typography
                            href="/"
                            sx={{ml: -3, display: { xs: 'flex', md: 'flex' }}}
                        >
                            <img src=".\susita_logo_name.png" width={'140px'} height='auto' />
                        </Typography>
                        <Box sx={{ justifyContent: 'flex-end', marginRight: '5%', flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
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
            </Container>
        </AppBar>
    );
}
export default DesktopAppBar;