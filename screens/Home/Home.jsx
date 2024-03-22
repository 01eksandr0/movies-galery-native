import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Movies } from "../Movies/Movies";
import { Search } from "../Search/Search";

export const Home = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="Search" component={Search} />
    </Tabs.Navigator>
  );
};
