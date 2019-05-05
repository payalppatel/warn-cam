import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Magnetometer } from 'expo';
import Page from '../Components/Page';
import Navbar from '../Components/Navbar';
import Speedometer from 'react-native-speedometer-chart';
import { AndroidBackHandler } from 'react-navigation-backhandler';

function round(n) {
    if (!n) {
      return 0;
    }
  
    return Math.floor(n * 100) / 100;
  }

export default class MagnetoHomeScreen extends PureComponent {

    static navigationOptions = {
        header: null,
    };

    state = {
        MagnetometerData: {},
    };

    onBackButtonPressAndroid = () => {
        this.props.navigation.navigate('Home');
        return true; 
    }

    componentDidMount() {
        this._toggle();
      }
    
    componentWillUnmount() {
        this._unsubscribe();
    }

    _toggle = () => {
    if (this._subscription) {
        this._unsubscribe();
    } else {
        this._subscribe();
    }
    };

    _slow = () => {
    Magnetometer.setUpdateInterval(1000);
    };

    _fast = () => {
    Magnetometer.setUpdateInterval(20);
    };

    _subscribe = () => {
    this._subscription = Magnetometer.addListener(result => {
        this.setState({ MagnetometerData: result });
    });
    };

    _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
    };

  render() {
    let { x, y, z } = this.state.MagnetometerData;

    return (
      <Page>
        <AndroidBackHandler onBackPress={this.onBackButtonPressAndroid}>
        <Navbar title="Magnetometer Scanning"/>

        <View style={styles.container}>
        <TouchableOpacity
                style={{
                    borderWidth: 1, 
                    borderColor: '#fff', 
                    height: 30, 
                    borderRadius: 10, 
                    width: 100,
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}
                onPress={()=>{
                    this._unsubscribe();
                    this.props.navigation.navigate('Home');
                }}
            >
                <Text style={{ color: '#fff'}}> Back </Text>
            </TouchableOpacity>
            <View style={styles.meterContainer}>
                <Text
                    style={{
                        color: '#fff',
                        marginBottom: 20, 
                    }}
                >Move Device Closer To Suspected Area</Text>
                <Speedometer 
                internalColor={(Math.sqrt( (x*x) + (y*y) + (z*z) ) >= 80 )? "#ff0000" : "#2980b9" }
                value={
                    (Math.sqrt( (x*x) + (y*y) + (z*z) ) >= 100 )? 
                        100 : 
                    Math.sqrt( (x*x) + (y*y) + (z*z) )
                } 
                totalValue={100} 
                showIndicator 
                size={300}
                />
            </View>
            <View style={styles.meterData}>
                <Text style={styles.whiteText}>
                   { Math.sqrt( (x*x) + (y*y) + (z*z) ).toFixed(2)}
                </Text>
            </View>
        </View>
        </AndroidBackHandler>
      </Page>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#34495e', 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    meterContainer: {
        marginTop: 20, 
        width: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    whiteText: {
        fontSize: 20, 
        fontWeight: '500', 
        fontFamily: 'Roboto', 
        marginTop: 20, 
        color: '#fff'
    }
})
