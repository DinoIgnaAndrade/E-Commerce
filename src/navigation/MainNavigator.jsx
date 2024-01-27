import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigatior";
import { useGetProfilePictureQuery, useGetUserLocationQuery } from "../services/shopServices";
import { setProfilePicture, setUser, setUserLocation } from "../features/authSlice";
import { fetchData } from "../db";

const MainNavigator = () => {

    const user = useSelector(state => state.authReducer.user)
    const localId = useSelector(state => state.authReducer.localId)

    const {data, error, isLoading} = useGetProfilePictureQuery(localId)
    const {data: locationData, error: locationError, isLoading: isLoadingLocation} = useGetUserLocationQuery(localId)
    const dispatch = useDispatch()

    useEffect(() => {
        if(data){
            dispatch(setProfilePicture(data.image))
        }
        if(locationData){
            dispatch(setUserLocation(locationData))
        }
    }, [data, locationData, isLoading, isLoadingLocation])

    useEffect(() => {
        (async ()=>{
            try {
                const localData = await fetchData(localId)
                if(localData?.rows.length){
                    const user = localData.rows._array[0]
                    console.log(user)
                    dispatch(setUser(user))
                    console.log('Sesion Iniciada') 
                }
            } catch (error) {
                console.log('Data Error', error) 
            }
        })()
    }, [])
    
    return (
        
        <NavigationContainer>
            {
                user && !isLoading
                    ?
                    <TabNavigator />
                    :
                    <AuthNavigator />
            }
        </NavigationContainer>
    )
}

export default MainNavigator;
