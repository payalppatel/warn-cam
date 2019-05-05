import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import Page from '../Components/Page';
import Navbar from '../Components/Navbar';
import { Camera, Permissions } from 'expo';


export default class InfraredHomeScreen extends PureComponent {

    static navigationOptions = {
        header: null,
    };
    
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
      };

      async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
        return <View />;
      } else if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
      } else 
    return (
      <Page style={styles.container}>
          <Navbar title="Infrared Camera Scanning" />
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.props.navigation.navigate('Home');
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Back{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
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
    }
})
