const msRestAzure = require('ms-rest-azure');

// do a az ad sp create-for-rbac para ani na params
const clientIdOrAppId = 'xxx',
secretOrPassword='yyy',
domainOrTenantId='zzz';

msRestAzure.loginWithServicePrincipalSecret(clientIdOrAppId, secretOrPassword, domainOrTenantId, function(err, credentials) {
    err
    ? console.log(`error ${err}`)
    : console.log(`credentials ${JSON.stringify(credentials)}`)
  
});