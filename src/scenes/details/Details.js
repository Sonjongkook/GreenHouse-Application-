import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, ScrollView
} from 'react-native'
import { Dimensions } from "react-native";
import { colors } from 'theme'
import {
  LineChart,
} from 'react-native-chart-kit'
import PureChart from "custom-react-native-pure-chart";
import HeatMap from 'react-native-heatmap-chart';



const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
    marginLeft:10
  },
  heatmap: {
    alignContent:'center',
    justifyContent: 'center'

  }
})

const Details = ({ route, navigation }) => {
  const from = route?.params?.from

  let humidity_dataset = []
  let temp_dataset = []
  let data;
  let handle_data = async () => {
    data = await route.params.data
    console.log(data)
    await data.forEach(element => {
      humidity_dataset.push({'x':element['Date'] , 'y': element['Humidity']}) 
      temp_dataset.push({'x':element['Date'] , 'y':element['Temp']})
    });
    console.log(humidity_dataset.slice(1,10))
    console.log(temp_dataset.slice(1,10))
  }

  useEffect(() => {
    handle_data()
  }, [])


  const click = item => {
    console.log(`Value: ${item.value}`);
    console.log(`Index: ${item.index}`);
  };

  let sampleData = [
    {
      seriesName: 'Temperature',
      data: [
        {x: '3/10/2020', y: 30},
        {x: '3/11/2020', y: 200},
        {x: '3/12/2020', y: 170},
        {x: '3/13/2020', y: 250},
        {x: '3/14/2020', y: 10}
      ],
      color: '#297AB1'
    },
    {
      seriesName: 'Humidity',
      data: [
        {x: '3/10/2020', y: 20},
        {x: '3/11/2020', y: 100},
        {x: '3/12/2020', y: 140},
        {x: '3/13/2020', y: 550},
        {x: '3/14/2020', y: 40}
      ],
      color: 'red'
    }
  ]
 
  return (

  
    <ScrollView >

      <Text style={styles.title}>
        Temperature Chart
      </Text>
      <LineChart
        data={{
          labels: ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
          datasets: [
            {
              data: [
                13,
                44,
                33,
                55,
                44,
                77
              ]
            }
          ]
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel={'F'}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />

      <PureChart data={sampleData} type='line' /> 

      <HeatMap style={styles.heatmap} 
      values={[70, 80, 6, 1, 7, 3, 0, 8, 6, 2, 0, 10, 20, 12, 0, 0, 10, 0, 17, 8, 0, 6, 0, 6, 10, 23]} 
      onBlockPress={click} />

      
      <HeatMap style={styles.heatmap} 
      values={[70, 4, 6, 1, 7, 3, 0, 8, 6, 2, 0, 10, 20, 12, 0, 0, 10, 0, 17, 8, 0, 6, 0, 6, 10, 23]} 
      onBlockPress={click} />



    </ScrollView >
    
    

    
    
  )
}

Details.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

Details.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Details
