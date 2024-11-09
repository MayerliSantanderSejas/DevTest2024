import axios from 'axios';

export const pollAPI = axios.create({
  baseURL: 'https://33426467-0113-4b8e-a689-c41ea4275b36.mock.pstmn.io/api/v1',
})

export const getPolls = async () => {
  try{
    const response = await pollAPI.get('/polls');
    return response.data;
  } catch (error){
    throw new Error(error.response?.data?.message || 'Error al conseguir polls')
  }
}
