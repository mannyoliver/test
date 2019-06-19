/* eslint-disable no-console */


const Initial_State ={ email: '', password: '', user: null };

export default (state = Initial_State, action) =>{
    switch (action.type){

        case 'email_Enter':
        return {...state, email: action.payload};
       
        case 'password_Enter':     
        return {...state, password: action.payload};

        case 'login_Success':                     
        return {...state, user: action.payload  }; 

        default:
        return state;
    }
}