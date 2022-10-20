import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { colors } from './colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const filterOpts = ['Movies', 'Books', 'Comic'];
const FilterOptionSelectorModal = () => {

  return(
    <View style={ styles.container }>
      {filterOpts.map( ( opt ) => <Text>{ opt }</Text> )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '90%',
    top: Dimensions.get('window').height*0.15,
    left: Dimensions.get('window').width*(1 - 0.9)*0.5,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderWidth: 1,
  },
})

export default FilterOptionSelectorModal;