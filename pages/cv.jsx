import styles from '../styles/cv.module.css'
import infos from "../data/info.json";
import Head from "next/head";

export default function Cv() {
    return (
        <>
            <Head>
                <title>CV · Guillaume Metzger</title>
            </Head>
            <body style={{ margin: 0 }}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.item}>
                            <img className={styles.pp} src="assets/pp.jpg" alt="Photo de Guillaume" />
                        </div>

                        <div className={styles.item}>
                            <h2 className={styles.item__title}>Guillaume Metzger</h2>
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
                            <h2 className={styles.item__title}>Compétences</h2>
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
                            <h2 className={styles.item__title}>Langues</h2>
                            <ul className={styles.item__list}>
                                <li>Anglais niveau B1</li>
                                <li>Allemand niveau A2</li>
                                <li>Chinois niveau A2</li>
                            </ul>
                        </div>

                        <div className={styles.item}>
                            <h2 className={styles.item__title}>Vie associative</h2>
                            <ul className={styles.item__list}>
                                <li>Membre actif du BDE MIAGE</li>
                                <li> Grenoble 2017-1019</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.item}>
                            <h2 className={styles.item__title}>Expérience professionnelle</h2>
                            <ul className={styles.item__list}>
                                <li>
                                    <h3 className={styles.item__list__title}>Ingénieur Front-end</h3>
                                    <p className={styles.item__list__subtitle}>Wizbii · Grenoble <span>2020 - aujourd'hui</span></p>
                                    <ul className={styles.item__list__done}>
                                        <li>Développement d’un SaaS pour de grandes banques européene</li>
                                        <li>Développement d'un back-office interne</li>
                                        <li>Conception et développement d'une homepage en Next.js</li>
                                        <li>Ecriture de tests unitaire et fonctionnel avec jest et cypress</li>
                                    </ul>
                                    <p className={styles.item__list__description}>Stack : Angular, Typescript, NGXS, Symfony...</p>
                                </li>
                                <li>
                                    <h3 className={styles.item__list__title}>Stage et alternance développeur Front-end</h3>
                                    <p className={styles.item__list__subtitle}>Algoo · Moirans <span>2019 - 2020</span></p>
                                    <ul className={styles.item__list__done}>
                                        <li>Développment d'une plateforme de travail en équipe : Tracim</li>
                                        <li>Participer à la gestion d'un projet open source via github</li>
                                        <li>Développement de POC pour implémenter de nouvelles fonctionnalités</li>
                                        <li>Ecriture de tests unitaire et fonctionnel avec mocha, enzyme et cypress</li>
                                    </ul>
                                    <p className={styles.item__list__description}>Stack : React, Redux, Cypress, Mocha, i18n...</p>
                                </li>
                                <li>
                                    <h3 className={styles.item__list__title}>Stage développeur Java</h3>
                                    <p className={styles.item__list__subtitle}>PDS Life Science · Pratteln <span>2018</span></p>
                                    <p className={styles.item__list__description}>
                                        Projet d'application web facilitant la gestion de données présentes dans des fichiers pdf
                                    </p>
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
                            <h2 className={styles.item__title}>Centres d’intérêts</h2>
                            <ul className={styles.item__interests}>
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
                </div>
            </body>
        </>
    )
}