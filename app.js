const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// database
const db = require('./config/database');

// TEST DB
db.authenticate()
.then(()=>console.log('Database connected...'))
.catch(err => console.log('Error:' + err))


const app = express();

// handlebars
app.engine(
    "handlebars",
    exphbs.engine({
      extname: "handlebars",
      defaultLayout: "main.handlebars",
      layoutsDir: "views/layouts/"
    })
  );
app.set('view engine', 'handlebars');

// Body parser 
app.use(bodyParser.urlencoded({ extended: false }));

// SET static folder
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res)=>{
    res.render('index', { layout: 'landing' });
})

// Gig routes
app.use('/gigs', require('./routes/gigs'));

const PORT  = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log('server is listining on port 5000...'));