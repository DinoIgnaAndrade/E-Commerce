import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { useDispatch, useSelector } from 'react-redux';


import MapPreview from './MapPreview';
import { maps_api_key } from '../apis/googleCloud';
import { setUserLocation } from '../features/authSlice';
import { usePutUserLocationMutation } from '../services/shopServices';

const LocationSelector = () => {

    const [location, setLocation] = useState(0);
    const [error, setError] = useState("");
    const [address, setAddress] = useState("");
    const dispatch = useDispatch();
    const localId = useSelector(state=>state.authReducer.localId);
    const [triggerPutAddress, result] = usePutUserLocationMutation()

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== "granted") {
                setError("No se han otorgado los permisos para obtener la ubicacion")
                return
            }
            let location = await Location.getCurrentPositionAsync()
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            })
        })()

    }, [])

    useEffect(() => {
        (async () => {
            try {
                if (location.latitude) {
                    const urlReverseGeoCode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${maps_api_key}`
                    const response = await fetch(urlReverseGeoCode)
                    const data = await response.json()
                    const formattedAddress = await data.results[0].formatted_address
                    setAddress(formattedAddress)
                }
            } catch (error) {
                setError(error.message)
            }
        })()

    }, [location])

    const onConfirm = () => {
        const locationFormatted = {
            latitude: location.latitude,
            longitude: location.longitude,
            address: address,
        }
        dispatch(setUserLocation(locationFormatted))

        triggerPutAddress({ location: locationFormatted, localId })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Ubicacion Actual</Text>
            {
                location.latitude
                    ?
                    <>
                        <Text style={styles.textAddress}>{address}</Text>
                        <Text style={styles.textLocation}>
                            (Lat: {location.latitude}, Long:{location.longitude})
                        </Text>
                        <Pressable style={styles.btn} onPress={onConfirm}>
                            <Text style={styles.txtBtn}>Actualizar Ubicacion</Text>
                        </Pressable>
                        <MapPreview location={location} />
                    </>
                    :
                    <ActivityIndicator />
            }
        </View>
    )
}

export default LocationSelector

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 130,
        gap: 5,
    },
    btn:{
        backgroundColor:'black',
    },
    txtBtn:{
        color:'#fff',
    }
})