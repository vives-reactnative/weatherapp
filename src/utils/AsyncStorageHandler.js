import { AsyncStorage } from 'react-native';

const LOCATIONS = '@weatherapp:locations';

export const save = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`AsyncStorage save error: ${error.message}`);
  }
};

export const load = async value => {
  try {
    return await AsyncStorage.getItem(value);
  } catch (error) {
    console.error(`AsyncStorage load error: ${error.message}`);
  }
};

export const remove = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error(`AsyncStorage remove error: ${error.message}`);
  }
};

export const saveLocations = async value => save(LOCATIONS, value);

export const getLocations = async () =>
  load(LOCATIONS).then(token => JSON.parse(token));

export const removeLocations = async () => remove(LOCATIONS);
