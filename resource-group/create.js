const msRestAzure = require('ms-rest-azure');
const ResourceManagementClient = require('azure-arm-resource').ResourceManagementClient;
const subscriptionId = 'xxx',
    clientIdOrAppId = 'yyy',
    secretOrPassword = 'zzz',
    domainOrTenantId = 'aaa',
    location = 'eastasia',
    resourceGroupName = 'serverlessIot';

msRestAzure.loginWithServicePrincipalSecret(clientIdOrAppId, secretOrPassword, domainOrTenantId, (err, credentials) => {
    err
        ? console.log(`error ${err}`)
        : console.log(`OK`)

    if (!err) {
        const resourceClient = new ResourceManagementClient(credentials, subscriptionId);
        console.log(`${resourceClient}`)
        const groupParameters = { location: location, tags: { sydneyTag: 'sydneyTestTag' } };
        console.log('\nCreating resource group: ' + resourceGroupName);
        const promise = resourceClient.resourceGroups.createOrUpdate(resourceGroupName, groupParameters);
        promise.then(result => {
            console.log(`created ${result}`)
        }).catch(err => {
            console.error(`error creating ${err}`)
        })
    }
});