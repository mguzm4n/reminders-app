import { Link } from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  linkBox: {
    padding: 15,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})

const StyledLink = ({children, to}) => (
  <Link to={to} style={ styles.linkBox }>
    <Text style={ styles.titleText }>{ children }</Text>
  </Link>
);

export default StyledLink;