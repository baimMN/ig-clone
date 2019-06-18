
import React, {Component} from 'react';
import ImgWrap from './src/component/imgwrap.js'
import { View,Image,ScrollView} from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid'
import { Container,Text,Content,Header, Left, Body,Right,Footer } from 'native-base'
import {styles} from './src/style.js'
import Icons from 'react-native-vector-icons/AntDesign'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {connect} from 'react-redux'
import Icone from 'react-native-vector-icons/EvilIcons'
import Home from './src/component/home.js'
import Profile from './src/component/profile.js'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Iconn from 'react-native-vector-icons/Entypo'
import Iconm from 'react-native-vector-icons/MaterialIcons'
import rootReducer from './src/reducer/rootreducer'
 
const store=createStore(rootReducer)
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      route:true,
      rou:'yaakkk'
    }
  }

  render() {
    alert(props.changeRoute)
    return (
      <Provider store={this.store}>
        <Container>
          {this.state.route ? <Home/> : <Profile/>}
          <Footer style={styles.footer}>
            <View style={{flex: 1,alignItems:'center'}} >
              <Iconn size={25} name='home' onPress={() => {this.setState(prev => ({route:!prev.route}))}}/>
            </View>
            <View style={{flex: 1,alignItems:'center'}}>
              <Icons size={25} name='search1' />
            </View>
            <View style={{flex: 1,alignItems:'center'}}>
              <Icons size={25} name='plussquareo' />
            </View>
            <View style={{flex: 1,alignItems:'center'}}>
              <Icons size={25} name='hearto'/>
            </View>
            <View style={{flex: 1,alignItems:'center'}} >
              <Iconm size={30} name='person-outline' onPress={() => {this.setState(prev => ({route:!prev.route}))}}/>
            </View>
          </Footer>
        </Container> 
      </Provider>
    );
  }
} 
const getState= (state,props)=> {
  return {
    route:state.route
  }
}

const sendAct=(dispatch) => {
  return {
    changeRoute:(route) => {dispatch({type:'changeRoute',route})}
  }
}

export default connect(getState,sendAct)(App)