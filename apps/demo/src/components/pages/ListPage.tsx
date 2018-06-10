import * as React from 'react';

import { ListPageProps } from 'office-ui-fabric-react/lib/components/List/List.doc';
import { DemoPage } from '../DemoPage';

export const LinkPage = (props: { isHeaderVisible: boolean }) => <DemoPage {...{ ...ListPageProps, ...props }} />;
