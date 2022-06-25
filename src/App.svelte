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
  <p class="lastupdatetime"> this page was last updated on Jun 25, 2022 </p>
  <section>
    <h1 class="title">My First architectural models</h1>
  </section>
  <section>
    <h2>0.Overview</h2>
    

      <div class="row">
        <div class="column" style="border-right-style: solid; border-top-style: solid;">
          <h3>Beginning --> </h3>
          <p style="position: relative; left: 0px; font-size: 1em">the very start–—a wall<br>
            it is supposed to be a transparent glass wall, but I only have chipboard</p>
          <img src="./images/IMG_2311.webp" width = 600 alt="a single peice of wall">

        </div>
        <div class="column" style="border-bottom-style: solid;">
          <h3>End</h3>
          <p>coming soon :D <br>
            as of when this page is last updated i'm not done with the final model yet</p>
        </div>
      </div>

    <!-- svelte-ignore a11y-missing-attribute -->
  </section>
  <section>
    <h2>1.Conceptual Model</h2>
    <p>I poked a hole too big, using white glue to fill in the space</p>
    <img src="./images/IMG_2313.webp" height = 400 alt="a big hole">
    <img src="./images/IMG_2419.webp" height = 400 alt="nearly-finished">
    <p style="position: relative; left: 310px; font-family: 'Major Mono Display', monospace; color: #d15634;">major update</p>
    <p style="position: relative; left: 310px;">1. With vibrant colors!! Contrast with the (supposedly) clear glass!! <br>
  2. I added the black mullions to make it more structured</p>


  </section>
  <section>
    <h2>2.Translational Model</h2>
  </section>
  <section>
    <h2>3.Finish Model</h2>
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
</style>