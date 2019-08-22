const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const htmlRouter = require('./app/routing/htmlRoutes')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', htmlRouter);

app.listen(PORT, (err) => {
    if (err) return console.log(err);
    console.log(`APP LISTENING ON PORT: ${PORT}`);
})