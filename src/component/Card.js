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

const CardComponent = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Card containerStyle={styles.card}>
        <Text
          style={{
            color: '#D9D9D9',
            fontSize: 25,
            fontFamily: 'Quicksand-Bold',
          }}>
          30,000 Rwf
        </Text>
        <Text
          style={{
            color: '#D9D9D9',
            marginTop: 10,
            fontSize: 17,
            fontFamily: 'Quicksand-Regular',
          }}>
          Rwandan Francs
        </Text>
        <View style={styles.cardContainer}>
          <View style={styles.cardBottom}>
            <View style={{flex: 1}}>
              <Text
                style={{
                  color: '#D9D9D9',
                  fontSize: 17,
                  fontFamily: 'Quicksand-Regular',
                }}>
                ID: 222000231
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text
                onPress={() => navigation.navigate('LoadCard')}
                style={{
                  color: '#D9D9D9',
                  fontSize: 17,
                  fontFamily: 'Quicksand-Regular',
                }}>
                Add Money
              </Text>
            </View>
          </View>
        </View>
      </Card>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <Button
          title="History"
          containerStyle={{marginHorizontal: 15, flex: 1}}
          buttonStyle={{
            height: 70,
            backgroundColor: '#9E893C',
            borderRadius: 15,
          }}
          titleStyle={{
            color: '#000000',
            fontFamily: 'Quicksand-SemiBold',
            fontSize: 17,
          }}
          onPress={() => navigation.navigate('Transaction')}
        />
        <Button
          title="Refresh"
          containerStyle={{marginHorizontal: 15, flex: 1}}
          buttonStyle={{
            height: 70,
            backgroundColor: '#9E893C',
            borderRadius: 15,
          }}
          titleStyle={{
            color: '#000000',
            fontFamily: 'Quicksand-SemiBold',
            fontSize: 17,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          marginHorizontal: 20,
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View style={{flex: 1}}>
          <Text
            style={{
              color: '#FFFFFF',
              fontFamily: 'Quicksand-Bold',
              fontSize: 20,
            }}>
            Add your card
          </Text>
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <Input
          placeholder="Card ID"
          inputContainerStyle={{
            borderStyle: 'solid',
            borderColor: '#3A3A3A',
            borderWidth: 1,
            borderRadius: 15,
            paddingLeft: 20,
            height: 70,
          }}
          placeholderTextColor="#636363"
          inputStyle={{
            fontFamily: 'Quicksand-Regular',
            fontSize: 13,
            color: '#FFFFFF',
          }}
        />
      </View>
      <Button
        title="Add Card"
        containerStyle={{marginHorizontal: 10}}
        buttonStyle={{
          height: 70,
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
        }}
        titleStyle={{
          color: '#000000',
          fontFamily: 'Quicksand-SemiBold',
          fontSize: 17,
        }}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161616',
    height: 100,
  },
  card: {
    borderRadius: 20,
    borderColor: '#366D4C',
    backgroundColor: '#366D4C',
  },
  cardContainer: {
    marginTop: 120,
    flex: 1,
  },
  cardBottom: {
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
  },
  fontfaceHeader: {
    fontFamily: 'Quicksand-Bold',
  },
});
export default CardComponent;
