import React from "react";
import { scaleLinear } from "d3-scale";
import GeoData from '../../assets/geo.json'
import { ComposableMap, Geographies, Geography, Sphere, Graticule, Marker } from "react-simple-maps";
import classes from './Map.module.css'
import issimg from '../../assets/iss_img.svg'

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

const Map = (props) => {

    return (
        <React.Fragment>
            <ComposableMap
                className={classes.Map}
                width={980}
                height={440}
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

                <Marker coordinates={props.cods}>
                    <g
                        fill="none"
                        stroke="#FF5533"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transform="translate(-12, -24)">
                        <circle cx={10} cy={10} r={8} fill="#607D8B" stroke="#607D8B" />
                        {/*<circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />*/}
                    </g>

                    <text
                        textAnchor="middle"
                        y={10}
                        x={-2}
                        style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}>
                        {"ISS"}
                    </text>
                </Marker>


            </ComposableMap>
        </React.Fragment>
    );
};

export default Map;


/*
    //[-68.1193, -16.4897]   */