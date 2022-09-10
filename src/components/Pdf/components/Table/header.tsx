import { Text, View, StyleSheet } from '@react-pdf/renderer';

const thDefaultProps = {
  fontFamily: 'OpenSans',
  color: '#00072B',
  fontSize: '12px',
  fontWeight: 600,
  paddingBottom: '5px',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    borderBottom: '1px solid #DFE2E9',
    textAlign: 'right',
    marginTop: '30px',
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

export const Header = () => (
  <View style={styles.container} fixed>
    <Text style={styles.name}>Nome</Text>
    <Text style={styles.function}>Função</Text>
    <Text style={styles.hours}>Horas</Text>
    <Text style={styles.value}>Valor/h</Text>
    <Text style={styles.total}>Valor total</Text>
  </View>
);
