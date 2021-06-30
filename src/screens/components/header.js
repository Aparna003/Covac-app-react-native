import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Ham from '../../images/ham.png';

import { DrawerActions } from '@react-navigation/native';

export default function Header({navigation, title}) {
  const openMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <ImageBackground
      source={require('../../images/imagesmall.png')}
      style={styles.header}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={openMenu}>
          <Image source={Ham} style={{width: 20, height: 20}} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    resizeMode: 'cover',
    height: 60,
    elevation:4
  },
  headerContainer: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
