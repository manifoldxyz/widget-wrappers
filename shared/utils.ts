import widgetConfig from './config.json';

export const loadConnectWidget = (): void => {
  if (!document.getElementById(widgetConfig.connect.scriptID)) {
    const script = document.createElement('script');
    script.src = `https://connect.manifoldxyz.dev/${widgetConfig.connect.version}/connect.umd.min.js`;
    script.id = widgetConfig.connect.scriptID;
    document.body.appendChild(script);
  }

  if (!document.getElementById(widgetConfig.connect.cssID)) {
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('link');
    link.id = widgetConfig.connect.cssID;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = `https://connect.manifoldxyz.dev/${widgetConfig.connect.version}/connect.css`;
    head.appendChild(link);
  }
};

export const camelCaseToHyphenCase = (camelCasedString: string): string => {
  return camelCasedString.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
};
