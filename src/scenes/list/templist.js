import React, { useState, useEffect }from 'react'
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


const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 35,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
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

const List = ({ route, navigation }) => {
  let data_to_pass;
  let handle_data = async () => {
    data_to_pass = await route.params.data
  }

  useEffect(() => {
    handle_data()
  }, [])

  
  return (
    <View style={styles.root}>
      <ImageBackground
        source={images.greenhouse}
        resizeMode="stretch"
        style={styles.image}
      >
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Water Sensor 1</Text>
        <View>
          <Button
            style={styles.button}
            title="CHARTS"
            color="white"
            backgroundColor={colors.lightPurple}
            onPress={() => {
              navigation.navigate('Details', { from: 'Home', data: data_to_pass })
            }}
          />
          <Button
            style={styles.button}
            title="CHECK CONDITION"
            color="white"
            backgroundColor={colors.lightPurple}
            onPress={() => {
              navigation.navigate('Weather', { from: 'Home', data: data_to_pass })
            }}
          />
        </View>
        <View>
          <Button
            style={styles.button}
            title="TABLE"
            color="white"
            backgroundColor={colors.lightPurple}
            onPress={() => {
              navigation.navigate('Table', { from: 'Home', data: data_to_pass })
            }}
          />
          <Button
            style={styles.button}
            title="SEARCH"
            color="white"
            backgroundColor={colors.lightPurple}
            onPress={() => {
              navigation.navigate('Search', { from: 'Home', data: data_to_pass })
            }}
          />
          <Button
            style={styles.button}
            title="Map"
            color="white"
            backgroundColor={colors.lightPurple}
            onPress={() => {
              navigation.navigate('Map', { from: 'Home', data: data_to_pass })
            }}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

export default List
