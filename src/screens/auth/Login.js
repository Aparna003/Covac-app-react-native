import React, {useState, useEffect} from 'react';
import {firebase} from '../../firebase/config';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import BG from '../../images/image.png';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  center: {
    color: 'white',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#e5e5e5',
    marginVertical: 6,
    paddingHorizontal: 10,
    marginHorizontal: 40,
    borderRadius: 5,
  },
  redirect: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#1133aa',
    width: 100,
    alignSelf: 'center',
    marginVertical: 30,
    borderRadius: 5,
  },
});

const Login = ({navigation}) => {
  const [state, setState] = useState({username: '', password: ''});

  const handleSubmit = () => {
    axios
      .post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBDYsd7spbSDvdO_eclV8iH_iAqEa1LS4Q',
        {
          email: state.username,
          password: state.password,
          returnSecureToken: true,
        },
      )
      .then((res) => {
        AsyncStorage.setItem('authCredentials', res.data);
        AsyncStorage.setItem('authState', 'authenticated')
          .then(() => {
            console.log('Authstate not null');
          })
          .catch((err) => {
            // alert(err);
          });
        navigation.reset({
          key: null,
          index: 0,
          routes: [{name: 'Page'}],
        });
      })
      .catch((err) => {
        // alert(err);
      });

    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(state.username, state.password)
    //   .then((response) => {
    //     const uid = response.user.uid;
    //     const usersRef = firebase.firestore().collection('users');
    //     usersRef
    //       .doc(uid)
    //       .get()
    //       .then((firestoreDocument) => {
    //         if (!firestoreDocument.exists) {
    //           alert('User does not exist anymore.');
    //           return;
    //         }
    //         const user = firestoreDocument.data();
    //         AsyncStorage.setItem('user', JSON.stringify(user))
    //           .then(() => {
    //             console.log('user data stored');
    //           })
    //           .catch(() => {
    //             console.log('user data not stored');
    //           });
    //           navigation.reset({
    //             key: null,
    //             index: 0,
    //             routes: [{name: 'Page'}],
    //           });
    //           AsyncStorage.setItem('authState', 'authenticated').then(() => {
    //               console.log('Authstate not null');
    //           });
    //       })
    //       .catch((error) => {
    //         alert(error);
    //       });
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
    setState({username: '', password: ''});
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={BG}
        style={styles.titleContainer}></ImageBackground>

      <View>
        <Text
          style={{
            color: '#1133aa',
            paddingHorizontal: 40,
            paddingVertical: 20,
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Login
        </Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={(text) =>
            setState({
              ...state,
              username: text,
            })
          }
          value={state.username}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(text) =>
            setState({
              ...state,
              password: text,
            })
          }
          value={state.password}
        />

        <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
          <Text style={styles.center}>Login</Text>
        </TouchableOpacity>

        <View style={styles.redirect}>
          <Text>Want to join us ! </Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={{color: '#1133aa'}}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
