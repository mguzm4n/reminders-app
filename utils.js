import AsyncStorage from '@react-native-async-storage/async-storage';

const addItemToArray = async (category, categoryArray, item) => {
  categoryArray.push(item);
  try {
    await AsyncStorage.setItem(category, JSON.stringify(categoryArray));
  } catch (e) {
    console.log(e);
  }
};

export const addItemTo = async (category, item) => {
  try {
    const strCategory = await AsyncStorage.getItem(category);
    if( strCategory == null ){
      await AsyncStorage.setItem(category, JSON.stringify([]));
    }
    const categoryArray = JSON.parse(strCategory);
    addItemToArray(category, categoryArray, item);
    categoryArray?.forEach((m,i) => {
      console.log(i, ": ", m);
    });
  } catch (e) {
    console.log(e);
  }
};
