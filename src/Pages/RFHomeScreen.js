import React, { PureComponent } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Page from '../Components/Page';
import Navbar from '../Components/Navbar';
import satellite from '../../assets/satellite.png'; 

export default class RFHomeScreen extends PureComponent {

    static navigationOptions = {
        header: null,
    };
    

  render() {
    return (
      <Page>
          <Navbar title="RF Sensor Scanning" />
          <TouchableOpacity
              style={{ height: 30, width: '100%',  }}
              onPress={()=>this.props.navigation.navigate('Home')}
            >
              <Text style={{ fontSize: 20 }}>Back</Text>
            </TouchableOpacity>
          <View style={styles.container}>
            <Image source={satellite} style={styles.satellite} />

            <Text style={styles.comingSoon}> RF Module Coming Soon ! </Text>
          </View>
      </Page>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    satellite: {
      height: 100, 
      width: 100, 
    }, 
    comingSoon: {
      marginTop: 20, 
      fontSize: 20, 
      textAlign: 'center'
    }
})
