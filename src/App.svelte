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
  <p class="lastupdatetime"> this page was last updated on July 10, 2022 </p>
  <section>
    <h1 class="title">My First architectural models</h1>
  </section>
  <section>
    <h2>0.Overview</h2>
    

      <div class="row">
        <div class="column" style="border-top-style: solid;">
          <h3>Beginning --> </h3>
          <p style="position: relative; left: 0px;">First, select a house: <br>I picked the <a href="https://eamesfoundation.org/house/eames-house/">Eames House</a>, a mid-20th century house in Los Angeles.
            <br>In the next 2 hours, after concluding the 1:200 scale (1cm = 2m) is nearly impossible to cut out the window grids, I drew out the pattern of one wall.<p/>
          <img src="./images/IMG_2311.webp" width = 600 alt="a single peice of wall">

        </div>
        <div class="column" style="border-bottom-style: solid; border-left-style:solid;">
          <h3 style="position: relative; left: 20px">End</h3>
          <p style="position: relative; left: 20px">Final model, scale 1:100</p>
          <img style="position: relative; left: 20px" src="./images/IMG_2867.webp" width=600 alt="finished model">
        </div>
      </div>

    <!-- svelte-ignore a11y-missing-attribute -->
  </section>




  <section>
    <h2>1.Conceptual Model</h2>

    <section class="background">
      <div class="flex-container">
        <div>
          <img class="pic-filler" src="./images/Hicon32.webp" height=400 width =600 alt="space filler">
          <p style="float: right; position: relative; left: 20px" class="flex-text">summary and idea of first model</p>
        </div>
    </section>
    <br>

    <section class="border">
    <h4>process</h4>
    <section>
      <div class="flex-container">
        <div class="flex-items">
          <img src="./images/IMG_2313.webp" height=400 alt="a big hole">
          <p class="flex-text">I poked a hole too big, using white glue to fill in the space</p>
        </div>
        <div class="flex-items">
          <img src="./images/IMG_2419.webp" height=400 alt="nearly-finished">
          <p style="font-family: 'Major Mono Display', monospace; color: #d15634;">major update</p>
          <p>1. With vibrant colors!! Contrast with the (supposedly) clear glass!! 
          <br> 2. I added the black mullions to make it more structured</p>
        </div>
      </div>
    </section>
  </section>

  <section>
    <h2>2.Translational Model</h2>
  </section>

  <section class="background">
    <div class="flex-container">
      <div>
        <img class="pic-filler" src="./images/Hicon32.webp" height=400 width =600 alt="space filler">
        <p style="float: right; position: relative; left: 20px" class="flex-text">summary and idea of second model</p>
      </div>
  </section>
  <br>
  <section class="border">
  <h4>process</h4>
  </section>



    <h2>3.Finish Model</h2>

    <section class="background">
      <div class="flex-container">
        <div >
          <img class="pic-filler" src="./images/Hicon32.webp" height=400 width =600 alt="space filler">
          <p style="float: right; position: relative; left: 20px" class="flex-text">summary and idea of third model</p>
        </div>
    </section>
    <br>
    <section>
    <h4>process</h4>
    <div class="flex-container">
      <div class="flex-items" >
        <img src="./images/IMG_2893.webp" height = 400 alt="tools">
        <p>1. metal wire 
          <br>2. wooden sticks
          <br>3. black permanent marker (used to color the wire and the sticks)
          <br>4. black ink (its much faster to soak the wood sticks in black ink)
          <br>5. tacky glue (slightly better than white glue)
          <br>6. ruler
          <br>7. freshly killed pine leaves
          <br>8. a thick needle with a handle tool (unclog #9)
          <br>9. superglue
          <br>10.tweezer (when your hands are shaky)
          <br>other: postcard, thin wood plate

        </p>
      </div>
      <div class="flex-items">
        <img src="./images/IMG_2743.webp" height = 400 alt="a small peice of wall">
        <p>I used wooden sticks </p>
      </div>
      <div class="flex-items">
        <img src="./images/IMG_2744.webp" height = 400 alt="shadows of a wall">
        <p>hi</p>
      </div>
    </div>

    <div class="flex-container">
      <div class="flex-items">
        <img src="./images/IMG_2782.webp" height = 400 alt="accurately designed floating pillar">
        <p>hi</p>
      </div>
      <div class="flex-items">
        <img src="./images/IMG_2823.webp" height = 400 alt="fixed floating pillar">
        <p>hi</p>
      </div>
      <div class="flex-items">
        <img src="./images/IMG_2784.webp" height = 400 alt="clogged superglue">
        <p>hi</p>
      </div>
    </div>

    <div class="flex-container">
      <div class="flex-items">
        <img src="./images/IMG_2824.webp" height = 400 alt="finished eames house">
        <p>hi</p>
      </div>
      <div class="flex-items">
        <img src="./images/IMG_2825.webp" height = 400 alt="well decorated interior design">
        <p>hi</p>
      </div>
    </div>

    <div class="flex-container">
      <div class="flex-items">
        <img src="./images/IMG_2829 2.webp" height=335 alt="with stair in the middle">
        <p>hi</p>
      </div>
      <div class="flex-items">
        <img src="./images/IMG_2834.webp" height=335 alt="triangle frame balancing on its own">
        <p>hi</p>
      </div>
      <div class="flex-items">
        <img src="./images/IMG_2840.webp" height=335 alt="triangle pattern balancing on its own">
        <p>hi</p>
      </div>
    </div>
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
    font-size: 3.75em;
    font-weight: 500;
    position: relative;
    bottom: 15px;
    background: #f5f1ed;
    padding: 40px
  }
  h3{
    font-family: 'Major Mono Display', monospace;
    font-size: 2em;
  }

  h4{
    font-family: 'Major Mono Display', monospace;
    font-size: 1.5em;
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
    bottom: 0px;
    left:10px;
    line-height: normal;
  }
  .background{
    background: #f5f1ed;
    padding: 10px;
  }
  .border{
    /* border: 2px solid #d5d8e6;
    padding: 10px; */
  }
  .pic-filler{
    border: 3px solid black;
    float:left;
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
.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

}

.flex-items{
  padding: 10px; /* this */
  width: min-content;

}

.flex-text{
  flex-wrap: wrap;
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

