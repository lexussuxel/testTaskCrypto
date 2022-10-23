import {appRouter} from "./router";

const express = require('express');
const dotenv = require('dotenv');
const htt = require('http');
const cors = require('cors');
import * as trpcExpress from '@trpc/server/adapters/express';
// created for each request

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors())

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter
    }),
);


htt.createServer(app).listen(port || '4200', () => {
    console.log(`Server is running at http://localhost:${port||4200}`);
});
