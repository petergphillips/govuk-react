import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import {
  HooksExample,
  ProposedClassPropertiesPlugin,
  SimpleTabs,
  SimpleMapTabs,
  TableTabs,
  ReactRouterExample,
  ReactRouterSSRExample,
  ReactRouterSSRSinglePanelExample,
} from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Tabs', module);
const examples = storiesOf('Tabs/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

examples.addDecorator(WithDocsCustom());

stories.add('Component default', () => <TableTabs />);

examples.add('simple', () => <SimpleTabs />);
examples.add('simple with map function', () => <SimpleMapTabs />);

examples.add('simple with map and babel\'s proposed class properties plugin', () => <ProposedClassPropertiesPlugin />);

examples.add('complex mapped table', () => <TableTabs />);

examples.add('hooks example', () => <HooksExample defaultIndex={number('defaultIndex', 1)} />);

examples.add(
  'using react-router (client-side)',
  () => <ReactRouterExample />,
);

examples.add(
  'using react-router (server-side rendering compatible)',
  () => <ReactRouterSSRExample />,
);

examples.add(
  'using react-router (server-side rendering compatible, single panel only)',
  () => <ReactRouterSSRSinglePanelExample />,
);
