import RegistrationScreen from "./screens/RegisterScreen/RegisterScreen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { Home } from "./screens/Home/Home";
import { MoreInfo } from "./screens/MoreInfo/MoreInfo";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MoreInfo" component={MoreInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
