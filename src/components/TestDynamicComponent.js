import React, {Component} from 'react';

export default class DynamicComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: 'nothing'
        };
        this.timer = setInterval(()=>this.setState({message: ''+Math.random()}), 500)
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        return (
            <div>
                <h2>{this.state.message}</h2>
            </div>
        )
    }
}