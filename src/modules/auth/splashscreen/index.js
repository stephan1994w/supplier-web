import React from 'react';

import logo from '@sg-utils/resources/svg/logo.svg'

import classes from './style.module.sass';

function SplashScreen() {
  return (
    <div className={classes.root}>
      <img src={logo} className={classes.logo} alt={'logo'} />
    </div>
  );
};

export default SplashScreen;