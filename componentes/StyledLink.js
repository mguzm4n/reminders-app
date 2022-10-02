import { Link, useLocation } from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './colors';

const styles = StyleSheet.create({
  linkBox: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  activeTitleText:{
    fontSize: 18,
    fontWeight: 'bold',
  }
})

const StyledLink = ({title, to, onPressFn}) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;
  const titleStyles = isActive ? styles.activeTitleText : styles.titleText;
  return(
    <Link underlayColor={colors.pendingList.gradientSecondary} to={to} style={ styles.linkBox } onPress={onPressFn}>
      <Text style={ titleStyles }>
        { title }
      </Text>
    </Link>
  );
};

export default StyledLink;