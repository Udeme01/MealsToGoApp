import React, { createContext, useState, useEffect, useContext } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";

// creates a 'Global Context' with React
export const RestaurantsContext = createContext();

// The ProviderContext is gonna provide the "request", do the "transform" and provide any "state" that happens to that "request"...
export const RestaurantsContextProvider = ({ children }) => {
  // we'll hookUp our 3 piece of state to be controlled...
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
    // add location here so incase it changes it'll have to re-render a new one.
  }, [location]);

  return (
    // the end output of the "request" is gonna be this "array" below and that output is gonna coontrol the interface with the "API".
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
