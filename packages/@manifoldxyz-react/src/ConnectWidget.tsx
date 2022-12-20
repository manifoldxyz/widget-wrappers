import React, { useEffect } from 'react';
import widgetConfig from './shared/config.json';
import { ConnectProps } from './shared/types';

export const ConnectWidget: React.FC<ConnectProps> = (props) => {
  useConnect();

  const propsAsDataAttributes = Object.keys(props).reduce((acc: { [key: string]: any }, key) => {
    acc[`data-${key}`] = props[key as keyof ConnectProps];
    return acc;
  }, {});

  return <div dangerouslySetInnerHTML={{ __html: '' }} {...propsAsDataAttributes}></div>;
};

const useConnect = () => {
  return useEffect(() => {
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
  }, []);
};
