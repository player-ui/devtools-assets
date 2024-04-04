

export interface Route {
  title: string;
  path?: string;
  routes?: Array<Route>;
  metaData?: {
    platform?: Array<string>;
  };
}

interface Navigation {
  routes: Array<Route>;
}

const navigation: Navigation = {
  routes: [
    {
      title: 'Devtools',
      routes: [
        {
          title: 'MDX Page',
          path: '/mdx-page',
        },
        {
          title: 'First MDX',
          path: '/first-mdx',
        },
        {
          title: 'FAQs',
          path: '/faqs',
        },
      ],
    },
  ],
};

export const PATH_TO_NAV = (() => {
  const pathMap = new Map<string, string[]>();

  const expandRoutes = (route: Route, context: string[] = []) => {
    if (route.path) {
      pathMap.set(route.path, context);
    }

    route.routes?.forEach((nestedRoute) => {
      expandRoutes(nestedRoute, [...context, route.title]);
    });
  };

  navigation.routes.forEach((r) => expandRoutes(r));

  return pathMap;
})();

export default navigation;
