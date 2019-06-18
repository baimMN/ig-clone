
import { Navigation } from 'react-native-navigation'
import App from './App';
import Login from './src/component/login.js'
import Profile from './src/component/profile.js'
import Home from './src/component/home.js'

Navigation.registerComponent(`login`, () => Login);
Navigation.registerComponent(`app`, () => App);
Navigation.registerComponent(`home`, () => Home);
Navigation.registerComponent(`profile`, () => Profile);

Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
	  root: {
	  	component:{
	  		name:'login'
	  	}
	  }  
	})
})
