import React from 'react';
import { View, Text, StyleSheet, Button, StatusBar,Image,SafeAreaView  } from 'react-native';
import {NavigationContainer} from "@react-navigations/native"
import {createStackNavigator} from "@react-navigations/stack"
import {TouchableOpacity} from 'react-native-gesture-handler' ;

function DrinkScreen({navigation}) {
    var drank = []

    return(
     <SafeAreaView style = {styles.container}>
     <StatusBar backgroundColor = "#57D9F7" /> 

     {/*NavBar*/}
     
     <View style = {styles.topbar}>
      <View style = {{flexDirection:"row",width:"45%",height:"90%"  }}>

     <TouchableOpacity activeOpacity ={1} backgroundColor="#FFFFFF" 
     onPress = {()=> navigation.navigate('LoginScreen')}>

       <Image 
       resizeMode = "contain"
       style = {{width:30,height:30,marginRight:"5%",marginTop:"20%",margin:"5%"}}
       source = {require('../assets/menu.png')}/>

 </TouchableOpacity>

 <Text style = {{fontSize:30,color:"white"}}>Drink</Text>

 <Image 
 resizeMode = "contain"
 style = {{width:25,height:25,marginTop:"7%"}}
 source = {require('../assets/fullglass.png')}
  />      
        </View> 
        </View> 
     </SafeAreaView>  
    )
}