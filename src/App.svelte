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
  <p class="lastupdatetime"> this page was last updated on Jun 23, 2022 </p>
  <section>
    <h1 class="title">My First architectural model</h1>
  </section>
  <section>
    <h1>0.Overview</h1>
    <p>the very start</p>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="images/IMG_2311.jpg">
  </section>
  <section>
    <h1>1.Conceptual Model</h1>
  </section>
  <section>
    <h1>2.Translational Model</h1>
  </section>
  <section>
    <h1>3.Finish Model</h1>
  </section>
  
</main>

<head>
  <meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap" rel="stylesheet">
<style>
  main {
    /* text-align: center; */
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    font-family: 'Major Mono Display', monospace;
    color: #d15634;
    /* text-transform: uppercase; */
    font-size: 3.5em;
    font-weight: 100;
  }
  .title {
    font-family: 'Major Mono Display', monospace;
    color: #d15634;
    /* text-transform: uppercase; */
    font-size: 4em;
    font-weight: 500;
    position: relative;
    bottom: 30px;
  }
  p{
    font-family: 'Didact Gothic', sans-serif;
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
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
</head>