import React from "react";
import Counter from "./components/Counter"

class App extends React.Component {
  constructor() {
    super()

    this.state = { count: 0, count2: 0 }
  }


  handleClickUp = () => {
    if (this.state.count <= this.state.count2) {
      this.setState({ count: this.state.count + 1 })
    }  
    if (this.state.count === this.state.count2) {
      this.setState({ count2: this.state.count2 + 1 })
    }
  } 

  handleClickDown = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 })
    }
  }



  
  // Counter 2
  handleClickUp2 = () => {
    this.setState({ count2: this.state.count2 + 1 })
  }
  
  handleClickDown2 = () => {
    if (this.state.count2 > 0) {
      this.setState({ count2: this.state.count2 - 1 })
    }
    if (this.state.count === this.state.count2 && this.state.count !== 0) {
      this.setState({ count: this.state.count - 1 })
    }
  }
  


  //   handleChange = (event) => {
  //     this.setState({ count: event.target.count })
  //   }

  // handleChange2 = (event2) => {
  //   this.setState({ count2: event2.target.count2 })
    
  // }


  render() {
    // console.log(this.state.count)

    return (
      <div style={{ textAlign: "center" }}>
        <h1>Counter</h1>
        <div>
          <Counter count={this.state.count} substract={this.handleClickDown} increment={this.handleClickUp}  count2={this.state.count2} substract2={this.handleClickDown2} increment2={this.handleClickUp2} />
        </div>
      </div>
    )
  }
}

export default App;
