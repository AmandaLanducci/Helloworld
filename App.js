
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Ola Mundo!</Text>

      <Text>Meu nome é Amanda Heloisa e este e meu primeiro APP em React</Text>
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
