import axios from 'axios';

export const UserApi = async () =>
await axios.get('https://jsonplaceholder.typicode.com/users/');
// await axios.get('https://reqres.in/api/users?page=2');



