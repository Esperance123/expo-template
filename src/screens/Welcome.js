import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,Dimensions, TouchableOpacity } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../api/color';
const {width} = Dimensions.get('window');

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={require('../assets/images/promotion.jpg')} 
            style={styles.logo}/>
            <Text style ={styles.logoText}>Bienvenue à PromoPlus</Text>
            <Text style={styles.text}>Acheter et être au courant de 
            nouvelles promotions, vendues par le biais de notre application mobile
            </Text>
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Login')} >
            <Text style={styles.btnText}>Se connecter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSignup} onPress={() => navigation.navigate('Signup')} >
            <Text style={[styles.btnText,{color:"black"}]}>S'inscrire</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor: '#fff',
    },
    logoContainer: {
        alignItems:'center',
        marginBottom:30
    },
    logo :{
        width:200,
        height:120,
        margin:50,
    },
    logoText: {
        color:colors.primary,
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
      },
      text: {
        color:'black',
        opacity: 0.7,
        fontSize:14,
        margin:10,
        textAlign:'center'
    },
    btnLogin: {
        width:width-100,
        height:45,
        borderRadius:25,
        marginTop:10,
        backgroundColor:colors.primary,
        justifyContent: 'center',
    },
    btnSignup: {
      width:width-100,
      height:45,
      borderRadius:25,
      marginTop:20,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.primary,
  },
    btnText: {
        color:'#fff',
        fontWeight:'bold',
        fontSize:16,
        textAlign:'center'
    }
})
