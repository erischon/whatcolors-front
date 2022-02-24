import React from "react"
import "./Signin.css"


class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signInEmail: "",
            signInPassword: ""
        }
    }

    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch(`${ this.props.PATH }signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // email: this.state.signInEmail,
                // password: this.state.signInPassword
                email: "tata@gmail.com",
                password: "cookies"
            })            
        })
        .then(response => { return response.json() })
        .then( user => { 
            if (user.id) {
                this.props.loadUser(user)
                this.props.onRouteChange('home');
            }
        })
     }

    render () {
        const { onRouteChange } = this.props
        
        return (
            <section className="signin__container container grid">
                <main className="signin__form">
                    <h1 className="signin__title">Sign In</h1>

                    <div className="signin__form--div">
                        <label className="signin__form--label" htmlFor="email-address">Email</label>
                        <input 
                            className="signin__form--input" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            onChange={ this.onEmailChange } 
                        />
                    </div>
                    <div className="signin__form--div">
                        <label className="signin__form--label" htmlFor="password">Password</label>
                        <input 
                            className="signin__form--input"
                            type="password"
                            name="password" 
                            id="password"
                            onChange={ this.onPasswordChange }
                        />
                    </div>         

                    <div className="signin__form--button">
                        <input
                            onClick={ this.onSubmitSignIn } 
                            className="signin__button"
                            type="submit"
                            value="Sign in" 
                        />
                    </div>

                    <div className="signin__form--register">
                        <p onClick={ () => onRouteChange('register') } className="link">Register</p>
                    </div>
                </main>
            </section>
        )
    }

    
}

export default Signin
