import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Image} from 'react-native';

export default function SearchBar(){
    return(
        <View style={style.Main }>
            <View style={style.box}>
            <TextInput style={style.Texty}> Search For toys....</TextInput>
            {/* <Image
            style={style.tinyIcon}
            source={require('../assets/search.png')}
            /> */}
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    Main:{
        backgroundColor:'skyblue',
        width: 380,
        height: 55,
        // borderRadius: 10,
        // marginTop: 20,
        alignItems: 'center'
        

    },
    tinyIcon:{
        resizeMode: "contain",
        height: 20,
        width: 30,
        marginBottom: 125,
        marginLeft: 200,
        paddingBottom: 10
        },
    Texty:{
        textAlign: 'center',
        // margin: 10
    },
    box:{
        marginTop: 6,
        width: 250,
        height: 40,
        alignItems: 'center',
        

        backgroundColor: 'white'
    }

})

