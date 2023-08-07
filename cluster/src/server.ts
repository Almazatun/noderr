import express, {Request, Response} from "express"
import {collatz} from "@noderr/common"

const app = express();

app.get('/test', async (req: Request, res: Response) => {
    res.status(200).json(`✅ ${collatz(100_000)}`)
})

export async function runApp() {
    const port = 3000;
    app.listen(port, () => {
        console.log(`App running on ${port}`);
    });
}
