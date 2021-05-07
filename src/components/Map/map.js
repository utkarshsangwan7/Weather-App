import React from 'react';
import './map.css';
import MapBox from 'mapbox-gl';
import ReactDOM from 'react-dom';
MapBox.accessToken='pk.eyJ1IjoidXRrYXJzaHNhbmd3YW4iLCJhIjoiY2tvNnVxeDduMGl3MjJvcGRqaDkwMW04ZCJ9.9NttZj-5E3WNXo16znKaOw';

class Map extends React.Component{
    constructor(props){
        console.log('contructor running');
        super(props);
        this.state={
            lat:'',
            lon:'',
            zoom:9
        }
    }
    componentDidMount(){
        this.setState({lat:this.props.lat,lon:this.props.lon},()=>{
            if(this.state.lat){
                // eslint-disable-next-line
                const map = new MapBox.Map({
                    container: document.getElementById('map'),
                    style: 'mapbox://styles/mapbox/streets-v11',
                    center: [this.state.lon, this.state.lat],
                    zoom: 9
                    }); 
            }
        });
    }

    componentDidUpdate(prevProps){
        if(this.state.lat!==prevProps.lat){
            // eslint-disable-next-line
            const map = new MapBox.Map({
                container: document.getElementById('map'),
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [this.props.lon, this.props.lat],
                zoom: 9
                });
        }
    }
    
    render(){
        return(
            <div id="map">
            </div>
        );
    }
}
ReactDOM.render(<Map />, document.getElementById('mapi'));
export default Map;