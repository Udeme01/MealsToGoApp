import React, { useState, useContext, useEffect } from "react";
// import MapView, { MapMarker } from "react-native-maps";
import MapView from "react-native-maps";
import styled from "styled-components";
import { Search } from "../components/search.component";

// import both location and restaurants context to use them in here...
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/map-callout..component";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  //   The latDelta determines how close the zoom level is going to be on the map
  const [latDelta, setLatDelta] = useState(0);
  //   The viewport of the location determines where on the map it should focus
  const { lat, lng, viewport } = location;

  //   The useEffect() calculates exactly where to render and it's going to change based on location and viewport changes.
  // I added additional checks to ensure that the "viewport" object and it's properties are defined before accessing them, so I modified the useEffect block to handle potential "undefined" values:...
  // By adding these conditional checks within the useEffect block, I ensured that the code only attempts to access the 'northeast and southeast' properties of the 'viewport' object if they are defined.
  useEffect(() => {
    if (viewport && viewport.northeast && viewport.southeast) {
      const northeastLat = viewport.northeast.lat;
      const southeastLat = viewport.southeast.lat;
      setLatDelta(northeastLat - southeastLat);
    }
  }, [location, viewport]);

  return (
    <>
      <Search />
      {/* Then the Map take 'coordinates as well or call it 'region' below */}
      {/* {lat && lng && ( */}
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {/* React Native Maps have something called 'MapView.Marker' */}
        {restaurants.map((restaurant) => {
          return null;
          // return (
          //   <>
          //     <MapView.Marker
          //     key={restaurant.name}
          //     title={restaurant.name}
          //     coordinate={{
          //       latitude: restaurant.geometry.location.lat,
          //       longitude: restaurant.geometry.location.lng,
          //     }}
          //     >
          //       <MapCallout />
          //     </MapView.Marker>
          //   </>
          // );
        })}
      </Map>
      {/* )} */}
    </>
  );
};
