import { createStackNavigator } from '@react-navigation/stack';


import React from 'react';
import GroupScreen from '../screens/Groups/GroupScreen';
import GroupsScreen from '../screens/Groups/GroupsScreen';

const Stack = createStackNavigator();

export const GroupsStackNavigator = (props) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, presentation: 'card' }}>

            <Stack.Screen
                name='GroupsScreen'
                component={GroupsScreen} />
            <Stack.Screen
                name='GroupScreen'
                component={GroupScreen} />
        </Stack.Navigator>
    );
};