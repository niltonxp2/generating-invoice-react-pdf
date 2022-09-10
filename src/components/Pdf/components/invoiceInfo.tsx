import { View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '30px',
    fontFamily: 'Montserrat',
  },
  headerTitle: {
    fontWeight: 700,
    fontSize: '12px',
    color: '#828282',
    marginBottom: '20px',
  },
  period: {
    fontWeight: 500,
    fontSize: '12px',
    color: '#8A2CAC',
  },
  address: {
    fontWeight: 400,
    fontSize: '10px',
    color: '#828282',
    textAlign: 'right',
    flexDirection: 'column',
  },
});

export const InvoiceInfo = () => (
  <View style={styles.header}>
    <View>
      <Text style={styles.headerTitle}>Invoice 01</Text>
      <Text style={styles.period}>Period from 01/01/2023 to 31/01/2023.</Text>
    </View>

    <View>
      <Text style={styles.headerTitle}>Company XYZ</Text>
      <View style={styles.address}>
        <Text>Rua XYZ, 380</Text>
        <Text>Porto Alegre - RS</Text>
        <Text>CNPJ: 00.000.000/0001-29</Text>
      </View>
    </View>
  </View>
);
