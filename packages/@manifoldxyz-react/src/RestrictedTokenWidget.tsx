import React from 'react';
import { RestrictedTokenWidgetDataAttributes } from './shared/types';
import { Widget } from './Widget';

export const RestrictedTokenWidget: React.FC<
  { version: string } & RestrictedTokenWidgetDataAttributes
> = ({ version, ...props }) => {
  return (
    <Widget
      widgetType="restrictedToken"
      version={version}
      dataAttributes={{
        ...props,
      }}
    ></Widget>
  );
};
