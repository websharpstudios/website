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
    public partial class GETListsListIDAutomations200ResponseResultsInner : IEquatable<GETListsListIDAutomations200ResponseResultsInner>
    {
        /// <summary>
        /// The name of the list for this automation
        /// </summary>
        /// <value>The name of the list for this automation</value>
        [DataMember(Name="Name", EmitDefaultValue=false)]
        public string Name { get; set; }


        /// <summary>
        /// Indicates if the automation is enabled or not.
        /// </summary>
        /// <value>Indicates if the automation is enabled or not.</value>
        
        public enum IsEnabledEnum
        {
            
            /// <summary>
            /// Enum _0Enum for 0
            /// </summary>
            
            _0Enum = 0,
            
            /// <summary>
            /// Enum _1Enum for 1
            /// </summary>
            
            _1Enum = 1
        }

        /// <summary>
        /// Indicates if the automation is enabled or not.
        /// </summary>
        /// <value>Indicates if the automation is enabled or not.</value>
        [DataMember(Name="isEnabled", EmitDefaultValue=false)]
        public IsEnabledEnum IsEnabled { get; set; }


        /// <summary>
        /// The event(s) that trigger this automation.   * `New Matches`                   Occurs when a property is added to your list. Either because it was added manually by you, or because of a change to the property that resulted in it now matching your criteria and being added automatically.   * `Status Changes`                   Occurs when a property that is already in your list has a change in status. These include new transfers, loans, listings and foreclosures, as well as changes in listing status, listing price, or foreclosure status.  
        /// </summary>
        /// <value>The event(s) that trigger this automation.   * `New Matches`                   Occurs when a property is added to your list. Either because it was added manually by you, or because of a change to the property that resulted in it now matching your criteria and being added automatically.   * `Status Changes`                   Occurs when a property that is already in your list has a change in status. These include new transfers, loans, listings and foreclosures, as well as changes in listing status, listing price, or foreclosure status.  </value>
        [TypeConverter(typeof(CustomEnumConverter<TriggersEnum>))]
        [JsonConverter(typeof(Newtonsoft.Json.Converters.StringEnumConverter))]
        public enum TriggersEnum
        {
            
            /// <summary>
            /// Enum NewMatchesEnum for New Matches
            /// </summary>
            [EnumMember(Value = "New Matches")]
            NewMatchesEnum = 1,
            
            /// <summary>
            /// Enum StatusChangesEnum for Status Changes
            /// </summary>
            [EnumMember(Value = "Status Changes")]
            StatusChangesEnum = 2,
            
            /// <summary>
            /// Enum NewMatchesStatusChangesEnum for New Matches,Status Changes
            /// </summary>
            [EnumMember(Value = "New Matches,Status Changes")]
            NewMatchesStatusChangesEnum = 3
        }

        /// <summary>
        /// The event(s) that trigger this automation.   * &#x60;New Matches&#x60;                   Occurs when a property is added to your list. Either because it was added manually by you, or because of a change to the property that resulted in it now matching your criteria and being added automatically.   * &#x60;Status Changes&#x60;                   Occurs when a property that is already in your list has a change in status. These include new transfers, loans, listings and foreclosures, as well as changes in listing status, listing price, or foreclosure status.  
        /// </summary>
        /// <value>The event(s) that trigger this automation.   * &#x60;New Matches&#x60;                   Occurs when a property is added to your list. Either because it was added manually by you, or because of a change to the property that resulted in it now matching your criteria and being added automatically.   * &#x60;Status Changes&#x60;                   Occurs when a property that is already in your list has a change in status. These include new transfers, loans, listings and foreclosures, as well as changes in listing status, listing price, or foreclosure status.  </value>
        [DataMember(Name="Triggers", EmitDefaultValue=false)]
        public TriggersEnum Triggers { get; set; }

        /// <summary>
        /// These are the MemberIDs (separate with comma) to receive a daily email.
        /// </summary>
        /// <value>These are the MemberIDs (separate with comma) to receive a daily email.</value>
        [DataMember(Name="DailyEmailMemberIDs", EmitDefaultValue=false)]
        public string DailyEmailMemberIDs { get; set; }

        /// <summary>
        /// These are the MemberIDs (separate with comma) to receive an immediate email.
        /// </summary>
        /// <value>These are the MemberIDs (separate with comma) to receive an immediate email.</value>
        [DataMember(Name="ImmediateEmailMemberIDs", EmitDefaultValue=false)]
        public string ImmediateEmailMemberIDs { get; set; }

        /// <summary>
        /// These are the WebhookIDs (separate with comma) to receive an webhook call.  See &#x60;GET /integrations/webhooks&#x60; (View all webhooks) to obtain WebhookIDs.
        /// </summary>
        /// <value>These are the WebhookIDs (separate with comma) to receive an webhook call.  See &#x60;GET /integrations/webhooks&#x60; (View all webhooks) to obtain WebhookIDs.</value>
        [DataMember(Name="ExportToWebhookIDs", EmitDefaultValue=false)]
        public string ExportToWebhookIDs { get; set; }

        /// <summary>
        /// This is the EmailMarketingOrderID will be used for processing email marketing automations.
        /// </summary>
        /// <value>This is the EmailMarketingOrderID will be used for processing email marketing automations.</value>
        [DataMember(Name="EmailMarketingOrderID", EmitDefaultValue=false)]
        public string EmailMarketingOrderID { get; set; }

        /// <summary>
        /// These are the MemberIDs (separate with comma) to receive push notifications on the PropertyRadar mobile app.
        /// </summary>
        /// <value>These are the MemberIDs (separate with comma) to receive push notifications on the PropertyRadar mobile app.</value>
        [DataMember(Name="MobileNotificationMemberIDs", EmitDefaultValue=false)]
        public string MobileNotificationMemberIDs { get; set; }


        /// <summary>
        /// Set the InterestLevel to which properties will be set when they trigger this automation.  Use a number between 1-5 or specify 0 to unset interest.
        /// </summary>
        /// <value>Set the InterestLevel to which properties will be set when they trigger this automation.  Use a number between 1-5 or specify 0 to unset interest.</value>
        
        public enum SetInterestLevelEnum
        {
            
            /// <summary>
            /// Enum _0Enum for 0
            /// </summary>
            
            _0Enum = 0,
            
            /// <summary>
            /// Enum _1Enum for 1
            /// </summary>
            
            _1Enum = 1,
            
            /// <summary>
            /// Enum _2Enum for 2
            /// </summary>
            
            _2Enum = 2,
            
            /// <summary>
            /// Enum _3Enum for 3
            /// </summary>
            
            _3Enum = 3,
            
            /// <summary>
            /// Enum _4Enum for 4
            /// </summary>
            
            _4Enum = 4,
            
            /// <summary>
            /// Enum _5Enum for 5
            /// </summary>
            
            _5Enum = 5
        }

        /// <summary>
        /// Set the InterestLevel to which properties will be set when they trigger this automation.  Use a number between 1-5 or specify 0 to unset interest.
        /// </summary>
        /// <value>Set the InterestLevel to which properties will be set when they trigger this automation.  Use a number between 1-5 or specify 0 to unset interest.</value>
        [DataMember(Name="SetInterestLevel", EmitDefaultValue=false)]
        public SetInterestLevelEnum SetInterestLevel { get; set; }

        /// <summary>
        /// Set the StatusLevel to which properties will be set when they trigger this automation. Use a number between 1-9 or specify 0 to set status to None.
        /// </summary>
        /// <value>Set the StatusLevel to which properties will be set when they trigger this automation. Use a number between 1-9 or specify 0 to set status to None.</value>
        [DataMember(Name="SetStatusLevel", EmitDefaultValue=false)]
        public int SetStatusLevel { get; set; }

        /// <summary>
        /// Set the ListIDs to which properties will be added when they trigger this automation.  Must not be the same list as triggers the automation.  Use &#x60;GET /lists&#x60; to see your ListIDs.
        /// </summary>
        /// <value>Set the ListIDs to which properties will be added when they trigger this automation.  Must not be the same list as triggers the automation.  Use &#x60;GET /lists&#x60; to see your ListIDs.</value>
        [DataMember(Name="AddToLists", EmitDefaultValue=false)]
        public string AddToLists { get; set; }


        /// <summary>
        /// Set to 1 to purchase and append phones for properties that trigger this automation.You will be charged against your balance for each record triggered according to the terms of your subscription package.  **Charges are non-refundable**.
        /// </summary>
        /// <value>Set to 1 to purchase and append phones for properties that trigger this automation.You will be charged against your balance for each record triggered according to the terms of your subscription package.  **Charges are non-refundable**.</value>
        
        public enum PurchasePhoneEnum
        {
            
            /// <summary>
            /// Enum _0Enum for 0
            /// </summary>
            
            _0Enum = 0,
            
            /// <summary>
            /// Enum _1Enum for 1
            /// </summary>
            
            _1Enum = 1
        }

        /// <summary>
        /// Set to 1 to purchase and append phones for properties that trigger this automation.You will be charged against your balance for each record triggered according to the terms of your subscription package.  **Charges are non-refundable**.
        /// </summary>
        /// <value>Set to 1 to purchase and append phones for properties that trigger this automation.You will be charged against your balance for each record triggered according to the terms of your subscription package.  **Charges are non-refundable**.</value>
        [DataMember(Name="PurchasePhone", EmitDefaultValue=false)]
        public PurchasePhoneEnum PurchasePhone { get; set; }


        /// <summary>
        /// Set to 1 to purchase and append emails for properties that trigger this automation. You will be charged against your balance for each record triggered according to the terms of your subscription package.  **Charges are non-refundable**.
        /// </summary>
        /// <value>Set to 1 to purchase and append emails for properties that trigger this automation. You will be charged against your balance for each record triggered according to the terms of your subscription package.  **Charges are non-refundable**.</value>
        
        public enum PurchaseEmailEnum
        {
            
            /// <summary>
            /// Enum _0Enum for 0
            /// </summary>
            
            _0Enum = 0,
            
            /// <summary>
            /// Enum _1Enum for 1
            /// </summary>
            
            _1Enum = 1
        }

        /// <summary>
        /// Set to 1 to purchase and append emails for properties that trigger this automation. You will be charged against your balance for each record triggered according to the terms of your subscription package.  **Charges are non-refundable**.
        /// </summary>
        /// <value>Set to 1 to purchase and append emails for properties that trigger this automation. You will be charged against your balance for each record triggered according to the terms of your subscription package.  **Charges are non-refundable**.</value>
        [DataMember(Name="PurchaseEmail", EmitDefaultValue=false)]
        public PurchaseEmailEnum PurchaseEmail { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class GETListsListIDAutomations200ResponseResultsInner {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  IsEnabled: ").Append(IsEnabled).Append("\n");
            sb.Append("  Triggers: ").Append(Triggers).Append("\n");
            sb.Append("  DailyEmailMemberIDs: ").Append(DailyEmailMemberIDs).Append("\n");
            sb.Append("  ImmediateEmailMemberIDs: ").Append(ImmediateEmailMemberIDs).Append("\n");
            sb.Append("  ExportToWebhookIDs: ").Append(ExportToWebhookIDs).Append("\n");
            sb.Append("  EmailMarketingOrderID: ").Append(EmailMarketingOrderID).Append("\n");
            sb.Append("  MobileNotificationMemberIDs: ").Append(MobileNotificationMemberIDs).Append("\n");
            sb.Append("  SetInterestLevel: ").Append(SetInterestLevel).Append("\n");
            sb.Append("  SetStatusLevel: ").Append(SetStatusLevel).Append("\n");
            sb.Append("  AddToLists: ").Append(AddToLists).Append("\n");
            sb.Append("  PurchasePhone: ").Append(PurchasePhone).Append("\n");
            sb.Append("  PurchaseEmail: ").Append(PurchaseEmail).Append("\n");
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
            return obj.GetType() == GetType() && Equals((GETListsListIDAutomations200ResponseResultsInner)obj);
        }

        /// <summary>
        /// Returns true if GETListsListIDAutomations200ResponseResultsInner instances are equal
        /// </summary>
        /// <param name="other">Instance of GETListsListIDAutomations200ResponseResultsInner to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(GETListsListIDAutomations200ResponseResultsInner other)
        {
            if (other is null) return false;
            if (ReferenceEquals(this, other)) return true;

            return 
                (
                    Name == other.Name ||
                    Name != null &&
                    Name.Equals(other.Name)
                ) && 
                (
                    IsEnabled == other.IsEnabled ||
                    
                    IsEnabled.Equals(other.IsEnabled)
                ) && 
                (
                    Triggers == other.Triggers ||
                    
                    Triggers.Equals(other.Triggers)
                ) && 
                (
                    DailyEmailMemberIDs == other.DailyEmailMemberIDs ||
                    DailyEmailMemberIDs != null &&
                    DailyEmailMemberIDs.Equals(other.DailyEmailMemberIDs)
                ) && 
                (
                    ImmediateEmailMemberIDs == other.ImmediateEmailMemberIDs ||
                    ImmediateEmailMemberIDs != null &&
                    ImmediateEmailMemberIDs.Equals(other.ImmediateEmailMemberIDs)
                ) && 
                (
                    ExportToWebhookIDs == other.ExportToWebhookIDs ||
                    ExportToWebhookIDs != null &&
                    ExportToWebhookIDs.Equals(other.ExportToWebhookIDs)
                ) && 
                (
                    EmailMarketingOrderID == other.EmailMarketingOrderID ||
                    EmailMarketingOrderID != null &&
                    EmailMarketingOrderID.Equals(other.EmailMarketingOrderID)
                ) && 
                (
                    MobileNotificationMemberIDs == other.MobileNotificationMemberIDs ||
                    MobileNotificationMemberIDs != null &&
                    MobileNotificationMemberIDs.Equals(other.MobileNotificationMemberIDs)
                ) && 
                (
                    SetInterestLevel == other.SetInterestLevel ||
                    
                    SetInterestLevel.Equals(other.SetInterestLevel)
                ) && 
                (
                    SetStatusLevel == other.SetStatusLevel ||
                    
                    SetStatusLevel.Equals(other.SetStatusLevel)
                ) && 
                (
                    AddToLists == other.AddToLists ||
                    AddToLists != null &&
                    AddToLists.Equals(other.AddToLists)
                ) && 
                (
                    PurchasePhone == other.PurchasePhone ||
                    
                    PurchasePhone.Equals(other.PurchasePhone)
                ) && 
                (
                    PurchaseEmail == other.PurchaseEmail ||
                    
                    PurchaseEmail.Equals(other.PurchaseEmail)
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
                    if (Name != null)
                    hashCode = hashCode * 59 + Name.GetHashCode();
                    
                    hashCode = hashCode * 59 + IsEnabled.GetHashCode();
                    
                    hashCode = hashCode * 59 + Triggers.GetHashCode();
                    if (DailyEmailMemberIDs != null)
                    hashCode = hashCode * 59 + DailyEmailMemberIDs.GetHashCode();
                    if (ImmediateEmailMemberIDs != null)
                    hashCode = hashCode * 59 + ImmediateEmailMemberIDs.GetHashCode();
                    if (ExportToWebhookIDs != null)
                    hashCode = hashCode * 59 + ExportToWebhookIDs.GetHashCode();
                    if (EmailMarketingOrderID != null)
                    hashCode = hashCode * 59 + EmailMarketingOrderID.GetHashCode();
                    if (MobileNotificationMemberIDs != null)
                    hashCode = hashCode * 59 + MobileNotificationMemberIDs.GetHashCode();
                    
                    hashCode = hashCode * 59 + SetInterestLevel.GetHashCode();
                    
                    hashCode = hashCode * 59 + SetStatusLevel.GetHashCode();
                    if (AddToLists != null)
                    hashCode = hashCode * 59 + AddToLists.GetHashCode();
                    
                    hashCode = hashCode * 59 + PurchasePhone.GetHashCode();
                    
                    hashCode = hashCode * 59 + PurchaseEmail.GetHashCode();
                return hashCode;
            }
        }

        #region Operators
        #pragma warning disable 1591

        public static bool operator ==(GETListsListIDAutomations200ResponseResultsInner left, GETListsListIDAutomations200ResponseResultsInner right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(GETListsListIDAutomations200ResponseResultsInner left, GETListsListIDAutomations200ResponseResultsInner right)
        {
            return !Equals(left, right);
        }

        #pragma warning restore 1591
        #endregion Operators
    }
}
