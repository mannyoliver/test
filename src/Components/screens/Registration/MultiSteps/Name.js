/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */

import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import {NameType} from '../../../../actions/UsersAction'

export class Username extends Component {

    static navigationOptions = {

        header: null,

    }


    render() {
        return (

            <View style={styles.a}>
                <View style={{

                    borderBottomColor: '#a74be5',
                    padding: 5,
                    borderBottomWidth: 5,
                    width: '50%',
                    left: 0,
                    position: 'absolute',
                    top: 120,
                }} >
                    <Text>50%</Text>
                </View>

                <View style={styles.le}>
                    <Icon
                        name='arrow-circle-left'
                        color='#f50'
                        size={30}
                        onPress={() => this.props.navigation.goBack()} />
                </View>

                <View >
                    <Text style={styles.b}>Name</Text>
                    <TextInput
                        style={{ borderBottomColor: '#a74be5', padding: 5, borderBottomWidth: 1 }}
                        placeholder='Username'
                        onChangeText={text => this.props.NameType( text)}
                        // eslint-disable-next-line react/prop-types
                        vaule={this.props.name}
                    />
                    <View style={{ padding: 20 }}>
                        <Button
                            onPress={() => this.props.navigation.navigate('Loc')}
                            title="Continue"
                            color="#841584"
                            accessibilityLabel="Continue"
                            style={{ padding: 20 }}
                            disabled={false}
                        />
                    </View>
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

    le: {
        left: 20,
        position: 'absolute',
        top: 90,
    },


})

const mapStateToProps = (state) => {
    const { name } = state.userKey;
  
    return { name };
  };

export default connect (mapStateToProps, { NameType }) (Username);

