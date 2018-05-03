import * as React from 'react';
import { ComponentPage, ExampleCard, PropertiesTableSet } from '@uifabric/example-app-base';
import { DetailsListCustomColumnsExample } from 'office-ui-fabric-react/lib/components/DetailsList/examples/DetailsList.CustomColumns.Example';
const DetailsListCustomColumnsExampleCode = require('raw-loader!office-ui-fabric-react/src/components/DetailsList/examples/DetailsList.CustomColumns.Example.tsx') as string;

export class DetailsListCustomColumnsComponentPage extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title='Custom Item Columns'
        componentName='DetailsListCustomColumnsExample'
        componentUrl='https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/DetailsList'
        exampleCards={
          <ExampleCard title='Rendering custom item columns with sorting' isOptIn={ true } code={ DetailsListCustomColumnsExampleCode }>
            <DetailsListCustomColumnsExample />
          </ExampleCard>
        }
        isHeaderVisible={ false }
      />
    );
  }
}