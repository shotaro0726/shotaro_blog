import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Copyright from '../atoms/Copyright';


const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}))

const Footer = () => {
    const classes = useStyles();
    return(
        <footer className={classes.footer}>
            <Copyright/>
        </footer>
    );
}

export default Footer;