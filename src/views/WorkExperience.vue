<template>
    <div class="wrapper">
        <div class="work_header">
            <h4 style="float: left">Stockpile, US (Remote)</h4>
            <div class="work_time"> July 2021 - Present (Expected: August 2021) </div>
        </div>
        
        <div class="work_description">
            <div style="font-style:italic; float:left">Back-End Software Engineer Intern</div> <br>
            <ul>
                <li>Develop scalable Java back end to support Stockpile’s new incentive-based referral program</li>
                <li>Work closely with our marketing and PM team to ensure that our referral program satisfies both our
                    business and our technical requirements
                </li>
            </ul>
        </div>
    </div>

    <div class="wrapper">
        <div class="work_header">
            <h4 style="float: left">Tencent, Bangkok, Thailand</h4>
            <div class="work_time"> July 2020 - August 2020 </div>
        </div>
        
        <div class="work_description">
            <div style="font-style:italic; float:left">FullStack Software Engineer Intern</div> <br>
            <ul>
                <li>Worked in an agile team of 4 developers and 1 product manager to create an internal SEO reporting tool curated by
                crawling and extracting data from 5,000 pages from our product websites with plans to scale up to 1M+ pages</li>
                <li>Developed backend web crawler that supports multithreading in Python using BeautifulSoup library to retrieve web
                data and encode crawled data into binary files for enhanced reading performance and storage efficiency</li>
                <li>Created a JSON API in Django that reads encoded binary files and build a user-friendly front-end report</li>
            </ul>
        </div>
    </div>

    <div class="wrapper">
        <div class="work_header">
            <h4 style="float: left">Wayfair, Boston, United States</h4>
            <div class="work_time"> Jan 2020 – June 2020 </div>
        </div>
        
        <div class="work_description">
            <div style="font-style:italic; float:left">Data Solutions Engineer Co-Op</div> <br>
            <ul>
                <li>Worked cross functionally with other BI teams to curate datasets using SQL (100M+ rows) to create a centralized
                report with over 100+ metrics covering 20 metric groups for our category managers</li>
                <li>Monitored our slack channel to communicate with/update other BI-teams on various issues (i.e. data deprecation)</li>
                <li>Developed the AtScale Cube and worked with Google Cloud Platform to ensure seamless data flow to our business
                    end-users; enforced data integrity checks across multiple scripts to safeguard against data inaccuracies</li>
                <li>Worked in an agile team of 6 along with our product managers to identify and execute on key analytical needs</li>
            </ul>
        </div>
    </div>

    <div class="wrapper">
        <div class="work_header">
            <h4 style="float: left; text-align: left">Thai Life Insurance, Bangkok, Thailand</h4>
            <div class="work_time"> June 2019 – July 2019 </div>
        </div>
        
        <div class="work_description">
            <div style="font-style:italic; float:left">Equity Investments Intern</div> <br>
            <ul>
                <li>Worked on valuation model of a REIT Equity security listed on the SET Index using income approach</li>
                <li>Tracked Thai Life’s portfolio performance relative to the MSCI ACWI benchmark using the Bloomberg Terminal</li>
                <li>Reviewed Thai Life’s portfolio performance and identify under/outperforming funds to suggest potential changes</li>
                <li>Sat in on pitches by fund managers and offered my opinions on said funds in post-pitch meetings</li>
            </ul>
        </div>
    </div>



</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.wrapper{
    background: #fff;
    max-width: 960px;
    margin: auto;
    padding: 20px;
}
/* clear here is used to disable floating elements and return
to normal document form after using float */

.wrapper:after {
    content: "";
    display: block;
    clear: both;
}

.work_header{
    margin: auto;
    font-family: times;
}

.work_header:after{
    content:"";
    display: block;
    clear: both;
}
img{
    float:left;
    margin: 10px;
}

.content{
    padding: 10px;
    background: #ccc;
    clear: both;
}

section, aside{
    float: left;
    width: 46%;
    padding: 1%;
    margin: 1%;
    background: #f2f2f2;
}

.columns:after{
    display: block;
    content: "";
    clear: both;
}

.work_description{
    float: left;
    text-align:left;
    justify-content: left;
}

.work_time{
    font: bold; 
    float:right
}
@media (max-width:730px) {
  .work_time{
    float:left;
    text-align: left;
  }

  .project_img{
    width: 100%;
  }

  .project_desc{
    width:100%;
    margin-top: 0%;
    /* margin-bottom: 2%; */
  }
}
</style>