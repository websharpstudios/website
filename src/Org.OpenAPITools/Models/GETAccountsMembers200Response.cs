/*
 * PropertyRadar API
 *
 * # PropertyRadar API Reference PropertyRadar offers the most powerful property and owner data API ever. Access our full 250+ property search criteria, build lists, get owner information, append phones & emails, set up automations, and much more. While the API does not yet offer the full power of the PropertyRadar web and mobile applications, we are excited to make it available and see what you build!    Note that the PropertyRadar API is intended for end-users only - you can not use it to build applications you sell to others.  That said, we offer OAuth, so partner applications can access the API on behalf of our shared customers. Please <a href='https://www.propertyradar.com/support' target='_blank'>contact us</a> to learn more about our partner programs.    The PropertyRadar API is organized around REST. Our API has predictable resource-oriented URLs, accepts and returns JSON-encoded data, and uses standard HTTP response codes, authentication, and verbs.    To begin using the PropertyRadar API, you can activate a <a href='https://help.propertyradar.com/en/articles/8309200-how-to-activate-30-day-api-trial' target='_blank'>30-Day Free Trial</a> (note that a paid PropertyRadar subscription is required). To do so, <a href='https://app.propertyradar.com/' target='_blank'>login</a>, click the profile icon, and choose Account Settings.    <image src='https://files.propertyradar.com/service/api-docs/Account_Settings_highlighted.png'>  Then click the \"Get API Free Trial\" link at the bottom to begin the trial.    <image src='https://files.propertyradar.com/service/api-docs/Get_API_Free_Trail.png'>  Once you complete that, go back into Account Settings and scroll to the bottom where you will find your API key. Click on its Integration Name to reveal your actual key to use.    <image src='https://files.propertyradar.com/service/api-docs/Integrations_Dialog.png'>  Then when you have your API token, click \"Try It\" next to any of the REST endpoints below. Paste your API token into the \"Bearer Token\" field under Security. Set your Parameters and/or Body in the fields provided.  If you've chosen a pay-per-record endpoint, each result returned will count as one export record or phone/email purchase or unlock against your monthly included items. Any overages will cost the same as any other export would.    As such, test with Purchase=0 as that will tell you how many records will be returned with no deduction. When you are ready to purchase the records, set Purchase=1, and be sure you request the return fields you want.   For exports, whether you request 1 field of data for that record, or 50, it will still count as an export. Again, It's important to test first because all purchases are non-refundable, and even during the API trial, each record will be deducted from your monthly included items.   Finally please note that this API is intended for experienced software developers as it requires custom code on your end. If you do not have a developer on your team and want to access the power of PropertyRadar, please consider using our <a href='https://help.propertyradar.com/en/articles/3314775-using-zapier-with-propertyradar' target='_blank'>Zapier integration</a> instead as no coding is required.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://openapi-generator.tech
 */

using System;
using System.Linq;
using System.Text;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Org.OpenAPITools.Converters;

namespace Org.OpenAPITools.Models
{ 
    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public partial class GETAccountsMembers200Response : IEquatable<GETAccountsMembers200Response>
    {
        /// <summary>
        /// Gets or Sets Results
        /// </summary>
        [DataMember(Name="results", EmitDefaultValue=false)]
        public List<GETAccountsMembers200ResponseResultsInner> Results { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class GETAccountsMembers200Response {\n");
            sb.Append("  Results: ").Append(Results).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="obj">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object obj)
        {
            if (obj is null) return false;
            if (ReferenceEquals(this, obj)) return true;
            return obj.GetType() == GetType() && Equals((GETAccountsMembers200Response)obj);
        }

        /// <summary>
        /// Returns true if GETAccountsMembers200Response instances are equal
        /// </summary>
        /// <param name="other">Instance of GETAccountsMembers200Response to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GETAccountsMembers200Response other)
        {
            if (other is null) return false;
            if (ReferenceEquals(this, other)) return true;

            return 
                (
                    Results == other.Results ||
                    Results != null &&
                    other.Results != null &&
                    Results.SequenceEqual(other.Results)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                var hashCode = 41;
                // Suitable nullity checks etc, of course :)
                    if (Results != null)
                    hashCode = hashCode * 59 + Results.GetHashCode();
                return hashCode;
            }
        }

        #region Operators
        #pragma warning disable 1591

        public static bool operator ==(GETAccountsMembers200Response left, GETAccountsMembers200Response right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(GETAccountsMembers200Response left, GETAccountsMembers200Response right)
        {
            return !Equals(left, right);
        }

        #pragma warning restore 1591
        #endregion Operators
    }
}
