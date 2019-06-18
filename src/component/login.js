import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation'
import LogoText from './logoText.png'
import { Col, Row, Grid } from 'react-native-easy-grid'
import fb from './fb.png'
import {TextInput,Image,View} from 'react-native'
import { Container,Body, Content, CardItem,Button, Form, Item, Input, Card, Header, Footer, Text, Thumbnail, Icon } from 'native-base'
class Login extends Component {
	state={
		itemFocus:{
			backgroundColor: 'white'
		}
	}

	styles={
		form:{
			width: '80%',
			marginTop: 10,
		},
		item:{
			backgroundColor: '#f2f2f2',
		}
	}

	pressed(){
		Navigation.setRoot({
			root: {
			  component: {
			    name: "app"
			  }
			}
		})
	}

    render() {
        return (
            <Container>
				<Grid>
					<Row style={{justifyContent:'center',height: 110,marginTop: 40}}>
		    			<Image style={{height: 100, width:'60%'}} source={LogoText}/>
		    		</Row>

	    			<Row style={{marginTop: -20}}>
	    				<Col>
					    	<Row style={{height: 200}}>
					    		<Form style={{width: '100%',alignItems:'center'}}>
									<Item regular style={this.styles.form}>
										<Input placeholder="Phone number,userssname, or email" style={this.styles.item} />
									</Item>
									<Item regular style={this.styles.form}>
										<Input placeholder="password" style={this.styles.item}/>
									</Item>
									<Button onPress={this.pressed} block style={{alignSelf:'center',marginTop: 20,width: '80%',backgroundColor: '#4c90ff'}}>
										<Text>Sign In</Text>
									</Button>
								</Form>
							</Row>

							<Row style={{justifyContent:'center',height: 30,marginTop: 10}}>
								<Col style={{alignItems:'center'}}>
									<Row style={{borderTopWidth: 1,borderStyle: 'solid',width: '80%'}}></Row>
									<Row style={{backgroundColor: 'white',marginTop: -50,width: 40,justifyContent:'center'}}>
										<Text>OR</Text>
									</Row>
								</Col>
							</Row>

							<Row style={{justifyContent:'center',height: 30}}>
								<Image source={fb} style={{width: '10%',height: 40}}/>
								<Text style={{marginTop: 7}}>Login with facebook</Text>
							</Row>

							<Row style={{height: 30,marginTop: 30,justifyContent: 'center' }}>
								<Text>Forgot Password</Text>
							</Row>

						</Col>
					</Row>

					<Row style={{backgroundColor: '#edf0f4',height: 20}}></Row>

					<Row style={{justifyContent:'center',height: 80,borderTopWidth: 0.4,borderStyle:'solid'}}>
						<Text style={{alignSelf:'center'}}>Dont have an account? Sigssn up</Text>
					</Row>
				</Grid>
	    	</Container>
        )
    }
}

export default Login
