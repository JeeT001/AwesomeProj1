import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Button, Alert, ActivityIndicator, ScrollView} from 'react-native';
import SearchBar from "./saerchBar";

export default function Nav({ navigation }) {
    return (
      
      <View style={styles.container}>
        
        <Text>that i am working on a react native</Text>
        <Button
        title="Toys"
        color="skyblue"
        onPress={() => navigation.navigate('toys')}
        />
        <Button
        title="Cart"
        color="skyblue"
        onPress={() => navigation.navigate('cart')}

      />
  
      </View>
      
      
      
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

