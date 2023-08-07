async function withPromises() {
    for (let i = 0; i < 50; i++) {
        let promise = new Promise((res) => {
            setTimeout(() => {
                res(`success ${i}`)
            }, 20)
        })

        await promise
    }
}

function collatz(n: number, arr = [n]) {
    if (n === 1) {
        return arr.length
    }

    if (!(n % 2)) {
        let f = n / 2
        return collatz(f, [...arr, f])
    } else {
        let f = 3 * n + 1
        return collatz(3 * n + 1, [...arr, f])
    }
}

export {collatz, withPromises}
