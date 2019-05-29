import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actLoginRequest } from './../../actions/index';
import { Redirect } from 'react-router-dom';
import {LoginStore} from '../../localStorage/localStorage';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    onSubmitLogin = (event) => {
        var { email, password } = this.state;
        var user = {
            email,
            password
        }
        this.props.onLogin(user);
        event.preventDefault();
        
        return <Redirect push to="/user-list" />
    }

    render() {
        let itemUser = LoginStore.getData('jwtToken');
        if (itemUser !== null) {
            return <Redirect push to="/user-list" />
        } else {
            return (
                <div className="col-md-6">
                    <form onSubmit={this.onSubmitLogin}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="email"
                                onChange = {this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="password"
                                onChange = {this.onChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            );
        }
        
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onLogin: (user) => {
            dispatch(actLoginRequest(user));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);