import Axios from 'axios';

export * as default from './data.service';

const URL = import.meta.env.VITE_APP_BASE_URL;

export const post = async (api: string, data: string) => {
  //('dataService post:', api, ', data:', data);
  try {
    const response = await Axios.post(URL + api, data);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
};

export const get = async (api: string) => {
  //console.log('dataService get:', api);
  try {
    const response = await Axios.get(URL + api);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    //console.error(error);
    return null;
  }
};

export const loadJSON = async (json: string) => {
  //console.log('load json:', `${import.meta.env.BASE_URL}/json/${json}`);

  try {
    const response = await Axios.get(`${import.meta.env.BASE_URL}/json/${json}`);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
};
