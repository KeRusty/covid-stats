import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../Views/Home/Home";
import LocationSelectScreen from "../Views/LocationSelect/LocationSelect";
import SriLankaScreen from "../Views/SriLanka/SriLanka";

//Screen in the Home tab
const DashboardContainer = createStackNavigator(
    {
        Home: HomeScreen,
    },
    {
        initialRouteName: "Home"
    }
);

//Root navigator
export const AppNavigator = createStackNavigator({
    home: {
        screen: HomeScreen
    },
    srilanka: {
        screen: SriLankaScreen
    },
    locationSelect: {
        screen: LocationSelectScreen
    }
}, {
    initialRouteName: 'home',
    headerMode: 'none'
});


export default createAppContainer(AppNavigator);