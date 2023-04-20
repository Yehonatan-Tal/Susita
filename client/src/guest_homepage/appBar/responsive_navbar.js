import React from 'react';
import DesktopAppBar from './DesktopAppBar';
import MobileAppBar from './MobileAppBar';
import useMediaQuery from '@mui/material/useMediaQuery';

const ResponsiveAppBar = (props) => {
  const isMobile = useMediaQuery('(max-width: 900px)');

  return isMobile ? <MobileAppBar {...props} /> : <DesktopAppBar {...props} />;
};

export default ResponsiveAppBar;
