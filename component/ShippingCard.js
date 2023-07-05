import * as React from 'react';
import { Avatar, Button, Card, Text, Title } from 'react-native-paper';

const order = () => {
    alert('your order is successfully placed')
  }
  const orderCancel = () => {
    alert('your order is successfully cancelled')
  }
const MyCards = ({image, title, sTitle, ssTitle, reef, total}) => (
  <Card style={{
    margin: 20,
    backgroundColor: 'lightgrey'
  }}>
    <Card.Cover style={{
        height: 100,
        width: 300
    }} source={image} />
    <Card.Content>
      <Text variant="titleLarge">{title}</Text>
      <Text variant="titleMedium">{sTitle}</Text>
      <Text variant="titleMedium">{ssTitle}</Text>
      <Text variant="titleMedium">{reef}</Text>
      <Text variant="titleMedium">{total}</Text>

      
      <Button onPress={order}>Place Order</Button>
      <Button onPress={orderCancel}>Cancel Order</Button>

      


      
    </Card.Content>
    {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}

    
  </Card>

  
);

export default MyCards;