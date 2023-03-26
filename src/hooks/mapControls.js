import * as React from 'react';
import {useCallback, useState} from 'react';
import Map, {Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import Typography from "@mui/material/Typography";

const initialInfo = {longitude: 2.272, latitude: 48.840, title: "Things to Do in Paris!", description: "Here are our Paris recommendations, find the bride's favorite spots in pink, the groom's in blue, and our favorite breakfast/lunch/dinner spots in white. Please share any recommendations you might find while exploring!"}

export default function MapControls() {
    const [popupInfo, setPopupInfo] = useState(initialInfo);

    const onClick = useCallback(evt => {
        const feature = evt.features[0]
        if (feature)
        {  
            const info = {longitude: evt.lngLat.lng, latitude: evt.lngLat.lat, title: feature.properties.title, description: feature.properties.description, address: feature.properties.address, image: feature.properties.image}
            setPopupInfo(info);
        }
    }, []);

    return (
        <Map
            initialViewState={{
                longitude: 2.272,
                latitude: 48.840,
                zoom: 11.42,
                bearing: 0,
                pitch: 0
            }}
            style={{position: 'absolute', width: '100vw', height: '100vh'}}
            mapStyle="mapbox://styles/seanathanmlee/clfoj7eu2000p01p6bctwob2s"
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            interactiveLayerIds={["bride-paris-destinations2", "groom-paris-destinations", "food-paris-destinations"]}
            onClick={onClick}
        >
            {popupInfo && (
                <Popup
                    longitude={popupInfo.longitude}
                    latitude={popupInfo.latitude}
                    anchor="top"
                    onClose={() => setPopupInfo(null)}>
                        <Typography variant="body1" marked="center">
                            {popupInfo.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {popupInfo.address}
                        </Typography>
                        <img src={popupInfo.image} width="100%" height="auto"/>
                        <Typography variant="body2" color="text.secondary">
                            {popupInfo.description}
                        </Typography>
                </Popup>)}
        </Map>
    );
}