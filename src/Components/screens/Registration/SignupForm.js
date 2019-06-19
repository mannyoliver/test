/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView, TextInput, Button,TouchableOpacity, StyleSheet } from 'react-native';
import PasswordInputText from 'react-native-hide-show-password-input';
import { connect } from 'react-redux';

import { passwordType, emailType, CreateUser } from '../../../actions/AuthAction';




class SignupForm extends Component {

    ListenForEmailChange = (text) => {
        // eslint-disable-next-line react/prop-types
        this.props.emailType(text);
    }

    ListenForPasswordChange = (text) => {
        // eslint-disable-next-line react/prop-types
        this.props.passwordType(text); 
    }

    onButtonpress = () => {
        // eslint-disable-next-line react/prop-types

        const { email, password, navigation } = this.props;

        // eslint-disable-next-line react/prop-types
        this.props.CreateUser({ email, password, navigation });

    }

render() {

    return (  
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <View >

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Log')}>
                     <Text style={{color: '#222', fontSize: 22}}>Or login </Text>
              </TouchableOpacity>

                <Text >Email</Text>
                <TextInput
                    autoCorrect={false}
                    placeholder='example@example.com'
                    onChangeText={this.ListenForEmailChange}
                    vaule={this.props.email}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    style={styles.a}
                />
            </View>

            <View >
                
                <PasswordInputText
                    
                    placeholder='password'
                    onChangeText={this.ListenForPasswordChange}
                    vaule={this.props.password}
                    style={styles.b}
                />
            </View>


            <View style={{ padding: 20, marginTop: 30 }}>
            <Button
                         onPress={this.onButtonpress}
                         title="Sign Up"
                         color="#841584"
                         accessibilityLabel="Sign Up"/>
            </View>

           
        </KeyboardAvoidingView>
    );
}
}

const styles = StyleSheet.create({

    a: {

        borderBottomColor: '#a74be5',
        borderBottomWidth: 1,
        height: 30,
        padding: 5,
        width: 200

    },

    b: {

        
       
        height: 20,
        
        width: 200,

    },


})

const mapStateToProps = state => {
    return {
        email: state.authKey.email,
        password: state.authKey.password,
    }
}

export default connect(mapStateToProps, { emailType, passwordType,CreateUser })(SignupForm);
