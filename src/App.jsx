import { Nav } from './components/Nav';
import './app.css';
import aliPhotoCrop from './images/aliPhotoCrop.jpg';
import caramelShortbread from './images/caramelShortbread.jpg';
import ncNewsBackendScreeny from './images/ncNewsBackendScreeny.png';
import ncNewsFrontendScreeny from './images/ncNewsFrontendScreeny.png';
import { KnowledgeCard } from './components/KnowledgeCard';
import { ProjectCard } from './components/ProjectCard';
import { LinkedIn } from './icons/LinkedIn';
import { GitHub } from './icons/GitHub';

function App() {

    const knowledgeList = [
        ['HTML5', 'CSS3', 'JavaScript'],
        ['SQL', 'React', 'Firebase'],
        ['Responsive Design', 'On-page SEO', 'Test Driven Development']
    ]

    const projects = [
        {
            id: 'LP',
            path: 'nc-news',
            title: 'Frontend Project: NC-News',
            image: ncNewsFrontendScreeny,
            imageAlt: 'A screenshot from my Northcoders Frontend project.'
        },
        {
            id: 'SF',
            path: 'nc_backend_project',
            title: 'Backend Project: NC-News API',
            image: ncNewsBackendScreeny,
            imageAlt: 'A screenshot from my Northcoders Backend project.'
        }
    ]

    const fillColour = '#004C54';

    const socials = [
        {
            path: 'https://uk.linkedin.com/in/alistair-sinclair-smith-b247884a',
            label: "Icon link for Alistair Sinclair-Smith's LinkedIn profile.",
            icon: <LinkedIn fillColour={fillColour} />
        },
        {
            path: 'https://github.com/HalfElfAlistair',
            label: "Icon link for Alistair Sinclair-Smith's GitHub profile.",
            icon: <GitHub fillColour={fillColour} />
        }
    ]

    return (
        <>
            <Nav />
            <header>
                <div id="intro">
                    <h1>Introducing: Alistair Sinclair-Smith</h1>
                    <p>A convert from SEO to Full Stack Development.</p>
                </div>
                <div id="top-img">
                    <img src={aliPhotoCrop} alt="Alistair Sinclair-Smith hanging out at a friend's flat" />
                </div>
            </header>
            <main>
                <section id="about">
                    <div className="content">
                        <h2>About Me</h2>
                        <div id="professional">
                            <h3>Professional</h3>

                            <p>I'm Alistair-Sinclair-Smith, a 2011 Marketing graduate who's since tried his hand in various fields; from customer service to data admin.<br /><br /> After a number of years working with on-page <abbr title="Search Engine Optimisation">SEO</abbr>, I found myself exploring coding as a new skill.<br /><br />Initially drawn by the user experience and problem-solving aspects, it dawned on me that this was something I enjoyed and wanted to devote myself to full-time.</p>

                            <p>Basic online courses, like <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener">freeCodeCamp</a>, for JavaScript, HTML and CSS gave me a first taste. I also explored SCSS, jQuery and Bootstrap, with personal projects, but felt I needed something else to take me to the next step.<br /><br /> I decided to enrol on the bootcamp at <a href="https://northcoders.com/" target="_blank" rel="noopener">Northcoders</a>, seeking a knowledge of industry best practice and an upgrade to my skillset.</p>

                            <p>While improving my knowledge of the fundamentals, the course enabled me to use React, PSQL, APIs, Test Driven Development, and agile working practices. Additionally, coding full time, at the bootcamp, has prepared me for a career in development and reinforced my desire to be able to do that every day.</p>

                        </div>
                        <div id="personal">
                            <h3>Personal</h3>
                            <p>I'm an empathetic person and am often pondering how to make life better for people, hence the aforementioned UX draw to coding. I'd love to someday be in a position to have a greater positive influence on the world around me.
                                <br /><br /> Of course, it would also be brilliant to produce code that benefits users, for an organisation that is helping make the world a better place. So finding that kind of role is certainly something to aspire to.
                                <br /><br />Aside from coding, my spare time is devoted to a mix of hobbies which include football, gaming, Dungeons & Dragons, and baking (see picture below).
                                <br /><br />If you check out some of my repositories on GitHub you'll find I've used D&D as an influence for some of my projects.</p>
                            <img src={caramelShortbread} alt="Caramel Shortbread made by Alistair Sinclair-Smith" />
                        </div>
                    </div>
                </section>
                <section id="knowledge">
                    <div className="content">
                        <h2>My Knowledge</h2>
                        <p>Some of the useful knowledge and skills I possess.</p>
                        <div className="container">
                            {knowledgeList.map((items, i) => {
                                return <KnowledgeCard key={`box${i}`} boxNumber={i + 1} items={items} />
                            })}
                        </div>
                    </div>
                </section>
                <section id="projects">
                    <div className="content">
                        <h2>My Projects</h2>
                        <p>Please feel free to check out <a href="https://github.com/HalfElfAlistair" target="_blank" rel="noopener">my GitHub account</a> where you'll find various repositories, both complete and some works in progress. They'll give you a better idea of where I'm at and how far I've come. Below you'll see a small selection from those repos, which link to their respective location.</p>
                        <div className="container">
                            {projects.map(project => {
                                const { id, path, title, image, imageAlt } = project;
                                return <ProjectCard key={id} id={id} path={path} title={title} image={image} imageAlt={imageAlt} />
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <footer id="contact">
                <div className="content">
                    <h2>Get in touch with Alistair Sinclair-Smith</h2>
                    <p>Drop me an email and let's discuss how I can help you!</p>
                    <p>Email: <a href="mailto:alistairjss90@gmail.com" target="_blank" rel="noopener">alistairjss90@gmail.com</a></p>
                    <p>Or check me out on social media.</p>
                    <div id="icons">
                        {socials.map((social, i) => {
                            const { path, label, icon } = social;
                            return (
                                <a key={`socail${i}`} href={path} aria-label={label} target="_blank" rel="noopener" className="nav-link">
                                    {icon}
                                </a>
                            )
                        })}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App