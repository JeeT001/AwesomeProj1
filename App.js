// Importing all pages 

import Home from './component/Home.js';
import Toys from './component/Toys';
import Cart from './component/Cart';
import Nav from './component/nav';
import Checkout from './component/Checkout';
import Shipping from './component/Shipping';



import * as React from 'react';

// Connecting pages through react navigation 
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
         {/* connecting all the pages with root page   */}

        <Stack.Screen name="toys" component={Toys} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="nav" component={Nav} />
        <Stack.Screen name="check" component={Checkout} />
        <Stack.Screen name="Shipping" component={Shipping} />




      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack
















// export default function App() {
//   return (
//     <View style={styles.container}>
      
//       <View>
//         <SearchBar></SearchBar>
//       </View>
      
//       <View>
//         <Home></Home>
//       </View>
//       <Button
//         title="Press me"
//         color="skyblue"
//         onPress={() => Alert.alert('Button with adjusted color pressed')}

//       />
      
//     </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 41,
//     flexDirection: 'column',
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'flex-start'
//   },
  
// });
