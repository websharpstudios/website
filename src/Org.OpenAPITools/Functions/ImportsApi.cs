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
    public partial class ImportsApi
    { 
        [FunctionName("ImportsApi_DELETEListsListIDImportItemsListImportItemID")]
        public async Task<ActionResult<DELETEListsListID200Response>> _DELETEListsListIDImportItemsListImportItemID([HttpTrigger(AuthorizationLevel.Anonymous, "Delete", Route = "v1/lists/{ListID}/import/items/{ListImportItemID}")]HttpRequest req, ExecutionContext context, int listID, int listImportItemID)
        {
            var method = this.GetType().GetMethod("DELETEListsListIDImportItemsListImportItemID");
            return method != null
                ? (await ((Task<DELETEListsListID200Response>)method.Invoke(this, new object[] { req, context, listID, listImportItemID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("ImportsApi_GETListsListIDImportItems")]
        public async Task<ActionResult<PATCHListsListIDImportItemsListImportItemID200Response>> _GETListsListIDImportItems([HttpTrigger(AuthorizationLevel.Anonymous, "Get", Route = "v1/lists/{ListID}/import/items")]HttpRequest req, ExecutionContext context, int listID)
        {
            var method = this.GetType().GetMethod("GETListsListIDImportItems");
            return method != null
                ? (await ((Task<PATCHListsListIDImportItemsListImportItemID200Response>)method.Invoke(this, new object[] { req, context, listID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("ImportsApi_PATCHListsListIDImportItemsListImportItemID")]
        public async Task<ActionResult<PATCHListsListIDImportItemsListImportItemID200Response>> _PATCHListsListIDImportItemsListImportItemID([HttpTrigger(AuthorizationLevel.Anonymous, "Patch", Route = "v1/lists/{ListID}/import/items/{ListImportItemID}")]HttpRequest req, ExecutionContext context, int listID, int listImportItemID)
        {
            var method = this.GetType().GetMethod("PATCHListsListIDImportItemsListImportItemID");
            return method != null
                ? (await ((Task<PATCHListsListIDImportItemsListImportItemID200Response>)method.Invoke(this, new object[] { req, context, listID, listImportItemID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("ImportsApi_POSTListsListIDImportItems")]
        public async Task<ActionResult<POSTListsListIDImportItems200Response>> _POSTListsListIDImportItems([HttpTrigger(AuthorizationLevel.Anonymous, "Post", Route = "v1/lists/{ListID}/import/items")]HttpRequest req, ExecutionContext context, int listID)
        {
            var method = this.GetType().GetMethod("POSTListsListIDImportItems");
            return method != null
                ? (await ((Task<POSTListsListIDImportItems200Response>)method.Invoke(this, new object[] { req, context, listID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }
    }
}
