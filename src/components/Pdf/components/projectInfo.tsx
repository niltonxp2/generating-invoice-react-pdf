import { View, StyleSheet, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  wrapper: {
    margin: '30px',
    fontFamily: 'Montserrat',
  },
  title: {
    fontWeight: 700,
    fontSize: '16px',
    color: '#828282',
  },
  subTitle: {
    fontWeight: 400,
    fontSize: '12px',
    color: '#828282',
  },
});

export const ProjectInfo = () => (
  <View style={styles.wrapper}>
    <Text style={styles.title}>Client XYZ</Text>
    <Text style={styles.subTitle}>Project XYZ</Text>
  </View>
);
