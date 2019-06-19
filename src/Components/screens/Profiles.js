/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/jsx-key */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-deprecated */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { ProfileFetch } from '../../actions/UsersAction';
import UserImage from '../common/usersImage';
import _ from 'lodash';




class Profile extends React.Component {

  componentWillMount() {

    this.props.ProfileFetch();

  }


  render() {

    return (

      <View>

        {this.props.users.map(user => {



          return (
            <View>

              <UserImage />

              <View style={styles.a}>

                <View>

                  <Text style={styles.b}>{user.name},</Text>

                </View>

                <View>

                  <Text style={styles.b}>{user.age}</Text>

                </View>

              </View>

              <Text style={styles.b}>{user.city}</Text>

              <Text style={styles.b}>{user.gender}</Text>
            </View>

          );
        })}



      </View>
    );
  }

}

const mapStateToProps = (state) => {

  const users = _.map(state.users, (val, uid) => {
    return { ...val, uid };
  });

  return { users };
};


const styles = StyleSheet.create({

  a: {

    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10
  },

  b: {

    color: '#555',
    //fontFamily: 'Cochin',
    fontSize: 15,
    fontWeight: 'bold'
  },


})


export default connect(mapStateToProps, { ProfileFetch })(Profile);