import React from "react";

class Sumdemo extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    doSum(){
        var a=parseInt(this.state.txt1)
        var b=parseInt(this.state.txt2)

        var c=a+b
        this.setState({ans:"Sum is "+c})
    }
    render(){
        return(
            <>
                <h1>Sum </h1>
                No1: <input type='text' onChange={(e)=>this.setState({txt1:e.target.value})}/> 
                No2: <input type='text' onChange={(e)=>this.setState({txt2:e.target.value})}/> 
                <input type='button' value="+" onClick={this.doSum.bind(this)}/>
                {this.state.ans}
           </>
        )
    }
}
export default Sumdemo