using System.IO;
using System.Net;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Enums;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using Org.OpenAPITools.Models;

namespace Org.OpenAPITools.Functions
{ 
    public partial class SuggestionsApi
    { 
        [FunctionName("SuggestionsApi_POSTSuggestionsCounty")]
        public async Task<ActionResult<POSTSuggestionsCounty200Response>> _POSTSuggestionsCounty([HttpTrigger(AuthorizationLevel.Anonymous, "Post", Route = "v1/suggestions/County")]HttpRequest req, ExecutionContext context)
        {
            var method = this.GetType().GetMethod("POSTSuggestionsCounty");
            return method != null
                ? (await ((Task<POSTSuggestionsCounty200Response>)method.Invoke(this, new object[] { req, context })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("SuggestionsApi_POSTSuggestionsSiteAddress")]
        public async Task<ActionResult<POSTSuggestionsSiteAddress200Response>> _POSTSuggestionsSiteAddress([HttpTrigger(AuthorizationLevel.Anonymous, "Post", Route = "v1/suggestions/SiteAddress")]HttpRequest req, ExecutionContext context)
        {
            var method = this.GetType().GetMethod("POSTSuggestionsSiteAddress");
            return method != null
                ? (await ((Task<POSTSuggestionsSiteAddress200Response>)method.Invoke(this, new object[] { req, context })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }
    }
}
