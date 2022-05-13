import { StyleSheet, View } from 'react-native';
import { Text } from '../components/mui-like';
import { useBreakpoint } from '../hooks/useBreakpoint';

const Home = () => {
  const { breakpoint } = useBreakpoint();
  return (
    <View style={styles.container}>
      <Text
        sx={{
          xs: { fontSize: 14 },
          sm: { fontSize: 16 },
          md: { fontSize: 20 },
          lg: { fontSize: 26 },
          xl: { fontSize: 32 },
        }}
      >
        Responsive Text; breakpoint: {breakpoint}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
