import { express } from 'express'

const app = express();

app.get('/', (req, res) =>{
    console.log('works');
    res.send('YUH!!');
})

app.listen(3000);