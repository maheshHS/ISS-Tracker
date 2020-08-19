import React, { useEffect, useState } from "react";
import { scaleLinear } from "d3-scale";
import GeoData from '../../assets/geo.json'
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from "react-simple-maps";
import classes from './Map.module.css' 

//"#ffedea", "#ff5233"

//const geoUrl =
//    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const geoUrl = GeoData;

const colorScale = scaleLinear()
    .domain([0.29, 0.68])
    .range(["#d1ffd6", "#fc6565"]);

const generateRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}

const Map = () => {

    return (
        <ComposableMap
            projectionConfig={{
                rotate: [-10, 0, 0],
                scale: 130
            }} >
            <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
            <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
           
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill={colorScale(generateRandomNumber(0, 0.6))}
                                />
                            );
                        })
                    }
                </Geographies>
        </ComposableMap>
    );
};

export default Map;