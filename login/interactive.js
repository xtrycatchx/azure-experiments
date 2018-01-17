const msRestAzure = require('ms-rest-azure');
msRestAzure.interactiveLogin(function (err, credentials) {
    err
        ? console.log(`error ${err}`)
        : console.log(`credentials ${credentials}`)
});