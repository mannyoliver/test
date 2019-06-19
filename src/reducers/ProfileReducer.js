/* eslint-disable no-console */


const Initial_State = { };

export default (state = Initial_State, action) =>{
    switch (action.type){

        case 'Profie_Fetch':
         return  action.payload;
       

        default:
        return state;
    }
}