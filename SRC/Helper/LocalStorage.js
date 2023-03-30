import AsyncStorage from '@react-native-async-storage/async-storage';
  export const getUserdetails = async () => {
    try {
      const data = await AsyncStorage.getItem('userDetails');
      // dev numbers
      // return {userId: '1539', mobile: '6384320081'};
      return JSON.parse(data);
    } catch {
      return null;
    }
  };


  export const getLocations = async () => {
    try {
      const data = await AsyncStorage.getItem('location_details');
      
      // dev numbers
      // return {userId: '1539', mobile: '6384320081'};
      return JSON.parse(data);
    } catch {
      return null;
    }
  };


  export const getTherapistDetails = async () => {
    try {
      const data = await AsyncStorage.getItem('therapistDetails');
      // dev numbers
      // return {userId: '1539', mobile: '6384320081'};
      return JSON.parse(data);
    } catch {
      return null;
    }
  };
 