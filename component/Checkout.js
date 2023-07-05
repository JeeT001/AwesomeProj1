import * as React from 'react';
import { Avatar, Button, Card, Text,TouchableOpacity, Alert} from 'react-native-paper';
import aMessage from './Alert';
const simpleAlert = () => {
  alert('1 Item has been added to cart')
}
const Checkout = ({ navigation }) => (

  
  
  <Card style={{
    height: 500,
    width: 300,
    margin: 30,
    alignItems: 'center'
  }}> 
    <Card.Cover source={require('../assets/main.jpg')} />
    <Card.Content>
      <Text variant="titleLarge">Toy</Text>
      <Text variant="bodyMedium">it is a very good toy and it is also very cheap, It will help your children grow faster which is ver good thing for you so and As well for the babie</Text>
    </Card.Content>


    <Card.Actions>

      
      
      <Button onPress={simpleAlert}>Add to Cart</Button>
      {/* <Text>item : 1</Text> */}
    </Card.Actions>


    <Card.Actions>
      <Button onPress={() => navigation.navigate('toys')}>Shop More</Button>

      {/* <Text>item : 1</Text> */}
    </Card.Actions>
  </Card>
  

  

  
);

export default Checkout;