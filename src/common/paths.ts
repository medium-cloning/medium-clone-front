import { lazy, LazyExoticComponent } from "react";

export interface Path {
    title: string;
    key: string;
    component?: LazyExoticComponent<any>;
    children?: Array<Path>;
}

const paths: Path[] = [
    {
        title: 'Main',
        key: '/',
        component: lazy(() => import('components/pages/main')),
        children: [],
    },
    {
        title: 'Profile',
        key: '/profile',
        component: lazy(() => import('components/pages/profile')),
        children: [],
    },
];

const flatPaths = paths.flat();

export default {
    paths,
    flatPaths,
};