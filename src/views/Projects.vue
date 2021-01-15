<template>
  <h1>Projects</h1>

    <div class="box">
      <div class="project_img_holder">
        <img class="project_img"  src="../../public/tj_residence1.jpg">
      </div>
      <div class="project_desc">
        <h4 class="project_header">
          T.J. Residence Website
        </h4>
        <ul>
          <li>Built a front-end-only website for my family's business</li>
          <li class="tech_stack_desc">Tech Stacks: JavaScript, VueJS, HTML, CSS </li>
          <li><a href="http://128.199.75.166/">Link</a> </li>
        </ul>
        <button style="float:right" type="button" class="btn btn-primary route-link">
          <router-link to="/projects/tj_residence">
            Read More 
          </router-link>
        </button>
      </div>
      

    </div>
    <br>
    <br>


    <div class="box">
      <div class="project_img_holder">
        <img class="project_img"  src="../../public/inven_sales1.jpg">
      </div>
      <div class="project_desc">
        <h4 class="project_header">
          Apartment Management App
        </h4>
        <ul>
          <li>Built a full-stack apartment management app that includes sales logging,
              room management and billing automation
          </li>
          <li>Supports multiple users using Django authentication methods

          </li>
          <li class="tech_stack_desc">Tech Stacks: Python, Django, JavaScript, SQL (Postgres), 
            HTML, CSS 
          </li>
          <!-- <li><a href="http://128.199.75.166/">Link</a> </li> -->
        </ul>
        <button style="float:right" type="button" class="btn btn-primary route-link">
          <router-link to="/projects/apartment_management">
            Read More 
          </router-link>
        </button>
      </div>

    </div>

    <br>
    <br>
    <div class="box">
      <div class="project_img_holder">
        <img class="project_img"  src="../../public/ocaml.png">
      </div>
      <div class="project_desc">
        <h4 class="project_header">
          2048 Game - OCaml
        </h4>
        <ul>
          <li>Built a fully playable 2048 on OCaml [functional programming language]
          </li>
          <li>The game runs only in the command-line
          </li>
          <li class="tech_stack_desc">Tech Stacks: OCaml, JSON Objects
          </li>
          <li><a href="https://github.com/jing26142/2048-Ocaml-Game-Development">GitHub Link</a> </li>
        </ul>
        <!-- <button style="float:right" type="button" class="btn btn-primary">Read More </button> -->
      </div>
      <router-link to="/projects/tj_residence">
      </router-link>
    </div>

</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods: {
  }
}
</script>

<style scoped>
.box{
    padding: 1%;
    width: 80%;
    text-align: left;
    background: rgb(238, 235, 235);
    /* margin: 20px; */
    display: inline-block;
}

.project_header{
  font-family: times;
  /* float:left; */
}
ul{
  list-style-position: inside;
}

.project_desc{
  padding: 0% 0%;
  margin-right: 1%;
  margin-left: 5%;
}

.project_img_holder{
  width: 45%;
}

.project_img{
  float:left; 
  width: 95%;
  margin-right: 5%; 
  display:block
}

.tech_stack_desc{
  font-style: italic;
}

.route-link a{
  text-decoration: none;
  color: white;
}

@media (max-width:730px) {
  .project_img_holder{
    width:100%;
  }

  .project_img{
    width: 100%;
  }

  .project_desc{
    width: 97%;
    margin-top: 0%;
    padding: 0% 0%;
    margin-right: 0%;
    margin-left: 2%;
  }

  li{
    list-style-position: inside;
    margin: 0%;
    padding: 0% 0%;
    margin-left: -10%;
  }
}
</style>