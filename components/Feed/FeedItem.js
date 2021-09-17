import React from 'react';

import { View, Text, StyleSheet, I18nManager, Image, Dimensions } from 'react-native';
import { FEEDS, USERS } from '../../data/dummy_data';
import Card from '../Card';


const FeedItem = (props) => {

    const DAY_EXTRACTOR = 1000 * 60 * 60 * 24;


    const currentFeed = FEEDS.find((elem) => elem.id === props.id);
    const owner = USERS.find((elem) => elem.id === currentFeed.ownerID);
    const owenerDetails = owner ? owner.userDetails: null
    const today = new Date()
    const isToday = parseInt(Math.floor(today.getTime() / DAY_EXTRACTOR)) == parseInt(Math.floor(currentFeed.date.getTime() / DAY_EXTRACTOR));
    

    if(owenerDetails)
    {
        return (

            <Card style={styles.card}>

                <View style={styles.miscData}>
                    <View style={styles.userData}>
                        <View style={styles.imgContainer}>
                            <Image source={{ uri: owenerDetails.picture }} style={styles.image} resizeMode="stretch" />
                        </View>
                        <Text style={styles.userName}>{owenerDetails.name}<Text> {owenerDetails.lastName}</Text></Text>
                    </View>
                    <View style={styles.dateContainer}>
                        {
                            isToday ?
                                <Text style={styles.date} >{currentFeed.date.getHours() + ':' + (currentFeed.date.getMinutes() < 10 ? '0' + currentFeed.date.getMinutes() : currentFeed.date.getMinutes())}</Text> :
                                <Text style={styles.date}>{currentFeed.date.getDate() + '/' + (currentFeed.date.getMonth() + 1) + '/' + currentFeed.date.getFullYear()} </Text>
                        }
                    </View>
                </View>
                <View style={styles.data}>
                    <Text style={styles.title}>{currentFeed.title}</Text>
                    <Text style={styles.content}>{currentFeed.content}</Text>
                </View>
            </Card>
    );}
    return owenerDetails;
};


const styles = StyleSheet.create({
    card:
    {
        marginVertical: 10
    },
    title:
    {
        fontFamily: 'open-sans-bold',
        fontSize: 20
    },
    content:
    {
        fontFamily: 'open-sans',
        fontSize: 16
    },
    dateContainer:
    {
        flex: 2,
        alignItems: I18nManager.isRTL ? 'flex-start' : 'flex-end',
        justifyContent: "flex-start",
        width: '100%'
    },
    date:
    {
        fontFamily: 'open-sans',
        fontSize: 12,
        marginTop: 0
    },
    data:
    {

        paddingBottom: 20
    },
    miscData:
    {
        borderBottomWidth: 0.5,
    },
    userData:
    {
        flex: 1,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignContent: 'flex-start'
    },
    userName:
    {
        width: Dimensions.get('window').width < 350 ? 50 : 200,
        marginHorizontal: 10
    },
    imgContainer:
    {
        borderWidth: 1,
        borderRadius: 50,
        overflow: 'hidden'
    },
    image:
    {
        width: Dimensions.get('window').height > 700 ? 60 : 40,
        height: Dimensions.get('window').height > 700 ? 60 : 40
    },
});
export default FeedItem;

