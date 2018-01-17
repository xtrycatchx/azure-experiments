const msRestAzure = require('ms-rest-azure');
msRestAzure.interactiveLogin((err, credentials) => {
    err
        ? console.log(`error ${err}`)
        : console.log(`credentials ${credentials}`)
});