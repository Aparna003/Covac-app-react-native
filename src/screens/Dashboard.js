import React, {useEffect, useState} from 'react';
// import {StackedAreaChart} from 'react-native-svg-charts';
// import * as shape from 'd3-shape';
import {
  View,
  Button,
  Dimensions,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';

import {
  getStates,
  getDistricts,
  calendarByDistrict,
  calendarByPin,
  findByDistrict,
  findByPin,
} from 'cowin-api-client';

const window_width = Dimensions.get('window').width - 40;

import moment from 'moment';
const Dashboard = ({navigation}) => {
  const [states, setStates] = useState([]);
  const [StateId, setStateId] = useState(null);
  const [openState, setOpenState] = useState(false);
  const [openDistrict, setOpenDistrict] = useState(false);
  const [district, setDistrict] = useState([]);
  const [districtId, setDistrictId] = useState(null);
  const [date, setDate] = useState('Please Pick a Date');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [venue, setVenue] = useState([]);

  const [india, setIndia] = useState({});

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  useEffect(() => {
    // covid.countries({country: 'india'}).then(res => console.log(res));
    let x = null;
    axios
      .get('https://api.covid19api.com/summary')
      .then((res) => {
        x = res;
        setIndia(
          x.data.Countries.filter(
            (country) => country.ID == '85fa473a-2e6b-43b9-9f9b-b452fe1af3bb',
          )[0],
        );
        // console.log(india);
        if (states.length == 0) {
          getStates().then((sta) => {
            sta = sta.states.map((e) => {
              return {
                label: e.state_name,
                value: e.state_id,
              };
            });
            setStates(sta);
          });
        }
        if (StateId != null) {
          getDistricts(StateId).then((district) => {
            setDistrict(
              district.districts.map((e) => {
                return {
                  label: e.district_name,
                  value: e.district_id,
                };
              }),
            );
          });
        }
      })
      .catch(() => {});
  }, [StateId, districtId, india]);
  const onDateChange = async (date) => {
    let Fdate = moment(date).format('DD-MM-YYYY');
    const venue = await calendarByDistrict(districtId, Fdate);
    // console.log(venue);
    setVenue(venue.centers);
    // console.log(Fdate);
    setDate(Fdate);
    setDatePickerVisibility(false);
    navigation.navigate('viewDetails', {
      venue,
    });
  };

  return (
    <View style={{padding: 20, backgroundColor: 'white', height: '100%'}}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <View style={{width: window_width / 2 - 10}}>
            <DropDownPicker
              open={openState}
              value={StateId}
              items={states}
              zIndex={100}
              setOpen={setOpenState}
              setValue={setStateId}
              setItems={setStates}
              placeholder="Select State"
            />
          </View>
          <View style={{width: window_width / 2 - 10}}>
            <DropDownPicker
              open={openDistrict}
              value={districtId}
              items={district}
              zIndex={100}
              setOpen={setOpenDistrict}
              setValue={setDistrictId}
              setItems={setDistrict}
              placeholder="Select district"
            />
          </View>
        </View>
        <Button
          style={{margin: 20, width: window_width - 20}}
          disabled={districtId ? false : true}
          title={date}
          onPress={showDatePicker}
        />
      </View>
      <ScrollView style={{marginTop: 20}}>
        <View style={{zIndex: 0}}>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={onDateChange}
            onCancel={() => {
              setDatePickerVisibility(false);
            }}
          />

          <Image
            source={require('../images/img3.png')}
            style={{width: window_width - 20, height: 200}}
          />

          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={[
                  styles.card,
                  {alignItems: 'center', backgroundColor: '#FFEFD8'},
                ]}>
                <Text style={styles.cardTitle}>Total cases</Text>
                <Text style={styles.cardNumber}>{india.TotalConfirmed}</Text>
              </View>
              <View
                style={[
                  styles.card,
                  {
                    padding: 80,
                    alignItems: 'center',
                    backgroundColor: '#CEC8E4',
                  },
                ]}>
                <Text style={styles.cardTitle}>New cases</Text>
                <Text style={styles.cardNumber}>{india.NewConfirmed}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.card, {backgroundColor: '#FFCCCB'}]}>
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.cardTitle}>Total Recovered</Text>
                  <Text style={styles.cardNumber}>{india.TotalRecovered}</Text>
                </View>
              </View>
              <View style={[styles.card, {backgroundColor: '#F0F8FF'}]}>
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.cardTitle}>Total Deaths</Text>
                  <Text style={styles.cardNumber}>{india.TotalDeaths}</Text>
                </View>
              </View>
            </View>
          </View>
          {/* <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={[
                  styles.card,
                  {alignItems: 'center', backgroundColor: '#FFEFD8'},
                ]}>
                <Text style={styles.cardTitle}>Total cases</Text>
                <Text style={styles.cardNumber}>{india.TotalConfirmed}</Text>
              </View>
              <View
                style={[
                  styles.card,
                  {
                    padding: 80,
                    alignItems: 'center',
                    backgroundColor: '#CEC8E4',
                  },
                ]}>
                <Text style={styles.cardTitle}>New cases</Text>
                <Text style={styles.cardNumber}>{india.NewConfirmed}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.card, {backgroundColor: '#FFCCCB'}]}>
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.cardTitle}>Total Recovered</Text>
                  <Text style={styles.cardNumber}>{india.TotalRecovered}</Text>
                </View>
              </View>
              <View style={[styles.card, {backgroundColor: '#F0F8FF'}]}>
                <View style={{alignItems: 'center'}}>
                  <Text style={styles.cardTitle}>Total Deaths</Text>
                  <Text style={styles.cardNumber}>{india.TotalDeaths}</Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={[styles.card, {alignItems: 'center'}]}>
                <Text style={styles.cardTitle}>New Recovered</Text>
                <Text style={styles.cardNumber}>{india.NewRecovered}</Text>
              </View>
              <View style={styles.card}>
                <View style={{padding: 80, alignItems: 'center'}}>
                  <Text style={styles.cardTitle}>New Deaths</Text>
                  <Text style={styles.cardNumber}>{india.NewDeaths}</Text>
                </View>
              </View>
            </View>
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 4,
    width: 125,
  },
  cardTitle: {fontWeight: '700', fontSize: 15, textAlign: 'center'},
  cardNumber: {fontSize: 15, textAlign: 'center'},
});
