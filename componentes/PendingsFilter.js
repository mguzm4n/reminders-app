import { View, Text, StyleSheet } from 'react-native';
import { RouteMaps } from "../routes";

import { Ionicons } from '@expo/vector-icons'; 
import { colors } from './colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PendingsFilter = ({ routeName }) => {

  if(routeName !== RouteMaps.PendingListScreen){
    return;
  }

  return(
    <View style={ styles.container }>
      <TouchableOpacity>
        <Ionicons name="filter" size={34} color={ colors.black } />
      </TouchableOpacity>
    </View>
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