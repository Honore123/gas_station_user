import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {Input, Button} from '@rneui/themed';

class Login extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.loginHeader}>Let’s Sign you in</Text>
        <Text style={styles.loginSubtitle}>Welcome back.</Text>
        <Text style={styles.loginSubtitle}>You’ve been missed</Text>
        <View style={styles.inputHolder}>
          <Input
            placeholder="Phone Number"
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
            placeholder="Password"
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
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            marginBottom: 40,
          }}>
          <Text
            style={{
              flex: 1,
              fontFamily: 'Quicksand-Regular',
              color: '#FFFFFF',
              fontSize: 15,
              textAlign: 'center',
            }}>
            Don’t have an account?{'   '}
            <Text
              style={{
                flex: 1,
                fontFamily: 'Quicksand-Bold',
                color: '#FFFFFF',
                fontSize: 15,
              }}>
              Register
            </Text>
          </Text>
        </View>
        <Button
          title="Sign In"
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
    paddingTop: 50,
  },
  loginHeader: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 30,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  loginSubtitle: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  inputHolder: {
    marginVertical: 70,
  },
});
export default Login;
