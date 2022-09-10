import { View, StyleSheet } from '@react-pdf/renderer';
import { Header } from './header';
import { Row } from './row';
import { Footer } from './footer';

const styles = StyleSheet.create({
  tableContainer: {
    margin: '0 30px',
  },
});

export const Table = () => (
  <View style={styles.tableContainer}>
    <Header />
    {Array.from(Array(7).keys()).map((key) => (
      <Row key={key} />
    ))}
    <Footer />
  </View>
);
