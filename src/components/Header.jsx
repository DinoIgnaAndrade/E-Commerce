import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '../global/colorPalette';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons/faBackwardStep'

const Header = ({
    title,
    color,
    category,
    onSelectCategoryEvent
}) => {
    return (
        <View>
            {
                category
                    ?
                    (
                        <View style={[styles.headerWithButtom, {backgroundColor: color}]}>
                            <TouchableOpacity
                                onPress={() => onSelectCategoryEvent('')}
                                style={styles.backButtom}
                            >
                                <FontAwesomeIcon
                                    icon={faBackwardStep}
                                    color={colors.lightBlue}
                                    size={30}
                                />
                            </TouchableOpacity>
                            <Text style={styles.headerTitle}>{title}</Text>
                        </View>
                    )
                    :
                    (
                        <View
                            style={[styles.headerContainer, { backgroundColor: color }]}>
                                <Text style={styles.headerTitle}>{title}</Text>
                        </View>
                    )
                    }


        </View>
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
    headerWithButtom:{
        flexDirection: 'row',
        justifyContent:'center',
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
        position:'absolute',
        left:'5%',
        alignSelf: 'center',
        alignItems:'flex-start'
    }
})