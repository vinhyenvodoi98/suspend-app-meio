import React, { Component } from 'react';
import './home.css';

class Home extends Component {

    constructor(){
        super()
        this.state={
            pictures:[]
        }
    }

    componentDidMount(){
        [1,2,3,4,5,6].forEach(() => this.addImage())
       
    }

    addImage = () => {
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(results=>{
            return results.json();
        })
        .then(data=>{
            console.log(data[0].url);
            let picture = data[0].url;
            this.setState(({pictures}) => ({pictures: [...pictures, picture]}))
        });
    }

    getapi(){
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(results=>{
            return results.json();
        })
        .then(data=>{
            console.log(data[0].url);
            let picture = data[0].url;
            this.setState(({pictures}) => ({pictures: [...pictures, picture]}))
        });
    }

    onLike = ()=>{
        
    }

    onMeh = ()=>{
        console.log("no");
    }
    

    render() {
        console.log(this.state)
    return (
    <div className="">
        <div className="background-color-navar">
            <p className="hello">MIEOOOOOO : BETA</p>
        </div>
        <div className="all-picture">
            {this.state.pictures.map(pic => (
                <div className="picture" key={pic}>
                {/* TODO get picture here */}
                <img className="picture-cat" src={pic} alt="hello1"/> 
                
                <div className="button-container">
                    <button onClick={this.onLike} type="button" className="button-size btn btn-success">Like it !!!</button>
                    <div className="space-bettew"></div>
                    <button onClick={this.onMeh} type="button" className="button-size btn btn-danger">Mehhhhhh</button>
                </div>
            </div>  
            ))} 
            
        </div>     
    </div>
    );
  }
}

export default Home;