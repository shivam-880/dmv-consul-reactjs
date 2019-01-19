import axios from 'axios';
import { consul } from '../config';

export default axios.create({
    baseURL: `http://${consul.interface}:${consul.port}/v1`
});
