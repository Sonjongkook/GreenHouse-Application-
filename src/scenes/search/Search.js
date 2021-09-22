import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import DateTimePickerModal  from 'react-native-modal-datetime-picker';

const Search = ({route, navigation}) => {

  const [isDateTimePickerVisible, setDateTimePickerVisible] = useState(false)
  const [selecteddate, setselecteddate] = useState('')
  const [dateToPass, setDateToPass] = useState('');
  const [timeToPass, setTimeToPass] = useState('');

  const showDateTimePicker = () => {
    setDateTimePickerVisible(true);
  }
  const hideDateTimePicker = () => {
    setDateTimePickerVisible(false);
  }
  const handleDatePicked = (pickeddate) => {
    // day   = pickeddate.getDate();
    // month = pickeddate.getMonth();
    // year  = pickeddate.getFullYear();
    // console.log('A date has been picked: ' + day + '-' + (month +1) + '-' + year);
    // console.log('A time has been picked: ' + pickeddate.getHours() + ":" + pickeddate.getMinutes() )
    setDateToPass((pickeddate.getMonth()+1) + "/" + pickeddate.getDate() + "/" + pickeddate.getFullYear())
    setTimeToPass(pickeddate.getHours() + ":" + pickeddate.getMinutes())
    hideDateTimePicker();
  };

  const showTime = () =>{
    console.log(dateToPass)
    console.log(timeToPass)
  }


  return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Button  title="Show Date Picker" onPress={showDateTimePicker} /> 
          <DateTimePickerModal
                        isVisible={isDateTimePickerVisible}
                        onConfirm={handleDatePicked}
                        onCancel={hideDateTimePicker}
                        mode={'datetime'}
                        datePickerModeAndroid={'spinner'}
          />
        </View>
        <View style={styles.button}>
          <Button style={styles.button} title="ShowTime" onPress={showTime} />
        </View>
        <View style={styles.button}>
          <Button style={styles.button} title="Submit" onPress={() => {
            navigation.navigate('Weather', {date:dateToPass, time:timeToPass})
          }} />
        </View>
      </View>
   
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    marginVertical:10
  }
});

export default Search