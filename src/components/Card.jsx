import {View, StyleSheet} from 'react-native';
import {colors} from '../global/colorPalette';

const Card = ({children, style}) => {
    return(
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        shadowColor: colors.black,
        shadowOffset: {
            height: 10,
            width: 10,
        },
        elevation: 5,
        shadowOpacity: 50, 
        shadowRadius: 20
    }
})