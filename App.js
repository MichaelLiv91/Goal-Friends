
import React ,{ useState }  from 'react';
import { View, Text} from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import AppNavigator from './navigation/AppNavigator';
import { Provider } from 'react-redux';
import AuthReducer from './store/reducers/auth'
import {createStore, combineReducers} from 'redux'
import GamesReducer from './store/reducers/games'
import GroupsReducer from './store/reducers/groups'
enableScreens(); // for screen navigation optimization

const rootReducer = combineReducers(
  {
    auth: AuthReducer,
    gamesData: GamesReducer,
    groupsData: GroupsReducer
  });

const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync(
    {
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    }
  );
};


export default function App() {

  
  const [isAppLoaded, SetAppLoaded] = useState(false);

  if (!isAppLoaded) {
    return(
    <AppLoading 
      startAsync={fetchFonts}
      onFinish={() => {SetAppLoaded(true)}}
      onError = {(error)=>{console.log('My error:'+error)}} />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}