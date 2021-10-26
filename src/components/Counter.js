import React from "react";

class Counter extends React.Component {


    render() {

        return (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <div className="container" style={{ padding: "50px", margin: "10px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid black", width: "560px" }}>
                    <button style={{ background: "white", fontSize: "30px", border: "solid 2px black", padding: "32px 40px", borderRadius: "50%", margin: "50px" }} onClick={this.props.substract}>-</button>
                    <h2 style={{ padding: "30px" }}>{this.props.count}</h2>
                    <button style={{ background: "white", fontSize: "30px", border: "solid 2px black", padding: "32px 40px", borderRadius: "50%", margin: "50px" }} onClick={this.props.increment}>+</button>
                </div>
                <div className="container" style={{ padding: "50px", margin: "10px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid black", width: "560px" }}>
                    <button style={{ background: "white", fontSize: "30px", border: "solid 2px black", padding: "32px 40px", borderRadius: "50%", margin: "50px" }} onClick={this.props.substract2}>-</button>
                    <h2 style={{ padding: "30px" }}>{this.props.count2}</h2>
                    <button style={{ background: "white", fontSize: "30px", border: "solid 2px black", padding: "32px 40px", borderRadius: "50%", margin: "50px" }} onClick={this.props.increment2}>+</button>
                </div>
            </div>
        )
    }
}

export default Counter;