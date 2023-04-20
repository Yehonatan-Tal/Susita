import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { GoogleAuth } from '../oAuth/oAuthButtons'
import susitaLogo from './susita_logo.png';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        susita.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
      darker: '#3d3d3d',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});





const Join = React.forwardRef((props, ref) => {

  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [viewSize, setViewSize] = React.useState(isXs ? 'xs' : isSm ? 'sm' : 'md');


  React.useEffect(() => {
    setViewSize(isXs ? 'xs' : isSm ? 'sm' : 'md');
  }, [isXs, isSm]);


  const containerRef = useRef(null);
  useImperativeHandle(ref, () => ({
    contains(node) {
      return containerRef.current.contains(node);
    },
  }));



  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth={false} onClick={(e) => e.stopPropagation()} ref={containerRef} sx={{width: { xs: '300px', sm: '370px' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
        <CssBaseline />
        <Paper
          elevation={6}
          sx={{
            width: { xs: '300px', sm: '370px' },
            height: { xs: 'auto', sm: 'auto' },
            mt: 8,
            p: { xs: 3, sm: 4 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '30px',
            bgcolor: 'rgba(260, 260, 260, 0.7)',
            border: '0px solid #686869',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Box
            sx={{
              width: { xs: '30px', sm: '40px' },
              height: 'auto',
              overflow: 'hidden',
            }}
          >
            <img
              src={susitaLogo}
              alt="Susita Logo"
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </Box>
          <Typography
            variant="h3"
            style={{ fontFamily: 'Kalam' }}
            noWrap
            sx={{
              mt: { xs: '5px', sm: '11px' },
              fontSize: { xs: '2rem', sm: '2.8rem' },
              fontWeight: 300,
              color: '#Cb6605',
              textDecoration: 'none'
            }}
          >
            Join Susita
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              mt: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TextField
              margin="normal"
              required
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              sx={{
                width: { xs: '259px', sm: '320px' }, height: 'auto',
                '& .MuiInputBase-root': {
                  backgroundColor: 'transparent',
                  color: theme.palette.gray.main,
                },
              }}
            />
            {/* <TextField
              margin="normal"
              required
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{
                width: { xs: '259px', sm: '320px' }, height: 'auto',
                '& .MuiInputBase-root': {
                  backgroundColor: 'transparent',
                  color: theme.palette.gray.main,
                },
              }}
            /> */}
            
            <Box sx={{ width: { xs: '259px', sm: '320px' }, height: 'auto', }}>
              <Typography
                sx={{
                  ml: 1.5,
                  fontSize: { xs: 10, md: 11 },
                  fontFamily: 'Open Sans',
                  fontWeight: 300,
                  display: 'flex',
                  color: '#949494',
                }}
              >
                <span >By clicking Agree &amp; Join, you agree to the Susita <a href="https://www.susita.co.il/legal/user-agreement?trk=registration-frontend_join-form-user-agreement" data-tracking-will-navigate="" data-tracking-control-name="registration-frontend_join-form-user-agreement">User Agreement</a>, <a href="https://www.susita.com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy" data-tracking-will-navigate="" data-tracking-control-name="registration-frontend_join-form-privacy-policy">Privacy Policy</a>, and  <a target="_blank" href="https://www.linkedin.com/legal/cookie-policy?trk=registration-frontend_join-form-cookie-policy" data-tracking-will-navigate="" data-tracking-control-name="registration-frontend_join-form-cookie-policy">Cookie Policy</a>. </span>
              </Typography>
            </Box>
            
            <Button
              style={{ borderRadius: '30px' }}
              fullWidth
              color='primary'
              variant="contained"
              sx={{
                mt: 1, mb: 3, width: { xs: '259px', sm: '320px' }, height: 'auto',
                '&:hover': {
                  '& > *': { color: '#Eef3eb' },
                }
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 15, sm: 17 }, fontFamily: 'Open Sans', fontWeight: 500,
                  letterSpacing: '.0.5rem', textTransform: 'none'
                }}>
                Agree & Join
              </Typography>
            </Button>
            <Box sx={{ width: { xs: '259px', sm: '320px' }, height: 'auto', }}>
            <Divider sx={{ mb: '15px' }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: 11, md: 15.5 }, fontFamily: 'Open Sans', fontWeight: 300,
                  letterSpacing: '.0.5rem', textTransform: 'none',
                  display: 'flex',
                  color: '#949494',
                  textDecoration: 'none'
                }}
              >
                or join in with
              </Typography>
            </Divider>
            </Box>
            <Box sx={{
              height: 'auto',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <GoogleAuth idSuffix = '2' viewSize={viewSize} />
            </Box>
          </Box>
        </Paper>
        <Copyright sx={{ mt: 3, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
});
export default Join;