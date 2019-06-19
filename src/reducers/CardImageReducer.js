const Initial_State ={ cardImage: null };

export default (state = Initial_State, action) =>{
    switch (action.type){

        case 'Card_Image_Fetch':
            
        return {...state, cardImage: action.payload};
       

        default:
        return state;
    }
}