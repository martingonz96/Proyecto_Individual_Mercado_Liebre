const express = require ("express");
const app = express();
const mainRouter = require('./routes/mainRouter')




const see = app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', './views')



app.use('/', mainRouter)


const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

