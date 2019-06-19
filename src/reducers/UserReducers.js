/* eslint-disable no-console */


const Initial_State ={ name: '', gender: '', age: 0, city: ''};

export default (state = Initial_State, action) =>{
    switch (action.type){

        case 'Gender_Enter':
            
        return {...state, gender: action.payload};

        case 'name_Enter':
            
        return {...state, name: action.payload};

        
        case 'Age_enter':
            
        return {...state, age: action.payload};


        case 'city_Enter':
            
        return {...state, city: action.payload};
       

        default:
        return state;
    }
}