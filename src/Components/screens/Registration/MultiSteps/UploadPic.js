/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import Uploading from '../../../common/Uploading';


import { DetailsCreated } from '../../../../actions/UsersAction'


class UploadPic extends Component {

    static navigationOptions = {

        header: null,
    }



    onButtonPress = () => {
        const { name, gender, age, image, city, navigation } = this.props

        this.props.DetailsCreated({ name, gender, age, city, image, navigation });
    }

    render() {



        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{

                    borderBottomColor: '#a74be5',
                    padding: 5,
                    borderBottomWidth: 5,
                    width: '80%',
                    left: 0,
                    position: 'absolute',
                    top: 120,
                }}>
                    <Text>85%</Text>
                </View>

                <Uploading />

                <View style={styles.le}>
                    <Icon
                        name='arrow-circle-left'
                        color='#f50'
                        size={30}
                        onPress={() => this.props.navigation.goBack()} />
                </View>


                <View style={{ padding: 20 }}>
                    <Button
                        onPress={this.onButtonPress}
                        title="Continue"
                        color="#841584"
                        accessibilityLabel="Continue" />

                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({


    le: {
        left: 20,
        position: 'absolute',
        top: 90,
    },


})

const mapStateToProps = (state) => {
    const { name, gender, age, city, image } = state.userKey;

    return { name, gender, age, city, image };
};

export default connect(mapStateToProps, { DetailsCreated })(UploadPic);