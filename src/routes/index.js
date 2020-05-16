import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Library from '../screens/Library';

const Stack = createStackNavigator();

function myStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    header: () => null,
                }} />
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const Routes = () => (
    <>
        <StatusBar barStyle="light-content" />
        <NavigationContainer theme={DarkTheme}>
            <Tab.Navigator
                initialRouteName="Home"
                activeColor="#FFF"
                inactiveColor="#444"
                barStyle={{
                    // backgroundColor: '#000'
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={myStack}
                    options={{
                        title: "Home",
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons color={color} name="home" size={26} />
                        ),
                    }} />
                <Tab.Screen
                    name="Search"
                    component={Search}
                    options={{
                        title: "Search",
                        tabBarLabel: "Search",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons color={color} name="search" size={26} />
                        ),
                    }} />
                <Tab.Screen
                    name="Library"
                    component={Library}
                    options={{
                        title: "Library",
                        tabBarLabel: "Library",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons color={color} name="book" size={26} />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    </>
);

export default Routes;