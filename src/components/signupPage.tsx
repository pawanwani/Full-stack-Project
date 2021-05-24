import React, { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogImg from "../images/blogImg.svg";
import clsx from 'clsx';
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {
    createMuiTheme,
    createStyles,
    withStyles,
    makeStyles,
    Theme,
    ThemeProvider,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';

// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
interface Props { }
const BootstrapButton = withStyles({
    root: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#0063cc',
        borderColor: '#0063cc',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);

const ColorButton = withStyles((theme: Theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: "#4349BE",
        '&:hover': {
            backgroundColor: "#202aec",
        },
    },
}))(Button);
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        textField: {
            width: '25ch',
        },
    }),
);
// const theme = createMuiTheme({
//     palette: {
//         primary: green,
//     },
// });
interface State {    
    password: string;    
    showPassword: boolean;
}

export default function SignupPage({ }: Props): ReactElement { 
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({      
        password: '',
        showPassword: false,
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className="bg-c wh-100">
            <Container className="mt-10 bradius img-shadow">
                <Row className="h-600">
                    <Col xs={7} className="bg-color blb-blt ">
                        <img className="wh-100 blb-blt" src={BlogImg}></img>
                    </Col>
                    <Col xs={5} className="white borderR">
                        <Container>
                            <h1>Login</h1>
                            <p>Please fill in this form to login</p>
                            <hr></hr>
                            <div style={{ textAlign: "center" }}>
                                <div className={classes.root} >
                                    <div className={classes.margin}>
                                        <Grid container spacing={1} alignItems="flex-end">
                                            <Grid item>
                                                <AccountCircle />
                                            </Grid>
                                            <Grid item>
                                                <TextField id="input-with-icon-grid" label="User Name" />
                                            </Grid>
                                        </Grid>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>

                                        <FormControl className={clsx(classes.margin, classes.textField)} style={{ textAlign: 'center' }} variant="filled">
                                            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                                            <FilledInput
                                                id="filled-adornment-password"
                                                type={values.showPassword ? 'text' : 'password'}
                                                value={values.password}
                                                onChange={handleChange('password')}
                                                style={{ backgroundColor: "white" }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                            <br />
                                           

                                        </FormControl>
                                        <div>
                                            <ColorButton variant="contained" color="primary" className={classes.margin}>
                                               Login
                                            </ColorButton>
                                            </div>
                                    </div>
                                </div>
                                <br />
                                <h6>Not a member?<a style={{color:"#4349BE",
                                // hover:"#202aec"
                                }}>signup now</a></h6>
                            </div>

                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}