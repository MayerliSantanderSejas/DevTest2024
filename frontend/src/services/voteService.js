import axios from 'axios';

export const voteAPI = axios.create({
  baseURL: 'https://33426467-0113-4b8e-a689-c41ea4275b36.mock.pstmn.io/api/v1',
})

export const postVote = async () => {
  try{
    const response = await voteAPI.post('/polls/:id/votes');
    return response.data;
  } catch (error){
    throw new Error(error.response?.data?.message || 'Error voting for a poll')
  }
}
