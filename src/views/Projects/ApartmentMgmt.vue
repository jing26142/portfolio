<template>
    <h1>Apartment Management App</h1>
    <div class="tech_stack_desc">Tech Stacks: Python, Django, JavaScript, SQL (Postgres), 
            HTML, CSS 
    </div>
    <div class="box">
        <div class="description">
            <h5> Motivation </h5>
            <p>
                The idea to build an apartment management app came about when 
                I saw how our family is running the business. A lot of the 
                processes are redundant - sales logging are all done on Excel with
                different sheets representing different months. However, aggregating/looking
                at specific sales date is rather tedious. So I thought I could build out an
                that logs each sales + a functionality that allows the user to easily
                query a sale on a specific date (essentially a back-end SQL command onto
                the database).
            </p>
        </div>
    </div>
    <br>
    <br>
    <div class="box">
        <img class="inven_img" src="../../../public/inven_sales1.0.jpg">
        <div class="description">
        <h5> Sales Logging Page </h5>
            <p>
            In this page, the user is able to log in specific sales made. The
            date input automatically filled for the current date but can be manually
            changed by teh user. As above, the rent type is an option of either
            daily or monthly - our apartment only has two options available. The
            reasoning behind fixed option rather manual user input is to ensure that
            all the data types are inputted in the same way.
            </p>
            <p>
            Once the user completes loggin the sale, then the user can click on
            the view-sales button on the upper right hand corner.
            </p>
        </div>
    </div>
    <br>
    <br>
    <div class="box">
        <img class="inven_img" src="../../../public/inven_vsales1.jpg">
        <div class="description">
        <h5> View Sales Page </h5>
            <p>
            Here, clicking on the view sales tab, the user can navigate to see
            the sales that were logged in previously. In case of mistake, the user
            has the option to check the trash-option and click remove - this will run
            a SQL delete command for the specific Sales ID on the backend.
            </p>
            <p>
            At its default, the sales page shows the sales that were made today.
            However, the user can decide to query from a rnage of dates in the apply
            filter section. On top of this, the user can also then export the queried table
            into a CSV file.
            </p>
        </div>
    </div>
    <br><br>

    <div class="box">
        <img class="inven_img" src="../../../public/inven_salesmgmt1.jpg">
        <div class="description">
        <h5> Sales Management </h5>
            <p>
            This is the sales management tab. Here, the user can view the sale that
            was logged in greater detail - it is separated out into daily and monthly.
            This filetered is applied on the top right-hand corner.
            </p>
            <p>
            The time that the sale was logged is inputted in automatically at Time In. The necessity
            for electricity in/electricity out is based on how our family runs the business
            - we used this functionality to make sure that if a customer comes in
            and stay at the apartment then there must be changes in electricity units. As for
            cash authorized, this column is inputted to keep tabs on which customer has/has not paid
            the rent.
            </p>
        </div>
    </div>
    <br><br>

    <div class="box">
        <img class="inven_img" src="../../../public/inven_esalesmgmt1.jpg">
        <div class="description">
        <h5> Edit Sales Management </h5>
            <p>
            This page is here to ensure that in the case of mistake, edits can
            be made to the sales that were logged.
            </p>
        </div>
    </div>
    <br><br>
</template>

<script>
export default {

}
</script>

<style scope>
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

.inven_img{
    width: 100%;
}

.tech_stack_desc{
  font-style: italic;
}
</style>