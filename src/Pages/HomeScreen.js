import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo';

import Page from '../Components/Page';
import logo from '../../assets/logo.png';

class HomeScreen extends Component {

    static navigationOptions = {
        header: null,
    };

  render() {
    return (
      <Page>
        <LinearGradient
            colors={['#3494E6', '#EC6EAD']}
            style={styles.container}
        >
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.logoTitleSubContainer}>
                    <Text style={styles.logoTitle}> WARN </Text>
                    <Text style={styles.logoTitle}> CAM </Text>
                </View>
            </View>
            <View style={styles.selectContainer}>
                <TouchableOpacity 
                    onPress={()=>{
                        this.props.navigation.navigate('MagnetoMeter'); 
                        console.log( "Button 1 Pressed" );
                    }}
                >
                <LinearGradient
                    style={styles.selectorButtons}
                    colors={['#bdc3c7', '#2c3e50']}
                    start={[0,0]}
                    end={[1,1]}
                >
                    <Text style={styles.btnText}> Scan Using Magnetometer </Text>
                </LinearGradient>
                </TouchableOpacity>
                <View style={{ height: 10 }}></View>
                <TouchableOpacity 
                    onPress={()=>{
                        this.props.navigation.navigate('InfraredSensor'); 
                        console.log( "Button 2 Pressed" );
                    }}
                >
                <LinearGradient
                    style={styles.selectorButtons}
                    colors={['#2c3e50', '#bdc3c7']}
                    start={[0,0]}
                    end={[1,1]}
                >
                    <Text style={styles.btnText}> Scan Using Infrared Sensor </Text>
                </LinearGradient>
                </TouchableOpacity>
                <View style={{ height: 10 }}></View>
                <TouchableOpacity 
                    onPress={()=>{
                        this.props.navigation.navigate('RFSensor'); 
                        console.log( "Button 3 Pressed" );
                    }}
                >
                <LinearGradient
                    style={styles.selectorButtons}
                    colors={['#bdc3c7', '#2c3e50']}
                    start={[0,0]}
                    end={[1,1]}
                >
                    <Text style={styles.btnText}> Scan Using RF Sensor </Text>
                </LinearGradient>
                </TouchableOpacity>
            </View>
        </LinearGradient>
      </Page>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'space-around', 
        alignItems: 'center'
    }, 
    logoContainer: {
        width: '100%', 
        justifyContent: 'center',
        alignItems: 'center', 
        flexDirection: 'row'
    }, 
    logoTitleSubContainer: {
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        flexDirection: 'column'
    },
    logo: {
        height: 120, 
        width: 120, 
    }, 
    logoTitle: {
        fontFamily: 'Roboto', 
        marginTop: 10, 
        fontSize: 50, 
        fontWeight: '500',
        lineHeight: 50, 
        color: '#fff'
    }, 
    selectContainer: {
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    selectorButtons: {
        width: 300, 
        height: 50, 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    btnText: {
        fontSize: 20, 
        color: '#fff', 
        fontFamily: 'Roboto', 
        fontWeight: '500'
    }
})

export default HomeScreen; 