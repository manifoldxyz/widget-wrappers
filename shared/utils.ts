import widgetConfig from './config.json';


export const loadWidget = (widgetType: keyof typeof widgetConfig, version?: string) => {
  const { javascriptSrc, cssSrc, defaultVersion } = widgetConfig[widgetType]

  loadScript(javascriptSrc.replace('{{VERSION}}', version || defaultVersion), `manifold-${widgetType}-script`)
  loadCSS(cssSrc.replace('{{VERSION}}', version || defaultVersion), `manifold-${widgetType}-css`)
}

export const loadScript = (src: string, id: string): void => {
  if (!document.getElementById(id)) {
    const script = document.createElement('script');
    script.src = src
    script.id = id;
    document.body.appendChild(script);
  }
};

export const loadCSS = (src: string, id: string): void => {
  if (!document.getElementById(id)) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.id = id
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href =  src
    head.appendChild(link);
  }
};

export const camelCaseToHyphenCase = (camelCasedString: string): string => {
  return camelCasedString.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
};
