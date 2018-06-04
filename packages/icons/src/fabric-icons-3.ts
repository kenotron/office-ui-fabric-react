// Your use of the content in the files referenced here is subject to the terms of the license at https://aka.ms/fabric-assets-license

// tslint:disable:max-line-length

import { IIconOptions, IIconSubset, registerIcons } from '@uifabric/styling';

export function initializeIcons(baseUrl: string = '', options?: IIconOptions): void {
  const subset: IIconSubset = {
    style: {
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
      fontStyle: 'normal',
      fontWeight: 'normal',
      speak: 'none'
    },
    fontFace: {
      fontFamily: `"FabricMDL2Icons-3"`,
      src: `url('${baseUrl}fabric-icons-3-ef2110da.woff') format('woff')`
    },
    icons: {
      WorkFlow: '\uEA01',
      HourGlass: '\uEA03',
      StoreLogoMed20: '\uEA04',
      TimeSheet: '\uEA05',
      TriangleSolid: '\uEA08',
      VideoSolid: '\uEA0C',
      RainShowersNight: '\uEA0F',
      SnowShowerNight: '\uEA11',
      Teamwork: '\uEA12',
      HailNight: '\uEA13',
      PeopleAdd: '\uEA15',
      Glasses: '\uEA16',
      DateTime2: '\uEA17',
      Shield: '\uEA18',
      Header1: '\uEA19',
      PageAdd: '\uEA1A',
      NumberedList: '\uEA1C',
      PowerBILogo: '\uEA1E',
      Info2: '\uEA1F',
      MusicInCollectionFill: '\uEA36',
      Asterisk: '\uEA38',
      ErrorBadge: '\uEA39',
      CircleFill: '\uEA3B',
      Record2: '\uEA3F',
      AllAppsMirrored: '\uEA40',
      BookmarksMirrored: '\uEA41',
      BulletedListMirrored: '\uEA42',
      CaretHollowMirrored: '\uEA45',
      CaretSolidMirrored: '\uEA46',
      ChromeBackMirrored: '\uEA47',
      ClosePaneMirrored: '\uEA49',
      DockLeftMirrored: '\uEA4C',
      DoubleChevronLeftMedMirrored: '\uEA4D',
      HelpMirrored: '\uEA51',
      ImportMirrored: '\uEA52',
      ListMirrored: '\uEA55',
      MailForwardMirrored: '\uEA56',
      MailReplyMirrored: '\uEA57',
      MailReplyAllMirrored: '\uEA58',
      OpenPaneMirrored: '\uEA5B',
      ParkingLocationMirrored: '\uEA5E',
      SendMirrored: '\uEA63',
      ShowResultsMirrored: '\uEA65',
      ThumbnailViewMirrored: '\uEA67',
      Devices3: '\uEA6C',
      Lightbulb: '\uEA80',
      StatusTriangle: '\uEA82',
      VolumeDisabled: '\uEA85',
      Puzzle: '\uEA86',
      EmojiNeutral: '\uEA87',
      EmojiDisappointed: '\uEA88',
      HomeSolid: '\uEA8A',
      Ringer: '\uEA8F',
      PDF: '\uEA90',
      HeartBroken: '\uEA92',
      StoreLogo16: '\uEA96',
      MultiSelectMirrored: '\uEA98',
      Broom: '\uEA99',
      Cocktails: '\uEA9D',
      Wines: '\uEABF',
      Articles: '\uEAC1',
      Cycling: '\uEAC7',
      DietPlanNotebook: '\uEAC8',
      Pill: '\uEACB',
      ExerciseTracker: '\uEACC',
      HandsFree: '\uEAD0',
      Medical: '\uEAD4',
      Running: '\uEADA',
      Weights: '\uEADB',
      Trackers: '\uEADF',
      AddNotes: '\uEAE3',
      AllCurrency: '\uEAE4',
      BarChart4: '\uEAE7',
      CirclePlus: '\uEAEE',
      Coffee: '\uEAEF',
      Cotton: '\uEAF3',
      Market: '\uEAFC',
      Money: '\uEAFD',
      PieDouble: '\uEB04',
      PieSingle: '\uEB05',
      RemoveFilter: '\uEB08',
      Savings: '\uEB0B',
      Sell: '\uEB0C',
      StockDown: '\uEB0F',
      StockUp: '\uEB11',
      Lamp: '\uEB19',
      Source: '\uEB1B',
      MSNVideos: '\uEB1C',
      Cricket: '\uEB1E',
      Golf: '\uEB1F',
      Baseball: '\uEB20',
      Soccer: '\uEB21',
      MoreSports: '\uEB22',
      AutoRacing: '\uEB24',
      CollegeHoops: '\uEB25',
      CollegeFootball: '\uEB26',
      ProFootball: '\uEB27',
      ProHockey: '\uEB28',
      Rugby: '\uEB2D',
      SubstitutionsIn: '\uEB31'
    }
  };

  registerIcons(subset, options);
}
