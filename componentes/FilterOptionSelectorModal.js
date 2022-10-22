import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { colors } from './colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useUpdateAtom } from 'jotai/utils';
import { filterPendingsAtom } from '../atoms/filters';

const filterOpts = ['All', 'Movies', 'Books', 'Comics', 'Quotes'];


const FilterOptionItem = ({ option, lastItem, closeModalFn }) => {
  const setFilterOpt = useUpdateAtom(filterPendingsAtom);

  const onOptionSelect = (option) => {
    setFilterOpt(option);
    closeModalFn();
  };

  return(
    <TouchableOpacity onPress={() => onOptionSelect(option)}>
      <View style={ {width: '100%', paddingVertical: 8, paddingLeft: 15,  backgroundColor: colors.paleBlue,
      marginBottom: lastItem ? 0 : 10,
      borderRadius: 8} }>
        <Text>{ option }</Text>
      </View>
    </TouchableOpacity>
  )
};

const FilterOptionSelectorModal = ({ closeModalFn }) => {

  return(
    <View style={ styles.container }>
      <Text style={{marginBottom: 10, marginLeft: 10}}>Filtrar por...</Text>
      {filterOpts.map( (opt, i) => {
        return <FilterOptionItem key={i} closeModalFn={closeModalFn} lastItem={i == filterOpts.length - 1} option={opt} /> 
      })}
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
    borderColor: '#d1d5db',
    borderRadius: 5,
    borderWidth: 1,
  },
})

export default FilterOptionSelectorModal;