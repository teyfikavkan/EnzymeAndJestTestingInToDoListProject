import React from 'react';
import {connect} from 'react-redux';
import {register} from "../../../actions/userActivationsActions";
import history from "../../../helpers/RouteHistory";

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRedirectRegisterPage = this.handleRedirectRegisterPage.bind(this);
    }

    handleRedirectRegisterPage() {
        history.push('/login');
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({submitted: true});
        const {user} = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const {user, submitted} = this.state;
        return (
            <div className="App">
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <h2>Register</h2>
                        <form name="form" onSubmit={this.handleSubmit}>
                            <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control" name="firstName" value={user.firstName}
                                       onChange={this.handleChange}/>
                                {submitted && !user.firstName &&
                                <div className="warning-color">First Name is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" name="lastName" value={user.lastName}
                                       onChange={this.handleChange}/>
                                {submitted && !user.lastName &&
                                <div className="warning-color">Last Name is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name="username" value={user.username}
                                       onChange={this.handleChange}/>
                                {submitted && !user.username &&
                                <div className="warning-color">Username is required</div>
                                }
                            </div>
                            <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password"
                                       value={user.password}
                                       onChange={this.handleChange}/>
                                {submitted && !user.password &&
                                <div className="warning-color">Password is required</div>
                                }
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Register</button>
                            <button type="submit" className="btn btn-primary btn-block"
                                    onClick={this.handleRedirectRegisterPage}>Cancel
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
        register: (user) => dispatch(register(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
