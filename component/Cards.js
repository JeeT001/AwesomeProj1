import * as React from 'react';
import { Avatar, Button, Card, Text, Title, StyleSheet } from 'react-native-paper';


const MyCards = ({image, title, sTitle, ssTitle, reef, butt}) => (
  <Card style={{
    margin: 10,
    backgroundColor: 'lightgrey'
  }}>
    <Card.Cover style={{
        height: 150,
        width: 150,
        alignSelf: 'center'
        
    }} 
    
    source={image} />
    
    <Card.Content>
      <Text variant="titleLarge">{title}</Text>
      <Text variant="titleMedium">{sTitle}</Text>
      <Text variant="titleMedium">{ssTitle}</Text>
      <Text variant="titleMedium">{reef}</Text>
      
      <Button>{butt}</Button>

      
    </Card.Content>
    {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
  </Card>
);


export default MyCards;