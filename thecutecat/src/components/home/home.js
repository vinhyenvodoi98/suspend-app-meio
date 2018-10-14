import React, { Component } from 'react';
import './home.css';

class Home extends Component {

    constructor(){
        super()
        this.state={
            picture:[],
        }
    }

    componentDidMount(){
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(results=>{
            return results.json();
        })
        .then(data=>{
            console.log(data[0].url);
            let picture = data[0].url;
            this.setState({picture:picture});
            return(
                <div>
                    <img src={picture} alt="hello"/>
                </div> 
            );

        });
    }

    onLike = ()=>{
        console.log("like");
    }

    onMeh = ()=>{
        console.log("no");
    }
    

    render() {
    return (
    <div className="">
        <div className="background-color-navar">
            <p className="hello">MIEOOOOOO : BETA</p>
        </div>
        <div className="picture col">
            {/* TODO get picture here */}
            
            <img className="picture-cat" src={this.state.picture} alt="hello"/> 
            
            <div className="button-container">
                <button onClick={this.onLike} type="button" className="button-size btn btn-success">Like it !!!</button>
                <div className="space-bettew"></div>
                <button onClick={this.onMeh} type="button" className="button-size btn btn-danger">Mehhhhhh</button>
            </div>
        </div>        
    </div>
    );
  }
}

export default Home;