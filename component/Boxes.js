import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Button, Alert, ActivityIndicator, ScrollView} from 'react-native';


export default function Boxes(){
    return(
        <View style={style.Main }>
            <View style={style.box}>
            <Image 
        style={{
          resizeMode: 'cover',
          height: 100,
          width: 100
        }}
        source={require('../assets/main.jpeg')}
        />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    Main:{
        backgroundColor:'skyblue',
        width: 380,
        height: 55,
        alignItems: 'center'
        

    },
    box:{
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: 'center',
    }

})