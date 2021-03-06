import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Row, Col, Button } from 'reactstrap';
import signup from './../../Asset/images/signup-image.webp';
import * as ActionTypes from '../../Store/Action/Action';
import './Css.css';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(2),
        boxShadow: "0px 0px 1px 1px lightgrey"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const Signup = props => {
    const classes = useStyles();
    const [term, setTerm] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [psw, setPsw] = useState(true);
    const [nameVal, setnameVal] = useState(true);
    const [emailVal, setemailVal] = useState(true);
    const [cityVal, setcityVal] = useState(true);

    const termCondition = () => {
        setTerm(!term);
    };

    const handleTextChange = (event, name) => {
        const value = event.target.value;

        if (name === "email") {
            setEmail(value);
            if (!value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
                setemailVal(true)
            else
                setemailVal(false)
        }
        else if (name === "password") {
            setPassword(value);
            if (!value.match(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).{5,}$/))
                setPsw(true)
            else
                setPsw(false)
        }
        else if (name === "city") {
            setCity(value);
            if (!value || value.trim().length === 0)
                setcityVal(true)
            else
                setcityVal(false)
        }
        else if (name === "name") {
            setName(value);
            if (!value || value.trim().length === 0)
                setnameVal(true);
            else
                setnameVal(false);
        }
    };

    const registerHandler = () => {
        props.createUser(name, password, email, city);
        props.history.push('/');
    }

    return (
        <Container component="main" maxWidth="md">
            <div className={classes.paper}>
                <form className={classes.form}>
                    <Row>
                        <Col>
                            <h1>Sign up</h1>
                            <TextField
                                id="input-with-icon-textfield"
                                placeholder="Your Name"
                                error={nameVal}
                                onChange={(event) => handleTextChange(event, "name")}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i className="zmdi zmdi-account zmdi-hc-lg"></i>
                                        </InputAdornment>
                                    ),
                                }}
                            /><br /><br />
                            <TextField
                                id="input-with-icon-textfield"
                                placeholder="Email"
                                error={emailVal}
                                onChange={(event) => handleTextChange(event, "email")}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i className="zmdi zmdi-email"></i>
                                        </InputAdornment>
                                    ),
                                }}
                            /><br /><br />
                            <TextField
                                id="input-with-icon-textfield"
                                placeholder="Password"
                                type="password"
                                error={psw}
                                onChange={(event) => handleTextChange(event, "password")}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i className="zmdi zmdi-lock"></i>
                                        </InputAdornment>
                                    ),
                                }}
                            /><br /><br />
                            <TextField
                                id="input-with-icon-textfield"
                                placeholder="City"
                                type="text"
                                error={cityVal}
                                onChange={(event) => handleTextChange(event, "city")}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <i className="zmdi zmdi-pin"></i>
                                        </InputAdornment>
                                    ),
                                }}
                            /><br /><br />
                            <Checkbox
                                checked={term}
                                onChange={() => termCondition()}
                            /> I agree all statements in <span style={{ textDecoration: 'underline' }}>Term of services</span>
                            <br /><br />
                            <Button style={{ backgroundColor: '#6384f9' }}
                                disabled={!term || psw || nameVal || emailVal}
                                onClick={() => registerHandler()}
                            >Register</Button>
                        </Col>
                        <Col>
                            <img src={signup} alt="signup" /><br />
                        </Col>
                    </Row>
                </form>
            </div>
        </Container>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (name, password, email, city) => {
            dispatch({
                type: ActionTypes.createUser,
                payload: {
                    "name": name, "password": password, "email": email, "city": city
                }
            })
        },
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Signup);


