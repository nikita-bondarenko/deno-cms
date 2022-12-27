import {Head} from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import {Handlers, PageProps} from "$fresh/src/server/types.ts";






export const handler: Handlers<any[] | null> = {

    async GET(_, ctx) {
        return ctx.render()
    }
}

export default function Home({data: allTodos}: PageProps<any[] | null>) {
    console.log(allTodos)
    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=0.5"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <link rel="icon" type="image/svg" href="./img/favicon.svg"/>
                <title>BS группа компаний</title>
                <link rel="stylesheet" href="./css/normalize.css"/>
                <link rel="stylesheet" href="./css/iconsfont.css"/>
                <link rel="stylesheet" href="./css/particles.css"/>
                <link rel="stylesheet" href="./css/main.css"/>
                <script defer src="https://unpkg.com/imask@6.4.3/dist/imask.js"></script>
                <script defer src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
                <script src="https://smtpjs.com/v3/smtp.js">
                </script>
                <script type="module" src="./js/main.js"></script>
            </Head>
            <body id="main">
            <div class="web-decor-top">
                <div id="particles-js"></div>
                <div id="particles-js3"></div>
                <div class="web-decor-top__angle"></div>
                <header id="top" class="header">
                    <div class="header__body container">
                        <div class="header__logo icon-logo-small"></div>
                        <button id="nav-bar" class="header__bar icon-bar"></button>
                        <nav id="nav" class="nav">
                            <button id="nav-close" class="nav__close icon-cross"></button>
                            <ul class="nav__list ">
                                <li class="nav__item">
                                    <a class="nav__link" href="#about">О нaс</a>
                                </li>
                                <li class="nav__item companies">
                                    <span id="companies-open" class="companies__title">Компaнии</span>
                                    <ul class="companies__list">
                                        <li class="companies__item">
                                            <a href="#coex" class="companies__link">COEX</a>
                                        </li>
                                        <li class="companies__item">
                                            <a href="#swap" class="companies__link">Swapster</a>
                                        </li>
                                        <li class="companies__item">
                                            <a href="#senses" class="companies__link">Seven Senses</a>
                                        </li>
                                        <li class="companies__item">
                                            <a href="#side" class="companies__link">Right Side</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav__item">
                                    <a class="nav__link" href="#contacts">Контакты</a>
                                </li>
                                <li class="nav__item icon-globe">RU</li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <section id="hero" class="hero container">
                    <div class="hero__top">
                        <div class="hero__logo icon-logo-small"></div>
                        <h1 class="hero__title">bs группа компаний</h1>
                    </div>

                    <a href="#about" class="hero__button button">Узнать о компании</a>
                </section>
                <section id="about" class="about container">
                    <p class="about__description">BS Company — симбиоз профессионализма, многолетнего опыта и
                        современного
                        подхода к ведению бизнеса.
                    </p>
                    <p class="about__subdescription"> Мощная юридическая база, финансовая&nbsp;грамотность и
                        передовые
                        информационные&nbsp;технологии
                        — верхушка айсберга в нашем арсенале возможностей</p>
                    <ul class="about__list">
                        <li class="about__item border_radius">
                            <a href="#coex" class="about__link">
                                <div class="about__logo icon-coex"></div>
                                <p class="about__text text_center">Покупаем и продаём криптовалюту по всему миру</p>
                            </a>
                        </li>
                        <li class="about__item border_radius">
                            <a href="#senses" class="about__link">
                                <div class="about__logo icon-seven-senses"></div>
                                <p class="about__text text_center">Защитим и узаконим оборот криптовалюты</p>
                            </a>

                        </li>
                        <li class="about__item border_radius">
                            <a href="#side" class="about__link">
                                <div class="about__logo">
                                    <img src="./img/right-side-logo.png" alt="Лого Right Side"/>
                                </div>
                                <p class="about__text text_center">Зарегистрируем ваш бизнес и окажем юридическую
                                    поддержку на
                                    всех этапах деятельности компании</p>
                            </a>

                        </li>
                        <li class="about__item border_radius">
                            <a href="#swap" class="about__link">
                                <div class="about__logo icon-swapster"></div>
                                <p class="about__text text_center">Быстрый и функциональный Telegram-бот для
                                    хранения и
                                    обмена криптовалют</p>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
            </body>
        </>
    );
}
