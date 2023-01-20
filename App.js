import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/component/Home';
import CardComponent from './src/component/Card';
import Transaction from './src/component/Transaction';
import LoadCard from './src/component/LoadCard';
import Settings from './src/component/Settings';
import Login from './src/component/Login';
import Signup from './src/component/Signup';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Cards = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#161616'},
        headerShadowVisible: false,
        headerTitleStyle: {color: '#C2A12B', fontFamily: 'Quicksand-Bold'},
        headerTintColor: '#C2A12B',
      }}>
      <Stack.Screen name="My Cards" component={CardComponent} />
      <Stack.Screen name="Transaction" component={Transaction} />
      <Stack.Screen name="LoadCard" component={LoadCard} />
    </Stack.Navigator>
  );
};

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View>
          <Text style={styles.drawerHeaderText}>IMANISHIMWE Honore</Text>
          <Text style={styles.drawerNameText}>Car Owner/Driver</Text>
        </View>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Logout"
        inactiveTintColor="#9E893C"
        activeBackgroundColor="#9E893C"
        activeTintColor="#000000"
        style={{
          borderTopColor: '#9E893C',
          borderTopWidth: 1,
          marginTop: 50,
        }}
        labelStyle={{fontSize: 17, fontFamily: 'Quicksand-SemiBold'}}
      />
    </DrawerContentScrollView>
  );
};

const App = () => {
  const [isAuthenticated, setAuthentication] = useState(true);
  if (isAuthenticated) {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Home"
            useLegacyImplementation
            screenOptions={{
              drawerStyle: {
                backgroundColor: '#161616',
              },
              drawerActiveBackgroundColor: '#9E893C',
              drawerActiveTintColor: '#000000',
              drawerInactiveTintColor: '#9E893C',
              drawerLabelStyle: {
                fontSize: 17,
                fontFamily: 'Quicksand-SemiBold',
              },
              headerStyle: {
                backgroundColor: '#161616',
              },
              headerTitleStyle: {
                fontFamily: 'Quicksand-SemiBold',
              },
              headerTintColor: '#9E893C',
              headerShadowVisible: false,
              headerTitleAlign: 'center',
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Cards" component={Cards} />
            <Drawer.Screen name="Change Password" component={Settings} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
  return <Login />;
};

const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: '#9E893C',
    paddingLeft: 20,
    paddingVertical: 50,
    marginBottom: 30,
  },
  drawerHeaderText: {
    color: '#000000',
    fontSize: 20,
    fontFamily: 'Quicksand-Bold',
  },
  drawerNameText: {
    color: '#000000',
    fontSize: 17,
    marginTop: 10,
    fontFamily: 'Quicksand-Regular',
  },
  headerTextStyle: {
    marginTop: 32,
    paddingHorizontal: 24,
    color: 'black',
    fontSize: 20,
  },
});

export default App;
