// import heaFigmaHome from '../../articles/website-redesign-with-figma/images/hea-figma-home.png';
import heaFigmaHome from '../../images/articles/website-redesign-with-figma/hea-figma-home.png';
import figmaWeddingInvitation from '../../images/articles/website-redesign-with-figma/figma-wedding-invitation-screenshot.png';
import figmaGuideImage from '../../images/articles/website-redesign-with-figma/figma-guide-image.png';
import projectCardDesign from '../../images/articles/website-redesign-with-figma/project-card-design.png';
import aboutPageDesigns from '../../images/articles/website-redesign-with-figma/about-page-designs.png';
import { Link } from '@tanstack/react-router';


export const WebsiteRedesignWithFigma = () => {
    return (
        <main className="article">
            <div className="article-container">
                <section className="one-column">
                    <h1>Using Figma to Redesign My Website</h1>
                    <p>What better way to write my first blog post here than by talking about the redesign of my site.</p>
                    <img src={heaFigmaHome} alt="Figma designs of my revamped home page in mobile, tablet, and desktop layout. Each shows a circular bio image, then a heading, followed by some introductory text. All on a vertical, black to eagle-green gradient." />
                </section>

                <section className="one-column">
                    <p className="article-quote">
                        "When you’re surrounded by talented designers, it’s easy to assume ideas should come naturally."
                    </p>

                    <p>For a while, I’d been stuck in a bit of a design block. I’d scroll through incredible portfolios, admire the work shared in the <Link to="https://persona.studio/" target="_blank" rel="noopener" className="text-link">Persona</Link> Slack group (which I’ve been fortunate to be a part of while at <Link to="https://boomerang-hr.com/" target="_blank" rel="noopener" className="text-link">Boomerang</Link>), and come away feeling inspired, but also completely out of my depth. When you’re surrounded by talented designers, it’s easy to assume ideas should come naturally. Mine didn’t.</p>

                    <p>Eventually, I realised I was focusing too much on the results of great designers rather than their process. Developers (myself included) often jump straight into devtools or wireframes, but designers tend to think more deliberately. I kept noticing <Link to="https://www.figma.com/" target="_blank" rel="noopener" className="text-link">Figma</Link> pop up in their workflows, so I decided to give it a proper try before diving back into VS Code.</p>
                </section>

                <section className="two-columns">
                    <p>After signing up for the free version, I immediately got distracted by the AI tool. Not something I planned to use for my site, but it did help me draft our wedding invitations, so that was a fun detour. Once I’d stopped playing with that, I got stuck into the basics.</p>
                    <img src={figmaWeddingInvitation} alt="The Figma AI design for our wedding invitation: a simple design with our names, plus template for the date, time, and location." />
                </section>

                <section className="one-column">
                    <p><Link to="https://help.figma.com/hc/en-us/sections/30880632542743-Figma-Design-for-beginners" target="_blank" rel="noopener" className="text-link">Figma’s beginner tutorial</Link> is surprisingly solid. It walks you through frames, text, auto layout, icon design, components, and even basic interactions (though the free plan limits some of that). A couple of steps were a little vague, but overall it gave me a good foundation and the confidence to start designing my own site.</p>
                    <img src={figmaGuideImage} alt="An example image from the figma beginners tutorial: a layer inside a mobile frame is selected. A box highlights the resizing section of the right panel." />
                </section>

                <section className="one-column">
                    <p>With the tutorial done, I set up three working areas: Explorations, Designs, and Components. In the Designs section, I created mobile, tablet, and desktop frames side by side, each with a simple vertical gradient background. I duplicated these for the main pages I wanted: Home, About, Portfolio, and Posts. I also added text labels between each set of frames to help me visualise scroll depth and keep the sidebar organised.</p>
                    <p>The Home page came together first, partly because I could reuse ideas from the tutorial. I built a navigation bar early on too, which made duplicating layouts for other pages much easier.</p>
                </section>

                <section className="two-columns">
                    <img src={projectCardDesign} alt="" />
                    <p>For the Portfolio and Blog pages, I knew I wanted a consistent card layout. The tutorial’s card component gave me a starting point, but I adapted it to match my own style. I also kept in mind that some elements (like GitHub icons) would be handled differently in code, so I didn’t over engineer the Figma version.</p>
                </section>

                <section className="one-column">
                    <p>The About page was where I let myself be more flexible. I imagined sections with images and text, but I wasn’t sure whether desktop should use a vertical layout, horizontal layout, multiple columns, or something else entirely. I suspect this page will evolve depending on the content, so I didn’t try to force it into a rigid component structure. The same goes for individual blog posts, including this one.</p>
                    <img src={aboutPageDesigns} alt="Figma designs for my about page structure, with one or two column layouts" />
                </section>

                <section className="one-column">
                    <p>Once I was happy with the designs, I moved on to the part I’m most comfortable with; building it. Translating the Figma components into CSS was mostly straightforward, though I quickly learned that Figma doesn’t really account for overflow or scroll behaviour. That was fine, those decisions are better made in code anyway.</p>
                    <p>As I built out the Portfolio and Blog pages, I realised some of my original ideas were making things more complicated than they needed to be. I removed the arrow based navigation between cards and abandoned the idea of each section being exactly one screen tall. Those changes made the pages cleaner and more usable.</p>
                    <p>Looking back, I think my experience is pretty typical for developers using Figma. It’s a fantastic tool for planning, exploring ideas, and creating reusable components, but you still need to rely on your own judgement when translating designs into a real site. It’s also brilliant for creating SVG icons and small UI elements.</p>
                    <p>Overall, using Figma has made this redesign far more intentional and far less overwhelming than if I’d tried to wing it from the start.</p>
                </section>
            </div>
        </main>
    )
}