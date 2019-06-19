/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View,  StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import {GenderType} from '../../../../actions/UsersAction';




class Gender extends Component {

    static navigationOptions = {

        header: null,

    }


    onFemale = () => {

        
    
        this.props.GenderType('Female');
        this.props.navigation.navigate('Birth');
        
    }

    onMale = () => {

        

        this.props.GenderType('Male');
        this.props.navigation.navigate('Birth')
       
    }

    

    render() {
        return (

            <View style={styles.a} >

                <View style={{

                    borderBottomColor: '#a74be5',
                    padding: 5,
                    borderBottomWidth: 5,
                    width: '20%',
                    left: 0,
                    position: 'absolute',
                    top: 120,
                }}>
                    <Text>20%</Text>
                </View>


                <View >
                    <Text style={styles.b}>Gender</Text>

                    <TouchableOpacity
                        style={styles.c}
                        onPress={this.onMale}
                    >
                        <Text style={styles.d}> Male </Text>
                    </TouchableOpacity>

                    <Text style={styles.b}>or</Text>

                    <TouchableOpacity
                        style={styles.c}
                        onPress={this.onFemale}
                    >
                        <Text style={styles.d}>Female </Text>
                    </TouchableOpacity>

                </View>
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

    b: {
        alignItems: 'center',
        color: '#222',
        fontSize: 15,
        fontWeight: 'bold',
    },

    c: {
        backgroundColor: '#fff',
        borderRadius: 9,
        borderWidth: 1,
        height: 45,
        width: 200

    },


    d: {
        alignSelf: 'center',
        color: '#a74be5',
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10
    },
})

export default connect (null, { GenderType }) (Gender);

