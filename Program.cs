using System;
using System.IO;

class Program
{
    static void Main()
    {
        string[] files = new string[]
        {
            "./insights/page/2/index.html",
            "./insights/ai-impact-market-growth-tech-shortage-and-more/index.html",
            "./insights/index.html",
            "./insights/cloud-migration-preparedness-may-help-government-orgs-reap-proven-benefits/index.html",
            "./insights/protecting-the-software-supply-chain-with-public-private-sector-partnership/index.html",
            "./insights/diversity-in-tech-pays-dividends-why-are-inclusive-workforces-a-smart-business-decision/index.html",
            "./insights/crowdstrike-outage-a-wake-up-call-for-business-continuity-and-disaster-recovery/index.html",
            "./insights/it-cost-optimization-reduces-spending-and-drives-business-growth/index.html",
            "./insights/cybersecurity-awareness-month-ransomware-hijacks-critical-data-raking-up-billions-in-return/index.html",
            "./insights/key-tools-for-it-leadership-success/index.html",
            "./insights/navigating-application-modernization-benefits-strategies-and-future-trends/index.html",
            "./insights/data-governance-the-backbone-of-digital-transformation/index.html",
            "./comments/feed/index.html",
            "./qed-announcement.html",
            "./index.html@p=730.html",
            "./index.html",
            "./privacy-policy/index.html",
            "./index.html@p=809.html",
            "./index.html@p=736.html",
            "./index.html@p=612.html",
            "./about/index.html",
            "./technical-solutions/index.html",
            "./industry-expertise.1.html",
            "./careers/contact/index.html",
            "./careers/index.html",
            "./careers/job-search/index.html",
            "./index.html@p=827.html",
            "./index.html@p=942.html",
            "./wp-json/index.html",
            "./team/ralph-henry/index.html",
            "./team/wesley-lin/index.html",
            "./team/paul-davis/index.html",
            "./team/matthew-wallace/index.html",
            "./team/benjamin-laneave/index.html",
            "./team/scott-weeden/index.html",
            "./team/judy-wagner/index.html",
            "./team/andrew-pegram/index.html",
            "./feed/index.html",
            "./past-performances/health-services-emergency-project-management/index.html",
            "./past-performances/index.html",
            "./past-performances/mechanical-engineering-and-automotive-technicians/index.html",
            "./past-performances/data-science-ai-ml/index.html",
            "./past-performances/servicenow-systems-integration/index.html",
            "./past-performances/cyber-security-program-maturity/index.html",
            "./index.html@p=826.html",
            "./index.html@p=1029.html",
            "./index.html@p=637.html",
            "./industry-expertise/index.html",
        };

        string[] stringsToReplace = new string[]
        {
            "Column8",
            "wp-content/uploads/2023/06/hero-150x150.png",
            "wp-content/uploads/2023/06/booz-allen-hamilton.png",
            "wp-content/uploads/2023/06/websharpstudios-Graphic1-1-768x721.png",
            "wp-content/uploads/2023/06/scott-weeden.jpg",
            "wp-content/uploads/2023/06/websharpstudios-Graphic1-2-768x721.png",
            "wp-content/uploads/2023/06/government-services-768x413.png",
            "wp-content/uploads/2023/06/Group-34-150x150.png",
            "wp-content/uploads/2023/06/expertise-hero-150x150.png",
            "wp-content/uploads/2023/06/judy-wagner.jpeg",
            "wp-content/uploads/2023/06/about-hero-300x300.png",
            "wp-content/uploads/2023/06/Judy-Wagner-300x300.jpg",
            "wp-content/uploads/2023/06/websharpstudios-Graphic1-14-300x281.png",
            "wp-content/uploads/2023/06/booz-allen-hamilton-300x144.png",
            "wp-content/uploads/2023/06/Engineering.png",
            "wp-content/uploads/2023/06/government.png",
            "wp-content/uploads/2023/06/Engineering-768x413.png",
            "wp-content/uploads/2023/06/websharpstudios-Graphic1-14.png",
            "wp-content/uploads/2023/06/careers-hero-150x150.png",
            "wp-content/uploads/2023/06/vcu-health.png",
            "wp-content/uploads/2023/06/websharpstudios-Graphic1-9-300x281.png",
            "wp-content/uploads/2023/06/stars.png",
            "wp-content/uploads/2023/06/manufacturing.png",
            "wp-content/uploads/2023/06/information-technology.png",
            "wp-content/uploads/2023/06/motion-300x154.png",
            "wp-content/uploads/2023/06/websharpstudios-Graphic1-11.png",
            "wp-content/uploads/2023/06/websharpstudios-Graphic1-8.png",
            "wp-content/uploads/2023/06/websharpstudios-Graphic1-9.png",
            "wp-content/uploads/2023/06/websharpstudios-Graphic1-10.png",
            "wp-content/uploads/2023/06/manufacturing-150x150.png",
            "wp-content/uploads/2023/06/Group-34-1-150x150.png",
            "wp-content/uploads/2023/06/websharpstudios-Graphic1-12.png",
            "wp-content/uploads/2023/06/Group-31-150x150.png",
            "wp-content/uploads/2023/06/websharpstudios-Graphic1-7-768x721.png",
            "wp-content/uploads/2023/06/websharpstudios-Graphic1-13-768x721.png",
            "wp-content/uploads/2023/06/vcu-health-200x120.png",
            "wp-content/uploads/2023/06/websharpstudios-Graphic1-5-300x281.png",
            "wp-content/uploads/2023/06/careers-difference-300x282.png",
            "wp-content/uploads/2023/06/contact-300x300.png",
            "wp-content/uploads/2023/06/websharpstudios-Graphic1-11-300x281.png",
            "wp-content/uploads/2023/06/baylor-scott-white-300x155.png"
        };

        foreach (string file in files)
        {
            if (File.Exists(file))
            {
                string content = File.ReadAllText(file);
                foreach (string str in stringsToReplace)
                {
                    string lowerStr = str.ToLower();
                    content = content.Replace(str, lowerStr);
                }
                File.WriteAllText(file, content);
                Console.WriteLine($"Updated file: {file}");
            }
            else
            {
                Console.WriteLine($"File not found: {file}");
            }
        }
    }
}
