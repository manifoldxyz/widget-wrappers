import React, { useEffect } from 'react';
import { ConnectProps } from './shared/types';
import { camelCaseToHyphenCase, loadConnectWidget } from './shared/utils';

export const ConnectWidget: React.FC<ConnectProps> = (props) => {
  useConnect();

  const propsAsDataAttributes = Object.keys(props).reduce((acc: { [key: string]: any }, key) => {
    // @ts-ignore
    acc[`data-${camelCaseToHyphenCase(key)}`] = props[key];
    return acc;
  }, {});

  return (
    <div
      {...propsAsDataAttributes}
      data-widget="m-connect"
      dangerouslySetInnerHTML={{ __html: '' }}
    ></div>
  );
};

const useConnect = () => {
  return useEffect(() => {
    loadConnectWidget();
  }, []);
};
