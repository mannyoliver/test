/* eslint-disable no-console */


const Initial_State = { };

export default (state = Initial_State, action) =>{
    switch (action.type){

        case 'Card_Fetch':

        
         return  action.payload;
       

        default:
        return state;
    }
}