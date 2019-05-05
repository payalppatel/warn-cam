import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

const Navbar = (props) => (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 70, 
        width: '100%', 
        backgroundColor: '#2c3e50', 
        paddingTop: 23, 
        justifyContent: 'center', 
        alignItems: 'center'
    }, 
    title: {
        fontFamily: 'Roboto', 
        color: '#fff', 
        fontWeight: '500', 
        fontSize: 20
    }
})

export default Navbar ; 