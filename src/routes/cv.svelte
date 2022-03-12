<script>
  import { setupI18n } from '../services/i18n';
  import {
    _,
    isLoading,
    locale,
    register,
    getLocaleFromNavigator,
    addMessages,
    init
  } from 'svelte-i18n';
  setupI18n();
</script>

<svelte:head>
	<title>CV · Guillaume Metzger</title>
</svelte:head>

{#if $isLoading}
  <p>Loading</p>
{:else}
  <div>
    <div class="container">
      <div class="left">
        <div class="item">
          <img class="pp" src="assets/pp.jpg" alt="Guillaume" />
        </div>

        <div class="item">
          <h2 class="item__title">Guillaume Metzger</h2>
          <ul class="item__list">
            <li>{$_('Born October 27, 1996')}</li>
            <li>1 rue Kléber</li>
            <li>38000 GRENOBLE</li>
            <li>06 04 49 29 30</li>
            <li>Guillaume.metzger5@gmail.com</li>
            <li>guillaumemetzger.fr</li>
          </ul>
        </div>

        <div class="item">
          <h2 class="item__title">{$_('Skills')}</h2>
          <ul class="item__icons">
            <li class="item__icon">
              <img src="assets/icons/react.svg" alt="react" title="react" />
            </li>
            <li class="item__icon">
              <img src="assets/icons/angular.svg" alt="angular" title="angular" />
            </li>
            <li class="item__icon">
              <img src="assets/icons/typescript.svg" alt="typescript" title="typescript" />
            </li>
            <li class="item__icon"><img src="assets/icons/git.svg" alt="git" title="git" /></li>
            <li class="item__icon">
              <img src="assets/icons/redux.svg" alt="redux" title="redux" />
            </li>
            <li class="item__icon"><img src="assets/icons/css.svg" alt="css" title="css" /></li>
            <li class="item__icon">
              <img src="assets/icons/cypress.svg" alt="cypress" title="cypress" />
            </li>
            <li class="item__icon">
              <img src="assets/icons/mocha.svg" alt="mocha" title="mocha" />
            </li>
          </ul>
        </div>

        <div class="item">
          <h2 class="item__title">{$_('Languages')}</h2>
          <ul class="item__list">
            <li>{$_('French - Mother tongue')}</li>
            <li>{$_('English - Professional working proficiency')}</li>
            <li>{$_('German - Elementary proficiency')}</li>
            <li>{$_('Chinese - Elementary proficiency')}</li>
          </ul>
        </div>

        <div class="item">
          <h2 class="item__title">{$_('Community life')}</h2>
          <ul class="item__list">
            <li>{$_('Active member of the MIAGE student Union')}</li>
            <li>Grenoble 2017-1019</li>
          </ul>
        </div>
      </div>

      <div class="right">
        <div class="item">
          <h2 class="item__title">{$_('Work experience')}</h2>
          <ul class="item__list">
            <li>
              <h3 class="item__list__title">{$_('Front-end engineer')}</h3>
              <p class="item__list__subtitle">Wizbii · Grenoble <span>2020 - 2021</span></p>
              <ul class="item__list__done">
                <li>{$_('Development of a SaaS for large European banks')}</li>
                <li>{$_('Development of an internal back-office')}</li>
                <li>{$_('Design and development of a homepage in Next.js')}</li>
                <li>{$_('Writing unit and functional tests with jest and cypress')}</li>
              </ul>
              <p class="item__list__description">Stack : Angular, Typescript, NGXS, Symfony...</p>
            </li>
            <li>
              <h3 class="item__list__title">{$_('Front-end developer internship')}</h3>
              <p class="item__list__subtitle">Algoo · Moirans <span>2019 - 2020</span></p>
              <ul class="item__list__done">
                <li>{$_('Development of a teamwork platform - Tracim')}</li>
                <li>
                  {$_('Take part in the management of an open source project through Github')}
                </li>
                <li>{$_('Development of POCs to add new features')}</li>
                <li>{$_('Writing unit and functional tests with mocha, enzyme and cypress')}</li>
              </ul>
              <p class="item__list__description">Stack : React, Redux, Cypress, Mocha, i18n...</p>
            </li>
            <li>
              <h3 class="item__list__title">{$_('Java internship')}</h3>
              <p class="item__list__subtitle">PDS Life Science · Pratteln <span>2018</span></p>
              <p class="item__list__description">
                {$_(
                  'Web application project facilitating the management of data present in pdf files'
                )}
              </p>
            </li>
            <li>
              <h3 class="item__list__title">{$_('Java internship')}</h3>
              <p class="item__list__subtitle">PDS Life Science · Pratteln <span>2016</span></p>
              <p class="item__list__description">
                {$_('Data transformation project in the development team for a period of 5 weeks')}
              </p>
            </li>
            <li>
              <h3 class="item__list__title">{$_('Web developer internship')}</h3>
              <p class="item__list__subtitle">Optimistic-Traveler · Strasbourg <span>2015</span></p>
              <p class="item__list__description">
                {$_('Website development for the Optimistic-Traveler group during 5 weeks')}
              </p>
            </li>
          </ul>
        </div>

        <div class="item">
          <h2 class="item__title">{$_('Education')}</h2>
          <table class="table__items">
            <tr class="table__item">
              <td class="table__date">2017 - 2020</td>
              <td
                >{$_(
                  "Master's Degree in Computer Science Applied to Business Administration (MIAGE) Im2ag Grenoble"
                )}</td
              >
            </tr>
            <tr class="table__item">
              <td class="table__date">2016 - 2017</td>
              <td>{$_("MIAGE Bachelor's degree Im2ag Grenoble")}</td>
            </tr>
            <tr class="table__item">
              <td class="table__date">2014 - 2016</td>
              <td>{$_('Higher National Diploma in Computer Science Lycée Camille Sée Colmar')}</td>
            </tr>
            <tr class="table__item">
              <td class="table__date">2011 - 2014</td>
              <td>High school diploma Lycée Jean Jacques Henner Altkirch</td>
            </tr>
          </table>
        </div>

        <div class="item">
          <h2 class="item__title">{$_('Hobbies')}</h2>
          <ul class="item__interests">
            <li class="item__icon">
              <img src="assets/icons/ski.svg" alt="ski" />
              <p>Ski</p>
            </li>
            <li class="item__icon">
              <img src="assets/icons/film.svg" alt="film" />
              <p>{$_('Cinema')}</p>
            </li>
            <li class="item__icon">
              <img src="assets/icons/f1.svg" alt="f1" />
              <p>{$_('Motorsport (simracing)')}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <select name="languages" class="absolute languageSelect" bind:value={$locale}>
      <option value="fr">🇫🇷</option>
      <option value="en">🇬🇧</option>
    </select>
  </div>
{/if}

<style>
  .container {
    width: 816px;
    background-color: #f0efeb;
    margin: auto;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: row;
    font-size: 0.9rem;
  }

  .container h2 {
    margin: 0;
  }

  .container h3 {
    margin: 0;
  }

  .left {
    flex: 1;
    background-color: #9a8c98;
    color: whitesmoke;
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

  .item__list__description {
    margin-top: 0.5rem;
    text-align: justify;
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

  .item__interests {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .item__interests > li {
    text-align: center;
  }

  .languageSelect {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  @media print {
    .languageSelect {
      display: none !important;
    }
  }
</style>
