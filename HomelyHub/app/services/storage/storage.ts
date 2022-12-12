import AsyncStorage from '@react-native-async-storage/async-storage';
const storagePrefix = 'homelyhub_';
const constantStorage = {
  token: 'token',
  refreshToken: 'refreshtoken',
};
const getPrefix = (key: string) => {
  return storagePrefix + key;
};

const storage = {
  getToken: async () => {
    return await AsyncStorage.getItem(getPrefix(constantStorage.token));
  },
  setToken: async (token: string) => {
    await AsyncStorage.setItem(getPrefix(constantStorage.token), token);
  },
  setRefreshToken: async (refreshToken: string) => {
    await AsyncStorage.setItem(
      getPrefix(constantStorage.refreshToken),
      refreshToken,
    );
  },
  removeRefreshToken: async () => {
    await AsyncStorage.removeItem(getPrefix(constantStorage.refreshToken));
  },
  clearToken: async () => {
    await AsyncStorage.removeItem(getPrefix(constantStorage.token));
  },
  clearAll: async () => {
    await AsyncStorage.clear;
  },
};

export default storage;
