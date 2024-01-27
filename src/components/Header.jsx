import { View, Text, StyleSheet, Pressable, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { colors } from '../global/colorPalette';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft';
import { useEffect, useState } from 'react';
import { logout } from '../features/authSlice';
import { deleteData } from '../db';



const Header = ({
    title,
    color,
    navigation,
    route
}) => {

    const localId = useSelector(state => state.authReducer.localId)
    const email = useSelector(state => state.authReducer.user)
    const dispatch = useDispatch()

    const onLogout = ()=>{
        dispatch(logout())
        const deleteSession = deleteData(localId)
    }

    return (
        <>
            {
                navigation.canGoBack()
                    ?
                        <View style={[styles.headerWithButtom, { backgroundColor: color }]}>
                            <Pressable
                                onPress={() => navigation.goBack()}
                                style={styles.backButtom}
                            >
                                <FontAwesomeIcon
                                    icon={faCaretLeft}
                                    color={colors.orange}
                                    size={40}
                                />
                            </Pressable>
                            <Text style={styles.headerTitle}>{title}</Text>
                        </View>
                    :
                        <View style={[styles.headerContainer, { backgroundColor: color }]}>
                            <Text style={styles.headerTitle}>{title}</Text>
                            {
                                email
                                &&
                                <Pressable 
                                    onPress={onLogout}
                                    style={styles.exit}>
                                    <Text>Salir</Text>
                                </Pressable>
                            }
                        </View>
            }
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        justifyContent:'center',
        alignItems: 'center',
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
    },
    headerWithButtom: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 'auto',
        alignItems: 'center',
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
    },
    headerTitle: {
        padding: 20,
        fontFamily: 'Josefin-Bold',
        fontSize: 30,
        color: 'white',
    },
    backButtom: {
        position: 'absolute',
        bottom:'20%',
        left: '5%',
        alignItems: 'flex-start'
    },
    exit:{
        position:'absolute',
        right:30,
        bottom:25,
        alignSelf:'center',
    }
})