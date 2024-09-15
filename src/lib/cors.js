import Cors from 'cors';
import initMiddleware from './init-middleware';

// Initialize the cors middleware
const cors = initMiddleware(
    Cors({
        // You can add more options here
        methods: ['GET', 'POST', 'DELETE'],
        origin: '*', // Change this to your specific origin if needed
    })
);

export default cors;