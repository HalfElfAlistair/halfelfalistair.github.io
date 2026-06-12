import { Nav } from './components/Nav';
import './app.css';
import aliPhotoCrop from './images/aliPhotoCrop.jpg';
import { LinkedIn } from './icons/LinkedIn';
import { GitHub } from './icons/GitHub';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Posts } from './pages/Posts';
import { About } from './pages/About';
import { Footer } from './components/Footer';
// import { RouterProvider, createRouter } from '@tanstack/react-router';
// import { routeTree } from './routeTree.gen';

// const router = createRouter({ routeTree });

function App() {
    return (
        <>
            <div className="gradient-bg" />
            <div className="scroll-sentinel" />
            <Nav />
            {/* <RouterProvider router={router} /> */}
            {/* <Home /> */}
            {/* <Portfolio /> */}
            {/* <Posts /> */}
            {/* <About /> */}
            <Footer />
        </>
    )
}

export default App