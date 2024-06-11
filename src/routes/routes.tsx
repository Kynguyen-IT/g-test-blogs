import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/Home'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));
const BlogPage = lazy(() => import('../pages/Blog'));

export const routes = (): RouteObject[] => [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/blog/:id',
    element: <BlogPage />,
  },

  {
    path: '*',
    element: <NotFoundPage />,
  },
];
