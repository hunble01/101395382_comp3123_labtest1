
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('error: delayed exception!'));
        }, 500);
    });
};

// Calling both promises and handling the results
resolvedPromise()
    .then((success) => {
        console.log(success); // Output: { message: 'delayed success!' }
    })
    .catch((error) => {
        console.error(error);
    });

rejectedPromise()
    .then((success) => {
        console.log(success); // This will not execute
    })
    .catch((error) => {
        console.error(error); // Output: Error: error: delayed exception!
    });
