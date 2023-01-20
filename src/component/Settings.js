import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {Input, Button} from '@rneui/themed';

class Settings extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inputHolder}>
          <Input
            placeholder="Current Password"
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
          <Input
            placeholder="New Password"
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
          <Input
            placeholder="Confirm Password"
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
          title="Confirm"
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
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161616',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  loginHeader: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 30,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  loginSubtitle: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  inputHolder: {
    marginVertical: 30,
  },
});
export default Settings;
