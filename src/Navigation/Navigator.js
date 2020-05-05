import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../Views/Home/Home";

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
}, {
    initialRouteName: 'home',
    headerMode: 'none'
});


export default createAppContainer(AppNavigator);