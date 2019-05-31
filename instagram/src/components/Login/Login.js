import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        this.addTextChange = this.addTextChange.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
    }

    addTextChange(event, value) {
        this.setState({
            [value]: event.target.value
        })
    }

    loginSubmit(event) {

        console.log(this.state.username)
        localStorage.setItem('username', this.state.username);
    }
    
    render() {
        return (

                <div className="loginPage">
                    <form onSubmit={this.loginSubmit}>
                        <input className="loginUser" type="text" placeholder="username" onChange={(event) => this.addTextChange(event, "username")}  />
                        <input className="loginPass" type="password" placeholder="password" onChange={(event) => this.addTextChange(event, "password")} />
                        <input type="submit" value="Login" />
                    </form>
                </div>
        )
    }


};  


export default LoginPage;