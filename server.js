const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const htmlRouter = require('./app/routing/htmlRoutes')
const apiRouter = require('./app/routing/apiRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRouter);
app.use('/', htmlRouter);


app.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`APP LISTENING ON PORT: ${PORT}`);
})