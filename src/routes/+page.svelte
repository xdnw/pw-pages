<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<link href="https://fonts.googleapis.com/css2?family=Turret+Road:wght@800&display=swap" rel="stylesheet">
</svelte:head>

<section>
	<header class="welcome-header">
		<svg viewBox="0 0 100% 0" class="welcome">
			<text x="50%" y="50%" dy=".35em" text-anchor="middle">
			Locutus
			</text>
		</svg>
	</header>
	<!-- <div id=banner>Locutus</div> -->
	<h1>
		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />

	<div class="collapse bg-base-200">
		<input type="checkbox" /> 
		<div class="collapse-title text-xl font-medium">
		  Click me to show/hide content
		</div>
		<div class="collapse-content"> 
		  <p>hello</p>
		</div>
	  </div>
</section>

<style lang="postcss">
section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex: 0.6;
}

h1 {
	width: 100%;
}

.welcome-header {
	width: 100%;
}

.welcome {
font-family: 'Turret Road', sans-serif;
width: 100%;
}

.welcome text {
	display:block;
	text-align:center;
	text-transform: uppercase;
	animation: stroke 5s forwards, banner 8s forwards;
	stroke-width: 4;
	stroke: rgb(59, 70, 73); /* Set the outline color */
	fill: rgb(254, 182, 75); /* Set the fill color */
	font-size: 75px;
	/* text-shadow:1px 1px 0 hsl(36, 99%, 65%),2px 2px 0 hsl(36, 99%, 62%),3px 3px 0 hsl(36, 99%, 60%),4px 4px 0 hsl(36, 99%, 58%),5px 5px 0 hsl(36, 99%, 56%),6px 6px 0 hsl(36, 99%, 54%),7px 7px 0 hsl(36, 99%, 52%),8px 8px 0 hsl(36, 99%, 50%),0 0 5px rgba(0,0,0,.05),1px 1px 3px rgba(0,0,0,.2),2px 2px 5px rgba(0,0,0,.2),4px 4px 10px rgba(0,0,0,.2),8px 8px 10px rgba(0,0,0,.2),16px 16px 20px rgba(0,0,0,.3); */
	text-shadow:1px 1px 0 hsl(36, 99%, 32.5%),2px 2px 0 hsl(36, 99%, 31%),3px 3px 0 hsl(36, 99%, 30%),4px 4px 0 hsl(36, 99%, 29%),5px 5px 0 hsl(36, 99%, 28%),6px 6px 0 hsl(36, 99%, 27%),7px 7px 0 hsl(36, 99%, 26%),8px 8px 0 hsl(36, 99%, 25%),0 0 5px rgba(0,0,0,.05),1px 1px 3px rgba(0,0,0,.2),2px 2px 5px rgba(0,0,0,.2),4px 4px 10px rgba(0,0,0,.2),8px 8px 10px rgba(0,0,0,.2),16px 16px 20px rgba(0,0,0,.3);
}

  @keyframes stroke {
    0% {
        fill: rgb(254, 182, 75); /* Use the same fill color */
        stroke: rgb(59, 70, 73); /* Use the same outline color */
        stroke-dashoffset: 25%;
        stroke-dasharray: 0 50%;
        stroke-width: 4;
    }
    70% {
        fill: rgb(254, 182, 75); /* Use the same fill color */
        stroke: rgb(59, 70, 73); /* Use the same outline color */
		stroke-width: 4;
    }
    80% {
        fill: rgb(254, 182, 75); /* Use the same fill color */
        stroke: rgb(59, 70, 73); /* Use the same outline color */
        stroke-width: 4;
    }
    100% {
        fill: rgb(254, 182, 75); /* Use the same fill color */
        stroke: rgb(59, 70, 73); /* Use the same outline color */
        stroke-dashoffset: -25%;
        stroke-dasharray: 50% 0;
        stroke-width: 0;
    }
  }
  @keyframes banner{
  0%{
    opacity:0;
    text-shadow:0 0 40px rgb(254, 182, 75),0 0 20px rgb(254, 182, 75),0 0 10px rgb(254, 182, 75),0 0 80px rgb(254, 182, 75);
    letter-spacing:100px;
    transform:translate(8px,8px) scale(1.3)
  }
  60%{
    opacity:1;
    text-shadow:0 0 1px rgb(254, 182, 75);
    letter-spacing:auto;
    transform:translate(8px,8px) scale(1)
  }
  80%{
    text-shadow:0 0 1px rgb(254, 182, 75);
    transform:translate(8px,8px)
  }
  100%{
	letter-spacing:20px;
    text-shadow:auto;
    transform:translate(0,0)
  }
}


body {
    overflow-x: hidden;
  }
</style>
