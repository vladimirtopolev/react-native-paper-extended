import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text, Button, Provider as PaperProvider } from 'react-native-paper';
import Home from './src/components/Home';
import { theme } from './src/theme';

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <Home />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
