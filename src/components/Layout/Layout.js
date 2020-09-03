import React from 'react';
import Map from '../Map/Map';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';


class Layout extends React.Component {
    state = {
        coordinates: null
    }

    componentDidMount() {
        this.HitApi = setInterval(() => { axios.get("http://api.open-notify.org/iss-now.json")
        .then((response) => {
            let cords = Object.values(response.data.iss_position).map((val) => {
                return parseFloat(val); 
            });
            this.setState({coordinates: cords});
        })}, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.HitApi);
    }

    render() {
        let map = null;
        if(this.state.coordinates){
            map = <Map cods={this.state.coordinates}></Map>;
        }
        return(
            <div>
               <Navbar></Navbar>
                {map}
            </div>
        );
    }
}

export default Layout;