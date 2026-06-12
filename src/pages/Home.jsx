import profileImage from '../images/profileImage.jpg';

export const Home = () => {
    return (
        <main className="home">
            <section className="personal-bio">
                <div className="profile-img-container flex-center">
                    <img
                        src={profileImage}
                        alt="Alistair Sinclair-Smith hanging out at a friend's flat"
                        className="profile-img"
                    />
                </div>
                <div className="title-container flex-center">
                    <h1>Hi, I’m Alistair!</h1>
                </div>
                <div className="bio-text-container flex-center">
                    <p>I’m a developer at Boomerang-HR specialising in React, TypeScript, and Firebase.</p>
                    <p>I enjoy building clean, reliable systems with a focus on clarity, accessibility, and thoughtful architecture.</p>
                    <p>I’m currently developing my backend skills, expanding into .NET development, and contributing to production‑ready APIs while continuing to refine my frontend craft.</p>
                </div>
            </section>
        </main>
    )
}