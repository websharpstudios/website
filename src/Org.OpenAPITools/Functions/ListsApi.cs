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
    public partial class ListsApi
    { 
        [FunctionName("ListsApi_DELETEListsListID")]
        public async Task<ActionResult<DELETEListsListID200Response>> _DELETEListsListID([HttpTrigger(AuthorizationLevel.Anonymous, "Delete", Route = "v1/lists/{ListID}")]HttpRequest req, ExecutionContext context, int listID)
        {
            var method = this.GetType().GetMethod("DELETEListsListID");
            return method != null
                ? (await ((Task<DELETEListsListID200Response>)method.Invoke(this, new object[] { req, context, listID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("ListsApi_DELETEListsListIDItemsRadarID")]
        public async Task<ActionResult<DELETEListsListID200Response>> _DELETEListsListIDItemsRadarID([HttpTrigger(AuthorizationLevel.Anonymous, "Delete", Route = "v1/lists/{ListID}/items/{RadarID}")]HttpRequest req, ExecutionContext context, int listID, string radarID)
        {
            var method = this.GetType().GetMethod("DELETEListsListIDItemsRadarID");
            return method != null
                ? (await ((Task<DELETEListsListID200Response>)method.Invoke(this, new object[] { req, context, listID, radarID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("ListsApi_GETLists")]
        public async Task<ActionResult<GETLists200Response>> _GETLists([HttpTrigger(AuthorizationLevel.Anonymous, "Get", Route = "v1/lists")]HttpRequest req, ExecutionContext context)
        {
            var method = this.GetType().GetMethod("GETLists");
            return method != null
                ? (await ((Task<GETLists200Response>)method.Invoke(this, new object[] { req, context })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("ListsApi_GETListsListID")]
        public async Task<ActionResult<GETListsListID200Response>> _GETListsListID([HttpTrigger(AuthorizationLevel.Anonymous, "Get", Route = "v1/lists/{ListID}")]HttpRequest req, ExecutionContext context, int listID)
        {
            var method = this.GetType().GetMethod("GETListsListID");
            return method != null
                ? (await ((Task<GETListsListID200Response>)method.Invoke(this, new object[] { req, context, listID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("ListsApi_GETListsListIDItems")]
        public async Task<ActionResult<GETListsListIDItems200Response>> _GETListsListIDItems([HttpTrigger(AuthorizationLevel.Anonymous, "Get", Route = "v1/lists/{ListID}/items")]HttpRequest req, ExecutionContext context, int listID)
        {
            var method = this.GetType().GetMethod("GETListsListIDItems");
            return method != null
                ? (await ((Task<GETListsListIDItems200Response>)method.Invoke(this, new object[] { req, context, listID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("ListsApi_PATCHListsListID")]
        public async Task<ActionResult<PUTListsListIDAutomations200Response>> _PATCHListsListID([HttpTrigger(AuthorizationLevel.Anonymous, "Patch", Route = "v1/lists/{ListID}")]HttpRequest req, ExecutionContext context, int listID)
        {
            var method = this.GetType().GetMethod("PATCHListsListID");
            return method != null
                ? (await ((Task<PUTListsListIDAutomations200Response>)method.Invoke(this, new object[] { req, context, listID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("ListsApi_POSTLists")]
        public async Task<ActionResult<POSTLists200Response>> _POSTLists([HttpTrigger(AuthorizationLevel.Anonymous, "Post", Route = "v1/lists")]HttpRequest req, ExecutionContext context)
        {
            var method = this.GetType().GetMethod("POSTLists");
            return method != null
                ? (await ((Task<POSTLists200Response>)method.Invoke(this, new object[] { req, context })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("ListsApi_PUTListsListIDItems")]
        public async Task<ActionResult<PUTListsListIDAutomations200Response>> _PUTListsListIDItems([HttpTrigger(AuthorizationLevel.Anonymous, "Put", Route = "v1/lists/{ListID}/items")]HttpRequest req, ExecutionContext context, int listID)
        {
            var method = this.GetType().GetMethod("PUTListsListIDItems");
            return method != null
                ? (await ((Task<PUTListsListIDAutomations200Response>)method.Invoke(this, new object[] { req, context, listID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }
    }
}
