import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import TopPageTemplate from '../templates/TopPageTemplate';

const useStyles = makeStyles(theme => ({
    page: {
        margin: 60,
    }
}));

const TopPage = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/posts/')
            .then(res=>{setPosts(res.data);})
            .catch(err=>{console.log(err);});
    },[]);
    return(
        <TopPageTemplate classes={classes.page} posts={posts}/>
    );
}

export default TopPage;