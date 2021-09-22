import React , { useState, useEffect }from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import getData from '../../api/GetApi';
import getStatus from '../../function/GetStatus';
import getColor from '../../function/GetColor';
import getFilteredData from '../../api/FilterApi';

const Weather = ({ route, navigation }) => {


  const [status, setstatus] = useState("Nothing");
  let data;
  let filtered_data
  const [temp, setTemp] = useState(0)
  const [ec, setEc] = useState(0)
  const [ph, setPh] = useState(0)
  const [tds, setTds] = useState(0)
  const [color, setColor] = useState('')
  let handle_data = async () => {
    filtered_data = await getFilteredData(route.params.date, route.params.time)
    if (filtered_data.length >= 1){
      data = filtered_data
    }else{
      data = await getData()
    }
    console.log(data[0])
    //assign recent data 
    setTemp(await data[0]['Temp'])
    setEc(await data[0]['EC']) 
    setPh(await data[0]['pH'])
    setTds(await data[0]['TDS'])
    setstatus(await getStatus(temp, humid))
    setColor(await getColor(temp))
  }

  useEffect(() => {
    handle_data()
  }, [])


  return (
    <View style={[
      styles.weatherContainer,
      { backgroundColor: color}
    ]}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons size={48} name={'weather-sunny'} color={'#fff'} />
        <Text style={styles.tempText}>Temp:{temp}˚</Text>
        <Text style={styles.tempText}>EC:{ec}˚</Text>
        <Text style={styles.tempText}>pH:{ph}˚</Text>
        <Text style={styles.tempText}>TDS:{tds}˚</Text>
        
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{status}</Text>
        <Text style={styles.subtitle}>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
  },
  headerContainer: {
    marginTop:70,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Weather;