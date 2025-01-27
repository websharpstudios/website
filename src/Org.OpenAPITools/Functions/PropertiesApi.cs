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
    public partial class PropertiesApi
    { 
        [FunctionName("PropertiesApi_GETPropertiesRadarID")]
        public async Task<ActionResult<GETPropertiesRadarID200Response>> _GETPropertiesRadarID([HttpTrigger(AuthorizationLevel.Anonymous, "Get", Route = "v1/properties/{RadarID}")]HttpRequest req, ExecutionContext context, string radarID)
        {
            var method = this.GetType().GetMethod("GETPropertiesRadarID");
            return method != null
                ? (await ((Task<GETPropertiesRadarID200Response>)method.Invoke(this, new object[] { req, context, radarID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("PropertiesApi_GETPropertiesRadarIDCompsForsale")]
        public async Task<ActionResult<GETPropertiesRadarIDCompsForsale200Response>> _GETPropertiesRadarIDCompsForsale([HttpTrigger(AuthorizationLevel.Anonymous, "Get", Route = "v1/properties/{RadarID}/comps/forsale")]HttpRequest req, ExecutionContext context, string radarID)
        {
            var method = this.GetType().GetMethod("GETPropertiesRadarIDCompsForsale");
            return method != null
                ? (await ((Task<GETPropertiesRadarIDCompsForsale200Response>)method.Invoke(this, new object[] { req, context, radarID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("PropertiesApi_GETPropertiesRadarIDCompsSales")]
        public async Task<ActionResult<GETPropertiesRadarIDCompsSales200Response>> _GETPropertiesRadarIDCompsSales([HttpTrigger(AuthorizationLevel.Anonymous, "Get", Route = "v1/properties/{RadarID}/comps/sales")]HttpRequest req, ExecutionContext context, string radarID)
        {
            var method = this.GetType().GetMethod("GETPropertiesRadarIDCompsSales");
            return method != null
                ? (await ((Task<GETPropertiesRadarIDCompsSales200Response>)method.Invoke(this, new object[] { req, context, radarID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("PropertiesApi_GETPropertiesRadarIDParcels")]
        public async Task<ActionResult<GETPropertiesRadarIDParcels200Response>> _GETPropertiesRadarIDParcels([HttpTrigger(AuthorizationLevel.Anonymous, "Get", Route = "v1/properties/{RadarID}/parcels")]HttpRequest req, ExecutionContext context, string radarID)
        {
            var method = this.GetType().GetMethod("GETPropertiesRadarIDParcels");
            return method != null
                ? (await ((Task<GETPropertiesRadarIDParcels200Response>)method.Invoke(this, new object[] { req, context, radarID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("PropertiesApi_GETPropertiesRadarIDTransactions")]
        public async Task<ActionResult<GETPropertiesRadarIDTransactions200Response>> _GETPropertiesRadarIDTransactions([HttpTrigger(AuthorizationLevel.Anonymous, "Get", Route = "v1/properties/{RadarID}/transactions")]HttpRequest req, ExecutionContext context, string radarID)
        {
            var method = this.GetType().GetMethod("GETPropertiesRadarIDTransactions");
            return method != null
                ? (await ((Task<GETPropertiesRadarIDTransactions200Response>)method.Invoke(this, new object[] { req, context, radarID })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("PropertiesApi_POSTProperties")]
        public async Task<ActionResult<POSTProperties200Response>> _POSTProperties([HttpTrigger(AuthorizationLevel.Anonymous, "Post", Route = "v1/properties")]HttpRequest req, ExecutionContext context)
        {
            var method = this.GetType().GetMethod("POSTProperties");
            return method != null
                ? (await ((Task<POSTProperties200Response>)method.Invoke(this, new object[] { req, context })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }
    }
}
