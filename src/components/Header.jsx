import { View, Text, StyleSheet, Pressable, Button } from 'react-native';

import { colors } from '../global/colorPalette';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons/faCaretLeft'
import { useEffect, useState } from 'react';

const Header = ({
    title,
    color,
    navigation,
    route
}) => {

    const [ifButton, setIfButton] = useState(true)

    useEffect(() => {
        if(route.name==='Categorias'){
            setIfButton(true);
        }else{
            setIfButton(false);
        };
    }, [ifButton])
    

    return (
        <>
            {
                ifButton
                    ?
                    <View>
                        <View style={[styles.headerContainer, { backgroundColor: color }]}>
                            <Text style={styles.headerTitle}>{title}</Text>
                        </View>
                    </View>
                    :
                    <View>
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
                    </View>
            }
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        flexBasic: 'auto',
        height: 'auto',
        alignItems: 'center',
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100,
    },
    headerWithButtom: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 'auto',
        alignItems: 'center',
        borderBottomEndRadius: 100,
        borderBottomStartRadius: 100,
    },
    headerTitle: {
        padding: 10,
        fontFamily: 'Josefin-Bold',
        fontSize: 30,
        color: 'white',
    },
    backButtom: {
        position: 'absolute',
        left: '5%',
        alignSelf: 'center',
        alignItems: 'flex-start'
    }
})