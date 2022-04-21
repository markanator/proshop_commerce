import loadable from '@loadable/component';

//
export const LoadableHomePage = loadable(() => import('./Home'));
export const LoadableProductPage = loadable(() => import('./ProductPage'));
export const LoadableCartPage = loadable(() => import('./CartPage'));
