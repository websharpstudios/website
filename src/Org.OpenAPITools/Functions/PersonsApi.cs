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
    public partial class PersonsApi
    { 
        [FunctionName("PersonsApi_GETPropertiesRadarIDPersons")]
        public async Task<ActionResult<GETPropertiesRadarIDPersons200Response>> _GETPropertiesRadarIDPersons([HttpTrigger(AuthorizationLevel.Anonymous, "Get", Route = "v1/properties/{RadarID}/persons")]HttpRequest req, ExecutionContext context, string radarID)
        {
            var method = this.GetType().GetMethod("GETPropertiesRadarIDPersons");
            return method != null
                ? (await ((Task<GETPropertiesRadarIDPersons200Response>)method.Invoke(this, new object[] { req, context, radarID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("PersonsApi_POSTPersonsPersonKeyEmail")]
        public async Task<ActionResult<POSTPersonsPersonKeyEmail200Response>> _POSTPersonsPersonKeyEmail([HttpTrigger(AuthorizationLevel.Anonymous, "Post", Route = "v1/persons/{PersonKey}/Email")]HttpRequest req, ExecutionContext context, string personKey)
        {
            var method = this.GetType().GetMethod("POSTPersonsPersonKeyEmail");
            return method != null
                ? (await ((Task<POSTPersonsPersonKeyEmail200Response>)method.Invoke(this, new object[] { req, context, personKey })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("PersonsApi_POSTPersonsPersonKeyPhone")]
        public async Task<ActionResult<POSTPersonsPersonKeyPhone200Response>> _POSTPersonsPersonKeyPhone([HttpTrigger(AuthorizationLevel.Anonymous, "Post", Route = "v1/persons/{PersonKey}/Phone")]HttpRequest req, ExecutionContext context, string personKey)
        {
            var method = this.GetType().GetMethod("POSTPersonsPersonKeyPhone");
            return method != null
                ? (await ((Task<POSTPersonsPersonKeyPhone200Response>)method.Invoke(this, new object[] { req, context, personKey })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }
    }
}
