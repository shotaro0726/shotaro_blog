import React, {Fragment} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import {AppBar, Toolbar, Typography} from '@material-ui/core';
import { BLOG_TITLE } from '../constants';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
}))

const Header = () => {
    const classes = useStyles();
    return (
      <Fragment>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="constants" noWrap>
                {BLOG_TITLE}
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.offset}/>
      </Fragment>
    );
}

export default Header;