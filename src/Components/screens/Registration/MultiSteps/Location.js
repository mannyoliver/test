/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
import * as React from 'react';
import { Text, View, TextInput, Button, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { cityType } from '../../../../actions/UsersAction';




class Location extends React.Component {


  render() {

    return (

      <KeyboardAvoidingView behavior="padding" style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <View >
          <Text>City</Text>
          <TextInput
            style={{ borderBottomColor: '#a74be5', padding: 5, borderBottomWidth: 1 }}
            placeholder='Georgetown'
            onChangeText={text => this.props.cityType(text)}
            vaule={this.props.city}
            maxLength={10}
          />
        </View>

        <View style={{ padding: 20 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Gen')}
            title="Continue"
            color="#841584"
            accessibilityLabel="Continue"
            style={{ padding: 20 }}
            disabled={false}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => {

  const { city } = state.userKey;

  return { city };
}

export default connect(mapStateToProps, { cityType })(Location);