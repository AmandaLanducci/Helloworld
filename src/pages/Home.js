import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>Página Inicial </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CCC',
      alignItems: 'center',
      justifyContent: 'center',
      justifyContent: 'start',
    },
    titulo: {
      backgroundColor: '#FF69B4',
      padding: 10,
      borderRadius: 5
    }
  });
  

export default Home;