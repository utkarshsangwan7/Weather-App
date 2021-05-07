import React from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Map from './components/Map/map';
import './App.css';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            address:'',
            location:{},
            current:{},
            flag:0
        }
    }
    onInputValueChange = (event)=>{
        this.setState({address:event.target.value,flag:0});

    }
    onClickSearch = (event)=>{
        event.preventDefault();
        fetch('https://murmuring-citadel-10152.herokuapp.com/weather',{
            method:'post',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({
                address:this.state.address
            })
        })
        .then(res=>res.json())
        .then(response=>{
            this.setState({location:response.location,current:response.current,flag:1},()=>{
            });   
        })
    }
    render(){
        return(
            <div className='Container'>
                <Header onInputValueChange={this.onInputValueChange} onClickSearch={this.onClickSearch}/>
                <div className='body-container'>
                    {
                        Object.keys(this.state.location).length>0&&this.state.flag
                        ?<Map lat={this.state.location.lat} lon={this.state.location.lon}/>
                        :console.log('Loading the map')
                    }
                    {
                        Object.keys(this.state.current).length>0&&this.state.flag
                        ?<Body current={this.state.current}/>
                        :console.log('Loading the Weather info')
                    }
                
                </div>
            </div>
        );
    }
}

export default App;
