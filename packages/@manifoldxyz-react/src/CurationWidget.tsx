import React from 'react';
import { CurationWidgetDataAttributes } from './shared/types';
import { Widget } from './Widget';

export const CurationWidget: React.FC<{ version?: string } & CurationWidgetDataAttributes> = ({
  version,
  ...props
}) => {
  return (
    <Widget
      widgetType="curation"
      version={version}
      dataAttributes={{
        ...props,
      }}
    ></Widget>
  );
};
