import React, { Component } from "react"
// import './App.css';


import Navigation from "./components/Navigation/Navigation.component";
import ImageLinkForm from "./components/ImageLinkForm.component";
import DisplayImage from "./components/DisplayImage.component";
import ColorPanel from "./components/ColorPanel.component";
import Footer from "./components/Footer/Footer.component";

const PATH = "https://erischon-whatcolors.herokuapp.com/"
// const PATH = "http://localhost:3001/"

const initialState = {
  input: "",
  imageUrl: "",
  colorPanel: [],
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState
  }

  getColors = (data) => {
    const Colors = data.outputs[0].data.colors;
    let colorPanel = []
    Colors.forEach(color => {
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
          headers: {"Content-Type": "application/json"}
        })
        .then(response => response.json())
        .catch(console.log)
      }
      this.displaycolorPanel(this.getColors(response))
    })
    .catch(err => console.log(err))
  }



  render() {
    const { imageUrl, colorPanel } = this.state

    const Result = () => (
      <div className="md:grid md:grid-cols-2 items-start container mx-auto mb-16">
        <DisplayImage imageUrl={ imageUrl } />
        <ColorPanel colorPanel={ colorPanel } />
      </div>
    )

    return (
      <div className="App container mx-auto flex flex-col h-screen justify-between mt-1">
        <Navigation />

        <div className="flex flex-col">
          <ImageLinkForm onInputChange={ this.onInputChange } onButtonSubmit={ this.onButtonSubmit } />
          {colorPanel.length > 0 ? <Result /> : null }
        </div>

        <Footer />
      </div>
    )
  }

}

export default App;
