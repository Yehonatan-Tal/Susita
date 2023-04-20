import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';
import { FacebookAuth, GoogleAuth, AppleAuth } from '../oAuth/oAuthButtons'
import "./SignIn.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#636e51', //SUSITA MAIN COLOR CODE
            darker: '#Eef3eb',
        },
        gray: {
            main: '#686869', //SUSITA gray COLOR CODE
            darker: '#Eef3eb',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});

export default function SignIn_form(props) {

    const joinNowButtonRef = React.useRef(null);
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [viewSize, setViewSize] = React.useState(isXs ? 'xs' : isSm ? 'sm' : 'md');

    React.useEffect(() => {
        setViewSize(isXs ? 'xs' : isSm ? 'sm' : 'md');
      }, [isXs, isSm]);


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };


    return (
        <ThemeProvider theme={theme}>
            <Container sx={{ pt: "25px"}} component="main">
                <Grid container spacing={{ xs: 0, md: 1 }}>
                    <Grid item xs={12} md={8} sx={{ mt: { xs: '20px', md: '40px' } }}>
                        <Box>
                            <Typography
                                variant="h3"
                                style={{ fontFamily: 'Kalam' }}
                                noWrap
                                sx={{
                                    fontSize: { xs: '1.6rem', sm: '2.8rem' },
                                    display: { xs: 'flex', md: 'flex' }, fontWeight: 300,
                                    color: '#Cb6605',
                                    textDecoration: 'none'
                                }}
                            >
                                Join the susita community<br />
                                make connections<br />
                                and rev up your passion
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: { xs: '100%', md: '400px' },
                                marginTop: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'left',
                            }}
                        >
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                                <TextField
                                    color="gray"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email, phone number or license plate"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                {/* <TextField
                                    color="gray"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                /> */}
                                {/* <Button
                                    style={{ borderRadius: '30px' }}
                                    type="submit"
                                    variant="text"
                                    sx={{ mt: 0, mb: 0 }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: { xs: 12.5, md: 15.5 }, fontFamily: 'Open Sans', fontWeight: 300,
                                            letterSpacing: '.0.5rem', textTransform: 'none',
                                            display: { xs: 'flex', md: 'flex' },
                                            color: '#417dd1',
                                        }}
                                    >
                                        Forgot password?
                                    </Typography>
                                </Button> */}
                                <Button
                                    style={{ borderRadius: '30px' }}
                                    fullWidth
                                    color='primary'
                                    variant="contained"
                                    sx={{
                                        mt: 4, mb: 2, height: '45px',
                                        '&:hover': {
                                            '& > *': { color: '#Eef3eb' },
                                        }
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: { xs: 15, md: 17 }, fontFamily: 'Open Sans', fontWeight: 500,
                                            letterSpacing: '.0.5rem', textTransform: 'none'
                                        }}>
                                        Sign In
                                    </Typography>

                                </Button>
                                <Divider sx={{ borderWidth: 10, mb: '15px' }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: { xs: 12.5, md: 15.5 }, fontFamily: 'Open Sans', fontWeight: 300,
                                            letterSpacing: '.0.5rem', textTransform: 'none',
                                            display: { xs: 'flex', md: 'flex' },
                                            color: '#949494',
                                            textDecoration: 'none'
                                        }}
                                    >
                                        or sign in with
                                    </Typography>
                                </Divider>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <GoogleAuth idSuffix="1" viewSize={viewSize}/>
                                </Box>
                                <Button
                                    ref={joinNowButtonRef}
                                    onClick={() => {
                                        props.JoinNowCallBack(joinNowButtonRef.current);
                                    }}
                                    fullWidth
                                    disabled={false}
                                    variant="outlined"
                                    style={{ borderRadius: '30px', border: '2px solid #636e51' }}
                                    sx={{
                                        height: '45px',
                                        mt: 2,
                                        '&:hover': {
                                            backgroundColor: '#Eef3eb',
                                            '& > *': { color: '#383d2f' },
                                        }
                                    }}>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: 15, md: 17 }, color: '#636e51', fontFamily: 'Open Sans', fontWeight: 700,
                                            letterSpacing: '.0.5rem', textTransform: 'none'
                                        }}>
                                        New to Susita?  Join now
                                    </Typography>
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} container>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                mt: { xs: 2, md: 0 },
                                backgroundColor: 'transparent',
                            }}
                        >
                            <img
                                src=".\signIn.png"
                                className="responsiveImage"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
