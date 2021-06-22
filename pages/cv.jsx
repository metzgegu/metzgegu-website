import styles from '../styles/cv.module.css'

export default function Cv() {
    return (
        <body style={{ margin: 0 }}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.item}>
                        <img className={styles.pp} src="assets/pp.jpg" alt="Photo de Guillaume" />
                    </div>

                    <div className={styles.item}>
                        <h3 className={styles.item__title}>Guillaume Metzger</h3>
                        <ul className={styles.item__list}>
                            <li>Né le 27 octobre 1996</li>
                            <li>1 rue Kléber</li>
                            <li>38000 GRENOBLE</li>
                            <li>06 04 49 29 30</li>
                            <li>Guillaume.metzger5@gmail.com</li>
                            <li>guillaumemetzger.fr</li>
                        </ul>
                    </div>

                    <div className={styles.item}>
                        <h3 className={styles.item__title}>Compétences</h3>
                        <ul className={styles.item__icons}>
                            <li className={styles.item__icon}><img src="assets/icons/react.svg" alt="react" /></li>
                            <li className={styles.item__icon}><img src="assets/icons/angular.svg" alt="angular" /></li>
                            <li className={styles.item__icon}><img src="assets/icons/typescript.svg" alt="typescript" /></li>
                            <li className={styles.item__icon}><img src="assets/icons/git.svg" alt="git" /></li>
                            <li className={styles.item__icon}><img src="assets/icons/redux.svg" alt="redux" /></li>
                            <li className={styles.item__icon}><img src="assets/icons/css.svg" alt="css" /></li>
                            <li className={styles.item__icon}><img src="assets/icons/cypress.svg" alt="cypress" /></li>
                            <li className={styles.item__icon}><img src="assets/icons/mocha.svg" alt="mocha" /></li>
                        </ul>
                    </div>

                    <div className={styles.item}>
                        <h3 className={styles.item__title}>Langues</h3>
                        <ul className={styles.item__list}>
                            <li>Anglais niveau B1</li>
                            <li>Allemand niveau A2</li>
                        </ul>
                    </div>

                    <div className={styles.item}>
                        <h3 className={styles.item__title}>Vie associative</h3>
                        <ul className={styles.item__list}>
                            <li>Membre actif du BDE MIAGE Grenoble 2017-1019</li>
                        </ul>
                    </div>

                    <div className={styles.item}>
                        <h3 className={styles.item__title}>Centres d’intérêts</h3>
                        <ul className={styles.item__list}>
                            <li className={styles.item__icon}>
                                <img src="assets/icons/ski.svg" alt="ski" /><p> Ski</p>
                            </li>
                            <li className={styles.item__icon}>
                                <img src="assets/icons/film.svg" alt="film" /><p> Cinéma</p>
                            </li>
                            <li className={styles.item__icon}>
                                <img src="assets/icons/f1.svg" alt="f1" /><p> Sport auto (simracing)</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.item}>
                        <h2 className={styles.item__title}>Formations</h2>
                        <table className={styles.table__items}>
                            <tr className={styles.table__item}>
                                <td className={styles.table__date}>2017 - 2020</td>
                                <td>Master MIAGE Im2ag Grenoble</td>
                            </tr>
                            <tr className={styles.table__item}>
                                <td className={styles.table__date}>2016 - 2017</td>
                                <td>Licence MIAGE (Méthodes Informatiques Appliquées à la Gestion des Entreprise) Im2ag
                                    Grenoble
                                </td>
                            </tr>
                            <tr className={styles.table__item}>
                                <td className={styles.table__date}>2014 - 2016</td>
                                <td>BTS SIO (Service Informatique aux Organisations spécialité développement) Lycée Camille
                                    Sée Colmar
                                </td>
                            </tr>
                            <tr className={styles.table__item}>
                                <td className={styles.table__date}>2011 - 2014</td>
                                <td>Baccalauréat Scientifique Lycée Jean Jacques Henner Altkirch</td>
                            </tr>
                        </table>
                    </div>

                    <div className={styles.item}>
                        <h2 className={styles.item__title}>Expérience professionnelle</h2>
                        <ul className={styles.item__list}>
                            <li>
                                <h3 className={styles.item__list__title}>Ingénieur Front-end</h3>
                                <p className={styles.item__list__subtitle}>Wizbii · Grenoble <span>2020 - 2021</span></p>
                                <p className={styles.item__list__description}>Dévelloppement d’un SaaS. Stack technique : Angular,
                                    Typescript, NGXS, Symphony...</p>
                            </li>
                            <li>
                                <h3 className={styles.item__list__title}>Stage et alternance développeur Front-end</h3>
                                <p className={styles.item__list__subtitle}>Algoo · Moirans <span>2019 - 2020</span></p>
                                <p className={styles.item__list__description}>Travail sur le projet open source Tracim. Stack
                                    technique: React, Redux, Cypress, Mocha, i18n...</p>
                            </li>
                            <li>
                                <h3 className={styles.item__list__title}>Stage développeur Java</h3>
                                <p className={styles.item__list__subtitle}>PDS Life Science · Pratteln <span>2018</span></p>
                                <p className={styles.item__list__description}>Stage de 2 mois avec pour mission de développer une
                                    application web qui facilité la gestion de données présentes dans des fichiers pdf</p>
                            </li>
                            <li>
                                <h3 className={styles.item__list__title}>Stage développeur Java</h3>
                                <p className={styles.item__list__subtitle}>PDS Life Science · Pratteln <span>2016</span></p>
                                <p className={styles.item__list__description}>Projet de transformation de données au sein de
                                    l’équipe de développement pendant un stage de 5 semaines</p>
                            </li>
                            <li>
                                <h3 className={styles.item__list__title}>Stage développeur Web</h3>
                                <p className={styles.item__list__subtitle}>Optimistic-Traveler · Strasbourg <span>2015</span></p>
                                <p className={styles.item__list__description}>Développement de sites web pour le groupe
                                    Optimistic-Traveler pendant 5 semaines</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </body>
    )
}