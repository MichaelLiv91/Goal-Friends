
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';

import WelcomeScreen from '../screens/WelcomeScreen';
import Colors from '../constants/Colors';
import Logo from '../components/Logo';
import { Text, View, SafeAreaView, StyleSheet, I18nManager, TouchableOpacity, Image } from 'react-native';
import { Logout } from '../store/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleLineIcons } from '@expo/vector-icons';

import UserFeedScreen, {screenOptions as userFeedOption , tabIcon as feedIcon} from '../screens/UserFeedScreen';
import GroupsScreen from '../screens/Groups/GroupsScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import GamesScreen, {tabIcon as GameIcon} from '../screens/GamesScreen';
import { GameStackNavigator } from './GameNavigator';
import { GroupsStackNavigator } from './GroupsNavigation';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultNavOption = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
    },
    headerTitleStyle: {
        fontFamily: "open-sans"
    },
    headerTitleAlign: 'center',
    headerBackTitleStyle: {
        fontFamily: "open-sans"
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle:()=><Logo/>
};


export const AuthNavigator = (props) => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={WelcomeScreen}
                options={{...defaultNavOption, headerTitle:'Login'}} />
        </Stack.Navigator>)
}


export const DrawerNavigator = (props) => {
   
    const dispatch = useDispatch();
    return (
        <Drawer.Navigator initialRouteName="UserFeed"
            drawerContent={props => {
                return (
                    <View style={{ flex: 1, paddingTop: 20 }}>
                        <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                            <DrawerItemList  {...props} />
                            <TouchableOpacity
                                onPress={() => {
                                    dispatch(Logout())
                                }}
                                style={styles.drawerItemsContainer}>
                                <SimpleLineIcons
                                    name="logout"
                                    size={24}
                                    color='white'
                                />
                                <Text style={styles.logoutText}>Logout</Text>
                            </TouchableOpacity>
                        </SafeAreaView>
                    </View>
                );
            }}
            screenOptions={{
                drawerActiveTintColor:Colors.primaryColor,
                ...defaultNavOption
            }}
        >
            <Drawer.Screen name="My Feed" component={FeedTabNavigator}/>
            <Drawer.Screen name="My Profile" component={UserProfileScreen}/>
            <Drawer.Screen name="Groups" component={GroupsStackNavigator}/>
                  
        </Drawer.Navigator>
    );

    
};

const defaultTabOptions = {

    tabBarActiveBackgroundColor: Colors.primaryColor,
    tabBarActiveTintColor: 'white',
    tabBarInactiveBackgroundColor: 'white',
    tabBarInactiveTintColor: Colors.primaryColor,
    headerShown: false,
    tabBarLabelStyle: {
        fontSize: 13
    },
}

const tabOrder = I18nManager.isRTL ? <Tab.Navigator
    initialRouteName="Feed"
    screenOptions={defaultTabOptions}>
    <Tab.Screen name="Games" component={GameStackNavigator}
        options={{
            tabBarIcon: GameIcon
        }} />
    <Tab.Screen name="Feed" component={UserFeedScreen}
        options={{
            tabBarIcon: feedIcon
        }}
    />

</Tab.Navigator> :
    <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={defaultTabOptions}>

        <Tab.Screen name="Feed" component={UserFeedScreen}
            options={{
                tabBarIcon: feedIcon
            }}
        />
        <Tab.Screen name="Games" component={GameStackNavigator} 
        options={{
            tabBarIcon: GameIcon
        }}/>
    </Tab.Navigator>

export const FeedTabNavigator = (props) => {
    return (tabOrder);
}

const styles = StyleSheet.create({

    drawerItemsContainer:
    {
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        flexDirection:I18nManager.isRTL ? 'row-reverse':'row',
        backgroundColor:'#f00e0e',
        width:'80%',
        padding:5,
        marginHorizontal:30,
        marginTop:5,
        borderRadius:10
    },
    logoutText:{
        color:'white',
        marginHorizontal:5
    },
    drawerIcon:
    {
        paddingHorizontal:5
    }
});
