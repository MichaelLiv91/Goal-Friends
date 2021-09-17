import { createStackNavigator } from '@react-navigation/stack';

import GamesScreen from '../screens/GamesScreen';
import React from 'react';

const Stack = createStackNavigator();

export const GameStackNavigator = (props) => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, presentation: 'card'}}>

            <Stack.Screen
                name='game'
                component={GamesScreen} />
        </Stack.Navigator>
    );
};