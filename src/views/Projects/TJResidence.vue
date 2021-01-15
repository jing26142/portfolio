<template>
    <h1>TJ Residence</h1>
    <a href="http://128.199.75.166/">Link to the Website</a>
    <div class="tech_stack_desc">Tech Stacks: JavaScript, VueJS, HTML, CSS </div>
    <br>
    <div class="box">
        <div class="description">
            
            <h5> Motivation </h5>
            <p>
            Our family has been in the apartment business for multiple years now,
            but our customer base is solely based on word of mouth. We have very
            little online presence - and up until now it wasn't really necessary.
            However, with the onset of covid, we've seen numbers decreased dramtically
            so I thought it'd be helpful to be able to have a small website that we
            could eventually advertise on google. <br>
            At first I thought of making the website with online bookings system, but
            our family thought that was too complicated - so I decided to go for a simple
            static website with all the necessary information for our customers.
            </p>
            <p>
            NOTE: the web address is currently just a simple IP address, we're in the
            process of choosing and buying a domain.
            </p>
            <p>
            Below are just some small snippets from the site - feel free to read through!
            </p>

        </div>
    </div>
    <br><br>

    <div class="box">
        <div class="description">
            <img class="tj_img" src="../../../public/tj1.jpg">
            
            <h5> Home Page </h5>

            <p>
            Just a simplistic home page with a slide-show showcasing some of the
            views and rooms for our apartment. The slide-show uses a fade-in/fade-out
            animation and changes slides after every 5 seconds.
            </p>

        </div>
    </div>
    <br><br>


    <div class="box">
        <div class="description">
            <img class="tj_img" src="../../../public/tj2.jpg">
            
            <h5> Accomodation Page </h5>

            <p>
            This page shows the different accomodations that our apartment offers:
            monthly and daily stays (daily stays comes in either executive suites or
            suites). Here the left handside is a slideshow that our customers can look through
            and the right hand side offers a succinct explanation of the room and the price of
            said room.
            </p>

        </div>
    </div>
    <br><br>

    <div class="box">
        <div class="description">
            <img class="tj_img" src="../../../public/tj3.jpg">
            
            <h5> Contact Page </h5>

            <p>
            This contact page includes the bare necessities: address, google map location,
            contact number and our facebook page for ease of access to our customers.
            </p>

        </div>
    </div>
    <br><br>
</template>

<script>
export default {

}
</script>

<style>
.box{
    padding: 1%;
    width: 80%;
    background: rgb(247, 247, 247);
    /* margin: 20px; */
    display: inline-block;
}

.box h5{
    font-family: times;
}

.description{
    text-align: left;
}

.tj_img{
    width: 100%;
}

.tech_stack_desc{
  font-style: italic;
}
</style>