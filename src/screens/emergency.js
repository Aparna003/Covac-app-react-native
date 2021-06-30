import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';

const {height, width} = Dimensions.get('window');

const DATA = [
  {
    id: "1",
    url: "https://www.atsociety.org.uk/wp-content/uploads/2019/11/Helpline.png",
    name: "011-23978046 or 1075"
  },
  {
    id: "2",
    url: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/4/Desk/2021_4$largeimg_1438667766.jpg",
    
    name: "TN: 044-29510500"
  },
  {
    id: "3",
    url: "https://pbs.twimg.com/profile_images/1383992823003815936/Aj-yhJb2_400x400.jpg",
    name: "1800-111-747"
  }
 
]

const Emergency = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.top}>
        <View style={styles.ripple_1}></View>
        <View style={styles.ripple_2}></View>
        <TouchableOpacity style={styles.sos_button}>
          <Text style={styles.sos_button_text}>SOS</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <FlatList
          contentContainerStyle={{paddingVertical: 42}}
          data={DATA}
          renderItem={({item,index}) => (
            <View style={styles.contact_tile}>
              <Image style={styles.contact_image} source={{uri: item.url}}/>
              <Text style={styles.contact_name}>{item.name}</Text>
            </View>
          )}
        />
      </View>
      <TouchableOpacity style={styles.add_contact_button}>
        <Text style={{color: '#F4F8FA', fontSize: 16, fontWeight: 'bold'}}>
          COVID HELPLINE INDIA
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: width,
    height: height,
    position: 'relative',
  },
  top: {
    width: width,
    height: height * 0.6,
    backgroundColor: '#D4EBFA',
    position: 'relative',
    zIndex: 10
  },
  bottom: {
    width: width,
    height: height * 0.4,
    backgroundColor: '#F4F8FA',
    position: 'relative',
    zIndex: 10
  },
  sos_button: {
    backgroundColor: '#E72B2C',
    width: 150,
    height: 150,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 50,
    top: height * 0.6 * 0.5,
    left: width * 0.5,
    transform: [
      {
        translateX: -75
      },
      {
        translateY: -75
      }
    ] 
  },
  ripple_1: {
    position: 'absolute',
    backgroundColor: '#E72B2C10',
    width: 320,
    height: 320,
    borderRadius: 300,
    top: height * 0.6 * 0.5,
    left: width * 0.5,
    transform: [
      {
        translateX: -(320/2)
      },
      {
        translateY: -(320/2)
      }
    ] 
  },
  ripple_2: {
    position: 'absolute',
    backgroundColor: '#E72B2C15',
    width: 240,
    height: 240,
    borderRadius: 300,
    top: height * 0.6 * 0.5,
    left: width * 0.5,
    transform: [
      {
        translateX: -(240/2)
      },
      {
        translateY: -(240/2)
      }
    ] 
  },
  sos_button_text: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#F4F8FA',
  },
  add_contact_button: {
    width: 220,
    height: 56,
    elevation: 5,
    backgroundColor: '#72B5ED',
    position: 'absolute',
    bottom: height * 0.4,
    left: width * 0.5,
    zIndex: 30,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [
      {
        translateX: -110
      },
      {
        translateY: 28
      }
    ]  
  },
  contact_tile:{
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  contact_image: {
    height: 50,
    width: 50,
    borderRadius: 1000,
    marginRight: 14
  }
});

export default Emergency;