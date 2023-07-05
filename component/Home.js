import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Image, Button, Alert, ActivityIndicator, ScrollView} from 'react-native';
import SearchBar from "./saerchBar";
import Icons from "./Icons";


export default function Home({ navigation }) {
    return (
      <ScrollView>
      <View style={styles.container}>
        <SearchBar></SearchBar>
        <Image 
        style={{
          resizeMode: "contain",
          height: 221,
          width: 400
        }}
        source={require('../assets/main.jpg')}
        />

        
      </View>

      {/* <Boxes></Boxes> */}
      <View style={{
        flex: 1,
        backgroundColor: 'skyblue',
        width: 200,
        height: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
      }}>
        <Text>BEST SELLERS</Text>
      </View>

      
      <View 
      
      style={{
          alignItems: 'center',
          flexDirection: 'row',
          marginLeft: 5
      }}>

        {/* using touchableOpacity for using onPress  */}
        <TouchableOpacity onPress={() => navigation.navigate('check')}>
      <Image 
        style={{
          resizeMode: 'cover',
          height: 100,
          width: 100,
          margin: 10
        }}
        source={require('../assets/img/toys.jpg')}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('check')}>
      <Image 
        style={{
          resizeMode: 'cover',
          height: 100,
          width: 100,
          margin: 10
        }}
        source={require('../assets/img/eye.jpg')}
        />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('check')}>
      <Image 
        style={{
          resizeMode: 'cover',
          height: 100,
          width: 100,
          margin: 10
        }}
        source={require('../assets/img/auto.jpg')}
        />
        </TouchableOpacity>

      

      </View>

      
        <TouchableOpacity onPress={() => navigation.navigate('toys')}>
      <View 
      
      style={{
        flex: 1,
        backgroundColor: 'skyblue',
        width: 200,
        height: 70,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        
      }}>
        
        <Text style={{fontSize: 25}}>View Toys</Text>
        
      </View>
      </TouchableOpacity>
      

      <View style={{
          flexDirection: 'row',
          backgroundColor: 'skyblue',
          justifyContent: 'space-evenly',
          paddingBottom: 10,
          marginTop: 100
          

        }}>
        

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Icons
      icon={'home'}
      />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('toys')}>
      <Icons
      icon={'puzzle'}
      />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Shipping')}>
      <Icons
      icon={'cart'}
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

