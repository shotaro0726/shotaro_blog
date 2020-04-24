import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, TextField, Button, Checkbox, FormControlLabel, Typography} from "@material-ui/core";
import InputIcon from "@material-ui/icons/Input";

const useStyles = makeStyles(theme => ({
    form: {
        width:"100%",
        marginTop: theme.spacing(1),
    },
    button: {
        width:"100%",
        marginTop: theme.spacing(1),
    },
    checkbox: {
        float: "right",
    }
}));

const LoginForm = props => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    return (
        <Box width={256} p={6} border={1}>
            <Typography component="h1" variant="h5">Login</Typography>
            <form noValidate>
                <TextField className={classes.form} id="emailForm" value={email} onChange={e => setEmail(e.target.value)} label="MailAdress"/>
                <TextField className={classes.form} id="passwordForm" value={password} onChange={e => setPassword(e.target.value)} label="Password" type={showPassword ? '': 'password'} autoComplete='current-password'/>
                <FormControlLabel className={classes.checkbox} label="Show-Password" control={<Checkbox checked={showPassword} onChange={e => setShowPassword(e.target.checked)} value="primary" inputProps={{ 'aria-label': 'primary checkbox' }}/> }/>
                <Button className={classes.button} variant="contained" color="success" startIcon={<InputIcon/>} onClick={e=>props.login(email, password)}>Login</Button>
            </form>
        </Box>
    );
}

export default LoginForm;