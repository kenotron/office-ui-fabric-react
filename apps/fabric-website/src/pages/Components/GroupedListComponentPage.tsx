import * as React from 'react';
import { GroupedListPage } from '@uifabric/demo/lib/components/pages/GroupedListPage';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { ComponentPage } from '../../components/ComponentPage/ComponentPage';
const pageStyles: any = require('../PageStyles.module.scss');

export class GroupedListComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className={pageStyles.basePage}>
        <ComponentPage>
          <PageHeader
            pageTitle="GroupedList"
            backgroundColor="#038387"
            links={[
              {
                text: 'Overview',
                location: 'Overview'
              },
              {
                text: 'Variants',
                location: 'Variants'
              },
              {
                text: 'Implementation',
                location: 'Implementation'
              }
            ]}
          />
          <GroupedListPage isHeaderVisible={false} />
        </ComponentPage>
      </div>
    );
  }
}
