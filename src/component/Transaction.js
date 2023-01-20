import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {Button, Card, ListItem, Avatar, Input} from '@rneui/themed';

const list = [
  {
    description: 'Gas payment',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    price: '2,000 Rwf',
  },
  {
    description: 'Gas Payment',
    avatar:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    price: '5,000 Rwf',
  },
];

keyExtractor = (item, index) => index.toString();

renderItem = ({item}) => (
  <ListItem
    bottomDivider
    containerStyle={{
      backgroundColor: 'transparent',
      justifyContent: 'space-between',
    }}>
    <Avatar source={{uri: item.avatar}} containerStyle={{borderRadius: 50}} />
    <ListItem.Content>
      <ListItem.Title style={{color: '#FFFFFF', fontFamily: 'Quicksand-Bold'}}>
        {item.description}
      </ListItem.Title>
      <ListItem.Subtitle
        style={{
          color: '#FFFFFF',
          marginTop: 5,
          fontFamily: 'Quicksand-Regular',
        }}>
        {item.price}
      </ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Content>
      <ListItem.Title
        style={{color: '#FFFFFF', marginTop: 5, fontFamily: 'Quicksand-Bold'}}>
        {item.price}
      </ListItem.Title>
    </ListItem.Content>
  </ListItem>
);

const Transaction = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={this.keyExtractor}
        data={list}
        renderItem={this.renderItem}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161616',
    height: '100%',
  },

  fontfaceHeader: {
    fontFamily: 'Quicksand-Bold',
  },
});
export default Transaction;
