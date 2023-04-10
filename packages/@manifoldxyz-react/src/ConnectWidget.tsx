import React from 'react';
import { ConnectWidgetDataAttributes } from './shared/types';
import { Widget } from './Widget';

export const ConnectWidget: React.FC<{ version: string } & ConnectWidgetDataAttributes> = ({
  version,
  ...props
}) => {
  return (
    <Widget
      widgetType="connect"
      version={version}
      dataAttributes={{
        ...props,
        widget: 'm-connect',
      }}
    ></Widget>
  );
};
