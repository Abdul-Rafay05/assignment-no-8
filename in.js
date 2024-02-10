const simulateAsyncOperation = (shouldsucceed) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldsucceed) {
                resolve("Asynchronous Operation Successful");
            } else {
                reject(new Error("Asynchronous Operation Has Failed"));
            }
        }, 1000);
    });
};
simulateAsyncOperation(true)
    .then((result) => {
        console.log("Successful: " + result);
    })
    .catch((error) => {
        console.error("Error: " + error);
    });
simulateAsyncOperation(false)
    .then((result) => {
        console.log("Successful: " + result);
    })
    .catch((error) => {
        console.error("Error: " + error);
    });



const fetchData = (() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let data = "Fatched Data";
            console.log(`Data fetched: ${data}`);
            resolve(data)
        }, 1000);
    });
})
const processData = ((prodata) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let processed = prodata.toUpperCase();
            console.log(`Data Processed: ${processed}`);
            resolve(processed)
        }, 1000);
    });
})
fetchData()
    .then((data) => {
        return processData(data)
    }).then((processed) => {
        console.log(`Final Result: ${processed}`);
    }).catch((error) => {
        console.log(`Error: ${error}`);

    });




