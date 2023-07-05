import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Button, Alert, ActivityIndicator, ScrollView} from 'react-native';
import SearchBar from "./saerchBar";
import MyCards from "./Cards";
import Checkout from "./Checkout";


export default function Cart() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <SearchBar></SearchBar>
       
        <Checkout></Checkout>

  
      </View>
      </ScrollView>
      
      
    );
  }

 
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    
  });

