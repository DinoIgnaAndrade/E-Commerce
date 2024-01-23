import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

import { colors } from '../global/colorPalette.js'
import user_data from '../data/user_data.json';
import userPng from '../../assets/img/userImage.png'
import Location from '../components/LocationSelector.jsx'



const ProfileScreen = ({ navigation }) => {
    const image = useSelector(state => state.authReducer.profilePicture)

    return (
        <View style={styles.container}>

            <View style={styles.subContainer}>

                <View>
                    <Pressable onPress={() => navigation.navigate('imageSelector')}
                        style={({ pressed }) => [
                            {
                                backgroundColor: pressed ? '#DCDCDC' : '#E8E8E8'
                            },
                            styles.imageContainer,
                        ]}>
                        {
                            image
                                ?
                                <Image
                                    source={{ uri: image }}
                                    style={styles.profilePicture}
                                    resizeMode='contain'
                                />
                                :
                                <Image
                                    source={userPng}
                                    style={styles.profilePicture}
                                    resizeMode='contain'
                                />
                        }
                    </Pressable>
                </View>

                <View style={styles.userDataContainer}>
                    <Text style={styles.userTitle}>{user_data.name}</Text>
                    <Text style={styles.userData}>{user_data.role}</Text>
                    <Text style={styles.userData}>Nivel: {user_data.level}</Text>
                    <Text style={styles.userData}>Dirección: {user_data.address}</Text>
                    <Text style={styles.userData}>{user_data.city}</Text>
                </View>

                
            </View>

            <Location />

        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        
    },
    subContainer: {
        flexDirection: 'row',
        margin: 20,
        gap: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    imageContainer: {
        borderRadius: 100,
    },
    profilePicture: {
        width: 110,
        height: 110,
        borderRadius: 100,
    },
    userDataContainer: {
        padding: 10,
        paddingLeft: 20,
        paddingRight: 130,
        borderRadius: 30,
        backgroundColor: colors.middleBlue,
        marginTop: 10,
        alignItems: 'right',
    },
    userTitle: {
        fontFamily: 'Josefin-Bold',
        fontSize: 16,
    },
    userData: {
        fontFamily: 'Josefin-Regular',
        fontSize: 12
    },
    addressContainer: {
        alignItems: 'center',
        gap: 5,
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    addressTitle: {
        fontFamily: 'Josefin-Bold',
        fontSize: 14,
        color: "#fff"
    },
    addressDescription: {
        fontFamily: 'Josefin-Bold',
        color: "#fff"
    }

})