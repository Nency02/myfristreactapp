import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={counter: 1};
    }
    incrementData(){
        if(this.state.counter>=5){
            this.setState({msg: "Sorry Value is >5"})
        }
        else{
            this.setState({counter: this.state.counter+1,msg: ""})
        }
    }
    decrementData(){
        if(this.state.counter<1){
            this.setState({msg: "Sorry Value is <1"})
        }
        else{
            this.setState({counter: this.state.counter-1,msg: ""})
        }
    }
    componentDidMount(){
        
    }
    render() {
        var a=10;
        return (
                
            <>
                <h1>Counter App</h1>
                A value is {a} <br/>
                counter Value is {this.state.counter}<br/>
                <input type="button" value="  + " onClick={this.incrementData.bind(this)}/>
                <input type="button" value="  -  " onClick={this.decrementData.bind(this)}/>
                
                <br/>
                <p style={{color: 'red'}}>{this.state.msg}</p>
            </>
        )
    }
}

export default Counter;