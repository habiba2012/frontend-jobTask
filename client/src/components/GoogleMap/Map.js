import React, { useState } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
    width: '500px',
    height: '500px'
};

const location = {
    lat: 43.6532,
    lng: -79.3832,
};

const onLoad = marker => {
    console.log('marker:', marker)
}

const Map = ({ origin, destination }) => {
    const [directionResponse, setDirectionResponse] = useState(null)
    return (
        <LoadScript
            googleMapsApiKey="AIzaSyDs9bff1o84rXMwb_cua9CGb2nyNnOemdo"
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                location={location}
                zoom={12}
            >
                {
                    origin !== '' && destination !== '' && <DirectionsService
                        // required
                        options={{
                            destination: destination,
                            origin: origin,
                            travelMode: 'DRIVING'
                        }}
                        // required
                        callback={res => {
                            if (res != null) {
                                setDirectionResponse(res)
                            }
                        }}

                    />
                }
                {directionResponse && <DirectionsRenderer
                    // required
                    options={{
                        directions: directionResponse
                    }}

                />}

            </GoogleMap>
        </LoadScript>
    )
}

export default Map