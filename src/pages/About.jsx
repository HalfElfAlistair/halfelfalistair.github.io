import { VerticalOneColumn } from '../components/ContentFormats/VerticalOneColumn';
import aliPhoto from '../images/aliPhoto.jpg';
import { SkillsCard } from '../components/SkillsCard';
import { Carousel } from '../components/Carousel';
import { CTA } from '../components/CTA';
import tillyOne from '../images/tilly-1.jpg';
import plutoOne from '../images/pluto-1.jpg';
import bertieOne from '../images/bertie-1.jpg';

export const About = () => {
    const textContentOne = [
        "I’m a developer who enjoys understanding how things work; visually, logically, and architecturally. My professional experience is rooted in frontend development, working primarily with React JS, but I’ve always been drawn to the bigger picture: how data moves, how systems stay reliable, and how to build software that’s easy to reason about.",
        "That curiosity has led me to explore backend development through personal projects in .NET, C#, and EF Core. I’ve been using these technologies to learn more about API structure, dependency injection, async patterns, and data modelling. I’m also developing my understanding of cyber security fundamentals, which has shaped how I think about authentication, secure design, and building trustworthy systems.",
        "I started my journey with a bootcamp at Northcoders, where collaboration, feedback, and clean code were core to how we worked. I’ve since been working for Boomerang-HR, a web-app using React and Firebase. Being part of a small organisation, the role pushed me to grow quickly, take ownership, and contribute across the stack.",
        "As I transition towards the next step in my career, I’m open to a range of opportunities; frontend, backend, full‑stack, or cyber-security. The key thing is that I can keep learning, contribute meaningfully, and work with people who care about building things well.",
        "I’m at my best when I’m learning, reflecting, and building things that make a difference. If that resonates with you, feel free to reach out."
    ];
    const skillsList = [
        {
            heading: "Languages",
            skills: ["JavaScript", "HTML", "CSS", "TypeScript", "C#"]
        },
        {
            heading: "Frontend",
            skills: ["React", "Tachyons", "Astro"]
        },
        {
            heading: "Backend & Services",
            skills: ["Firebase", "Sparkpost"]
        },
        {
            heading: "Tools & Libraries",
            skills: ["Git", "Node", "Netlify", "Axios", "Bitbucket", "Vite", "TanStack", ".NET", "Figma",]
        },
        {
            heading: "Other",
            skills: ["UX awareness", "Responsive design", "WordPress",]
        },
    ];
    const images = [
        {
            src: tillyOne,
            alt: "Tilly perched on the end of a bed."
        },
        {
            src: plutoOne,
            alt: "Pluto sat on a laptop bag."
        },
        {
            src: bertieOne,
            alt: "Bertie, with his tongue out."
        },
    ]

    const petsTextContent = [
        "Meet Tilly (void cat with the white whiskers), Pluto (void cat with the priest collar) and Bertie (our little old man Jack Russel Terrier).",
        "Tilly loves to lounge around most of the day, to be fair to her she's an old girl and has arthritis. She's still capable of a zoom when she hears you open a packet of Dreamies though, little 'ol Til loves her food.",
        "Pluto is an 8 year old with lots of energy and tends to be the more vocal of the two cats. He's a bit of a rambunctious scamp and he gives the vibes of a chimney sweep or a little urchin carrying a bindle.",
        "Bertie is the most recent addition to our family, adopted from Dogs Trust in early 2026. He's settled in very well and, like Tilly, he loves to eat (despite having had most of his teeth removed). He keeps us in check as well, barking at us if we haven't got to bed early enough for his liking.",
        "They all have one thing in common, that's a love of treats. So please get in touch if you have work for their papa, so he can get them lots more!"
    ];

    const interestsContent = [
        "Outside of working, learning, or going through personal projects, I have varied interests and I'll go through a few here.",
        "I usually play football (badly) once a week with Football for Foodbanks. It's a fun, casual kick about with some friendly and talented players, plus all for a good cause.",
        "Also once a week I take part in a DnD campaign run by friends. It's a great way to have a laugh while problem solving, working as a team (or not when playing my betrayal loving Drow).",
        "I also tend to game bit (again badly), often with friends. A few of us have taken an interest in exploring VR worlds and admiring how far that tech has come along. I've been working on making my living room in blender, which has been a fun side-project and may even come in handy when we decide to re-decorate.",
        "I sometimes bake, used to a lot more often but have slowed down since moving to a house without a dishwasher (cleaning up after can be hard work). My partner does require me to make caramel shortbread for her choir once or twice a year though.",
    ]

    return (
        <main className="about">
            <div className="title-container flex-center">
                <h1>About me</h1>
            </div>
            <div className="about-content">
                <VerticalOneColumn image={aliPhoto} alt="picture of me" heading="Professional" textContent={textContentOne} />
                <section className="skills">
                    <div className="sub-heading-container flex-center">
                        <h2>Skills</h2>
                    </div>
                    {skillsList.map(section => {
                        const { heading, skills } = section;
                        return <SkillsCard key={heading} heading={heading} skills={skills} />
                    })}
                </section>
                <section className="personal">
                    <div className="sub-heading-container flex-center">
                        <h2>Personal</h2>
                    </div>
                    <div className="subtext-container">
                        <p>I'll waffle on about myself a little further down, but I know you're all really here for the pets gallery so I'll get on with that first.</p>
                    </div>
                    <Carousel images={images} />
                    {petsTextContent.map((text, i) => {
                        return <p key={i} className="personal-text">{text}</p>
                    })}
                    <CTA opaqueNav={false} />
                    {interestsContent.map((text, i) => {
                        return <p key={i} className="personal-text">{text}</p>
                    })}
                </section>
            </div>
        </main>
    )
}