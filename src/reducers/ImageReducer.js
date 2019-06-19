/* eslint-disable no-console */


const Initial_State ={ image: null };

export default (state = Initial_State, action) =>{
    switch (action.type){

        case 'Image_Fetch':

        
            
        return {...state, image: action.payload};
       

        default:
        return state;
    }
}