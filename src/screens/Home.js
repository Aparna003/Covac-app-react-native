import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import CenterImg from '../images/doctornurse.png';
import CenterImg2 from '../images/twoaunties.png';
import BG from '../images/imagesmall.png';

const window_width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#1133aa',
    width: 100,
    alignSelf: 'center',
    marginVertical: 30,
    borderRadius: 5,
  },
  center: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleContainer: {
    width: '100%',
    height: 70,
    resizeMode: 'cover',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
});

const Home = ({navigation}) => {
  const [sliderState, setSliderState] = useState(true);

  const buttons = [
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: window_width,
      }}>
      <View
        style={{
          borderRadius: 50,
          height: 10,
          width: 10,
          backgroundColor: '#8ac',
          marginHorizontal: 5,
          marginVertical: 5,
        }}></View>
      <View
        style={{
          borderRadius: 50,
          height: 10,
          width: 10,
          backgroundColor: '#ace',
          marginHorizontal: 5,
          marginVertical: 5,
        }}></View>
    </View>,
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: window_width,
      }}>
      <View
        style={{
          borderRadius: 50,
          height: 10,
          width: 10,
          backgroundColor: '#ace',
          marginHorizontal: 5,
          marginVertical: 5,
        }}></View>
      <View
        style={{
          borderRadius: 50,
          height: 10,
          width: 10,
          backgroundColor: '#8ac',
          marginHorizontal: 5,
          marginVertical: 5,
        }}></View>
    </View>,
  ];

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <ImageBackground source={BG} style={styles.titleContainer}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            fontSize: 30,
            paddingHorizontal: 40,
          }}>
          COVAC
        </Text>
      </ImageBackground>
      <View
        style={{
          paddingVertical: 30,
          paddingHorizontal: 20,
          flexDirection: 'column',
          flex: 1,
        }}>
        <View style={{width: window_width, marginVertical: 10}}>
          <FlatList
            data={[
              {
                image: CenterImg,
                id: '1',
              },
              {
                image: CenterImg2,
                id: '2',
              },
            ]}
            onMomentumScrollEnd={() => {
              setSliderState(!sliderState);
            }}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            style={{width: window_width, height: 250}}
            horizontal={true}
            pagingEnabled={true}
            renderItem={({item}) => {
              return (
                <View style={{width: window_width}} key={item.id}>
                  <Image
                    source={item.image}
                    style={{
                      width: window_width,
                      height: 250,
                    }}
                  />
                </View>
              );
            }}
          />
          {sliderState ? buttons[0] : buttons[1]}
        </View>
        <View style={{marginVertical: 40}}>
          <Text
            style={{
              color: '#369',
              textAlign: 'center',
              fontSize: 23,
              marginTop: 5,
              paddingHorizontal: 20,
              fontFamily: 'verdana',
              fontWeight: '700',
              lineHeight: 30,
            }}>
            Better to wear a mask than a ventilator, better to stay at home than
            in an ICU
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingHorizontal: 30,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('login')}
            style={styles.button}>
            <Text style={styles.center}>Login</Text>
          </TouchableOpacity>
          <Text
            style={{color: '#113344', fontWeight: 'bold', textAlign: 'center'}}>
            OR
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('signup')}
            style={styles.button}>
            <Text style={styles.center}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
