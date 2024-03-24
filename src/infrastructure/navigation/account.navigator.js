import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

// All Account Screens Import...
import { AccountScreen } from "../../features/accounts/screens/account.screen";
import { LoginScreen } from "../../features/accounts/screens/login.screen";
import { RegisterScreen } from "../../features/accounts/screens/register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="Main"
      component={() => {
        <View>
          <Text>{AccountScreen}</Text>
        </View>;
      }}
    />
    <Stack.Screen
      name="Login"
      component={() => {
        <View>
          <Text>{LoginScreen}</Text>
        </View>;
      }}
    />
    <Stack.Screen
      name="Register"
      component={() => {
        <View> 
          <Text>{RegisterScreen}</Text>
        </View>;
      }}
    />
  </Stack.Navigator>;
};
