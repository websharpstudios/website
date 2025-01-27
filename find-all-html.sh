#!/bin/bash

# Define the array of file paths
array=(
"./insights/page/2/index.html"
"./insights/ai-impact-market-growth-tech-shortage-and-more/index.html"
"./insights/index.html"
"./insights/cloud-migration-preparedness-may-help-government-orgs-reap-proven-benefits/index.html"
"./insights/protecting-the-software-supply-chain-with-public-private-sector-partnership/index.html"
"./insights/diversity-in-tech-pays-dividends-why-are-inclusive-workforces-a-smart-business-decision/index.html"
"./insights/crowdstrike-outage-a-wake-up-call-for-business-continuity-and-disaster-recovery/index.html"
"./insights/it-cost-optimization-reduces-spending-and-drives-business-growth/index.html"
"./insights/cybersecurity-awareness-month-ransomware-hijacks-critical-data-raking-up-billions-in-return/index.html"
"./insights/key-tools-for-it-leadership-success/index.html"
"./insights/navigating-application-modernization-benefits-strategies-and-future-trends/index.html"
"./insights/data-governance-the-backbone-of-digital-transformation/index.html"
"./comments/feed/index.html"
"./qed-announcement.html"
"./index.html@p=730.html"
"./index.html"
"./privacy-policy/index.html"
"./index.html@p=809.html"
"./index.html@p=736.html"
"./index.html@p=612.html"
"./about/index.html"
"./technical-solutions/index.html"
"./industry-expertise.1.html"
"./careers/contact/index.html"
"./careers/index.html"
"./careers/job-search/index.html"
"./index.html@p=827.html"
"./index.html@p=942.html"
"./wp-json/index.html"
"./team/ralph-henry/index.html"
"./team/wesley-lin/index.html"
"./team/paul-davis/index.html"
"./team/matthew-wallace/index.html"
"./team/benjamin-laneave/index.html"
"./team/scott-weeden/index.html"
"./team/judy-wagner/index.html"
"./team/andrew-pegram/index.html"
"./feed/index.html"
"./past-performances/health-services-emergency-project-management/index.html"
"./past-performances/index.html"
"./past-performances/mechanical-engineering-and-automotive-technicians/index.html"
"./past-performances/data-science-ai-ml/index.html"
"./past-performances/servicenow-systems-integration/index.html"
"./past-performances/cyber-security-program-maturity/index.html"
"./index.html@p=826.html"
"./index.html@p=1029.html"
"./index.html@p=637.html"
"./industry-expertise/index.html"
)

# Loop through each file in the array and perform the sed operations
for filename in "$array"; do
  sed -i "s/wp-content\/uploads\/2023\/06\/hero-150x150.png/wp-content\/uploads\/2023\/06\/hero-150x150.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/booz-allen-hamilton.png/wp-content\/uploads\/2023\/06\/booz-allen-hamilton.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-1-768x721.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-1-768x721.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/scott-weeden.jpg/wp-content\/uploads\/2023\/06\/scott-weeden.jpg/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-2-768x721.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-2-768x721.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/government-services-768x413.png/wp-content\/uploads\/2023\/06\/government-services-768x413.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/Group-34-150x150.png/wp-content\/uploads\/2023\/06\/group-34-150x150.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/expertise-hero-150x150.png/wp-content\/uploads\/2023\/06\/expertise-hero-150x150.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/judy-wagner.jpeg/wp-content\/uploads\/2023\/06\/judy-wagner.jpeg/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/about-hero-300x300.png/wp-content\/uploads\/2023\/06\/about-hero-300x300.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/Judy-Wagner-300x300.jpg/wp-content\/uploads\/2023\/06\/judy-wagner-300x300.jpg/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-14-300x281.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-14-300x281.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/booz-allen-hamilton-300x144.png/wp-content\/uploads\/2023\/06\/booz-allen-hamilton-300x144.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/Engineering.png/wp-content\/uploads\/2023\/06\/engineering.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/government.png/wp-content\/uploads\/2023\/06\/government.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/Engineering-768x413.png/wp-content\/uploads\/2023\/06\/engineering-768x413.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/hero-150x150.png/wp-content\/uploads\/2023\/06\/hero-150x150.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/booz-allen-hamilton.png/wp-content\/uploads\/2023\/06\/booz-allen-hamilton.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-1-768x721.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-1-768x721.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/scott-weeden.jpg/wp-content\/uploads\/2023\/06\/scott-weeden.jpg/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-2-768x721.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-2-768x721.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/government-services-768x413.png/wp-content\/uploads\/2023\/06\/government-services-768x413.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/Group-34-150x150.png/wp-content\/uploads\/2023\/06\/group-34-150x150.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/expertise-hero-150x150.png/wp-content\/uploads\/2023\/06\/expertise-hero-150x150.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/judy-wagner.jpeg/wp-content\/uploads\/2023\/06\/judy-wagner.jpeg/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/about-hero-300x300.png/wp-content\/uploads\/2023\/06\/about-hero-300x300.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/Judy-Wagner-300x300.jpg/wp-content\/uploads\/2023\/06\/judy-wagner-300x300.jpg/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-14-300x281.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-14-300x281.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/booz-allen-hamilton-300x144.png/wp-content\/uploads\/2023\/06\/booz-allen-hamilton-300x144.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/Engineering.png/wp-content\/uploads\/2023\/06\/engineering.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/government.png/wp-content\/uploads\/2023\/06\/government.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/Engineering-768x413.png/wp-content\/uploads\/2023\/06\/engineering-768x413.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-14.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-14.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/careers-hero-150x150.png/wp-content\/uploads\/2023\/06\/careers-hero-150x150.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/vcu-health.png/wp-content\/uploads\/2023\/06\/vcu-health.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-9-300x281.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-9-300x281.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/stars.png/wp-content\/uploads\/2023\/06\/stars.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/manufacturing.png/wp-content\/uploads\/2023\/06\/manufacturing.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/information-technology.png/wp-content\/uploads\/2023\/06\/information-technology.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/motion-300x154.png/wp-content\/uploads\/2023\/06\/motion-300x154.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-11.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-11.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-8.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-8.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-9.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-9.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-10.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-10.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/manufacturing-150x150.png/wp-content\/uploads\/2023\/06\/manufacturing-150x150.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/Group-34-1-150x150.png/wp-content\/uploads\/2023\/06\/group-34-1-150x150.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-12.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-12.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/Group-31-150x150.png/wp-content\/uploads\/2023\/06\/group-31-150x150.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-7-768x721.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-7-768x721.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-13-768x721.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-13-768x721.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/vcu-health-200x120.png/wp-content\/uploads\/2023\/06\/vcu-health-200x120.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-5-300x281.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-5-300x281.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/careers-difference-300x282.png/wp-content\/uploads\/2023\/06\/careers-difference-300x282.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/contact-300x300.png/wp-content\/uploads\/2023\/06\/contact-300x300.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/websharpstudios-Graphic1-11-300x281.png/wp-content\/uploads\/2023\/06\/websharpstudios-graphic1-11-300x281.png/g" "$filename"
  sed -i "s/wp-content\/uploads\/2023\/06\/baylor-scott-white-300x155.png/wp-content\/uploads\/2023\/06\/baylor-scott-white-300x155.png/g" "$filename"
done
