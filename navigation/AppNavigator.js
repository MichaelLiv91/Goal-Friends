

import { NavigationContainer } from '@react-navigation/native';



import React from 'react';
import { useSelector } from 'react-redux';
import {AuthNavigator, DrawerNavigator} from '../navigation/Navigators'




const AppNavigator = (props) => {

    const userID = useSelector(state => state.auth.userId);

    return (
        <NavigationContainer>
            {userID ? <DrawerNavigator/>:<AuthNavigator/>}     
        </NavigationContainer>);

};

export default AppNavigator;

