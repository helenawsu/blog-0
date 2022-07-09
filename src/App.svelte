<script>
  import { onMount } from 'svelte';

  // export let name;

  // let counter = 0; // @hmr:keep

  // onMount(() => {
  //   const interval = setInterval(() => {
  //     counter++;
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // });

</script>

<main>
  <p class="lastupdatetime"> this page was last updated on July 8, 2022 </p>
  <section>
    <h1 class="title">My First architectural models</h1>
  </section>
  <section>
    <h2>0.Overview</h2>
    

      <div class="row">
        <div class="column" style="border-top-style: solid;">
          <h3>Beginning --> </h3>
          <p style="position: relative; left: 0px;">First, select a house: <br>I picked the <a href="https://eamesfoundation.org/house/eames-house/">Eames House</a>, a mid-20th century house in Los Angeles.
            <br>In the next 2 hours, after concluding the 1:200 scale is nearly impossible to work with, I drew out the pattern of one wall.<p/>
          <img src="./images/IMG_2311.webp" width = 600 alt="a single peice of wall">

        </div>
        <div class="column" style="border-bottom-style: solid; border-left-style:solid;">
          <h3 style="position: relative; left: 20px">End</h3>
          <p style="position: relative; left: 20px">Final model, scale 1:100</p>
          <img style="position: relative; left: 20px" src="./images/IMG_2867.webp" width = 600 alt="finished model">
        </div>
      </div>

    <!-- svelte-ignore a11y-missing-attribute -->
  </section>
  <section>
    <h2>1.Conceptual Model</h2>
    <p>I poked a hole too big, using white glue to fill in the space</p>
    <img src="./images/IMG_2313.webp" height = 400 alt="a big hole">
    <img src="./images/IMG_2419.webp" height = 400 alt="nearly-finished">
    <p style="position: relative; left: 310px; font-family: 'Major Mono Display', monospace; color: #d15634; width: 50%;">major update</p>
    <p style="position: relative; left: 310px; width: 50%;">1. With vibrant colors!! Contrast with the (supposedly) clear glass!! <br>
  2. I added the black mullions to make it more structured</p>


  </section>
  <section>
    <h2>2.Translational Model</h2>
  </section>


  <section>
    <h2>3.Finish Model</h2>
    <img src="./images/IMG_2743.webp" width = 300 alt="a small peice of wall">
    <img src="./images/IMG_2744.webp" width = 300 alt="shadows of a wall">
    <img src="./images/IMG_2776.webp" width = 300 alt="messy desk">
    <img src="./images/IMG_2782.webp" width = 300 alt="accurately designed floating pillar">
    <img src="./images/IMG_2784.webp" width = 300 alt="clogged superglue">
    <img src="./images/IMG_2823.webp" width = 300 alt="fixed floating pillar">
    <img src="./images/IMG_2824.webp" width = 300 alt="finished eames house">
    <img src="./images/IMG_2825.webp" width = 300 alt="well decorated interior design">
    <img src="./images/IMG_2829.webp" width = 300 alt="with stair in the middle">
    <img src="./images/IMG_2834.webp" width = 300 alt="triangle frame balancing on its own">
    <img src="./images/IMG_2838.webp" width = 300 alt="messy desk plus lunch">
    <img src="./images/IMG_2840.webp" width = 300 alt="triangle pattern balancing on its own">
    <img src="./images/IMG_2843.webp" width = 300 alt="finished model">

  
  </section>
  
</main>

<svelte:head>
</svelte:head>
<style>
  main {
    /* text-align: center; */
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h2 {
    font-family: 'Major Mono Display', monospace;
    color: #d15634;
    /* text-transform: uppercase; */
    font-size: 3.5em;
    font-weight: 100;
  }
  h1 {
    font-family: 'Major Mono Display', monospace;
    color: #d15634;
    /* text-transform: uppercase; */
    font-size: 4em;
    font-weight: 500;
    position: relative;
    bottom: 30px;
  }
  h3{
    font-family: 'Major Mono Display', monospace;
    font-size: 2em;

  }
  p{
    font-family: 'Didact Gothic', sans-serif;
    color: #233b4d;
    font-size: 1.2em;
  }
  .lastupdatetime{
    padding: 0em;
    color: #bbc3c7;
    margin-right: 0;
    margin-bottom: 0;
    text-align:right;
    padding: 0;
    position:relative;
    bottom: 30px;
    left:10px
  }
  /* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 48%;
  padding: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

@media (min-width: 640px) {
    main {
      max-width: none;
    }
}
/* *
{
  box-sizing: border-box;
  outline: 1px red !important} */

</style>

