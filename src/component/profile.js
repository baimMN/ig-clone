
import React, {Component} from 'react';
import { View,Image,ScrollView} from 'react-native';
import {Grid, Col, Row} from 'react-native-easy-grid'
import { Container,Text,Content,Header, Left, Body,Right,Footer } from 'native-base'
import Icons from 'react-native-vector-icons/AntDesign'
import {styles} from '../style.js'
import ImgWrap from './imgwrap.js'
import Icone from 'react-native-vector-icons/EvilIcons'
import Iconi from 'react-native-vector-icons/Ionicons'
import TopProfile from './topprofile.js'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Iconn from 'react-native-vector-icons/Entypo'
import Iconm from 'react-native-vector-icons/MaterialIcons'
import Iconmm from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconsi from 'react-native-vector-icons/SimpleLineIcons'
 
export default function Profile() {
  return (
    <React.Fragment>
      <Header style={styles.profileHeader}>
        <Left style={{flex: 3}}>
          <Iconi name='ios-arrow-back' size={30} />
        </Left>
        <View style={{flex: 8,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontSize: 17}}>Nama anda</Text>
        </View>
        <Right style={{flex: 3}}>
          <Iconn name='dots-three-horizontal' size={27} /> 
        </Right>
      </Header>

      <Content>
        <View>

          <TopProfile/>

          <View style={{marginTop: 10,margin: 10}}>
            <Text style={{fontSize: 15,fontWeight:'bold'}}>Bill</Text>
            <Text style={styles.profileSub}>Enterpreneur</Text>
            <Text>asddddddddddddddddddddddasdddddddddddddddd</Text>
          </View>

          <ScrollView contentContainerStyle={{marginTop: 15,marginLeft: 10,paddingBottom:5,borderBottomWidth: 3,borderBottomColor: '#ededed'}} horizontal={true} showsHorizontalScrollIndicator ={false}>
            { [1,2,3,5,5,6,7,5,6].map((data,index) => ( 
                <View key={index}>
                  <ImgWrap type='customBordered' bc='grey' size={60} src={require('../image/elon.jpg')}  />
                </View> 
            ))}
          </ScrollView>

          <View style={{flex:1,marginTop: 5}}> 

            <View style={{flexDirection: 'row',borderWidth: 0.4,borderColor: 'grey'}}>
              <View style={{flex:1,borderRightWidth: 0.6,borderColor: 'grey',alignItems:'center',padding:7}}><Text>ssd</Text></View>
              <View style={{flex:1,borderRightWidth: 0.6,borderColor: 'grey',alignItems:'center',padding:7}}><Text>ssd</Text></View>
              <View style={{flex:1,alignItems:'center',padding:7}}><Text>ssd</Text></View>
            </View>

            <View style={{flexDirection:'row',flex:1}}>
              <View style={{flex:1,alignItems:'center',padding:7}}><Iconmm name='table-large' size={30} color='grey' /></View>
              <View style={{flex:1,alignItems:'center',padding:7}}><Iconmm name='cellphone-android' size={30} color='grey' /></View>
              <View style={{flex:1,alignItems:'center',padding:7}}><Iconsi name='people' size={30} color='grey'/></View>
            </View>

          </View>

          <View style={{flex:1,flexDirection: 'row',marginRight: -2,flexWrap: 'wrap'}}>
            {
              [1,1,1,1,1,1,1,1,1,1,1,1].map((data,index)=> 
                (
                  <Image source={require('../image/saad.jpg')} style={{width: '33%',marginRight: 1,marginTop: 1,height: 140,}} />
                )
              )
            }
          </View>  

        </View>
        
      </Content>

    </React.Fragment>
  )
} 