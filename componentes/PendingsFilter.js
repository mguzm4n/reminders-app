import { View, Text, StyleSheet } from 'react-native';
import { RouteMaps } from "../routes";

import FilterOptionSelectorModal from './FilterOptionSelectorModal';

import { Ionicons } from '@expo/vector-icons'; 
import { colors } from './colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';

const PendingsFilter = ({ routeName }) => {
  if(routeName !== RouteMaps.PendingListScreen){
    return;
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  return(
    <>
      <View style={ styles.container }>
        <TouchableOpacity onPress={() => setIsModalOpen(prev => !prev)}>
          <Ionicons name="filter" size={34} color={ colors.black } />
        </TouchableOpacity>
      </View>
      {isModalOpen && <FilterOptionSelectorModal closeModalFn={() => setIsModalOpen(false)} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 'auto', 
    marginRight: 35, 
    marginTop: 7 + 2, 
  },
})

export default PendingsFilter;