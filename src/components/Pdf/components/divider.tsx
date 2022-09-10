import { View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  divider: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.5)',
    margin: '0 30px',
  },
});

export const Divider = () => <View style={styles.divider} />;
