var request = require('request');

request

request('https://livewebjob.scm.azurewebsites.net/azurejobs/api/functions/definitions/azure-webjobs-host-87072d836e694ed089c6ccf16e071622_Zero.WebJob.Single.Functions.SolrReindex/invocations?limit=100', (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body); // Print the google web page.
    }
})