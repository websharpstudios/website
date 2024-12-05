using HtmlAgilityPack;
using System;
using System.IO;

class Program
{
    static void Main(string[] args)
    {


        // Define the path to the HTML file
        string filePath = args?.Length>0 ? args[0] : "/Users/owner/website/team/benjamin-laneave/index.html";

        // Read the HTML content from the file
        string html = File.ReadAllText(filePath);

        HtmlDocument document = new HtmlDocument();
        document.LoadHtml(html);

        var anchors = document.DocumentNode.SelectNodes("//a[@class='block' or @class='py-6 block']");

        foreach (var anchor in anchors)
        {
            var svgs = anchor.SelectNodes(".//svg");
            if (svgs != null)
            {
                foreach (var svg in svgs)
                {
                    svg.ParentNode.ReplaceChild(HtmlNode.CreateNode("<!-- .site-logo -->"), svg);
                }
            }
        }

        // Output the modified HTML
        // Console.WriteLine(document.DocumentNode.OuterHtml);
    }
}
