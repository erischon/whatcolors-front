import React from "react"
import "./register.css"

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            name: ""
        }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onSubmitSignIn = () => {
       fetch(`${ this.props.PATH }register`, {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
            },
           body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
           })
       })
       .then(response => { return response.json() })
       .then(user => {
         if (user.id) {
            this.props.loadUser(user);
            this.props.onRouteChange('home');
         }
       })
    }

    render () {
        const { onRouteChange } = this.props

        return (
            <section className="register__container container grid">
                <main className="register__form">
                    <h1 className="register__title">Register</h1>

                    <div className="register__form--div">
                        <label className="register__form--label" htmlFor="name">Name</label>
                        <input
                            className="register__form--input"
                            type="text"
                            name="name"
                            id="name"
                            onChange={ this.onNameChange }
                        />
                    </div>
                    <div className="register__form--div">
                        <label className="register__form--label" htmlFor="email-address">Email</label>
                        <input 
                            className="register__form--input" 
                            type="email" 
                            name="email-address"  
                            id="email-address" 
                            onChange={ this.onEmailChange }
                        />
                    </div>
                    <div className="register__form--div">
                        <label className="register__form--label" htmlFor="password">Password</label>
                        <input 
                            className="register__form--input"
                            type="password" 
                            name="password"  
                            id="password"
                            onChange={ this.onPasswordChange } 
                        />
                    </div>

                    <div className="register__form--button">
                        <input
                            onClick={ this.onSubmitSignIn } 
                            className="register__button"
                            type="submit"
                            value="Register" />
                    </div>
    
                </main>

            </section>
        )
    }

}

export default Register