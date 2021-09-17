import React from 'react';

import { View,StyleSheet,FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { FEEDS } from '../data/dummy_data';
import { FontAwesome } from '@expo/vector-icons';
import GameItem from '../components/Game/GameItem';


const GamesScreen = (props) => {

   
    const userID = useSelector(state=>state.auth.userId);
    props.route.params = {id:userID}
    
    
    const renderFeed = (itemData) =>
    {
        return <GameItem id={itemData.item.id}/>
    }

    return (
        <View style={styles.screen}>  
            <FlatList
                data={FEEDS}
                renderItem={renderFeed}
                contentContainerStyle={{ paddingHorizontal:20}}
            >
            </FlatList>
            
        </View>);

};


export const tabIcon = (props) => <FontAwesome name="soccer-ball-o" size={props.size} color= {props.color} />

const styles = StyleSheet.create({
    screen:{flex:1}
});
export default GamesScreen;

