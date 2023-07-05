import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Button, Alert, ActivityIndicator, ScrollView, Card} from 'react-native';
import SearchBar from "./saerchBar";
import MyCards from "./ShippingCard";
import Checkout from "./Checkout";


export default function Shipping({ navigation }) {
    
    return (
      <ScrollView>
        <SearchBar></SearchBar>
      <View style={styles.container}>
        
       
       
        <MyCards
        
        image={require('../assets/main.jpg')}
        title={'Toy'}
        sTitle={'$10'}
        ssTitle={'$5 Shipping'}
        reef={'-   1   +'}
        total={'total amount is $15'}
        
        />
      

        <TouchableOpacity onPress={() => navigation.navigate('toys')}>
      <View 
      
      style={{
        backgroundColor: 'skyblue',
        width: 200,
        height: 70,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        
      }}>
        
        <Text style={{fontSize: 25}}>See more Toys</Text>
        
      </View>
      </TouchableOpacity>

  
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
      justifyContent: 'flex-start',
      margin: 30,
      
    },
    
  });

