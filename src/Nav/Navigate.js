import { useScreens } from 'react-native-screens';
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
useScreens();

import  SignupForm from '../Components/screens/Registration/SignupForm';
import LoginForm from '../Components/screens/Registration/LoginForm';
import  Gender from '../Components/screens/Registration/MultiSteps/Gender';
import  Username from '../Components/screens/Registration/MultiSteps/Name';
import  DateOfBirth from '../Components/screens/Registration/MultiSteps/Birth';
import  UploadPic from '../Components/screens/Registration/MultiSteps/UploadPic';
import  Location from '../Components/screens/Registration/MultiSteps/Location';

import  Home  from '../Components/screens/Home'
import  Profile   from '../Components/screens/Profiles'

const Tab = createBottomTabNavigator({
  Home: Home,
  Pro: Profile ,
});


const Stack = createStackNavigator(
    {
     Name: Username,
     Loc: Location,
     Gen: Gender,
     Birth: DateOfBirth,
     Pic: UploadPic,
     
     
    },
    { 
      initialRouteName: 'Gen',
      
    }
  );


const Switch = createSwitchNavigator(
    {
      Sign:  SignupForm, 
      Log: LoginForm,
      Other: Stack,
      Tabb: Tab
  
    },
  
    {
  initialRouteName: 'Sign',
    },
  
  );
  
  const Navigate = createAppContainer(Switch)
  
  export default Navigate;