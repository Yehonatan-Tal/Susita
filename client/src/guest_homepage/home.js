import React, { useState, useRef } from 'react';
import { Box, Container, Grid } from '@mui/material';
import styled, { keyframes, css } from 'styled-components';
import ResponsiveAppBar from './appBar/responsive_navbar';
import SignInForm from './signIn_form/signIn';
import { useSwipeable } from 'react-swipeable';
import Join from './JoinForm/join';
import './test.css';

const GlassDiv = styled.div`
  position: absolute;
  top: ${(props) => props.btnPosition.top};
  left: ${(props) => props.btnPosition.left};
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(241, 241, 241, 0.2);
  backdrop-filter: blur(10px);
  transform: translate3d(0, 0, 0);
`;

const descendFromTop = keyframes`
  0% {
    transform: translateY(-570px);
  }
  30% {
    transform: translateY(10px);
  }
  60% {
    transform: translateY(-10px);
  }
  80% {
    transform: translateY(5px);
  }
  100% {
    transform: translateY(0);
  }
`;

const riseUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-750px);
  }
`;

const JoinWrapper = styled.div`
  animation: ${(props) =>
    props.closing
      ? css`
          ${riseUp} 0.2s ease-out forwards
        `
      : css`
          ${descendFromTop} 1.1s ease-out
        `};
`;

export default function Home() {
  const [joinNowBtnTrigger, setJoinNowBtnTrigger] = useState(false);
  const [btnPosition, setBtnPosition] = useState();
  const [showJoin, setShowJoin] = useState(false);
  const [closing, setClosing] = useState(false);
  const joinRef = useRef();

  const handleJoinNowClick = (ref) => {
    setBtnPosition(ref.getBoundingClientRect());
    setJoinNowBtnTrigger(true);
    setShowJoin(true);
  };

  const handleClickOutside = (event) => {
    if (joinRef.current && !joinRef.current.contains(event.target)) {
      setClosing(true);
      setTimeout(() => {
        setJoinNowBtnTrigger(false);
        setShowJoin(false);
        setClosing(false);
      }, 300);
    }
  };

  const handleSwipeUp = () => {
    setClosing(true);
    setTimeout(() => {
      setJoinNowBtnTrigger(false);
      setShowJoin(false);
      setClosing(false);
    }, 300);
  };

  const swipeHandlers = useSwipeable({ onSwipedUp: handleSwipeUp });


  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
    {joinNowBtnTrigger && (
      <GlassDiv btnPosition={btnPosition}>
        {showJoin && (
          <JoinWrapper closing={closing}>
            <div {...swipeHandlers}>
              <Join ref={joinRef} handleClickOutside={handleClickOutside} />
            </div>
          </JoinWrapper>
        )}
      </GlassDiv>
    )}
      <Container maxWidth="xl" sx={{ pt: '10px' }}>
        <Box sx={{ width: { xs: '100%', sm : '80%' }, mx: 'auto', flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12}>
              <ResponsiveAppBar JoinNowCallBack={handleJoinNowClick} />
            </Grid>
            <Grid item xs={12} md={12}>
              <SignInForm JoinNowCallBack={handleJoinNowClick} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}