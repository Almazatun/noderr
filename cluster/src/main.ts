import {runApp} from "./server";
import cluster from "cluster";

const numCPUs = 5;

(async () => {
    if (cluster.isPrimary) {
        console.log(`✳️ Primary ${process.pid} is running`);

        // Fork workers.
        for (let i = 1; i < numCPUs; i++) {
            cluster.fork();
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
        });
    } else {
        console.log(`🟡 Worker ${process.pid} started`);
        await runApp()
    }
})()
