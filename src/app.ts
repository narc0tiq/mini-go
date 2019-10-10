import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();

if(process.env['NODE_ENV'] === 'development') {
    app.use(cors());
}
app.use(express.static(path.join(__dirname, '../static')));

const router = express.Router();
router.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

router.get(['/app', '/app/*'], (req, res) => {
    res.sendFile(path.join(__dirname, '../static', 'app.html'));
})

app.use('/', router);

export default app;