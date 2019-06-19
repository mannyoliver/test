/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Button, Image, View, } from 'react-native';
import { Constants, ImagePicker, Permissions } from 'expo';
//import uuid from 'uuid';
import firebase from 'firebase';





export default class Uploading extends React.Component {
  state = {
    image: null,

  };


  render() {
    let { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


        <Button
          onPress={this._pickImage}
          title="Pick an image from camera roll"
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}


      </View>
    );
  }




  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });



    if (!result.cancelled) {
      this.setState({ image: result.uri });
      // eslint-disable-next-line no-undef
      uploadUrl = await uploadImageAsync(this.state.image);
    }
  };



}

async function uploadImageAsync(uri) {

  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });
  const { currentUser } = firebase.auth();

  const ref = firebase.storage().ref().child(`images/${currentUser.uid}`);
 
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
}