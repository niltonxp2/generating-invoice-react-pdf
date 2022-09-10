import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  total: {
    fontFamily: 'OpenSans',
    width: '100%',
    padding: '10px',
    fontSize: '20px',
    fontWeight: 700,
    textAlign: 'right',
    color: '#22BABB',
  },
});

export const Footer = () => (
  <View>
    <Text style={styles.total}>70.560,00</Text>
  </View>
);
