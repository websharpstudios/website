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
    public partial class IntegrationsApi
    { 
        [FunctionName("IntegrationsApi_DELETEIntegrationsWebhooksWebhookID")]
        public async Task<ActionResult<DELETEListsListID200Response>> _DELETEIntegrationsWebhooksWebhookID([HttpTrigger(AuthorizationLevel.Anonymous, "Delete", Route = "v1/integrations/webhooks/{WebhookID}")]HttpRequest req, ExecutionContext context, int webhookID)
        {
            var method = this.GetType().GetMethod("DELETEIntegrationsWebhooksWebhookID");
            return method != null
                ? (await ((Task<DELETEListsListID200Response>)method.Invoke(this, new object[] { req, context, webhookID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("IntegrationsApi_GETIntegrationsWebhooks")]
        public async Task<ActionResult<GETIntegrationsWebhooks200Response>> _GETIntegrationsWebhooks([HttpTrigger(AuthorizationLevel.Anonymous, "Get", Route = "v1/integrations/webhooks")]HttpRequest req, ExecutionContext context)
        {
            var method = this.GetType().GetMethod("GETIntegrationsWebhooks");
            return method != null
                ? (await ((Task<GETIntegrationsWebhooks200Response>)method.Invoke(this, new object[] { req, context })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("IntegrationsApi_POSTIntegrationsWebhooks")]
        public async Task<ActionResult<POSTIntegrationsWebhooks200Response>> _POSTIntegrationsWebhooks([HttpTrigger(AuthorizationLevel.Anonymous, "Post", Route = "v1/integrations/webhooks")]HttpRequest req, ExecutionContext context)
        {
            var method = this.GetType().GetMethod("POSTIntegrationsWebhooks");
            return method != null
                ? (await ((Task<POSTIntegrationsWebhooks200Response>)method.Invoke(this, new object[] { req, context })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }
    }
}
