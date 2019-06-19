/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-color-literals */
'use strict';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';
import { CardFetch } from '../../actions/UsersAction';
import _ from 'lodash';
//import CardImages from '../common/CardsImages'





class Home extends React.Component {


  componentWillMount() {

    this.props.CardFetch();
  }


  render() {


    return (

      <View >
         

        {this.props.cards.map(card => {
      console.log(card)


          return (
            <View>
              <Text style={styles.text}>This is card {card.name}</Text>
              
            </View>
          );
        })}

      </View>
    )
  }

}

const styles = StyleSheet.create({
  
  
  text: {
    color: 'red',
    fontSize: 20,
    paddingBottom: 10,
    paddingTop: 10
  },
})

const mapStateToProps = (state) => {

  const cards = _.map(state.cards, (val, uid) => {
    return { ...val, uid };
  });

  return { cards };
};

export default connect(mapStateToProps, { CardFetch })(Home);

