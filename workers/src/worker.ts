// import wp from "workerpool"
import {parentPort} from "worker_threads"
import {collatz} from "@noderr/common"

// wp.worker({
//     collatzCal: collatz
// })

// @ts-ignore
parentPort.on('message', (params) => {
    // @ts-ignore
    parentPort.postMessage(collatz(params));
})
