<template>
    <h1>Artist Mood Match</h1>
    <a href="http://artistmatch.herokuapp.com/">Link to Mood Match</a>
    <div class="tech_stack_desc">Tech Stacks: Python, Django, JavaScript, Numpy, JupyterNotebook, JSON
            HTML, CSS 
    </div>
    <div class="box">
        <div class="description">
            <h5> Motivation </h5>
            <p>
                This project was done as a part of my information retrieval class (CS4300).
                The idea behind this project is that we would create a web-app based in Django
                that will enable our users to input in specific keywords + mood category and from
                there we will fetch a list of 10 artists that would most likely fit the user's
                input criteria.
            </p>
            <li>Features: Artist Mood Matching, User Score Weighting (Rocchio-like system)</li>
            <li>Mood Matching Method: TF-IDF, Cosine Similarity and Machine Learning</li>
            <li>Corpus: Lyrics from the latest albums of Spotify's top 100 artists</li>
            <li>Main Contributor: Scott Rustenhaven and Noppol Wongsrinoppakun (me)</li>
            <li>Note: The project is no longer being worked on so Top 100 artists and latest song
                are now out of date. The link may also be unstable because we are hosting this
                on Heroku's free server.
            </li>
        </div>
    </div>
    <br>
    <br>
    <div class="box">
        <img class="inven_img" src="../../../public/moodmatch_homepage.png">
        <div class="description">
        <h5> Home Page </h5>
            <p>
            This is the index page of the website - the user lands here and is
            immediately greeted with two input fields: 1) keyword matching and
            2) mood you're looking for [drop down]. The "keyword matching" is where
            we perform our cosine similarity and "mood you're looking for" is the
            ML component of this project. <br>
            Based on these two inputs, we then compute the similairty of the user's
            input to Spotify's top 100 artist.
            </p>
        </div>
    </div>
    <br>
    <br>
    <div class="box">
        <img class="inven_img" src="../../../public/moodmatch_advanced-options.png">
        <div class="description">
        <h5> Advanced Option Feature </h5>
            <p>
            On top of just the user the two main inputs, we also allow for "Advanced Options"
            where our user can specify specific attributes that they like (Speechiness, Danceability,
            Tempo, Energy) and we will also weight this in the final result (the scoring here is
            done through Euclidean Distance).
            </p>
        </div>
    </div>
    <br><br>

    <div class="box">
        <img class="inven_img" src="../../../public/moodmatch_sample-input.png">
        <div class="description">
        <h5> Sample Input: Keyword Match: "down" Category: "sad" </h5>
            <p>
            The above shows some sample results of the keyword "down" with the
            inputted category as "sad". Do notice that there's a heart beside the
            result: clicking on the heart acts like a vote that will increase
            the weighting of the result. This works in a fashion similar to that
            of Rocchio Update.
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