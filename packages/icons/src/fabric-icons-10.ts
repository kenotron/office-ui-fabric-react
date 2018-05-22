  // Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import {
  IIconOptions,
  IIconSubset,
  registerIcons
} from '@uifabric/styling/lib/index';

export function initializeIcons(
  baseUrl: string = '',
  options?: IIconOptions
): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-10"`,
      src: `url('${baseUrl}fabric-icons-10-fb519450.woff') format('woff')`
    },
    icons: {
      'CPlusPlus': '\uF2F4',
      'FSharpLanguage': '\uF2F5',
      'FSharp': '\uF2F6',
      'TypeScriptLanguage': '\uF2F7',
      'PythonLanguage': '\uF2F8',
      'PY': '\uF2F9',
      'CoffeeScript': '\uF2FA',
      'MarkDownLanguage': '\uF2FB',
      'FullWidth': '\uF2FE',
      'FullWidthEdit': '\uF2FF',
      'Plug': '\uF300',
      'PlugSolid': '\uF301',
      'PlugConnected': '\uF302',
      'PlugDisconnected': '\uF303',
      'UnlockSolid': '\uF304',
      'Variable': '\uF305',
      'Parameter': '\uF306',
      'CommentUrgent': '\uF307',
      'Storyboard': '\uF308',
      'DiffInline': '\uF309',
      'DiffSideBySide': '\uF30A',
      'ImageDiff': '\uF30B',
      'ImagePixel': '\uF30C',
      'FileBug': '\uF30D',
      'FileCode': '\uF30E',
      'FileComment': '\uF30F',
      'BusinessHoursSign': '\uF310',
      'FileImage': '\uF311',
      'FileSymlink': '\uF312',
      'AutoFillTemplate': '\uF313',
      'WorkItem': '\uF314',
      'WorkItemBug': '\uF315',
      'LogRemove': '\uF316',
      'ColumnOptions': '\uF317',
      'Packages': '\uF318',
      'BuildIssue': '\uF319',
      'AssessmentGroup': '\uF31A',
      'VariableGroup': '\uF31B',
      'FullHistory': '\uF31C',
      'SingleColumnEdit': '\uF321',
      'DoubleColumnEdit': '\uF322',
      'TripleColumnEdit': '\uF323',
      'ColumnLeftTwoThirdsEdit': '\uF324',
      'ColumnRightTwoThirdsEdit': '\uF325',
      'StreamLogo': '\uF329',
      'PassiveAuthentication': '\uF32A',
      'AlertSolid': '\uF331',
      'MegaphoneSolid': '\uF332',
      'TaskSolid': '\uF333',
      'ConfigurationSolid': '\uF334',
      'BugSolid': '\uF335',
      'CrownSolid': '\uF336',
      'Trophy2Solid': '\uF337',
      'QuickNoteSolid': '\uF338',
      'ConstructionConeSolid': '\uF339',
      'PageListSolid': '\uF33A',
      'PageListMirroredSolid': '\uF33B',
      'StarburstSolid': '\uF33C',
      'ReadingModeSolid': '\uF33D',
      'SadSolid': '\uF33E',
      'HealthSolid': '\uF33F',
      'ShieldSolid': '\uF340',
      'GiftBoxSolid': '\uF341',
      'ShoppingCartSolid': '\uF342',
      'MailSolid': '\uF343',
      'ChatSolid': '\uF344',
      'RibbonSolid': '\uF345',
      'FinancialSolid': '\uF346',
      'FinancialMirroredSolid': '\uF347',
      'HeadsetSolid': '\uF348',
      'PermissionsSolid': '\uF349',
      'ParkingSolid': '\uF34A',
      'ParkingMirroredSolid': '\uF34B',
      'DiamondSolid': '\uF34C',
      'AsteriskSolid': '\uF34D',
      'OfflineStorageSolid': '\uF34E',
      'BankSolid': '\uF34F',
      'DecisionSolid': '\uF350',
      'Parachute': '\uF351',
      'ParachuteSolid': '\uF352',
      'FiltersSolid': '\uF353',
      'ColorSolid': '\uF354',
      'ReviewSolid': '\uF355',
      'ReviewRequestSolid': '\uF356',
      'ReviewRequestMirroredSolid': '\uF357',
      'ReviewResponseSolid': '\uF358',
      'FeedbackRequestSolid': '\uF359',
      'FeedbackRequestMirroredSolid': '\uF35A',
      'FeedbackResponseSolid': '\uF35B',
      'WorkItemBar': '\uF35C',
      'WorkItemBarSolid': '\uF35D',
      'Separator': '\uF35E',
      'NavigateExternalInline': '\uF35F',
      'PlanView': '\uF360',
      'TimelineMatrixView': '\uF361',
      'EngineeringGroup': '\uF362',
      'ProjectCollection': '\uF363',
      'CaretBottomRightCenter8': '\uF364',
      'CaretBottomLeftCenter8': '\uF365',
      'CaretTopRightCenter8': '\uF366'
    }
  };

  registerIcons(subset, options);
}
