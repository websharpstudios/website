# Org.OpenAPITools - Azure Functions v4 Server

# PropertyRadar API Reference
PropertyRadar offers the most powerful property and owner data API ever. Access our full 250+ property search criteria, build lists, get owner information, append phones & emails, set up automations, and much more. While the API does not yet offer the full power of the PropertyRadar web and mobile applications, we are excited to make it available and see what you build!  

Note that the PropertyRadar API is intended for end-users only - you can not use it to build applications you sell to others.  That said, we offer OAuth, so partner applications can access the API on behalf of our shared customers. Please <a href='https://www.propertyradar.com/support' target='_blank'>contact us</a> to learn more about our partner programs.  

The PropertyRadar API is organized around REST. Our API has predictable resource-oriented URLs, accepts and returns JSON-encoded data, and uses standard HTTP response codes, authentication, and verbs.  

To begin using the PropertyRadar API, you can activate a <a href='https://help.propertyradar.com/en/articles/8309200-how-to-activate-30-day-api-trial' target='_blank'>30-Day Free Trial</a> (note that a paid PropertyRadar subscription is required). To do so, <a href='https://app.propertyradar.com/' target='_blank'>login</a>, click the profile icon, and choose Account Settings.  

<image src='https://files.propertyradar.com/service/api-docs/Account_Settings_highlighted.png'>

Then click the \"Get API Free Trial\" link at the bottom to begin the trial.  

<image src='https://files.propertyradar.com/service/api-docs/Get_API_Free_Trail.png'>

Once you complete that, go back into Account Settings and scroll to the bottom where you will find your API key. Click on its Integration Name to reveal your actual key to use.  

<image src='https://files.propertyradar.com/service/api-docs/Integrations_Dialog.png'>

Then when you have your API token, click \"Try It\" next to any of the REST endpoints below. Paste your API token into the \"Bearer Token\" field under Security. Set your Parameters and/or Body in the fields provided.

If you've chosen a pay-per-record endpoint, each result returned will count as one export record or phone/email purchase or unlock against your monthly included items. Any overages will cost the same as any other export would.  

As such, test with Purchase=0 as that will tell you how many records will be returned with no deduction. When you are ready to purchase the records, set Purchase=1, and be sure you request the return fields you want. 

For exports, whether you request 1 field of data for that record, or 50, it will still count as an export. Again, It's important to test first because all purchases are non-refundable, and even during the API trial, each record will be deducted from your monthly included items. 

Finally please note that this API is intended for experienced software developers as it requires custom code on your end. If you do not have a developer on your team and want to access the power of PropertyRadar, please consider using our <a href='https://help.propertyradar.com/en/articles/3314775-using-zapier-with-propertyradar' target='_blank'>Zapier integration</a> instead as no coding is required.

## Run

Linux/OS X:

```
sh build.sh
```

Windows:

```
build.bat
```
## Run in Docker

```
cd src/Org.OpenAPITools
docker build -t org.openapitools .
docker run -p 5000:8080 org.openapitools
```
