import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {Component, useState} from 'react';

const Guidelines = () => {
  content = [
    {
      id: '1',
      title: 'What to do if someone is sick in your household?',
      body:
        "Prepare an isolated room or space for the person and keep them ventilated.Monitor the person's symptoms regularly and keep them hydrated, don't panic.Try to reduce contact with the sick person and use separate dishes and items for them, regularly disinfect and clean the touched surfaces.",
      img: (
        <Image
          source={require('../images/masking.png')}
          style={{width: 120, height: 120, alignSelf: 'center'}}
        />
      ),
    },
    {
      id: '2',
      title: 'Why do I need to get vaccinated?',
      body:
        'Vaccines protect against contagious spread of diseases that have the possibility to become pandemics , and by continuously vaccinating, it is even possible for diseases to become completely eliminated.',
      img: (
        <Image
          source={require('../images/vaccine.jpg')}
          style={{width: 120, height: 120, alignSelf: 'center'}}
        />
      ),
    },

    {
      id: '3',
      title: 'Masking necessity',
      body:
        '1. Masks should be used as part of a comprehensive strategy of measures to suppress transmission and save lives.\n\n2. Several studies have found that people with COVID-19 who never develop symptoms (asymptomatic) and those who are not yet showing symptoms (pre-symptomatic) can still spread the virus to other people. Wearing a mask helps protect those around you, in case you are asymptomatic. \n\n3. Clean your hands before / after using mask , or whenever you touch it.\n\n4. Make sure it covers both your nose, mouth and chin. Importantly, dont use masks with valves. ',
      img: (
        <Image
          source={require('../images/mask.png')}
          style={{width: 120, height: 120, alignSelf: 'center'}}
        />
      ),
    },
    {
      id: '4',
      title: 'Oxygen improvement by Proning',
      body:
        'Proning is the process of turning a patient with precise, safe motions from their back onto their abdomen (stomach) so the individual is lying face down.This allows for better expansion of the dorsal (back) lung regions, improved body movement and enhanced removal of secretions which may ultimately lead to advances in breathing.',
      img: (
        <Image
          source={require('../images/prone-position.png')}
          style={{width: 240, height: 120, alignSelf: 'center'}}
        />
      ),
    },
    {
      id: '5',
      title: 'Coping with Mental Health',
      body:
        'It is natural to feel stress, anxiety, grief, and worry during the COVID-19 pandemic.\n Here are some healthy ways to deal with them:\n\n1. Take breaks from watching, reading, or listening to news stories, including those on social media. It’s good to be informed, but hearing about the pandemic constantly can be upsetting.\n\n 2. Take care of your body and mind, by taking deep breaths, stretches and meditation.Physical activities are vital to keep the body healthy and fit.\n\n  3. While social distancing measures are in place, try connecting with people online, through social media, or by phone or mail.\n\n 4. Engaging in other activities that you enjoy will distract and also helps stay motivated. ',
      img: (
        <Image
          source={require('../images/mental.jpg')}
          style={{width: 240, height: 130, alignSelf: 'center'}}
        />
      ),
    },
    {
      id: '6',
      title: 'How do I know if I have COVID-19?',
      body:
        'The most common symptoms of COVID-19 are\n\n 1. Fever\n 2. Dry\n 3. Cough\n 4. Fatigue \n\n Other symptoms that are less common and may affect some patients are:\n\n 1. Loss of taste or smell\n 2. Nasal congestion\n 3. Nausea or vomiting\n 4. Diarrhea\n 5. Shortness of breath\n 6. Persistent pain or pressure in the chest ',
    },
  ];
  return (
    <View style={styles.main}>
      <View
        style={{
          backgroundColor: '#003F87',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          elevation: 5,
        }}>
        <Text
          style={{
            color: '#23f1ff',
            fontWeight: 'bold',
            fontSize: 20,
            alignSelf: 'center',
            marginVertical: 20,
          }}>
          COVID Safety guidelines
        </Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={content}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity activeOpacity={0.85}>
              <View style={styles.card}>
                {item.img}
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.bodyText}>{item.body}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fefefe',
    height: '100%',
  },
  titleText: {
    color: 'black',
    fontSize: 18,
  },
  text: {
    fontSize: 15,
    color: '#003F87',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  bodyText: {
    fontSize: 14,
    //color:"rgba(0,0,150,0.5)",
    color: '#369',
    textAlign: 'justify',
    marginVertical: 20,
  },
  card: {
    borderColor: 'rgba(0,100,200,0.5)',
    borderWidth: 0.8,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 1,
    elevation: 8,
    backgroundColor: '#F0F8FF',
  },
});

export default Guidelines;
