import * as React from 'react';
import { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Marker } from 'react-native-maps';


const Map = ({route, navigation}) =>{

  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  });

  return (
        <View style={styles.container}>
            <MapView 
              showsBuildings
              ref={ref => { this.map = ref }}
              onLayout={() => {
                this.map.animateToBearing(125);
                this.map.animateToViewingAngle(45);
              }}
              style={styles.map} 
              initialRegion={region}
            >
            </MapView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

export default Map