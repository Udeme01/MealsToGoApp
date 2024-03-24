import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantScreens } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetail } from "../../features/restaurants/screens/restaurants-details.screen";

const RestaurantsStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantsStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantsStack.Screen
        name="NestedRestaurantsScreen"
        component={RestaurantScreens}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantsStack.Navigator>
  );
};
