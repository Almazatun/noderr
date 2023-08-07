import express, {Request, Response} from "express"
import { StaticPool } from "node-worker-threads-pool"
// import wp from "workerpool"
import * as path from "path";

const app = express();
// const pool = wp.pool(path.resolve(__dirname, "worker.js"));
// const filePath = './worker.js';
const numCPUs = 5;

const pool = new StaticPool({
    size: numCPUs - 1,
    task: path.resolve(__dirname, "worker.js"),
    workerData: {},
});

app.get('/test', async (req: Request, res: Response) => {
    // const result = await pool.exec("collatzCal", [100_000])
    const result = await pool.exec(100_000)

    res.status(200).json(result)
})

export async function runApp() {
    const port = 3001;
    app.listen(port, () => {
        console.log(`App running on ${port}`);
    });
}

runApp()
