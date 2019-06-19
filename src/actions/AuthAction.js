import firebase from 'firebase';




export const emailType = (text) =>{

    return{  
        type: 'email_Enter',
        payload: text
    };
}


export const passwordType = (text) =>{

    return {
        type: 'password_Enter',
        payload: text
    };
}


export const CreateUser = ( {email, password, navigation} ) =>{

    return (dispatch) =>{


        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then(user => {
            dispatch({ type: 'login_Success',
                      payload: user})


            navigation.navigate('Name');
        })
    }
}

export const LoginUser = ( {email, password, navigation} ) =>{

    return (dispatch) =>{

        firebase.auth().signInWithEmailAndPassword( email, password )
        .then(user => { 
          dispatch({ type: 'login_Success',
                     payload: user})
                   
          navigation.navigate('Home');
        })
    }

}

