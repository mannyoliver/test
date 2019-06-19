import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import UserReducers from './UserReducers';
import ProfileReducer from './ProfileReducer';
import ImageReducer from './ImageReducer';
import CardsReducer from './CardsReducer';
import CardImageReducer from './CardImageReducer';


export default combineReducers({
    authKey: AuthReducers,
    userKey: UserReducers,
    users: ProfileReducer,
    image: ImageReducer,
    cards: CardsReducer,
    cardImage: CardImageReducer
    

});