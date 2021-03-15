import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser connection
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index', { page: "index", title: "Home Page" });
    // res.send(`Node and express server running on port ${PORT}`)
});

app.get('/user', (req, res) => {
    // res.render('user', { page: "User", title: "User Page" });
    // let here3 = res.json(contact);
    res.render('user', { page: "User", title: "User Page fdsfds" });
    // res.send(`Node and express server running on port ${PORT}`)
});

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);