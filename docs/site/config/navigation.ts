

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
          title: 'Overview',
          path: '/overview',
        },
        {
          title: 'Team',
          path: '/team',
        },
        {
          title: 'Plugin',
          path: '/plugin',
        },
        {
          title: 'Assets',
          routes: [
            {
              title: 'Action',
              path: '/assets/action'
            },
            {
              title: 'Collection',
              path: '/assets/collection',
            },
            {
              title: 'Console',
              path: '/assets/console',
            },
            {
              title: 'Input',
              path: '/assets/input',
            },
            {
              title: 'List',
              path: '/assets/list',
            },
            {
              title: 'Navigation',
              path: '/assets/navigation',
            },
            {
              title: 'Object Inspector',
              path: '/assets/object-inspector',
            },
            {
              title: 'Stacked View',
              path: '/assets/stacked-view',
            },
            {
              title: 'Table',
              path: '/assets/table',
            },
            {
              title: 'Text',
              path: '/assets/text',
            },
            {
              title: 'Code Editor',
              path: '/assets/code-editor',
            },
            {
              title: 'Toggle',
              path: '/assets/toggle',
            },
          ]
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
