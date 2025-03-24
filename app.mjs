import express from 'express'
import cors from 'cors'
import { execFile } from "child_process";

const app = express();

app.use(cors({
    origin: "https://factchecker-five.vercel.app/"
}));

app.use(express.json())


const runModel = (inputStr) => {
    return new Promise((resolve, reject) => {
        execFile("python", ["./runmodel.py", inputStr], (error, stdout, stderr) => {
            if (error) {
                return reject(error);
            }
            resolve(stdout.trim() === "True");
        });
    });
}

app.get('/', async (req, res) => {
    res.send("Test");
})

app.post('/detect', async (req, res) => {
    const info = req.body.information;
    let result = "";

    result = await runModel(info);

    res.json({result: result})
})

app.listen(3000, 
    () => {
        console.log("App running");
    }
);