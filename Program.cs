using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;

namespace AuctionParser
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string filePath = "/Users/owner/website-1/auctions.json";
            string jsonContent = File.ReadAllText(filePath);
            AuctionData auctionData = JsonConvert.DeserializeObject<AuctionData>(jsonContent);
            var counties = auctionData.Data.propertyInfo.select(x => x.County).Distinct();
        }
    }

    public class AuctionData
    {
        [JsonProperty("searchResultCount")]
        public int SearchResultCount { get; set; }

        [JsonProperty("currentDTTM")]
        public string CurrentDTTM { get; set; }

        [JsonProperty("model")]
        public string Model { get; set; }

        [JsonProperty("continuationToken")]
        public string ContinuationToken { get; set; }

        [JsonProperty("data")]
        public List<Listing> Data { get; set; }
    }

    public class Listing
    {
        [JsonProperty("listingId")]
        public string ListingId { get; set; }

        [JsonProperty("createdDate")]
        public string CreatedDate { get; set; }

        [JsonProperty("interiorAccessAvailable")]
        public bool InteriorAccessAvailable { get; set; }

        [JsonProperty("isCashOnly")]
        public bool IsCashOnly { get; set; }

        [JsonProperty("isFinancible")]
        public bool IsFinancible { get; set; }

        [JsonProperty("listingProgramWebsite")]
        public string ListingProgramWebsite { get; set; }

        [JsonProperty("auctionProgram")]
        public string AuctionProgram { get; set; }

        [JsonProperty("stage")]
        public string Stage { get; set; }

        [JsonProperty("stateLicense")]
        public string StateLicense { get; set; }

        [JsonProperty("hideStateLicense")]
        public bool HideStateLicense { get; set; }

        [JsonProperty("absoluteSale")]
        public bool AbsoluteSale { get; set; }

        [JsonProperty("isSupplementalPropertyData")]
        public bool IsSupplementalPropertyData { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }

        [JsonProperty("foreclosureSaleDate")]
        public string ForeclosureSaleDate { get; set; }

        [JsonProperty("tpsOpenBid")]
        public double TpsOpenBid { get; set; }

        [JsonProperty("openingBid")]
        public double OpeningBid { get; set; }

        [JsonProperty("disclosures")]
        public string Disclosures { get; set; }

        [JsonProperty("propertyInfo")]
        public PropertyInfo PropertyInfo { get; set; }

        [JsonProperty("customDetail")]
        public CustomDetail CustomDetail { get; set; }

        [JsonProperty("auctionRunInfo")]
        public AuctionRunInfo AuctionRunInfo { get; set; }

        [JsonProperty("images")]
        public List<Image> Images { get; set; }

        [JsonProperty("documents")]
        public List<Document> Documents { get; set; }

        [JsonProperty("listingStatus")]
        public ListingStatus ListingStatus { get; set; }

        [JsonProperty("hmPosessionDate")]
        public string HmPosessionDate { get; set; }

        [JsonProperty("endingSoonest")]
        public string EndingSoonest { get; set; }

        [JsonProperty("endingLatest")]
        public string EndingLatest { get; set; }

        [JsonProperty("tpsEndingSoonest")]
        public string TpsEndingSoonest { get; set; }

        [JsonProperty("tpsEndingLatest")]
        public string TpsEndingLatest { get; set; }

        [JsonProperty("recentlyListed")]
        public string RecentlyListed { get; set; }

        [JsonProperty("endingSoonestDashboard")]
        public string EndingSoonestDashboard { get; set; }

        [JsonProperty("endingLatestDashboard")]
        public string EndingLatestDashboard { get; set; }

        [JsonProperty("tpsEndingSoonestDashboard")]
        public string TpsEndingSoonestDashboard { get; set; }

        [JsonProperty("tpsEndingLatestDashboard")]
        public string TpsEndingLatestDashboard { get; set; }

        [JsonProperty("recentlyListedDashboard")]
        public string RecentlyListedDashboard { get; set; }

        [JsonProperty("lastUpdated")]
        public string LastUpdated { get; set; }

        [JsonProperty("timestamp")]
        public string Timestamp { get; set; }

        [JsonProperty("hideForeclosureContact")]
        public bool HideForeclosureContact { get; set; }

        [JsonProperty("foreclosureAttorneyName")]
        public string ForeclosureAttorneyName { get; set; }

        [JsonProperty("foreclosureAttorneyPhone")]
        public string ForeclosureAttorneyPhone { get; set; }

        [JsonProperty("companyState")]
        public string CompanyState { get; set; }

        [JsonProperty("fullAttorneyInfo")]
        public bool FullAttorneyInfo { get; set; }

        [JsonProperty("postSaleDisplay")]
        public bool PostSaleDisplay { get; set; }

        [JsonProperty("displayMRLP")]
        public bool DisplayMRLP { get; set; }

        [JsonProperty("canonicalUrl")]
        public string CanonicalUrl { get; set; }

        [JsonProperty("listingSnapshot")]
        public bool ListingSnapshot { get; set; }

        [JsonProperty("remoteBidding")]
        public bool RemoteBidding { get; set; }

        [JsonProperty("buyerExclusive")]
        public bool BuyerExclusive { get; set; }
    }

    public class PropertyInfo
    {
        [JsonProperty("propertyId")]
        public string PropertyId { get; set; }

        [JsonProperty("globalPropertyId")]
        public string GlobalPropertyId { get; set; }

        [JsonProperty("createdDate")]
        public string CreatedDate { get; set; }

        [JsonProperty("lotSizeAcreageDescription")]
        public string LotSizeAcreageDescription { get; set; }

        [JsonProperty("websiteUrl")]
        public string WebsiteUrl { get; set; }

        [JsonProperty("oldWebsiteUrl")]
        public string OldWebsiteUrl { get; set; }

        [JsonProperty("assetNumber")]
        public string AssetNumber { get; set; }

        [JsonProperty("propertyType")]
        public string PropertyType { get; set; }

        [JsonProperty("bedrooms")]
        public double Bedrooms { get; set; }

        [JsonProperty("latitude")]
        public double Latitude { get; set; }

        [JsonProperty("longitude")]
        public double Longitude { get; set; }

        [JsonProperty("address")]
        public string Address { get; set; }

        [JsonProperty("interiorSqFt")]
        public double InteriorSqFt { get; set; }

        [JsonProperty("county")]
        public string County { get; set; }

        [JsonProperty("fullBathrooms")]
        public double FullBathrooms { get; set; }

        [JsonProperty("yearBuilt")]
        public int YearBuilt { get; set; }

        [JsonProperty("lotSize")]
        public double LotSize { get; set; }

        [JsonProperty("postalCode")]
        public string PostalCode { get; set; }

        [JsonProperty("city")]
        public string City { get; set; }

        [JsonProperty("country")]
        public string Country { get; set; }

        [JsonProperty("state")]
        public string State { get; set; }

        [JsonProperty("stateFullName")]
        public string StateFullName { get; set; }

        [JsonProperty("occupancyStatus")]
        public string OccupancyStatus { get; set; }
    }

    public class CustomDetail
    {
        [JsonProperty("disable_proxy_bids__c")]
        public bool DisableProxyBids { get; set; }

        [JsonProperty("increment_1__c")]
        public string Increment1 { get; set; }

        [JsonProperty("increment_2__c")]
        public string Increment2 { get; set; }

        [JsonProperty("increment_3__c")]
        public string Increment3 { get; set; }

        [JsonProperty("show_bid_history__c")]
        public string ShowBidHistory { get; set; }

        [JsonProperty("of_bids__c")]
        public string OfBids { get; set; }

        [JsonProperty("funds_type__c")]
        public string FundsType { get; set; }

        [JsonProperty("funds_amount__c")]
        public double FundsAmount { get; set; }

        [JsonProperty("funds_percentage__c")]
        public double FundsPercentage { get; set; }

        [JsonProperty("systemModStamp")]
        public string SystemModStamp { get; set; }
    }

    public class AuctionRunInfo
    {
        [JsonProperty("auctionId")]
        public string AuctionId { get; set; }

        [JsonProperty("awxId")]
        public string AwxId { get; set; }

        [JsonProperty("auctionName")]
        public string AuctionName { get; set; }

        [JsonProperty("auctionNumber")]
        public string AuctionNumber { get; set; }

        [JsonProperty("auctionProgram")]
        public string AuctionProgram { get; set; }

        [JsonProperty("auctionMethod")]
        public string AuctionMethod { get; set; }

        [JsonProperty("websiteDescription")]
        public string WebsiteDescription { get; set; }

        [JsonProperty("websiteName")]
        public string WebsiteName { get; set; }

        [JsonProperty("startDate")]
        public string StartDate { get; set; }

        [JsonProperty("endDate")]
        public string EndDate { get; set; }

        [JsonProperty("earnestMoneyDepositPercentage")]
        public double EarnestMoneyDepositPercentage { get; set; }

        [JsonProperty("earnestMoneyDepositMin")]
        public double EarnestMoneyDepositMin { get; set; }

        [JsonProperty("startingBid")]
        public double StartingBid { get; set; }

        [JsonProperty("coopComissionPercentage")]
        public double CoopComissionPercentage { get; set; }

        [JsonProperty("transactionDetails")]
        public string TransactionDetails { get; set; }

        [JsonProperty("termsAndConditions")]
        public string TermsAndConditions { get; set; }
    }

    public class Image
    {
        [JsonProperty("mediaUrl")]
        public string MediaUrl { get; set; }

        [JsonProperty("fileUrl")]
        public string FileUrl { get; set; }

        [JsonProperty("thumbnailUrl")]
        public string ThumbnailUrl { get; set; }

        [JsonProperty("url")]
        public string Url { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }
    }

    public class Document
    {
        [JsonProperty("mediaUrl")]
        public string MediaUrl { get; set; }

        [JsonProperty("fileUrl")]
        public string FileUrl { get; set; }

        [JsonProperty("thumbnailUrl")]
        public string ThumbnailUrl { get; set; }

        [JsonProperty("url")]
        public string Url { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }
    }

    public class ListingStatus
    {
        [JsonProperty("statusText")]
        public string StatusText { get; set; }

        [JsonProperty("statusTextSRP")]
        public string StatusTextSRP { get; set; }

        [JsonProperty("statusTextPDP")]
        public string StatusTextPDP { get; set; }

        [JsonProperty("statusTextDashboard")]
        public string StatusTextDashboard { get; set; }

        [JsonProperty("isTPS")]
        public bool IsTPS { get; set; }

        [JsonProperty("isCountdownToPreAuction")]
        public bool IsCountdownToPreAuction { get; set; }

        [JsonProperty("isInPreAuction")]
        public bool IsInPreAuction { get; set; }

        [JsonProperty("isCountdownToAuction")]
        public bool IsCountdownToAuction { get; set; }

        [JsonProperty("isInAuction")]
        public bool IsInAuction { get; set; }

        [JsonProperty("isCountdownToPostAuction")]
        public bool IsCountdownToPostAuction { get; set; }

        [JsonProperty("isInPostAuction")]
        public bool IsInPostAuction { get; set; }

        [JsonProperty("isAuctionClosed")]
        public bool IsAuctionClosed { get; set; }

        [JsonProperty("isComingSoon")]
        public bool IsComingSoon { get; set; }

        [JsonProperty("showRegisterToBid")]
        public bool ShowRegisterToBid { get; set; }

        [JsonProperty("showSubmitOffer")]
        public bool ShowSubmitOffer { get; set; }

        [JsonProperty("showEstimatedOpeningBid")]
        public bool ShowEstimatedOpeningBid { get; set; }

        [JsonProperty("showLastAndHighestBid")]
        public bool ShowLastAndHighestBid { get; set; }

        [JsonProperty("tagline")]
        public string Tagline { get; set; }

        [JsonProperty("foreclosureSaleDateWebsite")]
        public string ForeclosureSaleDateWebsite { get; set; }

        [JsonProperty("outbidPeriodExpirationDateWebsite")]
        public string OutbidPeriodExpirationDateWebsite { get; set; }
    }
}
