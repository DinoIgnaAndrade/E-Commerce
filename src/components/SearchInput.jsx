import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native-web';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { colors } from '../global/colorPalette';

const SearchInput = ({
    onSearchHandlerEvent
}) => {

    const [search, setSearch] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setSearch}
                placeholder='Buscar...'
                value={search} />

            <TouchableOpacity
                onPress={() => onSearchHandlerEvent(search)}
                style={styles.search}
            >
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size={30}
                    color={' darkGreen '}
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={()=> {onSearchHandlerEvent(''), setSearch('')}}
                style={styles.cancel}
            >
                <FontAwesomeIcon
                    icon={faXmark}
                    size={32}
                    color={' darkRed '}
                />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput;

const styles = StyleSheet.create({
    container: {
        padding:5,
        margin:5,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: colors.black,
        borderRadius: 30,
    },
    input: {
        borderRadius:30,
        paddingStart:1,
        alignSelf: 'center',
        fontSize: 25,
        width: '70%',
        height: 'auto',

        backgroundColor:'white',
    },
    search: {
        padding: 10,
        marginLeft: 'auto',
    },
    cancel: {
        padding: 10,
        marginLeft: 'auto',
    }

})