import React,{Component} from 'react'
import {View,Image,Text} from 'react-native'
import Icons from 'react-native-vector-icons/AntDesign'

function ImgWrap(props){
	const {size,bc,mr} = props
	const marginRight=mr ? mr : 10
	const width=size ? size : 67
	const borderColor=bc ? bc : 'red'
	  
	const Comp= () => {return (
		<View style={{width: '100%',height: '100%',borderRadius: 40,overflow: 'hidden'}}>
			<Image source={props.src} style={{width: '110%',height: '110%'}} />
		</View>
	)}

	if(props.type === "new")
	{ return (
		<View style={{width: 70,marginRight:10,padding:1.5,height: 70,borderColor: 'red',borderWidth: 1,borderRadius: 40}}>
          <Comp />
        </View>
	)}
	else if(props.type === "newSmall"){
		return (
			<View style={{width: 55,marginRight:10,padding:1.5,height: 55,borderColor: 'red',borderWidth: 1,borderRadius: 40}}>
	          <Comp />
	        </View>
		)
	}
	else if(props.type === "mine"){
		return (
			<View style={{width: 45,height: 45,marginTop: 7}}>
	          <Comp />
	        </View>
		)
	}
	else if(props.type === "pure"){
		return (<Comp />)
	}
	else if(props.type === "customBordered"){
		return (
			<View style={{width,marginRight,padding:1.5,height: width,borderColor,borderWidth: 1,borderRadius: 40}}>
	          <Comp />
	        </View>	
		)
	}

	else if(props.type === "custom"){
		return (
			<View style={{marginRight,marginTop: 4.5,width,height: props.width}}>
	        	<Comp />
	        </View>
		)
	}

	else{return (
		<View style={{marginRight:10,marginTop: 4.5,width: 67,height: 67}}>
        	<Comp />
        	<Icons name="pluscircle" size={20} style={{color: '#609af7',backgroundColor: 'white',borderRadius: 20,position: 'absolute',top: 43,left: 45}} />	
        </View>
    )}
}

export default ImgWrap