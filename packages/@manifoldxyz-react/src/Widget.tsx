import React, { useEffect } from 'react';
import { WidgetType } from './shared/types';
import { camelCaseToHyphenCase, loadWidget } from './shared/utils';

export const Widget: React.FC<{
  widgetType: WidgetType;
  dataAttributes: { [key: string]: any };
  version?: string;
}> = ({ widgetType, dataAttributes, version }) => {
  useLoadWidget(widgetType, version);

  const dataAttributesHyphenated = Object.keys(dataAttributes).reduce(
    (acc: { [key: string]: any }, key) => {
      acc[`data-${camelCaseToHyphenCase(key)}`] = dataAttributes[key];
      return acc;
    },
    {}
  );

  return <div {...dataAttributesHyphenated} dangerouslySetInnerHTML={{ __html: '' }}></div>;
};

const useLoadWidget = (widgetType: WidgetType, version?: string) => {
  return useEffect(() => {
    loadWidget(widgetType, version);
  }, [widgetType, version]);
};
