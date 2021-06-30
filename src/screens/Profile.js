import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

var flag = 0;
const Profile = ({navigation}) => {
  const male = require('../images/male.png');
  const female = require('../images/femenine.png');
  //   const ProfileImg = require('./assets/profile_vector.png');

  const [state, setState] = useState({
    username: 'Robert',
    email: 'robert@gmail.com',
    phoneNum: '',
    age: '',
    gender: 0,
  });

  const [image, setImage] = useState(
    'https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg',
  );

  const [edit, setEdit] = useState(false);

  const Upload = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((image) => {
        setImage(image.path);
        console.log(image);
      })
      .catch((error) => console.log(error));
  };

  const onSave = () => {
    setEdit(!edit);
  };

  return (
    <View
      style={{backgroundColor: 'white', flex: 1, justifyContent: 'flex-start'}}>
      <ScrollView style={{flex: 1, marginBottom: 40}}>
        {/* <View style={{ borderColor: "#1464F4", borderTopWidth: 0.5 }} /> */}

        <View
          style={{
            paddingHorizontal: 20,
            backgroundColor: '#1464F4',
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            height: HEIGHT * 0.18,
            paddingVertical: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{color: '#fefe', fontWeight: '500', paddingTop: 20}}>
                Welcome
              </Text>
              <Text
                style={{color: 'white', fontWeight: 'bold', paddingBottom: 20}}>
                {state.username}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                AsyncStorage.setItem('authState', 'null');
                navigation.reset({
                  key: null,
                  index: 0,
                  routes: [{name: 'Auth'}],
                });
              }}>
              <Text
                style={{color: '#fefefe', fontWeight: '500', paddingTop: 20}}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.backButton}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 10,
                height: 18,
                width: 18,
                marginTop: 18,
                marginLeft: 20,
              }}
            />
            <Text style={styles.backText}>PROFILE</Text>
          </View>
          {/* </LinearGradient> */}
        </View>
        {/* <View style={{ borderColor: "#1464F4", borderTopWidth: 0.5 }} /> */}
        <View style={{paddingTop: 20, paddingHorizontal: 20}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 40,
                borderRadius: 100,
                backgroundColor: 'pink',
                height: 80,
                width: 80,
                flexDirection: 'row',
              }}>
              <ImageBackground
                source={{uri: image}}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 50,
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  paddingBottom: 4,
                }}>
                <TouchableOpacity
                  onPress={Upload}
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    borderBottomRightRadius: 50,
                    borderBottomLeftRadius: 50,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: 55,
                  }}>
                  {edit && <Text style={{color: 'white'}}>Edit</Text>}
                </TouchableOpacity>
              </ImageBackground>
            </View>
          </View>

          <Text style={styles.label}>Name</Text>
          <TextInput
            editable={edit}
            placeholder="Name"
            placeholderTextColor="grey"
            style={styles.textInput}
            multiline={true}
            maxLength={165}
            value={state.username}
            onChangeText={(text) => {
              setState({
                ...state,
                username: text,
              });
            }}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            editable={edit}
            placeholder="Email"
            placeholderTextColor="#123"
            style={styles.textInput}
            multiline={true}
            maxLength={165}
            value={state.email}
            onChangeText={(text) => {
              setState({
                ...state,
                email: text,
              });
            }}
          />

          <Text style={styles.label}>Phone number</Text>
          <TextInput
            editable={edit}
            placeholder="Phone number"
            placeholderTextColor="grey"
            style={styles.textInput}
            multiline={true}
            maxLength={165}
            value={state.phoneNum}
            onChangeText={(text) => {
              setState({
                ...state,
                phoneNum: text,
              });
            }}
          />
          <Text style={styles.label}>Gender</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                edit &&
                  setState({
                    ...state,
                    gender: 1,
                  });
              }}>
              <View
                style={{
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  backgroundColor: '#F0F8FF',
                  marginRight: 20,
                  borderColor:
                    state.gender == 0
                      ? null
                      : state.gender == 1
                      ? '#49abc3'
                      : null,
                  borderWidth: state.gender == 1 ? 1 : 0,
                  borderRadius: 8,
                }}>
                <Image source={male} style={{width: 40, height: 40}} />
                <Text style={{paddingVertical: 10}}>Male</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                edit &&
                  setState({
                    ...state,
                    gender: 2,
                  });
              }}>
              <View
                style={{
                  paddingHorizontal: 30,
                  paddingVertical: 10,
                  backgroundColor: '#F0F8FF',
                  marginRight: 10,
                  borderColor:
                    state.gender == 0
                      ? null
                      : state.gender == 2
                      ? '#49abc3'
                      : null,
                  borderWidth: state.gender == 2 ? 1 : 0,
                  borderRadius: 8,
                }}>
                <Image source={female} style={{width: 40, height: 40}} />
                <Text style={{paddingVertical: 10}}>Female</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingTop: 10,
              paddingRight: 10,
            }}>
            <Text style={styles.label}>Age</Text>
            <TextInput
              editable={edit}
              placeholder="age"
              placeholderTextColor="grey"
              style={[styles.textInput]}
              multiline={true}
              maxLength={165}
              value={state.age}
              onChangeText={(text) => {
                setState({...state, age: text});
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}
            onPress={() => {
              if (edit) {
                onSave();
              } else {
                setEdit(!edit);
              }
            }}>
            <View
              style={{
                paddingHorizontal: 30,
                paddingVertical: 10,
                backgroundColor: '#1464F4',
                width: 100,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                {edit ? 'Save' : 'Edit'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  label: {
    color: '#113366',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 10,
    marginLeft: 10,
  },
  textInput: {
    backgroundColor: '#fefefe',
    opacity: 0.5,
    borderColor: 'grey',
    borderWidth: 1,
    height: 40,
    color: '#123',
    fontWeight: '600',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginVertical: 8,
    borderRadius: 10,
    width: 335,
  },
  backButton: {
    marginTop: 8,
    justifyContent: 'space-between',
    alignSelf: 'center',
    backgroundColor: '#00B2EE',
    borderRadius: 22,
    width: 130,
    height: 50,
    flexDirection: 'row',
    elevation: 4,
  },
  backText: {
    paddingRight: 25,
    paddingVertical: 15,
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
});
