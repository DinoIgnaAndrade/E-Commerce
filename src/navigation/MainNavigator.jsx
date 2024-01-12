import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { useSelector } from "react-redux";

import TabNavigator from "./TabNavigator";
import AuthNavigator from "./AuthNavigatior";

const MainNavigator = () => {

    const user = useSelector(state => state.authReducer.user)
    
    return (
        <NavigationContainer>
            {
                user
                    ?
                    <TabNavigator />
                    :
                    <AuthNavigator />
            }
        </NavigationContainer>
    )
}

export default MainNavigator;
