import { Text, View, StyleSheet } from '@react-pdf/renderer';

const thDefaultProps = {
  fontFamily: 'OpenSans',
  color: '#00072B',
  fontSize: '10px',
  fontWeight: 400,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    borderBottom: '1px solid #DFE2E9',
    textAlign: 'right',
    padding: '10px 0',
  },
  name: {
    width: '30%',
    paddingLeft: '10px',
    textAlign: 'left',
    ...thDefaultProps,
  },
  function: {
    width: '20%',
    ...thDefaultProps,
    textAlign: 'left',
  },
  hours: {
    width: '15%',
    ...thDefaultProps,
  },
  value: {
    width: '15%',
    ...thDefaultProps,
  },
  total: {
    width: '20%',
    paddingRight: '10px',
    ...thDefaultProps,
  },
});

export const Row = () => (
  <View style={styles.container}>
    <Text style={styles.name}>Nilton</Text>
    <Text style={styles.function}>Frontend Developer</Text>
    <Text style={styles.hours}>168:00</Text>
    <Text style={styles.value}>60</Text>
    <Text style={styles.total}>10.000,80</Text>
  </View>
);
