<script>
	import { setupI18n } from '../../services/i18n';
	import { _, isLoading, locale } from 'svelte-i18n';
	setupI18n();
</script>

<svelte:head>
	<title>CV · Guillaume Metzger</title>
</svelte:head>

{#if $isLoading}
	<p>Loading</p>
{:else}
	<div class="p-10">
		<div class="flex justify-between mb-6 mt-6">
			<h2 class="text-xl font-bold">{$_('Work experience')}</h2>
			<a href="/cv/file">{$_('Sheet format')} &#128279;</a>
		</div>

		<ul class="flex flex-col gap-4">
			<li class="border-2 border-black p-4">
				<h3 class="text-base font-bold">{$_('Full-stack engineer')}</h3>
				<p class="flex">Swile · Full-remote <span class="flex-1 text-end">2022 - Present</span></p>
				<ul class="item__list__done">
					<li>
						{$_('Currently member of a feature team, working on new products')}
					</li>
					<li>
						{$_(
							'Has been a member of the DevX team for some time, work on different transversal subjects in order to improve the developer experience in Swile'
						)}
					</li>
					<li>{$_('Databases anonymization, TypeScript migration, K8s migration...')}</li>
				</ul>
				<p class="mt-2 text-justify">
					Stack : Typescript, Ruby on rails, Postgres, Docker, Kubernetes...
				</p>
			</li>
			<li class="border-2 border-black p-4">
				<h3 class="text-base font-bold">{$_('Front-end engineer')}</h3>
				<p class="flex">Wizbii · Grenoble <span class="flex-1 text-end">2020 - 2021</span></p>
				<ul class="item__list__done">
					<li>{$_('Development of a SaaS for large European banks')}</li>
					<li>{$_('Development of an internal back-office')}</li>
					<li>{$_('Design and development of a homepage in Next.js')}</li>
					<li>{$_('Writing unit and functional tests with jest and cypress')}</li>
				</ul>
				<p class="mt-2 text-justify">Stack : Angular, Typescript, NGXS, Symfony...</p>
			</li>
			<li class="border-2 border-black p-4">
				<h3 class="text-base font-bold">{$_('Front-end developer internship')}</h3>
				<p class="flex">Algoo · Moirans <span class="flex-1 text-end">2019 - 2020</span></p>
				<ul class="item__list__done">
					<li>{$_('Development of a teamwork platform - Tracim')}</li>
					<li>
						{$_('Take part in the management of an open source project through Github')}
					</li>
					<li>{$_('Development of POCs to add new features')}</li>
					<li>{$_('Writing unit and functional tests with mocha, enzyme and cypress')}</li>
				</ul>
				<p class="mt-2 text-justify">Stack : React, Redux, Cypress, Mocha, i18n...</p>
			</li>
			<li class="border-2 border-black p-4">
				<h3 class="text-base font-bold">{$_('Java internship')}</h3>
				<p class="flex">PDS Life Science · Pratteln <span class="flex-1 text-end">2018</span></p>
				<p class="mt-2 text-justify">
					{$_('Web application project facilitating the management of data present in pdf files')}
				</p>
			</li>
			<li class="border-2 border-black p-4">
				<h3 class="text-base font-bold">{$_('Java internship')}</h3>
				<p class="flex">PDS Life Science · Pratteln <span class="flex-1 text-end">2016</span></p>
				<p class="mt-2 text-justify">
					{$_('Data transformation project in the development team for a period of 5 weeks')}
				</p>
			</li>
			<li class="border-2 border-black p-4">
				<h3 class="text-base font-bold">{$_('Web developer internship')}</h3>
				<p class="flex">
					Optimistic-Traveler · Strasbourg <span class="flex-1 text-end">2015</span>
				</p>
				<p class="mt-2 text-justify">
					{$_('Website development for the Optimistic-Traveler group during 5 weeks')}
				</p>
			</li>
		</ul>

		<h2 class="text-xl font-bold mb-6 mt-8">{$_('Education')}</h2>

		<div class="border-2 border-black p-4">
			<table class="table__items">
				<tr class="table__item">
					<td class="w-24 font-bold align-baseline">2017 - 2020</td>
					<td
						>{$_(
							"Master's Degree in Computer Science Applied to Business Administration (MIAGE) Im2ag Grenoble"
						)}</td
					>
				</tr>
				<tr class="table__item">
					<td class="w-24 font-bold align-baseline">2016 - 2017</td>
					<td>{$_("MIAGE Bachelor's degree Im2ag Grenoble")}</td>
				</tr>
				<tr class="table__item">
					<td class="w-24 font-bold align-baseline">2014 - 2016</td>
					<td>{$_('Higher National Diploma in Computer Science Lycée Camille Sée Colmar')}</td>
				</tr>
				<tr class="table__item">
					<td class="w-24 font-bold align-baseline">2011 - 2014</td>
					<td>{$_('High school diploma Lycée Jean Jacques Henner Altkirch')}</td>
				</tr>
			</table>
		</div>

		<div class="flex mt-8 gap-4 flex-col lg:flex-row">
			<div class="flex-1">
				<h2 class="text-xl font-bold mb-6">{$_('Languages')}</h2>

				<ul class="border-2 border-black p-4">
					<li>{$_('French - Mother tongue')}</li>
					<li>{$_('English - Professional working proficiency')}</li>
					<li>{$_('German - Elementary proficiency')}</li>
					<li>{$_('Chinese - Elementary proficiency')}</li>
				</ul>
			</div>
			<div class="flex-1 flex flex-col">
				<h2 class="text-xl font-bold mb-6">{$_('Hobbies')}</h2>
				<ul class="flex justify-around h-full flex-1 items-center border-2 border-black p-4">
					<li class="w-16 flex justify-center">
						<img src="assets/icons/ski.svg" alt="ski" />
					</li>
					<li class="w-16 flex justify-center">
						<img src="assets/icons/film.svg" alt="film" />
					</li>
					<li class="w-16 flex justify-center">
						<img src="assets/icons/f1.svg" alt="Motorsport" />
					</li>
				</ul>
			</div>
		</div>

		<select
			name="languages"
			class="p-1 bg-white border-2 border-black cursor-pointer absolute top-4 right-4"
			bind:value={$locale}
		>
			<option value="fr">🇫🇷</option>
			<option value="en">🇬🇧</option>
		</select>
	</div>
{/if}

<style>
	.container {
		width: 816px;
		background-color: #fffcf7;
		margin: auto;
		font-family: 'Roboto', sans-serif;
		display: flex;
		flex-direction: row;
		font-size: 0.9rem;
		color: #32393f;
	}

	.container h3 {
		margin: 0;
	}

	.left {
		flex: 1;
		background-color: #a1b5d8;
		color: #32393f;
		text-align: center;
	}

	.right,
	.left {
		padding: 1.5rem;
	}

	.right {
		flex: 2;
	}

	.pp {
		height: 11rem;
		border-radius: 100%;
	}

	.item {
		margin: 1.5rem 0;
	}

	.item > ul > li {
		margin-bottom: 0.15rem;
	}

	.item__icons {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 1rem;
	}

	.item__icon > img {
		height: 2.5rem;
		width: 2.5rem;
	}

	.item__icon > p {
		margin: 0 0 0.5rem 0;
	}

	.container ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
	}

	.item__title {
		margin-bottom: 1.5rem !important;
	}

	.table__date {
		width: 6rem;
		vertical-align: baseline;
		font-weight: bold;
	}

	.table__items {
		border-spacing: 0 0.5rem;
	}

	.item__list__subtitle {
		font-weight: 300;
		font-size: 0.85rem;
		margin-top: 0.3rem;
		display: flex;
		margin-bottom: 0;
	}

	.item__list__subtitle > span {
		flex: 1;
		text-align: end;
	}

	@counter-style repeating-emoji {
		system: cyclic;
		symbols: '-';
		suffix: ' ';
	}

	.item__list__done {
		list-style-type: repeating-emoji !important;
		padding: 0.5rem 0 0 1rem !important;
	}

	.item__list__done > li {
		margin-top: 0.1rem;
	}

	@media print {
		.languageSelect {
			display: none !important;
		}
	}
</style>
