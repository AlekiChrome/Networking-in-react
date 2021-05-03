import React, { Component } from 'react'
import Dog from './Dog'
import NumberOfDogs from "./NumberOfDogs"

export class App extends Component {
  constructor() {
    super()
    this.state = {
      dogCount: 0,
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState ({
      dogCount: e.target.value
    })
  }


  render() {
    return (
      <div>
        <h2>Random Dog API</h2>
        <NumberOfDogs
        dogCount={this.state.dogCount}
        handleChange={this.handleChange}/>
        <Dog />
      </div>
    )
  }
}

export default App
