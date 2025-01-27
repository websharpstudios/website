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
    public partial class AutomationsApi
    { 
        [FunctionName("AutomationsApi_GETListsListIDAutomations")]
        public async Task<ActionResult<GETListsListIDAutomations200Response>> _GETListsListIDAutomations([HttpTrigger(AuthorizationLevel.Anonymous, "Get", Route = "v1/lists/{ListID}/automations")]HttpRequest req, ExecutionContext context, int listID)
        {
            var method = this.GetType().GetMethod("GETListsListIDAutomations");
            return method != null
                ? (await ((Task<GETListsListIDAutomations200Response>)method.Invoke(this, new object[] { req, context, listID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("AutomationsApi_PUTListsListIDAutomations")]
        public async Task<ActionResult<PUTListsListIDAutomations200Response>> _PUTListsListIDAutomations([HttpTrigger(AuthorizationLevel.Anonymous, "Put", Route = "v1/lists/{ListID}/automations")]HttpRequest req, ExecutionContext context, int listID)
        {
            var method = this.GetType().GetMethod("PUTListsListIDAutomations");
            return method != null
                ? (await ((Task<PUTListsListIDAutomations200Response>)method.Invoke(this, new object[] { req, context, listID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }
    }
}
