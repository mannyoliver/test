/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/jsx-key */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-deprecated */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { View, Image} from 'react-native';
import { connect } from 'react-redux';
import { ImageFetch } from '../../actions/UsersAction'





class UserImage extends React.Component {

  componentWillMount() {

    this.props.ImageFetch();
  }


  render() {

    let { image } = this.props;

    return (
      
      <View>

            
              <Image source={{ uri: image }} style={{ width: '100%', height: '70%' }} />
          

      </View>
    );
  }

}

const mapStateToProps = (state) => {

const {  image } = state.image;

  return { image };
};




export default connect(mapStateToProps, {ImageFetch })(UserImage);