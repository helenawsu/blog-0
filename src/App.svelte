<script>
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

<!-- svelte-ignore missing-declaration -->

<main>
  <p class="lastupdatetime">
    this page was last updated on Aug 13, 2022 and it is done
  </p>
  <h1 class="title">
    <mark>M</mark>Y <mark>F</mark>RIST <mark>A</mark>RCHITECTURAL
    <mark>M</mark>ODELS
  </h1>
  <section>
    <h2>0.Overview</h2>

    <div class="row background2">
      <div class="column">
        <h4 style="border-left: 0px solid black; border-bottom: 0px;">
          <mark>B</mark>EGINING:
        </h4>
        <p style="position: relative; left: 0px;">
          First, select a house to make: <br />I picked the
          <a href="https://eamesfoundation.org/house/eames-house/"
            >Eames House</a
          >, a mid-20th century house in Los Angeles.
          <br />In the next 2 hours, after concluding the 1:200 scale (1cm = 2m)
          is nearly impossible to cut out the window grids, I drew out the
          pattern of one wall.
        </p>
        <p />
        <img
          src="./images/IMG_2311.webp"
          width="500"
          alt="a single peice of wall"
        />
      </div>
      <div class="column" style="border-left-style:solid;">
        <h4
          style="border-left: 0px solid white; border-top: 0px solid black; border-bottom: 0px; position: relative; left: 20px"
        >
          <mark>E</mark>ND:
        </h4>
        <p style="position: relative; left: 20px">
          Final model, scale 1:100, which means that in real life scale, the
          height of the triangle frame is ~20m tall.
        </p>
        <img
          style="position: relative; left: 20px"
          src="./images/IMG_2867.webp"
          width="500"
          alt="finished model"
        />
      </div>
    </div>

    <!-- svelte-ignore a11y-missing-attribute -->
  </section>

  <section>
    <h2>1.Conceptual Model</h2>

    <section class="background">
      <div class="flex-container">
        <div style="float: left; width: 400">
          <img
            src="./images/IMG_2497.webp"
            height="400"
            alt="first model overview"
            style="float: left"
          />
        </div>
        <div style="float: right; width: 55%; padding-left: 100px; padding-top:80px;">
          <ul>
            <li>Scale</li>
            <ul>
              <li>
                1:200 (1cm=2m). In this scale, most of the details, such as the
                variation in the thickness of the window frames, can be ignored.
              </li>
            </ul>
            <li>Goal</li>
            <ul>
              <li>
                Make a model of Eames House, get a basic idea of its strucutre,
                and brainstorm possible extensions.
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </section>
    <br />

    <h4><mark>P</mark>ROCESS:</h4>
    <section class="background2">
      <div class="flex-container">
        <div class="flex-items">
          <figure>
            <img src="./images/IMG_2313.webp" height="300" alt="a big hole" />
            <figcaption>Poking a hole for pillar to stick inside</figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2419.webp"
              height="300"
              alt="nearly-finished"
            />
            <figcaption>
              1. With vibrant colors!! Contrast with the (supposedly) clear
              glass!!
              <br /> 2. I added the black mullions to make it more structured
            </figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2430.webp"
              height="300"
              alt="first model Eames House"
            />
            <figcaption>
              Finished Eames House. It basically consists of two rectangular
              volumes.
            </figcaption>
          </figure>
        </div>
      </div>
      <br />
    </section>
    <h4>
      <mark>B</mark>AINSTORMING <mark>P</mark>OSSIBLE <mark>E</mark>XTENSIONS
    </h4>
    <section class="background2">
      <p style="padding: 10px; width: 90%">
        After copying down the original house, I need to brainstorm new
        additions to the building. It could be anything from a house for living
        or a decoration. To get a better geometric sense of how the extensions
        would look like, I played with everyday objects.
      </p>
      <div class="flex-container">
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2436.webp"
              height="400"
              alt="first model card extension"
            />
            <figcaption>
              Card extensions. They could be gigantic slides for fun.
            </figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2441.webp"
              height="400"
              alt="first model chips extension"
            />
            <figcaption>
              Pencils and chips. They might be pure decorations.
            </figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2439.webp"
              height="400"
              alt="first model pencil extension"
            />
            <figcaption>
              Pencils. I was thinking of tent poles/bonfire when I made this.
            </figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2440.webp"
              height="400"
              alt="first model triangle extension"
            />
            <figcaption>
              Triangle frame. I decided to go with this because it's fun to see
              such a big shape blance on its own.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
    <section class="background2">
      <div class="flex-container">
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2496.webp"
              height="400"
              alt="first model finished"
            />
            <figcaption>
              I made the triangle frames into a garden, with plants on the
              vertical glass walls, like the walls of the original Eames House.
            </figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img
              src="./images/plant photo.webp"
              height="400"
              alt="inspiration photo"
            />
            <figcaption>
              reference photo for the wall of plants (PC: Dezeen)
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  </section>

  <section>
    <h2>2.Translational Model</h2>
  </section>

  <section class="background">
    <div class="flex-container">
      <div style="float: left; width: 400">
        <img
          src="./images/IMG_2709.webp"
          height="400"
          alt="first model overview"
          style="float: left"
        />
      </div>
      <div  style="float: right; width: 55%; padding-left: 60px; padding-top:100px;">
        <ul>
          <li>Scale</li>
          <ul>
            <li>
              1:100 (1cm=1m). In this scale, more details can be built out,
              including the interior.
            </li>
          </ul>
          <li>Goal</li>
          <ul>
            <li>
              Translate the previous abstract extension with more concrete
              details and materials, such as wood and chipboard.
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </section>
  <br />
  <section class="border">
    <h4><mark>P</mark>ROCESS:</h4>
    <section class="background2">
      <div class="flex-container">
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2526.webp"
              height="300px"
              alt="a glass wall"
            />
            <figcaption>
              This time, I used thin transparent plastic sheets to represent the
              glass walls. I used markers to draw and color the patterns.
            </figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2533.webp"
              height="300px"
              alt="spiral staircase"
            />
            <figcaption>
              I also built the interior structure, such as this spiral
              staircase. My finger is a scale reference.
            </figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2624.webp"
              height="300px"
              alt="finished second Eames House"
            />
            <figcaption>
              I concluded that the plastic sheets are very difficult to deal
              with, because only superglue work on them and the marker always
              smeared.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
    <section class="background2">
      <div class="flex-container">
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2629.webp"
              height="300px"
              alt="decorated glass garden wall"
            />
            <figcaption>
              Following the style of Eames House patterm, I designed the
              triangle garden walls with geometric shapes and repeated black and
              white lines.
            </figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2879.webp"
              height="300px"
              alt="hill behind Eames House"
            />
            <figcaption>
              I also build the contour near the house. There is a steep hill
              right behind the house, so the staircase descends from the hill to
              the ground.
            </figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2876.webp"
              height="300px"
              alt="finished second model"
            />
            <figcaption>
              The other problem of plastic sheet is that they bend too much and
              they can't support themselves. Not going to use it in the next
              model.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <h2>3.Finish Model</h2>

    <section class="background">
      <div class="flex-container">
        <div>
          <figure>
            <img
              src="./images/IMG_2893.webp"
              height="400"
              alt="space filler"
              style="float: left"
            />
            <div style="float: right;">
              <h4 style="position: relative; left: 40px; bottom: 20px;">
                TOOLS
              </h4>

              <ol style="position: relative; left: 40px; bottom: 20px;">
                <li>metal wire</li>
                <li>wooden sticks</li>
                <li>
                  black permanent marker (used to color the wire and the sticks)
                </li>
                <li>
                  black ink (its much faster to soak the wood sticks in black
                  ink)
                </li>
                <li>tacky glue (slightly better than white glue)</li>
                <li>ruler</li>
                <li>freshly killed pine leaves</li>
                <li>a thick needle with a handle tool (unclog #9)</li>
                <li>superglue</li>
                <li>tweezer (when your hands are shaky)</li>
                <li>other: postcard, thin wood plate</li>
              </ol>
            </div>
          </figure>
        </div>
      </div>
    </section>
    <br />
    <section>
      <h4><mark>P</mark>ROCESS:</h4>
      <div class="flex-container background2">
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2743.webp"
              height="300"
              alt="a small peice of wall"
            />
            <figcaption>
              I cut wire, colored them, and glued them with wooden sticks.
            </figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2744.webp"
              height="300"
              alt="shadows of a wall"
            />
            <figcaption>I took a picture of the first wall</figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2784.webp"
              height="300"
              alt="clogged superglue"
            />
            <figcaption>
              the ∞th time I unclogged the glue with violence
            </figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2782.webp"
              height="300"
              alt="accurately designed floating pillar"
            />
            <figcaption>
              I accurately made a wall of pillars that is too short to touch the
              ground.
            </figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2823.webp"
              height="300"
              alt="fixed floating pillar"
            />
            <figcaption>After some re-touch:</figcaption>
          </figure>
        </div>
      </div>

      <div class="flex-container background2">
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2824.webp"
              height="300"
              alt="finished eames house"
            />
            <figcaption>8 walls + 2 roofs = I finished Eames House</figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2825.webp"
              height="300"
              alt="well decorated interior design"
            />
            <figcaption>well-decorated interior</figcaption>
          </figure>
        </div>
      </div>

      <div class="flex-container background2">
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2829 2.webp"
              height="300"
              alt="with stair in the middle"
            />
            <figcaption>
              Starting to add my extension, first is the staircase in the
              middle.
            </figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2834.webp"
              height="300"
              alt="triangle frame balancing on its own"
            />
            <figcaption>
              Second is the triangular frame (the frames are 18 meters long in
              real life scale): I did not put glue on yet, it was able to stand
              on its own.
            </figcaption>
          </figure>
        </div>
        <div class="flex-items">
          <figure>
            <img
              src="./images/IMG_2840.webp"
              height="300"
              alt="triangle pattern balancing on its own"
            />
            <figcaption>
              Third is to decorate the frame: I took the geometric pattern idea
              from the original Eames House and added some variation, such as
              white lines and triangle shapes.
            </figcaption>
          </figure>
        </div>
      </div>
      <h4><mark>G</mark>ALLERY:</h4>
      <div class="flex-container">
        <div class="flex-items">
          <img
            src="./images/IMG_2844.webp"
            alt="finished third model"
            height="300"
          />
        </div>
        <div class="flex-items">
          <img
            src="./images/IMG_2850.webp"
            alt="finished third model"
            height="300"
          />
        </div>
        <div class="flex-items">
          <img
            src="./images/IMG_2847.webp"
            alt="finished third model"
            height="300"
          />
        </div>
        <div class="flex-items">
          <img
            src="./images/IMG_2875.webp"
            alt="finished third model"
            height="300"
          />
        </div>
      </div>
    </section>
  </section>
</main>

<svelte:head />

<style>
  main {
    /* text-align: center; */
    padding: 1rem;
    max-width: 240px;
    margin: 0 auto;
  }

  h2 {
    font-family: 'Major Mono Display', monospace;
    color: black;
    /* text-transform: uppercase; */
    font-size: 3.5rem;
    font-weight: 100;
    border-left: 5px solid #233b4d;
    display: inline-block;
    background: linear-gradient(to top, #d15634 30%, transparent 30%);
    padding-left: 10px;
    padding-right: 10px;
  }

  h1 {
    font-family: 'Major Mono Display', monospace;
    color: #233b4d;
    /* text-transform: uppercase; */
    font-size: 3.75rem;
    font-weight: 500;
    position: relative;
    bottom: 15px;
    background: #f5f1ed;
    padding: 20px;
    display: inline-block;
    margin: 0px;
    margin-top: 40px;
    border: 15px solid #f2f2f2;
  }

  h4 {
    font-family: 'Major Mono Display', monospace;
    font-size: 1.75rem;
    border-bottom: 0px solid #d15634;
  }

  p {
    font-family: 'Didact Gothic', sans-serif;
    color: #233b4d;
    font-size: 1.25rem;
  }
  li {
    font-family: 'Didact Gothic', sans-serif;
    color: #233b4d;
    font-size: 1.25rem;
  }
  ul {
    font-family: 'Didact Gothic', sans-serif;
    color: #233b4d;
    font-size: 1.25rem;
  }
  figure {
    margin: 10px;
  }
  figcaption {
    font-family: 'Didact Gothic', sans-serif;
    color: #233b4d;
    font-size: 1.25rem;
    margin: 0px;
  }
  img {
    padding: 0px;
  }
  .lastupdatetime {
    padding: 0rem;
    color: #bbc3c7;
    margin-right: 0;
    margin-bottom: 0;
    text-align: right;
    padding: 0;
    position: relative;
    bottom: 20px;
    left: 10px;
    line-height: 1em;
  }
  .background {
    background: #f5f1ed;
    padding: 10px;
  }
  .background2 {
    background: #f2f3f4;
    padding-top: 10px;
    margin-bottom: 5px;
  }
  /* .pic-filler {
    border: 3px solid black;
    float: left;
  } */
  /* Create two equal columns that floats next to each other */
  .column {
    float: left;
    width: 48%;
    padding: 10px;
  }

  /* Clear floats after the columns */
  .row:after {
    content: '';
    display: table;
    clear: both;
  }
  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .flex-items {
    padding: 0px; /* this */
    width: min-content;
  }
  mark {
    background: linear-gradient(to top, #d15634 30%, transparent 30%);
    background: #d15634;
    color: white;
    border-left: 5px solid black;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
