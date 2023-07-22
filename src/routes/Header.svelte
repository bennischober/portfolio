<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import ThemeToggle from '$lib/components/theme-toggle/ThemeToggle.svelte';
</script>

<header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<div class="navbar bg-base-100">
			<div class="navbar-center">
				<a class="text-xl transition-colors hover:text-orange-600 hover:font-extrabold" href="/">Home</a>
				<a href="/about">About</a>
				<!-- <a href="/blog">Resume</a>
				<a href="/contact">Projects</a> -->
			</div>
		</div>
	</nav>

	<div class="corner">
		<ThemeToggle />
	</div>
</header>

<style lang="postcss">
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		/* color: var(--color-text); */
		font-weight: 700;
		font-size: 1.0rem;
		text-transform: uppercase;
		letter-spacing: 0.2em;
		/* text-decoration: none; */
		transition: color 0.2s linear;
	}
</style>
