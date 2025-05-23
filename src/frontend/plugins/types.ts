export type PluginRoute = {
  label: string;
  component: string;
};

export type Plugin = {
  name: string;
  label: string;
  routes: PluginRoute[];
};

export type PluginDefinition = {
  pluginName: string;
};

export type RouteDefinition = {
  name: string;
};
