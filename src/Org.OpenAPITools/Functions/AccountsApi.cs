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
    public partial class AccountsApi
    { 
        [FunctionName("AccountsApi_GETAccountsMembers")]
        public async Task<ActionResult<GETAccountsMembers200Response>> _GETAccountsMembers([HttpTrigger(AuthorizationLevel.Anonymous, "Get", Route = "v1/accounts/members")]HttpRequest req, ExecutionContext context)
        {
            var method = this.GetType().GetMethod("GETAccountsMembers");
            return method != null
                ? (await ((Task<GETAccountsMembers200Response>)method.Invoke(this, new object[] { req, context })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }

        [FunctionName("AccountsApi_GETAccountsPreferencesStatuses")]
        public async Task<ActionResult<GETAccountsPreferencesStatuses200Response>> _GETAccountsPreferencesStatuses([HttpTrigger(AuthorizationLevel.Anonymous, "Get", Route = "v1/accounts/preferences/statuses")]HttpRequest req, ExecutionContext context)
        {
            var method = this.GetType().GetMethod("GETAccountsPreferencesStatuses");
            return method != null
                ? (await ((Task<GETAccountsPreferencesStatuses200Response>)method.Invoke(this, new object[] { req, context })).ConfigureAwait(false))
                : new StatusCodeResult((int)HttpStatusCode.NotImplemented);
        }
    }
}
