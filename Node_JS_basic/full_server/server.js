// const express = require("express");
// const router = require("./routes");
import express from 'express';
import router from './routes/index';

const app = express();

app.use(router);

app.listen(1245);

export default app;
