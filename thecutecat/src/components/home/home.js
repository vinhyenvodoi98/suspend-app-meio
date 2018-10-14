import React, { Component } from 'react';
import './home.css';

class Home extends Component {

    constructor(){
        super()
        this.state={
            picture:[],
        }
    }



    render() {
    return (
    <div className="">
        <div className="background-color-navar">
            <p className="hello">MIEOOOOOO : BETA</p>
        </div>
        <div className="picture">
            {/* TODO get picture here */}
            <div className="button-container">
                <button onClick="onLike()" type="button" class="button-size btn btn-success">Like it !!!</button>
                <div className="space-bettew"></div>
                <button onClick="onMeh()" type="button" class="button-size btn btn-danger">Mehhhhhh</button>
            </div>
        </div>        
    </div>
    );
  }
}

export default Home;