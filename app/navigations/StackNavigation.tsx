import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import Home from "../screens/Home";

const DrawerNavigation = createDrawerNavigator({ Home: Home });

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Home: Home
  },
  {
    headerMode: "none"
  }
);

export default StackNavigation