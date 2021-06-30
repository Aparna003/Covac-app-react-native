import {View, Button, Text, ScrollView, StyleSheet, Image} from 'react-native';

import React, {useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

const ViewDetails = ({navigation, route}) => {
  const [venues, setVenues] = useState({venues: route.params.venue});
  // console.log(venues);

  if (venues) {
    if (venues.venues.centers.length == 0) {
      return (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 30,
              paddingTop: 20,
            }}>
            No Venues Available
          </Text>
        </View>
      );
    }
    return (
      <View style={{backgroundColor: '#fff', }}>
        <ScrollView style={{paddingBottom: 20}}>
          <Text
            key={1361}
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 30,
              paddingTop: 20,
              color: '#369',
            }}>
            Venues
          </Text>
          {venues.venues.centers.map((center, index) => {
            // console.log(center);

            return (
              <View style={styles.card} key={index}>
                <Text style={styles.text}>{center.name}</Text>
                <Text style={styles.bodyText}>{center.address}</Text>
                <Text style={{color: '#369', fontWeight: 'bold'}}>
                  Fees Type : {center.fee_type}
                </Text>
                {center.fee_type == 'PAID' ? (
                  <View>
                    <Text style={{color: '#369', fontWeight: 'bold'}}>
                      Fees Paid :{center.vaccine_fees[fee]}
                    </Text>
                  </View>
                ) : (
                  <Text></Text>
                )}
                {center.sessions.map((session, index) => {
                  return (
                    <View key={index*20} style  style={{paddingVertical: 10}}>
                      <Text style={{color: '#369'}}>Session : {index + 1}</Text>
                      <Text style={{color: '#369'}}>
                        Vaccine : {session.vaccine}
                      </Text>
                      <Text style={{color: '#369'}}>
                        Age Limit : {session.min_age_limit}
                      </Text>
                      <Text style={{color: '#369'}}>
                        Available Capacity : {session.available_capacity}
                      </Text>
                      <Text style={{color: '#369'}}>
                        Available for Dose 1 :{' '}
                        {session.available_capacity_dose1}
                      </Text>
                      <Text style={{color: '#369'}}>
                        Available for Dose 2 :{' '}
                        {session.available_capacity_dose2}
                      </Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  } else {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'F4F8FA',
        }}>
        <Spinner visible={loading} animation="fade" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    marginHorizontal: 10,
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 8,
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#F0F8FF',
  },
  titleText: {
    color: '#369',
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
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default ViewDetails;
