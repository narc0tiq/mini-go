import app from './app';

const port: number = parseInt(process.env.port || '3000');

app.listen(port, (err: any) => {
    if(err) {
        return console.log(err);
    }

    return console.log(`Listening on port ${port}`);
});