import React from 'react';
import { MarketplaceWidgetDataAttributes } from './shared/types';
import { Widget } from './Widget';

export const MarketplaceWidget: React.FC<
  { version?: string } & MarketplaceWidgetDataAttributes
> = ({ version, ...props }) => {
  return <Widget widgetType="marketplace" version={version} dataAttributes={props}></Widget>;
};
