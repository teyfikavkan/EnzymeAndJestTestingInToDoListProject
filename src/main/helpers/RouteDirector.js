import React from 'react';
import {withStyles, createStyles} from '@material-ui/core';
import {Redirect} from 'react-router-dom';
import HomePage from "../components/pages/HomePage/HomePage";
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = createStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));

class RouteDirector extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: '',
                firstName: '',
                lastName: ''
            },
            isLoggedIn: false,
            isProcessDone: false,
        };
    }

    componentDidMount() {
        //TODO sonra eklenecek
        let isLoggedIn = localStorage.getItem('user');
        this.setState({
            isLoggedIn: isLoggedIn,
            isProcessDone: true
        })
    }

    render() {
        const classes = this.props.classes;
        return (
            <div className={classes.root}>
                {!this.state.isProcessDone ? <CircularProgress style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        marginTop: '-50px',
                        marginLeft: '-50px',
                        color: 'white',
                    }} size={100}/>
                    : (this.state.isLoggedIn ? <HomePage user={this.state.user}/> :
                            <Redirect to={{pathname: '/login', state: {from: 'RouteDirector'}}}/>
                    )
                }
            </div>
        )
    };
}

export default withStyles(styles)(RouteDirector);
