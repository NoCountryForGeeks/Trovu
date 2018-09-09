import axios from 'axios';

const URL_BASE = 'https://api.magicthegathering.io/v1';

const search = name => axios.get(`${URL_BASE}/cards?name=${name}&pageSize=100`);

export { search };
