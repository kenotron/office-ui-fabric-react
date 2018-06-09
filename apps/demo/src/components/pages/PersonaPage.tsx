import * as React from 'react';
import { PersonaInitialsExample } from 'office-ui-fabric-react/lib/components/Persona/examples/Persona.Initials.Example';
import { DemoPage } from '../DemoPage';
import { IDemoPageProps } from '../DemoPage.types';
import { PersonaBasicExample } from 'office-ui-fabric-react/lib/components/Persona/examples/Persona.Basic.Example';
import { PersonaAlternateExample } from 'office-ui-fabric-react/lib/components/Persona/examples/Persona.Alternate.Example';
import { PersonaCustomRenderExample } from 'office-ui-fabric-react/lib/components/Persona/examples/Persona.CustomRender.Example';
import { PersonaCustomCoinRenderExample } from 'office-ui-fabric-react/lib/components/Persona/examples/Persona.CustomCoinRender.Example';
import { UnknownPersonaExample } from 'office-ui-fabric-react/lib/components/Persona/examples/Persona.UnknownPersona.Example';
import { PersonaStatus } from 'office-ui-fabric-react/lib/components/Persona/Persona.checklist';

const PersonaInitialsExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Persona/examples/Persona.Initials.Example.tsx') as string;
const PersonaBasicExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Persona/examples/Persona.Basic.Example.tsx') as string;
const PersonaAlternateExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Persona/examples/Persona.Alternate.Example.tsx') as string;
const PersonaCustomRenderExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Persona/examples/Persona.CustomRender.Example.tsx') as string;
const PersonaCustomCoinRenderExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Persona/examples/Persona.CustomCoinRender.Example.tsx') as string;
const UnknownPersonaExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Persona/examples/Persona.UnknownPersona.Example.tsx') as string;

export const PersonaPageProps: IDemoPageProps = {
  title: 'Persona',
  componentName: 'Persona',
  componentUrl:
    'https://github.com/OfficeDev/office-ui-fabric-react/tree/master/packages/office-ui-fabric-react/src/components/Persona',
  componentStatus: PersonaStatus,
  examples: [
    {
      title: 'Persona in various sizes',
      code: PersonaBasicExampleCode,
      view: <PersonaBasicExample />
    },
    {
      title: 'Alternative small personas',
      code: PersonaAlternateExampleCode,
      view: <PersonaAlternateExample />
    },
    {
      title: 'Persona with initials',
      code: PersonaInitialsExampleCode,
      view: <PersonaInitialsExample />
    },
    {
      title: 'Rendering custom persona text',
      code: PersonaCustomRenderExampleCode,
      view: <PersonaCustomRenderExample />
    },
    {
      title: 'Rendering custom coin',
      code: PersonaCustomCoinRenderExampleCode,
      view: <PersonaCustomCoinRenderExample />
    },
    {
      title: 'Rendering unknown persona coin',
      code: UnknownPersonaExampleCode,
      view: <UnknownPersonaExample />
    }
  ],
  propertiesTablesSources: [
    require<string>('!raw-loader!office-ui-fabric-react/src/components/Persona/Persona.types.ts')
  ],
  overview: require<string>('!raw-loader!office-ui-fabric-react/src/components/Persona/docs/PersonaOverview.md'),
  bestPractices: '',
  dos: require<string>('!raw-loader!office-ui-fabric-react/src/components/Persona/docs/PersonaDos.md'),
  donts: require<string>('!raw-loader!office-ui-fabric-react/src/components/Persona/docs/PersonaDonts.md'),
  isHeaderVisible: true,
  allowNativeProps: true
};

export const PersonaPage = (props: { isHeaderVisible: boolean }) => <DemoPage {...{ ...PersonaPageProps, ...props }} />;
