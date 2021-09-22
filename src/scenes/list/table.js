import React, { Component, useState, useEffect } from 'react';
import getData from '../../api/GetApi';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { images } from 'theme'


let Item = ({ item }) => {
  return (
    <View style={styles.listItem} >
      <Text  style={{width:70, height:60,borderRadius:30}} >{item['Date']}{item['Time']}</Text>
      <View style={{height:50,width:50, justifyContent:"center", alignItems:"center",flex:1}}>
        <Image source={images.temp}  style={{width:40, height:40,borderRadius:10}} ></Image>
        <Text style={{fontWeight:"bold"}}>{item['Temp']} c</Text>
      </View>
      <View style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
        <Image source={images.humid}  style={{width:40, height:40,borderRadius:10}} ></Image>
        <Text style={{fontWeight:"bold"}}>{item['EC']}ms</Text>
      </View>
      <View style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
        <Image source={images.humid}  style={{width:40, height:40,borderRadius:10}} ></Image>
        <Text style={{fontWeight:"bold"}}>{item['pH']}ph</Text>
      </View>
      <View style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
        <Image source={images.humid}  style={{width:40, height:40,borderRadius:10}} ></Image>
        <Text style={{fontWeight:"bold"}}>{item['TDS']}TDS</Text>
      </View>
    </View>
  );
}

const Table = ({route, navigation}) => {
  const [status, setstatus] = useState("Nothing");
  const [data, setData] = useState([])
  const [temp, setTemp] = useState(0)
  const [humid, setHumid] = useState(0)
  const [color, setColor] = useState('')
  let handle_data = async () => {
    setData(await getData())
    //assign recent data 
    setTemp(await data[0]['Temp'])
    setHumid(await data[0]['Humidity']) 
    setstatus(await getStatus(temp, humid))
    setColor(await getColor(temp))
  }

  useEffect(() => {
    handle_data()
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Water Quality Status</Text>
      
      <FlatList
        style={{flex:1}}
        data={data}
        renderItem={({ item }) => <Item item={item}/>}
        keyExtractor={item => item['Time']}
      />
    </View>
   
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop:20
  },
  listItem:{
    margin:10,
    padding:10,
    backgroundColor:"#FFF",
    width:"80%",
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderRadius:5
  },
  text:{
    fontSize: 35,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  }
});


export default Table;