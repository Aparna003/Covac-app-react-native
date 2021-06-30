import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View} from 'react-native';

import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Home from './screens/Home';

import Profile from './screens/Profile';
import Dashboard from './screens/Dashboard';
import Guide from './screens/guidelines';
import Emergency from './screens/emergency';
import ViewDetails from './screens/ViewDetails';

import Header from './screens/components/header';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
  headerShown: false,
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
};

const GuideStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="guide"
        component={Guide}
        options={({navigation}) => {
          return {
            header: () => <Header navigation={navigation} title="COVAC" />,
          };
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile"
        component={Profile}
        options={({navigation}) => {
          return {
            header: () => <Header navigation={navigation} title="COVAC" />,
          };
        }}
      />
    </Stack.Navigator>
  );
};

const DashboardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={({navigation}) => {
          return {
            header: () => <Header navigation={navigation} title="COVAC" />,
          };
        }}
      />
      <Stack.Screen
        name="viewDetails"
        component={ViewDetails}
        options={({navigation}) => {
          return {
            header: () => <Header navigation={navigation} title="COVAC" />,
          };
        }}
      />
    </Stack.Navigator>
  );
};
const EmergencyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Emergency"
        component={Emergency}
        options={({navigation}) => {
          return {
            header: () => <Header navigation={navigation} title="COVAC" />,
          };
        }}
      />
    </Stack.Navigator>
  );
};

const PageDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Guide" component={GuideStack} />
      <Drawer.Screen name="Dashboard" component={DashboardStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="Emergency" component={EmergencyStack} />
    </Drawer.Navigator>
  );
};

export const Navigator = () => {
  const [authState, setAuthState] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem('authState')
      .then((res) => res)
      .then((res) => {
        // console.log(res);
        if (res == 'authenticated') {
          setAuthState(true);
        } else {
          setAuthState(false);
        }
        setLoading(false);
      });
  }, []);

  if (!loading) {
    return (
      <NavigationContainer>
        {authState ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Page" children={PageDrawer} />
            <Stack.Screen name="Auth" component={AuthStack} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Auth" component={AuthStack} />
            <Stack.Screen name="Page" children={PageDrawer} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  } else {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Spinner
          visible={loading}
          // textContent={'Loading...'}
          // textStyle={{color: colors.text}}
          // overlayColor={colors.background}
          // cancelable={false}
          // color={colors.text}
          animation="fade"
        />
      </View>
    );
  }
};

export default Navigator;
