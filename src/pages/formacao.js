import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Formacao = ({ navigation }) => {
    return (
        <View>
            <Text>Formação</Text>
            
            <Button 
                title="Voltar"
                onPress={ () => navigation.goBack() }
            />
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
  

export default Formacao;