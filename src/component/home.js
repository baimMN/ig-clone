
import React, {Component} from 'react';
import ImgWrap from './imgwrap.js'
import { View,Image,ScrollView} from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid'
import { Container,Text,Content,Header, Left, Body,Right,Footer } from 'native-base'
import {styles} from '../style.js'
import Icons from 'react-native-vector-icons/AntDesign'
import Icone from 'react-native-vector-icons/EvilIcons'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Iconn from 'react-native-vector-icons/Entypo'
import Iconm from 'react-native-vector-icons/MaterialIcons'
 
export default class Home extends Component {
  account= [
    {type:'sss', src:'../image/elon.jpg'},
    {type:'ss',src:'../image/elon.jpg'},
    {type:'new',src:'../image/saad.jpg'},
    {type:'new',src:'../image/elon.jpg'},
    {type:'new',src:'../image/bill.jpg'},
    {type:'new',src:'../image/elon.jpg'},
    {type:'new',src:'../image/saad.jpg'},
    {type:'new',src:'../image/elon.jpg'},
  ]
  render() {
    return (
      <React.Fragment>
        <Header style={styles.header}>
          <Left style={{flex: 2}}>
            <Icons name='camerao' size={30} />
          </Left>
            <View style={{flex: 8,alignItems:'center',justifyContent:'center'}}>
              <Image source={require('../image/logoText.png')} style={{height: 50,width: 130}} />
            </View>
          <Right style={{flex: 2}}>
            <Icon name='paper-plane' size={27} /> 
          </Right>
        </Header>

        <Content>
          <ScrollView contentContainerStyle={{marginTop: 10,paddingBottom:5,marginLeft: 10,borderBottomWidth: 3,borderBottomColor: '#ededed'}} horizontal={true} showsHorizontalScrollIndicator ={false}>
            { this.account.map((data,index) => ( 
                <View key={index}>
                  <ImgWrap type={data.type} src={require('../image/elon.jpg')} />
                  <Text style={{alignSelf:'center',fontSize:11,marginLeft: -10,marginTop: 2}}>Eldn</Text>
                </View> 
            ))}
          </ScrollView> 

          <View style={{flex:1,margin: 10}}>
            <View style={{flex:1,flexDirection: 'row'}}>
              <Left style={{flexDirection: 'row',}}>
                <ImgWrap type='newSmall' src={require('../image/elon.jpg')} />
                <Text style={{fontSize:14,alignSelf:'center'}}>En</Text>
              </Left>
              <Right>
                <Iconn name='dots-three-horizontal' size={25}/>
              </Right>
            </View>

            <View style={{flex:1,marginTop: 10}}>
              <Image source={require('../image/saad.jpg')} style={{width: '106%',height: 300,marginLeft: -10}} />
              <View style={{flex:1,flexDirection: 'row'}}>
                <Left style={{flexDirection: 'row',}}>
                  <Icons size={25} name='hearto' style={{marginRight: 10}}/>
                  <Icone name='comment' size={33} />
                </Left>
                <Right>
                  <Iconm name='bookmark-border' size={30}/>
                </Right>
              </View>
            </View>

            <View>
              <Text style={{fontWeight:'bold'}}>34 Likes</Text>
              <View >
                <Text>
                  <Text style={{fontWeight:'bold'}}>Ellon &nbsp;</Text>
                  sssssssssssssssssssssssssssssssssssssssssss
                </Text>
              </View>

              <View style={{flexDirection: 'row'}}>
                <ImgWrap src={require('../image/bill.jpg')} type="mine" />
                <Text style={{fontSize:14,alignSelf:'center',fontWeight:'bold',color: '#d3d9e2',marginLeft: 10}}>Add a comment</Text>
              </View>
              <Text style={{fontSize: 10,color: '#93979e'}}>16 hours ago</Text>
            </View>

          </View>

        </Content>
      </React.Fragment>
    );
  }
} 

