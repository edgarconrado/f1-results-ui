import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Stack, withLayoutContext } from "expo-router";
import React from 'react';
import { Colors } from '../../../Constans/Colors';

const Tab = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Tab.Navigator);

export default function RaceLayout() {
    return (
        <>
            <Stack.Screen options={{ title: 'Race Details', }} />
            <TopTabs screenOptions={{
                tabBarLabelStyle: {
                    fontFamily: 'F1-Bold'
                },
                tabBarStyle: { backgroundColor: Colors.primary },
                tabBarInactiveTintColor: 'gainsboro',
                tabBarActiveTintColor: 'white',
                tabBarIndicatorStyle: {
                    backgroundColor: 'white',
                    height: 5,
                }
            }}
            >
                <TopTabs.Screen name='index' options={{ title: 'Details' }} />
            </TopTabs>
        </>
    );
}