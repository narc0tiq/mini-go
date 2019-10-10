import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '../static')));

const router = express.Router();
router.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});
app.use('/', router);

export default app;