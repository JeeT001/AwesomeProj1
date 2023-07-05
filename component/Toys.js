import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Button, Alert, ActivityIndicator, ScrollView} from 'react-native';
import SearchBar from "./saerchBar";
import MyCards from "./Cards";

export default function Toys({ navigation }) {
    return (
      <ScrollView>
      <View style={styles.container}>
        <SearchBar></SearchBar>
        <TouchableOpacity onPress={() => navigation.navigate('check')}>
        <MyCards
        
        image={require('../assets/img/toys.jpg')}
        title={'Puzzle'}
        sTitle={'$10'}
        ssTitle={'puzzle toy for litle kids to grow...'}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('check')}>
        <MyCards
        
        image={require('../assets/img/auto.jpg')}
        title={'Auto'}
        sTitle={'$10'}
        ssTitle={'taxi which is also called auto.....'}
        />
        </TouchableOpacity><TouchableOpacity onPress={() => navigation.navigate('check')}>
        <MyCards
        
        image={require('../assets/img/car.jpg')}
        title={'Car'}
        sTitle={'$10'}
        ssTitle={'Red small car with black tyres'}
        />
        </TouchableOpacity><TouchableOpacity onPress={() => navigation.navigate('check')}>
        <MyCards
        
        image={require('../assets/img/eye.jpg')}
        title={'Triple Eye'}
        sTitle={'$10'}
        ssTitle={'Movable Eye tow with speaker'}
        />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('check')}>
        <MyCards
        
        image={require('../assets/img/truck.jpg.webp')}
        title={'Mini truck'}
        sTitle={'$10'}
        ssTitle={'Dumping truck with yello tray'}
        />
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
      justifyContent: 'flex-start'
    },
    
  });

