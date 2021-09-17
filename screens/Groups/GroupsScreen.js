import React, { useState } from 'react';

import { View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import AddBtn from '../../components/AddBtn';

import ObjectModal from '../../components/ObjectModal';
import DefaultText from '../../components/DefaultText';
import BasicGroupAdd from '../../components/Groups/BasicGroupAdd';
import GroupItme from '../../components/Groups/GroupItme';

const GroupsScreen = (props) => {

    const [showModal, setShowModal] = useState(false);

    const GroupsData = useSelector(state => state.groupsData);
    const user = useSelector(state => state.auth);
    console.log(GroupsData.Groups);
    const myGroups = GroupsData.Groups.filter(elem => elem.particeipants.includes(user.userId));
   
    const renderGroups = (itemData) =>{
        return (
            <GroupItme
                id={itemData.item.id}
                name={itemData.item.name}
                pic={itemData.item.picture}
                onPress={(id) => {
                    props.navigation.navigate('GroupScreen',{GroupId:id});
                }}
            />);
    }

    return (

        <View style={styles.screen}>
            {
                myGroups.length === 0 ? <View style={styles.emptyList}><DefaultText style={styles.textStyle}>No groups to show, Create or join to existing group.</DefaultText></View> :
                    <FlatList
                    data={myGroups}
                    renderItem={renderGroups}
                    key={(item)=>item.id}/>
            }
            {
                showModal &&
                <ObjectModal visible={showModal} onClose={() => setShowModal(false)} modalView={styles.modalView}>
                    <BasicGroupAdd onClose={() => setShowModal(false)} />
                </ObjectModal>

            }
                <AddBtn onPress={() => setShowModal(true)} />

            </View>);

};


const styles = StyleSheet.create({
    screen:
    {
        flex: 1
    },
    emptyList:
    {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal:5
    },
    textStyle:
    {
        fontSize:Dimensions.get('window').width > 500 ? 22 :12,
        fontFamily:'open-sans-bold'
    },
    modalView:
    {
        width: '60%'
    }
});
export default GroupsScreen;

