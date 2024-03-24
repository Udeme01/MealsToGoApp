import { RestaurantsNavigator } from "./restaurants.navigator";
import { Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";

// expo vector icons import
import Ionicons from "@expo/vector-icons/Ionicons";

// Tab Navigations Import
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import MapScreen Component here
import { MapScreen } from "../../features/map/screens/map.screen";

const SettingsScreen = () => {
  // function implementation here
  return (
    <View>
      <Text>Settings Screen Here!</Text>
    </View>
  );
};

// this below is a function that is gonna create the bottom "TAB NAVIGATION"
const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Restaurants") {
            iconName = "restaurant";
          } else if (route.name === "Map") {
            iconName = "map";
          } else if (route.name === "Settings") {
            iconName = "settings";
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        // tabBarOptions is deprecated...
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
