<template>
  <div class="hello">
    <h1 class="hello-header">Hi, I'm Noppol (Jing) Wongsrinoppakun 
    </h1>
    <div class="intro-icons">
      <a href="https://www.linkedin.com/in/noppol-jing-wongsrinoppakun-a7b767136/">
        <i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
      </a>
      <button type="button" class="btn btn-light"><a style="text-decoration: none; color: black;" :href="`${publicPath}resume.pdf`" download>RESUME</a></button>
    </div>
    <p style="margin: 0% 10%">
      I'm a rising second semester Junior studying Computer Science and
      Economics at Cornell University - open to any Summer Software Engineering/Data Engineering 2021 
      internship roles!
    </p>
    <h3>Relevant Courseworks</h3>
    <ul>
      <li v-for="course in courseworks" :key="course">
        <div class="h3_bullets">{{course}}</div>
      </li>
    </ul>
    <h3>Programming Languages &#38; Frameworks</h3>
    <ul>
      <li v-for="language in prg_languages" :key="language">
        <div class="h3_bullets">{{language}}</div>
      </li>
    </ul>
    <h3>Interests</h3>
    <ul>
      <li v-for="interest in interests" :key="interest">
        <div class="h3_bullets">{{interest}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
// import resume from '../assets/resume.pdf'


export default {
  name: 'HelloWorld',
  data () {
    return {
      publicPath: process.env.BASE_URL,
      courseworks : [
        'Python', 'Java', 'Algorithms', 'Database Systems', 'Functional Programming (OCaml)',
        'Discrete Structures',
      ],
      prg_languages: [
        'Python', 'Django', 'Java', 'OCaml', 'SQL', 'HTML + CSS', 'JavaScript',
        'VueJS'
      ],
      interests: [
        'Reading (economics/history/biographies)', 'Exercise'
      ]
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.intro-icons a {
  color: rgb(70, 70, 253)
}
a {
  color: #42b983;
}

.h3_bullets{
  font-style: italic;
}
</style>


