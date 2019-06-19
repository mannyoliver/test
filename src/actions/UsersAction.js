
import firebase from 'firebase';
//import uuid from 'uuid';




export const GenderType = (text) => {

    return {
        type: 'Gender_Enter',
        payload: text
    };

}




export const NameType = (text) => {

    return {
        type: 'name_Enter',
        payload: text
    };

}

export const cityType = (text) => {

    return {
        type: 'city_Enter',
        payload: text
    };

}



export const AgeCreate = (text) => {

    return {
        type: 'Age_enter',
        payload: text
    };

}



export const DetailsCreated = ({ name, gender, age, city, navigation }) => {

    const { currentUser } = firebase.auth();

    return () => {
        firebase.database().ref(`/users/${currentUser.uid}`)
            .push({ name, gender, age, city })
            .then(() => {
                navigation.navigate('Home')
            });
    };
}


export const ProfileFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
            .on('value', snapshot => {
                dispatch({
                    type: 'Profie_Fetch',
                    payload: snapshot.val()
                });
            });

    }
}


export const ImageFetch = () => {

    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.storage().ref().child(`/images/${currentUser.uid}`).getDownloadURL()
        .then( uri => {
                dispatch({
                    type: 'Image_Fetch',
                    payload: uri
                });
            });

    }
}


export const CardFetch = () => {

    

    return (dispatch) => {
        firebase.database().ref('users')
            .on('value', snapshot => {
                dispatch({
                    type: 'Card_Fetch',
                    payload: snapshot.val()
                });
            });

    }
}
/*
export const CardImageFetch = () => {
    

    return (dispatch) => {
        firebase.storage().ref().child('images').getDownloadURL()
        .then( uri => {
                dispatch({
                    type: 'Card_Image_Fetch',
                    payload: uri
                });
            });

    }
}

*/