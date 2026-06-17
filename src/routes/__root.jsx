import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { Error } from '../pages/Error';

export const Route = createRootRoute({
    component: RootComponent,
    notFoundComponent: () => {
        return <Error message="Page not found" />
    }
})

function RootComponent() {
    return (
        <React.Fragment>
            <div className="gradient-bg" />
            <div className="scroll-sentinel" />
            <Nav />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}
