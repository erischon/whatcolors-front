import React, { Component } from "react"
import './App.css';


import Navigation from './components/Navigation/Navigation';
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm"
import Rank from './components/Rank/Rank';
import DisplayImage from './components/DisplayImage/DisplayImage'
import ColorPanel from "./components/ColorPanel/ColorPanel";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";

// const PATH = "https://shielded-escarpment-52618.herokuapp.com/"
const PATH = "http://localhost:3001/"


const initialState = {
  input: "",
  imageUrl: "",
  colorPanel: [],
  route: 'signin',
  isSignedIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "" 
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  getColors = (data) => {
    const Colors = data.outputs[0].data.colors;
    let colorPanel = []
    Colors.forEach(color => {
      console.log(color.w3c.hex)
      colorPanel.push({hex: color.w3c.hex, name: color.w3c.name, value: color.value}) 
    })
    return colorPanel
  }

  displaycolorPanel = (colorPanel) => {
    this.setState({ colorPanel: colorPanel })
  }

  onInputChange = (event) => {
   this.setState({input: event.target.value})
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    fetch(`${ PATH }imageurl`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          input: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response) {
        fetch(`${ PATH }image`, {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
              id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(count => {
          this.setState(Object.assign(this.state.user, {entries: count}))    
        })
        .catch(console.log)
      }
      this.displaycolorPanel(this.getColors(response))
    })
    .catch(err => console.log(err))
  }

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState)
    } else if (route === "home") {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render() {
    const { isSignedIn, imageUrl, route, colorPanel } = this.state
    return (
      <div className="App">

        <Navigation isSignedIn={ isSignedIn} onRouteChange={ this.onRouteChange }/>
        { route === 'home' 
          ? <div className="main__container">
            <Rank 
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm onInputChange={ this.onInputChange } onButtonSubmit={ this.onButtonSubmit } />
            <DisplayImage imageUrl={ imageUrl } />
            <ColorPanel colorPanel={ colorPanel } />
          </div>
          : (
            route === 'signin'
            ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} PATH={PATH}/>
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} PATH={PATH}/>
          )
        }

      </div>
    )
  }

}

export default App;
