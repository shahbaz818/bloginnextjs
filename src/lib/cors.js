import Cors from 'cors';
import InitMiddleware from './middleware';

// Initialize the cors middleware
const cors = InitMiddleware(
    Cors({
        // You can add more options here
        methods: ['GET', 'POST', 'DELETE'],
        origin: '*', // Change this to your specific origin if needed
    })
);

export default cors;