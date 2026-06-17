import { Content } from '../components/Content';
import { Heading } from '../components/Heading';
import pokemonCataloguerImage from '../images/ptcg-cataloguer-screenshot.png';
import horribleDatePickerImage from '../images/horrible-date-picker-screenshot.png';
import pokemonCataloguerFunctionsFlowChart from '../images/ptcg-cataloguer-functions-flow-chart.png';
import pokemonCataloguerBackendEndpointsScreenshot from '../images/ptcg-cataloguer-backend-endpoints-screenshot.png';
export const Portfolio = () => {
    const projects = [
        {
            title: "Pokémon Card Cataloguer",
            id: "pcc-frontend",
            description: "A friendly, fast, and lightweight frontend for browsing, searching, and managing your Pokémon card collection. Built with React, TypeScript, and Vite, this app connects to Firebase for storage and Netlify Functions for safe access to external card data.",
            image: pokemonCataloguerImage,
            alt: "Screenshot of Pokémon Card Cataloguer frontend",
            links: [
                "https://github.com/HalfElfAlistair/PokemonCardCataloguer",
                "https://pokemoncardcataloguer.netlify.app/"
            ]
        },
        {
            title: "Cataloguer Backend",
            id: "pcc-backend",
            description: "An experimental backend API built with ASP.NET Core and EF Core. This repo was created as a learning project, to get to grips with using C# and .NET, but doubles up as a potential future replacement for the Firebase backend.",
            image: pokemonCataloguerBackendEndpointsScreenshot,
            alt: "Screenshot of Pokémon Card Cataloguer project",
            links: [
                "https://github.com/HalfElfAlistair/PokemonCardCataloguerBackend",
            ]
        },
        {
            title: "Netlify Functions API",
            id: "pcc-functions",
            description: "A lightweight serverless API layer that safely connects the frontend to the external Pokémon TCGDex API. These functions validate auth, apply caching, and prevent misuse of the external API.",
            image: pokemonCataloguerFunctionsFlowChart,
            alt: "Screenshot of Pokémon Card Cataloguer project",
            links: [
                "https://github.com/HalfElfAlistair/PokemonCardCataloguerFunctions",
            ]
        },
        {
            title: "Horrible Date Picker",
            id: "hdp",
            description: "A mini-project, made as part of the 2025 Bad UX World Cup.",
            image: horribleDatePickerImage,
            alt: "Screenshot of Horrible Date Picker frontend",
            links: [
                "https://github.com/HalfElfAlistair/horrible-date-picker",
            ]
        },
    ]
    const projectsCount = projects.length;
    const projectIDs = projects.map(project => project.id);

    return (
        <main className="portfolio">
            <Heading heading="Portfolio" />
            <section className="cards-Layout">
                {projects.map((project, i) => {
                    const { id } = project;
                    return (
                        <Content
                            key={id}
                            parent="Portfolio"
                            content={project}
                            contentIDs={projectIDs}
                            contentIndex={i}
                            contentsCount={projectsCount}
                            id={id}
                        />
                    )
                })}
            </section>
        </main>
    )
}