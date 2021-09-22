import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { images } from 'theme'
import getData from '../../api/GetApi';
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
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  button: {
    marginVertical: 20,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
})

const Home = ({ navigation }) => {
  let weather_data;
  let handle_data = async () => {
    weather_data = await getData()
  }

  useEffect(() => {
    handle_data()
  }, [])


return (

  <View style={styles.root}>
    <ImageBackground
      source={images.farm}
      resizeMode="stretch"
      style={styles.image}
    >
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Home</Text>
      <View>
        <Button
          style={styles.button}
          title="Check The Sensor1"
          color="white"
          backgroundColor={colors.lightPurple}
          onPress={() => {
            navigation.navigate('Temp', { from: 'Home', data: weather_data })
          }}
        />
        <Button
          style={styles.button}
          title="Check The Sensor2"
          color="white"
          backgroundColor={colors.lightPurple}
          onPress={() => {
            navigation.navigate('Temp', { from: 'Home' })
          }}
        />
      </View>
      <View>
        <Button
          style={styles.button}
          title="Sensor1"
          color="white"
          backgroundColor={colors.lightPurple}
          onPress={() => {
            navigation.navigate('Temp', { from: 'Home' })
          }}
        />
        <Button
          style={styles.button}
          title="Check The Greenhouse4"
          color="white"
          backgroundColor={colors.lightPurple}
          onPress={() => {
            navigation.navigate('Temp', { from: 'Home' })
          }}
        />
      </View>
    </ImageBackground>
  </View>
)
        }
Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
