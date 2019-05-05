import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import { Font } from 'expo';

export default class Page extends PureComponent {
    state = {
        fontLoaded: false
    }

    async componentDidMount(){
        await Font.loadAsync({
            'Roboto': require('../../assets/Fonts/Roboto.ttf'),
            });
        
        this.setState({ fontLoaded: true });
        console.log( "Font Loaded" );
    }

  render() {
    if( this.state.fontLoaded )
    return (
      <React.Fragment>
        {this.props.children}
      </React.Fragment>
    );
     else 
     return (
       <Text> Loading ... </Text>
     );
  }
}
