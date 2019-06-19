/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {AgeCreate} from '../../../../actions/UsersAction';

class DateOfBirth extends Component {

  static navigationOptions = {

    header: null,

}


state = { isDateTimePickerVisible: false };
  

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = (date) => {
    this.hideDateTimePicker();
   

    var today = new Date();
    var birthDate = new Date(date);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    this.props.AgeCreate( age );
    this.props.navigation.navigate('Pic');
   
  };

  render() {
    return (
      <View style={styles.a}>
       <View style={{ borderBottomColor: '#a74be5', padding: 5, borderBottomWidth: 5, width: '65%',  left: 0,
                    position: 'absolute',
                    top: 120,
                }}>
                    <Text>70%</Text>
                </View>
                <View style={styles.le}>
                    <Icon
                        name='arrow-circle-left'
                        color='#f50'
                        size={30}
                        onPress={() => this.props.navigation.goBack()} />
                </View>
        <Button title="Show DatePicker" onPress={this.showDateTimePicker} />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
          datePickerModeAndroid= 'spinner'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({

    a: {

        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },

    le: {
        left: 20,
        position: 'absolute',
        top: 90,
    },
})

export default connect (null, { AgeCreate }) (DateOfBirth);