import styles from '../styles/cv.module.css'
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Cv({ locale }) {
    const { t, i18n } = useTranslation('cv')
    const router = useRouter()

    const switchLanguage = (lng) => {
        i18n.changeLanguage(lng);
        router.push(router.route, router.route, { locale: lng })
    }

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
                                <li>{t('Born October 27, 1996')}</li>
                                <li>1 rue Kléber</li>
                                <li>38000 GRENOBLE</li>
                                <li>06 04 49 29 30</li>
                                <li>Guillaume.metzger5@gmail.com</li>
                                <li>guillaumemetzger.fr</li>
                            </ul>
                        </div>

                        <div className={styles.item}>
                            <h2 className={styles.item__title}>{t('Skills')}</h2>
                            <ul className={styles.item__icons}>
                                <li className={styles.item__icon}><img src="assets/icons/react.svg" alt="react" title="react" /></li>
                                <li className={styles.item__icon}><img src="assets/icons/angular.svg" alt="angular" title="angular" /></li>
                                <li className={styles.item__icon}><img src="assets/icons/typescript.svg" alt="typescript" title="typescript" /></li>
                                <li className={styles.item__icon}><img src="assets/icons/git.svg" alt="git" title="git" /></li>
                                <li className={styles.item__icon}><img src="assets/icons/redux.svg" alt="redux" title="redux" /></li>
                                <li className={styles.item__icon}><img src="assets/icons/css.svg" alt="css" title="css" /></li>
                                <li className={styles.item__icon}><img src="assets/icons/cypress.svg" alt="cypress" title="cypress" /></li>
                                <li className={styles.item__icon}><img src="assets/icons/mocha.svg" alt="mocha" title="mocha" /></li>
                            </ul>
                        </div>

                        <div className={styles.item}>
                            <h2 className={styles.item__title}>{t('Languages')}</h2>
                            <ul className={styles.item__list}>
                                <li>{t("French - Mother tongue")}</li>
                                <li>{t("English - Professional working proficiency")}</li>
                                <li>{t("German - Elementary proficiency")}</li>
                                <li>{t("Chinese - Elementary proficiency")}</li>
                            </ul>
                        </div>

                        <div className={styles.item}>
                            <h2 className={styles.item__title}>{t('Community life')}</h2>
                            <ul className={styles.item__list}>
                                <li>{t('Active member of the MIAGE student Union')}</li>
                                <li>Grenoble 2017-1019</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.item}>
                            <h2 className={styles.item__title}>{t('Work experience')}</h2>
                            <ul className={styles.item__list}>
                                <li>
                                    <h3 className={styles.item__list__title}>{t('Front-end engineer')}</h3>
                                    <p className={styles.item__list__subtitle}>Wizbii · Grenoble <span>2020 - {t('today')}</span></p>
                                    <ul className={styles.item__list__done}>
                                        <li>{t("Development of a SaaS for large European banks")}</li>
                                        <li>{t("Development of an internal back-office")}</li>
                                        <li>{t("Design and development of a homepage in Next.js")}</li>
                                        <li>{t("Writing unit and functional tests with jest and cypress")}</li>
                                    </ul>
                                    <p className={styles.item__list__description}>Stack : Angular, Typescript, NGXS, Symfony...</p>
                                </li>
                                <li>
                                    <h3 className={styles.item__list__title}>{t('Front-end developer internship')}</h3>
                                    <p className={styles.item__list__subtitle}>Algoo · Moirans <span>2019 - 2020</span></p>
                                    <ul className={styles.item__list__done}>
                                        <li>{t('Development of a teamwork platform - Tracim')}</li>
                                        <li>{t('Take part in the management of an open source project through Github')}</li>
                                        <li>{t('Development of POCs to add new features')}</li>
                                        <li>{t('Writing unit and functional tests with mocha, enzyme and cypress')}</li>
                                    </ul>
                                    <p className={styles.item__list__description}>Stack : React, Redux, Cypress, Mocha, i18n...</p>
                                </li>
                                <li>
                                    <h3 className={styles.item__list__title}>{t('Java internship')}</h3>
                                    <p className={styles.item__list__subtitle}>PDS Life Science · Pratteln <span>2018</span></p>
                                    <p className={styles.item__list__description}>
                                        {t('Web application project facilitating the management of data present in pdf files')}
                                    </p>
                                </li>
                                <li>
                                    <h3 className={styles.item__list__title}>{t('Java internship')}</h3>
                                    <p className={styles.item__list__subtitle}>PDS Life Science · Pratteln <span>2016</span></p>
                                    <p className={styles.item__list__description}>
                                        {t('Data transformation project in the development team for a period of 5 weeks')}
                                    </p>
                                </li>
                                <li>
                                    <h3 className={styles.item__list__title}>{t('Web developer internship')}</h3>
                                    <p className={styles.item__list__subtitle}>Optimistic-Traveler · Strasbourg <span>2015</span></p>
                                    <p className={styles.item__list__description}>
                                        {t('Website development for the Optimistic-Traveler group during 5 weeks')}</p>
                                </li>
                            </ul>
                        </div>

                        <div className={styles.item}>
                            <h2 className={styles.item__title}>{t('Education')}</h2>
                            <table className={styles.table__items}>
                                <tr className={styles.table__item}>
                                    <td className={styles.table__date}>2017 - 2020</td>
                                    <td>{t("Master's Degree in Computer Science Applied to Business Administration (MIAGE) Im2ag Grenoble")}</td>
                                </tr>
                                <tr className={styles.table__item}>
                                    <td className={styles.table__date}>2016 - 2017</td>
                                    <td>{t("MIAGE Bachelor's degree Im2ag Grenoble")}</td>
                                </tr>
                                <tr className={styles.table__item}>
                                    <td className={styles.table__date}>2014 - 2016</td>
                                    <td>{t('Higher National Diploma in Computer Science Lycée Camille Sée Colmar')}</td>
                                </tr>
                                <tr className={styles.table__item}>
                                    <td className={styles.table__date}>2011 - 2014</td>
                                    <td>{('High school diploma Lycée Jean Jacques Henner Altkirch')}</td>
                                </tr>
                            </table>
                        </div>

                        <div className={styles.item}>
                            <h2 className={styles.item__title}>{t('Hobbies')}</h2>
                            <ul className={styles.item__interests}>
                                <li className={styles.item__icon}>
                                    <img src="assets/icons/ski.svg" alt="ski" /><p>Ski</p>
                                </li>
                                <li className={styles.item__icon}>
                                    <img src="assets/icons/film.svg" alt="film" /><p>{t('Cinema')}</p>
                                </li>
                                <li className={styles.item__icon}>
                                    <img src="assets/icons/f1.svg" alt="f1" /><p>{t('Motorsport (simracing)')}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <select name="languages" className={styles.languageSelect} defaultValue={locale} onChange={(event) => switchLanguage(event.target.value)}>
                    <option value="fr">🇫🇷</option>
                    <option value="en">🇬🇧</option>
                </select>
            </body>
        </>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(locale, ['cv']),
        locale
    },
    revalidate: 60
})