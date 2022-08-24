import express from 'express';
const app = express();
import { createClient } from 'redis';

import {Item, FullCalculationResult, calculate} from './calculate';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

// respond with "hello world" when a GET request is made to the homepage
app.get('/result', async (req, res) => {
    await client.connect();
    const key = 'bot';

    const value = await client.get(key);
    const object = JSON.parse(value as string) as unknown as Item[];
    const result = calculate(object);

    return result;
});

app.listen(3005, () => {
    console.log(`Result app listening}`);
  });