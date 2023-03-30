import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'


export function Global() {

     const {darktheme}= useContext(AuthContext);
     
     return darktheme;
}


