import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../../actions/userActivationsActions'
import history from '../../../helpers/RouteHistory';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRedirectRegisterPage = this.handleRedirectRegisterPage.bind(this);
    }

    handleRedirectRegisterPage() {
        history.push('/register');
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
                [name]: value
            }
        );
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({submitted: true});
        const {username, password} = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const {username, password, submitted} = this.state;
        return (
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form name="form" onSubmit={this.handleSubmit}>
                            <h3>Sign In</h3>

                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" className="form-control" name="username" placeholder="Enter username"
                                       onChange={this.handleChange}/>
                                {submitted && !username &&
                                <div className="warning-color">Username is required</div>
                                }
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password"
                                       placeholder="Enter password" onChange={this.handleChange}/>
                                {submitted && !password &&
                                <div className="warning-color">Password is required</div>
                                }
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                </div>
                            </div>

                            <button className="btn btn-primary btn-block">Login</button>
                            <button className="btn btn-primary btn-block"
                                    onClick={this.handleRedirectRegisterPage}>Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => dispatch(login(username, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
