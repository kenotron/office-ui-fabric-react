import { EventGroup } from '@fluentui/utilities';
import { IBaseProps } from '@fluentui/utilities';
import { IComponent } from '@fluentui/foundation-legacy';
import { IComponentAs } from '@fluentui/utilities';
import { IComponentStyles } from '@fluentui/foundation-legacy';
import { ICSSPixelUnitRule } from '@fluentui/merge-styles/lib/IRawStyleBase';
import { ICSSRule } from '@fluentui/merge-styles/lib/IRawStyleBase';
import { IFocusZone } from '@fluentui/react-focus';
import { IFocusZoneProps } from '@fluentui/react-focus';
import { IFontStyles } from '@fluentui/style-utilities';
import { IHTMLSlot } from '@fluentui/foundation-legacy';
import { IObjectWithKey } from '@fluentui/utilities';
import { IPoint } from '@fluentui/utilities';
import { IProcessedStyleSet } from '@fluentui/style-utilities';
import { IRawStyle } from '@fluentui/style-utilities';
import { IRectangle } from '@fluentui/utilities';
import { IRefObject } from '@fluentui/utilities';
import { IRenderComponent } from '@fluentui/utilities';
import { IRenderFunction } from '@fluentui/utilities';
import { ISelection } from '@fluentui/utilities';
import { ISelectionOptions } from '@fluentui/utilities';
import { ISlotProp } from '@fluentui/foundation-legacy';
import { ISlottableProps } from '@fluentui/foundation-legacy';
import { IStyle } from '@fluentui/style-utilities';
import { IStyleableComponentProps } from '@fluentui/foundation-legacy';
import { IStyleFunction } from '@fluentui/utilities';
import { IStyleFunctionOrObject } from '@fluentui/utilities';
import { ITheme } from '@fluentui/style-utilities';
import { KeyCodes } from '@fluentui/utilities';
import { Point } from '@fluentui/utilities';
import * as React from 'react';
import { ReactNode } from 'react';
import { Rectangle } from '@fluentui/utilities';
import { Selection } from '@fluentui/utilities';
import { SELECTION_CHANGE } from '@fluentui/utilities';
import { SelectionDirection } from '@fluentui/utilities';
import { SelectionMode } from '@fluentui/utilities';
import { Target } from '@fluentui/react-hooks';

/**
 * {@docCategory ActivityItem}
 */
export declare class ActivityItem extends React.Component<IActivityItemProps, {}> {
    constructor(props: IActivityItemProps);
    render(): JSX.Element;
    private _onRenderIcon;
    private _onRenderActivityDescription;
    private _onRenderComments;
    private _onRenderTimeStamp;
    private _onRenderPersonaArray;
    private _getClassNames;
}

/**
 * Defines a type made by the union of the different values that the align-items and justify-content flexbox
 * properties can take.
 * {@docCategory Stack}
 */
export declare type Alignment = 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'baseline' | 'stretch';

export declare const Announced: React.FunctionComponent<IAnnouncedProps>;

/**
 * {@docCategory Announced}
 */
export declare class AnnouncedBase extends React.Component<IAnnouncedProps> {
    static defaultProps: Partial<IAnnouncedProps>;
    render(): JSX.Element;
}

/**
 * {@docCategory Autofill}
 */
export declare class Autofill extends React.Component<IAutofillProps, IAutofillState> implements IAutofill {
    static defaultProps: {
        enableAutofillOnKeyPress: number[];
    };
    private _inputElement;
    private _autoFillEnabled;
    private _isComposing;
    private _async;
    static getDerivedStateFromProps(props: IAutofillProps, state: IAutofillState): IAutofillState | null;
    constructor(props: IAutofillProps);
    get cursorLocation(): number | null;
    get isValueSelected(): boolean;
    get value(): string;
    get selectionStart(): number | null;
    get selectionEnd(): number | null;
    get inputElement(): HTMLInputElement | null;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    focus(): void;
    clear(): void;
    private _onCompositionStart;
    private _onCompositionUpdate;
    private _onCompositionEnd;
    private _onClick;
    private _onKeyDown;
    private _onInputChanged;
    private _onChanged;
    private _getCurrentInputValue;
    /**
     * Attempts to enable autofill. Whether or not autofill is enabled depends on the input value,
     * whether or not any text is selected, and only if the new input value is longer than the old input value.
     * Autofill should never be set to true if the value is composing. Once compositionEnd is called, then
     * it should be completed.
     * See https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent for more information on composition.
     * @param newValue - new input value
     * @param oldValue - old input value
     * @param isComposing - if true then the text is actively being composed and it has not completed.
     * @param isComposed - if the text is a composed text value.
     */
    private _tryEnableAutofill;
    private _notifyInputChange;
    /**
     * Updates the current input value as well as getting a new display value.
     * @param newValue - The new value from the input
     */
    private _updateValue;
    private _getDisplayValue;
    private _getInputChange;
    private _getControlledValue;
}

/**
 * {@docCategory CompatButton}
 */
declare class BaseButton extends React.Component<IBaseButtonProps, IBaseButtonState> implements IButton {
    private get _isSplitButton();
    static defaultProps: Partial<IBaseButtonProps>;
    private _async;
    private _events;
    private _buttonElement;
    private _splitButtonContainer;
    private _mergedRef;
    private _labelId;
    private _descriptionId;
    private _ariaDescriptionId;
    private _classNames;
    private _processingTouch;
    private _lastTouchTimeoutId;
    private _renderedVisibleMenu;
    private _menuShouldFocusOnContainer;
    private _menuShouldFocusOnMount;
    private _getMemoizedMenuButtonKeytipProps;
    constructor(props: IBaseButtonProps);
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(prevProps: IBaseButtonProps, prevState: IBaseButtonState): void;
    componentWillUnmount(): void;
    focus(): void;
    dismissMenu(): void;
    openMenu(shouldFocusOnContainer?: boolean, shouldFocusOnMount?: boolean): void;
    private _onRenderContent;
    /**
     * Method to help determine if the menu's component tree should
     * be rendered. It takes into account whether the menu is expanded,
     * whether it is a persisted menu and whether it has been shown to the user.
     */
    private _shouldRenderMenu;
    private _onRenderIcon;
    private _onRenderTextContents;
    private _onRenderText;
    private _hasText;
    private _onRenderChildren;
    private _onRenderDescription;
    private _onRenderAriaDescription;
    private _onRenderMenuIcon;
    private _onRenderMenu;
    private _onDismissMenu;
    private _dismissMenu;
    private _openMenu;
    private _onToggleMenu;
    private _onRenderSplitButtonContent;
    private _onSplitContainerFocusCapture;
    private _onSplitButtonPrimaryClick;
    private _onRenderSplitButtonDivider;
    private _onRenderSplitButtonMenuButton;
    private _onKeyDown;
    private _onKeyUp;
    private _onKeyPress;
    private _onMouseUp;
    private _onMouseDown;
    private _onClick;
    private _onSplitButtonContainerKeyDown;
    private _onMenuKeyDown;
    private _onTouchStart;
    private _onPointerDown;
    private _handleTouchAndPointerEvent;
    /**
     * Returns if the user hits a valid keyboard key to open the menu
     * @param ev - the keyboard event
     * @returns True if user clicks on custom trigger key if enabled or alt + down arrow if not. False otherwise.
     */
    private _isValidMenuOpenKey;
    private _onMenuClick;
}

/**
 * {@docCategory ExtendedPeoplePicker}
 */
export declare class BaseExtendedPeoplePicker extends BaseExtendedPicker<IPersonaProps, IExtendedPeoplePickerProps> {
}

export declare class BaseExtendedPicker<T, P extends IBaseExtendedPickerProps<T>> extends React.Component<P, IBaseExtendedPickerState<T>> implements IBaseExtendedPicker<T> {
    floatingPicker: React.RefObject<BaseFloatingPicker<T, IBaseFloatingPickerProps<T>>>;
    selectedItemsList: React.RefObject<BaseSelectedItemsList<T, IBaseSelectedItemsListProps<T>>>;
    protected root: React.RefObject<HTMLDivElement>;
    protected input: React.RefObject<Autofill>;
    protected selection: Selection;
    constructor(basePickerProps: P);
    get items(): any;
    componentDidMount(): void;
    focus(): void;
    clearInput(): void;
    get inputElement(): HTMLInputElement | null;
    get highlightedItems(): T[];
    render(): JSX.Element;
    protected get floatingPickerProps(): IBaseFloatingPickerProps<T>;
    protected get selectedItemsListProps(): IBaseSelectedItemsListProps<T>;
    protected onSelectionChange: () => void;
    protected canAddItems(): boolean;
    protected renderFloatingPicker(): JSX.Element;
    protected renderSelectedItemsList(): JSX.Element;
    protected onInputChange: (value: string, composing?: boolean | undefined) => void;
    protected onInputFocus: (ev: React.FocusEvent<HTMLInputElement | Autofill>) => void;
    protected onInputClick: (ev: React.MouseEvent<HTMLInputElement | Autofill, MouseEvent>) => void;
    protected onBackspace: (ev: React.KeyboardEvent<HTMLElement>) => void;
    protected onCopy: (ev: React.ClipboardEvent<HTMLElement>) => void;
    protected onPaste: (ev: React.ClipboardEvent<HTMLInputElement | Autofill>) => void;
    protected _onSuggestionSelected: (item: T) => void;
    protected _onSelectedItemsChanged: () => void;
    /**
     * The floating picker is the source of truth for if the menu has been opened or not.
     *
     * Because this isn't tracked inside the state of this component, we need to
     * force an update here to keep the rendered output that depends on the picker being open
     * in sync with the state
     *
     * Called when the suggestions is shown or closed
     */
    private _onSuggestionsShownOrHidden;
    private _addProcessedItem;
}

/**
 * {@docCategory FloatingPeoplePicker}
 */
export declare class BaseFloatingPeoplePicker extends BaseFloatingPicker<IPersonaProps, IPeopleFloatingPickerProps> {
}

export declare class BaseFloatingPicker<T, P extends IBaseFloatingPickerProps<T>> extends React.Component<P, IBaseFloatingPickerState> implements IBaseFloatingPicker {
    protected selection: Selection;
    protected root: React.RefObject<HTMLDivElement>;
    protected suggestionStore: SuggestionsStore<T>;
    protected suggestionsControl: React.RefObject<SuggestionsControl<T>>;
    protected SuggestionsControlOfProperType: new (props: ISuggestionsControlProps<T>) => SuggestionsControl<T>;
    protected currentPromise: PromiseLike<T[]>;
    protected isComponentMounted: boolean;
    private _async;
    constructor(basePickerProps: P);
    get inputText(): string;
    get suggestions(): any[];
    forceResolveSuggestion(): void;
    get currentSelectedSuggestionIndex(): number;
    get isSuggestionsShown(): boolean;
    onQueryStringChanged: (queryString: string) => void;
    hidePicker: () => void;
    showPicker: (updateValue?: boolean) => void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    completeSuggestion: () => void;
    updateSuggestions(suggestions: T[], forceUpdate?: boolean): void;
    render(): JSX.Element;
    protected renderSuggestions(): JSX.Element | null;
    protected onSelectionChange(): void;
    protected updateValue(updatedValue: string): void;
    protected updateSuggestionWithZeroState(): void;
    protected updateSuggestionsList(suggestions: T[] | PromiseLike<T[]>): void;
    protected onChange(item: T): void;
    protected onSuggestionClick: (ev: React.MouseEvent<HTMLElement, MouseEvent>, item: T, index: number) => void;
    protected onSuggestionRemove: (ev: React.MouseEvent<HTMLElement, MouseEvent>, item: T, index: number) => void;
    protected onKeyDown: (ev: MouseEvent) => void;
    private _updateActiveDescendant;
    private _onResolveSuggestions;
    private _onValidateInput;
    private _updateSuggestionsVisible;
    private _bindToInputElement;
    private _unbindFromInputElement;
}

/**
 * {@docCategory PeoplePicker}
 */
export declare class BasePeoplePicker extends BasePicker<IPersonaProps, IPeoplePickerProps> {
}

/**
 * {@docCategory SelectedPeopleList}
 */
export declare class BasePeopleSelectedItemsList extends BaseSelectedItemsList<IExtendedPersonaProps, ISelectedPeopleProps> {
}

/**
 * {@docCategory Pickers}
 */
export declare class BasePicker<T, P extends IBasePickerProps<T>> extends React.Component<P, IBasePickerState> implements IBasePicker<T> {
    protected root: React.RefObject<HTMLDivElement>;
    protected input: React.RefObject<IAutofill>;
    protected focusZone: React.RefObject<IFocusZone>;
    protected suggestionElement: React.RefObject<ISuggestions<T>>;
    protected selection: Selection;
    protected suggestionStore: SuggestionsController<T>;
    /**
     * @deprecated this is no longer necessary as typescript now supports generic elements
     */
    protected SuggestionOfProperType: new (props: ISuggestionsProps<T>) => Suggestions<T>;
    protected currentPromise: PromiseLike<any> | undefined;
    protected _ariaMap: IPickerAriaIds;
    private _styledSuggestions;
    private _id;
    private _async;
    static getDerivedStateFromProps(newProps: IBasePickerProps<any>): {
        items: any[];
    } | null;
    constructor(basePickerProps: P);
    get items(): T[];
    componentDidMount(): void;
    componentDidUpdate(oldProps: P, oldState: IBasePickerState): void;
    componentWillUnmount(): void;
    focus(): void;
    focusInput(): void;
    dismissSuggestions: (ev?: any) => void;
    completeSuggestion(forceComplete?: boolean): void;
    refocusSuggestions: (keyCode: number) => void;
    render(): JSX.Element;
    protected canAddItems(): boolean;
    protected renderSuggestions(): JSX.Element | null;
    protected renderItems(): JSX.Element[];
    protected resetFocus(index?: number): void;
    protected onSuggestionSelect(): void;
    protected onSelectionChange(): void;
    protected updateSuggestions(suggestions: any[]): void;
    /**
     * Only to be called when there is nothing in the input. Checks to see if the consumer has
     * provided a function to resolve suggestions
     */
    protected onEmptyInputFocus(): void;
    protected updateValue(updatedValue: string): void;
    protected updateSuggestionsList(suggestions: T[] | PromiseLike<T[]>, updatedValue?: string): void;
    protected resolveNewValue(updatedValue: string, suggestions: T[]): void;
    protected onChange(items?: T[]): void;
    protected onInputChange: (value: string) => void;
    protected onSuggestionClick: (ev: React.MouseEvent<HTMLElement, MouseEvent>, item: any, index: number) => void;
    protected onSuggestionRemove: (ev: React.MouseEvent<HTMLElement, MouseEvent>, item: T, index: number) => void;
    protected onInputFocus: (ev: React.FocusEvent<HTMLInputElement | Autofill>) => void;
    protected onInputBlur: (ev: React.FocusEvent<HTMLInputElement | Autofill>) => void;
    protected onBlur: (ev: React.FocusEvent<HTMLElement | Autofill>) => void;
    /**
     * Reveals suggestions any time the user clicks on the input element
     * without shifting focus.
     */
    protected onClick: (ev: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    protected onKeyDown: (ev: React.KeyboardEvent<HTMLElement>) => void;
    protected onItemChange: (changedItem: T, index: number) => void;
    protected onGetMoreResults: () => void;
    protected completeSelection: (item: T) => void;
    protected addItemByIndex: (index: number) => void;
    protected addItem: (item: T) => void;
    protected removeItem: (item: IPickerItemProps<T>, focusNextItem?: boolean | undefined) => void;
    protected removeItems: (itemsToRemove: any[]) => void;
    protected onBackspace(ev: React.KeyboardEvent<HTMLElement>): void;
    protected _shouldFocusZoneEnterInnerZone: (ev: React.KeyboardEvent<HTMLElement>) => boolean;
    protected getActiveDescendant(): string | undefined;
    protected getSuggestionsAlert(suggestionAlertClassName?: string): JSX.Element | undefined;
    /**
     * Takes in the current updated value and either resolves it with the new suggestions
     * or if updated value is undefined then it clears out currently suggested items
     */
    private _updateAndResolveValue;
    /**
     * Controls what happens whenever there is an action that impacts the selected items.
     * If `selectedItems` is provided, this will act as a controlled component and it will not update its own state.
     */
    private _updateSelectedItems;
    private _onSelectedItemsUpdated;
    /**
     * Suggestions are normally shown after the user updates text and the text
     * is non-empty, but also when the user clicks on the input element.
     * @returns True if suggestions should be shown.
     */
    private _getShowSuggestions;
    private _onResolveSuggestions;
    private _completeGenericSuggestion;
    private _getTextFromItem;
    /**
     * This should be called when the user does something other than use text entry to trigger suggestions.
     *
     */
    private _userTriggeredSuggestions;
}

export declare class BasePickerListBelow<T, P extends IBasePickerProps<T>> extends BasePicker<T, P> {
    render(): JSX.Element;
    protected onBackspace(ev: React.KeyboardEvent<HTMLElement>): void;
}

export declare class BaseSelectedItemsList<T, P extends IBaseSelectedItemsListProps<T>> extends React.Component<P, IBaseSelectedItemsListState<T>> implements IBaseSelectedItemsList<T> {
    protected root: HTMLElement;
    private _defaultSelection;
    static getDerivedStateFromProps(newProps: IBaseSelectedItemsListProps<any>): {
        items: any[];
    } | null;
    constructor(basePickerProps: P);
    get items(): T[];
    addItems: (items: T[]) => void;
    removeItemAt: (index: number) => void;
    removeItem: (item: T) => void;
    replaceItem: (itemToReplace: T, itemsToReplaceWith: T[]) => void;
    removeItems: (itemsToRemove: any[]) => void;
    removeSelectedItems(): void;
    /**
     * Controls what happens whenever there is an action that impacts the selected items.
     * If selectedItems is provided, this will act as a controlled component and will not update its own state.
     */
    updateItems(items: T[], focusIndex?: number): void;
    onCopy: (ev: React.ClipboardEvent<HTMLElement>) => void;
    hasSelectedItems(): boolean;
    componentDidUpdate(oldProps: P, oldState: IBaseSelectedItemsListState<IObjectWithKey>): void;
    unselectAll(): void;
    highlightedItems(): T[];
    componentDidMount(): void;
    protected get selection(): Selection;
    render(): any;
    protected renderItems: () => JSX.Element[];
    protected onSelectionChanged: () => void;
    protected onChange(items?: T[]): void;
    protected onItemChange: (changedItem: T, index: number) => void;
    protected copyItems(items: T[]): void;
    private _onSelectedItemsUpdated;
    private _canRemoveItem;
}

export declare enum BaseSlots {
    primaryColor = 0,
    backgroundColor = 1,
    foregroundColor = 2
}

/**
 * Builds a map of ID to IKeytipProps
 *
 * @param config - IKeytipConfig object
 * @returns Config map
 */
export declare function buildKeytipConfigMap(config: IKeytipConfig): IKeytipConfigMap;

/**
 * This class is deprecated. Use the individual *Button components instead.
 * @deprecated Use the individual *Button components instead.
 * {@docCategory CompatButton}
 */
declare class Button extends React.Component<IButtonProps, {}> {
    constructor(props: IButtonProps);
    render(): JSX.Element;
}

export declare const ButtonGrid: React.FunctionComponent<IButtonGridProps>;

export declare const ButtonGridCell: <T, P extends IButtonGridCellProps<T>>(props: IButtonGridCellProps<T>) => JSX.Element;

/**
 * {@docCategory CompatButton}
 */
declare enum ButtonType {
    normal = 0,
    primary = 1,
    hero = 2,
    compound = 3,
    command = 4,
    icon = 5,
    default = 6
}

export declare const Callout: React.FunctionComponent<ICalloutProps>;

export declare const CalloutContent: import("react").FunctionComponent<import("./Callout.types").ICalloutProps>;

export declare const CalloutContentBase: React.FunctionComponent<ICalloutProps>;

/**
 * Returns true if a list of menu items can contain a checkbox
 */
export declare function canAnyMenuItemsCheck(items: IContextualMenuItem[]): boolean;

export declare const Check: React.FunctionComponent<ICheckProps>;

export declare const CheckBase: React.FunctionComponent<ICheckProps>;

export declare const ChoiceGroup: React.FunctionComponent<IChoiceGroupProps>;

export declare const ChoiceGroupBase: React.FunctionComponent<IChoiceGroupProps>;

export declare const ChoiceGroupOption: React.FunctionComponent<IChoiceGroupOptionProps>;

/** Clamp a value to ensure it falls within a given range. */
export declare function clamp(value: number, max: number, min?: number): number;

export declare const Coachmark: React.FunctionComponent<ICoachmarkProps>;

export declare const COACHMARK_ATTRIBUTE_NAME = "data-coachmarkid";

export declare const CoachmarkBase: React.FunctionComponent<ICoachmarkProps>;

declare type ColorComponent = keyof Pick<IColor, 'r' | 'g' | 'b' | 'a' | 't' | 'hex'>;

export declare const ColorPicker: React.FunctionComponent<IColorPickerProps>;

/**
 * {@docCategory ColorPicker}
 */
export declare class ColorPickerBase extends React.Component<IColorPickerProps, IColorPickerState> implements IColorPicker {
    static defaultProps: Partial<IColorPickerProps>;
    private _textChangeHandlers;
    /**
     * Strings displayed in the UI as text field labels (these are in a separate object for convenient
     * indexing by short color component name).
     */
    private _textLabels;
    /** Strings besides red/green/blue/alpha/hex, with defaults for all values except the deprecated `hue` */
    private _strings;
    constructor(props: IColorPickerProps);
    get color(): IColor;
    componentDidUpdate(prevProps: Readonly<IColorPickerProps>, prevState: Readonly<IColorPickerState>): void;
    render(): JSX.Element;
    private _getDisplayValue;
    private _onSVChanged;
    private _onHChanged;
    /** Callback for when the alpha/transparency slider changes */
    private _onATChanged;
    private _onTextChange;
    private _onBlur;
    /**
     * Update the displayed color and call change handlers if appropriate.
     * @param ev - Event if call was triggered by an event (undefined if triggered by props change)
     * @param newColor - Updated color
     */
    private _updateColor;
}

export declare const ColorPickerGridCell: React.FunctionComponent<IColorPickerGridCellProps>;

export declare const ColorPickerGridCellBase: React.FunctionComponent<IColorPickerGridCellProps>;

export declare const CommandBar: React.FunctionComponent<ICommandBarProps>;

export declare class CommandBarBase extends React.Component<ICommandBarProps, {}> implements ICommandBar {
    static defaultProps: ICommandBarProps;
    private _overflowSet;
    private _resizeGroup;
    private _classNames;
    constructor(props: ICommandBarProps);
    render(): JSX.Element;
    focus(): void;
    remeasure(): void;
    private _onRenderData;
    private _onRenderItem;
    private _commandButton;
    private _onButtonClick;
    private _onRenderOverflowButton;
    private _computeCacheKey;
    private _onReduceData;
    private _onGrowData;
}

export declare const CompactPeoplePicker: React.FunctionComponent<IPeoplePickerProps>;

/**
 * Compact layout. It uses personas without secondary text when displaying search results.
 * {@docCategory PeoplePicker}
 */
export declare class CompactPeoplePickerBase extends BasePeoplePicker {
    /** Default props for CompactPeoplePicker. */
    static defaultProps: {
        onRenderItem: (props: IPeoplePickerItemSelectedProps) => JSX.Element;
        onRenderSuggestionsItem: (personaProps: IPersonaProps, suggestionsProps?: IBasePickerSuggestionsProps<any> | undefined) => JSX.Element;
        createGenericItem: typeof createGenericItem;
    };
}

/**
 * Constructs a keytip from an IKeytipConfigItem and puts it in the configMap
 *
 * @param configMap - IKeytipConfigMap to store the keytip in
 * @param parentSequence - string of the parent keytip
 * @param keytip - IKeytipConfigItem data
 */
export declare function constructKeytip(configMap: IKeytipConfigMap, parentSequence: string[], keytip: IKeytipConfigItem): void;

/**
 * ContextualMenu description
 */
export declare const ContextualMenu: React.FunctionComponent<IContextualMenuProps>;

export declare const ContextualMenuBase: React.FunctionComponent<IContextualMenuProps>;

/**
 * ContextualMenuItem description
 */
export declare const ContextualMenuItem: React.FunctionComponent<IContextualMenuItemProps>;

export declare class ContextualMenuItemBase extends React.Component<IContextualMenuItemProps, {}> {
    constructor(props: IContextualMenuItemProps);
    render(): JSX.Element;
    openSubMenu: () => void;
    dismissSubMenu: () => void;
    dismissMenu: (dismissAll?: boolean | undefined) => void;
    private _renderLayout;
}

/**
 * {@docCategory ContextualMenu}
 */
export declare enum ContextualMenuItemType {
    Normal = 0,
    Divider = 1,
    Header = 2,
    Section = 3
}

/**
 * Corrects a hex color to have length 3 or 6. Defaults to white if too short.
 * Does NOT check anything besides the length (such as valid characters) and does NOT handle
 * hex values starting with # sign.
 */
export declare function correctHex(hex: string): string;

/** Corrects an HSV color to fall within the valid range. */
export declare function correctHSV(color: IHSV): IHSV;

/** Corrects an RGB color to fall within the valid range.  */
export declare function correctRGB(color: IRGB): IRGB;

/**
 * {@docCategory PeoplePicker}
 */
export declare function createGenericItem(name: string, currentValidationState: ValidationState): IGenericItem & {
    key: React.Key;
};

export declare function createItem(name: string, isValid: boolean): ISuggestionModel<IPersonaProps>;

/**
 * Converts a valid CSS color string to an RGB color.
 * Note that hex colors *must* be prefixed with # to be considered valid.
 * Alpha in returned color defaults to 100.
 * Four and eight digit hex values (with alpha) are supported if the current browser supports them.
 */
export declare function cssColor(color?: string): IRGB | undefined;

export declare const DATAKTP_ARIA_TARGET = "data-ktp-aria-target";

export declare const DATAKTP_EXECUTE_TARGET = "data-ktp-execute-target";

export declare const DATAKTP_TARGET = "data-ktp-target";

export declare const DEFAULT_MASK_CHAR = "_";

export declare const Dialog: React.FunctionComponent<IDialogProps>;

export declare class DialogBase extends React.Component<IDialogProps, {}> {
    static defaultProps: IDialogProps;
    private _id;
    private _defaultTitleTextId;
    private _defaultSubTextId;
    constructor(props: IDialogProps);
    render(): JSX.Element;
    private _getSubTextId;
    private _getTitleTextId;
}

export declare const DialogContent: React.FunctionComponent<IDialogContentProps>;

export declare class DialogContentBase extends React.Component<IDialogContentProps, {}> {
    static defaultProps: IDialogContentProps;
    constructor(props: IDialogContentProps);
    render(): JSX.Element;
    private _groupChildren;
}

export declare const DialogFooter: React.FunctionComponent<IDialogFooterProps>;

export declare class DialogFooterBase extends React.Component<IDialogFooterProps, {}> {
    private _classNames;
    constructor(props: IDialogFooterProps);
    render(): JSX.Element;
    private _renderChildrenAsActions;
}

/**
 * {@docCategory Dialog}
 */
export declare enum DialogType {
    /** Standard dialog */
    normal = 0,
    /** Dialog with large header banner */
    largeHeader = 1,
    /** Dialog with an 'x' close button in the upper-right corner */
    close = 2
}

export declare const DirectionalHint: {
    /**
     * Appear above the target element, with the left edges of the callout and target aligning.
     */
    topLeftEdge: 0;
    /**
     * Appear above the target element, with the centers of the callout and target aligning.
     */
    topCenter: 1;
    /**
     * Appear above the target element, with the right edges of the callout and target aligning.
     */
    topRightEdge: 2;
    /**
     * Appear above the target element, aligning with the target element such that the callout tends toward
     * the center of the screen.
     */
    topAutoEdge: 3;
    /**
     * Appear below the target element, with the left edges of the callout and target aligning.
     */
    bottomLeftEdge: 4;
    /**
     * Appear below the target element, with the centers of the callout and target aligning.
     */
    bottomCenter: 5;
    /**
     * Appear below the target element, with the right edges of the callout and target aligning.
     */
    bottomRightEdge: 6;
    /**
     * Appear below the target element, aligning with the target element such that the callout tends toward
     * the center of the screen.
     */
    bottomAutoEdge: 7;
    /**
     * Appear to the left of the target element, with the top edges of the callout and target aligning.
     */
    leftTopEdge: 8;
    /**
     * Appear to the left of the target element, with the centers of the callout and target aligning.
     */
    leftCenter: 9;
    /**
     * Appear to the left of the target element, with the bottom edges of the callout and target aligning.
     */
    leftBottomEdge: 10;
    /**
     * Appear to the right of the target element, with the top edges of the callout and target aligning.
     */
    rightTopEdge: 11;
    /**
     * Appear to the right of the target element, with the centers of the callout and target aligning.
     */
    rightCenter: 12;
    /**
     * Appear to the right of the target element, with the bottom edges of the callout and target aligning.
     */
    rightBottomEdge: 13;
};

export declare type DirectionalHint = typeof DirectionalHint[keyof typeof DirectionalHint];

export declare class DragDropHelper implements IDragDropHelper {
    private _dragEnterCounts;
    private _isDragging;
    private _dragData;
    private _selection;
    private _activeTargets;
    private _events;
    private _lastId;
    private _initialized;
    constructor(params: IDragDropHelperParams);
    dispose(): void;
    subscribe(root: HTMLElement, events: EventGroup, dragDropOptions: IDragDropOptions): {
        key: string;
        dispose(): void;
    };
    unsubscribe(root: HTMLElement, key: string): void;
    private _onDragEnd;
    /**
     * clear drag data when mouse up on body
     */
    private _onMouseUp;
    /**
     * clear drag data when mouse up outside of the document
     */
    private _onDocumentMouseUp;
    /**
     * when mouse move over a new drop target while dragging some items,
     * fire dragleave on the old target and fire dragenter to the new target
     * The target will handle style change on dragenter and dragleave events.
     */
    private _onMouseMove;
    /**
     * when mouse leave a target while dragging some items, fire dragleave to the target
     */
    private _onMouseLeave;
    /**
     * when mouse down on a draggable item, we start to track dragdata.
     */
    private _onMouseDown;
    /**
     * determine whether the child target is a descendant of the parent
     */
    private _isChild;
    private _isDraggable;
    private _isDroppable;
}

export declare const ExpandingCard: React.FunctionComponent<IExpandingCardProps>;

export declare class ExpandingCardBase extends React.Component<IExpandingCardProps, IExpandingCardState> {
    static defaultProps: {
        compactCardHeight: number;
        expandedCardHeight: number;
        directionalHintFixed: boolean;
    };
    private _classNames;
    private _expandedElem;
    private _async;
    constructor(props: IExpandingCardProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private _onKeyDown;
    private _onRenderCompactCard;
    private _onRenderExpandedCard;
    private _checkNeedsScroll;
}

/**
 * {@docCategory HoverCard}
 */
export declare enum ExpandingCardMode {
    /**
     * To have top compact card only
     */
    compact = 0,
    /**
     * To have both top compact and bottom expanded card
     */
    expanded = 1
}

/**
 * {@docCategory ExtendedPeoplePicker}
 */
export declare class ExtendedPeoplePicker extends BaseExtendedPeoplePicker {
}

export declare class ExtendedSelectedItem extends React.Component<ISelectedPeopleItemProps, IPeoplePickerItemState> {
    protected persona: React.RefObject<HTMLDivElement>;
    constructor(props: ISelectedPeopleItemProps);
    render(): JSX.Element;
    private _onClickIconButton;
}

/**
 * @deprecated This component is deprecated as of `@fluentui/react` version 8. Use `ThemeProvider` instead.
 */
export declare const Fabric: React.FunctionComponent<IFabricProps>;

export declare const FabricBase: React.FunctionComponent<IFabricProps>;

export declare enum FabricSlots {
    themePrimary = 0,
    themeLighterAlt = 1,
    themeLighter = 2,
    themeLight = 3,
    themeTertiary = 4,
    themeSecondary = 5,
    themeDarkAlt = 6,
    themeDark = 7,
    themeDarker = 8,
    neutralLighterAlt = 9,
    neutralLighter = 10,
    neutralLight = 11,
    neutralQuaternaryAlt = 12,
    neutralQuaternary = 13,
    neutralTertiaryAlt = 14,
    neutralTertiary = 15,
    neutralSecondary = 16,
    neutralPrimaryAlt = 17,
    neutralPrimary = 18,
    neutralDark = 19,
    black = 20,
    white = 21
}

/**
 * The Facepile shows a list of faces or initials in a horizontal lockup. Each circle represents a person.
 */
export declare const Facepile: React.FunctionComponent<IFacepileProps>;

/**
 * FacePile with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Component-Styling)
 */
export declare class FacepileBase extends React.Component<IFacepileProps, {}> {
    static defaultProps: IFacepileProps;
    private _ariaDescriptionId;
    private _classNames;
    constructor(props: IFacepileProps);
    render(): JSX.Element;
    protected onRenderAriaDescription(): "" | JSX.Element | undefined;
    private _onRenderVisiblePersonas;
    private _getPersonaControl;
    private _getPersonaCoinControl;
    private _getElementWithOnClickEvent;
    private _getElementWithoutOnClickEvent;
    private _getElementProps;
    private _getOverflowElement;
    private _getDescriptiveOverflowElement;
    private _getIconElement;
    private _getAddNewElement;
    private _onPersonaClick;
    private _onPersonaMouseMove;
    private _onPersonaMouseOut;
    private _renderInitials;
    private _renderInitialsNotPictured;
}

export declare class FloatingPeoplePicker extends BaseFloatingPeoplePicker {
    static defaultProps: any;
}

/**
 * A special Callout that uses FocusTrapZone to trap focus
 * @param props - Props for the component
 */
export declare const FocusTrapCallout: React.FunctionComponent<IFocusTrapCalloutProps>;

export declare const FocusTrapZone: React.FunctionComponent<IFocusTrapZoneProps> & {
    focusStack: string[];
};

/**
 * Fast icon component which only supports font glyphs (not images) and can't be targeted by customizations.
 * To style the icon, use `className` or reference `ms-Icon` in CSS.
 * {@docCategory Icon}
 */
export declare const FontIcon: React.FunctionComponent<IFontIconProps>;

export declare function getAllSelectedOptions(options: ISelectableOption[], selectedIndices: number[]): ISelectableOption[];

/**
 * Gets the aria-describedby value to put on the component with this keytip.
 *
 * @param keySequences - KeySequences of the keytip.
 * @returns The aria-describedby value to set on the component with this keytip.
 */
export declare function getAriaDescribedBy(keySequences: string[]): string;

export declare function getBackgroundShade(color: IColor, shade: Shade, isInverted?: boolean): IColor | null;

export declare function getBoundsFromTargetWindow(target: Element | MouseEvent | Point | null, targetWindow: IWindowWithSegments): IRectangle;

/**
 * Converts an HSV color (and optional alpha value) to a color object.
 * If `a` is not given, a default of 100 is used.
 * Hex in the returned value will *not* be prefixed with #.
 * If `a` is unspecified or 100, the result's `str` property will contain a hex value
 * (*not* prefixed with #)
 */
export declare function getColorFromHSV(hsv: IHSV, a?: number): IColor;

/** Converts an RGBA color to a color object (alpha defaults to 100). */
export declare function getColorFromRGBA(rgba: IRGB): IColor;

/**
 * Converts a CSS color string to a color object.
 * Note that hex colors *must* be prefixed with # to be considered valid.
 *
 * `inputColor` will be used unmodified as the `str` property of the returned object.
 * Alpha defaults to 100 if not specified in `inputColor`.
 * Returns undefined if the color string is invalid/not recognized.
 */
export declare function getColorFromString(inputColor: string): IColor | undefined;

export declare function getContrastRatio(color1: IColor, color2: IColor): number;

/**
 * Memoized helper for rendering a FontIcon.
 * @param iconName - The name of the icon to use from the icon font.
 * @param className - Class name for styling the icon.
 * @param ariaLabel - Label for the icon for the benefit of screen readers.
 * {@docCategory Icon}
 */
export declare const getFontIcon: (iconName: string, className?: string | undefined, ariaLabel?: string | undefined) => React.ReactElement<any, any> | null;

/**
 * Converts a color hue to an HTML color string (with # prefix).
 * This implementation ignores all components of `color` except hue.
 */
export declare function getFullColorString(color: IColor): string;

export declare const getIconContent: (iconName?: string | undefined) => IIconContent | null;

/**
 * Gets the maximum height that a rectangle can have in order to fit below or above a target.
 * If the directional hint specifies a left or right edge (i.e. leftCenter) it will limit the height to the topBorder
 * of the target given.
 * If no bounds are provided then the window is treated as the bounds.
 */
export declare function getMaxHeight(target: Element | MouseEvent | Point, targetEdge: DirectionalHint, gapSpace?: number, bounds?: IRectangle, coverTarget?: boolean): number;

/**
 * Returns a simple object is able to store measurements with a given key.
 */
export declare const getMeasurementCache: () => {
    /**
     * Checks if the provided data has a cacheKey. If it has a cacheKey and there is a
     * corresponding entry in the measurementsCache, then it will return that value.
     * Returns undefined otherwise.
     */
    getCachedMeasurement: (data: any) => number | undefined;
    /**
     * Should be called whenever there is a new measurement associated with a given data object.
     * If the data has a cacheKey, store that measurement in the measurementsCache.
     */
    addMeasurementToCache: (data: any, measurement: number) => void;
};

export declare const getMenuItemStyles: (theme: ITheme) => IMenuItemStyles;

/**
 * Returns a function that is able to compute the next state for the ResizeGroup given the current
 * state and any measurement updates.
 */
export declare const getNextResizeGroupStateProvider: (measurementCache?: {
    /**
     * Checks if the provided data has a cacheKey. If it has a cacheKey and there is a
     * corresponding entry in the measurementsCache, then it will return that value.
     * Returns undefined otherwise.
     */
    getCachedMeasurement: (data: any) => number | undefined;
    /**
     * Should be called whenever there is a new measurement associated with a given data object.
     * If the data has a cacheKey, store that measurement in the measurementsCache.
     */
    addMeasurementToCache: (data: any, measurement: number) => void;
}) => {
    getNextState: (props: IResizeGroupProps, currentState: IResizeGroupState, getElementToMeasureDimension: () => number, newContainerDimension?: number | undefined) => IResizeGroupState | undefined;
    shouldRenderDataForMeasurement: (dataToMeasure: any) => boolean;
    getInitialResizeGroupState: (data: any) => IResizeGroupState;
};

/**
 * Returns the opposite edge of the given RectangleEdge.
 */
export declare function getOppositeEdge(edge: RectangleEdge): RectangleEdge;

/**
 * Gets the hex color string (prefixed with #) for the given persona props.
 * This is the logic used internally by the Persona control.
 * @param props - Current persona props
 * @returns Hex color string prefixed with #
 */
export declare function getPersonaInitialsColor(props: Pick<IPersonaProps, 'primaryText' | 'text' | 'initialsColor'>): string;

/**
 * Given a color and a shade specification, generates the requested shade of the color.
 * Logic:
 * if white
 *  darken via tables defined above
 * if black
 *  lighten
 * if light
 *  strongen
 * if dark
 *  soften
 * else default
 *  soften or strongen depending on shade#
 * @param color - The base color whose shade is to be computed
 * @param shade - The shade of the base color to compute
 * @param isInverted - Default false. Whether the given theme is inverted (reverse strongen/soften logic)
 */
export declare function getShade(color: IColor, shade: Shade, isInverted?: boolean): IColor | null;

export declare function getSubmenuItems(item: IContextualMenuItem): IContextualMenuItem[] | undefined;

/** Regular expression matching only valid hexadecimal chars */
export declare const HEX_REGEX: RegExp;

export declare const HoverCard: React.FunctionComponent<IHoverCardProps>;

export declare class HoverCardBase extends React.Component<IHoverCardProps, IHoverCardState> implements IHoverCard {
    static defaultProps: {
        cardOpenDelay: number;
        cardDismissDelay: number;
        expandedCardOpenDelay: number;
        instantOpenOnClick: boolean;
        setInitialFocus: boolean;
        openHotKey: number;
        type: HoverCardType;
    };
    private _hoverCard;
    private _dismissTimerId;
    private _openTimerId;
    private _currentMouseTarget;
    private _nativeDismissEvent;
    private _childDismissEvent;
    private _classNames;
    private _async;
    private _events;
    constructor(props: IHoverCardProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: IHoverCardProps, prevState: IHoverCardState): void;
    dismiss: (withTimeOut?: boolean | undefined) => void;
    render(): JSX.Element;
    private _getTargetElement;
    private _shouldBlockHoverCard;
    private _cardOpen;
    private _executeCardOpen;
    /**
     * Hide HoverCard
     * How we dismiss the card depends on where the callback is coming from.
     * This is provided by the `isNativeEvent` argument.
     *  true: Event is coming from event listeners set up in componentDidMount.
     *  false: Event is coming from the `onLeave` prop from the HoverCard component.
     */
    private _cardDismiss;
    private _setDismissedState;
    private _instantOpenAsExpanded;
    private _setEventListeners;
}

/**
 * {@docCategory HoverCard}
 */
export declare enum HoverCardType {
    /**
     * Plain card consisting of one part responsive to the size of content.
     */
    plain = "PlainCard",
    /**
     * File card consisting of two parts: compact and expanded. Has some default sizes if not specified.
     */
    expanding = "ExpandingCard"
}

/** Converts HSL components to an HSV color. */
export declare function hsl2hsv(h: number, s: number, l: number): IHSV;

/** Converts HSL components to an RGB color. Does not set the alpha value. */
export declare function hsl2rgb(h: number, s: number, l: number): IRGB;

/** Converts HSV components to a hex color string (without # prefix). */
export declare function hsv2hex(h: number, s: number, v: number): string;

/** Converts HSV components to an HSL color. */
export declare function hsv2hsl(h: number, s: number, v: number): IHSL;

/** Converts HSV components to an RGB color. Does not set the alpha value. */
export declare function hsv2rgb(h: number, s: number, v: number): IRGB;

/**
 * {@docCategory IAccessiblePopupProps}
 */
export declare interface IAccessiblePopupProps {
    /**
     * Sets the element to focus on when exiting the control's FocusTrapZone.
     * @defaultvalue The `element.target` that triggered the control opening.
     */
    elementToFocusOnDismiss?: HTMLElement;
    /**
     * If false (the default), the control's FocusTrapZone will restore focus to the element which
     * activated it once the trap zone is unmounted or disabled. Set to true to disable this behavior.
     * @defaultvalue false
     */
    ignoreExternalFocusing?: boolean;
    /**
     * Whether control should force focus inside its focus trap zone.
     * @defaultvalue true
     */
    forceFocusInsideTrap?: boolean;
    /**
     * Class name (not actual selector) for first focusable item. Do not append a dot.
     */
    firstFocusableSelector?: string | (() => string);
    /**
     * Aria label on close button.
     */
    closeButtonAriaLabel?: string;
    /**
     * Whether this control will allow clicks outside its FocusTrapZone.
     * @defaultvalue false
     */
    isClickableOutsideFocusTrap?: boolean;
}

/**
 * {@docCategory ActivityItem}
 */
export declare interface IActivityItemProps extends React.AllHTMLAttributes<HTMLElement> {
    /**
     * An element describing the activity that took place. If no activityDescription, activityDescriptionText, or
     * onRenderActivityDescription are included, no description of the activity is shown.
     */
    activityDescription?: React.ReactNode[] | React.ReactNode;
    /**
     * Text describing the activity that occurred and naming the people involved in it.
     * Deprecated, use `activityDescription` instead.
     * @deprecated Use `activityDescription` instead.
     */
    activityDescriptionText?: string;
    /**
     * An element containing an icon shown next to the activity item.
     */
    activityIcon?: React.ReactNode;
    /**
     * If activityIcon is not set, then the persona props in this array will be used as the icon for this activity item.
     */
    activityPersonas?: Array<IPersonaSharedProps>;
    /**
     * An element containing the text of comments or \@mention messages.
     * If no comments, commentText, or onRenderComments are included, no comments are shown.
     */
    comments?: React.ReactNode[] | React.ReactNode;
    /**
     * Text of comments or \@mention messages.
     * Deprecated, use `comments` instead.
     * @deprecated Use `comments` instead.
     */
    commentText?: string;
    /**
     * Indicated if the compact styling should be used.
     */
    isCompact?: boolean;
    /**
     * A renderer for the description of the current activity.
     */
    onRenderActivityDescription?: IRenderFunction<IActivityItemProps>;
    /**
     * A renderer that adds the text of a comment below the activity description.
     */
    onRenderComments?: IRenderFunction<IActivityItemProps>;
    /**
     * A renderer to create the icon next to the activity item.
     */
    onRenderIcon?: IRenderFunction<IActivityItemProps>;
    /**
     * A renderer adds a time stamp. If not included, timeStamp is shown as plain text below the activity.
     */
    onRenderTimeStamp?: IRenderFunction<IActivityItemProps>;
    /**
     * Optional styling for the elements within the Activity Item.
     */
    styles?: IActivityItemStyles;
    /**
     * Element shown as a timestamp on this activity. If not included, no timestamp is shown.
     */
    timeStamp?: string | React.ReactNode[] | React.ReactNode;
    /**
     * Beacon color one
     */
    beaconColorOne?: string;
    /**
     * Beacon color two
     */
    beaconColorTwo?: string;
    /**
     * Enables/Disables the beacon that radiates
     * from the center of the center of the activity icon. Signals an activity has started.
     * @defaultvalue false
     */
    animateBeaconSignal?: boolean;
}

/**
 * {@docCategory ActivityItem}
 */
export declare interface IActivityItemStyles {
    /**
     * Styles applied to the root activity item container.
     */
    root?: IStyle;
    /**
     * Styles applied to the root activity item container.
     */
    pulsingBeacon?: IStyle;
    /**
     * Styles applied to the main container of the activity's description.
     */
    activityContent?: IStyle;
    /**
     * Styles applied to the persona of the user that did this activity.
     */
    activityPersona?: IStyle;
    /**
     * Styles applied to the activity's description.
     */
    activityText?: IStyle;
    /**
     * Styles applied to the icon indicating the type of the activity. Only shown when personas are unavailable.
     */
    activityTypeIcon?: IStyle;
    /**
     * Styles applied to the text of comments.
     */
    commentText?: IStyle;
    /**
     * Styles applied to personas when two users are involved in a single activity.
     */
    doublePersona?: IStyle;
    /**
     * Styles applied to root in the compact variant.
     */
    isCompactRoot?: IStyle;
    /**
     * Styles applied to personas and icons in the compact variant.
     */
    isCompactIcon?: IStyle;
    /**
     * Styles applied to main text container in the compact variant.
     */
    isCompactContent?: IStyle;
    /**
     * Styles applied to personas in the compact variant.
     */
    isCompactPersona?: IStyle;
    /**
     * Styles applied to a wrapper around personas in the compact variant.
     */
    isCompactPersonaContainer?: IStyle;
    /**
     * Styles applied to the container of the persona image or activity type icon.
     */
    personaContainer?: IStyle;
    /**
     * Styles applied to the timestamp at the end of each activity item.
     */
    timeStamp?: IStyle;
    /**
     * Styles applied to the timestamp in compact mode.
     * This can occur if a host overrides the render behavior to force the timestamp to render.
     */
    isCompactTimeStamp?: IStyle;
}

/**
 * {@docCategory Announced}
 */
export declare interface IAnnouncedProps extends React.Props<AnnouncedBase>, React.HTMLAttributes<HTMLDivElement> {
    /**
     * The status message provided as screen reader output
     */
    message?: string;
    /**
     * Priority with which the screen reader should treat updates to this region
     * @default 'polite'
     */
    'aria-live'?: 'off' | 'polite' | 'assertive';
    /**
     * Optionally render the root of this component as another component type or primitive.
     * The custom type **must** preserve any children or native props passed in.
     * @default 'div'
     */
    as?: React.ElementType;
    /** Call to provide customized styling that will layer on top of the variant rules. */
    styles?: IStyleFunctionOrObject<{}, IAnnouncedStyles>;
}

/**
 * {@docCategory Announced}
 */
export declare type IAnnouncedStyleProps = Pick<IAnnouncedProps, 'className'>;

/**
 * {@docCategory Announced}
 */
export declare interface IAnnouncedStyles {
    /**
     * Style override for the root element.
     */
    root: IStyle;
    /**
     * Style override for the screen reader text.
     */
    screenReaderText: IStyle;
}

/**
 * {@docCategory Autofill}
 */
export declare interface IAutofill {
    /**
     * The current index of the cursor in the input area. Returns -1 if the input element
     * is not ready.
     */
    cursorLocation: number | null;
    /**
     * A boolean for whether or not there is a value selected in the input area.
     */
    isValueSelected: boolean;
    /**
     * The current text value that the user has entered.
     */
    value: string;
    /**
     * The current index of where the selection starts. Returns -1 if the input element
     * is not ready.
     */
    selectionStart: number | null;
    /**
     * the current index of where the selection ends. Returns -1 if the input element
     * is not ready.
     */
    selectionEnd: number | null;
    /**
     * The current input element.
     */
    inputElement: HTMLInputElement | null;
    /**
     * Focus the input element.
     */
    focus(): void;
    /**
     * Clear all text in the input. Sets value to '';
     */
    clear(): void;
}

/**
 * {@docCategory Autofill}
 */
export declare interface IAutofillProps extends React.InputHTMLAttributes<HTMLInputElement | Autofill> {
    /**
     * Gets the components ref.
     */
    componentRef?: IRefObject<IAutofill>;
    /**
     * The suggested autofill value that will display.
     */
    suggestedDisplayValue?: string;
    /**
     * A callback for when the current input value changes. Called after
     * the state has been changed.
     *
     * @param composing - true if the change event was triggered while the
     * inner input was in the middle of a multi-character composition.
     * (for example, jp-hiragana IME input)
     */
    onInputValueChange?: (newValue?: string, composing?: boolean) => void;
    /**
     * When the user uses left arrow, right arrow, clicks, or deletes text autofill is disabled
     * Since the user has taken control. It is automatically re-enabled when the user enters text and the
     * cursor is at the end of the text in the input box. This specifies other key presses that will re-enabled.
     * autofill.
     * @defaultvalue [KeyCodes.down, KeyCodes.up]
     */
    enableAutofillOnKeyPress?: KeyCodes[];
    /**
     * The default value to be visible. This is different from placeholder
     * because it actually sets the current value of the picker
     * Note: This will only be set upon component creation
     * and will not update with subsequent prop updates.
     */
    defaultVisibleValue?: string;
    /**
     * Handler for checking and updating the value if needed
     * in componentWillReceiveProps
     *
     * @deprecated use standard input Value prop instead if
     * the autofill should act like a controlled component
     * @returns - the updated value to set, if needed
     */
    updateValueInWillReceiveProps?: () => string | null;
    /**
     * Handler for checking if the full value of the input should
     * be selected in componentDidUpdate
     *
     * @returns - should the full value of the input be selected?
     */
    shouldSelectFullInputValueInComponentDidUpdate?: () => boolean;
    /**
     * A callback used to modify the input string.
     * Do not use this to return a string anymore. Instead pass in
     * value like you would any other controlled component.
     * Called before the state has been updated.
     *
     * @param composing - true if the change event was triggered while the
     * inner input was in the middle of a multi-character composition.
     * (for example, jp-hiragana IME input)
     */
    onInputChange?: (value: string, composing: boolean) => string | void;
    /**
     * Should the value of the input be selected? True if we're focused on our input, false otherwise.
     * We need to explicitly not select the text in the autofill if we are no longer focused.
     * In IE11, selecting a input will also focus the input, causing other element's focus to be stolen.
     */
    preventValueSelection?: boolean;
}

export declare interface IAutofillState {
    inputValue: string;
}

/**
 * {@docCategory CompatButton}
 */
declare interface IBaseButtonProps extends IButtonProps {
    baseClassName?: string;
    variantClassName?: string;
}

/**
 * {@docCategory CompatButton}
 */
declare interface IBaseButtonState {
    menuHidden: boolean;
}

/**
 * Interface containing props common for all types of cards.
 */
declare interface IBaseCardProps<TComponent, TStyles, TStyleProps> extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the TComponent interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<TComponent>;
    /**
     * Additional CSS class(es) to apply to the Card content wrapper div.
     */
    className?: string;
    /**
     * How the element should be positioned
     * @defaultvalue DirectionalHint.bottomLeftEdge
     */
    directionalHint?: DirectionalHint;
    /**
     * Make callout content show on the set side
     * @defaultvalue true
     */
    directionalHintFixed?: boolean;
    /**
     * Focus on first element by default on card or not
     */
    firstFocus?: boolean;
    /**
     * The gap between the card and the target
     * @defaultvalue 0
     */
    gapSpace?: number;
    /**
     * Callback upon focus or mouse enter event
     */
    onEnter?: (ev?: any) => void;
    /**
     * Callback upon blur or mouse leave event
     */
    onLeave?: (ev?: any) => void;
    /**
     *  Item to be returned with onRender functions
     */
    renderData?: any;
    /**
     * Custom styles for this component
     */
    styles?: IStyleFunctionOrObject<TStyleProps, {
        [P in keyof TStyles]: IStyle;
    }>;
    /**
     * Element to anchor the card to.
     */
    targetElement?: HTMLElement;
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;
    /**
     * Trap focus or not
     */
    trapFocus?: boolean;
    /**
     * Custom overriding props to Callout
     */
    calloutProps?: ICalloutProps;
}

/**
 * Interface containing styleProps common for all types of cards.
 */
declare interface IBaseCardStyleProps {
    /**
     * ClassName to inject into wrapper div of the content.
     */
    className?: string;
    /**
     * Theme provided by High-Order Component.
     */
    theme: ITheme;
}

/**
 * Interface containing style sections common for all types of cards.
 */
declare interface IBaseCardStyles {
    /**
     * Style for the root element in the default enabled, non-toggled state.
     */
    root?: IStyle;
}

export declare interface IBaseExtendedPicker<T> {
    /** Forces the picker to resolve */
    forceResolve?: () => void;
    /** Gets the current value of the input. */
    items: T[] | undefined;
    /** Sets focus to the input. */
    focus: () => void;
}

export declare interface IBaseExtendedPickerProps<T> {
    /**
     * Ref of the component
     */
    componentRef?: IRefObject<IBaseExtendedPicker<T>>;
    /**
     * Header/title element for the picker
     */
    headerComponent?: JSX.Element;
    /**
     * Initial items that have already been selected and should appear in the people picker.
     */
    defaultSelectedItems?: T[];
    /**
     * A callback for when the selected list of items changes.
     */
    onChange?: (items?: T[]) => void;
    /**
     * A callback for when text is pasted into the input
     */
    onPaste?: (pastedText: string) => T[];
    /**
     * A callback for when the user put focus on the picker
     */
    onFocus?: React.FocusEventHandler<HTMLInputElement | Autofill>;
    /**
     * A callback for when the user moves the focus away from the picker
     */
    onBlur?: React.FocusEventHandler<HTMLInputElement | Autofill>;
    /**
     * ClassName for the picker.
     */
    className?: string;
    /**
     * Function that specifies how the floating picker will appear.
     */
    onRenderFloatingPicker: React.ComponentType<IBaseFloatingPickerProps<T>>;
    /**
     * Function that specifies how the floating picker will appear.
     */
    onRenderSelectedItems: React.ComponentType<IBaseSelectedItemsListProps<T>>;
    /**
     * Floating picker properties
     */
    floatingPickerProps: IBaseFloatingPickerProps<T>;
    /**
     * Selected items list properties
     */
    selectedItemsListProps: IBaseSelectedItemsListProps<T>;
    /**
     * Autofill input native props
     * @defaultvalue undefined
     */
    inputProps?: IInputProps;
    /**
     * Flag for disabling the picker.
     * @defaultvalue false
     */
    disabled?: boolean;
    /**
     * Restrict the amount of selectable items.
     * @defaultvalue undefined
     */
    itemLimit?: number;
    /**
     * A callback to process a selection after the user selects a suggestion from the picker.
     * The returned item will be added to the selected items list
     */
    onItemSelected?: (selectedItem?: T) => T | PromiseLike<T>;
    /**
     * A callback on when an item was added to the selected item list
     */
    onItemAdded?: (addedItem: T) => void;
    /**
     * A callback on when an item or items were removed from the selected item list
     */
    onItemsRemoved?: (removedItems: T[]) => void;
    /**
     * If using as a controlled component use selectedItems here instead of the SelectedItemsList
     */
    selectedItems?: T[];
    /**
     * If using as a controlled component use suggestionItems here instead of FloatingPicker
     */
    suggestionItems?: T[];
    /**
     * Focus zone props
     */
    focusZoneProps?: IFocusZoneProps;
    /**
     * Current rendered query string that correlates to the rendered result
     **/
    currentRenderedQueryString?: string;
}

export declare interface IBaseExtendedPickerState<T> {
    queryString: string | null;
}

export declare interface IBaseFloatingPicker {
    /** Whether the suggestions are shown */
    isSuggestionsShown: boolean;
    /** On queryString changed */
    onQueryStringChanged: (input: string) => void;
    /** Hides the picker */
    hidePicker: () => void;
    /** Shows the picker
     * @param updateValue - Optional param to indicate whether to update the query string
     */
    showPicker: (updateValue?: boolean) => void;
    /** Gets the suggestions */
    suggestions: any[];
    /** Gets the input text */
    inputText: string;
}

export declare interface IBaseFloatingPickerProps<T> extends React.ClassAttributes<any> {
    componentRef?: IRefObject<IBaseFloatingPicker>;
    /**
     * The suggestions store
     */
    suggestionsStore: SuggestionsStore<T>;
    /**
     * The suggestions to show on zero query, return null if using as a controlled component
     */
    onZeroQuerySuggestion?: (selectedItems?: T[]) => T[] | PromiseLike<T[]> | null;
    /**
     * The input element to listen on events
     */
    inputElement?: HTMLInputElement | null;
    /**
     * Function that specifies how an individual suggestion item will appear.
     */
    onRenderSuggestionsItem?: (props: T, itemProps: ISuggestionItemProps<T>) => JSX.Element;
    /**
     * A callback for what should happen when a person types text into the input.
     * Returns the already selected items so the resolver can filter them out.
     * If used in conjunction with resolveDelay this will only kick off after the delay throttle.
     * Return null if using as a controlled component
     */
    onResolveSuggestions: (filter: string, selectedItems?: T[]) => T[] | PromiseLike<T[]> | null;
    /**
     * A callback for when the input has been changed
     */
    onInputChanged?: (filter: string) => void;
    /**
     * The delay time in ms before resolving suggestions, which is kicked off when input has been changed.
     * e.g. If a second input change happens within the resolveDelay time, the timer will start over.
     * Only until after the timer completes will onResolveSuggestions be called.
     */
    resolveDelay?: number;
    /**
     * A callback for when a suggestion is clicked
     */
    onChange?: (item: T) => void;
    /**
     * ClassName for the picker.
     */
    className?: string;
    /**
     * The properties that will get passed to the Suggestions component.
     */
    pickerSuggestionsProps?: IBaseFloatingPickerSuggestionProps;
    /**
     * The properties that will get passed to the Callout component.
     */
    pickerCalloutProps?: ICalloutProps;
    /**
     * A callback for when an item is removed from the suggestion list
     */
    onRemoveSuggestion?: (item: T) => void;
    /**
     * A function used to validate if raw text entered into the well can be added
     */
    onValidateInput?: (input: string) => boolean;
    /**
     * The text to display while searching for more results in a limited suggestions list
     */
    searchingText?: ((props: {
        input: string;
    }) => string) | string;
    /**
     * Function that specifies how arbitrary text entered into the well is handled.
     */
    createGenericItem?: (input: string, isValid: boolean) => ISuggestionModel<T>;
    /**
     * The callback that should be called to see if the force resolve command should be shown
     */
    showForceResolve?: () => boolean;
    /**
     * The items that the base picker should currently display as selected.
     * If this is provided then the picker will act as a controlled component.
     */
    selectedItems?: T[];
    /**
     * A callback to get text from an item. Used to autofill text in the pickers.
     */
    getTextFromItem?: (item: T, currentValue?: string) => string;
    /**
     * Width for the suggestions callout
     */
    calloutWidth?: number;
    /**
     * The callback that should be called when the suggestions are shown
     */
    onSuggestionsShown?: () => void;
    /**
     * The callback that should be called when the suggestions are hidden
     */
    onSuggestionsHidden?: () => void;
    /**
     * If using as a controlled component, the items to show in the suggestion list
     */
    suggestionItems?: T[];
}

export declare interface IBaseFloatingPickerState {
    queryString: string;
    suggestionsVisible?: boolean;
    didBind: boolean;
}

/**
 * Props which are passed on to the inner Suggestions component
 */
export declare type IBaseFloatingPickerSuggestionProps = Pick<ISuggestionsControlProps<any>, 'shouldSelectFirstItem' | 'headerItemsProps' | 'footerItemsProps' | 'showRemoveButtons'>;

/**
 * BasePicker component.
 * {@docCategory Pickers}
 */
export declare interface IBasePicker<T> {
    /** Gets the current value of the input. */
    items: T[] | undefined;
    /** Sets focus to the focus zone. */
    focus: () => void;
    /** Set focus to the input */
    focusInput: () => void;
    /**
     * When called, will take the currently selected suggestion and complete it.
     * If called with forceComplete true, it will attempt to force the current suggestion
     * to complete, must provide both createGenericSuggestion, so the text can be turned into
     * an object in the right shape, and onValidateInput, so the object knows if it's correct or not.
     */
    completeSuggestion: (forceComplete?: boolean) => void;
}

/**
 * Type T is the type of the item that is displayed
 * and searched for by the picker. For example, if the picker is
 * displaying persona's then type T could either be of Persona or IPersona props
 * {@docCategory Pickers}
 */
export declare interface IBasePickerProps<T> extends React.Props<any> {
    /**
     * Optional callback to access the IBasePicker interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IBasePicker<T>>;
    /**
     * Function that specifies how the selected item will appear.
     */
    onRenderItem?: (props: IPickerItemProps<T>) => JSX.Element;
    /**
     * Function that specifies how an individual suggestion item will appear.
     */
    onRenderSuggestionsItem?: (props: T, itemProps: ISuggestionItemProps<T>) => JSX.Element;
    /**
     * A callback for what should happen when a person types text into the input.
     * Returns the already selected items so the resolver can filter them out.
     * If used in conjunction with resolveDelay this will only kick off after the delay throttle.
     */
    onResolveSuggestions: (filter: string, selectedItems?: T[]) => T[] | PromiseLike<T[]>;
    /**
     * The delay time in ms before resolving suggestions, which is kicked off when input has been changed.
     * e.g. If a second input change happens within the resolveDelay time, the timer will start over.
     * Only until after the timer completes will onResolveSuggestions be called.
     */
    resolveDelay?: number;
    /**
     * A callback for what should happen when a user clicks within the input area.
     * @deprecated Please use onEmptyResolveSuggestions instead, as the suggestions aren't about
     * setting focus as they are about resolving suggestions when there is no input.
     */
    onEmptyInputFocus?: (selectedItems?: T[]) => T[] | PromiseLike<T[]>;
    /**
     * A callback for what should happen when suggestions are shown without
     * input provided.
     * Returns the already selected items so the resolver can filter them out.
     * If used in conjunction with resolveDelay this will only kick off after the delay throttle.
     */
    onEmptyResolveSuggestions?: (selectedItems?: T[]) => T[] | PromiseLike<T[]>;
    /**
     * Initial items that have already been selected and should appear in the people picker.
     */
    defaultSelectedItems?: T[];
    /**
     * A callback for when the selected list of items changes.
     */
    onChange?: (items?: T[]) => void;
    /**
     * A callback for when the user put focus on the picker
     * @deprecated Use `inputProps.onFocus` instead
     */
    onFocus?: React.FocusEventHandler<HTMLInputElement | Autofill>;
    /**
     * A callback for when the user moves the focus away from the picker
     */
    onBlur?: React.FocusEventHandler<HTMLInputElement | Autofill>;
    /**
     * A callback to get text from an item. Used to autofill text in the pickers.
     */
    getTextFromItem?: (item: T, currentValue?: string) => string;
    /**
     * A callback that gets the rest of the results when a user clicks get more results.
     */
    onGetMoreResults?: (filter: string, selectedItems?: T[]) => T[] | PromiseLike<T[]>;
    /**
     * ClassName for the picker.
     */
    className?: string;
    /**
     * The properties that will get passed to the Suggestions component.
     */
    pickerSuggestionsProps?: IBasePickerSuggestionsProps;
    /**
     * The properties that will get passed to the Callout component.
     */
    pickerCalloutProps?: ICalloutProps;
    /**
     * AutoFill input native props
     * @defaultvalue undefined
     */
    inputProps?: IInputProps;
    /**
     * A callback for when an item is removed from the suggestion list
     */
    onRemoveSuggestion?: (item: T) => void;
    /**
     * A function used to validate if raw text entered into the well can be added into the selected items list
     */
    onValidateInput?: (input: string) => ValidationState;
    /**
     * The text to display while searching for more results in a limited suggestions list
     */
    searchingText?: ((props: {
        input: string;
    }) => string) | string;
    /**
     * Flag for disabling the picker.
     * @defaultvalue false
     */
    disabled?: boolean;
    /**
     * Restrict the amount of selectable items.
     * @defaultvalue undefined
     */
    itemLimit?: number;
    /**
     * Function that specifies how arbitrary text entered into the well is handled.
     */
    createGenericItem?: (input: string, ValidationState: ValidationState) => ISuggestionModel<T> | T;
    /**
     * Aria label for the "X" button in the selected item component.
     * @defaultvalue ''
     */
    removeButtonAriaLabel?: string;
    /**
     * Optional aria-label that will be placed on the element that has the role "combobox"
     * attached. Additionally aria-labelled by will get added to the supporting input element contained
     * with in the combobox container
     */
    ['aria-label']?: string;
    /**
     * A callback to process a selection after the user selects something from the picker. If the callback returns null,
     * the item will not be added to the picker.
     */
    onItemSelected?: (selectedItem?: T) => T | PromiseLike<T> | null;
    /**
     * The items that the base picker should currently display as selected.
     * If this is provided then the picker will act as a controlled component.
     */
    selectedItems?: T[];
    /**
     * A callback used to modify the input string.
     */
    onInputChange?: (input: string) => string;
    /**
     * A callback to override the default behavior of adding the selected suggestion on dismiss. If it returns true or
     * nothing, the selected item will be added on dismiss. If false, the selected item will not be added on dismiss.
     *
     */
    onDismiss?: (ev?: any, selectedItem?: T) => boolean | void;
    /**
     * Adds an additional alert for the currently selected suggestion. This prop should be set to true for IE11 and below,
     * as it enables proper screen reader behavior for each suggestion (since aria-activedescendant does not work
     * with IE11). It should not be set for modern browsers (Edge, Chrome).
     * @defaultvalue false
     */
    enableSelectedSuggestionAlert?: boolean;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IBasePickerStyleProps, IBasePickerStyles>;
    /**
     * Theme provided by styled() function.
     */
    theme?: ITheme;
}

export declare interface IBasePickerState {
    items?: any;
    suggestedDisplayValue?: string;
    moreSuggestionsAvailable?: boolean;
    isFocused?: boolean;
    isSearching?: boolean;
    isMostRecentlyUsedVisible?: boolean;
    suggestionsVisible?: boolean;
    suggestionsLoading?: boolean;
    isResultsFooterVisible?: boolean;
    selectedIndices?: number[];
}

/**
 * The props needed to construct styles.
 * {@docCategory Pickers}
 */
export declare type IBasePickerStyleProps = Pick<IBasePickerProps<any>, 'theme' | 'className' | 'disabled'> & {
    /** Whether text style area is focused */
    isFocused?: boolean;
    /** Optional pickerInput className */
    inputClassName?: string;
};

/**
 * Represents the stylable areas of the control.
 * {@docCategory Pickers}
 */
export declare interface IBasePickerStyles {
    /** Root element of any picker extending from BasePicker (wraps all the elements). */
    root: IStyle;
    /**
     * Refers to the elements already selected (picked) wrapped by `itemsWrapper` along with the input to type
     * a new selection.
     */
    text: IStyle;
    /** Refers to the items already selected (picked). */
    itemsWrapper: IStyle;
    /** Refers to the input were to type new selections (picks). */
    input: IStyle;
    /** Refers to helper element used for accessibility tools (hidden from view on screen). */
    screenReaderText: IStyle;
}

/**
 * Subset of picker options that may be legally passed through a picker to its
 * internal Suggestions component.
 * {@docCategory Pickers}
 */
export declare interface IBasePickerSuggestionsProps<T = any> extends Pick<ISuggestionsProps<T>, 'onRenderNoResultFound' | 'suggestionsHeaderText' | 'mostRecentlyUsedHeaderText' | 'noResultsFoundText' | 'className' | 'suggestionsClassName' | 'suggestionsItemClassName' | 'searchForMoreText' | 'forceResolveText' | 'loadingText' | 'searchingText' | 'resultsFooterFull' | 'resultsFooter' | 'resultsMaximumNumber' | 'showRemoveButtons' | 'suggestionsAvailableAlertText' | 'suggestionsContainerAriaLabel' | 'showForceResolve'> {
}

export declare interface IBaseSelectedItemsList<T> {
    /** Gets the current value of the input. */
    items: T[] | undefined;
    addItems: (items: T[]) => void;
}

export declare interface IBaseSelectedItemsListProps<T> extends React.ClassAttributes<any> {
    componentRef?: IRefObject<IBaseSelectedItemsList<T>>;
    /**
     * The selection
     */
    selection?: Selection;
    /**
     * A callback for when items are copied
     */
    onCopyItems?: (items: T[]) => string;
    /**
     * Function that specifies how the selected item will appear.
     */
    onRenderItem?: (props: ISelectedItemProps<T>) => JSX.Element;
    /**
     * Initial items that have already been selected and should appear in the people picker.
     */
    defaultSelectedItems?: T[];
    /**
     * A callback for when the selected list of items changes.
     */
    onChange?: (items?: T[]) => void;
    /**
     * Function that specifies how arbitrary text entered into the well is handled.
     */
    createGenericItem?: (input: string, ValidationState: ValidationState) => ISuggestionModel<T>;
    /**
     * A callback to process a selection after the user selects something from the picker.
     */
    onItemSelected?: (selectedItem?: T | T[]) => T | PromiseLike<T> | T[] | PromiseLike<T[]>;
    /**
     * The items that the base picker should currently display as selected.
     * If this is provided then the picker will act as a controlled component.
     */
    selectedItems?: T[];
    /**
     * Aria label for the 'X' button in the selected item component.
     * @defaultvalue ''
     */
    removeButtonAriaLabel?: string;
    /**
     * A callback when an item is deleted
     * @deprecated Use `onItemsDeleted` instead.
     */
    onItemDeleted?: (deletedItem: T) => void;
    /**
     * A callback when and item or items are deleted
     */
    onItemsDeleted?: (deletedItems: T[]) => void;
    /**
     * A callback on whether this item can be deleted
     */
    canRemoveItem?: (item: T) => boolean;
}

export declare interface IBaseSelectedItemsListState<T> {
    items: T[];
}

/**
 * {@docCategory CompatButton}
 */
declare interface IButton {
    /**
     * Sets focus to the button.
     */
    focus: () => void;
    /**
     * If there is a menu associated with this button and it is visible, this will dismiss the menu
     */
    dismissMenu: () => void;
    /**
     * If there is a menu associated with this button and it is visible, this will open the menu.
     * Params are optional overrides to the ones defined in `menuProps` to apply to just this instance of
     * opening the menu.
     *
     * @param shouldFocusOnContainer - override to the ContextualMenu shouldFocusOnContainer prop.
     * BaseButton implementation defaults to 'undefined'.
     * @param shouldFocusOnMount - override to the ContextualMenu shouldFocusOnMount prop. BaseButton implementation
     * defaults to `true`.
     */
    openMenu: (shouldFocusOnContainer?: boolean, shouldFocusOnMount?: boolean) => void;
}

declare interface IButtonClassNames {
    root?: string;
    flexContainer?: string;
    textContainer?: string;
    icon?: string;
    label?: string;
    menuIcon?: string;
    description?: string;
    screenReaderText?: string;
}

export declare interface IButtonGrid {
}

export declare interface IButtonGridCellProps<T> {
    /**
     * The option that will be made available to the user
     */
    item: T;
    /**
     * Arbitrary unique string associated with this option
     */
    id: string;
    /**
     * Optional, if the this option should be disabled
     */
    disabled?: boolean;
    /**
     * Optional, if the cell is currently selected
     */
    selected?: boolean;
    /**
     * The on click handler
     */
    onClick?: (item: T) => void;
    /**
     * The render callback to handle rendering the item
     */
    onRenderItem: (item: T) => JSX.Element;
    /**
     * Optional, the onHover handler
     */
    onHover?: (item?: T) => void;
    /**
     * Optional, the onFocus handler
     */
    onFocus?: (item: T) => void;
    /**
     * The accessible role for this option
     */
    role?: string;
    /**
     * Optional, className(s) to apply
     */
    className?: string;
    /**
     * Optional, the CSS class used for when the cell is disabled
     */
    cellDisabledStyle?: string[];
    /**
     * Optional, the CSS class used for when the cell is selected
     */
    cellIsSelectedStyle?: string[];
    /**
     * Index for this option
     */
    index?: number;
    /**
     * The label for this item.
     * Visible text if this item is a header,
     * tooltip if is this item is normal
     */
    label?: string;
    /**
     * Method to provide the classnames to style a button.
     * The default value for this prop is the getClassnames func
     * defined in BaseButton.classnames.
     */
    getClassNames?: (theme: ITheme, className: string, variantClassName: string, iconClassName: string | undefined, menuIconClassName: string | undefined, disabled: boolean, checked: boolean, expanded: boolean, isSplit: boolean | undefined) => IButtonClassNames;
    /**
     * Optional, mouseEnter handler.
     * @returns true if the event should be processed, false otherwise
     */
    onMouseEnter?: (ev: React.MouseEvent<HTMLButtonElement>) => boolean;
    /**
     * Optional, mouseMove handler
     * @returns true if the event should be processed, false otherwise
     */
    onMouseMove?: (ev: React.MouseEvent<HTMLButtonElement>) => boolean;
    /**
     * Optional, mouseLeave handler
     */
    onMouseLeave?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Optional, onWheel handler
     */
    onWheel?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    /**
     * Optional, onkeydown handler
     */
    onKeyDown?: (ev: React.KeyboardEvent<HTMLButtonElement>) => void;
}

export declare interface IButtonGridProps extends React.TableHTMLAttributes<HTMLTableElement>, React.RefAttributes<HTMLElement> {
    /**
     * Gets the component ref.
     */
    componentRef?: IRefObject<IButtonGrid>;
    /**
     * Items to display in a ButtonGrid with the specified number of columns
     */
    items: any[];
    /**
     * The number of columns
     */
    columnCount: number;
    /**
     * Custom renderer for the individual items
     */
    onRenderItem: (item: any, index: number) => JSX.Element;
    /**
     * Whether focus should cycle back to the beginning once the user navigates past the end (and vice versa).
     * Only relevant if `doNotContainWithinFocusZone` is not true.
     */
    shouldFocusCircularNavigate?: boolean;
    /**
     * If false (the default), the ButtonGrid is contained inside a FocusZone.
     * If true, a FocusZone is not used.
     * @default false
     */
    doNotContainWithinFocusZone?: boolean;
    /**
     * Class name for the FocusZone container for the ButtonGrid.
     * @deprecated Use `styles.focusedContainer` to define styling for the focus zone container
     */
    containerClassName?: string;
    /**
     * Handler for when focus leaves the ButtonGrid.
     */
    onBlur?: () => void;
    /**
     * Position this ButtonGrid is in the parent set (index in a parent menu, for example)
     */
    ariaPosInSet?: number;
    /**
     * @deprecated Use `ariaPosInSet`
     */
    positionInSet?: number;
    /**
     * Size of the parent set (size of parent menu, for example)
     */
    ariaSetSize?: number;
    /**
     * @deprecated Use `ariaSetSize`
     */
    setSize?: number;
    /**
     * Theme to apply to the component.
     */
    theme?: ITheme;
    /**
     * Optional styles for the component.
     */
    styles?: IStyleFunctionOrObject<IButtonGridStyleProps, IButtonGridStyles>;
}

/**
 * Properties required to build the styles for the ButtonGrid component.
 */
export declare interface IButtonGridStyleProps {
    /**
     * Theme to apply to the ButtonGrid
     */
    theme: ITheme;
}

/**
 * Styles for the ButtonGrid Component.
 */
export declare interface IButtonGridStyles {
    /**
     * Style for the table container of a ButtonGrid.
     */
    root: IStyle;
    /**
     * Style for the table cells of the ButtonGrid.
     */
    tableCell: IStyle;
    /**
     * Style for the FocusZone container for the ButtonGrid.
     */
    focusedContainer?: IStyle;
}

/**
 * {@docCategory CompatButton}
 */
declare interface IButtonProps extends React.AllHTMLAttributes<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement | BaseButton | Button | HTMLSpanElement> {
    /**
     * Optional callback to access the IButton interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IButton>;
    /**
     * Optional callback to access the root DOM element.
     * @deprecated Temporary solution which will be replaced with ref in the V8 release.
     */
    elementRef?: React.Ref<HTMLElement>;
    /**
     * If provided, this component will be rendered as an anchor.
     * @defaultvalue ElementType.anchor
     */
    href?: string;
    /**
     * Changes the visual presentation of the button to be emphasized (if defined)
     * @defaultvalue false
     */
    primary?: boolean;
    /**
     * Unique id to identify the item. Typically a duplicate of key value.
     */
    uniqueId?: string | number;
    /**
     * Whether the button is disabled
     */
    disabled?: boolean;
    /**
     * Whether the button can have focus in disabled mode
     */
    allowDisabledFocus?: boolean;
    /**
     * If set to true and if this is a splitButton (split == true) then the primary action of a split button is disabled.
     */
    primaryDisabled?: boolean;
    /**
     * Custom styling for individual elements within the button DOM.
     */
    styles?: IButtonStyles;
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;
    /**
     * Whether the button is checked
     */
    checked?: boolean;
    /**
     * Whether button is a toggle button with distinct on and off states. This should be true for buttons that permanently
     * change state when a press event finishes, such as a volume mute button.
     */
    toggle?: boolean;
    /**
     * If provided, additional class name to provide on the root element.
     */
    className?: string;
    /**
     * The aria label of the button for the benefit of screen readers.
     */
    ariaLabel?: string;
    /**
     * Detailed description of the button for the benefit of screen readers.
     *
     * Besides the compound button, other button types will need more information provided to screen reader.
     */
    ariaDescription?: string;
    /**
     * If provided and is true it adds an 'aria-hidden' attribute instructing screen readers to ignore the element.
     */
    ariaHidden?: boolean;
    /**
     * Text to render button label. If text is supplied, it will override any string in button children.
     * Other children components will be passed through after the text.
     */
    text?: string;
    /**
     * The props for the icon shown in the button.
     */
    iconProps?: IIconProps;
    /**
     * Props for button menu. Providing this will default to showing the menu icon. See menuIconProps for overriding
     * how the default icon looks. Providing this in addition of onClick and setting the split property to true will
     * render a SplitButton.
     */
    menuProps?: IContextualMenuProps;
    /**
     * Callback that runs after Button's contextual menu was closed (removed from the DOM)
     */
    onAfterMenuDismiss?: () => void;
    /**
     * If set to true, and if menuProps and onClick are provided, the button will render as a SplitButton.
     * @defaultvalue false
     */
    split?: boolean;
    /**
     * The props for the icon shown when providing a menu dropdown.
     */
    menuIconProps?: IIconProps;
    /**
     * Accessible label for the dropdown chevron button if this button is split.
     */
    splitButtonAriaLabel?: string;
    /**
     * Optional callback when menu is clicked.
     */
    onMenuClick?: (ev?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, button?: IButtonProps) => void;
    /**
     * Custom render function for the icon
     */
    onRenderIcon?: IRenderFunction<IButtonProps>;
    /**
     * Custom render function for the label text.
     */
    onRenderText?: IRenderFunction<IButtonProps>;
    /**
     * Custom render function for the desciption text.
     */
    onRenderDescription?: IRenderFunction<IButtonProps>;
    /**
     * Custom render function for the aria description element.
     */
    onRenderAriaDescription?: IRenderFunction<IButtonProps>;
    /**
     * Custom render function for rendering the button children.
     */
    onRenderChildren?: IRenderFunction<IButtonProps>;
    /**
     * Custom render function for button menu icon
     */
    onRenderMenuIcon?: IRenderFunction<IButtonProps>;
    /**
     * Deprecated at v6.3.2, to be removed at \>= v7.0.0. Use `menuAs` instead.
     * @deprecated Use `menuAs` instead.
     */
    onRenderMenu?: IRenderFunction<IContextualMenuProps>;
    /**
     * Render a custom menu in place of the normal one.
     */
    menuAs?: IComponentAs<IContextualMenuProps>;
    /**
     * Description of the action this button takes.
     * Only used for compound buttons
     */
    secondaryText?: string;
    /**
     * Deprecated at v1.2.3, to be removed at \>= v2.0.0. Use specific button component instead.
     * @defaultvalue ButtonType.default
     * @deprecated Use specific button component instead.
     */
    buttonType?: ButtonType;
    /**
     * Deprecated at v0.56.2, to be removed at \>= v1.0.0. Just pass in button props instead.
     * they will be mixed into the button/anchor element rendered by the component.
     * @deprecated Use button props instead.
     */
    rootProps?: React.ButtonHTMLAttributes<HTMLButtonElement> | React.AnchorHTMLAttributes<HTMLAnchorElement>;
    /**
     * Any custom data the developer wishes to associate with the menu item.
     * Deprecated, use `checked` if setting state.
     * @deprecated unused, use `checked` if setting state.
     */
    toggled?: boolean;
    /**
     * Any custom data the developer wishes to associate with the menu item.
     */
    data?: any;
    /**
     * Method to provide the classnames to style a button.
     * The default value for this prop is the getClassnames func
     * defined in BaseButton.classnames.
     * @defaultvalue getBaseButtonClassNames
     */
    getClassNames?: (theme: ITheme, className: string, variantClassName: string, iconClassName: string | undefined, menuIconClassName: string | undefined, disabled: boolean, checked: boolean, expanded: boolean, hasMenu: boolean, isSplit: boolean | undefined, allowDisabledFocus: boolean) => IButtonClassNames;
    /**
     * Method to provide the classnames to style a button.
     * The default value for this prop is the getClassnames func
     * defined in BaseButton.classnames.
     * @defaultvalue getBaseSplitButtonClassNames
     */
    getSplitButtonClassNames?: (disabled: boolean, expanded: boolean, checked: boolean, allowDisabledFocus: boolean) => ISplitButtonClassNames;
    /**
     * Provides a custom KeyCode that can be used to open the button menu.
     * The default KeyCode is the down arrow.
     * A value of null can be provided to disable the key codes for opening the button menu.
     */
    menuTriggerKeyCode?: KeyCodes | null;
    /**
     * Optional keytip for this button
     */
    keytipProps?: IKeytipProps;
    /**
     * Menu will not be created or destroyed when opened or closed, instead it
     * will be hidden. This will improve perf of the menu opening but could potentially
     * impact overall perf by having more elements in the dom. Should only be used
     * when perf is important.
     * Note: This may increase the amount of time it takes for the button itself to mount.
     */
    persistMenu?: boolean;
    /**
     * If true, the persisted menu is rendered hidden when the button
     * initially mounts. Non-persisted menus will
     * not be in the component tree unless they are being shown
     *
     * Note: This increases the time the button will take to mount, but
     * can improve perceived menu open perf. when the user opens the menu.
     *
     * @defaultvalue undefined, equivalent to false
     *
     * @deprecated There is known bug in Edge when this prop is true where scrollbars
     * overlap with the content when a menu is first rendered hidden.
     * See: https://github.com/microsoft/fluentui/issues/9034
     * Please do not start using this. If you are already using this,
     * please make sure that you are doing so only in non-Edge browsers
     */
    renderPersistedMenuHiddenOnMount?: boolean;
    /**
     * Experimental prop that get passed into the menuButton that's rendered as part of
     * split button. Anything passed in will likely need to have accompanying
     * style changes.
     */
    splitButtonMenuProps?: IButtonProps;
    /**
     * Style for the description text if applicable (for compound buttons.)
     * Deprecated, use `secondaryText` instead.
     * @deprecated Use `secondaryText` instead.
     */
    description?: IStyle;
    /**
     * yet unknown docs
     */
    defaultRender?: any;
    /**
     * Optional props to be applied only to the primary action button of SplitButton and not to the
     * overall SplitButton container
     */
    primaryActionButtonProps?: IButtonProps;
}

/**
 * {@docCategory CompatButton}
 */
declare interface IButtonStyles {
    /**
     * Style for the root element in the default enabled, non-toggled state.
     */
    root?: IStyle;
    /**
     * Style override for the root element in a checked state, layered on top of the root style.
     */
    rootChecked?: IStyle;
    /**
     * Style override for the root element in a disabled state, layered on top of the root style.
     */
    rootDisabled?: IStyle;
    /**
     * Style override applied to the root on hover in the default, enabled, non-toggled state.
     */
    rootHovered?: IStyle;
    /**
     * Style override applied to the root on focus in the default, enabled, non-toggled state.
     */
    rootFocused?: IStyle;
    /**
     * Style override applied to the root on pressed in the default, enabled, non-toggled state.
     */
    rootPressed?: IStyle;
    /**
     * Style override applied to the root on when menu is expanded in the default, enabled, non-toggled state.
     */
    rootExpanded?: IStyle;
    /**
     * Style override applied to the root on hover in a checked, enabled state
     */
    rootCheckedHovered?: IStyle;
    /**
     * Style override applied to the root on pressed in a checked, enabled state
     */
    rootCheckedPressed?: IStyle;
    /**
     * Style override applied to the root on hover in a checked, disabled state
     */
    rootCheckedDisabled?: IStyle;
    /**
     * Style override applied to the root on hover in a expanded state on hover
     */
    rootExpandedHovered?: IStyle;
    /**
     * Style override for the root element when it has a menu button, layered on top of the root style.
     */
    rootHasMenu?: IStyle;
    /**
     * Style for the flexbox container within the root element.
     */
    flexContainer?: IStyle;
    /**
     * Style for the text container within the flexbox container element (and contains the text and description).
     */
    textContainer?: IStyle;
    /**
     * Style for the icon on the near side of the label.
     */
    icon?: IStyle;
    /**
     * Style for the icon on the near side of the label on hover.
     */
    iconHovered?: IStyle;
    /**
     * Style for the icon on the near side of the label when pressed.
     */
    iconPressed?: IStyle;
    /**
     * Style for the icon on the near side of the label when expanded.
     */
    iconExpanded?: IStyle;
    /**
     * Style for the icon on the near side of the label when expanded and hovered.
     */
    iconExpandedHovered?: IStyle;
    /**
     * Style override for the icon when the button is disabled.
     */
    iconDisabled?: IStyle;
    /**
     * Style override for the icon when the button is checked.
     */
    iconChecked?: IStyle;
    /**
     * Style for the text content of the button.
     */
    label?: IStyle;
    /**
     * Style override for the text content when the button is hovered.
     */
    labelHovered?: IStyle;
    /**
     * Style override for the text content when the button is disabled.
     */
    labelDisabled?: IStyle;
    /**
     * Style override for the text content when the button is checked.
     */
    labelChecked?: IStyle;
    /**
     * Style for the menu chevron.
     */
    menuIcon?: IStyle;
    /**
     * Style for the menu chevron on hover.
     */
    menuIconHovered?: IStyle;
    /**
     * Style for the menu chevron when pressed.
     */
    menuIconPressed?: IStyle;
    /**
     * Style for the menu chevron when expanded.
     */
    menuIconExpanded?: IStyle;
    /**
     * Style for the menu chevron when expanded and hovered.
     */
    menuIconExpandedHovered?: IStyle;
    /**
     * Style override for the menu chevron when the button is disabled.
     */
    menuIconDisabled?: IStyle;
    /**
     * Style override for the menu chevron when the button is checked.
     */
    menuIconChecked?: IStyle;
    /**
     * Style for the description text if applicable (for compound buttons.)
     */
    description?: IStyle;
    /**
     * Style for the description text if applicable (for compound buttons.)
     */
    secondaryText?: IStyle;
    /**
     * Style override for the description text when the button is hovered.
     */
    descriptionHovered?: IStyle;
    /**
     * Style for the description text when the button is pressed.
     */
    descriptionPressed?: IStyle;
    /**
     * Style override for the description text when the button is disabled.
     */
    descriptionDisabled?: IStyle;
    /**
     * Style override for the description text when the button is checked.
     */
    descriptionChecked?: IStyle;
    /**
     * Style override for the screen reader text.
     */
    screenReaderText?: IStyle;
    /**
     * Style override for the container div around a SplitButton element
     */
    splitButtonContainer?: IStyle;
    /**
     * Style for container div around a SplitButton element when the button is hovered.
     */
    splitButtonContainerHovered?: IStyle;
    /**
     * Style for container div around a SplitButton element when the button is focused.
     */
    splitButtonContainerFocused?: IStyle;
    /**
     * Style for container div around a SplitButton element when the button is checked.
     */
    splitButtonContainerChecked?: IStyle;
    /**
     * Style for container div around a SplitButton element when the button is checked and hovered.
     */
    splitButtonContainerCheckedHovered?: IStyle;
    /**
     * Style override for the container div around a SplitButton element in a disabled state
     */
    splitButtonContainerDisabled?: IStyle;
    /**
     * Style override for the divider element that appears between the button and menu button
     * for a split button.
     */
    splitButtonDivider?: IStyle;
    /**
     * Style override for the divider element that appears between the button and menu button
     * for a split button in a disabled state.
     */
    splitButtonDividerDisabled?: IStyle;
    /**
     * Style override for the SplitButton menu button
     */
    splitButtonMenuButton?: IStyle;
    /**
     * Style override for the SplitButton menu button element in a disabled state.
     */
    splitButtonMenuButtonDisabled?: IStyle;
    /**
     * Style override for the SplitButton menu button element in a checked state
     */
    splitButtonMenuButtonChecked?: IStyle;
    /**
     * Style override for the SplitButton menu button element in an expanded state
     */
    splitButtonMenuButtonExpanded?: IStyle;
    /**
     * Style override for the SplitButton menu icon element
     */
    splitButtonMenuIcon?: IStyle;
    /**
     * Style override for the SplitButton menu icon element in a disabled state
     */
    splitButtonMenuIconDisabled?: IStyle;
    /**
     * Style override for the SplitButton FlexContainer.
     */
    splitButtonFlexContainer?: IStyle;
}

export declare interface ICalloutBeakPositionedInfo extends IPositionedData {
    closestEdge: RectangleEdge;
}

/**
 * {@docCategory Callout}
 */
export declare interface ICalloutContentStyleProps {
    /**
     * Theme to apply to the calloutContent.
     */
    theme: ITheme;
    /**
     * Width for callout including borders.
     */
    calloutWidth?: number;
    /**
     * CSS class to apply to the callout.
     */
    className?: string;
    /**
     * Callout positioning data
     */
    positions?: ICalloutPositionedInfo;
    /**
     * Whether or not to clip content of the callout,
     * if it overflows vertically.
     */
    overflowYHidden?: boolean;
    /**
     * Background color for the beak and callout.
     */
    backgroundColor?: string;
    /**
     * Width of Callout beak
     */
    beakWidth?: number;
    /**
     * Max width for callout including borders.
     */
    calloutMaxWidth?: number;
    /**
     * Min width for callout including borders.
     */
    calloutMinWidth?: number;
}

/**
 * {@docCategory Callout}
 */
export declare interface ICalloutContentStyles {
    /**
     * Style for wrapper of Callout component.
     */
    container: IStyle;
    /**
     * Style for callout container root element.
     */
    root: IStyle;
    /**
     * Style for callout beak.
     */
    beak: IStyle;
    /**
     * Style for callout beak curtain.
     */
    beakCurtain: IStyle;
    /**
     * Style for content component of the callout.
     */
    calloutMain: IStyle;
}

export declare interface ICalloutPositionedInfo extends IPositionedData {
    beakPosition: ICalloutBeakPositionedInfo;
}

export declare interface ICalloutPositionProps extends IPositionProps {
    /**
     * The width of the beak.
     */
    beakWidth?: number;
    /**
     * Whether or not the beak is visible
     */
    isBeakVisible?: boolean;
}

/**
 * {@docCategory Callout}
 */
export declare interface ICalloutProps extends React.HTMLAttributes<HTMLDivElement>, React.RefAttributes<HTMLDivElement> {
    /**
     * The target that the Callout should try to position itself based on.
     * It can be either an Element a querySelector string of a valid Element
     * or a MouseEvent. If MouseEvent is given then the origin point of the event will be used.
     */
    target?: Target;
    /**
     * How the element should be positioned
     * @defaultvalue DirectionalHint.BottomAutoEdge
     */
    directionalHint?: DirectionalHint;
    /**
     * How the element should be positioned in RTL layouts.
     * If not specified, a mirror of the `directionalHint` alignment edge will be used instead.
     * This means that `DirectionalHint.BottomLeft` will change to `DirectionalHint.BottomRight` but
     * `DirectionalHint.LeftAuto` will not change.
     */
    directionalHintForRTL?: DirectionalHint;
    /**
     * The gap between the Callout and the target
     * @defaultvalue 0
     */
    gapSpace?: number;
    /**
     * The width of the beak.
     * @defaultvalue 16
     */
    beakWidth?: number;
    /**
     * Custom width for callout including borders. If value is 0, no width is applied.
     * @defaultvalue 0
     */
    calloutWidth?: number;
    /**
     * Maximum width for callout including borders. If value is 0, no width is applied.
     * @defaultvalue 0
     */
    calloutMaxWidth?: number;
    /**
     * Minimum width for callout including borders. If value is 0, no width is applied.
     * @defaultvalue 0
     */
    calloutMinWidth?: number;
    /**
     * The background color of the Callout in hex format ie. #ffffff.
     * @defaultvalue $ms-color-white
     */
    backgroundColor?: string;
    /**
     * The bounding rectangle (or callback that returns a rectangle) for which  the contextual menu can appear in.
     */
    bounds?: IRectangle | ((target?: Target, targetWindow?: Window) => IRectangle | undefined);
    /**
     * The minimum distance the callout will be away from the edge of the screen.
     *  @defaultvalue 8
     */
    minPagePadding?: number;
    /**
     * If true then the beak is visible. If false it will not be shown.
     * @defaultvalue true
     */
    isBeakVisible?: boolean;
    /**
     * If true then the callout will not dismiss on scroll
     * @defaultvalue false
     * @deprecated use preventDismissOnEvent callback instead
     */
    preventDismissOnScroll?: boolean;
    /**
     * If true then the callout will not dismiss on resize
     * @defaultvalue false
     * @deprecated use preventDismissOnEvent callback instead
     */
    preventDismissOnResize?: boolean;
    /**
     * If true then the callout will not dismiss when it loses focus
     * @defaultvalue false
     * @deprecated use preventDismissOnEvent callback instead
     */
    preventDismissOnLostFocus?: boolean;
    /**
     * If defined, then takes priority over preventDismissOnLostFocus, preventDismissOnResize,
     * and preventDismissOnScroll.
     * If it returns true, then callout will not dismiss for this event.
     * If not defined or returns false, callout can dismiss for this event.
     */
    preventDismissOnEvent?: (ev: Event | React.FocusEvent | React.KeyboardEvent | React.MouseEvent) => boolean;
    /**
     * If true then the callout will dismiss when the window gets focus
     * @defaultvalue false
     */
    shouldDismissOnWindowFocus?: boolean;
    /**
     * If true the position returned will have the menu element cover the target.
     * If false then it will position next to the target;
     * @defaultvalue false
     */
    coverTarget?: boolean;
    /**
     * If true the positioning logic will prefer to flip edges rather than to nudge the rectangle to fit within bounds,
     * thus making sure the element aligns perfectly with target's alignment edge
     */
    alignTargetEdge?: boolean;
    /**
     * Aria role assigned to the callout (Eg. dialog, alertdialog).
     */
    role?: string;
    /**
     * Accessible label text for callout.
     */
    ariaLabel?: string;
    /**
     *  Defines the element id referencing the element containing label text for callout.
     */
    ariaLabelledBy?: string;
    /**
     * Defines the element id referencing the element containing the description for the callout.
     */
    ariaDescribedBy?: string;
    /**
     * CSS class to apply to the callout.
     * @defaultvalue null
     */
    className?: string;
    /**
     * CSS style to apply to the callout.
     *
     * If you set `overflowY` in this object, it provides a performance optimization by preventing
     * Popup (underlying component of Callout) from calculating whether it needs a scroll bar.
     */
    style?: React.CSSProperties;
    /**
     * Optional callback when the layer content has mounted.
     */
    onLayerMounted?: () => void;
    /**
     * Optional props to pass to the Layer component hosting the panel.
     */
    layerProps?: ILayerProps;
    /**
     * Optional callback that is called once the callout has been correctly positioned.
     * @param positions - Gives the user information about how the callout is positioned such as the
     * final edge of the target that it positioned against, the beak position, and the beaks relationship to the
     * edges of the callout.
     */
    onPositioned?: (positions?: ICalloutPositionedInfo) => void;
    /**
     * Callback when the Callout tries to close.
     */
    onDismiss?: (ev?: Event | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    /**
     * If true do not render on a new layer. If false render on a new layer.
     */
    doNotLayer?: boolean;
    /**
     * If true the position will not change sides in an attempt to fit the callout within bounds.
     * It will still attempt to align it to whatever bounds are given.
     * @defaultvalue false
     */
    directionalHintFixed?: boolean;
    /**
     * Specify the final height of the content.
     * To be used when expanding the content dynamically so that callout can adjust its position.
     */
    finalHeight?: number;
    /**
     * Manually set OverflowYHidden style prop to true on calloutMain element
     * A variety of callout load animations will need this to hide the scollbar that can appear
     */
    hideOverflow?: boolean;
    /**
     * If true then the callout will attempt to focus the first focusable element that it contains.
     * If it doesn't find a focusable element, no focus will be set.
     */
    setInitialFocus?: boolean;
    /**
     * Set max height of callout.
     * When not set, the callout will expand with contents up to the bottom of the screen.
     */
    calloutMaxHeight?: number;
    /**
     * Callback when the Callout body is scrolled.
     */
    onScroll?: () => void;
    /**
     * Optional theme for component
     */
    theme?: ITheme;
    /**
     * Optional styles for the component.
     */
    styles?: IStyleFunctionOrObject<ICalloutContentStyleProps, ICalloutContentStyles>;
    /**
     * If specified, renders the Callout in a hidden state.
     * Use this flag, rather than rendering a callout conditionally based on visibility,
     * to improve rendering performance when it becomes visible.
     * Note: When callout is hidden its content will not be rendered. It will only render
     * once the callout is visible.
     */
    hidden?: boolean;
    /**
     * If true, the component will be updated even when `hidden` is true.
     * Note that this would consume resources to update even though nothing is being shown to the user.
     * This might be helpful though if your updates are small and you want the
     * callout to be revealed fast to the user when hidden is set to false.
     */
    shouldUpdateWhenHidden?: boolean;
    /**
     * If true, when this component is unmounted, focus will be restored to the element that had focus when the component
     * first mounted.
     * @defaultvalue true
     * @deprecated use `onRestoreFocus` instead
     */
    shouldRestoreFocus?: boolean;
    /**
     * Called when the component is unmounting, and focus needs to be restored. If this is provided,
     * focus will not be restored automatically, and you'll need to call `params.originalElement.focus()`.
     */
    onRestoreFocus?: (params: IPopupRestoreFocusParams) => void;
}

/**
 * {@docCategory Check}
 */
export declare interface ICheckProps extends React.RefAttributes<HTMLDivElement> {
    /**
     * Gets the component ref.
     */
    componentRef?: IRefObject<ICheckProps>;
    /**
     * Whether or not this menu item is currently checked.
     * @defaultvalue false
     */
    checked?: boolean;
    /**
     * Call to provide customized styling that will layer on top of the variant rules
     */
    styles?: IStyleFunctionOrObject<ICheckStyleProps, ICheckStyles>;
    /**
     * @deprecated Not used
     */
    alwaysShowCheck?: boolean;
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;
    /**
     * Additional css class to apply to the Check
     */
    className?: string;
    /**
     * Whether to use fast icon components. The icons can't be targeted by customization but are
     * still customizable via class names.
     * @defaultvalue true
     */
    useFastIcons?: boolean;
}

/**
 * {@docCategory Check}
 */
export declare type ICheckStyleProps = Required<Pick<ICheckProps, 'theme'>> & Pick<ICheckProps, 'className' | 'checked'> & {
    /**
     * Custom height/width for the checkbox.
     * @defaultvalue '18px'
     */
    height?: string;
    /**
     * Custom height/width for the checkbox.
     * @defaultvalue '18px'
     * @deprecated Use `height`
     */
    checkBoxHeight?: string;
};

/**
 * {@docCategory Check}
 */
export declare interface ICheckStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
    /**
     * The 'check' icon styles.
     */
    check: IStyle;
    /**
     * The 'circle' icon styles.
     */
    circle: IStyle;
    /**
     * Check host style
     * @deprecated Not used directly within the component. Instead, use `CheckGlobalClassNames.checkHost` from
     * `Check.styles.ts` to get the static class name to apply to the parent element of the Check.
     */
    checkHost: IStyle;
}

/**
 * {@docCategory ChoiceGroup}
 */
export declare interface IChoiceGroup {
    /**
     * Gets the current checked option.
     */
    checkedOption: IChoiceGroupOption | undefined;
    /**
     * Sets focus to the checked option or the first enabled option in the ChoiceGroup.
     */
    focus: () => void;
}

/**
 * {@docCategory ChoiceGroup}
 */
export declare interface IChoiceGroupOption extends Omit<React.InputHTMLAttributes<HTMLElement | HTMLInputElement>, 'checked'> {
    /**
     * A required key to uniquely identify the option.
     */
    key: string;
    /**
     * The text string for the option.
     */
    text: string;
    /**
     * Used to customize option rendering.
     */
    onRenderField?: IRenderFunction<IChoiceGroupOptionProps>;
    /**
     * Used to customize label rendering.
     */
    onRenderLabel?: IRenderFunction<IChoiceGroupOptionProps>;
    /**
     * Props for an icon to display with this option.
     */
    iconProps?: IIconProps;
    /**
     * Image to display with this option.
     */
    imageSrc?: string;
    /**
     * Alt text if the option is an image.
     * @default '' (empty string)
     */
    imageAlt?: string;
    /**
     * The src of image for choice field which is selected.
     */
    selectedImageSrc?: string;
    /**
     * The width and height of the image in px for choice field.
     * @defaultvalue `{ width: 32, height: 32 }`
     */
    imageSize?: {
        width: number;
        height: number;
    };
    /**
     * Whether or not the option is disabled.
     */
    disabled?: boolean;
    /**
     * ID used on the option's input element.
     */
    id?: string;
    /**
     * ID used on the option's label.
     */
    labelId?: string;
    /**
     * Aria label of the option for the benefit of screen reader users.
     */
    ariaLabel?: string;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IChoiceGroupOptionStyleProps, IChoiceGroupOptionStyles>;
}

/**
 * {@docCategory ChoiceGroup}
 */
export declare interface IChoiceGroupOptionProps extends Omit<IChoiceGroupOption, 'key'> {
    /**
     * Optional callback to access the IChoiceGroup interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IChoiceGroupOption>;
    /**
     * Unique key for the option, set based on `IChoiceGroupOption.key`.
     */
    itemKey: string;
    /**
     * The option key. This will always be provided for callbacks (copied from `itemKey`) but is
     * optional when manually creating ChoiceGroupOptions.
     */
    key?: string;
    /**
     * Whether or not the option is checked. Set by `ChoiceGroup` based on `selectedKey` or
     * `defaultSelectedKey` from `IChoiceGroupProps`.
     */
    checked?: boolean;
    /**
     * Callback for the ChoiceGroup creating the option to be notified when the choice has been changed.
     */
    onChange?: (evt?: React.FormEvent<HTMLElement | HTMLInputElement>, props?: IChoiceGroupOptionProps) => void;
    /**
     * Callback for the ChoiceGroup creating the option to be notified when the choice has received focus.
     */
    onFocus?: (ev?: React.FocusEvent<HTMLElement | HTMLInputElement>, props?: IChoiceGroupOptionProps) => void | undefined;
    /**
     * Callback for the ChoiceGroup creating the option to be notified when the choice has lost focus.
     */
    onBlur?: (ev?: React.FocusEvent<HTMLElement>, props?: IChoiceGroupOptionProps) => void;
    /**
     * Indicates if the ChoiceGroupOption should appear focused, visually
     */
    focused?: boolean;
    /**
     * Theme (provided through customization)
     */
    theme?: ITheme;
    /**
     * If true, it specifies that an option must be selected in the ChoiceGroup before submitting the form
     */
    required?: boolean;
    /**
     * This value is used to group each ChoiceGroupOption into the same logical ChoiceGroup
     */
    name?: string;
}

/**
 * Defines props needed to construct styles.
 * This represents the simplified set of immutable things which control the class names.
 * {@docCategory ChoiceGroup}
 */
export declare interface IChoiceGroupOptionStyleProps {
    /** Theme provided by High-Order Component. */
    theme: ITheme;
    /** Whether the option has an icon. */
    hasIcon?: boolean;
    /** Whether the option icon is an image. */
    hasImage?: boolean;
    /** Whether the option is checked or not. */
    checked?: boolean;
    /** Whether the option is disabled or not. */
    disabled?: boolean;
    /** Whether the image width or height are higher than `71`. */
    imageIsLarge?: boolean;
    /**
     * Image sizes used when `hasImage` or `hasIcon` style props are enabled.
     * @defaultvalue `{height: 32, width: 32 }`
     */
    imageSize?: {
        height: number;
        width: number;
    };
    /** Whether the option is in focus or not. */
    focused?: boolean;
}

/**
 * {@docCategory ChoiceGroup}
 */
export declare interface IChoiceGroupOptionStyles {
    root?: IStyle;
    choiceFieldWrapper?: IStyle;
    input?: IStyle;
    field?: IStyle;
    innerField?: IStyle;
    imageWrapper?: IStyle;
    selectedImageWrapper?: IStyle;
    iconWrapper?: IStyle;
    labelWrapper?: IStyle;
}

/**
 * {@docCategory ChoiceGroup}
 */
export declare interface IChoiceGroupProps extends React.InputHTMLAttributes<HTMLElement | HTMLInputElement>, React.RefAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the IChoiceGroup interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IChoiceGroup>;
    /**
     * The options for the choice group.
     */
    options?: IChoiceGroupOption[];
    /**
     * The key of the option that will be initially checked.
     */
    defaultSelectedKey?: string | number;
    /**
     * The key of the selected option. If you provide this, you must maintain selection
     * state by observing onChange events and passing a new value in when changed.
     */
    selectedKey?: string | number;
    /**
     * A callback for receiving a notification when the choice has been changed.
     */
    onChange?: (ev?: React.FormEvent<HTMLElement | HTMLInputElement>, option?: IChoiceGroupOption) => void;
    /**
     * Descriptive label for the choice group.
     */
    label?: string;
    /**
     * Theme (provided through customization).
     */
    theme?: ITheme;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IChoiceGroupStyleProps, IChoiceGroupStyles>;
    /**
     * ID of an element to use as the aria label for this ChoiceGroup.
     */
    ariaLabelledBy?: string;
}

/**
 * {@docCategory ChoiceGroup}
 */
export declare interface IChoiceGroupStyleProps {
    theme: ITheme;
    className?: string;
    optionsContainIconOrImage?: boolean;
}

/**
 * {@docCategory ChoiceGroup}
 */
export declare interface IChoiceGroupStyles {
    root?: IStyle;
    label?: IStyle;
    flexContainer?: IStyle;
}

/**
 * Circle element interface
 * {@docCategory Shimmer}
 */
export declare interface ICircle extends IShimmerElement {
    /**
     * Sets the height of the shimmer circle in pixels.
     * Minimum supported 10px.
     * @defaultvalue 24px
     */
    height?: number;
}

/**
 * {@docCategory Coachmark}
 */
export declare interface ICoachmark {
    /**
     * Forces the Coachmark to dismiss
     */
    dismiss?: (ev?: Event | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
}

/**
 * Coachmark component props
 * {@docCategory Coachmark}
 */
export declare interface ICoachmarkProps extends React.RefAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the ICoachmark interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ICoachmark>;
    /**
     * If provided, additional class name to provide on the root element.
     */
    className?: string;
    /**
     * Call to provide customized styling that will layer on top of the variant rules
     */
    styles?: IStyleFunctionOrObject<ICoachmarkStyleProps, ICoachmarkStyles>;
    /**
     * The target that the Coachmark should try to position itself based on.
     */
    target: HTMLElement | string | null;
    /**
     * Props to pass to the PositioningContainer component. Specify the `directionalHint` to indicate
     * on which edge the Coachmark/TeachingBubble should be positioned.
     * @defaultvalue directionalHint: DirectionalHint.bottomAutoEdge
     */
    positioningContainerProps?: IPositioningContainerProps;
    /**
     * Whether or not to force the Coachmark/TeachingBubble content to fit within the window bounds.
     * @defaultvalue true
     */
    isPositionForced?: boolean;
    /**
     * The starting collapsed state for the Coachmark.  Use `isCollapsed` instead.
     * @defaultvalue true
     * @deprecated Use `isCollapsed` instead.
     */
    collapsed?: boolean;
    /**
     * The starting collapsed state for the Coachmark.
     * @defaultvalue true
     */
    isCollapsed?: boolean;
    /**
     * The distance in pixels the mouse is located
     * before opening up the Coachmark.
     * @defaultvalue 10
     */
    mouseProximityOffset?: number;
    /**
     * Callback when the opening animation begins.
     */
    onAnimationOpenStart?: () => void;
    /**
     * Callback when the opening animation completes.
     */
    onAnimationOpenEnd?: () => void;
    /**
     * The width of the Beak component.
     * @deprecated No longer used.
     */
    beakWidth?: number;
    /**
     * The height of the Beak component.
     * @deprecated No longer used.
     */
    beakHeight?: number;
    /**
     * Delay before allowing mouse movements to open the Coachmark.
     * @defaultvalue 3600
     */
    delayBeforeMouseOpen?: number;
    /**
     * Delay in milliseconds before Coachmark animation appears.
     * @defaultvalue 0
     */
    delayBeforeCoachmarkAnimation?: number;
    /**
     * Callback to run when the mouse moves.
     */
    onMouseMove?: (e: MouseEvent) => void;
    /**
     * The width of the Coachmark.
     * @deprecated No longer used.
     */
    width?: number;
    /**
     * The height of the Coachmark.
     * @deprecated No longer used.
     */
    height?: number;
    /**
     * Color of the Coachmark/TeachingBubble.
     */
    color?: string;
    /**
     * Beacon color one.
     */
    beaconColorOne?: string;
    /**
     * Beacon color two.
     */
    beaconColorTwo?: string;
    /**
     * Text to announce to screen reader / narrator when Coachmark is displayed
     */
    ariaAlertText?: string;
    /**
     * Ref for TeachingBubble
     * @deprecated Coachmark uses `focusFirstChild` utility instead to focus on TeachingBubbleContent
     */
    teachingBubbleRef?: ITeachingBubble;
    /**
     *  Defines the element id referencing the element containing label text for Coachmark.
     */
    ariaLabelledBy?: string;
    /**
     * Defines the element id referencing the element containing the description for the Coachmark.
     */
    ariaDescribedBy?: string;
    /**
     *  Defines the text content for the ariaLabelledBy element
     */
    ariaLabelledByText?: string;
    /**
     * Defines the text content for the ariaDescribedBy element
     */
    ariaDescribedByText?: string;
    /**
     * If true then the Coachmark will not dismiss when it loses focus
     * @defaultvalue false
     */
    preventDismissOnLostFocus?: boolean;
    /**
     * If true then the Coachmark beak (arrow pointing towards target) will always be visible as long as
     * Coachmark is visible
     * @defaultvalue false
     */
    persistentBeak?: boolean;
    /**
     * If true then focus will not be set to the Coachmark when it mounts. Useful in cases where focus on coachmark
     * is causing other components in page to dismiss upon losing focus.
     * @defaultvalue false
     */
    preventFocusOnMount?: boolean;
    /**
     * Callback when the Coachmark tries to close.
     */
    onDismiss?: (ev?: Event | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => void;
    /**
     * Theme provided by higher order component.
     */
    theme?: ITheme;
    /**
     * Child nodes to render inside the Coachmark dialog
     */
    children?: React.ReactNode;
}

/**
 * The props needed to construct styles.
 * {@docCategory Coachmark}
 */
export declare interface ICoachmarkStyleProps {
    /**
     * ClassName to provide on the root style area.
     */
    className?: string;
    /**
     * Current theme.
     */
    theme?: ITheme;
    /**
     * Is the Coachmark collapsed.
     * Deprecated, use `isCollapsed` instead.
     * @deprecated Use `isCollapsed` instead.
     */
    collapsed?: boolean;
    /**
     * Is the Coachmark collapsed
     */
    isCollapsed: boolean;
    /**
     * Is the component taking measurements
     */
    isMeasuring: boolean;
    /**
     * The height measured before the component has been mounted in pixels
     */
    entityHostHeight?: string;
    /**
     * The width measured in pixels
     */
    entityHostWidth?: string;
    /**
     * Width of the coachmark
     */
    width?: string;
    /**
     * Height of the coachmark
     */
    height?: string;
    /**
     * Color
     */
    color?: string;
    /**
     * Beacon color one
     */
    beaconColorOne?: string;
    /**
     * Beacon color two
     */
    beaconColorTwo?: string;
    /**
     * Transform origin for teaching bubble content
     */
    transformOrigin?: string;
    /**
     * Delay time for the animation to start
     */
    delayBeforeCoachmarkAnimation?: string;
}

/**
 * Represents the stylable areas of the control.
 * {@docCategory Coachmark}
 */
export declare interface ICoachmarkStyles {
    /**
     * Style for the root element in the default enabled/unchecked state.
     */
    root?: IStyle;
    /**
     * The pulsing beacon that animates when the Coachmark is collapsed.
     */
    pulsingBeacon?: IStyle;
    /**
     * The layer, or div, that the translate animation will be applied to.
     */
    translateAnimationContainer?: IStyle;
    /**
     * The layer the Scale animation will be applied to.
     */
    scaleAnimationLayer?: IStyle;
    /**
     * The layer the Rotate animation will be applied to.
     */
    rotateAnimationLayer?: IStyle;
    /**
     * The layer that content/components/elements will be hosted in.
     */
    entityHost?: IStyle;
    /**
     * The inner layer that components will be hosted in
     * and primary purpose is scaling the layer down while the
     * Coachmark collapsed.
     */
    entityInnerHost: IStyle;
    /**
     * The layer that directly contains the TeachingBubbleContent
     */
    childrenContainer: IStyle;
    /**
     * The styles applied when the Coachmark has collapsed.
     */
    collapsed?: IStyle;
    /**
     * The styles applied to the ARIA attribute container
     */
    ariaContainer?: IStyle;
}

/**
 * @deprecated No longer used.
 * {@docCategory Coachmark}
 */
export declare type ICoachmarkTypes = ICoachmarkProps;

export declare interface IColor extends IRGB, IHSV {
    /** Hex string for the color (excluding alpha component), *not* prefixed with #. */
    hex: string;
    /** CSS color string. If a hex value, it must be prefixed with #. */
    str: string;
    /** Transparency value, range 0 (opaque) to 100 (transparent). Usually assumed to be 0 if not specified. */
    t?: number;
}

/**
 * {@docCategory SwatchColorPicker}
 */
export declare interface IColorCellProps {
    /**
     * Arbitrary unique string associated with this option
     */
    id: string;
    /**
     * Tooltip and aria label for this item
     */
    label?: string;
    /**
     * The CSS-compatible string to describe the color
     */
    color: string;
    /**
     * Index for this option
     */
    index?: number;
}

/**
 * {@docCategory ColorPicker}
 */
export declare interface IColorPicker {
    /** The currently selected color. */
    color: IColor;
}

/**
 * {@docCategory SwatchColorPicker}
 */
export declare interface IColorPickerGridCellProps {
    /**
     * Item to render
     */
    item: IColorCellProps;
    /**
     * Used as a PREFIX for the cell's ID (the cell will not have this literal string as its ID).
     * @deprecated Deprecated due to misleading name. Use `idPrefix` instead.
     */
    id?: string;
    /**
     * Prefix for this cell's ID. Will be required in a future version once `id` is removed.
     */
    idPrefix?: string;
    /**
     * Tooltip and aria label for this item
     */
    label?: string;
    /**
     * The CSS-compatible string to describe the color
     */
    color: string;
    /**
     * Index for this option
     */
    index?: number;
    /**
     * The theme object to use for styling.
     */
    theme?: ITheme;
    /**
     * True if this cell should be rendered as a circle, false if it should be a square.
     * @default `true` (render as circle)
     */
    circle?: boolean;
    /**
     * Whether this cell should be disabled
     * @default false
     */
    disabled?: boolean;
    /**
     * Whether this cell is currently selected
     */
    selected: boolean;
    /**
     * Height of the cell, in pixels
     * @defaultvalue 20
     */
    height?: number;
    /**
     * Width of the cell, in pixels
     * @defaultvalue 20
     */
    width?: number;
    /**
     * Width of the border that indicates a selected/hovered cell, in pixels.
     * @defaultvalue 2 if `cellWidth` is less than 24; otherwise 4
     */
    borderWidth?: number;
    /**
     * Handler for when a color cell is clicked.
     */
    onClick?: (item: IColorCellProps) => void;
    onHover?: (item?: IColorCellProps) => void;
    onFocus?: (item: IColorCellProps) => void;
    /**
     * Custom styles for the component.
     */
    styles?: IStyleFunctionOrObject<IColorPickerGridCellStyleProps, IColorPickerGridCellStyles>;
    /**
     * Mouse enter handler. Returns true if the event should be processed, false otherwise.
     */
    onMouseEnter?: (ev: React.MouseEvent<HTMLButtonElement>) => boolean;
    /**
     * Mouse move handler. Returns true if the event should be processed, false otherwise.
     */
    onMouseMove?: (ev: React.MouseEvent<HTMLButtonElement>) => boolean;
    onMouseLeave?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    onWheel?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    onKeyDown?: (ev: React.KeyboardEvent<HTMLButtonElement>) => void;
}

/**
 * {@docCategory SwatchColorPicker}
 */
export declare interface IColorPickerGridCellStyleProps {
    /**
     * Theme to apply to the cell.
     */
    theme: ITheme;
    /**
     * Whether the component is disabled or not.
     */
    disabled?: boolean;
    /**
     * Whether the cell is currently selected or not.
     */
    selected?: boolean;
    /**
     * Whether the svg color element should be rendered as a circle or not.
     */
    circle?: boolean;
    /**
     * Whether the color being rendered is white or not. If it is white we show a border around it.
     */
    isWhite?: boolean;
    /**
     * The height of this cell, in pixels.
     */
    height?: number;
    /**
     * The width of this cell, in pixels.
     */
    width?: number;
    /**
     * The width of the border indicating a hovered or selected cell, in pixels.
     */
    borderWidth?: number;
}

/**
 * {@docCategory SwatchColorPicker}
 */
export declare interface IColorPickerGridCellStyles {
    /**
     * Style to apply to a colorCell in the color picker.
     */
    colorCell: IStyle;
    /**
     * Style to apply to the svg element that renders the color.
     */
    svg: IStyle;
}

/**
 * {@docCategory ColorPicker}
 */
export declare interface IColorPickerProps {
    /**
     * Gets the component ref.
     */
    componentRef?: IRefObject<IColorPicker>;
    /**
     * Object or CSS-compatible string to describe the color.
     */
    color: IColor | string;
    /**
     * Labels for elements within the ColorPicker. Defaults are provided in English only.
     */
    strings?: IColorPickerStrings;
    /**
     * Callback for when the user changes the color.
     * (Not called when the color is changed via props.)
     */
    onChange?: (ev: React.SyntheticEvent<HTMLElement>, color: IColor) => void;
    /**
     * `alpha` (the default) means display a slider and text field for editing alpha values.
     * `transparency` also displays a slider and text field but for editing transparency values.
     * `none` hides these controls.
     *
     * Alpha represents the opacity of the color, whereas transparency represents the transparentness
     * of the color: i.e. a 30% transparent color has 70% opaqueness.
     *
     * @defaultvalue 'alpha'
     */
    alphaType?: 'alpha' | 'transparency' | 'none';
    /**
     * Whether to hide the alpha (or transparency) slider and text field.
     * @deprecated Use `alphaType: 'none'`
     */
    alphaSliderHidden?: boolean;
    /**
     * Label for the hex text field.
     * @defaultvalue Hex
     * @deprecated Use `strings`
     */
    hexLabel?: string;
    /**
     * Label for the red text field.
     * @defaultvalue Red
     * @deprecated Use `strings`
     */
    redLabel?: string;
    /**
     * Label for the green text field.
     * @defaultvalue Green
     * @deprecated Use `strings`
     */
    greenLabel?: string;
    /**
     * Label for the blue text field.
     * @defaultvalue Blue
     * @deprecated Use `strings`
     */
    blueLabel?: string;
    /**
     * Label for the alpha textfield.
     * @defaultvalue Alpha
     * @deprecated Use `strings`
     */
    alphaLabel?: string;
    /**
     * Additional CSS class(es) to apply to the ColorPicker.
     */
    className?: string;
    /**
     * Theme (provided through customization).
     */
    theme?: ITheme;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IColorPickerStyleProps, IColorPickerStyles>;
    /**
     * Whether to show color preview box.
     * @defaultvalue false
     */
    showPreview?: boolean;
}

export declare interface IColorPickerState {
    /** Most recently selected color */
    color: IColor;
    /** Color component currently being edited via a text field (if intermediate value is invalid) */
    editingColor?: {
        /** Which color component is being edited */
        component: ColorComponent;
        /** Currently entered value, which is not valid */
        value: string;
    };
}

export declare interface IColorPickerStrings {
    /**
     * Accessible label for the root of the color picker region.
     * The string should contain a placeholder `{0}` for the currently selected color.
     * @defaultvalue `'Color picker, {0} selected.'`
     */
    rootAriaLabelFormat?: string;
    /**
     * Label for the hex text field.
     * @defaultvalue Hex
     */
    hex?: string;
    /**
     * Label for the red text field.
     * @defaultvalue Red
     */
    red?: string;
    /**
     * Label for the green text field.
     * @defaultvalue Green
     */
    green?: string;
    /**
     * Label for the blue text field.
     * @defaultvalue Blue
     */
    blue?: string;
    /**
     * Label for the alpha text field.
     * Also used as the aria label for the alpha slider if `alphaAriaLabel` is not provided.
     * @defaultvalue Alpha
     */
    alpha?: string;
    /**
     * Label for the transparency text field.
     * @defaultvalue Transparency
     */
    transparency?: string;
    /**
     * Customized aria-label for the alpha slider.
     */
    alphaAriaLabel?: string;
    /**
     * Customized aria-label for the transparency slider.
     */
    transparencyAriaLabel?: string;
    /**
     * Aria label for the hue slider.
     * @defaultvalue Hue
     */
    hueAriaLabel?: string;
    /**
     * Aria label for the hue slider.
     * @deprecated Use `hueAriaLabel`
     */
    hue?: string;
    /**
     * Aria label for the color rectangle, which adjusts saturation and value (brightness).
     * @defaultvalue 'Saturation and brightness'
     */
    svAriaLabel?: string;
    /**
     * Format string for the current values of the color rectangle.
     * The string must include descriptions and two placeholders for the current values:
     * `{0}` for saturation and `{1}` for value/brightness.
     * @defaultvalue `'Saturation {0} brightness {1}'`
     */
    svAriaValueFormat?: string;
    /**
     * Detailed description for how to use the color rectangle. Moving the thumb horizontally adjusts
     * saturation and moving it vertically adjusts value (essentially, brightness).
     * @defaultvalue 'Use left and right arrow keys to set saturation. Use up and down arrow keys to set brightness.'
     */
    svAriaDescription?: string;
}

/**
 * {@docCategory ColorPicker}
 */
export declare type IColorPickerStyleProps = Required<Pick<IColorPickerProps, 'theme'>> & Pick<IColorPickerProps, 'className' | 'alphaType'>;

/**
 * {@docCategory ColorPicker}
 */
export declare interface IColorPickerStyles {
    /**
     * Style set for the root element.
     */
    root?: IStyle;
    /**
     * Style set for the panel element that contains the color rectangle, color sliders and inputs .
     */
    panel?: IStyle;
    /**
     * Style set for the panel element that contains the color rectangle
     */
    colorRectangle?: IStyle;
    /**
     * Style set for the table element that contains the color sliders and inputs.
     */
    table?: IStyle;
    /**
     * Style set for the table header that contains the labels.
     */
    tableHeader?: IStyle;
    /**
     * Style set for the table cell that contains the hex label.
     */
    tableHexCell?: IStyle;
    /**
     * Style set for the table cell that contains the alpha or transparency label.
     */
    tableAlphaCell?: IStyle;
    /**
     * Style set for each text field input.
     */
    input?: IStyle;
    /**
     * Color Square
     */
    colorSquare?: IStyle;
    /**
     * flexContainer
     */
    flexContainer?: IStyle;
    /**
     * flexSlider
     */
    flexSlider?: IStyle;
    /**
     * flexPreviewBox
     */
    flexPreviewBox?: IStyle;
}

/**
 * {@docCategory ColorPicker}
 */
export declare interface IColorRectangle {
    /** Currently selected color. */
    color: IColor;
}

/**
 * {@docCategory ColorPicker}
 */
export declare interface IColorRectangleProps {
    /**
     * Gets the component ref.
     */
    componentRef?: IRefObject<IColorRectangle>;
    /**
     * Current color of the rectangle.
     */
    color: IColor;
    /**
     * Label of the ColorRectangle for the benefit of screen reader users.
     * @defaultvalue 'Saturation and brightness'
     */
    ariaLabel?: string;
    /**
     * Format string for the color rectangle's current value as read by screen readers.
     * The string must include descriptions and two placeholders for the current values:
     * `{0}` for saturation and `{1}` for value/brightness.
     * @defaultvalue `'Saturation {0} brightness {1}'`
     */
    ariaValueFormat?: string;
    /**
     * Detailed description for how to use the color rectangle. Moving the thumb horizontally adjusts
     * saturation and moving it vertically adjusts value (essentially, brightness).
     * @defaultvalue 'Use left and right arrow keys to set saturation. Use up and down arrow keys to set brightness.'
     */
    ariaDescription?: string;
    /**
     * Minimum width and height.
     */
    minSize?: number;
    /**
     * Additional CSS class(es) to apply to the ColorRectangle.
     */
    className?: string;
    /**
     * Theme (provided through customization).
     */
    theme?: ITheme;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IColorRectangleStyleProps, IColorRectangleStyles>;
    /**
     * Callback for when the color changes.
     */
    onChange?: (ev: React.MouseEvent | React.KeyboardEvent, color: IColor) => void;
}

/**
 * {@docCategory ColorPicker}
 */
export declare interface IColorRectangleStyleProps {
    /**
     * Theme (provided through customization).
     */
    theme: ITheme;
    /**
     * Additional CSS class(es) to apply to the ColorRectangle.
     */
    className?: string;
    /**
     * Minimum width and height.
     */
    minSize?: number;
}

/**
 * {@docCategory ColorPicker}
 */
export declare interface IColorRectangleStyles {
    /**
     * Style set for the root element.
     */
    root?: IStyle;
    /**
     * Style set for the light-colored rectangle.
     */
    light?: IStyle;
    /**
     * Style set for the dark-colored rectangle.
     */
    dark?: IStyle;
    /**
     * Style set for the draggable thumb element.
     */
    thumb?: IStyle;
    /**
     * Style for a hidden detailed description for screen reader users.
     */
    description?: IStyle;
}

/**
 * {@docCategory ColorPicker}
 */
export declare interface IColorSlider {
    /** Current value of the slider. */
    value: number;
}

/**
 * {@docCategory ColorPicker}
 */
export declare interface IColorSliderProps {
    /**
     * Gets the component ref.
     */
    componentRef?: IRefObject<IColorSlider>;
    /**
     * Minimum value of the slider.
     * @deprecated Will always be 0
     */
    minValue?: number;
    /**
     * Maximum value of the slider.
     * @deprecated Will be 100 for alpha or transparency sliders, or 359 for hue sliders.
     */
    maxValue?: number;
    /**
     * Current value of the slider.
     */
    value?: number;
    /**
     * Label of the ColorSlider for the benefit of screen reader users.
     */
    ariaLabel?: string;
    /**
     * Type of slider to display.
     * @defaultvalue 'hue'
     */
    type?: 'hue' | 'alpha' | 'transparency';
    /**
     * If true, the slider represents an alpha slider and will display a gray checkered pattern
     * in the background. Otherwise, the slider represents a hue slider.
     * @defaultvalue false
     * @deprecated Use `type`
     */
    isAlpha?: boolean;
    /**
     * Hex color to use when rendering an alpha or transparency slider's overlay, *without* the `#`.
     */
    overlayColor?: string;
    /**
     * CSS-compatible string for the color of the thumb element.
     * @deprecated Not used. Use `styles.sliderThumb` instead.
     */
    thumbColor?: string;
    /**
     * Custom style for the overlay element.
     * @deprecated Use `overlayColor` instead
     */
    overlayStyle?: React.CSSProperties;
    /**
     * Callback issued when the value changes.
     */
    onChange?: (event: React.MouseEvent | React.KeyboardEvent, newValue?: number) => void;
    /**
     * Additional CSS class(es) to apply to the ColorSlider.
     */
    className?: string;
    /**
     * Theme (provided through customization).
     */
    theme?: ITheme;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IColorSliderStyleProps, IColorSliderStyles>;
}

/**
 * {@docCategory ColorPicker}
 */
export declare type IColorSliderStyleProps = Required<Pick<IColorSliderProps, 'theme'>> & Pick<IColorSliderProps, 'className' | 'type'> & {
    /**
     * @deprecated Use `type`
     */
    isAlpha?: boolean;
};

/**
 * {@docCategory ColorPicker}
 */
export declare interface IColorSliderStyles {
    /**
     * Style set for the root element.
     */
    root?: IStyle;
    /**
     * Style set for the draggable thumb element.
     */
    sliderThumb?: IStyle;
    /**
     * Style set for the overlay element.
     */
    sliderOverlay?: IStyle;
}

/**
 * {@docCategory CommandBar}
 */
export declare interface ICommandBar {
    /**
     * Sets focus to the active command in the list.
     */
    focus(): void;
    /**
     * Remeasures the available space.
     */
    remeasure(): void;
}

export declare interface ICommandBarData {
    /**
     * Items being rendered in the primary region
     */
    primaryItems: ICommandBarItemProps[];
    /**
     * Items being rendered in the overflow
     */
    overflowItems: ICommandBarItemProps[];
    /**
     * Items being rendered on the far side
     */
    farItems: ICommandBarItemProps[] | undefined;
    /**
     * Length of original overflowItems to ensure that they are not moved into primary region on resize
     */
    minimumOverflowItems: number;
    /**
     * Unique string used to cache the width of the command bar
     */
    cacheKey: string;
}

/**
 * ICommandBarItemProps extends IContextualMenuItem and adds a few CommandBar-specific props.
 * {@docCategory CommandBar}
 */
export declare interface ICommandBarItemProps extends IContextualMenuItem {
    /**
     * Show only an icon for this item, not text.
     * Does not apply if item is in the overflow.
     * @defaultvalue false
     */
    iconOnly?: boolean;
    /**
     * Props for the tooltip when in `iconOnly` mode.
     */
    tooltipHostProps?: ITooltipHostProps;
    /**
     * Custom styles for individual button
     */
    buttonStyles?: IButtonStyles;
    /**
     * A custom cache key to be used for this item. If `cacheKey` is changed, the cache will invalidate.
     * Defaults to `key` value.
     */
    cacheKey?: string;
    /**
     * Context under which the item is being rendered.
     * This value is mutated by the CommandBar and is useful for adjusting the `onRender` function.
     */
    renderedInOverflow?: boolean;
    /**
     * Method to override the render of the individual command bar button.
     * Not used when item is rendered in overflow.
     * @defaultvalue CommandBarButton
     */
    commandBarButtonAs?: IComponentAs<ICommandBarItemProps>;
}

/**
 * {@docCategory CommandBar}
 */
export declare interface ICommandBarProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the ICommandBar interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ICommandBar>;
    /**
     * Items to render. ICommandBarItemProps extends IContextualMenuItem.
     */
    items: ICommandBarItemProps[];
    /**
     * Items to render on the right side (or left, in RTL). ICommandBarItemProps extends IContextualMenuItem.
     */
    farItems?: ICommandBarItemProps[];
    /**
     * Default items to have in the overflow menu. ICommandBarItemProps extends IContextualMenuItem.
     */
    overflowItems?: ICommandBarItemProps[];
    /**
     * Props to be passed to overflow button.
     * If `menuProps` are passed through this prop, any items provided will be prepended to any
     * computed overflow items.
     */
    overflowButtonProps?: IButtonProps;
    /**
     * Custom component for the overflow button.
     */
    overflowButtonAs?: IComponentAs<IButtonProps>;
    /**
     * Custom component for the near and far item buttons. Not used for overflow menu items.
     */
    buttonAs?: IComponentAs<IButtonProps>;
    /**
     * When true, items will be 'shifted' off the front of the array when reduced, and unshifted during grow.
     */
    shiftOnReduce?: boolean;
    /**
     * Custom function to reduce data if items do not fit in given space.
     * Return `undefined` if no more steps can be taken to avoid infinate loop.
     */
    onReduceData?: (data: ICommandBarData) => ICommandBarData | undefined;
    /**
     * Custom function to grow data if items are too small for the given space.
     * Return `undefined` if no more steps can be taken to avoid infinate loop.
     */
    onGrowData?: (data: ICommandBarData) => ICommandBarData | undefined;
    /**
     * Callback invoked when data has been reduced.
     */
    onDataReduced?: (movedItem: ICommandBarItemProps) => void;
    /**
     * Callback invoked when data has been grown.
     */
    onDataGrown?: (movedItem: ICommandBarItemProps) => void;
    /**
     * Function to be called every time data is rendered. It provides the data that was actually rendered.
     * A use case would be adding telemetry when a particular control is shown in an overflow or dropped
     * as a result of `onReduceData`, or to count the number of renders that an implementation of
     * `onReduceData` triggers.
     */
    dataDidRender?: (renderedData: any) => void;
    /**
     * Additional css class to apply to the command bar
     */
    className?: string;
    /**
     * Accessibility text to be read by the screen reader when the user's
     * focus enters the command bar. The screen reader will read this text
     * after reading information about the first focusable item in the command bar.
     */
    ariaLabel?: string;
    /**
     * Customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<ICommandBarStyleProps, ICommandBarStyles>;
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;
}

/**
 * {@docCategory CommandBar}
 */
export declare interface ICommandBarStyleProps {
    theme: ITheme;
    className?: string;
}

/**
 * {@docCategory CommandBar}
 */
export declare interface ICommandBarStyles {
    root?: IStyle;
    primarySet?: IStyle;
    secondarySet?: IStyle;
}

/**
 * Legacy Icon component which can be targeted by customization. It's recommended to use `FontIcon`
 * or `ImageIcon` instead, especially in scenarios where rendering performance is important.
 * {@docCategory Icon}
 */
export declare const Icon: React.FunctionComponent<IIconProps>;

export declare class IconBase extends React.Component<IIconProps, IIconState> {
    constructor(props: IIconProps);
    render(): JSX.Element;
    private _onImageLoadingStateChange;
}

/**
 * {@docCategory ContextualMenu}
 */
export declare interface IContextualMenu {
}

/**
 * @deprecated in favor of mergeStyles API.
 */
export declare interface IContextualMenuClassNames {
    container: string;
    root: string;
    list: string;
    header: string;
    title: string;
    subComponentStyles?: IContextualMenuSubComponentStyles;
}

/**
 * {@docCategory ContextualMenu}
 */
export declare interface IContextualMenuItem {
    /**
     * Optional callback to access the IContextualMenuRenderItem interface.
     * This will get passed down to ContextualMenuItem.
     */
    componentRef?: IRefObject<IContextualMenuRenderItem>;
    /**
     * Unique id to identify the item
     */
    key: string;
    /**
     * Text of the menu item.
     * If a standard hyphen (-) is passed in, then the item will be rendered as a divider.
     * If a dash must appear as text, use an emdash (—), figuredash (‒), or minus symbol (−) instead.
     */
    text?: string;
    /**
     * Secondary description for the menu item to display
     */
    secondaryText?: string;
    itemType?: ContextualMenuItemType;
    /**
     * Props for an icon to display next to the item.
     */
    iconProps?: IIconProps;
    /**
     * Custom render function for the menu item icon
     */
    onRenderIcon?: IRenderFunction<IContextualMenuItemProps>;
    /**
     * Props for the Icon used for the chevron.
     */
    submenuIconProps?: IIconProps;
    /**
     * Whether the menu item is disabled
     * @defaultvalue false
     */
    disabled?: boolean;
    /**
     * If the menu item is a split button, this prop disables purely the primary action of the button.
     * @defaultvalue false
     */
    primaryDisabled?: boolean;
    /**
     * @deprecated Not used
     */
    shortCut?: string;
    /**
     * Whether or not this menu item can be checked
     * @defaultvalue false
     */
    canCheck?: boolean;
    /**
     * Whether or not this menu item is currently checked.
     * @defaultvalue false
     */
    checked?: boolean;
    /**
     * Whether or not this menu item is a splitButton.
     * @defaultvalue false
     */
    split?: boolean;
    /**
     * Any custom data the developer wishes to associate with the menu item.
     */
    data?: any;
    /**
     * Callback for when the menu item is invoked. If `ev.preventDefault()` is called in `onClick`,
     * the click will not close the menu.
     *
     * Only for ContextualMenu items, returning true will dismiss the menu even if `ev.preventDefault()`
     * was called (does not apply for button or CommandBar sub-menu items).
     */
    onClick?: (ev?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, item?: IContextualMenuItem) => boolean | void;
    /**
     * Navigate to this URL when the menu item is clicked.
     */
    href?: string;
    /**
     * Target window when using `href`.
     */
    target?: string;
    /**
     * Link relation setting when using `href`.
     * If `target` is `_blank`, `rel` is defaulted to a value to prevent clickjacking.
     */
    rel?: string;
    /**
     * Properties to apply to a submenu to this item.
     *
     * The ContextualMenu will provide default values for `target`, `onDismiss`, `isSubMenu`,
     * `id`, `shouldFocusOnMount`, `directionalHint`, `className`, and `gapSpace`, all of which
     * can be overridden.
     */
    subMenuProps?: IContextualMenuProps;
    /**
     * Method to provide the classnames to style the individual items inside a menu.
     * @deprecated Use `styles` prop of `IContextualMenuItemProps` to leverage mergeStyles API.
     */
    getItemClassNames?: (theme: ITheme, disabled: boolean, expanded: boolean, checked: boolean, isAnchorLink: boolean, knownIcon: boolean, itemClassName?: string, dividerClassName?: string, iconClassName?: string, subMenuClassName?: string, primaryDisabled?: boolean) => IMenuItemClassNames;
    /**
     * Optional IContextualMenuItemProps overrides to customize behaviors such as item styling via `styles`.
     */
    itemProps?: Partial<IContextualMenuItemProps>;
    /**
     * Method to provide the classnames to style the Vertical Divider of a split button inside a menu.
     * Default value is the `getSplitButtonVerticalDividerClassNames` func defined in `ContextualMenu.classnames.ts`.
     * @defaultvalue getSplitButtonVerticalDividerClassNames
     */
    getSplitButtonVerticalDividerClassNames?: (theme: ITheme) => IVerticalDividerClassNames;
    /**
     * Properties to apply to render this item as a section.
     * This prop is mutually exclusive with `subMenuProps`.
     */
    sectionProps?: IContextualMenuSection;
    /**
     * Additional CSS class to apply to the menu item.
     */
    className?: string;
    /**
     * Additional styles to apply to the menu item
     * @deprecated in favor of the `styles` prop to leverage mergeStyles API.
     */
    style?: React.CSSProperties;
    /**
     * Custom accessible label for the element.
     * If no override is specified, the `aria-label` attribute will contain the item name.
     */
    ariaLabel?: string;
    /**
     * Title (tooltip) text displayed when hovering over an item.
     */
    title?: string;
    /**
     * Method to custom render this menu item.
     * For keyboard accessibility, the top-level rendered item should be a focusable element
     * (like an anchor or a button) or have the `data-is-focusable` property set to true.
     *
     * @param item - Item to render. Will typically be of type `IContextualMenuItem`.
     * (When rendering a command bar item, will be `ICommandBarItemProps`.)
     * @param dismissMenu - Function to dismiss the menu. Can be used to ensure that a custom menu
     * item click dismisses the menu. (Will be undefined if rendering a command bar item.)
     */
    onRender?: (item: any, dismissMenu: (ev?: any, dismissAll?: boolean) => void) => React.ReactNode;
    /**
     * Method to customize sub-components rendering of this menu item.
     *
     * @param props - Props used to pass into render functions
     * @param defaultRenders - Default render functions that renders default sub-components
     */
    onRenderContent?: (props: IContextualMenuItemProps, defaultRenders: IContextualMenuItemRenderFunctions) => React.ReactNode;
    /**
     * A function to be executed on mouse down. This is executed before an `onClick` event and can
     * be used to interrupt native on click events as well. The click event should still handle
     * the commands. This should only be used in special cases when react and non-react are mixed.
     */
    onMouseDown?: (item: IContextualMenuItem, event: React.MouseEvent<HTMLElement>) => void;
    /**
     * Optional override for the menu button's role. Defaults to `menuitem` or `menuitemcheckbox`.
     */
    role?: string;
    /**
     * When rendering a custom menu component that is passed in, the component might also be a list of
     * elements. We want to keep track of the correct index our menu is using based off of
     * the length of the custom list. It is up to the user to increment the count for their list.
     */
    customOnRenderListLength?: number;
    /**
     * Keytip for this contextual menu item
     */
    keytipProps?: IKeytipProps;
    /**
     * Any additional properties to use when custom rendering menu items.
     */
    [propertyName: string]: any;
    /**
     * Detailed description of the menu item for the benefit of screen readers.
     */
    ariaDescription?: string;
    /**
     * ID of the element that contains additional detailed descriptive information for screen readers
     */
    ariaDescribedBy?: string;
    /**
     * This prop is no longer used. All contextual menu items are now focusable when disabled.
     * @deprecated in 6.38.2 will be removed in 7.0.0
     */
    inactive?: boolean;
    /**
     * Text of the menu item.
     * @deprecated Use `text` instead.
     */
    name?: string;
}

/**
 * {@docCategory ContextualMenu}
 */
export declare interface IContextualMenuItemProps extends React.HTMLAttributes<IContextualMenuItemProps> {
    /**
     * Optional callback to access the IContextualMenuRenderItem interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IContextualMenuRenderItem>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IContextualMenuItemStyleProps, IContextualMenuItemStyles>;
    /**
     * Theme provided by High-Order Component.
     */
    theme?: ITheme;
    /**
     * Additional css class to apply to the ContextualMenuItem
     * @defaultvalue undefined
     */
    className?: string;
    /**
     * The item to display
     */
    item: IContextualMenuItem;
    /**
     * Classnames for different aspects of a menu item
     */
    classNames: IMenuItemClassNames;
    /**
     * Index of the item
     */
    index: number;
    /**
     * If this item has icons
     */
    hasIcons: boolean | undefined;
    /**
     * Click handler for the checkmark
     */
    onCheckmarkClick?: (item: IContextualMenuItem, ev: React.MouseEvent<HTMLElement>) => void;
    /**
     * This prop will get set by ContextualMenu and can be called to open this item's subMenu, if present.
     */
    openSubMenu?: (item: any, target: HTMLElement) => void;
    /**
     * This prop will get set by ContextualMenu and can be called to close this item's subMenu, if present.
     */
    dismissSubMenu?: () => void;
    /**
     * This prop will get set by ContextualMenu and can be called to close the menu this item belongs to.
     * If dismissAll is true, all menus will be closed.
     */
    dismissMenu?: (ev?: any, dismissAll?: boolean) => void;
    /**
     * This prop will get set by the wrapping component and will return the element that wraps this ContextualMenuItem.
     * Used for openSubMenu.
     */
    getSubmenuTarget?: () => HTMLElement | undefined;
}

export declare interface IContextualMenuItemRenderFunctions {
    /**
     * Rendering function for check mark icon
     */
    renderCheckMarkIcon: (props: IContextualMenuItemProps, customClassNames?: string[]) => React.ReactNode;
    /**
     * Rendering function for item icon
     */
    renderItemIcon: (props: IContextualMenuItemProps, customClassNames?: string[]) => React.ReactNode;
    /**
     * Rendering function for item label
     */
    renderItemName: (props: IContextualMenuItemProps, customClassNames?: string[]) => React.ReactNode;
    /**
     * Rendering function for secondary text label
     */
    renderSecondaryText: (props: IContextualMenuItemProps, customClassNames?: string[]) => React.ReactNode;
    /**
     * Rendering function for submenu icon
     */
    renderSubMenuIcon: (props: IContextualMenuItemProps, customClassNames?: string[]) => React.ReactNode;
}

/**
 * {@docCategory ContextualMenu}
 */
export declare interface IContextualMenuItemRenderProps extends IContextualMenuItem {
    index: number;
    focusableElementIndex: number;
    totalItemCount: number;
    hasCheckmarks: boolean;
    hasIcons: boolean;
}

/**
 * {@docCategory ContextualMenu}
 */
export declare interface IContextualMenuItemStyleProps {
    /**
     * Theme provided by High-Order Component.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    /**
     * Whether or not the menu item is disabled.
     */
    disabled: boolean;
    /**
     * Whether or not the menu item is expanded.
     */
    expanded: boolean;
    /**
     * Whether or not the menu item is checked.
     */
    checked: boolean;
    /**
     * Indicates if a menu item is an anchor link.
     */
    isAnchorLink: boolean;
    /**
     * Indicates if the icon used is of the known set of icons.
     */
    knownIcon: boolean;
    /**
     * The optional class name to apply to the item element.
     */
    itemClassName?: string;
    /**
     * The optional class name to apply to the divider element.
     */
    dividerClassName?: string;
    /**
     * The optional class name to apply to the icon element.
     */
    iconClassName?: string;
    /**
     * The optional class name to apply to the sub-menu if present.
     */
    subMenuClassName?: string;
    /**
     * Whether or not the primary section of a split menu item is disabled.
     */
    primaryDisabled?: boolean;
}

/**
 * {@docCategory ContextualMenu}
 */
export declare interface IContextualMenuItemStyles extends IButtonStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
    /**
     * Styles for a menu item that is an anchor link.
     */
    item: IStyle;
    /**
     * Styles for a divider item of a ContextualMenu.
     */
    divider: IStyle;
    /**
     * Styles for the content inside the button/link of the menuItem.
     */
    linkContent: IStyle;
    /**
     * Styles for a menu item that is an anchor link.
     */
    anchorLink: IStyle;
    /**
     * Styles for the icon element of a menu item.
     */
    icon: IStyle;
    /**
     * Default icon color style for known icons.
     */
    iconColor: IStyle;
    /**
     * Default style for checkmark icons.
     */
    checkmarkIcon: IStyle;
    /**
     * Styles for the submenu icon of a menu item.
     */
    subMenuIcon: IStyle;
    /**
     * Styles for the label of a menu item.
     */
    label: IStyle;
    /**
     * Styles for the secondary text of a menu item.
     */
    secondaryText: IStyle;
    /**
     * Styles for the container of a split menu item.
     */
    splitContainer: IStyle;
    /**
     * Styles for the primary portion of a split menu item.
     */
    splitPrimary: IStyle;
    /**
     * Styles for the menu portion of a split menu item.
     */
    splitMenu: IStyle;
    /**
     * Styles for a menu item that is a link.
     */
    linkContentMenu: IStyle;
    /**
     * Styles for hidden screen reader text.
     */
    screenReaderText: IStyle;
}

/**
 * {@docCategory ContextualMenu}
 */
export declare interface IContextualMenuListProps {
    items: IContextualMenuItem[];
    totalItemCount: number;
    hasCheckmarks: boolean;
    hasIcons: boolean;
    defaultMenuItemRenderer: (item: IContextualMenuItemRenderProps) => React.ReactNode;
    role?: string;
}

/**
 * {@docCategory ContextualMenu}
 */
export declare interface IContextualMenuProps extends IBaseProps<IContextualMenu>, React.RefAttributes<HTMLDivElement>, IWithResponsiveModeState {
    /**
     * Optional callback to access the IContextualMenu interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IContextualMenu>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IContextualMenuStyleProps, IContextualMenuStyles>;
    /**
     * Theme provided by higher-order component.
     */
    theme?: ITheme;
    /**
     * Additional CSS class to apply to the ContextualMenu.
     */
    className?: string;
    /**
     * The target that the ContextualMenu should try to position itself based on.
     * It can be either an element, a query selector string resolving to a valid element,
     * or a MouseEvent. If a MouseEvent is given, the origin point of the event will be used.
     */
    target?: Target;
    /**
     * How the menu should be positioned
     * @defaultvalue DirectionalHint.bottomAutoEdge
     */
    directionalHint?: DirectionalHint;
    /**
     * How the menu should be positioned in RTL layouts.
     * If not specified, a mirror of `directionalHint` will be used.
     */
    directionalHintForRTL?: DirectionalHint;
    /**
     * The gap between the ContextualMenu and the target
     * @defaultvalue 0
     */
    gapSpace?: number;
    /**
     * The width of the beak.
     * @defaultvalue 16
     */
    beakWidth?: number;
    /**
     * If true the context menu will render as the same width as the target element
     * @defaultvalue false
     */
    useTargetWidth?: boolean;
    /**
     * If true the context menu will have a minimum width equal to the width of the target element
     * @defaultvalue false
     */
    useTargetAsMinWidth?: boolean;
    /**
     * The bounding rectangle (or callback that returns a rectangle) which the contextual menu can appear in.
     */
    bounds?: IRectangle | ((target?: Target, targetWindow?: Window) => IRectangle | undefined);
    /**
     * If true then the beak is visible. If false it will not be shown.
     */
    isBeakVisible?: boolean;
    /**
     * If true, the menu will be positioned to cover the target.
     * If false, it will be positioned next to the target.
     * @defaultvalue false
     */
    coverTarget?: boolean;
    /**
     * If true the positioning logic will prefer to flip edges rather than to nudge the rectangle to fit within bounds,
     * thus making sure the element aligns perfectly with target's alignment edge
     */
    alignTargetEdge?: boolean;
    /**
     * Menu items to display.
     */
    items: IContextualMenuItem[];
    /**
     * Used as `aria-labelledby` for the menu element inside the callout.
     */
    labelElementId?: string;
    /**
     * Whether to focus on the menu when mounted.
     * @defaultvalue true
     */
    shouldFocusOnMount?: boolean;
    /**
     * Whether to focus on the contextual menu container (as opposed to the first menu item).
     */
    shouldFocusOnContainer?: boolean;
    /**
     * Callback when the ContextualMenu tries to close. If `dismissAll` is true then all
     * submenus will be dismissed.
     */
    onDismiss?: (ev?: Event | React.MouseEvent | React.KeyboardEvent, dismissAll?: boolean) => void;
    /**
     * Click handler which is invoked if `onClick` is not passed for individual contextual
     * menu item.
     * Returning true will dismiss the menu even if `ev.preventDefault()` was called.
     */
    onItemClick?: (ev?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>, item?: IContextualMenuItem) => boolean | void;
    /**
     * Whether this menu is a submenu of another menu.
     */
    isSubMenu?: boolean;
    /**
     * ID for the ContextualMenu's root element (inside the callout).
     * Should be used for `aria-owns` and other such uses, rather than direct reference for programmatic purposes.
     */
    id?: string;
    /**
     * Accessible label for the ContextualMenu's root element (inside the callout).
     */
    ariaLabel?: string;
    /**
     * If true do not render on a new layer. If false render on a new layer.
     * @defaultvalue false
     */
    doNotLayer?: boolean;
    /**
     * If true the position will not change sides in an attempt to fit the ContextualMenu within bounds.
     * It will still attempt to align it to whatever bounds are given.
     * @defaultvalue false
     */
    directionalHintFixed?: boolean;
    /**
     * Callback for when the menu has been opened.
     */
    onMenuOpened?: (contextualMenu?: IContextualMenuProps) => void;
    /**
     * Callback for when the menu is being closed (removing from the DOM).
     */
    onMenuDismissed?: (contextualMenu?: IContextualMenuProps) => void;
    /**
     * Additional custom props for the Callout.
     */
    calloutProps?: ICalloutProps;
    /**
     * Title to be displayed at the top of the menu, above the items.
     */
    title?: string;
    /**
     * Method to provide the classnames to style the contextual menu.
     * @deprecated Use `styles` instead to leverage mergeStyles API.
     */
    getMenuClassNames?: (theme: ITheme, className?: string) => IContextualMenuClassNames;
    /** Custom render function for a submenu. */
    onRenderSubMenu?: IRenderFunction<IContextualMenuProps>;
    /**
     * Method to override the render of the list of menu items.
     */
    onRenderMenuList?: IRenderFunction<IContextualMenuListProps>;
    /**
     * Delay (in milliseconds) to wait before expanding / dismissing a submenu on mouseEnter or mouseLeave
     */
    subMenuHoverDelay?: number;
    /**
     * Custom component to use for rendering individual menu items.
     * @defaultvalue ContextualMenuItem
     */
    contextualMenuItemAs?: React.ComponentClass<IContextualMenuItemProps> | React.FunctionComponent<IContextualMenuItemProps>;
    /**
     * Props to pass down to the FocusZone.
     * NOTE: the default FocusZoneDirection will be used unless a direction
     * is specified in the focusZoneProps (even if other focusZoneProps are defined)
     * @defaultvalue \{ direction: FocusZoneDirection.vertical \}
     */
    focusZoneProps?: IFocusZoneProps;
    /**
     * If true, renders the ContextualMenu in a hidden state.
     * Use this flag, rather than rendering a ContextualMenu conditionally based on visibility,
     * to improve rendering performance when it becomes visible.
     * Note: When ContextualMenu is hidden its content will not be rendered. It will only render
     * once the ContextualMenu is visible.
     */
    hidden?: boolean;
    /**
     * If true, the menu will be updated even when `hidden=true`. Note that this will consume
     * resources to update even when nothing is being shown to the user. This might be helpful if
     * your updates are small and you want the menu to display quickly when `hidden` is set to false.
     */
    shouldUpdateWhenHidden?: boolean;
    /**
     * If true, the contextual menu will not be updated until focus enters the menu via other means.
     * This will only result in different behavior when `shouldFocusOnMount = false`.
     */
    delayUpdateFocusOnHover?: boolean;
    /**
     * Called when the component is unmounting, and focus needs to be restored. If this is provided,
     * focus will not be restored automatically, and you'll need to call `params.originalElement.focus()`.
     */
    onRestoreFocus?: (params: IPopupRestoreFocusParams) => void;
}

/**
 * {@docCategory ContextualMenu}
 */
export declare interface IContextualMenuRenderItem {
    /**
     * Function to open this item's subMenu, if present.
     */
    openSubMenu: () => void;
    /**
     * Function to close this item's subMenu, if present.
     */
    dismissSubMenu: () => void;
    /**
     * Dismiss the menu this item belongs to.
     */
    dismissMenu: (dismissAll?: boolean) => void;
}

/**
 * {@docCategory ContextualMenu}
 */
export declare interface IContextualMenuSection extends React.ClassAttributes<any> {
    /**
     * The items to include inside the section.
     */
    items: IContextualMenuItem[];
    /**
     * The optional section title.
     */
    title?: string;
    /**
     * If set to true, the section will display a divider at the top of the section.
     */
    topDivider?: boolean;
    /**
     * If set to true, the section will display a divider at the bottom of the section.
     */
    bottomDivider?: boolean;
}

export declare interface IContextualMenuState {
    contextualMenuItems?: IContextualMenuItem[];
    contextualMenuTarget?: Element;
    positions?: any;
    slideDirectionalClassName?: string;
    subMenuId?: string;
    submenuDirection?: DirectionalHint;
}

/**
 * {@docCategory ContextualMenu}
 */
export declare interface IContextualMenuStyleProps {
    theme: ITheme;
    className?: string;
}

/**
 * {@docCategory ContextualMenu}
 */
export declare interface IContextualMenuStyles {
    /**
     * Style override for the contextual menu title.
     */
    title: IStyle;
    /**
     * Style for the container which parents all menu items.
     */
    container: IStyle;
    /**
     * Base styles for the root element of all ContextualMenus.
     */
    root: IStyle;
    /**
     * Styles for the header item of a ContextualMenu
     */
    header: IStyle;
    /**
     * Styles for the list that contains all menuItems.
     */
    list: IStyle;
    /**
     * SubComponent styles.
     */
    subComponentStyles: IContextualMenuSubComponentStyles;
}

/**
 * {@docCategory ContextualMenu}
 */
export declare interface IContextualMenuSubComponentStyles {
    /** Styles for the callout that hosts the ContextualMenu options. */
    callout: IStyleFunctionOrObject<ICalloutContentStyleProps, any>;
    /** Styles for each menu item. */
    menuItem: IStyleFunctionOrObject<IContextualMenuItemStyleProps, any>;
}

/**
 * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
 * {@docCategory Icon}
 */
export declare enum IconType {
    /**
     * Render using the fabric icon font.
     * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
     */
    default = 0,
    /**
     * Render using an image, where imageProps would be used.
     * @deprecated Icon type is inferred based on presence of `IIconProps.imageProps`
     */
    image = 1,
    /**
     * Deprecated, use `default`.
     * @deprecated Use `default`.
     */
    Default = 100000,
    /**
     * Deprecated, use `image`.
     * @deprecated Use `image`.
     */
    Image = 100001
}

/**
 * {@docCategory Dialog}
 */
export declare interface IDialog {
}

/**
 * {@docCategory Dialog}
 */
export declare interface IDialogContent {
}

/**
 * {@docCategory Dialog}
 */
export declare interface IDialogContentProps extends React.ClassAttributes<DialogContentBase> {
    /**
     * Optional callback to access the IDialogContent interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IDialogContent>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules
     */
    styles?: IStyleFunctionOrObject<IDialogContentStyleProps, IDialogContentStyles>;
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;
    /**
     * Is inside a multiline wrapper
     */
    isMultiline?: boolean;
    /**
     * Show an 'x' close button in the upper-right corner
     */
    showCloseButton?: boolean;
    /**
     * Other top buttons that will show up next to the close button
     */
    topButtonsProps?: IButtonProps[];
    /**
     * Optional override class name
     */
    className?: string;
    /**
     * Callback for when the Dialog is dismissed from the close button or light dismiss, before the animation completes.
     */
    onDismiss?: (ev?: React.MouseEvent<HTMLButtonElement>) => any;
    /**
     * The Id for subText container
     */
    subTextId?: string;
    /**
     * The subtext to display in the dialog
     */
    subText?: string;
    /**
     * The Id for title container
     *
     * @deprecated use the `id` attribute in `titleProps` instead.
     */
    titleId?: string;
    /**
     * The title text to display at the top of the dialog.
     */
    title?: string | JSX.Element;
    /**
     * The props for title container.
     */
    titleProps?: React.HTMLAttributes<HTMLDivElement>;
    /**
     * Responsive mode passed in from decorator.
     */
    responsiveMode?: ResponsiveMode;
    /**
     * Label to be passed to to aria-label of close button
     * @defaultvalue Close
     */
    closeButtonAriaLabel?: string;
    /**
     * The type of Dialog to display.
     * @defaultvalue DialogType.normal
     */
    type?: DialogType;
    /**
     * The classname for when the header is draggable
     */
    draggableHeaderClassName?: string;
}

/**
 * {@docCategory Dialog}
 */
export declare interface IDialogContentStyleProps {
    /**
     * Accept theme prop.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    isLargeHeader?: boolean;
    isClose?: boolean;
    hidden?: boolean;
    /**
     * Is inside a multiline wrapper
     */
    isMultiline?: boolean;
    /**
     * The classname for when the header is draggable
     */
    draggableHeaderClassName?: string;
}

/**
 * {@docCategory Dialog}
 */
export declare interface IDialogContentStyles {
    /**
     * Style for the content element.
     */
    content: IStyle;
    subText: IStyle;
    header: IStyle;
    button: IStyle;
    inner: IStyle;
    innerContent: IStyle;
    title: IStyle;
    topButton: IStyle;
}

/**
 * {@docCategory Dialog}
 */
export declare interface IDialogFooter {
}

/**
 * {@docCategory Dialog}
 */
export declare interface IDialogFooterProps extends React.Props<DialogFooterBase> {
    /**
     * Gets the component ref.
     */
    componentRef?: IRefObject<IDialogFooter>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules
     */
    styles?: IStyleFunctionOrObject<IDialogFooterStyleProps, IDialogFooterStyles>;
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;
    /**
     * Optional override class name
     */
    className?: string;
}

/**
 * {@docCategory Dialog}
 */
export declare interface IDialogFooterStyleProps {
    /**
     * Accept theme prop.
     */
    theme: ITheme;
    /**
     * Optional override class name
     */
    className?: string;
}

/**
 * {@docCategory Dialog}
 */
export declare interface IDialogFooterStyles {
    /**
     * Style for the actions element.
     */
    actions: IStyle;
    actionsRight: IStyle;
    action: IStyle;
}

/**
 * {@docCategory Dialog}
 */
export declare interface IDialogProps extends React.ClassAttributes<DialogBase>, IWithResponsiveModeState, IAccessiblePopupProps {
    /**
     * Optional callback to access the IDialog interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     * @deprecated Unused, returns no value
     */
    componentRef?: IRefObject<IDialog>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules
     */
    styles?: IStyleFunctionOrObject<IDialogStyleProps, IDialogStyles>;
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;
    /**
     * Props to be passed through to Dialog Content
     */
    dialogContentProps?: IDialogContentProps;
    /**
     * A callback function for when the Dialog is dismissed from the close button or light dismiss.
     * Can also be specified separately in content and modal.
     */
    onDismiss?: (ev?: React.MouseEvent<HTMLButtonElement>) => any;
    /**
     * Whether the dialog is hidden.
     * @defaultvalue true
     */
    hidden?: boolean;
    /**
     * Props to be passed through to Modal
     */
    modalProps?: IModalProps;
    /**
     * Whether the dialog is displayed.
     * Deprecated, use `hidden` instead.
     * @defaultvalue false
     * @deprecated Use `hidden` instead
     */
    isOpen?: boolean;
    /**
     * Whether the overlay is dark themed.
     * @defaultvalue true
     * @deprecated Pass through via `modalProps` instead
     */
    isDarkOverlay?: boolean;
    /**
     * A callback function which is called after the Dialog is dismissed and the animation is complete.
     * @deprecated Pass through via `modalProps` instead
     */
    onDismissed?: () => any;
    /**
     * Whether the dialog can be light dismissed by clicking outside the dialog (on the overlay).
     * @defaultvalue false
     * @deprecated Pass through via `modalProps` instead
     */
    isBlocking?: boolean;
    /**
     * Optional class name to be added to the root class
     * @deprecated Pass through via `modalProps.className` instead
     */
    className?: string;
    /**
     * Optional override for container class
     * @deprecated Pass through via `modalProps.className` instead
     */
    containerClassName?: string;
    /**
     * A callback function for when the Dialog content is mounted on the overlay layer
     * @deprecated Pass through via `modalProps.layerProps` instead
     */
    onLayerDidMount?: () => void;
    /**
     * Deprecated at 0.81.2, use `onLayerDidMount` instead.
     * @deprecated Use `onLayerDidMount` instead.
     */
    onLayerMounted?: () => void;
    /**
     * The type of Dialog to display.
     * @defaultvalue DialogType.normal
     * @deprecated Pass through via `dialogContentProps` instead.
     */
    type?: DialogType;
    /**
     * The title text to display at the top of the dialog.
     * @deprecated Pass through via `dialogContentProps` instead.
     */
    title?: string | JSX.Element;
    /**
     * The subtext to display in the dialog.
     * @deprecated Pass through via `dialogContentProps` instead.
     */
    subText?: string;
    /**
     * Optional override content class
     * @deprecated Pass through via `dialogContentProps` instead as `className`.
     */
    contentClassName?: string;
    /**
     * Other top buttons that will show up next to the close button
     * @deprecated Pass through via `dialogContentProps` instead.
     */
    topButtonsProps?: IButtonProps[];
    /**
     * Optional id for aria-LabelledBy
     * @deprecated Pass through via `modalProps.titleAriaId` instead.
     */
    ariaLabelledById?: string;
    /**
     * Optional id for aria-DescribedBy
     * @deprecated Pass through via `modalProps.subtitleAriaId` instead.
     */
    ariaDescribedById?: string;
    /**
     * Sets the minimum width of the dialog. It limits the width property to be not
     * smaller than the value specified in min-width.
     */
    minWidth?: ICSSRule | ICSSPixelUnitRule;
    /**
     * Sets the maximum width for the dialog. It limits the width property to be larger
     * than the value specified in max-width.
     */
    maxWidth?: ICSSRule | ICSSPixelUnitRule;
}

/**
 * {@docCategory Dialog}
 */
export declare interface IDialogStyleProps {
    /**
     * Accept theme prop.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    /**
     * Optional override for container class
     * @deprecated Pass through via `modalProps.className` instead.
     */
    containerClassName?: string;
    /**
     * Optional override content class
     * @deprecated Pass through via `dialogContentProps` instead as `className`.
     */
    contentClassName?: string;
    /**
     * Whether the dialog is hidden.
     * @defaultvalue false
     */
    hidden?: boolean;
    /**
     * Default min-width for the dialog box.
     * @defaultvalue '288px'
     */
    dialogDefaultMinWidth?: string | ICSSRule | ICSSPixelUnitRule;
    /**
     * Default max-width for the dialog box.
     * @defaultvalue '340px'
     */
    dialogDefaultMaxWidth?: string | ICSSRule | ICSSPixelUnitRule;
}

/**
 * {@docCategory Dialog}
 */
export declare interface IDialogStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
    main: IStyle;
}

/**
 * Drag & drop event contextual information.
 *
 * {@docCategory IDragDropHelper}
 */
export declare interface IDragDropContext {
    /**
     * Data associated with drag & drop action.
     */
    data: any;
    /**
     * Index of drag & drop action.
     */
    index: number;
    /**
     * Whether or not drag & drop region is indivual or group of content.
     */
    isGroup?: boolean;
}

/**
 * {@docCategory IDragDropHelper}
 */
export declare interface IDragDropEvent {
    /**
     * Whether or not the drag & drop event was handled.
     */
    isHandled?: boolean;
}

/**
 * Drag & drop event callback interface.
 *
 * {@docCategory IDragDropHelper}
 */
export declare interface IDragDropEvents {
    /**
     * Whether or not drop action is allowed.
     */
    canDrop?: (dropContext?: IDragDropContext, dragContext?: IDragDropContext) => boolean;
    /**
     * Whether or not drag action is allowed.
     */
    canDrag?: (item?: any) => boolean;
    /**
     * On drag enter region event callback.
     * Returned string is the css classes that will be added to the entering element.
     */
    onDragEnter?: (item?: any, event?: DragEvent) => string;
    /**
     * On drag leave region event callback.
     */
    onDragLeave?: (item?: any, event?: DragEvent) => void;
    /**
     * On drop event callback.
     */
    onDrop?: (item?: any, event?: DragEvent) => void;
    /**
     * On drag start event callback.
     */
    onDragStart?: (item?: any, itemIndex?: number, selectedItems?: any[], event?: MouseEvent) => void;
    /**
     * On drag end event callback.
     */
    onDragEnd?: (item?: any, event?: DragEvent) => void;
    /**
     * On drag over event callback.
     */
    onDragOver?: (item?: any, event?: DragEvent) => void;
    /**
     * Whether the whole group is draggable. This applies after canDrag returns true for the group.
     */
    canDragGroups?: boolean;
}

/**
 * Helper for subscribing and unsubscribing to
 * drag and drop events on an HTMLElement.
 *
 * {@docCategory IDragDropHelper}
 */
export declare interface IDragDropHelper {
    /**
     * Subscribe to events on a DOM node with drag and drop configuration.
     */
    subscribe: (root: HTMLElement, events: EventGroup, options: IDragDropOptions) => {
        key: string;
        dispose: () => void;
    };
    /**
     * Unsubscribe to events registered on a DOM node with key.
     */
    unsubscribe: (root: HTMLElement, key: string) => void;
    /**
     * Dispose of listeners bound to instance of helper.
     */
    dispose: () => void;
}

export declare interface IDragDropHelperParams {
    selection: ISelection;
    minimumPixelsForDrag?: number;
}

/**
 * The drag and drop event listener configuration.
 *
 * {@docCategory IDragDropHelper}
 */
export declare interface IDragDropOptions {
    /**
     * Unique key to associate with instance.
     */
    key?: string;
    /**
     * Map of event name to callback function to subscribe to.
     */
    eventMap?: {
        eventName: string;
        callback: (context: IDragDropContext, event?: any) => void;
    }[];
    /**
     * Selection index on drag and drop event.
     */
    selectionIndex: number;
    /**
     * Context associated with drag and drop event.
     */
    context: IDragDropContext;
    /**
     * Callback on drop state update.
     */
    updateDropState: (isDropping: boolean, event: DragEvent) => void;
    /**
     * Whether or not drop action is allowed.
     */
    canDrop?: (dropContext?: IDragDropContext, dragContext?: IDragDropContext) => boolean;
    /**
     * Whether or not drag action is allowed.
     */
    canDrag?: (item?: any) => boolean;
    /**
     * On drag start event callback.
     */
    onDragStart?: (item?: any, itemIndex?: number, selectedItems?: any[], event?: MouseEvent) => void;
    /**
     * On drop event callback.
     */
    onDrop?: (item?: any, event?: DragEvent) => void;
    /**
     * On drag end event callback.
     */
    onDragEnd?: (item?: any, event?: DragEvent) => void;
    /**
     * On drag over element(s) event callback.
     */
    onDragOver?: (item?: any, event?: DragEvent) => void;
}

export declare interface IDragDropTarget {
    root: HTMLElement;
    options: IDragDropOptions;
    key: string;
}

export declare interface IDragOptions {
    /**
     * Optional selector for the element where the drag can be initiated. If not supplied when
     * isDraggable is true dragging can be initiated by the whole contents of the modal
     */
    dragHandleSelector?: string;
    /**
     * IconProps for the icon used to indicate that the dialog is in keyboard move mode
     */
    keyboardMoveIconProps?: IIconProps;
    /**
     * The text to use for the modal move menu item
     */
    moveMenuItemText: string;
    /**
     * The text to use for the modal close menu item
     */
    closeMenuItemText: string;
    /**
     * The Draggable Control Menu so that the draggable zone can be moved via the keyboard
     */
    menu: React.FunctionComponent<IContextualMenuProps>;
    /**
     * Whether the draggable content should be prevented from going off-screen
     */
    keepInBounds?: boolean;
}

export declare interface IEditingSelectedPeopleItemProps extends ISelectedPeopleItemProps {
    onEditingComplete: (oldItem: any, newItem: any) => void;
    onRenderFloatingPicker?: React.ComponentType<IBaseFloatingPickerProps<IPersonaProps>>;
    floatingPickerProps?: IBaseFloatingPickerProps<IPersonaProps>;
    getEditingItemText?: (item: IExtendedPersonaProps) => string;
}

export declare interface IEditingSelectedPeopleItemStyles {
    root: IStyle;
    input: IStyle;
}

export declare interface IEditingSelectedPeopleItemStylesProps {
}

/**
 * Do not call methods from this directly, use either positionCallout or positionElement or make another function that
 * utilizes them.
 * START Private functions and interfaces
 */
export declare interface IElementPosition {
    elementRectangle: Rectangle;
    targetEdge: RectangleEdge;
    alignmentEdge: RectangleEdge | undefined;
}

export declare interface IElementPositionInfo extends IElementPosition {
    targetRectangle: Rectangle;
}

/**
 * An interface for the cached dimensions of entity inner host.
 */
export declare interface IEntityRect {
    width?: number;
    height?: number;
}

/**
 * {@docCategory HoverCard}
 */
export declare interface IExpandingCard {
}

/**
 * ExpandingCard component props.
 * {@docCategory HoverCard}
 */
export declare interface IExpandingCardProps extends IBaseCardProps<IExpandingCard, IExpandingCardStyles, IExpandingCardStyleProps> {
    /**
     * Height of compact card
     * @defaultvalue 156
     */
    compactCardHeight?: number;
    /**
     * Height of expanded card
     * @defaultvalue 384
     */
    expandedCardHeight?: number;
    /**
     * Use to open the card in expanded format and not wait for the delay
     * @defaultvalue ExpandingCardMode.compact
     */
    mode?: ExpandingCardMode;
    /**
     *  Render function to populate compact content area
     */
    onRenderCompactCard?: IRenderFunction<any>;
    /**
     *  Render function to populate expanded content area
     */
    onRenderExpandedCard?: IRenderFunction<any>;
}

export declare interface IExpandingCardState {
    firstFrameRendered: boolean;
    needsScroll: boolean;
}

/**
 * {@docCategory HoverCard}
 */
export declare interface IExpandingCardStyleProps extends IBaseCardStyleProps {
    /**
     * Height of the compact section of the card.
     */
    compactCardHeight?: number;
    /**
     * Boolean flag that expanded card is in Expanded.mode === expanded && first frame was rendered.
     */
    expandedCardFirstFrameRendered?: boolean;
    /**
     * Height of the expanded section of the card.
     */
    expandedCardHeight?: number;
    /**
     * Whether the content of the expanded card overflows vertically.
     */
    needsScroll?: boolean;
}

/**
 * {@docCategory HoverCard}
 */
export declare interface IExpandingCardStyles extends IBaseCardStyles {
    /**
     * Style for the main card element.
     */
    compactCard?: IStyle;
    /**
     * Base Style for the expanded card content.
     */
    expandedCard?: IStyle;
    /**
     * Style for the expanded card scroll content.
     */
    expandedCardScroll?: IStyle;
}

/**
 * {@docCategory ExtendedPeoplePicker}
 */
export declare interface IExtendedPeoplePickerProps extends IBaseExtendedPickerProps<IPersonaProps> {
}

/**
 * {@docCategory SelectedPeopleList}
 */
export declare interface IExtendedPersonaProps extends IPersonaProps {
    key?: React.Key;
    isValid: boolean;
    blockRecipientRemoval?: boolean;
    shouldBlockSelection?: boolean;
    canExpand?: boolean;
    isEditing?: boolean;
}

export declare interface IFabricProps extends React.HTMLAttributes<HTMLDivElement>, React.RefAttributes<HTMLDivElement> {
    componentRef?: IRefObject<{}>;
    /**
     * Overrides the root element type, defaults to `div`.
     */
    as?: React.ElementType;
    /**
     * Injected by the `styled` HOC wrapper.
     */
    theme?: ITheme;
    /**
     * Overrides the styles for the component.
     */
    styles?: IStyleFunctionOrObject<IFabricStyleProps, IFabricStyles>;
    /**
     * Applies the current body background specified in the theme to the root element.
     */
    applyTheme?: boolean;
    /**
     * Applies the current body background specified in the theme to the body element.
     */
    applyThemeToBody?: boolean;
    /**
     * Specifies the direction of the content. Will inject a `dir` attribute, and also ensure that the `rtl` flag of the
     * contextual theme object is set correctly so that css registered with merge-styles can be auto flipped correctly.
     */
    dir?: 'rtl' | 'ltr' | 'auto';
}

export declare interface IFabricStyleProps extends IFabricProps {
    theme: ITheme;
}

export declare interface IFabricStyles {
    root: IStyle;
    bodyThemed: IStyle;
}

/**
 * {@docCategory Facepile}
 */
export declare interface IFacepile {
}

/**
 * {@docCategory Facepile}
 */
export declare interface IFacepilePersona extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLDivElement> {
    /**
     * Name of the person.
     */
    personaName?: string;
    /**
     * Url to the image to use, should be a square aspect ratio and big enough to fit in the image area.
     */
    imageUrl?: string;
    /**
     * The user's initials to display in the image area when there is no image.
     * @defaultvalue [Derived from personaName]
     */
    imageInitials?: string;
    /**
     * Whether initials are calculated for phone numbers and number sequences.
     * Example: Set property to true to get initials for project names consisting of numbers only.
     * @defaultvalue false
     */
    allowPhoneInitials?: boolean;
    /**
     * The background color when the user's initials are displayed.
     * @defaultvalue [Derived from personaName]
     */
    initialsColor?: PersonaInitialsColor;
    /**
     * If provided, persona will be rendered with cursor:pointer and the handler will be
     * called on click.
     */
    onClick?: (ev?: React.MouseEvent<HTMLElement>, persona?: IFacepilePersona) => void;
    /**
     * If provided, the handler will be called on mouse move.
     */
    onMouseMove?: (ev?: React.MouseEvent<HTMLElement>, persona?: IFacepilePersona) => void;
    /**
     * If provided, the handler will be called when mouse moves out of the component.
     */
    onMouseOut?: (ev?: React.MouseEvent<HTMLElement>, persona?: IFacepilePersona) => void;
    /**
     * Extra data - not used directly but can be handy for passing additional data to custom event
     * handlers.
     */
    data?: any;
    /**
     * Optional keytip for this button that is only added when 'onClick' is defined for the persona
     */
    keytipProps?: IKeytipProps;
}

/**
 * {@docCategory Facepile}
 */
export declare interface IFacepileProps extends React.ClassAttributes<FacepileBase> {
    /**
     * Optional callback to access the IFacepile interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IFacepile>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IFacepileStyleProps, IFacepileStyles>;
    /**
     * Theme provided by High-Order Component.
     */
    theme?: ITheme;
    /**
     * Additional css class to apply to the Facepile
     * @defaultvalue undefined
     */
    className?: string;
    /**
     * Array of IPersonaProps that define each Persona.
     */
    personas: IFacepilePersona[];
    /**
     * Personas to place in the overflow
     */
    overflowPersonas?: IFacepilePersona[];
    /** Maximum number of personas to show */
    maxDisplayablePersonas?: number;
    /** Size to display the personas */
    personaSize?: PersonaSize;
    /** ARIA label for persona list */
    ariaDescription?: string;
    /**
     * Defines the aria label that the screen readers use when focus goes on a list of personas.
     */
    ariaLabel?: string;
    /** Show add person button */
    showAddButton?: boolean;
    /** Button properties for the add face button */
    addButtonProps?: IButtonProps;
    /**
     * Deprecated at v0.70, use `overflowButtonProps` instead.
     * @deprecated Use `overflowButtonProps` instead.
     */
    chevronButtonProps?: IButtonProps;
    /** Properties for the overflow icon */
    overflowButtonProps?: IButtonProps;
    /** Type of overflow icon to use */
    overflowButtonType?: OverflowButtonType;
    /** Optional custom renderer for the persona, gets called when there is one persona in personas array*/
    onRenderPersona?: IRenderFunction<IFacepilePersona>;
    /** Optional custom renderer for the persona coins, gets called when there are multiple persona in personas array*/
    onRenderPersonaCoin?: IRenderFunction<IFacepilePersona>;
    /** Method to access properties on the underlying Persona control */
    getPersonaProps?: (persona: IFacepilePersona) => IPersonaSharedProps;
}

/**
 * {@docCategory Facepile}
 */
export declare interface IFacepileStyleProps {
    /**
     * Theme provided by High-Order Component.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    /**
     * Pixel value for spacing around button. Number value set in pixels
     */
    spacingAroundItemButton?: number;
}

/**
 * {@docCategory Facepile}
 */
export declare interface IFacepileStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
    addButton: IStyle;
    descriptiveOverflowButton: IStyle;
    itemContainer: IStyle;
    itemButton: IStyle;
    members: IStyle;
    member: IStyle;
    overflowButton: IStyle;
    overflowInitialsIcon: IStyle;
    screenReaderOnly: IStyle;
}

export declare interface IFocusTrapCalloutProps extends ICalloutProps {
    /**
     * Optional props to be passed on to FocusTrapZone
     */
    focusTrapProps?: IFocusTrapZoneProps;
}

/**
 * {@docCategory FocusTrapZone}
 */
export declare interface IFocusTrapZone {
    /**
     * Sets focus to a descendant in the Trap Zone.
     * See firstFocusableSelector and focusPreviouslyFocusedInnerElement for details.
     */
    focus: () => void;
}

/**
 * {@docCategory FocusTrapZone}
 */
export declare interface IFocusTrapZoneProps extends React.HTMLAttributes<HTMLDivElement>, React.RefAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the IFocusTrapZone interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IFocusTrapZone>;
    /**
     * Whether to disable the FocusTrapZone's focus trapping behavior.
     * @defaultvalue false
     */
    disabled?: boolean;
    /**
     * Sets the element to focus on when exiting the FocusTrapZone.
     * @defaultvalue The `element.target` that triggered the FTZ.
     */
    elementToFocusOnDismiss?: HTMLElement;
    /**
     * Sets the aria-labelledby attribute.
     */
    ariaLabelledBy?: string;
    /**
     * Whether clicks are allowed outside this FocusTrapZone.
     * @defaultvalue false
     */
    isClickableOutsideFocusTrap?: boolean;
    /**
     * If false (the default), the trap zone will restore focus to the element which activated it
     * once the trap zone is unmounted or disabled. Set to true to disable this behavior.
     * @defaultvalue false
     */
    ignoreExternalFocusing?: boolean;
    /**
     * Whether the focus trap zone should force focus to stay inside of it.
     * @defaultvalue true
     */
    forceFocusInsideTrap?: boolean;
    /**
     * Class name (not actual selector) for first focusable item. Do not append a dot.
     * Only applies if `focusPreviouslyFocusedInnerElement` is false.
     */
    firstFocusableSelector?: string | (() => string);
    /**
     * Do not put focus onto the first element inside the focus trap zone.
     * @defaultvalue false
     */
    disableFirstFocus?: boolean;
    /**
     * Specifies which descendant element to focus when `focus()` is called.
     * If false, use the first focusable descendant, filtered by the `firstFocusableSelector` property if present.
     * If true, use the element that was focused when the trap zone last had a focused descendant
     * (or fall back to the first focusable descendant if the trap zone has never been focused).
     * @defaultvalue false
     */
    focusPreviouslyFocusedInnerElement?: boolean;
    /**
     * Puts aria-hidden=true on all non-ancestors of the current element, for screen readers.
     * This is an experimental feature that will be graduated to default behavior after testing.
     * This flag will be removed with the next major release.
     */
    enableAriaHiddenSiblings?: boolean;
}

/**
 * Props for a basic icon component which only supports font glyphs and can't be targeted by customizations.
 * {@docCategory Icon}
 */
export declare interface IFontIconProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * The name of the icon to use from the icon font.
     * If string is empty, a placeholder icon will be rendered the same width as an icon.
     */
    iconName?: string;
    /**
     * Custom class to style the icon.
     */
    className?: string;
}

/**
 * Gap element interface
 * {@docCategory Shimmer}
 */
export declare interface IGap extends IShimmerElement {
    /**
     * Sets the height of the shimmer gap in pixels.
     * @defaultvalue 16px
     */
    height?: number;
    /**
     * Gap width value.
     * @defaultvalue 10px
     */
    width?: number | string;
}

/**
 * {@docCategory PeoplePicker}
 */
export declare interface IGenericItem {
    primaryText: string;
    imageInitials: string;
    ValidationState: ValidationState;
}

/**
 * {@docCategory HoverCard}
 */
export declare interface IHoverCard {
    /**
     * Public `dismiss` method to be used through `componentRef` of the HoverCard.
     * Boolean argument controls if the dismiss happens with a timeout delay.
     */
    dismiss: (withTimeOut?: boolean) => void;
}

/**
 * HoverCard component props.
 * {@docCategory HoverCard}
 */
export declare interface IHoverCardProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the IHoverCardHost interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IHoverCard>;
    /**
     * Additional CSS class(es) to apply to the HoverCard root element.
     */
    className?: string;
    /**
     * Length of card dismiss delay. A min number is necessary for pointer to hop between target and card
     * @defaultvalue 100
     */
    cardDismissDelay?: number;
    /**
     * Length of compact card delay
     * @defaultvalue 500
     */
    cardOpenDelay?: number;
    /**
     * Time in ms when expanded card should open after compact card
     * @defaultvalue 1500
     */
    expandedCardOpenDelay?: number;
    /**
     * Additional ExpandingCard props to pass through HoverCard like renderers, target. gapSpace etc.
     * Used along with 'type' prop set to HoverCardType.expanding.
     * Reference detail properties in ICardProps and IExpandingCardProps.
     */
    expandingCardProps?: IExpandingCardProps;
    /**
     * Enables instant open of the full card upon click
     * @defaultvalue false
     */
    instantOpenOnClick?: boolean;
    /**
     * Callback when card becomes visible
     */
    onCardVisible?: () => void;
    /**
     * Callback when card hides
     */
    onCardHide?: () => void;
    /**
     * HotKey used for opening the HoverCard when tabbed to target.
     * @defaultvalue 'KeyCodes.c'
     */
    openHotKey?: KeyCodes;
    /**
     * Additional PlainCard props to pass through HoverCard like renderers, target, gapSpace etc.
     * Used along with 'type' prop set to HoverCardType.plain.
     * See for more details ICardProps and IPlainCardProps interfaces.
     */
    plainCardProps?: IPlainCardProps;
    /**
     * Whether or not to mark the container as described by the hover card.
     * If not specified, the caller should mark as element as described by the hover card id.
     */
    setAriaDescribedBy?: boolean;
    /**
     * Callback when visible card is expanded.
     */
    onCardExpand?: () => void;
    /**
     * Set to true to set focus on the first focusable element in the card. Works in pair with the 'trapFocus' prop.
     * @defaultvalue false
     */
    setInitialFocus?: boolean;
    /**
     * Should block hover card or not
     */
    shouldBlockHoverCard?: () => void;
    /**
     * If true disables Card dismiss upon mouse leave, so that card sticks around.
     * @defaultvalue false
     */
    sticky?: boolean;
    /**
     * Custom styles for this component
     */
    styles?: IStyleFunctionOrObject<IHoverCardStyleProps, IHoverCardStyles>;
    /**
     * Optional target element to tag hover card on. If not provided and using HoverCard as a wrapper, don't set the
     * 'data-is-focusable=true' attribute to the root of the wrapped child.
     * If no target is given, HoverCard will use its root as a target and become the focusable element with a
     * focus listener attached to it.
     */
    target?: HTMLElement | string | null;
    /**
     * This prop is to separate the target to anchor hover card from the target to attach event listener.
     * If set, this prop separates the target to anchor the hover card from the target to attach the event listener.
     * When no `eventListenerTarget` given, HoverCard will use `target` prop or its root to set event listener.
     */
    eventListenerTarget?: HTMLElement | string | null;
    /**
     * Theme provided by higher order component.
     */
    theme?: ITheme;
    /**
     * Set to true if you want to render the content of the HoverCard in a FocusTrapZone for accessibility reasons.
     * Optionally 'setInitialFocus' prop can be set to true to move focus inside the FocusTrapZone.
     */
    trapFocus?: boolean;
    /**
     * Type of the hover card to render.
     * @defaultvalue HoverCardType.expanding
     */
    type?: HoverCardType;
}

export declare interface IHoverCardState {
    isHoverCardVisible?: boolean;
    mode?: ExpandingCardMode;
    openMode?: OpenCardMode;
}

/**
 * {@docCategory HoverCard}
 */
export declare interface IHoverCardStyleProps {
    /**
     * Theme provided by High-Order Component.
     */
    theme: ITheme;
    /**
     * Optional className(s) for the host div of HoverCard.
     */
    className?: string;
}

/**
 * {@docCategory HoverCard}
 */
export declare interface IHoverCardStyles {
    /**
     * Style for the host element in the default enabled, non-toggled state.
     */
    host?: IStyle;
}

export declare interface IHSL {
    /** Hue, range 0-359. */
    h: number;
    /** Saturation, range 0-100. */
    s: number;
    /** Lightness, range 0-100. */
    l: number;
}

export declare interface IHSV {
    /** Hue, range 0-359. */
    h: number;
    /** Saturation, range 0-100. */
    s: number;
    /** Value, range 0-100. */
    v: number;
}

export declare interface IIconContent {
    children?: string;
    iconClassName?: string;
    fontFamily?: string;
}

/**
 * {@docCategory Icon}
 */
export declare interface IIconProps extends IBaseProps, React.HTMLAttributes<HTMLElement> {
    /**
     * The name of the icon to use from the icon font.
     * If string is empty, a placeholder icon will be rendered the same width as an icon.
     */
    iconName?: string;
    /**
     * The aria label of the icon for the benefit of screen readers.
     * @deprecated Use the native prop `aria-label`
     */
    ariaLabel?: string;
    /**
     * The type of icon to render (image or icon font).
     * @deprecated Inferred based on the presence of `imageProps`
     */
    iconType?: IconType;
    /**
     * If rendering an image icon, these props will be passed to the Image component.
     */
    imageProps?: IImageProps;
    /**
     * If rendering an image icon, this component will be rendered in the event that loading the image fails.
     */
    imageErrorAs?: React.ComponentType<IImageProps>;
    /**
     * Gets the styles for an Icon.
     */
    styles?: IStyleFunctionOrObject<IIconStyleProps, IIconStyles>;
    theme?: ITheme;
}

export declare interface IIconState {
    imageLoadError: boolean;
}

/**
 * {@docCategory Icon}
 */
export declare interface IIconStyleProps {
    className?: string;
    iconClassName?: string;
    isPlaceholder: boolean;
    isImage: boolean;
    styles?: Partial<IIconStyles>;
    theme?: ITheme;
}

/**
 * {@docCategory Icon}
 */
export declare interface IIconStyles {
    root?: IStyle;
    /**
     * Deprecated. Use `root`.
     * @deprecated Use `root`.
     */
    imageContainer?: IStyle;
}

/**
 * {@docCategory Image}
 */
export declare interface IImage {
}

/**
 * Props for a basic image icon component which doesn't directly provide image load error handling
 * and can't be targeted by customizations.
 * {@docCategory Icon}
 */
export declare interface IImageIconProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Props passed to the Image component.
     */
    imageProps: IImageProps;
    /**
     * Custom class to style the icon.
     */
    className?: string;
}

/**
 * {@docCategory Image}
 */
export declare interface IImageProps extends React.ImgHTMLAttributes<HTMLImageElement>, React.RefAttributes<HTMLImageElement> {
    /**
     * Call to provide customized styling that will layer on top of the variant rules
     */
    styles?: IStyleFunctionOrObject<IImageStyleProps, IImageStyles>;
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;
    /**
     * Additional css class to apply to the Component
     * @defaultvalue undefined
     */
    className?: string;
    /**
     * If true, fades the image in when loaded.
     * @defaultvalue true
     */
    shouldFadeIn?: boolean;
    /**
     * If true, the image starts as visible and is hidden on error. Otherwise, the image is hidden until
     * it is successfully loaded. This disables shouldFadeIn.
     * @defaultvalue false;
     */
    shouldStartVisible?: boolean;
    /**
     * Used to determine how the image is scaled and cropped to fit the frame.
     *
     * @defaultvalue If both dimensions are provided, then the image is fit using ImageFit.scale.
     * Otherwise, the image won't be scaled or cropped.
     */
    imageFit?: ImageFit;
    /**
     * Deprecated at v1.3.6, to replace the src in case of errors, use `onLoadingStateChange` instead and
     * re-render the Image with a difference src.
     * @deprecated Use `onLoadingStateChange` instead and
     * re-render the Image with a difference src.
     */
    errorSrc?: string;
    /**
     * If true, the image frame will expand to fill its parent container.
     */
    maximizeFrame?: boolean;
    /**
     * Optional callback method for when the image load state has changed.
     * The 'loadState' parameter indicates the current state of the Image.
     */
    onLoadingStateChange?: (loadState: ImageLoadState) => void;
    /**
     * Specifies the cover style to be used for this image. If not
     * specified, this will be dynamically calculated based on the
     * aspect ratio for the image.
     */
    coverStyle?: ImageCoverStyle;
}

export declare interface IImageState {
    loadState?: ImageLoadState;
}

/**
 * {@docCategory Image}
 */
export declare interface IImageStyleProps {
    /**
     * Accept theme prop.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    /**
     * If true, the image frame will expand to fill its parent container.
     */
    maximizeFrame?: boolean;
    /**
     * If true, the image is loaded
     */
    isLoaded?: boolean;
    /**
     * If true, fades the image in when loaded.
     * @defaultvalue true
     */
    shouldFadeIn?: boolean;
    /**
     * If true, the image starts as visible and is hidden on error. Otherwise, the image is hidden until
     * it is successfully loaded. This disables shouldFadeIn.
     * @defaultvalue false;
     */
    shouldStartVisible?: boolean;
    /**
     * If true the image is coverStyle landscape instead of portrait
     */
    isLandscape?: boolean;
    /**
     * ImageFit booleans for center, cover, contain, centerContain, centerCover, none
     */
    isCenter?: boolean;
    isContain?: boolean;
    isCover?: boolean;
    isCenterContain?: boolean;
    isCenterCover?: boolean;
    isNone?: boolean;
    /**
     * if true image load is in error
     */
    isError?: boolean;
    /**
     * if true, imageFit is undefined
     */
    isNotImageFit?: boolean;
    /**
     * Image width value
     */
    width?: number | string;
    /**
     * Image height value
     */
    height?: number | string;
}

/**
 * {@docCategory Image}
 */
export declare interface IImageStyles {
    /**
     * Style set for the root div element.
     */
    root: IStyle;
    /**
     * Style set for the img element.
     */
    image: IStyle;
}

/**
 * Pickers' input props interface
 * {@docCategory Pickers}
 */
export declare interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * Screen reader label to apply to an input element.
     */
    'aria-label'?: string;
    /**
     * The default value to be visible when the autofill first created.
     * This is different than placeholder text because the placeholder text will disappear and re-appear. This
     * text persists until deleted or changed.
     */
    defaultVisibleValue?: string;
}

export declare interface IKeytipConfig {
    keytips: IKeytipConfigItem[];
}

export declare interface IKeytipConfigItem {
    /**
     * Key Sequence for this keytip only
     * If sequence is not defined it will be derived from the content string
     */
    sequence?: string;
    /**
     * Content for the keytip
     */
    content: string;
    /**
     * Identifier for the keytip, to be used to access in the configMap
     */
    id: string;
    /**
     * Optional props in IKeytipProps
     */
    optionalProps?: Partial<IKeytipProps>;
    /**
     * Children keytips of this keytip
     */
    children?: IKeytipConfigItem[];
}

export declare interface IKeytipConfigMap {
    [id: string]: IKeytipProps;
}

export declare interface IKeytipDataProps {
    /**
     * IKeytipProps to create from this KeytipData
     * If no keytipProps are defined, a keytip won't be registered
     */
    keytipProps?: IKeytipProps;
    /**
     * String to add to the aria-describedby generated by this KeytipData
     * It will prepend this string to the generated aria-describedby property
     */
    ariaDescribedBy?: string;
    /**
     * T/F if this keytip should be disabled upon creation
     */
    disabled?: boolean;
}

/**
 * {@docCategory Keytips}
 */
export declare interface IKeytipLayer {
}

/**
 * {@docCategory Keytips}
 */
export declare interface IKeytipLayerProps extends React.ClassAttributes<IKeytipLayer> {
    /**
     * Optional callback to access the KeytipLayer component. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IKeytipLayer>;
    /**
     * String to put inside the layer to be used for the aria-describedby for the component with the keytip
     * Should be one of the starting sequences
     */
    content: string;
    /**
     * List of key sequences that will start keytips mode
     */
    keytipStartSequences?: IKeytipTransitionKey[];
    /**
     * List of key sequences that execute the return functionality in keytips
     * (going back to the previous level of keytips)
     */
    keytipReturnSequences?: IKeytipTransitionKey[];
    /**
     * List of key sequences that will exit keytips mode
     */
    keytipExitSequences?: IKeytipTransitionKey[];
    /**
     * Callback function triggered when keytip mode is exited.
     * ev is the Mouse or Keyboard Event that triggered the exit, if any.
     */
    onExitKeytipMode?: (ev?: React.KeyboardEvent<HTMLElement> | React.MouseEvent<HTMLElement>) => void;
    /**
     * Callback function triggered when keytip mode is entered
     */
    onEnterKeytipMode?: () => void;
    /**
     * (Optional) Call to provide customized styling.
     */
    styles?: IStyleFunctionOrObject<IKeytipLayerStyleProps, IKeytipLayerStyles>;
}

export declare interface IKeytipLayerState {
    inKeytipMode: boolean;
    keytips: IKeytipProps[];
    visibleKeytips: IKeytipProps[];
}

/**
 * {@docCategory Keytips}
 */
export declare interface IKeytipLayerStyleProps {
}

/**
 * {@docCategory Keytips}
 */
export declare interface IKeytipLayerStyles {
    innerContent: IStyle;
}

/**
 * {@docCategory Keytips}
 */
export declare interface IKeytipProps {
    /**
     * Content to put inside the keytip
     */
    content: string;
    /**
     * Theme for the component
     */
    theme?: ITheme;
    /**
     * T/F if the corresponding control for this keytip is disabled
     */
    disabled?: boolean;
    /**
     * T/F if the keytip is visible
     */
    visible?: boolean;
    /**
     * Function to call when this keytip is activated.
     * 'executeTarget' is the DOM element marked with 'data-ktp-execute-target'.
     * 'target' is the DOM element marked with 'data-ktp-target'.
     */
    onExecute?: (executeTarget: HTMLElement | null, target: HTMLElement | null) => void;
    /**
     * Function to call when the keytip is the currentKeytip and a return sequence is pressed.
     * 'executeTarget' is the DOM element marked with 'data-ktp-execute-target'.
     * 'target' is the DOM element marked with 'data-ktp-target'.
     */
    onReturn?: (executeTarget: HTMLElement | null, target: HTMLElement | null) => void;
    /**
     * Array of KeySequences which is the full key sequence to trigger this keytip
     * Should not include initial 'start' key sequence
     */
    keySequences: string[];
    /**
     * Full KeySequence of the overflow set button, will be set automatically if this keytip is inside an overflow
     */
    overflowSetSequence?: string[];
    /**
     * ICalloutProps to pass to the callout element
     */
    calloutProps?: ICalloutProps;
    /**
     * Optional styles for the component.
     */
    styles?: IStyleFunctionOrObject<IKeytipStyleProps, IKeytipStyles>;
    /**
     * Offset x and y for the keytip, added from the top-left corner
     * By default the keytip will be anchored to the bottom-center of the element
     */
    offset?: Point;
    /**
     * Whether or not this keytip will have children keytips that are dynamically created (DOM is generated on
     * keytip activation). Common cases are a Pivot or Modal.
     */
    hasDynamicChildren?: boolean;
    /**
     * Whether or not this keytip belongs to a component that has a menu
     * Keytip mode will stay on when a menu is opened, even if the items in that menu have no keytips
     */
    hasMenu?: boolean;
}

/**
 * Props to style Keytip component
 * {@docCategory Keytips}
 */
export declare interface IKeytipStyleProps {
    /**
     * The theme for the keytip.
     */
    theme: ITheme;
    /**
     * Whether the keytip is disabled or not.
     */
    disabled?: boolean;
    /**
     * T/F if the keytip is visible
     */
    visible?: boolean;
}

/**
 * {@docCategory Keytips}
 */
export declare interface IKeytipStyles {
    /**
     * Style for the div container surrounding the keytip content.
     */
    container: IStyle;
    /**
     * Style for the keytip content element.
     */
    root: IStyle;
}

export declare interface IKeytipTransitionKey {
    key: string;
    modifierKeys?: KeytipTransitionModifier[];
}

declare interface IKeytipTreeNode {
    /**
     * ID of the <Keytip> DOM element. Needed to locate the correct keytip in the KeytipLayer's 'keytip' state array
     */
    id: string;
    /**
     * KeySequence that invokes this KeytipTreeNode's onExecute function
     */
    keySequences: string[];
    /**
     * Overflow set sequence for this keytip
     */
    overflowSetSequence?: string[];
    /**
     * Control's execute function for when keytip is invoked, passed from the component to the Manager in the IKeytipProps
     */
    onExecute?: (executeTarget: HTMLElement | null, target: HTMLElement | null) => void;
    /**
     * Function to execute when we return to this keytip
     */
    onReturn?: (executeTarget: HTMLElement | null, target: HTMLElement | null) => void;
    /**
     * List of keytip IDs that should become visible when this keytip is pressed, can be empty
     */
    children: string[];
    /**
     * Parent keytip ID
     */
    parent: string;
    /**
     * Whether or not this keytip will have children keytips that are dynamically created (DOM is generated on
     * keytip activation). Common cases are keytips in a menu or modal.
     */
    hasDynamicChildren?: boolean;
    /**
     * Whether or not this keytip belongs to a component that has a menu
     * Keytip mode will stay on when a menu is opened, even if the items in that menu have no keytips
     */
    hasMenu?: boolean;
    /**
     * T/F if this keytip's component is currently disabled
     */
    disabled?: boolean;
    /**
     * T/F if this keytip is a persisted keytip
     */
    persisted?: boolean;
}

/**
 * {@docCategory Label}
 */
export declare interface ILabel {
}

/**
 * {@docCategory Label}
 */
export declare interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    /**
     * Render the root element as another type.
     */
    as?: IComponentAs<React.AllHTMLAttributes<HTMLElement>>;
    /**
     * Optional callback to access the ILabel interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ILabel>;
    /**
     * Whether the associated form field is required or not
     * @defaultvalue false
     */
    required?: boolean;
    /**
     * Renders the label as disabled.
     */
    disabled?: boolean;
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;
    /**
     * Styles for the label.
     */
    styles?: IStyleFunctionOrObject<ILabelStyleProps, ILabelStyles>;
}

/**
 * {@docCategory Label}
 */
export declare interface ILabelStyleProps {
    /**
     *
     */
    theme: ITheme;
    className?: string;
    disabled?: boolean;
    required?: boolean;
}

/**
 * {@docCategory Label}
 */
export declare interface ILabelStyles {
    /**
     * Styles for the root element.
     */
    root: IStyle;
}

/**
 * {@docCategory Layer}
 */
export declare interface ILayer {
}

export declare interface ILayerHost {
}

export declare interface ILayerHostProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Optional callback to access the ILayerHost interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ILayerHost>;
    /**
     * Defines the id for the layer host that Layers can target (using the hostId property.)
     */
    id?: string;
}

/**
 * {@docCategory Layer}
 */
export declare interface ILayerProps extends React.HTMLAttributes<HTMLDivElement>, React.RefAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the ILayer interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ILayer>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules
     */
    styles?: IStyleFunctionOrObject<ILayerStyleProps, ILayerStyles>;
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;
    /**
     * Additional css class to apply to the Layer
     * @defaultvalue undefined
     */
    className?: string;
    /**
     * Callback for when the layer is mounted.
     * @deprecated Use onLayerDidMount.
     */
    onLayerMounted?: () => void;
    /**
     * Callback for when the layer is mounted.
     */
    onLayerDidMount?: () => void;
    /**
     * Callback for when the layer is unmounted.
     */
    onLayerWillUnmount?: () => void;
    /**
     * The optional id property provided on a LayerHost that this Layer should render within. The LayerHost does
     * not need to be immediately available but once has been rendered, and if missing, we'll avoid trying
     * to render the Layer content until the host is available. If an id is not provided, we will render the Layer
     * content in a fixed position element rendered at the end of the document.
     */
    hostId?: string;
    /**
     * When enabled, Layer allows events to bubble up from Layer content.
     * Traditionally Layer has not had this behavior. This prop preserves backwards compatibility by
     * default while allowing users to opt in to the new event bubbling functionality.
     */
    eventBubblingEnabled?: boolean;
    /**
     * Whether the layer should be added as the first child of the host.
     * If true, the layer will be inserted as the first child of the host
     * By default, the layer will be appended at the end to the host
     */
    insertFirst?: boolean;
}

/**
 * {@docCategory Layer}
 */
export declare interface ILayerStyleProps {
    /**
     * Accept theme prop.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    /**
     * Check if Host
     */
    isNotHost?: boolean;
}

/**
 * {@docCategory Layer}
 */
export declare interface ILayerStyles {
    /**
     * Style for the root element when fixed.
     */
    root?: IStyle;
    /**
     * Style for the Fabric component.
     */
    content?: IStyle;
}

/**
 * Line element interface
 * {@docCategory Shimmer}
 */
export declare interface ILine extends IShimmerElement {
    /**
     * Sets the height of the shimmer line in pixels.
     * @defaultvalue 16px
     */
    height?: number;
    /**
     * Line width value.
     * @defaultvalue 100%
     */
    width?: number | string;
}

/**
 * {@docCategory List}
 */
export declare interface IList {
    /**
     * Force the component to update.
     */
    forceUpdate: () => void;
    /**
     * Get the current height the list and it's pages.
     */
    getTotalListHeight?: () => number;
    /**
     * Scroll to the given index. By default will bring the page the specified item is on into the view. If a callback
     * to measure the height of an individual item is specified, will only scroll to bring the specific item into view.
     *
     * Note: with items of variable height and no passed in `getPageHeight` method, the list might jump after scrolling
     * when windows before/ahead are being rendered, and the estimated height is replaced using actual elements.
     *
     * @param index - Index of item to scroll to
     * @param measureItem - Optional callback to measure the height of an individual item
     * @param scrollToMode - Optional defines the behavior of the scrolling alignment. Defaults to auto.
     *  Note: The scrollToMode requires the measureItem callback is provided to function.
     */
    scrollToIndex: (index: number, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode) => void;
    /**
     * Get the start index of the page that is currently in view
     */
    getStartItemIndexInView: () => number;
}

/**
 * Props passed to the render override for the list root.
 * {@docCategory List}
 */
export declare interface IListOnRenderRootProps<T> {
    /**
     * The ref to be applied to the list root.
     * The `List` uses this element to track scroll position and sizing.
     */
    rootRef: React.Ref<HTMLDivElement>;
    /**
     * Props to apply to the list root element.
     */
    divProps: React.HTMLAttributes<HTMLDivElement>;
    /**
     * The active pages to be rendered into the list.
     * These will have been rendered using `onRenderPage`.
     */
    pages: IPage<T>[];
    /**
     * The content to be rendered as the list surface element.
     * This will have been rendered using `onRenderSurface`.
     */
    surfaceElement: JSX.Element | null;
}

/**
 * Props passed to the render override for the list surface.
 * {@docCategory List}
 */
export declare interface IListOnRenderSurfaceProps<T> {
    /**
     * A ref to be applied to the surface element.
     * The `List` uses this element to track content size and focus.
     */
    surfaceRef: React.Ref<HTMLDivElement>;
    /**
     * Props to apply to the list surface element.
     */
    divProps: React.HTMLAttributes<HTMLDivElement>;
    /**
     * The active pages to be rendered into the list.
     * These will have been rendered using `onRenderPage`.
     */
    pages: IPage<T>[];
    /**
     * The content to be rendered representing all active pages.
     */
    pageElements: JSX.Element[];
}

/**
 * {@docCategory List}
 */
export declare interface IListProps<T = any> extends React.HTMLAttributes<List<T> | HTMLDivElement> {
    /**
     * Optional callback to access the IList interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IList>;
    /** Optional classname to append to root list. */
    className?: string;
    /** Items to render. */
    items?: T[];
    /**
     * Method to call when trying to render an item.
     * @param item - The data associated with the cell that is being rendered.
     * @param index - The index of the cell being rendered.
     * @param isScrolling - True if the list is being scrolled. May be useful for rendering a placeholder if your cells
     * are complex.
     */
    onRenderCell?: (item?: T, index?: number, isScrolling?: boolean) => React.ReactNode;
    /**
     * Optional callback invoked when List rendering completed.
     * This can be on initial mount or on re-render due to scrolling.
     * This method will be called as a result of changes in List pages (added or removed),
     * and after ALL the changes complete.
     * To track individual page Add / Remove use onPageAdded / onPageRemoved instead.
     * @param pages - The current array of pages in the List.
     */
    onPagesUpdated?: (pages: IPage<T>[]) => void;
    /** Optional callback for monitoring when a page is added. */
    onPageAdded?: (page: IPage<T>) => void;
    /** Optional callback for monitoring when a page is removed. */
    onPageRemoved?: (page: IPage<T>) => void;
    /** Optional callback to get the item key, to be used on render. */
    getKey?: (item: T, index?: number) => string;
    /**
     * Called by the list to get the specification for a page.
     * Use this method to provide an allocation of items per page,
     * as well as an estimated rendered height for the page.
     * The list will use this to optimize virtualization.
     */
    getPageSpecification?: (itemIndex?: number, visibleRect?: IRectangle) => IPageSpecification;
    /**
     * Method called by the list to get how many items to render per page from specified index.
     * In general, use `getPageSpecification` instead.
     */
    getItemCountForPage?: (itemIndex?: number, visibleRect?: IRectangle) => number;
    /**
     * Method called by the list to get the pixel height for a given page. By default, we measure the first
     * page's height and default all other pages to that height when calculating the surface space. It is
     * ideal to be able to adequately predict page heights in order to keep the surface space from jumping
     * in pixels, which has been seen to cause browser performance issues.
     * In general, use `getPageSpecification` instead.
     */
    getPageHeight?: (itemIndex?: number, visibleRect?: IRectangle, itemCount?: number) => number;
    /**
     * Method called by the list to derive the page style object. For spacer pages, the list will derive
     * the height and passed in heights will be ignored.
     */
    getPageStyle?: (page: IPage<T>) => any;
    /**
     * In addition to the visible window, how many windowHeights should we render ahead.
     * @defaultvalue 2
     */
    renderedWindowsAhead?: number;
    /**
     * In addition to the visible window, how many windowHeights should we render behind.
     * @defaultvalue 2
     */
    renderedWindowsBehind?: number;
    /** Index in items array to start rendering from. Defaults to 0. */
    startIndex?: number;
    /** Number of items to render. Defaults to items.length. */
    renderCount?: number;
    /**
     * Boolean value to enable render page caching. This is an experimental performance optimization
     * that is off by default.
     * @defaultvalue false
     */
    usePageCache?: boolean;
    /**
     * Optional callback to determine whether the list should be rendered in full, or virtualized.
     * Virtualization will add and remove pages of items as the user scrolls them into the visible range.
     * This benefits larger list scenarios by reducing the DOM on the screen, but can negatively affect performance for
     * smaller lists.
     * The default implementation will virtualize when this callback is not provided.
     */
    onShouldVirtualize?: (props: IListProps<T>) => boolean;
    /**
     * The role to assign to the list root element.
     * Use this to override the default assignment of 'list' to the root and 'listitem' to the cells.
     */
    role?: string;
    /**
     * Called when the List will render a page.
     * Override this to control how cells are rendered within a page.
     */
    onRenderPage?: IRenderFunction<IPageProps<T>>;
    /**
     * Render override for the element at the root of the `List`.
     * Use this to apply some final attributes or structure to the content
     * each time the list is updated with new active pages or items.
     */
    onRenderRoot?: IRenderFunction<IListOnRenderRootProps<T>>;
    /**
     * Render override for the element representing the surface of the `List`.
     * Use this to alter the structure of the rendered content if necessary on each update.
     */
    onRenderSurface?: IRenderFunction<IListOnRenderSurfaceProps<T>>;
    /**
     * An object which can be passed in as a fresh instance to 'force update' the list.
     */
    version?: {};
    /**
     * Whether to disable scroll state updates. This causes the isScrolling arg in onRenderCell to always be undefined.
     * This is a performance optimization to let List skip a render cycle by not updating its scrolling state.
     */
    ignoreScrollingState?: boolean;
}

export declare interface IListState<T = any> {
    pages?: IPage<T>[];
    /** The last versionstamp for  */
    measureVersion?: number;
    isScrolling?: boolean;
    getDerivedStateFromProps(nextProps: IListProps<T>, previousState: IListState<T>): IListState<T>;
}

export declare const Image: React.FunctionComponent<IImageProps>;

export declare const ImageBase: React.FunctionComponent<IImageProps>;

/**
 * The cover style to be used on the image
 * {@docCategory Image}
 */
export declare enum ImageCoverStyle {
    /**
     * The image will be shown at 100% height of container and the width will be scaled accordingly
     */
    landscape = 0,
    /**
     * The image will be shown at 100% width of container and the height will be scaled accordingly
     */
    portrait = 1
}

/**
 * The possible methods that can be used to fit the image.
 * {@docCategory Image}
 */
export declare enum ImageFit {
    /**
     * The image is not scaled. The image is centered and cropped within the content box.
     */
    center = 0,
    /**
     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
     */
    contain = 1,
    /**
     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped
     * from the top and bottom, or the sides, depending on the difference in aspect ratio between the image and the frame.
     */
    cover = 2,
    /**
     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
     * frame will have empty space.
     */
    none = 3,
    /**
     * The image will be centered horizontally and vertically within the frame and maintains its aspect ratio. It will
     * behave as ImageFit.center if the image's natural height or width is less than the Image frame's height or width,
     * but if both natural height and width are larger than the frame it will behave as ImageFit.cover.
     */
    centerCover = 4,
    /**
     * The image will be centered horizontally and vertically within the frame and maintains its aspect ratio. It will
     * behave as ImageFit.center if the image's natural height and width is less than the Image frame's height and width,
     * but if either natural height or width are larger than the frame it will behave as ImageFit.contain.
     */
    centerContain = 5
}

/**
 * Fast icon component which only supports images (not font glyphs) and can't be targeted by customizations.
 * To style the icon, use `className` or reference `ms-Icon` in CSS.
 * {@docCategory Icon}
 */
export declare const ImageIcon: React.FunctionComponent<IImageIconProps>;

/**
 * {@docCategory Image}
 */
export declare enum ImageLoadState {
    /**
     * The image has not yet been loaded, and there is no error yet.
     */
    notLoaded = 0,
    /**
     * The image has been loaded successfully.
     */
    loaded = 1,
    /**
     * An error has been encountered while loading the image.
     */
    error = 2,
    /**
     * Deprecated at v1.3.6, to replace the src in case of errors, use `onLoadingStateChange` instead
     * and re-render the Image with a difference src.
     * @deprecated Use `onLoadingStateChange` instead
     * and re-render the Image with a difference src.
     */
    errorLoaded = 3
}

/**
 * {@docCategory MarqueeSelection}
 */
export declare interface IMarqueeSelection {
}

/**
 * {@docCategory MarqueeSelection}
 */
export declare interface IMarqueeSelectionProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the IMarqueeSelection interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IMarqueeSelection>;
    /**
     * The selection object to interact with when updating selection changes.
     */
    selection: ISelection;
    /**
     * Optional props to mix into the root DIV element.
     */
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
    /**
     * Optional callback that is called, when the mouse down event occurs, in order to determine
     * if we should start a marquee selection. If true is returned, we will cancel the mousedown
     * event to prevent upstream mousedown handlers from executing.
     */
    onShouldStartSelection?: (ev: MouseEvent) => boolean;
    /**
     * Optional flag to control the enabled state of marquee selection. This allows you to render
     * it and have events all ready to go, but conditionally disable it. That way transitioning
     * between enabled/disabled generate no difference in the DOM.
     * @defaultvalue true
     */
    isEnabled?: boolean;
    /**
     * Optional flag to restrict the drag rect to the root element, instead of allowing the drag
     * rect to start outside of the root element boundaries.
     * @defaultvalue false
     */
    isDraggingConstrainedToRoot?: boolean;
    /**
     * Additional CSS class(es) to apply to the MarqueeSelection.
     */
    className?: string;
    /**
     * Theme (provided through customization.)
     */
    theme?: ITheme;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunction<IMarqueeSelectionStyleProps, IMarqueeSelectionStyles>;
}

/**
 * {@docCategory MarqueeSelection}
 */
export declare interface IMarqueeSelectionStyleProps {
    theme: ITheme;
    className?: string;
}

/**
 * {@docCategory MarqueeSelection}
 */
export declare interface IMarqueeSelectionStyles {
    root?: IStyle;
    dragMask?: IStyle;
    box?: IStyle;
    boxFill?: IStyle;
}

/**
 * {@docCategory TextField}
 */
export declare interface IMaskedTextField extends ITextField {
    /**
     * The value of all filled format characters, or undefined if not all format characters are filled.
     */
    value: string | undefined;
}

/**
 * MaskedTextField component props.
 * {@docCategory TextField}
 */
export declare interface IMaskedTextFieldProps extends ITextFieldProps, React.RefAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the IMaskedTextField interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IMaskedTextField>;
    /**
     * The masking string that defines the mask's behavior.
     * A backslash will escape any character.
     * Special format characters are:
     * '9': [0-9]
     * 'a': [a-zA-Z]
     * '*': [a-zA-Z0-9]
     *
     * @example `Phone Number: (999) 999-9999`
     */
    mask?: string;
    /**
     * The character to show in place of unfilled characters of the mask.
     * @defaultvalue '_'
     */
    maskChar?: string;
    /**
     * An object defining the format characters and corresponding regexp values.
     * Default format characters: \{
     *  '9': /[0-9]/,
     *  'a': /[a-zA-Z]/,
     *  '*': /[a-zA-Z0-9]/
     * \}
     */
    maskFormat?: {
        [key: string]: RegExp;
    };
}

/**
 * @deprecated in favor of mergeStyles API.
 */
export declare interface IMenuItemClassNames {
    item: string;
    divider: string;
    root: string;
    linkContent: string;
    icon: string;
    checkmarkIcon: string;
    subMenuIcon: string;
    label: string;
    secondaryText: string;
    splitContainer: string;
    splitPrimary: string;
    splitMenu: string;
    linkContentMenu: string;
    screenReaderText: string;
}

/**
 * {@docCategory ContextualMenu}
 */
export declare interface IMenuItemStyles extends IButtonStyles {
    /**
     * Styles for a menu item that is an anchor link.
     */
    item: IStyle;
    /**
     * Styles for the content inside the button/link of the menuItem.
     */
    linkContent: IStyle;
    /**
     * Styles for a menu item that is an anchor link.
     */
    anchorLink: IStyle;
    /**
     * Default icon color style for known icons.
     */
    iconColor: IStyle;
    /**
     * Default style for checkmark icons.
     */
    checkmarkIcon: IStyle;
    /**
     * Styles for the submenu icon of a menu item.
     */
    subMenuIcon: IStyle;
    /**
     * Styles for a divider item of a ContextualMenu.
     */
    divider: IStyle;
}

/**
 * {@docCategory MessageBar}
 */
export declare interface IMessageBar {
}

/**
 * {@docCategory MessageBar}
 */
export declare interface IMessageBarProps extends React.HTMLAttributes<HTMLElement>, React.RefAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the IMessageBar interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IMessageBar>;
    /**
     * The type of MessageBar to render.
     * @defaultvalue MessageBarType.info
     */
    messageBarType?: MessageBarType;
    /**
     * The actions you want to show on the other side.
     */
    actions?: JSX.Element;
    /**
     * A description of the message bar for the benefit of screen readers.
     * @deprecated Use native prop `aria-label` instead.
     */
    ariaLabel?: string;
    /**
     * Whether the message bar has a dismiss button and its callback.
     * If null, we don't show a dismiss button.
     * @defaultvalue null
     */
    onDismiss?: (ev?: React.MouseEvent<HTMLElement | BaseButton | Button>) => any;
    /**
     * Determines if the message bar is multi lined.
     * If false, and the text overflows over buttons or to another line, it is clipped.
     * @defaultvalue true
     */
    isMultiline?: boolean;
    /**
     * Aria label on dismiss button if onDismiss is defined.
     */
    dismissButtonAriaLabel?: string;
    /**
     * Determines if the message bar text is truncated.
     * If true, a button will render to toggle between a single line view and multiline view.
     * This prop is for single line message bars with no buttons only in a limited space scenario.
     * @defaultvalue false
     */
    truncated?: boolean;
    /**
     * Aria label on overflow button if truncated is defined.
     */
    overflowButtonAriaLabel?: string;
    /**
     * Additional CSS class(es) to apply to the MessageBar.
     */
    className?: string;
    /**
     * Theme (provided through customization.)
     */
    theme?: ITheme;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IMessageBarStyleProps, IMessageBarStyles>;
    /**
     * Custom icon prop to replace the dismiss icon.
     * If unset, default will be the Fabric Clear icon.
     */
    dismissIconProps?: IIconProps;
    /**
     * Custom icon prop to replace the message bar icon.
     * If unset, default will be the icon set by messageBarType.
     */
    messageBarIconProps?: IIconProps;
}

/**
 * {@docCategory MessageBar}
 */
export declare interface IMessageBarStyleProps {
    /**
     * Theme (provided through customization).
     */
    theme: ITheme;
    /**
     * Additional CSS class(es).
     */
    className?: string;
    /**
     * Type of the MessageBar.
     */
    messageBarType?: MessageBarType;
    /**
     * Whether the MessageBar contains a dismiss button.
     */
    onDismiss?: boolean;
    /**
     * Whether the text is truncated.
     */
    truncated?: boolean;
    /**
     * Whether the MessageBar is rendered in multi line (as opposed to single line) mode.
     */
    isMultiline?: boolean;
    /**
     * Whether the single line MessageBar is being expanded.
     */
    expandSingleLine?: boolean;
    /**
     * Whether the MessageBar contains any action elements.
     */
    actions?: boolean;
}

/**
 * {@docCategory MessageBar}
 */
export declare interface IMessageBarStyles {
    /**
     * Style set for the root element.
     */
    root?: IStyle;
    /**
     * Style set for the element containing the icon, text, and optional dismiss button.
     */
    content?: IStyle;
    /**
     * Style set for the element containing the icon.
     */
    iconContainer?: IStyle;
    /**
     * Style set for the icon.
     */
    icon?: IStyle;
    /**
     * Style set for the element containing the text.
     */
    text?: IStyle;
    /**
     * Style set for the text.
     */
    innerText?: IStyle;
    /**
     * Style set for the optional dismiss button.
     */
    dismissal?: IStyle;
    /**
     * Style set for the icon used to expand and collapse the MessageBar.
     */
    expand?: IStyle;
    /**
     * Style set for the element containing the dismiss button.
     */
    dismissSingleLine?: IStyle;
    /**
     * Style set for the element containing the expand icon.
     */
    expandSingleLine?: IStyle;
    /**
     * Style set for the optional element containing the action elements.
     */
    actions?: IStyle;
}

/**
 * {@docCategory Modal}
 */
export declare interface IModal {
    /**
     * Sets focus on the first focusable, or configured, child in focus trap zone
     */
    focus: () => void;
}

/**
 * {@docCategory Modal}
 */
export declare interface IModalProps extends React.RefAttributes<HTMLDivElement>, IAccessiblePopupProps {
    children?: React.ReactNode;
    /**
     * Optional ref to access the `IModal` interface. Use this instead of `ref` for accessing
     * public API of the component.
     */
    componentRef?: IRefObject<IModal>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IModalStyleProps, IModalStyles>;
    /**
     * Theme provided by higher-order component.
     */
    theme?: ITheme;
    /**
     * Whether the dialog is displayed.
     * @defaultvalue false
     */
    isOpen?: boolean;
    /**
     * Whether the overlay is dark themed.
     * @defaultvalue true
     */
    isDarkOverlay?: boolean;
    /**
     * A callback function for when the Modal is dismissed light dismiss, before the animation completes.
     */
    onDismiss?: (ev?: React.MouseEvent<HTMLButtonElement>) => any;
    /**
     * A callback function which is called after the Modal is dismissed and the animation is complete.
     */
    onDismissed?: () => any;
    /**
     * The specified responsiveMode value for Modal to use.
     * @defaultvalue ResponsiveMode.small
     */
    responsiveMode?: ResponsiveMode;
    /**
     * Defines an optional set of props to be passed through to Layer
     */
    layerProps?: ILayerProps;
    /**
     * Defines an optional set of props to be passed through to Overlay
     */
    overlay?: IOverlayProps;
    /**
     * Whether the dialog can be light dismissed by clicking outside the dialog (on the overlay).
     * @defaultvalue false
     */
    isBlocking?: boolean;
    /**
     * Whether the dialog should be modeless (e.g. not dismiss when focusing/clicking outside of the dialog).
     * if true: isBlocking is ignored, there will be no overlay (isDarkOverlay is ignored),
     * isClickableOutsideFocusTrap is true, and forceFocusInsideTrap is false
     */
    isModeless?: boolean;
    /**
     * Optional class name to be added to the root class
     */
    className?: string;
    /**
     * Optional override for container class
     */
    containerClassName?: string;
    /**
     * Optional override for scrollable content class
     */
    scrollableContentClassName?: string;
    /**
     * A callback function for when the Modal content is mounted on the overlay layer
     * @deprecated Use layerProps.onLayerDidMount instead
     */
    onLayerDidMount?: () => void;
    /**
     * ARIA id for the title of the Modal, if any
     */
    titleAriaId?: string;
    /**
     * ARIA id for the subtitle of the Modal, if any
     */
    subtitleAriaId?: string;
    /**
     * Whether the modal should have top offset fixed once opened and expand from the bottom only
     * when the content changes dynamically.
     */
    topOffsetFixed?: boolean;
    /**
     * The options to make the modal draggable
     */
    dragOptions?: IDragOptions;
    /**
     * Allow body scroll on content and overlay on touch devices. Changing after mounting has no effect.
     * @defaultvalue false
     */
    allowTouchBodyScroll?: boolean;
    /**
     * Puts aria-hidden=true on all non-ancestors of the current modal, for screen readers.
     * This is an experimental feature that will be graduated to default behavior after testing.
     * This flag will be removed with the next major release.
     */
    enableAriaHiddenSiblings?: boolean;
}

/**
 * {@docCategory Modal}
 */
export declare type IModalStyleProps = Required<Pick<IModalProps, 'theme'>> & Pick<IModalProps, 'className' | 'containerClassName' | 'scrollableContentClassName' | 'topOffsetFixed' | 'isModeless'> & {
    /** Modal open state. */
    isOpen?: boolean;
    /** Modal visible state. */
    isVisible?: boolean;
    /** Modal has been opened state. */
    hasBeenOpened?: boolean;
    /** Positioning of modal on first render */
    modalRectangleTop?: number;
    /** Classname for layer element */
    layerClassName?: string;
    /** Whether this modal is draggable and using the default handler */
    isDefaultDragHandle?: boolean;
    /** The windows inner height */
    windowInnerHeight?: number;
};

/**
 * {@docCategory Modal}
 */
export declare interface IModalStyles {
    root: IStyle;
    main: IStyle;
    scrollableContent: IStyle;
    layer: IStyle;
    keyboardMoveIconContainer: IStyle;
    keyboardMoveIcon: IStyle;
}

/**
 * {@docCategory Nav}
 */
export declare interface INav {
    /**
     * The meta 'key' property of the currently selected NavItem of the Nav. Can return
     * undefined if the currently selected nav item has no populated key property. Be aware
     * that in order for Nav to properly understand which key is selected all NavItems in
     * all groups of the Nav must have populated key properties.
     */
    selectedKey: string | undefined;
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
     * if focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    focus(forceIntoFirstElement?: boolean): boolean;
}

/**
 * {@docCategory Nav}
 */
export declare interface INavButtonProps extends IButtonProps {
    /**
     * (Optional) Link to be rendered.
     */
    link?: INavLink;
}

/**
 * {@docCategory Nav}
 */
export declare interface INavLink {
    /**
     * Text to render for this link
     */
    name: string;
    /**
     * URL to navigate to for this link
     */
    url: string;
    /**
     * Unique, stable key for the link, used when rendering the list of links and for tracking
     * the currently selected link.
     */
    key?: string;
    /**
     * Child links to this link, if any
     */
    links?: INavLink[];
    /**
     * Callback invoked when this link is clicked. Providing this callback will cause the link
     * to render as a button (rather than an anchor) unless forceAnchor is set to true.
     */
    onClick?: (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => void;
    /**
     * Name of an icon to render next to the link button.
     */
    icon?: string;
    /**
     * Deprecated. Use `iconProps.className` instead.
     * @deprecated Use `iconProps.className` instead.
     */
    iconClassName?: string;
    /**
     * Props for an icon to render next to the link button.
     */
    iconProps?: IIconProps;
    /**
     * The name to use for functional automation tests
     */
    automationId?: string;
    /**
     * Whether or not the link is in an expanded state
     */
    isExpanded?: boolean;
    /**
     * Aria-current token for active nav links. Must be a valid token value, and defaults to 'page'.
     */
    ariaCurrent?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true';
    /**
     * Aria label for nav link. Ignored if `collapseAriaLabel` or `expandAriaLabel` is provided.
     */
    ariaLabel?: string;
    /**
     * Text for title tooltip and ARIA description.
     */
    title?: string;
    /**
     * Link <a> target.
     */
    target?: string;
    /**
     * Whether or not the link is disabled.
     */
    disabled?: boolean;
    /**
     * (Optional) By default, any link with onClick defined will render as a button.
     * Set this property to true to override that behavior. (Links without onClick defined
     * will render as anchors by default.)
     */
    forceAnchor?: boolean;
    /**
     * ARIA label when group is collapsed and can be expanded.
     */
    expandAriaLabel?: string;
    /**
     * ARIA label when group is collapsed and can be expanded.
     */
    collapseAriaLabel?: string;
    /**
     * (Optional) Any additional properties to apply to the rendered links.
     */
    [propertyName: string]: any;
}

/**
 * {@docCategory Nav}
 */
export declare interface INavLinkGroup {
    /**
     * Text to render as the header of a group
     */
    name?: string;
    /**
     * Links to render within this group
     */
    links: INavLink[];
    /**
     * The name to use for functional automation tests
     */
    automationId?: string;
    /**
     * If true, the group should render collapsed by default
     */
    collapseByDefault?: boolean;
    /**
     * Callback invoked when a group header is clicked
     */
    onHeaderClick?: (ev?: React.MouseEvent<HTMLElement>, isCollapsing?: boolean) => void;
    /**
     * ARIA label when group is collapsed and can be expanded.
     */
    expandAriaLabel?: string;
    /**
     * ARIA label when group is collapsed and can be expanded.
     */
    collapseAriaLabel?: string;
    /**
     * (Optional) Any additional properties to apply to a group.
     */
    groupData?: any;
}

/**
 * {@docCategory Nav}
 */
export declare interface INavProps {
    /**
     * Optional callback to access the INav interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<INav>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules
     */
    styles?: IStyleFunctionOrObject<INavStyleProps, INavStyles>;
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;
    /**
     * Additional css class to apply to the Nav
     * @defaultvalue undefined
     */
    className?: string;
    /**
     * A collection of link groups to display in the navigation bar
     */
    groups: INavLinkGroup[] | null;
    /**
     * Used to customize how content inside the group header is rendered
     * @defaultvalue Default group header rendering
     */
    onRenderGroupHeader?: IRenderFunction<IRenderGroupHeaderProps>;
    /**
     * Render a custom link in place of the normal one.
     * This replaces the entire button rather than simply button content
     */
    linkAs?: IComponentAs<INavButtonProps>;
    /**
     * Used to customize how content inside the link tag is rendered
     * @defaultvalue Default link rendering
     */
    onRenderLink?: IRenderFunction<INavLink>;
    /**
     * Function callback invoked when a link in the navigation is clicked
     */
    onLinkClick?: (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => void;
    /**
     * Function callback invoked when the chevron on a link is clicked
     */
    onLinkExpandClick?: (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => void;
    /**
     * Indicates whether the navigation component renders on top of other content in the UI
     */
    isOnTop?: boolean;
    /**
     * (Optional) The key of the nav item initially selected.
     */
    initialSelectedKey?: string;
    /**
     * (Optional) The key of the nav item selected by caller.
     */
    selectedKey?: string;
    /**
     * (Optional) The nav container aria label.
     */
    ariaLabel?: string;
    /**
     * (Optional) The nav container aria label. The link name is prepended to this label.
     * If not provided, the aria label will default to the link name.
     *
     * @deprecated - Use expandAriaLabel and collapseAriaLabel on groups instead
     */
    expandButtonAriaLabel?: string;
    /**
     * (Deprecated) Use ariaCurrent on links instead
     * @deprecated Use ariaCurrent on links instead
     */
    selectedAriaLabel?: string;
}

export declare interface INavState {
    isGroupCollapsed: {
        [key: string]: boolean;
    };
    isLinkExpandStateChanged?: boolean;
    selectedKey?: string;
}

/**
 * {@docCategory Nav}
 */
export declare interface INavStyleProps {
    /**
     * Accept theme prop.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    /**
     * is element on top boolean
     */
    isOnTop?: boolean;
    /**
     * is element a link boolean
     */
    isLink?: boolean;
    /**
     * is element disabled
     */
    isDisabled?: boolean;
    /**
     * is element a group boolean
     */
    isGroup?: boolean;
    /**
     * is element expanded boolean
     */
    isExpanded?: boolean;
    /**
     * is element selected boolean
     */
    isSelected?: boolean;
    /**
     * is button
     */
    isButtonEntry?: boolean;
    /**
     * Nav height value
     */
    navHeight?: number;
    /**
     * left padding value
     */
    leftPadding?: number;
    /**
     * left padding when expanded value
     */
    leftPaddingExpanded?: number;
    /**
     * right padding value
     */
    rightPadding?: number;
    /**
     * position value
     */
    position?: number;
    /**
     * Inherited from INavProps
     * A collection of link groups to display in the navigation bar
     */
    groups: INavLinkGroup[] | null;
}

/**
 * {@docCategory Nav}
 */
export declare interface INavStyles {
    /**
     * Style set for the root element.
     */
    root: IStyle;
    /**
     * Style set for the link text container div element.
     */
    linkText: IStyle;
    /**
     * Style set for the link element extending the
     * root style set for ActionButton component.
     */
    link: IStyle;
    /**
     * Style set for the composite link container div element
     */
    compositeLink: IStyle;
    /**
     * Style set for the chevron button inside the composite
     * link and group elements.
     */
    chevronButton: IStyle;
    /**
     * Style set for the chevron icon inside the composite
     * link and group elements.
     */
    chevronIcon: IStyle;
    /**
     * Style set for the nav links ul element.
     */
    navItems: IStyle;
    /**
     * Style set for the nav links li element.
     */
    navItem: IStyle;
    /**
     * Style set for the group root div.
     */
    group: IStyle;
    /**
     * Style set for the group content div inside group.
     */
    groupContent: IStyle;
}
export { IObjectWithKey }

/**
 * {@docCategory OverflowSet}
 */
export declare interface IOverflowSet {
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param forceIntoFirstElement - If true, focus will be forced into the first element, even if
     * focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    focus(forceIntoFirstElement?: boolean): boolean;
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * shouldReceiveFocus to created delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param childElement - The child element within the zone to focus.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    focusElement(childElement?: HTMLElement): boolean;
}

/**
 * {@docCategory OverflowSet}
 */
export declare interface IOverflowSetItemProps {
    /**
     * Unique id to identify the item.
     */
    key: string;
    /**
     * Optional keytip for the overflowSetItem.
     */
    keytipProps?: IKeytipProps;
    /**
     * Any additional properties to use when custom rendering menu items.
     */
    [propertyName: string]: any;
}

/**
 * {@docCategory OverflowSet}
 */
export declare interface IOverflowSetProps extends React.RefAttributes<HTMLElement> {
    /**
     * Gets the component ref.
     */
    componentRef?: IRefObject<IOverflowSet>;
    /**
     * Class name
     */
    className?: string;
    /**
     * An array of items to be rendered by your onRenderItem function in the primary content area
     */
    items?: IOverflowSetItemProps[];
    /**
     * Change item layout direction to vertical/stacked.
     * If role is set to `menubar`, `vertical={true}` will also add proper `aria-orientation`.
     * @defaultvalue false
     */
    vertical?: boolean;
    /**
     * Controls wether or not the overflow button is placed at the start or end of the items.
     * This gives a reversed visual behavior but maintains correct keyboard navigation.
     * @defaultValue 'end'
     */
    overflowSide?: 'start' | 'end';
    /**
     * An array of items to be passed to overflow contextual menu
     */
    overflowItems?: IOverflowSetItemProps[];
    /**
     * Method to call when trying to render an item.
     */
    onRenderItem: (item: IOverflowSetItemProps) => any;
    /**
     * Rendering method for overflow button and contextual menu. The argument to the function is
     * the overflowItems passed in as props to this function.
     */
    onRenderOverflowButton: IRenderFunction<any[]>;
    /**
     * The role for the OverflowSet.
     * @defaultvalue 'group'
     */
    role?: string;
    /**
     * Optional full keytip sequence for the overflow button, if it will have a keytip.
     */
    keytipSequences?: string[];
    /**
     * Function that will take in an IOverflowSetItemProps and return the subMenu for that item.
     * If not provided, will use 'item.subMenuProps.items' by default.
     * This is only used if your overflow set has keytips.
     */
    itemSubMenuProvider?: (item: IOverflowSetItemProps) => any[] | undefined;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IOverflowSetProps, IOverflowSetStyles>;
}

/**
 * The props needed to construct styles.
 * This represents the simplified set of immutable things which control the class names.
 * {@docCategory OverflowSet}
 */
export declare type IOverflowSetStyleProps = Pick<IOverflowSetProps, 'vertical' | 'className'>;

/**
 * {@docCategory OverflowSet}
 */
export declare interface IOverflowSetStyles {
    /** The style that is layered onto the root element of OverflowSet. */
    root?: IStyle;
    /** The style that is layered onto each individual item in the overflow set. */
    item?: IStyle;
    /** The style that is layered onto the overflow button for the overflow set. */
    overflowButton?: IStyle;
}

/**
 * {@docCategory Overlay}
 */
export declare interface IOverlay {
}

/**
 * {@docCategory Overlay}
 */
export declare interface IOverlayProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Gets the component ref.
     */
    componentRef?: IRefObject<IOverlay>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules
     */
    styles?: IStyleFunctionOrObject<IOverlayStyleProps, IOverlayStyles>;
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;
    /**
     * Additional css class to apply to the Overlay
     * @defaultvalue undefined
     */
    className?: string;
    /**
     * Whether to use the dark-themed overlay.
     * @defaultvalue false
     */
    isDarkThemed?: boolean;
    onClick?: () => void;
    /**
     * Allow body scroll on touch devices. Changing after mounting has no effect.
     * @defaultvalue false
     */
    allowTouchBodyScroll?: boolean;
}

/**
 * {@docCategory Overlay}
 */
export declare interface IOverlayStyleProps {
    /**
     * Accept theme prop.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    /**
     * Is overlay visible
     */
    isNone?: boolean;
    /**
     * Is overlay dark themed
     */
    isDark?: boolean;
}

/**
 * {@docCategory Overlay}
 */
export declare interface IOverlayStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
}

/**
 * {@docCategory List}
 */
export declare interface IPage<T = any> {
    key: string;
    items: T[] | undefined;
    startIndex: number;
    itemCount: number;
    style: React.CSSProperties;
    top: number;
    height: number;
    data?: any;
    isSpacer?: boolean;
    isVisible?: boolean;
}

/**
 * {@docCategory List}
 */
export declare interface IPageProps<T = any> extends React.HTMLAttributes<HTMLDivElement>, React.ClassAttributes<HTMLDivElement> {
    /**
     * The role being assigned to the rendered page element by the list.
     */
    role?: string;
    /**
     * The allocation data for the page.
     */
    page: IPage<T>;
}

/**
 * {@docCategory List}
 */
export declare interface IPageSpecification {
    /**
     * The number of items to allocate to the page.
     */
    itemCount?: number;
    /**
     * The estimated pixel height of the page.
     */
    height?: number;
    /**
     * Data to pass through to the page when rendering.
     */
    data?: any;
    /**
     * The key to use when creating the page.
     */
    key?: string;
}

/**
 * {@docCategory Panel}
 */
export declare interface IPanel {
    /**
     * Forces the panel to open.
     */
    open: () => void;
    /**
     * Forces the panel to dismiss.
     */
    dismiss: (ev?: React.KeyboardEvent<HTMLElement> | KeyboardEvent) => void;
}

/**
 * Renderer function which takes an additional parameter, the ID to use for the element containing
 * the panel's title. This allows the `aria-labelledby` for the panel popup to work correctly.
 * Note that if `headerTextId` is provided, it **must** be used on an element, or screen readers
 * will be confused by the reference to a nonexistent ID.
 * {@docCategory Panel}
 */
export declare interface IPanelHeaderRenderer extends IRenderFunction<IPanelProps> {
    /**
     * @param props - Props given to the panel
     * @param defaultRender - Default header renderer. If using this renderer in code that does not
     * assign `headerTextId` to an element elsewhere, it **must** be passed to this function.
     * @param headerTextId - If provided, this **must** be used as the ID of an element containing the
     * panel's title, because the panel popup uses this ID as its aria-labelledby.
     */
    (props?: IPanelProps, defaultRender?: IPanelHeaderRenderer, headerTextId?: string | undefined): JSX.Element | null;
}

/**
 * {@docCategory Panel}
 */
export declare interface IPanelProps extends React.HTMLAttributes<PanelBase> {
    /**
     * Optional callback to access the IPanel interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IPanel>;
    /**
     * Whether the panel is displayed.
     * If true, will cause panel to stay open even if dismissed.
     * If false, will cause panel to stay hidden.
     * If undefined, will allow the panel to control its own visility through open/dismiss methods.
     * @defaultvalue undefined
     */
    isOpen?: boolean;
    /**
     * Has the close button visible.
     * @defaultvalue true
     */
    hasCloseButton?: boolean;
    /**
     * Whether the panel can be light dismissed.
     * @defaultvalue false
     */
    isLightDismiss?: boolean;
    /**
     * Whether the panel is hidden on dismiss, instead of destroyed in the DOM.
     * Protects the contents from being destroyed when the panel is dismissed.
     * @defaultvalue false
     */
    isHiddenOnDismiss?: boolean;
    /**
     * Whether the panel uses a modal overlay or not
     * @defaultvalue true
     */
    isBlocking?: boolean;
    /**
     * Determines if content should stretch to fill available space putting footer at the bottom of the page
     * @defaultvalue false
     */
    isFooterAtBottom?: boolean;
    /**
     * Header text for the Panel.
     * @defaultvalue ""
     */
    headerText?: string;
    /**
     * The props for header text container.
     */
    headerTextProps?: React.HTMLAttributes<HTMLDivElement>;
    /**
     * A callback function for when the Panel is opened, before the animation completes.
     */
    onOpen?: () => void;
    /**
     * A callback function for when the Panel is opened, after the animation completes.
     */
    onOpened?: () => void;
    /**
     * A callback function for when the panel is closed, before the animation completes.
     * If the panel should NOT be dismissed based on some keyboard event, then simply call ev.preventDefault() on it
     */
    onDismiss?: (ev?: React.SyntheticEvent<HTMLElement> | KeyboardEvent) => void;
    /**
     * A callback function which is called **after** the Panel is dismissed and the animation is complete.
     * (If you need to update the Panel's `isOpen` prop in response to a dismiss event, use `onDismiss` instead.)
     */
    onDismissed?: () => void;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IPanelStyleProps, IPanelStyles>;
    /**
     * Theme provided by High-Order Component.
     */
    theme?: ITheme;
    /**
     * Additional css class to apply to the Panel
     * @defaultvalue undefined
     */
    className?: string;
    /**
     * Type of the panel.
     * @defaultvalue PanelType.smallFixedFar
     */
    type?: PanelType;
    /**
     * Custom panel width, used only when `type` is set to `PanelType.custom`.
     */
    customWidth?: string;
    /**
     * Aria label on close button
     */
    closeButtonAriaLabel?: string;
    /**
     * Optional parameter to provider the class name for header text
     */
    headerClassName?: string;
    /**
     * Sets the HTMLElement to focus on when exiting the FocusTrapZone.
     * @defaultvalue The element.target that triggered the Panel.
     */
    elementToFocusOnDismiss?: HTMLElement;
    /**
     * Indicates if this Panel will ignore keeping track of HTMLElement that activated the Zone.
     * Deprecated, use `focusTrapZoneProps`.
     * @defaultvalue false
     * @deprecated Use `focusTrapZoneProps`.
     */
    ignoreExternalFocusing?: boolean;
    /**
     * Indicates whether Panel should force focus inside the focus trap zone.
     * If not explicitly specified, behavior aligns with FocusTrapZone's default behavior.
     * Deprecated, use `focusTrapZoneProps`.
     * @deprecated Use `focusTrapZoneProps`.
     */
    forceFocusInsideTrap?: boolean;
    /**
     * Indicates the selector for first focusable item.
     * Deprecated, use `focusTrapZoneProps`.
     * @deprecated Use `focusTrapZoneProps`.
     */
    firstFocusableSelector?: string;
    /**
     * Optional props to pass to the FocusTrapZone component to manage focus in the panel.
     */
    focusTrapZoneProps?: IFocusTrapZoneProps;
    /**
     * Optional props to pass to the Layer component hosting the panel.
     */
    layerProps?: ILayerProps;
    /**
     * Optional props to pass to the Overlay component that the panel uses.
     */
    overlayProps?: IOverlayProps;
    /**
     * Optional props to pass the Popup component that the panel uses.
     */
    popupProps?: IPopupProps;
    /**
     * Optional custom function to handle clicks outside the panel in lightdismiss mode
     */
    onLightDismissClick?: () => void;
    /**
     * Optional custom function to handle clicks outside this component
     */
    onOuterClick?: () => void;
    /**
     * Optional custom renderer navigation region. Replaces the region that contains the close button.
     */
    onRenderNavigation?: IRenderFunction<IPanelProps>;
    /**
     * Optional custom renderer for content in the navigation region. Replaces current close button.
     */
    onRenderNavigationContent?: IRenderFunction<IPanelProps>;
    /**
     * Optional custom renderer for header region. Replaces current title
     */
    onRenderHeader?: IPanelHeaderRenderer;
    /**
     * Optional custom renderer for body region. Replaces any children passed into the component.
     */
    onRenderBody?: IRenderFunction<IPanelProps>;
    /**
     * Optional custom renderer for footer region. Replaces sticky footer.
     */
    onRenderFooter?: IRenderFunction<IPanelProps>;
    /**
     * Custom renderer for content in the sticky footer
     */
    onRenderFooterContent?: IRenderFunction<IPanelProps>;
    /**
     * Deprecated property. Serves no function.
     * @deprecated Serves no function.
     */
    componentId?: string;
    /**
     * Allow body scroll on content and overlay on touch devices. Changing after mounting has no effect.
     * @defaultvalue false
     */
    allowTouchBodyScroll?: boolean;
}

declare interface IPanelState {
    isFooterSticky?: boolean;
    id?: string;
    visibility: PanelVisibilityState;
}

/**
 * {@docCategory Panel}
 */
export declare interface IPanelStyleProps {
    /**
     * Theme provided by High-Order Component.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    /**
     * Is Panel open
     */
    isOpen?: boolean;
    /**
     * Is animation currently running
     */
    isAnimating?: boolean;
    /**
     * Is panel on right side
     */
    isOnRightSide?: boolean;
    /**
     * Is panel hidden on dismiss
     */
    isHiddenOnDismiss?: boolean;
    /**
     * Classname for FocusTrapZone element
     */
    focusTrapZoneClassName?: string;
    /**
     * Determines if content should stretch to fill available space putting footer at the bottom of the page
     */
    isFooterAtBottom?: boolean;
    /**
     * Based on state value setting footer to sticky or not
     */
    isFooterSticky?: boolean;
    /**
     * Panel has close button
     */
    hasCloseButton?: boolean;
    /**
     * Type of the panel.
     */
    type?: PanelType;
    /**
     * Optional parameter to provider the class name for header text
     */
    headerClassName?: string;
    /**
     * Determines where the header is rendered based on whether the user
     * has passed in a custom onRenderNavigation or onRenderNavigationContent render callback
     */
    hasCustomNavigation?: boolean;
}

/**
 * {@docCategory Panel}
 */
export declare interface IPanelStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
    /**
     * Style for the overlay element.
     */
    overlay: IStyle;
    /**
     * Style for the hidden element.
     */
    hiddenPanel: IStyle;
    /**
     * Style for the main section element.
     */
    main: IStyle;
    /**
     * Style for the navigation container element.
     */
    commands: IStyle;
    /**
     * Style for the Body and Footer container element.
     */
    contentInner: IStyle;
    /**
     * Style for the scrollable content area container element.
     */
    scrollableContent: IStyle;
    /**
     * Style for the close button container element.
     */
    navigation: IStyle;
    /**
     * Style for the close button IconButton element.
     * @deprecated Use `subComponentStyles.closeButton` instead.
     */
    closeButton?: IStyle;
    /**
     * Style for the header container div element.
     */
    header: IStyle;
    /**
     * Style for the header text div element.
     */
    headerText: IStyle;
    /**
     * Style for the body div element.
     */
    content: IStyle;
    /**
     * Style for the footer div element.
     */
    footer: IStyle;
    /**
     * Style for the inner footer div element.
     */
    footerInner: IStyle;
    /**
     * Styling for subcomponents.
     */
    subComponentStyles: IPanelSubComponentStyles;
}

export declare interface IPanelSubComponentStyles {
    /**
     * Styling for close button child component.
     */
    closeButton: Partial<IButtonStyles>;
}

/**
 * {@docCategory FloatingPeoplePicker}
 */
export declare interface IPeopleFloatingPickerProps extends IBaseFloatingPickerProps<IPersonaProps> {
}

/**
 * {@docCategory ExtendedPeoplePicker}
 */
export declare interface IPeoplePickerItemProps extends IPickerItemProps<IExtendedPersonaProps> {
}

/**
 * PeoplePickerItemSelected props interface. Refers to the PeoplePicker items that have been picked already.
 * {@docCategory PeoplePicker}
 */
export declare interface IPeoplePickerItemSelectedProps extends IPickerItemProps<IPersonaProps & {
    ValidationState: ValidationState;
}>, IPeoplePickerItemSharedProps {
    /** Call to provide customized styling that will layer on top of the variant rules. */
    styles?: IStyleFunctionOrObject<IPeoplePickerItemSelectedStyleProps, IPeoplePickerItemSelectedStyles>;
}

/**
 * Props needed to construct PeoplePickerItemSelected styles.
 * {@docCategory PeoplePicker}
 */
export declare type IPeoplePickerItemSelectedStyleProps = Required<Pick<IPeoplePickerItemSelectedProps, 'theme'>> & Pick<IPeoplePickerItemSelectedProps, 'className' | 'selected' | 'disabled'> & {
    /** Whether it's invalid. */
    invalid?: boolean;
};

/**
 * Represents the stylable areas of the PeoplePickerItemSelected.
 * {@docCategory PeoplePicker}
 */
export declare interface IPeoplePickerItemSelectedStyles {
    /** Root element of picked PeoplePicker item */
    root: IStyle;
    /** Refers to the element holding the content (Persona) of the PeoplePicker item already picked. */
    itemContent: IStyle;
    /** Refers to the remove action button on a picked PeoplePicker item. */
    removeButton: IStyle;
    /** SubComponent (Persona, PersonaCoin) styles. */
    subComponentStyles: IPeoplePickerItemSelectedSubComponentStyles;
}

/**
 * Styles interface of the SubComponents rendered within PeoplePickerItemSelected.
 * {@docCategory PeoplePicker}
 */
export declare interface IPeoplePickerItemSelectedSubComponentStyles {
    /** Refers to the Persona rendered within the PeoplePickerItemSelected */
    persona: IStyleFunctionOrObject<IPersonaStyleProps, any>;
    /** Refers to the PersonaCoin in the Persona rendered within the PeoplePickerItemSelected */
    personaCoin?: IStyleFunctionOrObject<IPersonaCoinStyleProps, any>;
}

/**
 * Common props in between IPeoplePickerItemSelectedProps, IPeoplePickerItemWithMenuProps and
 * IPeoplePickerItemSuggestionProps.
 * {@docCategory PeoplePicker}
 */
export declare interface IPeoplePickerItemSharedProps {
    /** Additional CSS class(es) to apply to the PeoplePickerItem root element. */
    className?: string;
    /** Theme provided by High-Order Component. */
    theme?: ITheme;
}

export declare interface IPeoplePickerItemState {
    contextualMenuVisible: boolean;
}

/**
 * PeoplePickerItemSuggestion props interface. Refers to the PeoplePicker items that are suggested for picking.
 * {@docCategory PeoplePicker}
 */
export declare interface IPeoplePickerItemSuggestionProps extends IPeoplePickerItemSharedProps {
    /** Persona props for each suggested for picking PeoplePicker item. */
    personaProps?: IPersonaProps;
    /** Call to provide customized styling that will layer on top of the variant rules. */
    styles?: IStyleFunctionOrObject<IPeoplePickerItemSuggestionStyleProps, IPeoplePickerItemSuggestionStyles>;
    /** General common props for all PeoplePicker items suggestions. */
    suggestionsProps?: IBasePickerSuggestionsProps;
    /**
     * Flag that controls whether each suggested PeoplePicker item (Persona) is rendered with or without secondary text
     * for compact look.
     * @defaultvalue false
     */
    compact?: boolean;
}

/**
 * Props needed to construct PeoplePickerItemSuggestion styles.
 * {@docCategory PeoplePicker}
 */
export declare type IPeoplePickerItemSuggestionStyleProps = Required<Pick<IPeoplePickerItemSuggestionProps, 'theme'>> & Pick<IPeoplePickerItemSuggestionProps, 'className'> & {};

/**
 * Represents the stylable areas of the PeoplePickerItemSuggestion.
 * {@docCategory PeoplePicker}
 */
export declare interface IPeoplePickerItemSuggestionStyles {
    /** Root container element of a suggested PeoplePicker item. */
    root: IStyle;
    /** Refers to the element wrapping the Persona of the suggested PeoplePicker item. */
    personaWrapper: IStyle;
    /** SubComponent (Persona, PersonaCoin) styles. */
    subComponentStyles: IPeoplePickerItemSelectedSubComponentStyles;
}

/**
 * PeoplePickerItemWithMenu props interface.
 * @deprecated Do not use. Will be removed in Fabric 7.0
 */
export declare interface IPeoplePickerItemWithMenuProps extends IPickerItemProps<IPersonaWithMenu> {
}

/**
 * PeoplePicker props interface which renders Personas as items.
 * {@docCategory PeoplePicker}
 * */
export declare interface IPeoplePickerProps extends IBasePickerProps<IPersonaProps> {
}

/**
 * {@docCategory Persona}
 */
export declare interface IPersona {
}

/**
 * {@docCategory Persona}
 */
export declare interface IPersonaCoinProps extends IPersonaSharedProps {
    /**
     * Gets the component ref.
     */
    componentRef?: IRefObject<{}>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules
     */
    styles?: IStyleFunctionOrObject<IPersonaCoinStyleProps, IPersonaCoinStyles>;
    /**
     * Additional css class to apply to the PersonaCoin
     * @defaultvalue undefined
     */
    className?: string;
}

/**
 * {@docCategory Persona}
 */
export declare interface IPersonaCoinStyleProps {
    /**
     * Theme provided by High-Order Component.
     */
    theme: ITheme;
    /**
     * Custom class name.
     */
    className?: string;
    /**
     * Decides the size of the control.
     * @defaultvalue PersonaSize.size48
     */
    size?: PersonaSize;
    /**
     * Optional custom persona coin size in pixel.
     */
    coinSize?: number;
    /**
     * Decides whether to display coin for unknown persona
     */
    showUnknownPersonaCoin?: boolean;
}

/**
 * {@docCategory Persona}
 */
export declare interface IPersonaCoinStyles {
    coin: IStyle;
    imageArea: IStyle;
    image: IStyle;
    initials: IStyle;
    size10WithoutPresenceIcon: IStyle;
}

/**
 * {@docCategory Persona}
 */
export declare interface IPersonaPresenceProps extends IPersonaSharedProps {
    /**
     * Gets the component ref.
     */
    componentRef?: IRefObject<{}>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules
     */
    styles?: IStyleFunctionOrObject<IPersonaPresenceStyleProps, IPersonaPresenceStyles>;
}

/**
 * {@docCategory Persona}
 */
export declare type IPersonaPresenceStyleProps = Required<Pick<IPersonaSharedProps, 'theme'>> & Pick<IPersonaSharedProps, 'presence' | 'isOutOfOffice' | 'size' | 'presenceColors'> & Pick<IPersonaProps, 'className'>;

/**
 * {@docCategory Persona}
 */
export declare interface IPersonaPresenceStyles {
    presence: IStyle;
    presenceIcon: IStyle;
}

/**
 * {@docCategory Persona}
 */
export declare interface IPersonaProps extends IPersonaSharedProps {
    /**
     * Optional callback to access the IPersona interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IPersona>;
    /**
     * Additional CSS class(es) to apply to the Persona
     */
    className?: string;
    /**
     * Call to provide customized styling that will layer on top of variant rules
     */
    styles?: IStyleFunctionOrObject<IPersonaStyleProps, IPersonaStyles>;
    /**
     * Optional custom renderer for the primary text.
     */
    onRenderPrimaryText?: IRenderFunction<IPersonaProps>;
    /**
     * Optional custom renderer for the secondary text.
     */
    onRenderSecondaryText?: IRenderFunction<IPersonaProps>;
    /**
     * Optional custom renderer for the tertiary text.
     */
    onRenderTertiaryText?: IRenderFunction<IPersonaProps>;
    /**
     * Optional custom renderer for the optional text.
     */
    onRenderOptionalText?: IRenderFunction<IPersonaProps>;
}

/**
 * {@docCategory Persona}
 */
export declare interface IPersonaSharedProps extends React.HTMLAttributes<HTMLDivElement>, React.RefAttributes<HTMLDivElement> {
    /**
     * Primary text to display, usually the name of the person.
     */
    text?: string;
    /**
     * Decides the size of the control.
     * @defaultvalue PersonaSize.size48
     */
    size?: PersonaSize;
    /**
     * Optional custom renderer for the coin
     * @deprecated Use `onRenderPersonaCoin` for custom rendering instead
     */
    onRenderCoin?: IRenderFunction<IPersonaSharedProps>;
    /**
     * Optional custom renderer for the coin
     */
    onRenderPersonaCoin?: IRenderFunction<IPersonaSharedProps>;
    /**
     * If true, adds the css class 'is-fadeIn' to the image.
     */
    imageShouldFadeIn?: boolean;
    /**
     * If true, the image starts as visible and is hidden on error. Otherwise, the image is hidden until
     * it is successfully loaded. This disables imageShouldFadeIn.
     * @defaultvalue false
     */
    imageShouldStartVisible?: boolean;
    /**
     * Url to the image to use, should be a square aspect ratio and big enough to fit in the image area.
     */
    imageUrl?: string;
    /**
     * Alt text for the image to use. Defaults to an empty string.
     */
    imageAlt?: string;
    /**
     * The user's initials to display in the image area when there is no image.
     * @defaultvalue [Derived from text]
     */
    imageInitials?: string;
    /**
     * Whether initials are calculated for phone numbers and number sequences.
     * Example: Set property to true to get initials for project names consisting of numbers only.
     * @defaultvalue false
     */
    allowPhoneInitials?: boolean;
    /**
     * Optional custom renderer for the initials
     */
    onRenderInitials?: IRenderFunction<IPersonaSharedProps>;
    /**
     * Optional callback for when loading state of the photo changes
     */
    onPhotoLoadingStateChange?: (newImageLoadState: ImageLoadState) => void;
    /**
     * The background color when the user's initials are displayed.
     * @defaultvalue [Derived from text]
     */
    initialsColor?: PersonaInitialsColor | string;
    /** The colors to be used for the presence-icon and it's background */
    presenceColors?: {
        available: string;
        away: string;
        busy: string;
        dnd: string;
        offline: string;
        oof: string;
        background: string;
    };
    /**
     * Presence of the person to display - will not display presence if undefined.
     * @defaultvalue PersonaPresence.none
     */
    presence?: PersonaPresence;
    /**
     * Presence title to be shown as a tooltip on hover over the presence icon.
     */
    presenceTitle?: string;
    /**
     * This flag can be used to signal the persona is out of office.
     * This will change the way the presence icon looks for statuses that support dual-presence.
     */
    isOutOfOffice?: boolean;
    /**
     * Secondary text to display, usually the role of the user.
     */
    secondaryText?: string;
    /**
     * Tertiary text to display, usually the status of the user.
     * The tertiary text will only be shown when using size72 or size100.
     */
    tertiaryText?: string;
    /**
     * Optional text to display, usually a custom message set. The optional text will only be shown when using size100.
     */
    optionalText?: string;
    /**
     * Whether to not render persona details, and just render the persona image/initials.
     */
    hidePersonaDetails?: boolean;
    showSecondaryText?: boolean;
    /**
     * If true, show the special coin for unknown persona.
     * It has '?' in place of initials, with static font and background colors
     */
    showUnknownPersonaCoin?: boolean;
    /**
     * If true renders the initials while the image is loading.
     * This only applies when an imageUrl is provided.
     * @defaultvalue false
     */
    showInitialsUntilImageLoads?: boolean;
    /**
     * Optional custom persona coin size in pixel.
     */
    coinSize?: number;
    /**
     * Optional HTML element props for Persona coin.
     */
    coinProps?: IPersonaCoinProps;
    /**
     * Theme provided by High-Order Component.
     */
    theme?: ITheme;
    /**
     * Primary text to display, usually the name of the person.
     * @deprecated Use `text` instead.
     */
    primaryText?: string;
}

/**
 * {@docCategory Persona}
 */
export declare interface IPersonaStyleProps {
    /**
     * Theme provided by High-Order Component.
     */
    theme: ITheme;
    /**
     * Custom class name.
     */
    className?: string;
    /**
     * Optional custom persona coin size in pixel.
     */
    coinSize?: number;
    /**
     * Decides the size of the control.
     * @defaultvalue PersonaSize.size48
     */
    size?: PersonaSize;
    /**
     * Presence of the person to display - will not display presence if undefined.
     * @defaultvalue PersonaPresence.none
     */
    presence?: PersonaPresence;
    showSecondaryText?: boolean;
}

/**
 * {@docCategory Persona}
 */
export declare interface IPersonaStyles {
    root: IStyle;
    details: IStyle;
    primaryText: IStyle;
    secondaryText: IStyle;
    tertiaryText: IStyle;
    optionalText: IStyle;
    textContent: IStyle;
}

/**
 * Extended interface from IPersonaProps to add `menuItems` property PeoplePickerItemWithMenu items.
 * @deprecated Do not use. Will be removed in Fabric 7.0
 */
export declare interface IPersonaWithMenu extends IPersonaProps {
    /** Additional menuItems to be rendered in a contextualMenu for each Persona. */
    menuItems?: IContextualMenuItem[];
}

/**
 * Aria id's for internal picker components
 * {@docCategory Pickers}
 */
export declare type IPickerAriaIds = {
    /**
     * Aria id for selected suggestion alert component
     */
    selectedSuggestionAlert: string;
    /**
     * Aria id for selected items container component
     */
    selectedItems: string;
    /**
     * Aria id for suggestions list component
     */
    suggestionList: string;
    /**
     * Aria id for element with role=combobox
     */
    combobox: string;
};

/**
 * PickerItem component.
 * {@docCategory Pickers}
 */
export declare interface IPickerItem {
}

/**
 * PickerItem props common for any type of items.
 * {@docCategory Pickers}
 */
export declare interface IPickerItemProps<T> extends React.AllHTMLAttributes<HTMLElement> {
    /**
     * Optional callback to access the IPickerItem interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IPickerItem>;
    /** The item of Type T (Persona, Tag, or any other custom item provided). */
    item: T;
    /** Index number of the item in the array of picked items. */
    index: number;
    /** Whether the picked item is selected or not. */
    selected?: boolean;
    /** Callback issued when the item is removed from the array of picked items. */
    onRemoveItem?: () => void;
    /**
     * Internal Use only, gives a callback to the renderer to call when an item has changed.
     * This allows the base picker to keep track of changes in the items.
     */
    onItemChange?: (item: T, index: number) => void;
    /** Unique key for each picked item. */
    key?: string | number;
    /** Aria-label for the picked item remove button. */
    removeButtonAriaLabel?: string;
}

/**
 * {@docCategory HoverCard}
 */
export declare interface IPlainCard {
}

/**
 * PlainCard component props.
 * {@docCategory HoverCard}
 */
export declare interface IPlainCardProps extends IBaseCardProps<IPlainCard, IPlainCardStyles, IPlainCardStyleProps> {
    /**
     *  Render function to populate compact content area
     */
    onRenderPlainCard?: IRenderFunction<any>;
}

/**
 * {@docCategory HoverCard}
 */
export declare interface IPlainCardStyleProps extends IBaseCardStyleProps {
}

/**
 * {@docCategory HoverCard}
 */
export declare interface IPlainCardStyles extends IBaseCardStyles {
}
export { IPoint }

/**
 * {@docCategory Popup}
 */
export declare interface IPopupProps extends React.HTMLAttributes<HTMLDivElement>, React.RefAttributes<HTMLDivElement> {
    /**
     * Aria role for popup
     */
    role?: string;
    /**
     * Accessible label text for the popup.
     */
    ariaLabel?: string;
    /**
     *  Defines the element id referencing the element containing label text for popup.
     */
    ariaLabelledBy?: string;
    /**
     * Defines the element id referencing the element containing the description for the popup.
     */
    ariaDescribedBy?: string;
    /**
     * A callback function for when the popup is dismissed from the close button or light dismiss. If provided, will
     * handle escape key press and call this. The event will be stopped/canceled.
     */
    onDismiss?: (ev?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement> | KeyboardEvent) => any;
    /**
     *  Optional class name for the root popup div.
     */
    className?: string;
    /**
     * If true, when this component is unmounted, focus will be restored to the element that had focus when the component
     * first mounted.
     * @defaultvalue true
     * @deprecated use restoreFocus callback instead
     */
    shouldRestoreFocus?: boolean;
    /**
     * Called when the component is unmounting, and focus needs to be restored. If this is provided,
     * focus will not be restored automatically, and you'll need to call `params.originalElement.focus()`.
     */
    onRestoreFocus?: (params: IPopupRestoreFocusParams) => void;
}

/**
 * Parameters passed to `onRestoreFocus` callback of `Popup` and related components.
 * {@docCategory Popup}
 */
export declare interface IPopupRestoreFocusParams {
    /** Element the underlying Popup believes focus should go to */
    originalElement?: HTMLElement | Window;
    /** Whether the popup currently contains focus */
    containsFocus: boolean;
    /** Whether the document the popup belongs to contains focus (or false if unknown) */
    documentContainsFocus: boolean;
}

/**
 * Gives the position of some element on the page. Only a pair of vertical and horizontal edges need to be
 * given. So top/left or bottom/left is sufficient.
 * The number given is the distance in pixels from whatever host was given..
 * So bottom: 100 would be 100px up from the bottom of the host while top: 100px from the top.
 */
export declare interface IPosition {
    top?: number;
    left?: number;
    bottom?: number;
    right?: number;
    [key: string]: number | undefined;
}

export declare interface IPositionDirectionalHintData {
    targetEdge: RectangleEdge;
    alignmentEdge?: RectangleEdge;
    isAuto?: boolean;
    alignTargetEdge?: boolean;
}

export declare interface IPositionedData {
    /**
     * The new position of the element.
     */
    elementPosition: IPosition;
    /**
     * The finalized target edge that element is aligning to. For instance RectangleEdge.bottom would mean
     * that the bottom edge of the target is being aligned to by the RectangleEdge.top of the element
     * that is being positioned.
     */
    targetEdge: RectangleEdge;
    /**
     * The finalized alignment edge that the element is aligning too. For instance, RectangleEdge.left means
     * that the left edge of the target should be in line with the left edge of the element being positioned.
     */
    alignmentEdge?: RectangleEdge;
}

/**
 * {@docCategory Coachmark}
 */
export declare interface IPositioningContainer {
}

/**
 * {@docCategory Coachmark}
 */
export declare interface IPositioningContainerProps extends IBaseProps<IPositioningContainer>, React.RefAttributes<HTMLDivElement> {
    /**
     * All props for your component are to be defined here.
     */
    componentRef?: IRefObject<IPositioningContainer>;
    /**
     * The target that the positioningContainer should try to position itself based on.
     * It can be either an HTMLElement a querySelector string of a valid HTMLElement
     * or a MouseEvent. If MouseEvent is given then the origin point of the event will be used.
     */
    target?: HTMLElement | string | MouseEvent | Point | null;
    /**
     * How the element should be positioned
     * @defaultvalue DirectionalHint.BottomAutoEdge
     */
    directionalHint?: DirectionalHint;
    /**
     * How the element should be positioned in RTL layouts.
     * If not specified, a mirror of `directionalHint` will be used instead
     */
    directionalHintForRTL?: DirectionalHint;
    /**
     * The gap between the positioningContainer and the target
     * @defaultvalue 0
     */
    offsetFromTarget?: number;
    /**
     * Custom width for positioningContainer including borders. If value is 0, no width is applied.
     * @defaultvalue 0
     */
    positioningContainerWidth?: number;
    /**
     * The background color of the positioningContainer in hex format ie. #ffffff.
     * @defaultvalue $ms-color-white
     */
    backgroundColor?: string;
    /**
     * The bounding rectangle for which the contextual menu can appear in.
     */
    bounds?: IRectangle;
    /**
     * The minimum distance the positioningContainer will be away from the edge of the screen.
     *  @defaultvalue 8
     */
    minPagePadding?: number;
    /**
     * If true use a point rather than rectangle to position the positioningContainer.
     * For example it can be used to position based on a click.
     * @deprecated Do not use.
     */
    useTargetPoint?: boolean;
    /**
     * Point used to position the positioningContainer.
     * Deprecated, use `target` instead.
     * @deprecated Use `target` instead.
     */
    targetPoint?: Point;
    /**
     * If true then the onClose will not not dismiss on scroll
     * @defaultvalue false
     */
    preventDismissOnScroll?: boolean;
    /**
     * If true the position returned will have the menu element cover the target.
     * If false then it will position next to the target;
     * @defaultvalue false
     */
    coverTarget?: boolean;
    /**
     * Aria role assigned to the positioningContainer (Eg. dialog, alertdialog).
     */
    role?: string;
    /**
     * Accessible label text for positioningContainer.
     */
    ariaLabel?: string;
    /**
     *  Defines the element id referencing the element containing label text for positioningContainer.
     */
    ariaLabelledBy?: string;
    /**
     * Defines the element id referencing the element containing the description for the positioningContainer.
     */
    ariaDescribedBy?: string;
    /**
     * CSS class to apply to the positioningContainer.
     * @defaultvalue null
     */
    className?: string;
    /**
     * Optional callback when the layer content has mounted.
     */
    onLayerMounted?: () => void;
    /**
     * Optional callback that is called once the positioningContainer has been correctly positioned.
     * @param positions - gives the user information about how the container is positioned such
     * as the element position, the target edge, and the alignment edge of the container.
     */
    onPositioned?: (positions?: IPositionedData) => void;
    /**
     * Callback when the positioningContainer tries to close.
     */
    onDismiss?: (ev?: any) => void;
    /**
     * If true do not render on a new layer. If false render on a new layer.
     */
    doNotLayer?: boolean;
    /**
     * If true the position will not change sides in an attempt to fit the positioningContainer within bounds.
     * It will still attempt to align it to whatever bounds are given.
     * @defaultvalue false
     */
    directionalHintFixed?: boolean;
    /**
     * Specify the final height of the content.
     * To be used when expanding the content dynamically so that positioningContainer can adjust its position.
     */
    finalHeight?: number;
    /**
     * If true then the positioningContainer will attempt to focus the first focusable element that it contains.
     * If it doesn't find an element, no focus will be set and the method will return false.
     * This means that it's the contents responsibility to either set focus or have
     * focusable items.
     * @returns True if focus was set, false if it was not.
     */
    setInitialFocus?: boolean;
    /**
     * Set max height of positioningContainer
     * When not set the positioningContainer will expand with contents up to the bottom of the screen
     */
    positioningContainerMaxHeight?: number;
    /**
     * Child nodes to render
     */
    children?: ReactNode;
}

/**
 * @deprecated Use `IPositioningContainerProps`
 * {@docCategory Coachmark}
 */
export declare type IPositioningContainerTypes = IPositioningContainerProps;

export declare interface IPositionProps {
    target?: Element | MouseEvent | Point;
    /** how the element should be positioned */
    directionalHint?: DirectionalHint;
    /**
     * How the element should be positioned in RTL layouts.
     * If not specified, a mirror of `directionalHint` will be used instead
     */
    directionalHintForRTL?: DirectionalHint;
    /** The gap between the callout and the target */
    gapSpace?: number;
    /**
     * The bounding rectangle for which  the contextual menu can appear in.
     */
    bounds?: IRectangle;
    /**
     * If true the position returned will have the menu element cover the target.
     * If false then it will position next to the target;
     */
    coverTarget?: boolean;
    /**
     * If true the position will not change edges in an attempt to fit the rectangle within bounds.
     * It will still attempt to align it to whatever bounds are given.
     * @defaultvalue false
     */
    directionalHintFixed?: boolean;
    /**
     * If true the positioning logic will prefer flipping edges over nudging the rectangle to fit within bounds,
     * thus making sure the element align perfectly with target.
     */
    alignTargetEdge?: boolean;
}

/**
 * {@docCategory ProgressIndicator}
 */
export declare interface IProgressIndicatorProps extends React.ClassAttributes<ProgressIndicatorBase> {
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IProgressIndicatorStyleProps, IProgressIndicatorStyles>;
    /**
     * Theme provided by High-Order Component.
     */
    theme?: ITheme;
    /**
     * Additional css class to apply to the ProgressIndicator
     * @defaultvalue undefined
     */
    className?: string;
    /**
     * Label to display above the control. May be a string or React virtual elements.
     */
    label?: React.ReactNode;
    /**
     * Text describing or supplementing the operation. May be a string or React virtual elements.
     */
    description?: React.ReactNode;
    /**
     * Percentage of the operation's completeness, numerically between 0 and 1. If this is not set,
     * the indeterminate progress animation will be shown instead.
     */
    percentComplete?: number;
    /**
     * Whether or not to hide the progress state.
     */
    progressHidden?: boolean;
    /**
     * A render override for the progress track.
     */
    onRenderProgress?: IRenderFunction<IProgressIndicatorProps>;
    /**
     * Text alternative of the progress status, used by screen readers for reading the value of the progress.
     */
    ariaValueText?: string;
    /**
     * Deprecated at v0.43.0, to be removed at \>= v0.53.0. Use `label` instead.
     * @deprecated Use `label` instead.
     */
    title?: string;
    /**
     * Height of the ProgressIndicator
     * @defaultvalue 2
     */
    barHeight?: number;
}

/**
 * {@docCategory ProgressIndicator}
 */
export declare interface IProgressIndicatorStyleProps {
    /**
     * Theme provided by High-Order Component.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    indeterminate?: boolean;
    barHeight?: number;
}

/**
 * {@docCategory ProgressIndicator}
 */
export declare interface IProgressIndicatorStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
    itemName: IStyle;
    itemDescription: IStyle;
    itemProgress: IStyle;
    progressTrack: IStyle;
    progressBar: IStyle;
}

/**
 * {@docCategory Rating}
 */
export declare interface IRating {
    /** Current displayed rating value. Will be `min` if the user has not yet set a rating. */
    rating: number;
}

/**
 * Rating component props.
 * {@docCategory Rating}
 */
export declare interface IRatingProps extends React.HTMLAttributes<HTMLDivElement>, React.RefAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the IRating interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IRating>;
    /**
     * Current rating. Must be a number between `min` and `max`. Only provide this if the Rating
     * is a controlled component where you are maintaining its current state; otherwise, use the
     * `defaultRating` property.
     */
    rating?: number;
    /**
     * Default rating. Must be a number between `min` and `max`. Only provide this if the Rating
     * is an uncontrolled component; otherwise, use the `rating` property.
     */
    defaultRating?: number;
    /**
     * Minimum rating. Must be \>= 0.
     * @defaultvalue 0 if `allowZeroStars` is true, 1 otherwise
     * @deprecated Use `allowZeroStars` instead.
     */
    min?: number;
    /**
     * Maximum rating. Must be \>= `min`.
     * @defaultvalue 5
     */
    max?: number;
    /**
     * Allow the initial rating value (or updated values passed in through `rating`) to be 0.
     * Note that a value of 0 still won't be selectable by mouse or keyboard.
     */
    allowZeroStars?: boolean;
    /**
     * Whether the control should be disabled.
     */
    disabled?: boolean;
    /**
     * Custom icon name for selected rating elements.
     * @defaultvalue FavoriteStarFill
     */
    icon?: string;
    /**
     * Custom icon name for unselected rating elements.
     * @defaultvalue FavoriteStar
     */
    unselectedIcon?: string;
    /**
     * Optional custom renderer for the star component.
     */
    onRenderStar?: IRenderFunction<IRatingStarProps>;
    /**
     * Size of rating
     * @defaultvalue Small
     */
    size?: RatingSize;
    /**
     * Callback for when the rating changes.
     */
    onChange?: (event: React.FormEvent<HTMLElement>, rating?: number) => void;
    /**
     * Optional label format for each individual rating star (not the rating control as a whole)
     * that will be read by screen readers. Placeholder `{0}` is the current rating and placeholder
     * `{1}` is the max: for example, `"Select {0} of {1} stars"`.
     *
     * (To set the label for the control as a whole, use `getAriaLabel` or `aria-label`.)
     *
     * @defaultvalue ''
     */
    ariaLabelFormat?: string;
    /**
     * Optional flag to mark rating control as readOnly
     */
    readOnly?: boolean;
    getAriaLabel?: (rating: number, max: number) => string;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IRatingStyleProps, IRatingStyles>;
    /**
     * Theme (provided through customization.)
     */
    theme?: ITheme;
}

export declare interface IRatingStarProps {
    fillPercentage: number;
    disabled?: boolean;
    classNames: IProcessedStyleSet<IRatingStyles>;
    icon: string;
    starNum?: number;
}

/**
 * {@docCategory Rating}
 */
export declare interface IRatingStyleProps {
    disabled?: boolean;
    readOnly?: boolean;
    theme: ITheme;
}

/**
 * {@docCategory Rating}
 */
export declare interface IRatingStyles {
    root: IStyle;
    ratingStar: IStyle;
    ratingStarBack: IStyle;
    ratingStarFront: IStyle;
    ratingButton: IStyle;
    ratingStarIsSmall: IStyle;
    ratingStarIsLarge: IStyle;
    rootIsSmall: IStyle;
    rootIsLarge: IStyle;
    labelText: IStyle;
    ratingFocusZone: IStyle;
}

export declare interface IRelativePositions {
    calloutPosition: IPosition;
    beakPosition: {
        position: IPosition | undefined;
        display: 'block';
    };
    directionalClassName: string;
    submenuDirection: DirectionalHint;
}

/**
 * {@doccategory Nav}
 */
export declare interface IRenderGroupHeaderProps extends INavLinkGroup {
    /**
     * Whether or not the group is presently expanded.
     */
    isExpanded?: boolean;
}

/**
 * {@docCategory ResizeGroup}
 */
export declare interface IResizeGroup {
    /**
     * Remeasures the available space.
     */
    remeasure(): void;
}

/**
 * {@docCategory ResizeGroup}
 */
export declare interface IResizeGroupProps extends React.HTMLAttributes<HTMLDivElement>, React.RefAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the IResizeGroup interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IResizeGroup>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules
     * @deprecated Removed to reduce bundle size.  Please use `className` and add css rules to `className` instead.
     */
    styles?: IStyleFunctionOrObject<IResizeGroupStyleProps, IResizeGroupStyles>;
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;
    /**
     * Additional css class to apply to the Component
     * @defaultvalue undefined
     */
    className?: string;
    /**
     * Direction of this resize group, vertical or horizontal
     * @defaultvalue ResizeGroupDirection.horizontal
     */
    direction?: ResizeGroupDirection;
    /**
     * Initial data to be passed to the `onRenderData` function. When there is no `onGrowData` provided, this data should
     * represent what should be passed to the render function when the parent container of the ResizeGroup is at its
     * maximum supported width. A `cacheKey` property may optionally be included as part of the data. Two data objects
     * with the same `cacheKey` will be assumed to take up the same width and will prevent measurements.
     * The type of `cacheKey` is a string.
     */
    data: any;
    /**
     * Function to render the data. Called when rendering the contents to the screen and when
     * rendering in a hidden div to measure the size of the contents.
     */
    onRenderData: (data: any) => JSX.Element;
    /**
     * Function to be performed on the data in order to reduce its width and make it fit into the given space.
     * If there are no more scaling steps to apply, it should return undefined to prevent
     * an infinite render loop.
     */
    onReduceData: (prevData: any) => any;
    /**
     * Function to be performed on the data in order to increase its width. It is called in scenarios where the
     * container has more room than the previous render and we may be able to fit more content. If there are no more
     * scaling operations to perform on teh data, it should return undefined to prevent an infinite render loop.
     */
    onGrowData?: (prevData: any) => any;
    /**
     * Function to be called every time data is rendered. It provides the data that was actually rendered.
     * A use case would be adding telemetry when a particular control is shown in an overflow well or
     * dropped as a result of onReduceData or to count the number of renders that an implementation of
     * onReduceData triggers.
     */
    dataDidRender?: (renderedData: any) => void;
}

export declare interface IResizeGroupState {
    /**
     * Final data used to render proper sized component
     */
    renderedData?: any;
    /**
     * Data to render in a hidden div for measurement
     */
    dataToMeasure?: any;
    /**
     * Set to true when the content container might have new dimensions and should
     * be remeasured.
     */
    measureContainer?: boolean;
    /**
     * Are we resizing to accommodate having more or less available space?
     * The 'grow' direction is when the container may have more room than the last render,
     * such as when a window resize occurs. This means we will try to fit more content in the window.
     * The 'shrink' direction is when the contents don't fit in the container and we need
     * to find a transformation of the data that makes everything fit.
     */
    resizeDirection?: 'grow' | 'shrink';
}

/**
 * {@docCategory ResizeGroup}
 */
export declare interface IResizeGroupStyleProps {
    /**
     * Accept theme prop.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
}

/**
 * {@docCategory ResizeGroup}
 */
export declare interface IResizeGroupStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
}

/** RGB color with optional alpha value. */
export declare interface IRGB {
    /** Red, range 0-255. */
    r: number;
    /** Green, range 0-255. */
    g: number;
    /** Blue, range 0-255. */
    b: number;
    /** Alpha, range 0 (transparent)-100. Usually assumed to be 100 if not specified. */
    a?: number;
}

/**
 * {@docCategory ScrollablePane}
 */
export declare interface IScrollablePane {
    /** Triggers a layout update for the pane. */
    forceLayoutUpdate(): void;
    /** Gets the current scroll position of the scrollable pane */
    getScrollPosition(): number;
}

export declare interface IScrollablePaneContext {
    scrollablePane?: {
        subscribe: (handler: (container: HTMLElement, stickyContainer: HTMLElement) => void) => void;
        unsubscribe: (handler: (container: HTMLElement, stickyContainer: HTMLElement) => void) => void;
        addSticky: (sticky: Sticky) => void;
        removeSticky: (sticky: Sticky) => void;
        updateStickyRefHeights: () => void;
        sortSticky: (sticky: Sticky, sortAgain?: boolean) => void;
        notifySubscribers: (sort?: boolean) => void;
        syncScrollSticky: (sticky: Sticky) => void;
    };
}

/**
 * {@docCategory ScrollablePane}
 */
export declare interface IScrollablePaneProps extends React.HTMLAttributes<HTMLElement | ScrollablePaneBase> {
    /**
     * Optional callback to access the IScrollablePane interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IScrollablePane>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules
     */
    styles?: IStyleFunctionOrObject<IScrollablePaneStyleProps, IScrollablePaneStyles>;
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;
    /**
     * Additional css class to apply to the ScrollablePane
     * @defaultvalue undefined
     */
    className?: string;
    /**
     * Sets the initial scroll position of the ScrollablePane
     */
    initialScrollPosition?: number;
    scrollbarVisibility?: ScrollbarVisibility;
}

export declare interface IScrollablePaneState {
    stickyTopHeight: number;
    stickyBottomHeight: number;
    scrollbarWidth: number;
    scrollbarHeight: number;
}

/**
 * {@docCategory ScrollablePane}
 */
export declare interface IScrollablePaneStyleProps {
    /**
     * Accept theme prop.
     */
    theme: ITheme;
    /**
     * Accept custom classNames
     */
    className?: string;
    scrollbarVisibility?: IScrollablePaneProps['scrollbarVisibility'];
}

/**
 * {@docCategory ScrollablePane}
 */
export declare interface IScrollablePaneStyles {
    /**
     * Style set for the root element.
     */
    root: IStyle;
    /**
     * Style set for the stickyAbove element.
     */
    stickyAbove: IStyle;
    /**
     * Style set for the stickyBelow element.
     */
    stickyBelow: IStyle;
    /**
     * Style set for the stickyBelowItems element.
     */
    stickyBelowItems: IStyle;
    /**
     * Style set for the contentContainer element.
     */
    contentContainer: IStyle;
}

export declare function isDark(color: IColor): boolean;

/**
 * {@docCategory SearchBox}
 */
export declare interface ISearchBox {
    /**
     * Sets focus inside the search input box.
     */
    focus(): void;
    /**
     * Returns whether or not the SearchBox has focus
     */
    hasFocus(): boolean;
}

/**
 * {@docCategory SearchBox}
 */
export declare interface ISearchBoxProps extends React.InputHTMLAttributes<HTMLInputElement>, React.RefAttributes<HTMLDivElement> {
    /**
     * Optional callback to access the ISearchBox interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: React.Ref<ISearchBox>;
    /**
     * Placeholder for the search box.
     */
    placeholder?: string;
    /**
     * Deprecated. Use `placeholder` instead.
     * @deprecated Use `placeholder` instead.
     */
    labelText?: string;
    /**
     * Callback function for when the typed input for the SearchBox has changed.
     */
    onChange?: (event?: React.ChangeEvent<HTMLInputElement>, newValue?: string) => void;
    /**
     * Callback executed when the user presses enter in the search box.
     */
    onSearch?: (newValue: any) => void;
    /**
     * Callback executed when the user clears the search box by either clicking 'X' or hitting escape.
     */
    onClear?: (ev?: any) => void;
    /**
     * Callback executed when the user presses escape in the search box.
     */
    onEscape?: (ev?: any) => void;
    /**
     * Deprecated at v0.52.2, use `onChange` instead.
     * @deprecated Use `onChange` instead.
     */
    onChanged?: (newValue: any) => void;
    /**
     * The value of the text in the SearchBox.
     */
    value?: string;
    /**
     * The default value of the text in the SearchBox, in the case of an uncontrolled component.
     */
    defaultValue?: string;
    /**
     * CSS class to apply to the SearchBox.
     */
    className?: string;
    /**
     * The aria label of the SearchBox for the benefit of screen readers.
     */
    ariaLabel?: string;
    /**
     * The props for the clear button.
     */
    clearButtonProps?: IButtonProps;
    /**
     * The props for the icon.
     */
    iconProps?: Pick<IIconProps, Exclude<keyof IIconProps, 'className'>>;
    /**
     * Whether or not the SearchBox is underlined.
     * @defaultvalue false
     */
    underlined?: boolean;
    /**
     * The role assigned to the root DIV element of the SearchBox, useful for defining a landmark role, such as "search".
     */
    role?: string;
    /**
     * Theme (provided through customization).
     */
    theme?: ITheme;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<ISearchBoxStyleProps, ISearchBoxStyles>;
    /**
     * Whether or not to animate the SearchBox icon on focus.
     * @defaultvalue false
     */
    disableAnimation?: boolean;
}

/**
 * {@docCategory SearchBox}
 */
export declare interface ISearchBoxStyleProps {
    theme: ITheme;
    className?: string;
    disabled?: boolean;
    hasFocus?: boolean;
    underlined?: boolean;
    hasInput?: boolean;
    disableAnimation?: boolean;
}

/**
 * {@docCategory SearchBox}
 */
export declare interface ISearchBoxStyles {
    root?: IStyle;
    iconContainer?: IStyle;
    icon?: IStyle;
    field?: IStyle;
    clearButton?: IStyle;
}

/**
 * - `TComponent` - Component used for reference properties, such as `componentRef`.
 * - `TListenerElement` - Listener element associated with HTML event callbacks. Optional. If not provided,
 *   `TComponent` is assumed.
 * {@docCategory ISelectableDroppableTextProps}
 */
export declare interface ISelectableDroppableTextProps<TComponent, TListenerElement> extends React.HTMLAttributes<TListenerElement> {
    /**
     * Optional callback to access the ISelectableDroppableText interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<TComponent>;
    /**
     * Descriptive label for the ISelectableDroppableText
     */
    label?: string;
    /**
     * Aria Label for the ISelectableDroppableText for screen reader users.
     */
    ariaLabel?: string;
    /**
     * Id of the ISelectableDroppableText
     */
    id?: string;
    /**
     * If provided, additional class name to provide on the root element.
     */
    className?: string;
    /**
     * The key(s) that will be initially used to set a selected item.
     *
     * Mutually exclusive with `selectedKey`.
     * For Dropdown in multi-select mode, use `defaultSelectedKeys` instead.
     */
    defaultSelectedKey?: string | number | string[] | number[] | null;
    /**
     * The key(s) of the selected item. If you provide this, you must maintain selection
     * state by observing onChange events and passing a new value in when changed.
     * Note that passing in `null` will cause selection to be reset.
     *
     * Mutually exclusive with `defaultSelectedKey`.
     * For Dropdown in multi-select mode, use `selectedKeys` instead.
     */
    selectedKey?: string | number | string[] | number[] | null;
    /**
     * Optional prop that indicates if multi-choice selections are allowed or not.
     * @defaultvalue false
     */
    multiSelect?: boolean;
    /**
     * Collection of options for this ISelectableDroppableText
     */
    options?: any;
    /**
     * Optional custom renderer for the ISelectableDroppableText container
     */
    onRenderContainer?: IRenderFunction<ISelectableDroppableTextProps<TComponent, TListenerElement>>;
    /**
     * Optional custom renderer for the ISelectableDroppableText list
     */
    onRenderList?: IRenderFunction<ISelectableDroppableTextProps<TComponent, TListenerElement>>;
    /**
     * Optional custom renderer for the ISelectableDroppableText options
     */
    onRenderItem?: IRenderFunction<ISelectableOption>;
    /**
     * Optional custom renderer for the ISelectableDroppableText option content
     */
    onRenderOption?: IRenderFunction<ISelectableOption>;
    /**
     * Callback that is issued when the options callout is dismissed
     */
    onDismiss?: () => void;
    /**
     * Whether or not the ISelectableDroppableText is disabled.
     */
    disabled?: boolean;
    /**
     * Whether or not the ISelectableDroppableText is required.
     */
    required?: boolean;
    /**
     * Custom properties for ISelectableDroppableText's Callout used to render options.
     */
    calloutProps?: ICalloutProps;
    /**
     * Custom properties for ISelectableDroppableText's Panel used to render options on small devices.
     */
    panelProps?: IPanelProps;
    /**
     * Descriptive label for the ISelectableDroppableText Error Message
     */
    errorMessage?: string;
    /**
     * Input placeholder text. Displayed until option is selected.
     */
    placeholder?: string;
    /**
     * Whether or not the ComboBox/Dropdown should expand on keyboard focus.
     * @defaultvalue false
     */
    openOnKeyboardFocus?: boolean;
}

export declare interface ISelectableOption<T = any> {
    /**
     * Arbitrary string associated with this option.
     */
    key: string | number;
    /**
     * ID attribute associated with this option
     */
    id?: string;
    /**
     * Text to render for this option
     */
    text: string;
    /**
     * Title attribute (built in tooltip) for a given option.
     */
    title?: string;
    /**
     * Text to render for this option
     */
    itemType?: SelectableOptionMenuItemType;
    /**
     * Index for this option
     */
    index?: number;
    /**
     * The aria label for the dropdown option. If not present, the `text` will be used.
     */
    ariaLabel?: string;
    /** If option is selected. */
    selected?: boolean;
    /**
     * Whether the option is disabled
     * @defaultvalue false
     */
    disabled?: boolean;
    /**
     * Defines whether the option is hidden or not.
     * @defaultvalue false
     */
    hidden?: boolean;
    /**
     * Data available to custom onRender functions.
     */
    data?: T;
}

export declare interface ISelectedItemProps<T> extends IPickerItemProps<T> {
    onCopyItem: (item: T) => void;
}

/**
 * {@docCategory SelectedPeopleList}
 */
export declare interface ISelectedPeopleItemProps extends ISelectedItemProps<IExtendedPersonaProps> {
    onExpandItem?: () => void;
    renderPersonaCoin?: IRenderFunction<IPersonaProps>;
    renderPrimaryText?: IRenderFunction<IPersonaProps>;
}

/**
 * {@docCategory SelectedPeopleList}
 */
export declare interface ISelectedPeopleProps extends IBaseSelectedItemsListProps<IExtendedPersonaProps> {
    onExpandGroup?: (item: IExtendedPersonaProps) => void;
    removeMenuItemText?: string;
    copyMenuItemText?: string;
    editMenuItemText?: string;
    getEditingItemText?: (item: IExtendedPersonaProps) => string;
    onRenderFloatingPicker?: React.ComponentType<IBaseFloatingPickerProps<IPersonaProps>>;
    floatingPickerProps?: IBaseFloatingPickerProps<IPersonaProps>;
}
export { ISelection }
export { ISelectionOptions }

/**
 * {@docCategory Selection}
 */
export declare interface ISelectionZone {
    /**
     * Method to ignore subsequent focus.
     */
    ignoreNextFocus: () => void;
}

/**
 * {@docCategory Selection}
 */
export declare interface ISelectionZoneProps extends React.ClassAttributes<SelectionZone> {
    /**
     * Reference to the component interface.
     */
    componentRef?: () => void;
    /**
     * Required {@link ISelection} instance bound to the {@link SelectionZone}.
     */
    selection: ISelection;
    /**
     * @deprecated No longer in use, focus is now managed by {@link FocusZone}.
     */
    layout?: {};
    /**
     * The mode of Selection, where the value is one of
     * 'none', 'single', or 'multiple'.
     *
     * @defaultvalue {@link SelectionMode.multiple}
     */
    selectionMode?: SelectionMode;
    /**
     * If true, selection is preserved on outer click.
     */
    selectionPreservedOnEmptyClick?: boolean;
    /**
     * If true, disables automatic selection on input elements.
     */
    disableAutoSelectOnInputElements?: boolean;
    /**
     * If true, modal selection is enabled on touch event.
     */
    enterModalOnTouch?: boolean;
    /**
     * Determines whether elements with the attribute `data-selection-touch-invoke` should be used as invocation targets
     * for an item if the user is using touch.
     *
     * @defaultvalue false
     */
    enableTouchInvocationTarget?: boolean;
    /**
     * Determines if an item is selected on focus.
     *
     * @defaultvalue true
     */
    isSelectedOnFocus?: boolean;
    /**
     * Optional callback for when an item is
     * invoked via ENTER or double-click.
     */
    onItemInvoked?: (item?: IObjectWithKey, index?: number, ev?: Event) => void;
    /**
     * Optional callback for when an
     * item's contextual menu action occurs.
     */
    onItemContextMenu?: (item?: any, index?: number, ev?: Event) => void | boolean;
    /**
     * Additional CSS class(es) to apply to the SelectionZone.
     */
    className?: string;
}

/**
 * {@docCategory Selection}
 */
export declare interface ISelectionZoneState {
    isModal: boolean | undefined;
}

/**
 * {@docCategory Separator}
 */
export declare interface ISeparator {
}

/**
 * {@docCategory Separator}
 */
export declare interface ISeparatorProps extends React.HTMLAttributes<HTMLDivElement>, React.RefAttributes<HTMLDivElement> {
    /**
     * Theme (provided through customization.)
     */
    theme?: ITheme;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<ISeparatorStyleProps, ISeparatorStyles>;
    /**
     * Whether the element is a vertical separator.
     */
    vertical?: boolean;
    /**
     * Where the content should be aligned in the separator.
     * @defaultValue 'center'
     */
    alignContent?: 'start' | 'center' | 'end';
}

/**
 * {@docCategory Separator}
 */
export declare type ISeparatorStyleProps = Required<Pick<ISeparatorProps, 'theme'>> & Pick<ISeparatorProps, 'className' | 'alignContent' | 'vertical'>;

/**
 * {@docCategory Separator}
 */
export declare interface ISeparatorStyles {
    /**
     * Style for the root element
     */
    root: IStyle;
    /**
     * Style for the content
     */
    content: IStyle;
}

/**
 * {@docCategory Shimmer}
 */
export declare interface IShimmerCircle {
}

/**
 * ShimmerCircle component props.
 * {@docCategory Shimmer}
 */
export declare interface IShimmerCircleProps extends React.AllHTMLAttributes<HTMLElement> {
    /**
     * Optional callback to access the IShimmerCircle interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IShimmerCircle>;
    /**
     * Sets the height of the circle.
     * @defaultvalue 24px
     */
    height?: number;
    /**
     * Theme provided by High-Order Component.
     */
    theme?: ITheme;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IShimmerCircleStyleProps, IShimmerCircleStyles>;
    /**
     * Use to set custom styling of the shimmerCircle borders.
     * @deprecated Use `styles` prop to leverage mergeStyle API.
     */
    borderStyle?: IRawStyle;
}

/**
 * Props needed to construct styles.
 * {@docCategory Shimmer}
 */
export declare type IShimmerCircleStyleProps = {
    /**
     * Theme values passed to the component.
     */
    theme: ITheme;
    /**
     * Needed to provide a height to the root of the control.
     */
    height?: number;
    /**
     * Styles to override borderStyles with custom ones.
     * @deprecated in favor of mergeStyles API.
     */
    borderStyle?: IRawStyle;
};

/**
 * Represents the stylable areas of the control.
 * {@docCategory Shimmer}
 */
export declare interface IShimmerCircleStyles {
    /**
     * Root of the ShimmerCircle component.
     */
    root?: IStyle;
    /**
     * Style for the circle SVG of the ShimmerCircle component.
     */
    svg?: IStyle;
}

/**
 * Interface describing the possible color customizations of Shimmer.
 * {@docCategory Shimmer}
 */
export declare interface IShimmerColors {
    /**
     * Defines the main background color which is the color you see when the wave is not animating.
     * @defaultvalue theme.palette.neutralLight
     */
    shimmer?: string;
    /**
     * Defines the tip color of the shimmer wave which gradually gets from and to `shimmer` color.
     * @defaultvalue theme.palette.neutralLighter
     */
    shimmerWave?: string;
    /**
     * Defines the background color of the space in between and around shimmer elements (borders, gaps and
     * rounded corners).
     * @defaultvalue theme.palette.white
     */
    background?: string;
}

/**
 * Shimmer Elements Interface representing all common properties between Gap, Circle and Line.
 * {@docCategory Shimmer}
 */
export declare interface IShimmerElement {
    /**
     * Represents the possible type of the shimmer elements: Gap, Circle, Line.
     * Required for every element you intend to use.
     */
    type: ShimmerElementType;
    /**
     * Sets the height of the element (ICircle, ILine, IGap) in pixels.
     * Read more details for each specific element.
     */
    height?: number;
    /**
     * Sets the width value of the element (ILine, IGap) in pixels.
     * Read more details for each specific element.
     */
    width?: number | string;
    /**
     * Sets vertical alignment of the element (ICircle, ILine).
     * @defaultvalue center
     */
    verticalAlign?: 'top' | 'center' | 'bottom';
}

/**
 * {@docCategory Shimmer}
 */
export declare interface IShimmerElementsGroup {
}

/**
 * ShimmerElementsGroup component props.
 * {@docCategory Shimmer}
 */
export declare interface IShimmerElementsGroupProps extends React.AllHTMLAttributes<HTMLElement> {
    /**
     * Optional callback to access the IShimmerElementsGroup interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IShimmerElementsGroup>;
    /**
     * Optional maximum row height of the shimmerElements container.
     */
    rowHeight?: number;
    /**
     * Elements to render in one group of the Shimmer.
     */
    shimmerElements?: IShimmerElement[];
    /**
     * Optional boolean for enabling flexWrap of the container containing the shimmerElements.
     * @defaultvalue false
     */
    flexWrap?: boolean;
    /**
     * Optional width for ShimmerElements container.
     */
    width?: string;
    /**
     * Theme provided by High-Order Component.
     */
    theme?: ITheme;
    /**
     * Defines the background color of the space in between and around shimmer elements.
     * @defaultvalue theme.palette.white
     */
    backgroundColor?: string;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IShimmerElementsGroupStyleProps, IShimmerElementsGroupStyles>;
}

/**
 * Props needed to construct styles.
 * {@docCategory Shimmer}
 */
export declare interface IShimmerElementsGroupStyleProps {
    /**
     * Boolean flag to notify whether the root element needs to flex wrap.
     */
    flexWrap?: boolean;
    /** Theme provided by High-Order Component. */
    theme: ITheme;
}

/**
 * Represents the stylable areas of the control.
 * {@docCategory Shimmer}
 */
export declare interface IShimmerElementsGroupStyles {
    /**
     * Represents the wrapper root element holding all elements inside.
     */
    root?: IStyle;
}

/**
 * {@docCategory Shimmer}
 */
export declare interface IShimmerGap {
}

/**
 * ShimmerGap component props.
 * {@docCategory Shimmer}
 */
export declare interface IShimmerGapProps extends React.AllHTMLAttributes<HTMLElement> {
    /**
     * Optional callback to access the IShimmerGap interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IShimmerGap>;
    /**
     * Sets the height of the gap.
     * @defaultvalue 16px
     */
    height?: number;
    /**
     * Sets width value of the gap.
     * @defaultvalue 10px
     */
    width?: number | string;
    /**
     * Theme provided by High-Order Component.
     */
    theme?: ITheme;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IShimmerGapStyleProps, IShimmerGapStyles>;
    /**
     * Use to set custom styling of the shimmerGap borders.
     * @deprecated Use `styles` prop to leverage mergeStyle API.
     */
    borderStyle?: IRawStyle;
}

/**
 * Props needed to construct styles.
 * {@docCategory Shimmer}
 */
export declare type IShimmerGapStyleProps = {
    /**
     * Theme values passed to the component.
     */
    theme: ITheme;
    /**
     * Needed to provide a height to the root of the control.
     */
    height?: number;
    /**
     * Styles to override borderStyles with custom ones.
     * @deprecated in favor of mergeStyles API.
     */
    borderStyle?: IRawStyle;
};

/**
 * Represents the stylable areas of the control.
 * {@docCategory Shimmer}
 */
export declare interface IShimmerGapStyles {
    /**
     * Root of the ShimmerGap component.
     */
    root?: IStyle;
}

/**
 * {@docCategory Shimmer}
 */
export declare interface IShimmerLine {
}

/**
 * ShimmerLine component props.
 * {@docCategory Shimmer}
 */
export declare interface IShimmerLineProps extends React.AllHTMLAttributes<HTMLElement> {
    /**
     * Optional callback to access the IShimmerLine interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<IShimmerLine>;
    /**
     * Sets the height of the rectangle.
     * @defaultvalue 16px
     */
    height?: number;
    /**
     * Sets width value of the line.
     * @defaultvalue 100%
     */
    width?: number | string;
    /**
     * Theme provided by High-Order Component.
     */
    theme?: ITheme;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IShimmerLineStyleProps, IShimmerLineStyles>;
    /**
     * Use to set custom styling of the shimmerLine borders.
     * @deprecated Use `styles` prop to leverage mergeStyle API.
     */
    borderStyle?: IRawStyle;
}

/**
 * Props needed to construct styles.
 * {@docCategory Shimmer}
 */
export declare type IShimmerLineStyleProps = {
    /**
     * Theme values passed to the component.
     */
    theme: ITheme;
    /**
     * Needed to provide a height to the root of the control.
     */
    height?: number;
    /**
     * Styles to override borderStyles with custom ones.
     * @deprecated in favor of mergeStyles API.
     */
    borderStyle?: IRawStyle;
};

/**
 * Represents the stylable areas of the control.
 * {@docCategory Shimmer}
 */
export declare interface IShimmerLineStyles {
    /**
     * Root of the ShimmerLine component.
     */
    root?: IStyle;
    /**
     * Top-left corner SVG of the ShimmerLine component.
     */
    topLeftCorner?: IStyle;
    /**
     * Top-right corner SVG of the ShimmerLine component.
     */
    topRightCorner?: IStyle;
    /**
     * Bottom-right corner SVG of the ShimmerLine component.
     */
    bottomRightCorner?: IStyle;
    /**
     * Bottom-left corner SVG of the ShimmerLine component.
     */
    bottomLeftCorner?: IStyle;
}

/**
 * Shimmer component props.
 * {@docCategory Shimmer}
 */
export declare interface IShimmerProps extends React.AllHTMLAttributes<HTMLElement>, React.RefAttributes<HTMLElement> {
    /**
     * Sets the width value of the shimmer wave wrapper.
     * @defaultvalue 100%
     */
    width?: number | string;
    /**
     * Controls when the shimmer is swapped with actual data through an animated transition.
     * @defaultvalue false
     */
    isDataLoaded?: boolean;
    /**
     * Elements to render in one line of the Shimmer.
     */
    shimmerElements?: IShimmerElement[];
    /**
     * Custom elements when necessary to build complex placeholder skeletons.
     */
    customElementsGroup?: React.ReactNode;
    /**
     * Localized string of the status label for screen reader
     */
    ariaLabel?: string;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<IShimmerStyleProps, IShimmerStyles>;
    /**
     * Additional CSS class(es) to apply to the Shimmer container.
     */
    className?: string;
    /**
     * Theme provided by High-Order Component.
     */
    theme?: ITheme;
    /**
     * Defines an object with possible colors to pass for Shimmer customization used on different backgrounds.
     */
    shimmerColors?: IShimmerColors;
}

/**
 * Defines props needed to construct styles.
 * This represents the simplified set of immutable things which control the class names.
 * {@docCategory Shimmer}
 */
export declare interface IShimmerStyleProps {
    /** Boolean flag to trigger fadeIn/fadeOut transition animation when content is loaded. */
    isDataLoaded?: boolean;
    /** Optional CSS class name for the component attached to the root stylable area. */
    className?: string;
    /** Theme provided by High-Order Component. */
    theme: ITheme;
    /** Interval in milliseconds for the adeIn/fadeOut transition animation. */
    transitionAnimationInterval?: number;
    /** Color to be used as the main background color of Shimmer when not animating. */
    shimmerColor?: string;
    /** Tip color of the shimmer wave which gradually gets from and to `shimmerColor`. */
    shimmerWaveColor?: string;
}

/**
 * Represents the stylable areas of the control.
 * {@docCategory Shimmer}
 */
export declare interface IShimmerStyles {
    /** Refers to the root wrapper element. */
    root?: IStyle;
    /** Refers to wrapper element of the shimmer only. */
    shimmerWrapper?: IStyle;
    /** Refers to gradient element of the shimmer animation only. */
    shimmerGradient?: IStyle;
    /** Refers to wrapper element of the children only. */
    dataWrapper?: IStyle;
    /** Styles for the hidden helper element to aid with screen readers. */
    screenReaderText?: IStyle;
}

/**
 * {@docCategory SpinButton}
 */
export declare interface ISpinButton {
    /**
     * Current committed/validated value of the control. Note that this does *not* update on every
     * keystroke while the user is editing text in the input field.
     * "committed" the edit yet by focusing away (blurring) or pressing enter,
     */
    value?: string;
    /**
     * Sets focus to the control.
     */
    focus: () => void;
}

/**
 * {@docCategory SpinButton}
 */
export declare interface ISpinButtonProps extends React.HTMLAttributes<HTMLDivElement>, React.RefAttributes<HTMLDivElement> {
    /**
     * Gets the component ref.
     */
    componentRef?: IRefObject<ISpinButton>;
    /**
     * Initial value of the control (assumed to be valid). Updates to this prop will not be respected.
     *
     * Use this if you intend for the SpinButton to be an uncontrolled component which maintains its
     * own value. For a controlled component, use `value` instead. (Mutually exclusive with `value`.)
     * @defaultvalue 0
     */
    defaultValue?: string;
    /**
     * Current value of the control (assumed to be valid).
     *
     * Only provide this if the SpinButton is a controlled component where you are maintaining its
     * current state and passing updates based on change events; otherwise, use the `defaultValue`
     * property. (Mutually exclusive with `defaultValue`.)
     */
    value?: string;
    /**
     * Min value of the control. If not provided, the control has no minimum value.
     */
    min?: number;
    /**
     * Max value of the control. If not provided, the control has no maximum value.
     */
    max?: number;
    /**
     * Difference between two adjacent values of the control.
     * This value is used to calculate the precision of the input if no `precision` is given.
     * The precision calculated this way will always be \>= 0.
     * @defaultvalue 1
     */
    step?: number;
    /**
     * A description of the control for the benefit of screen reader users.
     */
    ariaLabel?: string;
    /**
     * ID of a label which describes the control, if not using the default label.
     */
    ariaDescribedBy?: string;
    /**
     * A more descriptive title for the control, visible on its tooltip.
     */
    title?: string;
    /**
     * Whether or not the control is disabled.
     */
    disabled?: boolean;
    /**
     * Custom className for the control.
     */
    className?: string;
    /**
     * Descriptive label for the control.
     */
    label?: string;
    /**
     * Where to position the control's label.
     * @defaultvalue Left
     */
    labelPosition?: Position;
    /**
     * Props for an icon to display alongside the control's label.
     */
    iconProps?: IIconProps;
    /**
     * Callback for when the committed/validated value changes. This is called *after* `onIncrement`,
     * `onDecrement`, or `onValidate`, on the following events:
     * - User presses the up/down buttons (on single press or every spin)
     * - User presses the up/down arrow keys (on single press or every spin)
     * - User *commits* edits to the input text by focusing away (blurring) or pressing enter.
     *   Note that this is NOT called for every key press while the user is editing.
     */
    onChange?: (event: React.SyntheticEvent<HTMLElement>, newValue?: string) => void;
    /**
     * Callback for when the entered value should be validated.
     * @param value - The entered value to validate
     * @param event - The event that triggered this validate, if any (for accessibility)
     * @returns If a string is returned, it will be used as the new value
     */
    onValidate?: (value: string, event?: React.SyntheticEvent<HTMLElement>) => string | void;
    /**
     * Callback for when the increment button or up arrow key is pressed.
     * @param value - The current value to be incremented
     * @param event - The event that triggered this increment
     * @returns If a string is returned, it will be used as the new value
     */
    onIncrement?: (value: string, event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => string | void;
    /**
     * Callback for when the decrement button or down arrow key is pressed.
     * @param value - The current value to be decremented
     * @param event - The event that triggered this decrement
     * @returns If a string is returned, it will be used as the new value
     */
    onDecrement?: (value: string, event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>) => string | void;
    /**
     * Callback for when the user focuses the control.
     */
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    /**
     * Callback for when the control loses focus.
     */
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    /**
     * Custom props for the increment button.
     */
    incrementButtonIcon?: IIconProps;
    /**
     * Custom props for the decrement button.
     */
    decrementButtonIcon?: IIconProps;
    /**
     * Custom styling for individual elements within the control.
     */
    styles?: IStyleFunctionOrObject<ISpinButtonStyleProps, ISpinButtonStyles>;
    /**
     * Custom styles for the up arrow button.
     *
     * Note: The buttons are in a checked state when arrow keys are used to increment/decrement
     * the SpinButton. Use `rootChecked` instead of `rootPressed` for styling when that is the case.
     */
    upArrowButtonStyles?: Partial<IButtonStyles>;
    /**
     * Custom styles for the down arrow button.
     *
     * Note: The buttons are in a checked state when arrow keys are used to increment/decrement
     * the SpinButton. Use `rootChecked` instead of `rootPressed` for styling when that is the case.
     */
    downArrowButtonStyles?: Partial<IButtonStyles>;
    /**
     * Theme provided by HOC.
     */
    theme?: ITheme;
    /**
     * Accessible label text for the increment button (for screen reader users).
     */
    incrementButtonAriaLabel?: string;
    /**
     * Accessible label text for the decrement button (for screen reader users).
     */
    decrementButtonAriaLabel?: string;
    /**
     * How many decimal places the value should be rounded to.
     *
     * The default is calculated based on the precision of `step`: i.e. if step = 1, precision = 0.
     * step = 0.0089, precision = 4. step = 300, precision = 2. step = 23.00, precision = 2.
     */
    precision?: number;
    /**
     * The position in the parent set (if in a set).
     */
    ariaPositionInSet?: number;
    /**
     * The total size of the parent set (if in a set).
     */
    ariaSetSize?: number;
    /**
     * Sets the control's aria-valuenow. This is the numeric form of `value`.
     * Providing this only makes sense when using as a controlled component.
     */
    ariaValueNow?: number;
    ariaValueText?: string;
    /**
     * Keytip for the control.
     */
    keytipProps?: IKeytipProps;
    /**
     * Additional props for the input field.
     */
    inputProps?: React.InputHTMLAttributes<HTMLElement | HTMLInputElement>;
    /**
     * Additional props for the up and down arrow buttons.
     */
    iconButtonProps?: IButtonProps;
}

/**
 * {@docCategory SpinButton}
 */
export declare interface ISpinButtonStyleProps {
    theme: ITheme;
    className: string | undefined;
    disabled: boolean;
    isFocused: boolean;
    keyboardSpinDirection: KeyboardSpinDirection;
    labelPosition: Position;
}

/**
 * {@docCategory SpinButton}
 */
export declare interface ISpinButtonStyles {
    /**
     * Styles for the root of the component.
     */
    root: IStyle;
    /**
     * Style for the label wrapper element, which contains the icon and label.
     */
    labelWrapper: IStyle;
    /**
     * Style for the icon.
     */
    icon: IStyle;
    /**
     * Style for the label text.
     */
    label: IStyle;
    /**
     * Style for the wrapper element of the input field and arrow buttons.
     */
    spinButtonWrapper: IStyle;
    /**
     * Styles for the input.
     */
    input: IStyle;
    /**
     * Styles for the arrowButtonsContainer
     */
    arrowButtonsContainer: IStyle;
}

/**
 * {@docCategory Spinner}
 */
export declare interface ISpinner {
}

/**
 * Spinner component props.
 * {@docCategory Spinner}
 */
export declare interface ISpinnerProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Optional callback to access the ISpinner interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ISpinner>;
    /**
     * Deprecated and will be removed at \>= 2.0.0. Use `SpinnerSize` instead.
     * @deprecated Use `SpinnerSize` instead.
     */
    type?: SpinnerType;
    /**
     * The size of Spinner to render. \{ extraSmall, small, medium, large \}
     * @defaultvalue SpinnerType.medium
     */
    size?: SpinnerSize;
    /**
     * The label to show next to the Spinner. Label updates will be announced to the screen readers.
     * Use ariaLive to control politeness level.
     */
    label?: string;
    /**
     * Additional CSS class(es) to apply to the Spinner.
     */
    className?: string;
    /**
     * Politeness setting for label update announcement.
     * @defaultvalue polite
     */
    ariaLive?: 'assertive' | 'polite' | 'off';
    /**
     * Alternative status label for screen reader
     */
    ariaLabel?: string;
    /**
     * Theme (provided through customization.)
     */
    theme?: ITheme;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<ISpinnerStyleProps, ISpinnerStyles>;
    /**
     * The position of the label in regards of the spinner animation.
     * @defaultvalue SpinnerLabelPosition.bottom
     */
    labelPosition?: SpinnerLabelPosition;
}

/**
 * The props needed to construct styles.
 * This represents the simplified set of immutable things which control the class names.
 * {@docCategory Spinner}
 */
export declare interface ISpinnerStyleProps {
    /** Theme provided by High-Order Component. */
    theme: ITheme;
    /** Size of the spinner animation. */
    size?: SpinnerSize;
    /** CSS class name for the component attached to the root stylable area. */
    className?: string;
    /** Position of the label in regards to the spinner animation. */
    labelPosition?: SpinnerLabelPosition;
}

/**
 * Represents the stylable areas of the control.
 * {@docCategory Spinner}
 */
export declare interface ISpinnerStyles {
    /** Styles for the root element. Refers to the wrapper containing both the circle and the label. */
    root?: IStyle;
    /** Styles for the spinner circle animation. */
    circle?: IStyle;
    /** Styles for the label accompanying the circle. */
    label?: IStyle;
    /** Styles for the hidden helper element to aid with screen readers. */
    screenReaderText?: IStyle;
}

declare interface ISplitButtonClassNames {
    root?: string;
    icon?: string;
    splitButtonContainer?: string;
    flexContainer?: string;
    divider?: string;
}

export declare function isRelativeUrl(url: string): boolean;

/**
 * {@docCategory Stack}
 */
export declare type IStackComponent = IComponent<IStackProps, IStackTokens, IStackStyles>;

/**
 * {@docCategory Stack}
 */
export declare type IStackItemComponent = IComponent<IStackItemProps, IStackItemTokens, IStackItemStyles>;

/**
 * {@docCategory Stack}
 */
export declare interface IStackItemProps extends IStackItemSlots, IStyleableComponentProps<IStackItemProps, IStackItemTokens, IStackItemStyles> {
    /**
     * Defines a CSS class name used to style the StackItem.
     */
    className?: string;
    /**
     * Defines how much to grow the StackItem in proportion to its siblings.
     */
    grow?: boolean | number | 'inherit' | 'initial' | 'unset';
    /**
     * Defines at what ratio should the StackItem shrink to fit the available space.
     */
    shrink?: boolean | number | 'inherit' | 'initial' | 'unset';
    /**
     * Defines whether the StackItem should be prevented from shrinking.
     * This can be used to prevent a StackItem from shrinking when it is inside of a Stack that has shrinking items.
     * @defaultvalue false
     */
    disableShrink?: boolean;
    /**
     * Defines how to align the StackItem along the x-axis (for vertical Stacks) or the y-axis (for horizontal Stacks).
     */
    align?: 'auto' | 'stretch' | 'baseline' | 'start' | 'center' | 'end';
    /**
     * Defines whether the StackItem should take up 100% of the height of its parent.
     * @defaultvalue true
     */
    verticalFill?: boolean;
    /**
     * Defines order of the StackItem.
     * @defaultvalue 0
     */
    order?: number | string;
}

/**
 * {@docCategory Stack}
 */
export declare type IStackItemSlot = ISlotProp<IStackItemProps>;

/**
 * {@docCategory Stack}
 */
export declare interface IStackItemSlots {
    root?: IHTMLSlot;
}

/**
 * {@docCategory Stack}
 */
export declare type IStackItemStyles = IComponentStyles<IStackItemSlots>;

/**
 * {@docCategory Stack}
 */
export declare type IStackItemStylesReturnType = ReturnType<Extract<IStackItemComponent['styles'], Function>>;

/**
 * {@docCategory Stack}
 */
export declare type IStackItemTokenReturnType = ReturnType<Extract<IStackItemComponent['tokens'], Function>>;

/**
 * {@docCategory Stack}
 */
export declare interface IStackItemTokens {
    /**
     * Defines the margin to be applied to the StackItem relative to its container.
     */
    margin?: number | string;
    /**
     * Defines the padding to be applied to the StackItem contents relative to its border.
     */
    padding?: number | string;
}

/**
 * {@docCategory Stack}
 */
export declare interface IStackProps extends ISlottableProps<IStackSlots>, IStyleableComponentProps<IStackProps, IStackTokens, IStackStyles>, React.HTMLAttributes<HTMLElement> {
    /**
     * Defines how to render the Stack.
     */
    as?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Defines whether to render Stack children horizontally.
     * @defaultvalue false
     */
    horizontal?: boolean;
    /**
     * Defines whether to render Stack children in the opposite direction (bottom-to-top if it's a vertical Stack and
     * right-to-left if it's a horizontal Stack).
     * @defaultvalue false
     */
    reversed?: boolean;
    /**
     * Defines how to align Stack children horizontally (along the x-axis).
     */
    horizontalAlign?: Alignment;
    /**
     * Defines how to align Stack children vertically (along the y-axis).
     */
    verticalAlign?: Alignment;
    /**
     * Defines whether the Stack should take up 100% of the height of its parent.
     * This property is required to be set to true when using the `grow` flag on children in vertical oriented Stacks.
     * Stacks are rendered as block elements and grow horizontally to the container already.
     * @defaultvalue false
     */
    verticalFill?: boolean;
    /**
     * Defines whether Stack children should not shrink to fit the available space.
     * @defaultvalue false
     */
    disableShrink?: boolean;
    /**
     * Defines how much to grow the Stack in proportion to its siblings.
     */
    grow?: boolean | number | 'inherit' | 'initial' | 'unset';
    /**
     * Defines the spacing between Stack children.
     * The property is specified as a value for 'row gap', followed optionally by a value for 'column gap'.
     * If 'column gap' is omitted, it's set to the same value as 'row gap'.
     * @deprecated Use `childrenGap` token in `IStackTokens` instead.
     */
    gap?: number | string;
    /**
     * Defines the maximum width that the Stack can take.
     * @deprecated Use `maxWidth` token in `IStackTokens` instead.
     */
    maxWidth?: number | string;
    /**
     * Defines the maximum height that the Stack can take.
     * @deprecated Use `maxHeight` token in `IStackTokens` instead.
     */
    maxHeight?: number | string;
    /**
     * Defines the inner padding of the Stack.
     * @deprecated Use `padding` token in `IStackTokens` instead.
     */
    padding?: number | string;
    /**
     * Defines whether Stack children should wrap onto multiple rows or columns when they are about to overflow
     * the size of the Stack.
     * @defaultvalue false
     */
    wrap?: boolean;
}

/**
 * {@docCategory Stack}
 */
export declare type IStackSlot = ISlotProp<IStackProps>;

/**
 * {@docCategory Stack}
 */
export declare interface IStackSlots {
    /**
     * Defines root slot of the component.
     */
    root?: IHTMLSlot;
    /**
     * Defines a slot that is placed inside the root slot in order to achieve wrapping. Only used when the wrap
     * property is set to true.
     */
    inner?: IHTMLSlot;
}

/**
 * {@docCategory Stack}
 */
export declare type IStackStyles = IComponentStyles<IStackSlots>;

/**
 * {@docCategory Stack}
 */
export declare type IStackStylesReturnType = ReturnType<Extract<IStackComponent['styles'], Function>>;

/**
 * {@docCategory Stack}
 */
export declare type IStackTokenReturnType = ReturnType<Extract<IStackComponent['tokens'], Function>>;

/**
 * {@docCategory Stack}
 */
export declare interface IStackTokens {
    /**
     * Defines the spacing between Stack children.
     * The property is specified as a value for 'row gap', followed optionally by a value for 'column gap'.
     * If 'column gap' is omitted, it's set to the same value as 'row gap'.
     */
    childrenGap?: number | string;
    /**
     * Defines a maximum height for the Stack.
     */
    maxHeight?: number | string;
    /**
     * Defines a maximum width for the Stack.
     */
    maxWidth?: number | string;
    /**
     * Defines the padding to be applied to the Stack contents relative to its border.
     */
    padding?: number | string;
}

export declare interface IStickyProps extends React.Props<Sticky> {
    /**
     * Gets ref to component interface.
     */
    componentRef?: IRefObject<IStickyProps>;
    /**
     * Class name to apply to the sticky element if component is sticky.
     */
    stickyClassName?: string;
    /**
     * color to apply as 'background-color' style for sticky element.
     */
    stickyBackgroundColor?: string;
    /**
     * Region to render sticky component in.
     * @defaultvalue Both
     */
    stickyPosition?: StickyPositionType;
    /**
     * If true, then match scrolling position of placeholder element in Sticky.
     * @defaultvalue true
     */
    isScrollSynced?: boolean;
}

export declare interface IStickyState {
    isStickyTop: boolean;
    isStickyBottom: boolean;
    distanceFromTop?: number;
}

/**
 * Suggestion item props. Refers to the each individual suggested items rendered within Suggestions callout.
 * Type T is the type of the item that is displayed.
 * {@docCategory Pickers}
 */
export declare interface ISuggestionItemProps<T> {
    /**
     * Optional callback to access the ISuggestionItem interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ISuggestionsItem>;
    /** Individual suggestion object containing its properties. */
    suggestionModel: ISuggestionModel<T>;
    /** Optional renderer to override the default one for each type of picker. */
    RenderSuggestion: (item: T, suggestionItemProps: ISuggestionItemProps<T>) => JSX.Element;
    /** Callback for when the user clicks on the suggestion. */
    onClick: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    /** Callback for when the item is removed from the array of suggested items. */
    onRemoveItem: (ev: React.MouseEvent<HTMLButtonElement>) => void;
    /** Optional className for the root element of the suggestion item. */
    className?: string;
    /** Unique id of the suggested item. */
    id?: string;
    /** Whether the remove button should be rendered or not. */
    showRemoveButton?: boolean;
    /** An override for the 'selected' property of the SuggestionModel. */
    isSelectedOverride?: boolean;
    /**
     * The ARIA label for the button to remove the suggestion from the list.
     */
    removeButtonAriaLabel?: string;
    /** Call to provide customized styling that will layer on top of the variant rules. */
    styles?: IStyleFunctionOrObject<ISuggestionsItemStyleProps, ISuggestionsItemStyles>;
    /** Theme provided by High-Order Component. */
    theme?: ITheme;
}

/**
 * SuggestionModel interface.
 * Type T is the type of the item that is suggested (Persona, Tag or any other custom picker).
 * {@docCategory Pickers}
 */
export declare interface ISuggestionModel<T> {
    /** The suggested item of the type T */
    item: T;
    /** Whether the suggested item is selected or not. */
    selected: boolean;
    /** Aria-label string for each suggested item. */
    ariaLabel?: string;
}

/**
 * Suggestions component.
 * {@docCategory Pickers}
 */
export declare interface ISuggestions<T> {
    /** Execute the action selected. Can be SearchMore or ForceResolve actions. */
    executeSelectedAction: () => void;
    /** Focus on the ForceResolve action above the suggestions. If not available then focus on SearchMore action. */
    focusAboveSuggestions: () => void;
    /** Focus on the SearchMore action below the suggestions. If not available then focus on ForceResolve action. */
    focusBelowSuggestions: () => void;
    /** Focus the SearchMore action button. */
    focusSearchForMoreButton: () => void;
    /** Whether it has any suggested actions like ForceResolve or SearchMore. */
    hasSuggestedAction: () => boolean;
    /** Whether any of the suggested actions (ForceResolve or SearchMore) is selected. */
    hasSuggestedActionSelected: () => boolean;
    /** Returns true if the event was handled, false otherwise. */
    tryHandleKeyDown: (keyCode: number, currentSuggestionIndex: number) => boolean;
}

export declare interface ISuggestionsControlProps<T> extends React.ClassAttributes<any>, ISuggestionsCoreProps<T> {
    /**
     * An ARIA label for the container that is the parent of the suggestions header items.
     */
    suggestionsHeaderContainerAriaLabel?: string;
    /**
     * An ARIA label for the container that is the parent of the suggestions footer items.
     */
    suggestionsFooterContainerAriaLabel?: string;
    /**
     * The header items props
     */
    headerItemsProps?: ISuggestionsHeaderFooterProps[];
    /**
     * The footer items props
     */
    footerItemsProps?: ISuggestionsHeaderFooterProps[];
    /**
     * Whether or not the first selectable item in the suggestions list should be selected
     */
    shouldSelectFirstItem?: () => boolean;
    /**
     * The CSS classname of the suggestions list.
     */
    className?: string;
    /**
     * Completes the suggestion
     */
    completeSuggestion: () => void;
}

export declare interface ISuggestionsControlState<T> {
    selectedHeaderIndex: number;
    selectedFooterIndex: number;
    suggestions: ISuggestionModel<T>[];
}

export declare interface ISuggestionsCoreProps<T> extends React.ClassAttributes<any> {
    /**
     * Gets the component ref.
     */
    componentRef?: IRefObject<{}>;
    /**
     * How the suggestion should look in the suggestion list.
     */
    onRenderSuggestion?: (props: T, suggestionItemProps: ISuggestionItemProps<T>) => JSX.Element;
    /**
     * What should occur when a suggestion is clicked
     */
    onSuggestionClick: (ev?: React.MouseEvent<HTMLElement>, item?: any, index?: number) => void;
    /**
     * The list of Suggestions that will be displayed
     */
    suggestions: ISuggestionModel<T>[];
    /**
     * Function to fire when one of the optional remove buttons on a suggestion is clicked.
     */
    onSuggestionRemove?: (ev?: React.MouseEvent<HTMLElement>, item?: IPersonaProps, index?: number) => void;
    /**
     * Screen reader message to read when there are suggestions available.
     */
    suggestionsAvailableAlertText?: string;
    /**
     * An ARIA label for the container that is the parent of the suggestions.
     */
    suggestionsContainerAriaLabel?: string;
    /**
     * the classname of the suggestion item.
     */
    suggestionsItemClassName?: string;
    /**
     * Maximum number of suggestions to show in the full suggestion list.
     */
    resultsMaximumNumber?: number;
    /**
     * Indicates whether to show a button with each suggestion to remove that suggestion.
     */
    showRemoveButtons?: boolean;
    /**
     * Indicates whether to loop around to the top or bottom of the suggestions
     * on calling nextSuggestion and previousSuggestion, respectively
     */
    shouldLoopSelection: boolean;
}

export declare interface ISuggestionsHeaderFooterItemProps {
    componentRef?: IRefObject<{}>;
    renderItem: () => JSX.Element;
    onExecute?: () => void;
    isSelected: boolean;
    id: string;
    className: string | undefined;
}

export declare interface ISuggestionsHeaderFooterProps {
    renderItem: () => JSX.Element;
    onExecute?: () => void;
    className?: string;
    ariaLabel?: string;
    shouldShow: () => boolean;
}

/**
 * SuggestionItem component.
 * {@docCategory Pickers}
 */
export declare interface ISuggestionsItem {
}

/**
 * The props needed to construct SuggestionItem styles.
 * {@docCategory Pickers}
 */
export declare type ISuggestionsItemStyleProps = Required<Pick<ISuggestionItemProps<any>, 'theme'>> & Pick<ISuggestionItemProps<any>, 'className'> & {
    /** Whether the suggestion item is selected or not. */
    suggested?: boolean;
};

/**
 * Represents the stylable areas of the SuggestionItem.
 * {@docCategory Pickers}
 */
export declare interface ISuggestionsItemStyles {
    /** Root element of the suggested item. */
    root: IStyle;
    /** Refers to the CommandButton holding the content of the suggested item. */
    itemButton: IStyle;
    /** Refers to the remove button in case it's rendered. */
    closeButton: IStyle;
}

/**
 * Suggestions props interface. Refers to the entire container holding all the suggestions.
 * Type T is the type of the items that are displayed.
 * {@docCategory Pickers}
 */
export declare interface ISuggestionsProps<T> extends React.Props<any> {
    /**
     * Optional callback to access the ISuggestions interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ISuggestions<T>>;
    /**
     * How the suggestion should look in the suggestion list.
     */
    onRenderSuggestion: (props: T, suggestionItemProps: ISuggestionItemProps<T>) => JSX.Element;
    /**
     * What should occur when a suggestion is clicked
     */
    onSuggestionClick: (ev?: React.MouseEvent<HTMLElement>, item?: any, index?: number) => void;
    /**
     * The list of Suggestions that will be displayed
     */
    suggestions: ISuggestionModel<T>[];
    /**
     * How the "no result found" should look in the suggestion list.
     */
    onRenderNoResultFound?: IRenderFunction<void>;
    /**
     * The text that appears at the top of the suggestions list.
     */
    suggestionsHeaderText?: string;
    /**
     * The text that should appear at the top of the most recently used box.
     */
    mostRecentlyUsedHeaderText?: string;
    /**
     * The text that appears indicating to the user that they can search for more results.
     */
    searchForMoreText?: string;
    /**
     * The callback that should be called when the user attempts to get more results
     */
    onGetMoreResults?: () => void;
    /**
     * The text that appears indicating to the use to force resolve the input
     */
    forceResolveText?: string;
    /**
     * The callback that should be called to see if the force resolve command should be shown
     */
    showForceResolve?: () => boolean;
    /**
     * The callback that should be called when the user attempts to use the input text as as item
     */
    createGenericItem?: () => void;
    /**
     * The CSS className of the suggestions root.
     */
    className?: string;
    /**
     * The CSS className of the suggestions list
     */
    suggestionsClassName?: string;
    /**
     * The text that should appear if there is a search error.
     *
     * @deprecated Use noResultsFoundText instead.
     */
    searchErrorText?: string;
    /**
     * The text that should appear if no results are found when searching.
     */
    noResultsFoundText?: string;
    /**
     * The className of the suggestion item.
     */
    suggestionsItemClassName?: string;
    /**
     * Used to indicate whether or not the user can request more suggestions.
     * Dictates whether or not the searchForMore button is displayed.
     */
    moreSuggestionsAvailable?: boolean;
    /**
     * Used to indicate whether or not the suggestions are loading.
     */
    isLoading?: boolean;
    /**
     * Used to indicate whether or not the component is searching for more results.
     */
    isSearching?: boolean;
    /**
     * The text to display while the results are loading.
     */
    loadingText?: string;
    /**
     * The text to display while searching for more results in a limited suggestions list.
     */
    searchingText?: string;
    /**
     * Indicates if a short list of recent suggestions should be shown.
     */
    isMostRecentlyUsedVisible?: boolean;
    /**
     * Function to fire when one of the optional remove buttons on a suggestion is clicked.
     *
     * TODO (adjective-object) remove IPersonaprops before the next major version bump
     */
    onSuggestionRemove?: (ev?: React.MouseEvent<HTMLElement>, item?: T | IPersonaProps, index?: number) => void;
    /**
     * Indicates if the text in resultsFooter or resultsFooterFull should be shown at the end of the suggestion list.
     * @defaultvalue true
     */
    isResultsFooterVisible?: boolean;
    /**
     * Maximum number of suggestions to show in the full suggestion list.
     */
    resultsMaximumNumber?: number;
    /**
     * A renderer that adds an element at the end of the suggestions list it has more items than resultsMaximumNumber.
     */
    resultsFooterFull?: (props: ISuggestionsProps<T>) => JSX.Element;
    /**
     * A renderer that adds an element at the end of the suggestions list it has fewer items than resultsMaximumNumber.
     */
    resultsFooter?: (props: ISuggestionsProps<T>) => JSX.Element;
    /**
     * Indicates whether to show a button with each suggestion to remove that suggestion.
     */
    showRemoveButtons?: boolean;
    /**
     * Screen reader message to read when there are suggestions available.
     */
    suggestionsAvailableAlertText?: string;
    /**
     * A function that resets focus to the expected item in the suggestion list
     */
    refocusSuggestions?: (keyCode: KeyCodes) => void;
    /**
     * An ARIA label for the container that is the parent of the suggestions.
     */
    suggestionsContainerAriaLabel?: string;
    /**
     * An ARIA label to use for the buttons to remove individual suggestions.
     */
    removeSuggestionAriaLabel?: string;
    /**
     * The string that will be used as the suggestionsListId.
     * Will be used by the BasePicker to keep track of the list for aria.
     */
    suggestionsListId?: string;
    /** Call to provide customized styling that will layer on top of the variant rules. */
    styles?: IStyleFunctionOrObject<any, any>;
    /** Theme provided by High-Order Component. */
    theme?: ITheme;
}

export declare interface ISuggestionsState {
    selectedActionType: SuggestionActionType;
}

/**
 * The props needed to construct Suggestions styles.
 * {@docCategory Pickers}
 */
export declare type ISuggestionsStyleProps = Required<Pick<ISuggestionsProps<any>, 'theme'>> & Pick<ISuggestionsProps<any>, 'className' | 'suggestionsClassName'> & {
    /** Whether the forceResolve actionButton is selected. */
    forceResolveButtonSelected?: boolean;
    /** Whether the searchForMore actionButton is selected. */
    searchForMoreButtonSelected?: boolean;
};

/**
 * Represents the stylable areas of the Suggestions.
 * {@docCategory Pickers}
 */
export declare interface ISuggestionsStyles {
    /** Root element of the suggestions outer wrapper. */
    root: IStyle;
    /** Refers to the suggestions container. */
    suggestionsContainer: IStyle;
    /** Refers to the title rendered for suggestions container header and/or footer (if provided). */
    title: IStyle;
    /** Refers to the 'Force resolve' actionButton. */
    forceResolveButton: IStyle;
    /** Refers to the 'Search for more' actionButton. */
    searchForMoreButton: IStyle;
    /** Refers to the text rendered when no suggestions are found. */
    noSuggestions: IStyle;
    /** Refers to the text displaying if more suggestions available. */
    suggestionsAvailable: IStyle;
    /** SubComponents (Spinner) styles. */
    subComponentStyles: ISuggestionsSubComponentStyles;
}

/**
 * Styles interface of the SubComponents rendered within PeoplePickerItemSelected.
 * {@docCategory Pickers}
 */
export declare interface ISuggestionsSubComponentStyles {
    /** Refers to the Spinner rendered within the Suggestions when searching or loading suggestions. */
    spinner: IStyleFunctionOrObject<ISpinnerStyleProps, any>;
}

/**
 * Returns true if the argument is a valid Shade value
 * @param shade - The Shade value to validate.
 */
export declare function isValidShade(shade?: Shade): boolean;

/**
 * {@docCategory SwatchColorPicker}
 */
export declare interface ISwatchColorPickerProps extends React.RefAttributes<HTMLElement> {
    /**
     * Number of columns for the swatch color picker
     */
    columnCount: number;
    /**
     * ID for the swatch color picker's root element. Also used as a prefix for the IDs of color cells.
     */
    id?: string;
    /**
     * Additional class name to provide on the root element
     */
    className?: string;
    /**
     * The shape of the color cells.
     * @default 'circle'
     */
    cellShape?: 'circle' | 'square';
    /**
     * ID of the current selected color swatch. Only provide this if the SwatchColorPicker is a
     * controlled component where you are maintaining its current state; otherwise, use the
     * `defaultSelectedId` property.
     */
    selectedId?: string;
    /**
     * The color cells that will be made available to the user.
     *
     * Note: When the reference to this prop changes, regardless of how many color cells change,
     * all of the color cells will be re-rendered (potentially bad perf) because we memoize
     * based on this prop's reference.
     */
    colorCells: IColorCellProps[];
    /**
     * @deprecated No longer used. Provide `selectedId` if controlled or `defaultSelectedId` if uncontrolled.
     */
    isControlled?: boolean;
    /**
     * ID of the default selected color swatch. Only provide this if the SwatchColorPicker is an
     * uncontrolled component; otherwise, use the `selectedId` property.
     */
    defaultSelectedId?: string | undefined;
    /**
     * @deprecated Use `onChange`
     */
    onColorChanged?: (id?: string, color?: string) => void;
    /**
     * Callback for when the user changes the color.
     * If `id` and `color` are unspecified, there is no selected cell.
     * (e.g. the user executed the currently selected cell to unselect it)
     */
    onChange?: (event: React.FormEvent<HTMLElement>, id: string | undefined, color: string | undefined) => void;
    /**
     * Callback for when the user hovers over a color cell.
     * If `id` and `color` are unspecified, cells are no longer being hovered.
     */
    onCellHovered?: (id?: string, color?: string) => void;
    /**
     * Callback for when the user focuses a color cell.
     * If `id` and `color` are unspecified, cells are no longer being focused.
     */
    onCellFocused?: (id?: string, color?: string) => void;
    /**
     * Custom render function for the color cell
     */
    onRenderColorCell?: IRenderFunction<IColorCellProps>;
    /**
     * Whether the control is disabled.
     */
    disabled?: boolean;
    /**
     * Position this grid is in the parent set (index in a parent menu, for example)
     */
    ariaPosInSet?: number;
    /**
     * Size of the parent set (size of parent menu, for example)
     */
    ariaSetSize?: number;
    /**
     * Whether focus should cycle back to the beginning once the user navigates past the end (and vice versa).
     * Only relevant if `doNotContainWithinFocusZone` is not true.
     * @defaultvalue true
     */
    shouldFocusCircularNavigate?: boolean;
    /**
     * If false (the default), the grid is contained inside a FocusZone.
     * If true, a FocusZone is not used.
     * @default false
     */
    doNotContainWithinFocusZone?: boolean;
    /**
     * The distance between cells, in pixels
     * @defaultvalue 10
     */
    cellMargin?: number;
    /**
     * Height of an individual cell, in pixels
     * @defaultvalue 20
     */
    cellHeight?: number;
    /**
     * Width of an individual cell, in pixels
     * @defaultvalue 20
     */
    cellWidth?: number;
    /**
     * Width of the border indicating a hovered/selected cell, in pixels
     * @defaultvalue If `cellWidth` is less than 24px, then default value is 2px. Otherwise it defaults to 4px.
     */
    cellBorderWidth?: number;
    /**
     * Theme to apply to the component.
     */
    theme?: ITheme;
    /**
     * Styles for the component.
     */
    styles?: IStyleFunctionOrObject<ISwatchColorPickerStyleProps, ISwatchColorPickerStyles>;
    /**
     * Styles for the grid cells.
     */
    getColorGridCellStyles?: IStyleFunctionOrObject<IColorPickerGridCellStyleProps, IColorPickerGridCellStyles>;
    /**
     * Whether to update focus when a cell is hovered.
     * @defaultvalue false
     */
    focusOnHover?: boolean;
    /**
     * Selector to focus on mouse leave. Should only be used in conjunction with `focusOnHover`.
     */
    mouseLeaveParentSelector?: string | undefined;
}

/**
 * Properties required to build the styles for the color picker component.
 * {@docCategory SwatchColorPicker}
 */
export declare interface ISwatchColorPickerStyleProps {
    /**
     * Theme to apply to the container
     */
    theme: ITheme;
    /**
     * Custom className to apply to the container.
     */
    className?: string;
    /**
     * The distance between cells
     */
    cellMargin?: number;
}

/**
 * Styles for the SwatchColorPicker.
 * {@docCategory SwatchColorPicker}
 */
export declare interface ISwatchColorPickerStyles {
    /**
     * Style applied to the container grid.
     */
    root: IStyle;
    /**
     * Style for the table cells of the grid.
     */
    tableCell: IStyle;
    /**
     * Style for the FocusZone container for the grid.
     */
    focusedContainer?: IStyle;
}

/**
 * TagPickerItem item interface.
 * {@docCategory TagPicker}
 */
export declare interface ITag {
    /** Name of the item. */
    name: string;
    /** Unique key for the item. */
    key: string | number;
}

/**
 * TagItem component props
 * {@docCategory TagPicker}
 */
export declare interface ITagItemProps extends IPickerItemProps<ITag> {
    /** Additional CSS class(es) to apply to the TagItem root element. */
    className?: string;
    /**
     * Enable or not focus on TagItem when TagPicker is disabled.
     * @defaultvalue false
     */
    enableTagFocusInDisabledPicker?: boolean;
    /**
     * The title (and aria-label) attribute used by the TagItem text element.
     * @defaultvalue children if of type string or item.name
     */
    title?: string;
    /** Call to provide customized styling that will layer on top of the variant rules. */
    styles?: IStyleFunctionOrObject<ITagItemStyleProps, ITagItemStyles>;
    /** Theme provided by High-Order Component. */
    theme?: ITheme;
}

/**
 * The props needed to construct TagItem styles.
 * {@docCategory TagPicker}
 */
export declare type ITagItemStyleProps = Required<Pick<ITagItemProps, 'theme'>> & Pick<ITagItemProps, 'className' | 'selected' | 'disabled'> & {};

/**
 * Represents the stylable areas of the TagItem.
 * {@docCategory TagPicker}
 */
export declare interface ITagItemStyles {
    /** Root element of picked TagItem */
    root: IStyle;
    /** Refers to the text element of the TagItem already picked. */
    text: IStyle;
    /** Refers to the cancel action button on a picked TagItem. */
    close: IStyle;
}

/**
 * TagItemSuggestion component props
 * {@docCategory TagPicker}
 */
export declare interface ITagItemSuggestionProps extends React.AllHTMLAttributes<HTMLElement> {
    /** Additional CSS class(es) to apply to the TagItemSuggestion div element */
    className?: string;
    /** Call to provide customized styling that will layer on top of the variant rules. */
    styles?: IStyleFunctionOrObject<ITagItemSuggestionStyleProps, ITagItemSuggestionStyles>;
    /** Theme provided by High-Order Component. */
    theme?: ITheme;
}

/**
 * The props needed to construct TagItemSuggestion styles.
 * {@docCategory TagPicker}
 */
export declare type ITagItemSuggestionStyleProps = Required<Pick<ITagItemSuggestionProps, 'theme'>> & Pick<ITagItemSuggestionProps, 'className'> & {};

/**
 * Represents the stylable areas of the TagItemSuggestion
 * {@docCategory TagPicker}
 */
export declare interface ITagItemSuggestionStyles {
    /** Refers to the text element of the TagItemSuggestion */
    suggestionTextOverflow?: IStyle;
}

/**
 * TagPicker component props
 * {@docCategory TagPicker}
 */
export declare interface ITagPickerProps extends IBasePickerProps<ITag> {
}

/**
 * {@docCategory TeachingBubble}
 */
export declare interface ITeachingBubble {
    /** Sets focus to the TeachingBubble root element */
    focus(): void;
}

/**
 * TeachingBubble component props.
 * {@docCategory TeachingBubble}
 */
export declare interface ITeachingBubbleProps extends React.RefAttributes<HTMLDivElement>, IAccessiblePopupProps {
    /**
     * Optional callback to access the ITeachingBubble interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ITeachingBubble>;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<ITeachingBubbleStyleProps, ITeachingBubbleStyles>;
    /**
     * Theme provided by High-Order Component.
     */
    theme?: ITheme;
    /**
     * Properties to pass through for Callout, reference detail properties in ICalloutProps
     */
    calloutProps?: ICalloutProps;
    /**
     * Properties to pass through for FocusTrapZone, reference detail properties in IFocusTrapZoneProps
     */
    focusTrapZoneProps?: IFocusTrapZoneProps;
    /**
     * A headline for the Teaching Bubble.
     */
    headline?: string;
    /**
     * A variation with smaller bold headline and no margins.
     */
    hasCondensedHeadline?: boolean;
    /**
     * @deprecated Use `hasCloseButton`.
     */
    hasCloseIcon?: boolean;
    /**
     * Whether the TeachingBubble renders close button in the top right corner.
     */
    hasCloseButton?: boolean;
    /**
     * An Image for the TeachingBubble.
     */
    illustrationImage?: IImageProps;
    /**
     * The Primary interaction button
     */
    primaryButtonProps?: IButtonProps;
    /**
     * The Secondary interaction button
     */
    secondaryButtonProps?: IButtonProps;
    /**
     * Text that will be rendered in the footer of the TeachingBubble.
     * May be rendered alongside primary and secondary buttons.
     */
    footerContent?: string | JSX.Element;
    /**
     * @deprecated use target instead
     * Element to anchor the TeachingBubble to.
     */
    targetElement?: HTMLElement;
    /**
     * Element, MouseEvent, Point, or querySelector string that the TeachingBubble
     * should anchor to.
     */
    target?: Target;
    /**
     * Callback when the TeachingBubble tries to close.
     */
    onDismiss?: (ev?: any) => void;
    /**
     * Whether or not the TeachingBubble is wide, with image on the left side.
     */
    isWide?: boolean;
    /**
     * A variation with smaller bold headline and margins to the body.
     * (`hasCondensedHeadline` takes precedence if it is also set to true.)
     */
    hasSmallHeadline?: boolean;
    /**
     *  Defines the element id referencing the element containing label text for TeachingBubble.
     */
    ariaLabelledBy?: string;
    /**
     * Defines the element id referencing the element containing the description for the TeachingBubble.
     */
    ariaDescribedBy?: string;
}

/**
 * {@docCategory TeachingBubble}
 */
export declare type ITeachingBubbleStyleProps = Required<Pick<ITeachingBubbleProps, 'theme'>> & Pick<ITeachingBubbleProps, 'hasCondensedHeadline' | 'hasSmallHeadline' | 'isWide'> & {
    /** Style props for callout. */
    calloutProps?: ICalloutContentStyleProps;
    /** Class name for primary button. */
    primaryButtonClassName?: string;
    /** Class name for secondary button. */
    secondaryButtonClassName?: string;
    /** If the close button is visible. */
    hasCloseButton?: boolean;
    /** If a headline has been specified. */
    hasHeadline?: boolean;
};

/**
 * {@docCategory TeachingBubble}
 */
export declare interface ITeachingBubbleStyles {
    root: IStyle;
    body: IStyle;
    bodyContent: IStyle;
    closeButton: IStyle;
    content: IStyle;
    footer: IStyle;
    header: IStyle;
    headline: IStyle;
    imageContent: IStyle;
    primaryButton: IStyle;
    secondaryButton: IStyle;
    subText: IStyle;
    subComponentStyles?: ITeachingBubbleSubComponentStyles;
}

/**
 * {@docCategory TeachingBubble}
 */
export declare interface ITeachingBubbleSubComponentStyles {
    /** Refers to the callout that hosts the TeachingBubble. */
    callout: IStyleFunctionOrObject<any, any>;
}

/**
 * {@docCategory Text}
 */
export declare type ITextComponent = IComponent<ITextProps, ITextTokens, ITextStyles>;

/**
 * {@docCategory TextField}
 */
export declare interface ITextField {
    /** Gets the current value of the input. */
    value: string | undefined;
    /** Sets focus to the input. */
    focus: () => void;
    /** Blurs the input */
    blur: () => void;
    /** Select the value of the text field. */
    select: () => void;
    /** Sets the selection start of the text field to a specified value. */
    setSelectionStart: (value: number) => void;
    /** Sets the selection end of the text field to a specified value. */
    setSelectionEnd: (value: number) => void;
    /**
     * Sets the start and end positions of a selection in a text field.
     * Call with start and end set to the same value to set the cursor position.
     * @param start - Index of the start of the selection.
     * @param end - Index of the end of the selection.
     */
    setSelectionRange: (start: number, end: number) => void;
    /** Gets the selection start of the text field. Returns -1 if there is no selection. */
    selectionStart: number | null;
    /** Gets the selection end of the text field. Returns -1 if there is no selection. */
    selectionEnd: number | null;
}

/**
 * TextField component props.
 * {@docCategory TextField}
 */
export declare interface ITextFieldProps extends React.AllHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    /**
     * Optional callback to access the ITextField component. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ITextField>;
    /**
     * Optional callback to access the root DOM element.
     * @deprecated Temporary solution which will be replaced with ref once TextField is converted to a function component.
     */
    elementRef?: React.Ref<HTMLDivElement>;
    /**
     * Whether or not the text field is a multiline text field.
     * @defaultvalue false
     */
    multiline?: boolean;
    /**
     * For multiline text fields, whether or not the field is resizable.
     * @defaultvalue true
     */
    resizable?: boolean;
    /**
     * For multiline text fields, whether or not to auto adjust text field height.
     * @defaultvalue false
     */
    autoAdjustHeight?: boolean;
    /**
     * Whether or not the text field is underlined.
     * @defaultvalue false
     */
    underlined?: boolean;
    /**
     * Whether or not the text field is borderless.
     * @defaultvalue false
     */
    borderless?: boolean;
    /**
     * Label displayed above the text field (and read by screen readers).
     */
    label?: string;
    /**
     * Custom renderer for the label.
     * If you don't call defaultRender, ensure that you give your custom-rendered label an id and that
     * you set the textfield's aria-labelledby prop to that id.
     */
    onRenderLabel?: IRenderFunction<ITextFieldProps>;
    /**
     * Description displayed below the text field to provide additional details about what text to enter.
     */
    description?: string;
    /**
     * Custom renderer for the description.
     */
    onRenderDescription?: IRenderFunction<ITextFieldProps>;
    /**
     * Prefix displayed before the text field contents. This is not included in the value.
     * Ensure a descriptive label is present to assist screen readers, as the value does not include the prefix.
     */
    prefix?: string;
    /**
     * Suffix displayed after the text field contents. This is not included in the value.
     * Ensure a descriptive label is present to assist screen readers, as the value does not include the suffix.
     */
    suffix?: string;
    /**
     * Custom render function for prefix.
     */
    onRenderPrefix?: IRenderFunction<ITextFieldProps>;
    /**
     * Custom render function for suffix.
     */
    onRenderSuffix?: IRenderFunction<ITextFieldProps>;
    /**
     * Props for an optional icon, displayed in the far right end of the text field.
     */
    iconProps?: IIconProps;
    /**
     * Default value of the text field. Only provide this if the text field is an uncontrolled component;
     * otherwise, use the `value` property.
     */
    defaultValue?: string;
    /**
     * Current value of the text field. Only provide this if the text field is a controlled component where you
     * are maintaining its current state; otherwise, use the `defaultValue` property.
     */
    value?: string;
    /**
     * Disabled state of the text field.
     * @defaultvalue false
     */
    disabled?: boolean;
    /**
     * If true, the text field is readonly.
     * @defaultvalue false
     */
    readOnly?: boolean;
    /**
     * Static error message displayed below the text field. Use `onGetErrorMessage` to dynamically
     * change the error message displayed (if any) based on the current value. `errorMessage` and
     * `onGetErrorMessage` are mutually exclusive (`errorMessage` takes precedence).
     */
    errorMessage?: string | JSX.Element;
    /**
     * Callback for when the input value changes.
     * This is called on both `input` and `change` events.
     * (In a later version, this will probably only be called for the `change` event.)
     */
    onChange?: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => void;
    /**
     * Function called after validation completes.
     */
    onNotifyValidationResult?: (errorMessage: string | JSX.Element, value: string | undefined) => void;
    /**
     * Function used to determine whether the input value is valid and get an error message if not.
     * Mutually exclusive with the static string `errorMessage` (it will take precedence over this).
     *
     * When it returns `string | JSX.Element`:
     * - If valid, it returns empty string.
     * - If invalid, it returns the error message and the text field will
     *   show a red border and show an error message below the text field.
     *
     * When it returns `Promise<string | JSX.Element>`:
     * - The resolved value is displayed as the error message.
     * - If rejected, the value is thrown away.
     */
    onGetErrorMessage?: (value: string) => string | JSX.Element | PromiseLike<string | JSX.Element> | undefined;
    /**
     * Text field will start to validate after users stop typing for `deferredValidationTime` milliseconds.
     * Updates to this prop will not be respected.
     * @defaultvalue 200
     */
    deferredValidationTime?: number;
    /**
     * Optional class name that is added to the container of the component.
     */
    className?: string;
    /**
     * Optional class name that is added specifically to the input/textarea element.
     */
    inputClassName?: string;
    /**
     * Aria label for the text field.
     */
    ariaLabel?: string;
    /**
     * Run validation when focus moves into the input, and **do not** validate on change.
     *
     * (Unless this prop and/or `validateOnFocusOut` is set to true, validation will run on every change.)
     * @defaultvalue false
     */
    validateOnFocusIn?: boolean;
    /**
     * Run validation when focus moves out of the input, and **do not** validate on change.
     *
     * (Unless this prop and/or `validateOnFocusIn` is set to true, validation will run on every change.)
     * @defaultvalue false
     */
    validateOnFocusOut?: boolean;
    /**
     * Whether validation should run when the input is initially rendered.
     * @defaultvalue true
     */
    validateOnLoad?: boolean;
    /**
     * Theme (provided through customization).
     */
    theme?: ITheme;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<ITextFieldStyleProps, ITextFieldStyles>;
    /**
     * Whether the input field should have autocomplete enabled.
     * This tells the browser to display options based on earlier typed values.
     * Common values are 'on' and 'off' but for all possible values see the following links:
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values
     * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
     */
    autoComplete?: string;
    /**
     * Whether to show the reveal password button for input type `'password'` (will be ignored unless
     * the `type` prop is set to `'password'`).
     */
    canRevealPassword?: boolean;
}

/** @internal */
export declare interface ITextFieldSnapshot {
    /**
     * If set, the text field is changing between single- and multi-line, so we'll need to reset
     * selection/cursor after the change completes.
     */
    selection?: [number | null, number | null];
}

/** @internal */
export declare interface ITextFieldState {
    /** The currently displayed value if uncontrolled. */
    uncontrolledValue: string | undefined;
    /** Is true when the control has focus. */
    isFocused?: boolean;
    /**
     * Dynamic error message returned by `onGetErrorMessage`.
     * Use `this._errorMessage` to get the actual current error message.
     */
    errorMessage: string | JSX.Element;
    /**
     * Whether this field has `type='password'` and `canRevealPassword=true`, and the password is
     * currently being revealed.
     */
    isRevealingPassword?: boolean;
}

/**
 * {@docCategory TextField}
 */
export declare type ITextFieldStyleProps = Required<Pick<ITextFieldProps, 'theme'>> & Pick<ITextFieldProps, 'className' | 'disabled' | 'inputClassName' | 'required' | 'multiline' | 'borderless' | 'resizable' | 'underlined' | 'autoAdjustHeight'> & {
    /** Element has an error message. */
    hasErrorMessage?: boolean;
    /** Element has an icon. */
    hasIcon?: boolean;
    /** Element has a label. */
    hasLabel?: boolean;
    /** Element has focus. */
    focused?: boolean;
    /** Element has a peek button for passwords */
    hasRevealButton?: boolean;
};

/**
 * {@docCategory TextField}
 */
export declare interface ITextFieldStyles {
    /**
     * Style for root element.
     */
    root: IStyle;
    /**
     * Style for field group encompassing entry area (prefix, field, icon and suffix).
     */
    fieldGroup: IStyle;
    /**
     * Style for prefix element.
     */
    prefix: IStyle;
    /**
     * Style for suffix element.
     */
    suffix: IStyle;
    /**
     * Style for main field entry element.
     */
    field: IStyle;
    /**
     * Style for icon prop element.
     */
    icon: IStyle;
    /**
     * Style for description element.
     */
    description: IStyle;
    /**
     * Style for TextField wrapper element.
     */
    wrapper: IStyle;
    /**
     * Style for error message element.
     */
    errorMessage: IStyle;
    /**
     * Styling for subcomponents.
     */
    subComponentStyles: ITextFieldSubComponentStyles;
    /**
     * Styling for reveal password button
     */
    revealButton: IStyle;
    /**
     * Styling for reveal password span
     */
    revealSpan: IStyle;
    /**
     * Styling for reveal password icon
     */
    revealIcon: IStyle;
}

/**
 * {@docCategory TextField}
 */
export declare interface ITextFieldSubComponentStyles {
    /**
     * Styling for Label child component.
     */
    label: IStyleFunctionOrObject<any, any>;
}

/**
 * Inputs to the component
 * {@docCategory Text}
 */
export declare interface ITextProps extends ISlottableProps<ITextSlots>, IStyleableComponentProps<ITextProps, ITextTokens, ITextStyles>, React.HTMLAttributes<HTMLElement> {
    /**
     * Optionally render the component as another component type or primitive.
     */
    as?: React.ElementType<React.HTMLAttributes<HTMLElement>>;
    /**
     * Optional font type for Text.
     */
    variant?: keyof IFontStyles;
    /**
     * Whether the text is displayed as a block element.
     *
     * Note that in order for ellipsis on overflow to work properly,
     * `block` and `nowrap` should be set to true.
     */
    block?: boolean;
    /**
     * Whether the text is not wrapped.
     *
     * Note that in order for ellipsis on overflow to work properly,
     * `block` and `nowrap` should be set to true.
     */
    nowrap?: boolean;
}

/**
 * {@docCategory Text}
 */
export declare type ITextSlot = ISlotProp<ITextProps, string>;

/**
 * {@docCategory Text}
 */
export declare interface ITextSlots {
    root?: IHTMLSlot;
}

/**
 * {@docCategory Text}
 */
export declare type ITextStyles = IComponentStyles<ITextSlots>;

/**
 * {@docCategory Text}
 */
export declare type ITextStylesReturnType = ReturnType<Extract<ITextComponent['styles'], Function>>;

/**
 * {@docCategory Text}
 */
export declare type ITextTokenReturnType = ReturnType<Extract<ITextComponent['tokens'], Function>>;

/**
 * {@docCategory Text}
 */
export declare interface ITextTokens {
}

export declare interface IThemeRules {
    [key: string]: IThemeSlotRule;
}

export declare interface IThemeSlotRule {
    /** The name of this theme slot. */
    name: string;
    /** The actual color this theme slot is if it is a color. */
    color?: IColor;
    /** The value of this slot if it is NOT a color. Must be falsey if not a color. */
    value?: string;
    /** The theme slot this slot is based on. */
    inherits?: IThemeSlotRule;
    /** If set, this slot is the specified shade of the slot it inherits from. */
    asShade?: Shade;
    /**
     * Whether this slot is a background shade, which uses different logic for generating its inheriting-as-shade value.
     */
    isBackgroundShade?: boolean;
    /** Whether this slot has been manually overridden (else, it was automatically generated based on inheritance). */
    isCustomized?: boolean;
    /**
     * A collection of rules that inherit from this one. It is the responsibility of the inheriting rule to add
     * itself to its parent's dependentRules collection.
     */
    dependentRules: IThemeSlotRule[];
}

/**
 * {@docCategory Tooltip}
 */
export declare interface ITooltip {
}

/**
 * {@docCategory Tooltip}
 */
export declare interface ITooltipHost {
    /**
     * Shows the tooltip.
     */
    show: () => void;
    /**
     * Dismisses the tooltip.
     */
    dismiss: () => void;
}

/**
 * TooltipHost props. Note that native props (such as `id`, `className`, and `aria-` props) are
 * passed through to the Tooltip itself, rather than being used on the host element.
 * {@docCategory Tooltip}
 */
export declare interface ITooltipHostProps extends React.HTMLAttributes<HTMLDivElement | TooltipHostBase> {
    /**
     * Optional callback to access the ITooltipHost interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ITooltipHost>;
    /**
     * Additional properties to pass through for Callout.
     */
    calloutProps?: ICalloutProps;
    /**
     * Number of milliseconds to delay closing the tooltip, so that the user has time to hover over
     * the tooltip and interact with it. Hovering over the tooltip will count as hovering over the
     * host, so that the tooltip will stay open if the user is actively interacting with it.
     */
    closeDelay?: number;
    /**
     * Content to display in the Tooltip.
     */
    content?: string | JSX.Element | JSX.Element[];
    /**
     * Length of delay before showing the tooltip on hover.
     * @defaultvalue TooltipDelay.medium
     */
    delay?: TooltipDelay;
    /**
     * How the tooltip should be anchored to its `targetElement`.
     * @defaultvalue DirectionalHint.topCenter
     */
    directionalHint?: DirectionalHint;
    /**
     * How the element should be positioned in RTL layouts.
     * If not specified, a mirror of `directionalHint` will be used.
     */
    directionalHintForRTL?: DirectionalHint;
    /**
     * Class name to apply to tooltip host.
     */
    hostClassName?: string;
    /**
     * Class name to apply to the *tooltip itself*, not the host.
     * To apply a class to the host, use `hostClassName` or `styles.root`.
     */
    className?: string;
    /**
     * If this is unset (the default), the tooltip is always shown even if there's no overflow.
     *
     * If set, only show the tooltip if the specified element (`Self` or `Parent`) has overflow.
     * When set to `Parent`, the parent element is also used as the tooltip's target element.
     *
     * Note that even with `Self` mode, the TooltipHost *does not* check whether any children have overflow.
     */
    overflowMode?: TooltipOverflowMode;
    /**
     * Whether or not to mark the TooltipHost root element as described by the tooltip.
     * If not specified, the caller should pass an `id` to the TooltipHost (to be passed through to
     * the Tooltip) and mark the appropriate element as `aria-describedby` the `id`.
     * @defaultvalue true
     */
    setAriaDescribedBy?: boolean;
    /**
     * Additional properties to pass through for Tooltip.
     */
    tooltipProps?: ITooltipProps;
    /**
     * Optional ID to pass through to the tooltip (not used on the host itself).
     * Auto-generated if not provided.
     */
    id?: string;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<ITooltipHostStyleProps, ITooltipHostStyles>;
    /**
     * Theme provided by higher-order component.
     */
    theme?: ITheme;
    /**
     * Notifies when tooltip becomes visible or hidden, whatever the trigger was.
     */
    onTooltipToggle?(isTooltipVisible: boolean): void;
}

export declare interface ITooltipHostState {
    isAriaPlaceholderRendered: boolean;
    isTooltipVisible: boolean;
}

/**
 * {@docCategory Tooltip}
 */
export declare interface ITooltipHostStyleProps {
    theme: ITheme;
    className?: string;
}

/**
 * {@docCategory Tooltip}
 */
export declare interface ITooltipHostStyles {
    /**
     * Style for the host wrapper element.
     */
    root: IStyle;
}

/**
 * {@docCategory Tooltip}
 */
export declare interface ITooltipProps extends React.HTMLAttributes<HTMLDivElement | TooltipBase> {
    /**
     * Optional callback to access the ITooltip interface. Use this instead of ref for accessing
     * the public methods and properties of the component.
     */
    componentRef?: IRefObject<ITooltip>;
    /**
     * Properties to pass through for Callout.
     * @defaultvalue `{ isBeakVisible: true, beakWidth: 16, gapSpace: 0, setInitialFocus: true, doNotLayer: false }`
     */
    calloutProps?: ICalloutProps;
    /**
     * Content to be passed to the tooltip
     */
    content?: string | JSX.Element | JSX.Element[];
    /**
     * Render function to populate tooltip content.
     */
    onRenderContent?: IRenderFunction<ITooltipProps>;
    /**
     * Length of delay. Set to `TooltipDelay.zero` if you do not want a delay.
     * @defaultvalue TooltipDelay.medium
     */
    delay?: TooltipDelay;
    /**
     * Max width of tooltip
     * @defaultvalue 364px
     */
    maxWidth?: string | null;
    /**
     * Element to anchor the Tooltip to.
     */
    targetElement?: HTMLElement;
    /**
     * How the tooltip should be anchored to its `targetElement`.
     * @defaultvalue DirectionalHint.topCenter
     */
    directionalHint?: DirectionalHint;
    /**
     * How the element should be positioned in RTL layouts.
     * If not specified, a mirror of `directionalHint` will be used instead
     */
    directionalHintForRTL?: DirectionalHint;
    /**
     * Theme provided by higher-order component.
     */
    theme?: ITheme;
    /**
     * Call to provide customized styling that will layer on top of the variant rules.
     */
    styles?: IStyleFunctionOrObject<ITooltipStyleProps, ITooltipStyles>;
}

/**
 * {@docCategory Tooltip}
 */
export declare interface ITooltipStyleProps {
    theme: ITheme;
    className?: string;
    /**
     * Delay before tooltip appears.
     * @deprecated Delay logic moved to TooltipHost vs relying on animation delay.
     */
    delay?: TooltipDelay;
    /**
     * Maximum width of tooltip.
     */
    maxWidth?: string;
    /**
     * The gap between the Callout and the target
     * @defaultvalue 0
     */
    gapSpace?: number;
    /**
     * The width of the Callout's beak
     * @defaultvalue 16
     */
    beakWidth?: number;
}

/**
 * {@docCategory Tooltip}
 */
export declare interface ITooltipStyles {
    /**
     * Style for the root element.
     */
    root: IStyle;
    /**
     * Style for the content element.
     */
    content: IStyle;
    /**
     * Style for the subtext element.
     */
    subText: IStyle;
}

export declare interface IUniqueKeytip {
    uniqueID: string;
    keytip: IKeytipProps;
}

/**
 * {@docCategory VerticalDivider}
 * @deprecated
 * Deprecated class names, used to be used to provider customizations, use IVerticalDividerStyles instead
 */
export declare interface IVerticalDividerClassNames {
    /**
     * Styling for the div that wraps the actual divider
     */
    wrapper: string;
    /**
     * Styling for the divider.
     */
    divider: string;
}

/**
 * {@docCategory VerticalDivider}
 * Props for the Vertical Divider
 */
export declare interface IVerticalDividerProps extends React.HTMLAttributes<HTMLElement>, React.RefAttributes<HTMLDivElement> {
    /**
     * @deprecated Use styles instead.
     * Optional function to generate the class names for the divider for custom styling
     */
    getClassNames?: (theme: ITheme) => IVerticalDividerClassNames;
    /**
     * The theme that should be used to render the vertical divider.
     */
    theme?: ITheme;
    /**
     * Optional override stylings that will get merged with the dividers styles.
     */
    styles?: IStyleFunctionOrObject<IVerticalDividerPropsStyles, IVerticalDividerStyles>;
    /**
     * className that will be placed on the divider wrapper div
     */
    className?: string;
}

/**
 * {@docCategory VerticalDivider}
 * Props that will get passed to the styling function to style the Vertical Divider
 */
export declare type IVerticalDividerPropsStyles = Pick<IVerticalDividerProps, 'theme' | 'getClassNames' | 'className'>;

/**
 * {@docCategory VerticalDivider}
 * Style interface that defines the different areas that styles can be customized on the Vertical Divider
 */
export declare interface IVerticalDividerStyles {
    /**
     * Styling for the div that wraps the actual divider
     */
    wrapper: IStyle;
    /**
     * Styling for the divider.
     */
    divider: IStyle;
}

/**
 * Window with typings for experimental features regarding Dual Screen devices.
 */
export declare interface IWindowWithSegments extends Window {
    getWindowSegments?: () => DOMRect[];
}

declare interface IWithResponsiveModeState {
    responsiveMode?: ResponsiveMode;
}

/**
 * {@docCategory SpinButton}
 */
export declare enum KeyboardSpinDirection {
    down = -1,
    notSpinning = 0,
    up = 1
}

/**
 * A callout corresponding to another Fabric component to describe a key sequence that will activate that component
 */
export declare class Keytip extends React.Component<IKeytipProps, {}> {
    render(): JSX.Element;
}

/**
 * A small element to help the target component correctly read out its aria-describedby for its Keytip
 * {@docCategory Keytips}
 */
export declare const KeytipData: React.FunctionComponent<IKeytipDataProps & IRenderComponent<{}>>;

export declare type KeytipDataOptions = IKeytipDataProps;

export declare namespace KeytipEvents {
    const KEYTIP_ADDED = "keytipAdded";
    const KEYTIP_REMOVED = "keytipRemoved";
    const KEYTIP_UPDATED = "keytipUpdated";
    const PERSISTED_KEYTIP_ADDED = "persistedKeytipAdded";
    const PERSISTED_KEYTIP_REMOVED = "persistedKeytipRemoved";
    const PERSISTED_KEYTIP_EXECUTE = "persistedKeytipExecute";
    const ENTER_KEYTIP_MODE = "enterKeytipMode";
    const EXIT_KEYTIP_MODE = "exitKeytipMode";
}

export declare const KeytipLayer: React.FunctionComponent<IKeytipLayerProps>;

/**
 * A layer that holds all keytip items
 * {@docCategory Keytips}
 */
export declare class KeytipLayerBase extends React.Component<IKeytipLayerProps, IKeytipLayerState> {
    static defaultProps: IKeytipLayerProps;
    private _events;
    private _async;
    private _keytipTree;
    private _keytipManager;
    private _classNames;
    private _currentSequence;
    private _newCurrentKeytipSequences?;
    private _delayedKeytipQueue;
    private _delayedQueueTimeout;
    private _keyHandled;
    constructor(props: IKeytipLayerProps, context: any);
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getCurrentSequence(): string;
    getKeytipTree(): KeytipTree;
    /**
     * Processes an IKeytipTransitionKey entered by the user
     *
     * @param transitionKey - IKeytipTransitionKey received by the layer to process
     */
    processTransitionInput(transitionKey: IKeytipTransitionKey, ev?: React.KeyboardEvent<HTMLElement>): void;
    /**
     * Processes inputs from the document listener and traverse the keytip tree
     *
     * @param key - Key pressed by the user
     */
    processInput(key: string, ev?: React.KeyboardEvent<HTMLElement>): void;
    /**
     * Show the given keytips and hide all others
     *
     * @param ids - Keytip IDs to show
     */
    showKeytips(ids: string[]): void;
    /**
     * Enters keytip mode for this layer
     */
    private _enterKeytipMode;
    private _buildTree;
    /**
     * Exits keytip mode for this layer
     */
    private _exitKeytipMode;
    /**
     * Sets the keytips state property
     *
     * @param keytipProps - Keytips to set in this layer
     */
    private _setKeytips;
    /**
     * Callback function to use for persisted keytips
     *
     * @param overflowButtonSequences - The overflow button sequence to execute
     * @param keytipSequences - The keytip that should become the 'currentKeytip' when it is registered
     */
    private _persistedKeytipExecute;
    private _getVisibleKeytips;
    private _onDismiss;
    private _onKeyDown;
    /**
     * Gets the ModifierKeyCodes based on the keyboard event
     *
     * @param ev - React.KeyboardEvent
     * @returns List of ModifierKeyCodes that were pressed
     */
    private _getModifierKey;
    private _onKeyPress;
    private _onKeytipAdded;
    private _onKeytipUpdated;
    private _onKeytipRemoved;
    private _onPersistedKeytipAdded;
    private _onPersistedKeytipRemoved;
    private _onPersistedKeytipExecute;
    /**
     * Trigger a keytip immediately and set it as the current keytip
     *
     * @param keytipProps - Keytip to trigger immediately
     */
    private _triggerKeytipImmediately;
    private _addKeytipToQueue;
    private _removeKeytipFromQueue;
    private _getKtpExecuteTarget;
    private _getKtpTarget;
    /**
     * Returns T/F if the keytipProps keySequences match the currentKeytip, and the currentKeytip is in an overflow well
     * This will make 'keytipProps' the new currentKeytip
     *
     * @param keytipProps - Keytip props to check
     * @returns - T/F if this keytip should become the currentKeytip
     */
    private _isCurrentKeytipAnAlias;
    /**
     * Sets if we are in keytip mode.
     * Note, this sets both the state for the layer as well as
     * the value that the manager will expose externally.
     * @param inKeytipMode - Boolean so set whether we are in keytip mode or not
     */
    private _setInKeytipMode;
    /**
     * Emits a warning if duplicate keytips are found for the children of the current keytip
     */
    private _warnIfDuplicateKeytips;
    /**
     * Returns duplicates among keytip IDs.
     * If the returned array is empty, no duplicates were found.
     *
     * @param keytipIds - Array of keytip IDs to find duplicates for
     * @returns - Array of duplicates that were found. Each duplicate will only be added once to this array.
     */
    private _getDuplicateIds;
}

/**
 * This class is responsible for handling registering, updating, and unregistering of keytips
 */
export declare class KeytipManager {
    private static _instance;
    keytips: {
        [key: string]: IUniqueKeytip;
    };
    persistedKeytips: {
        [key: string]: IUniqueKeytip;
    };
    sequenceMapping: {
        [key: string]: IKeytipProps;
    };
    inKeytipMode: boolean;
    shouldEnterKeytipMode: boolean;
    delayUpdatingKeytipChange: boolean;
    /**
     * Static function to get singleton KeytipManager instance
     *
     * @returns Singleton KeytipManager instance
     */
    static getInstance(): KeytipManager;
    /**
     * Initialization code to set set parameters to define
     * how the KeytipManager handles keytip data.
     *
     * @param delayUpdatingKeytipChange - T/F if we should delay notifiying keytip subscribers
     * of keytip changes
     */
    init(delayUpdatingKeytipChange: boolean): void;
    /**
     * Registers a keytip
     *
     * @param keytipProps - Keytip to register
     * @param persisted - T/F if this keytip should be persisted, default is false
     * @returns Unique ID for this keytip
     */
    register(keytipProps: IKeytipProps, persisted?: boolean): string;
    /**
     * Update a keytip
     *
     * @param keytipProps - Keytip to update
     * @param uniqueID - Unique ID of this keytip
     */
    update(keytipProps: IKeytipProps, uniqueID: string): void;
    /**
     * Unregisters a keytip
     *
     * @param keytipToRemove - IKeytipProps of the keytip to remove
     * @param uniqueID - Unique ID of this keytip
     * @param persisted - T/F if this keytip should be persisted, default is false
     */
    unregister(keytipToRemove: IKeytipProps, uniqueID: string, persisted?: boolean): void;
    /**
     * Manual call to enter keytip mode
     */
    enterKeytipMode(): void;
    /**
     * Manual call to exit keytip mode
     */
    exitKeytipMode(): void;
    /**
     * Gets all IKeytipProps from this.keytips
     *
     * @returns All keytips stored in the manager
     */
    getKeytips(): IKeytipProps[];
    /**
     * Adds the overflowSetSequence to the keytipProps if its parent keytip also has it
     *
     * @param keytipProps - Keytip props to add overflowSetSequence to if necessary
     * @returns - Modified keytip props, if needed to be modified
     */
    addParentOverflow(keytipProps: IKeytipProps): IKeytipProps;
    /**
     * Public function to bind for overflow items that have a submenu
     */
    menuExecute(overflowButtonSequences: string[], keytipSequences: string[]): void;
    /**
     * Creates an IUniqueKeytip object
     *
     * @param keytipProps - IKeytipProps
     * @param uniqueID - Unique ID, will default to the next unique ID if not passed
     * @returns IUniqueKeytip object
     */
    private _getUniqueKtp;
}

export declare type KeytipTransitionModifier = typeof KeyCodes.shift | typeof KeyCodes.ctrl | typeof KeyCodes.alt | typeof KeyCodes.leftWindow;

/**
 * This class is responsible for handling the parent/child relationships between keytips
 */
declare class KeytipTree {
    currentKeytip?: IKeytipTreeNode;
    root: IKeytipTreeNode;
    nodeMap: {
        [nodeId: string]: IKeytipTreeNode;
    };
    /**
     * KeytipTree constructor
     */
    constructor();
    /**
     * Add a keytip node to this KeytipTree
     *
     * @param keytipProps - Keytip to add to the Tree
     * @param uniqueID - Unique ID for this keytip
     * @param persisted - T/F if this keytip should be marked as persisted
     */
    addNode(keytipProps: IKeytipProps, uniqueID: string, persisted?: boolean): void;
    /**
     * Updates a node in the tree
     *
     * @param keytipProps - Keytip props to update
     * @param uniqueID - Unique ID for this keytip
     */
    updateNode(keytipProps: IKeytipProps, uniqueID: string): void;
    /**
     * Removes a node from the KeytipTree
     *
     * @param sequence - full string of the node to remove
     */
    removeNode(keytipProps: IKeytipProps, uniqueID: string): void;
    /**
     * Searches the currentKeytip's children to exactly match a sequence. Will not match disabled nodes but
     * will match persisted nodes
     *
     * @param keySequence - string to match
     * @param currentKeytip - The keytip whose children will try to match
     * @returns The node that exactly matched the keySequence, or undefined if none matched
     */
    getExactMatchedNode(keySequence: string, currentKeytip: IKeytipTreeNode): IKeytipTreeNode | undefined;
    /**
     * Searches the currentKeytip's children to find nodes that start with the given sequence. Will not match
     * disabled nodes but will match persisted nodes
     *
     * @param keySequence - string to partially match
     * @param currentKeytip - The keytip whose children will try to partially match
     * @returns List of tree nodes that partially match the given sequence
     */
    getPartiallyMatchedNodes(keySequence: string, currentKeytip: IKeytipTreeNode): IKeytipTreeNode[];
    /**
     * Get the non-persisted children of the give node
     * If no node is given, will use the 'currentKeytip'
     *
     * @param node - Node to get the children for
     * @returns List of node IDs that are the children of the node
     */
    getChildren(node?: IKeytipTreeNode): string[];
    /**
     * Gets all nodes from their IDs
     *
     * @param ids - List of keytip IDs
     * @returns Array of nodes that match the given IDs, can be empty
     */
    getNodes(ids: string[]): IKeytipTreeNode[];
    /**
     * Gets a single node from its ID
     *
     * @param id - ID of the node to get
     * @returns Node with the given ID, if found
     */
    getNode(id: string): IKeytipTreeNode | undefined;
    /**
     * Tests if the currentKeytip in this.keytipTree is the parent of 'keytipProps'
     *
     * @param keytipProps - Keytip to test the parent for
     * @returns T/F if the currentKeytip is this keytipProps' parent
     */
    isCurrentKeytipParent(keytipProps: IKeytipProps): boolean;
    private _getParentID;
    private _getFullSequence;
    private _getNodeSequence;
    private _createNode;
}

export declare const KTP_ARIA_SEPARATOR = ", ";

export declare const KTP_FULL_PREFIX: string;

export declare const KTP_LAYER_ID = "ktp-layer-id";

export declare const KTP_PREFIX = "ktp";

export declare const KTP_SEPARATOR = "-";

/**
 * Constructs the data-ktp-execute-target attribute selector from a keytip ID.
 *
 * @param keytipId - ID of the Keytip.
 * @returns String selector to use to query for the keytip execute target.
 */
export declare function ktpTargetFromId(keytipId: string): string;

/**
 * Constructs the data-ktp-target attribute selector from a full key sequence.
 *
 * @param keySequences - Full string[] for a Keytip.
 * @returns String selector to use to query for the keytip target.
 */
export declare function ktpTargetFromSequences(keySequences: string[]): string;

export declare const Label: React.FunctionComponent<ILabelProps>;

export declare class LabelBase extends React.Component<ILabelProps, {}> {
    render(): JSX.Element;
}

export declare const Layer: React.FunctionComponent<ILayerProps>;

export declare const LayerBase: React.FunctionComponent<ILayerProps>;

export declare const LayerHost: React.FunctionComponent<ILayerHostProps>;

/**
 * The List renders virtualized pages of items. Each page's item count is determined by the getItemCountForPage callback
 * if provided by the caller, or 10 as default. Each page's height is determined by the getPageHeight callback if
 * provided by the caller, or by cached measurements if available, or by a running average, or a default fallback.
 *
 * The algorithm for rendering pages works like this:
 *
 * 1. Predict visible pages based on "current measure data" (page heights, surface position, visible window)
 * 2. If changes are necessary, apply changes (add/remove pages)
 * 3. For pages that are added, measure the page heights if we need to using getBoundingClientRect
 * 4. If measurements don't match predictions, update measure data and goto step 1 asynchronously
 *
 * Measuring too frequently can pull performance down significantly. To compensate, we cache measured values so that
 * we can avoid re-measuring during operations that should not alter heights, like scrolling.
 *
 * To optimize glass rendering performance, onShouldVirtualize can be set. When onShouldVirtualize return false,
 * List will run in fast mode (not virtualized) to render all items without any measurements to improve page load time.
 * And we start doing measurements and rendering in virtualized mode when items grows larger than this threshold.
 *
 * However, certain operations can make measure data stale. For example, resizing the list, or passing in new props,
 * or forcing an update change cause pages to shrink/grow. When these operations occur, we increment a measureVersion
 * number, which we associate with cached measurements and use to determine if a remeasure should occur.
 */
export declare class List<T = any> extends React.Component<IListProps<T>, IListState<T>> implements IList {
    static defaultProps: {
        startIndex: number;
        onRenderCell: (item: any, index: number, containsFocus: boolean) => JSX.Element;
        renderedWindowsAhead: number;
        renderedWindowsBehind: number;
    };
    private _root;
    private _surface;
    private _pageRefs;
    private _async;
    private _events;
    private _estimatedPageHeight;
    private _totalEstimates;
    private _cachedPageHeights;
    private _focusedIndex;
    private _scrollElement;
    private _hasCompletedFirstRender;
    private _surfaceRect;
    private _requiredRect;
    private _allowedRect;
    private _visibleRect;
    private _materializedRect;
    private _requiredWindowsAhead;
    private _requiredWindowsBehind;
    private _measureVersion;
    private _scrollHeight;
    private _scrollTop;
    private _pageCache;
    static getDerivedStateFromProps<T = any>(nextProps: IListProps<T>, previousState: IListState<T>): IListState<T>;
    constructor(props: IListProps<T>);
    get pageRefs(): Readonly<Record<string, unknown>>;
    /**
     * Scroll to the given index. By default will bring the page the specified item is on into the view. If a callback
     * to measure the height of an individual item is specified, will only scroll to bring the specific item into view.
     *
     * Note: with items of variable height and no passed in `getPageHeight` method, the list might jump after scrolling
     * when windows before/ahead are being rendered, and the estimated height is replaced using actual elements.
     *
     * @param index - Index of item to scroll to
     * @param measureItem - Optional callback to measure the height of an individual item
     * @param scrollToMode - Optional defines where in the window the item should be positioned to when scrolling
     */
    scrollToIndex(index: number, measureItem?: (itemIndex: number) => number, scrollToMode?: ScrollToMode): void;
    getStartItemIndexInView(measureItem?: (itemIndex: number) => number): number;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(newProps: IListProps<T>, newState: IListState<T>): boolean;
    forceUpdate(): void;
    /**
     * Get the current height the list and it's pages.
     */
    getTotalListHeight(): number;
    render(): JSX.Element | null;
    private _getDerivedStateFromProps;
    private _shouldVirtualize;
    /**
     * when props.items change or forceUpdate called, throw away cached pages
     */
    private _invalidatePageCache;
    private _renderPage;
    private _onRenderRoot;
    private _onRenderSurface;
    /** Generate the style object for the page. */
    private _getPageStyle;
    private _onRenderPage;
    /** Track the last item index focused so that we ensure we keep it rendered. */
    private _onFocus;
    /**
     * Called synchronously to reset the required render range to 0 on scrolling. After async scroll has executed,
     * we will call onAsyncIdle which will reset it back to it's correct value.
     */
    private _onScroll;
    private _resetRequiredWindows;
    /**
     * Debounced method to asynchronously update the visible region on a scroll event.
     */
    private _onAsyncScroll;
    /**
     * This is an async debounced method that will try and increment the windows we render. If we can increment
     * either, we increase the amount we render and re-evaluate.
     */
    private _onAsyncIdle;
    /**
     * Function to call when the list is done scrolling.
     * This function is debounced.
     */
    private _onScrollingDone;
    private _onAsyncResize;
    private _updatePages;
    /**
     * Notify consumers that the rendered pages have changed
     * @param oldPages - The old pages
     * @param newPages - The new pages
     * @param props - The props to use
     */
    private _notifyPageChanges;
    private _updatePageMeasurements;
    /**
     * Given a page, measure its dimensions, update cache.
     * @returns True if the height has changed.
     */
    private _measurePage;
    /** Called when a page has been added to the DOM. */
    private _onPageAdded;
    /** Called when a page has been removed from the DOM. */
    private _onPageRemoved;
    /** Build up the pages that should be rendered. */
    private _buildPages;
    private _getPageSpecification;
    /**
     * Get the pixel height of a give page. Will use the props getPageHeight first, and if not provided, fallback to
     * cached height, or estimated page height, or default page height.
     */
    private _getPageHeight;
    private _getItemCountForPage;
    private _createPage;
    private _getRenderCount;
    /** Calculate the visible rect within the list where top: 0 and left: 0 is the top/left of the list. */
    private _updateRenderRects;
}

export declare const ListPeoplePicker: React.FunctionComponent<IPeoplePickerProps>;

/**
 * MemberList layout. The selected people show up below the search box.
 * {@docCategory PeoplePicker}
 */
export declare class ListPeoplePickerBase extends MemberListPeoplePicker {
    /** Default props for ListPeoplePicker. */
    static defaultProps: {
        onRenderItem: (props: IPeoplePickerItemSelectedProps) => JSX.Element;
        onRenderSuggestionsItem: (personaProps: IPersonaProps, suggestionsProps?: IBasePickerSuggestionsProps<any> | undefined) => JSX.Element;
        createGenericItem: typeof createGenericItem;
    };
}

export declare const MarqueeSelection: React.FunctionComponent<IMarqueeSelectionProps>;

export declare const MaskedTextField: React.FunctionComponent<IMaskedTextFieldProps>;

export declare const MAX_COLOR_ALPHA = 100;

export declare const MAX_COLOR_HUE = 359;

export declare const MAX_COLOR_RGB = 255;

/** @deprecated Use MAX_COLOR_RGB (255) or MAX_COLOR_ALPHA (100) */
export declare const MAX_COLOR_RGBA = 255;

export declare const MAX_COLOR_SATURATION = 100;

export declare const MAX_COLOR_VALUE = 100;

/** Maximum length for a hexadecimal color string (not including the #) */
export declare const MAX_HEX_LENGTH = 6;

/** Maximum length for a string of an RGBA color component */
export declare const MAX_RGBA_LENGTH = 3;

export declare const MeasuredContext: React.Context<{
    isMeasured: boolean;
}>;

/**
 * {@docCategory PeoplePicker}
 */
export declare class MemberListPeoplePicker extends BasePickerListBelow<IPersonaProps, IPeoplePickerProps> {
}

/**
 * Merges an overflow sequence with a key sequence.
 *
 * @param keySequences - Full sequence for one keytip.
 * @param overflowKeySequences - Full overflow keytip sequence.
 * @returns Sequence that will be used by the keytip when in the overflow.
 */
export declare function mergeOverflows(keySequences: string[], overflowKeySequences: string[]): string[];

export declare const MessageBar: React.FunctionComponent<IMessageBarProps>;

export declare const MessageBarBase: React.FunctionComponent<IMessageBarProps>;

/**
 * {@docCategory MessageBar}
 */
export declare enum MessageBarType {
    /** Info styled MessageBar */
    info = 0,
    /** Error styled MessageBar */
    error = 1,
    /** Blocked styled MessageBar */
    blocked = 2,
    /** SevereWarning styled MessageBar */
    severeWarning = 3,
    /** Success styled MessageBar */
    success = 4,
    /** Warning styled MessageBar */
    warning = 5
}

/** Minimum length for a hexadecimal color string (not including the #) */
export declare const MIN_HEX_LENGTH = 3;

/** Minimum length for a string of an RGBA color component */
export declare const MIN_RGBA_LENGTH = 1;

export declare const Modal: React.FunctionComponent<IModalProps>;

export declare const ModalBase: React.FunctionComponent<IModalProps>;

export declare const Nav: React.FunctionComponent<INavProps>;

export declare class NavBase extends React.Component<INavProps, INavState> implements INav {
    static defaultProps: INavProps;
    private _focusZone;
    constructor(props: INavProps);
    render(): JSX.Element | null;
    get selectedKey(): string | undefined;
    /**
     * Sets focus to the first tabbable item in the zone.
     * @param forceIntoFirstElement - If true, focus will be forced into the first element, even
     * if focus is already in the focus zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    focus(forceIntoFirstElement?: boolean): boolean;
    private _onRenderLink;
    private _renderNavLink;
    private _renderCompositeLink;
    private _renderLink;
    private _renderLinks;
    private _renderGroup;
    private _renderGroupHeader;
    private _onGroupHeaderClicked;
    private _onLinkExpandClicked;
    private _preventBounce;
    private _onNavAnchorLinkClicked;
    private _onNavButtonLinkClicked;
    private _isLinkSelected;
    private _isGroupExpanded;
    private _toggleCollapsed;
}

export declare const NormalPeoplePicker: React.FunctionComponent<IPeoplePickerProps>;

/**
 * Standard People Picker.
 * {@docCategory PeoplePicker}
 */
export declare class NormalPeoplePickerBase extends BasePeoplePicker {
    /** Default props for NormalPeoplePicker. */
    static defaultProps: {
        onRenderItem: (props: IPeoplePickerItemSelectedProps) => JSX.Element;
        onRenderSuggestionsItem: (personaProps: IPersonaProps, suggestionsProps?: IBasePickerSuggestionsProps<any> | undefined) => JSX.Element;
        createGenericItem: typeof createGenericItem;
    };
}

/**
 * {@docCategory HoverCard}
 */
export declare enum OpenCardMode {
    /**
     * Open card by hover
     */
    hover = 0,
    /**
     * Open card by hot key
     */
    hotKey = 1
}

/**
 * {@docCategory Facepile}
 */
export declare enum OverflowButtonType {
    /** No overflow */
    none = 0,
    /** +1 overflow icon */
    descriptive = 1,
    /** More overflow icon */
    more = 2,
    /** Chevron overflow icon */
    downArrow = 3
}

export declare const OverflowSet: React.FunctionComponent<IOverflowSetProps>;

export declare const OverflowSetBase: React.FunctionComponent<IOverflowSetProps>;

export declare const Overlay: React.FunctionComponent<IOverlayProps>;

export declare class OverlayBase extends React.Component<IOverlayProps, {}> {
    private _allowTouchBodyScroll;
    constructor(props: IOverlayProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}

/**
 * Panel description
 */
export declare const Panel: React.FunctionComponent<IPanelProps>;

export declare class PanelBase extends React.Component<IPanelProps, IPanelState> implements IPanel {
    static defaultProps: IPanelProps;
    private _async;
    private _events;
    private _panel;
    private _classNames;
    private _scrollableContent;
    private _animationCallback;
    private _hasCustomNavigation;
    private _headerTextId;
    private _allowTouchBodyScroll;
    static getDerivedStateFromProps(nextProps: Readonly<IPanelProps>, prevState: Readonly<IPanelState>): Partial<IPanelState> | null;
    constructor(props: IPanelProps);
    componentDidMount(): void;
    componentDidUpdate(previousProps: IPanelProps, previousState: IPanelState): void;
    componentWillUnmount(): void;
    render(): JSX.Element | null;
    open(): void;
    close(): void;
    dismiss: (ev?: KeyboardEvent | React.SyntheticEvent<HTMLElement, Event> | undefined) => void;
    /** isActive is true when panel is open or opening. */
    get isActive(): boolean;
    private _allowScrollOnPanel;
    private _shouldListenForOuterClick;
    private _onRenderNavigation;
    private _onRenderNavigationContent;
    private _onRenderHeader;
    private _onRenderBody;
    private _onRenderFooter;
    private _updateFooterPosition;
    private _dismissOnOuterClick;
    private _animateTo;
    private _clearExistingAnimationTimer;
    private _onPanelClick;
    private _onTransitionComplete;
}

/**
 * {@docCategory Panel}
 */
export declare enum PanelType {
    /**
     * Renders the Panel with a `fluid` (full screen) width.
     * Recommended for use on small screen breakpoints.
     * - Small (320-479): full screen width, 16px left/right padding
     * - Medium (480-639): full screen width, 16px left/right padding
     * - Large (640-1023): full screen width, 32px left/right padding
     * - XLarge (1024-1365): full screen width, 32px left/right padding
     * - XXLarge (1366-up): full screen width, 40px left/right padding
     */
    smallFluid = 0,
    /**
     * Renders the Panel in fixed-width `small` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): 340px width, 16px left/right padding
     * - Large (640-1023): 340px width, 32px left/right padding
     * - XLarge (1024-1365): 340px width, 32px left/right padding
     * - XXLarge (1366-up): 340px width, 40px left/right padding
     */
    smallFixedFar = 1,
    /**
     * Renders the Panel in fixed-width `small` size, anchored to the near side (left in LTR mode).
     * - Small (320-479): 272px width, 16px left/right padding
     * - Medium (480-639): 272px width, 16px left/right padding
     * - Large (640-1023): 272px width, 32px left/right padding
     * - XLarge (1024-1365): 272px width, 32px left/right padding
     * - XXLarge (1366-up): 272px width, 40px left/right padding
     */
    smallFixedNear = 2,
    /**
     * Renders the Panel in `medium` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): 592px width, 32px left/right padding
     * - XLarge (1024-1365): 644px width, 32px left/right padding
     * - XXLarge (1366-up): 644px width, 40px left/right padding
     */
    medium = 3,
    /**
     * Renders the Panel in `large` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639):  adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): adapts to `PanelType.medium` at this breakpoint
     * - XLarge (1024-1365): 48px fixed left margin, fluid width, 32px left/right padding
     * - XXLarge (1366-up): 428px fixed left margin, fluid width, 40px left/right padding
     */
    large = 4,
    /**
     * Renders the Panel in `large` size, anchored to the far side (right in LTR mode), with a fixed width at
     * XX-Large breakpoint.
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): adapts to `PanelType.medium` at this breakpoint
     * - XLarge (1024-1365): 48px fixed left margin, fluid width, 32px left/right padding
     * - XXLarge (1366-up): 940px width, 40px left/right padding
     */
    largeFixed = 5,
    /**
     * Renders the Panel in `extra large` size, anchored to the far side (right in LTR mode).
     * - Small (320-479): adapts to `PanelType.smallFluid` at this breakpoint
     * - Medium (480-639): adapts to `PanelType.smallFixedFar` at this breakpoint
     * - Large (640-1023): adapts to `PanelType.medium` at this breakpoint
     * - XLarge (1024-1365): adapts to `PanelType.large` at this breakpoint
     * - XXLarge (1366-1919): 176px fixed left margin, fluid width, 40px left/right padding
     * - XXXLarge (1920-up): 176px fixed left margin, fluid width, 40px left/right padding
     */
    extraLarge = 6,
    /**
     * Renders the Panel in `custom` size using `customWidth`, anchored to the far side (right in LTR mode).
     * - Has a fixed width provided by the `customWidth` prop
     * - When screen width reaches the `customWidth` value it will behave like a fluid width Panel
     * taking up 100% of the viewport width
     */
    custom = 7,
    /**
     * Renders the Panel in `custom` size using `customWidth`, anchored to the near side (left in LTR mode).
     * - Has a fixed width provided by the `customWidth` prop
     * - When screen width reaches the `customWidth` value it will behave like a fluid width Panel
     * taking up 100% of the viewport width
     */
    customNear = 8
}

declare enum PanelVisibilityState {
    closed = 0,
    animatingOpen = 1,
    open = 2,
    animatingClosed = 3
}

export declare const PeoplePickerItem: React.FunctionComponent<IPeoplePickerItemSelectedProps>;

export declare const PeoplePickerItemBase: (props: IPeoplePickerItemSelectedProps) => JSX.Element;

export declare const PeoplePickerItemSuggestion: React.FunctionComponent<IPeoplePickerItemSuggestionProps>;

export declare const PeoplePickerItemSuggestionBase: (props: IPeoplePickerItemSuggestionProps) => JSX.Element;

/**
 * Personas are used for rendering an individual's avatar, presence and details.
 * They are used within the PeoplePicker components.
 */
export declare const Persona: React.FunctionComponent<IPersonaProps>;

/**
 * Persona with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
 */
export declare const PersonaBase: React.FunctionComponent<IPersonaProps>;

/**
 * PersonaCoin is used to render an individual's avatar and presence.
 */
export declare const PersonaCoin: React.FunctionComponent<IPersonaCoinProps>;

/**
 * PersonaCoin with no default styles.
 * [Use the `getStyles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
 */
export declare const PersonaCoinBase: React.FunctionComponent<IPersonaCoinProps>;

/**
 * {@docCategory Persona}
 */
export declare enum PersonaInitialsColor {
    lightBlue = 0,
    blue = 1,
    darkBlue = 2,
    teal = 3,
    lightGreen = 4,
    green = 5,
    darkGreen = 6,
    lightPink = 7,
    pink = 8,
    magenta = 9,
    purple = 10,
    /**
     * Black can result in offensive persona coins with some initials combinations, so it can only be set with overrides.
     * @deprecated will be removed in a future major release.
     */
    black = 11,
    orange = 12,
    /**
     * Red often has a special meaning, so it is considered a reserved color and can only be set with overrides.
     * @deprecated will be removed in a future major release.
     */
    red = 13,
    darkRed = 14,
    /**
     * Transparent is not intended to be used with typical initials due to accessibility issues.
     * Its primary use is for overflow buttons, so it is considered a reserved color and can only be set with overrides.
     */
    transparent = 15,
    violet = 16,
    lightRed = 17,
    gold = 18,
    burgundy = 19,
    warmGray = 20,
    coolGray = 21,
    /**
     * Gray can result in offensive persona coins with some initials combinations, so it can only be set with overrides.
     */
    gray = 22,
    cyan = 23,
    rust = 24
}

/**
 * {@docCategory Persona}
 */
export declare enum PersonaPresence {
    none = 0,
    offline = 1,
    online = 2,
    away = 3,
    dnd = 4,
    blocked = 5,
    busy = 6
}

export declare namespace personaPresenceSize {
    const size6 = "6px";
    const size8 = "8px";
    const size12 = "12px";
    const size16 = "16px";
    const size20 = "20px";
    const size28 = "28px";
    const size32 = "32px";
    /**
     * @deprecated This is now unused
     */
    const border = "2px";
}

/**
 * {@docCategory Persona}
 */
export declare enum PersonaSize {
    /**
     * `tiny` size has been deprecated in favor of standardized numeric sizing. Use `size8` instead.
     * @deprecated Use `size8` instead.
     */
    tiny = 0,
    /**
     *
     * `extraExtraSmall` size has been deprecated in favor of standardized numeric sizing. Use `size24` instead.
     * @deprecated Use `size24` instead.
     */
    extraExtraSmall = 1,
    /**
     * `extraSmall` size has been deprecated in favor of standardized numeric sizing. Use `size32` instead.
     * @deprecated Use `size32` instead.
     */
    extraSmall = 2,
    /**
     * `small` size has been deprecated in favor of standardized numeric sizing. Use `size40` instead.
     * @deprecated Use `size40` instead.
     */
    small = 3,
    /**
     * `regular` size has been deprecated in favor of standardized numeric sizing. Use `size48` instead.
     * @deprecated Use `size48` instead.
     */
    regular = 4,
    /**
     * `large` size has been deprecated in favor of standardized numeric sizing. Use `size72` instead.
     * @deprecated Use `size72` instead.
     */
    large = 5,
    /**
     * `extraLarge` size has been deprecated in favor of standardized numeric sizing. Use `size100` instead.
     * @deprecated Use `size100` instead.
     */
    extraLarge = 6,
    /**
     * No `PersonaCoin` is rendered.
     */
    size8 = 17,
    /**
     * No `PersonaCoin` is rendered. Deprecated in favor of `size8` to align with design specifications.
     * @deprecated Use `size8` instead. Will be removed in a future major release.
     */
    size10 = 9,
    /**
     * Renders a 16px `PersonaCoin`. Deprecated due to not being in the design specification.
     * @deprecated Will be removed in a future major release.
     */
    size16 = 8,
    /**
     * Renders a 24px `PersonaCoin`.
     */
    size24 = 10,
    /**
     * Renders a 28px `PersonaCoin`. Deprecated due to not being in the design specification.
     * @deprecated Will be removed in a future major release.
     */
    size28 = 7,
    /**
     * Renders a 32px `PersonaCoin`.
     */
    size32 = 11,
    /**
     * Renders a 40px `PersonaCoin`.
     */
    size40 = 12,
    /**
     * Renders a 48px `PersonaCoin`.
     */
    size48 = 13,
    /**
     * Renders a 56px `PersonaCoin`.
     */
    size56 = 16,
    /**
     * Renders a 72px `PersonaCoin`.
     */
    size72 = 14,
    /**
     * Renders a 100px `PersonaCoin`.
     */
    size100 = 15,
    /**
     * Renders a 120px `PersonaCoin`.
     */
    size120 = 18
}

export declare namespace personaSize {
    const size8 = "20px";
    const size10 = "20px";
    const size16 = "16px";
    const size24 = "24px";
    const size28 = "28px";
    const size32 = "32px";
    const size40 = "40px";
    const size48 = "48px";
    const size56 = "56px";
    const size72 = "72px";
    const size100 = "100px";
    const size120 = "120px";
}

export declare const PlainCard: React.FunctionComponent<IPlainCardProps>;

export declare class PlainCardBase extends React.Component<IPlainCardProps, {}> {
    private _classNames;
    constructor(props: IPlainCardProps);
    render(): JSX.Element;
    private _onKeyDown;
}
export { Point }

/**
 * This adds accessibility to Dialog and Panel controls
 */
export declare const Popup: React.FunctionComponent<IPopupProps>;

export declare enum Position {
    top = 0,
    bottom = 1,
    start = 2,
    end = 3
}

export declare function positionCallout(props: IPositionProps, hostElement: HTMLElement, elementToPosition: HTMLElement, previousPositions?: ICalloutPositionedInfo): ICalloutPositionedInfo;

export declare function positionCard(props: IPositionProps, hostElement: HTMLElement, elementToPosition: HTMLElement, previousPositions?: ICalloutPositionedInfo): ICalloutPositionedInfo;

/**
 * Used to position an element relative to the given positioning props.
 * If positioning has been completed before, previousPositions can be passed to ensure that the positioning element
 * repositions based on its previous targets rather than starting with directionalhint.
 */
export declare function positionElement(props: IPositionProps, hostElement: HTMLElement, elementToPosition: HTMLElement, previousPositions?: IPositionedData): IPositionedData;

export declare const PositioningContainer: React.FunctionComponent<IPositioningContainerProps>;

export declare const presenceBoolean: (presence: PersonaPresence) => {
    isAvailable: boolean;
    isAway: boolean;
    isBlocked: boolean;
    isBusy: boolean;
    isDoNotDisturb: boolean;
    isOffline: boolean;
};

/**
 * ProgressIndicator description
 */
export declare const ProgressIndicator: React.FunctionComponent<IProgressIndicatorProps>;

/**
 * ProgressIndicator with no default styles.
 * [Use the `styles` API to add your own styles.](https://github.com/microsoft/fluentui/wiki/Styling)
 */
export declare class ProgressIndicatorBase extends React.Component<IProgressIndicatorProps, {}> {
    static defaultProps: {
        label: string;
        description: string;
        width: number;
    };
    render(): JSX.Element;
    private _onRenderProgress;
}

export declare const Rating: React.FunctionComponent<IRatingProps>;

export declare const RatingBase: React.FunctionComponent<IRatingProps>;

/**
 * {@docCategory Rating}
 */
export declare enum RatingSize {
    Small = 0,
    Large = 1
}

export declare enum RectangleEdge {
    top = 1,
    bottom = -1,
    left = 2,
    right = -2
}

export declare const ResizeGroup: React.FunctionComponent<IResizeGroupProps>;

export declare const ResizeGroupBase: React.FunctionComponent<IResizeGroupProps>;

/**
 * {@docCategory ResizeGroup}
 */
export declare enum ResizeGroupDirection {
    horizontal = 0,
    vertical = 1
}

export declare enum ResponsiveMode {
    small = 0,
    medium = 1,
    large = 2,
    xLarge = 3,
    xxLarge = 4,
    xxxLarge = 5,
    unknown = 999
}

/** Converts RGB components to a hex color string (without # prefix). */
export declare function rgb2hex(r: number, g: number, b: number): string;

/** Converts RGB components to an HSV color. */
export declare function rgb2hsv(r: number, g: number, b: number): IHSV;

/** Regular expression matching only numbers */
export declare const RGBA_REGEX: RegExp;

export declare const ScrollablePane: React.FunctionComponent<IScrollablePaneProps>;

export declare class ScrollablePaneBase extends React.Component<IScrollablePaneProps, IScrollablePaneState> implements IScrollablePane {
    private _root;
    private _stickyAboveRef;
    private _stickyBelowRef;
    private _contentContainer;
    private _subscribers;
    private _stickies;
    private _mutationObserver;
    private _notifyThrottled;
    private _async;
    private _events;
    constructor(props: IScrollablePaneProps);
    get root(): HTMLDivElement | null;
    get stickyAbove(): HTMLDivElement | null;
    get stickyBelow(): HTMLDivElement | null;
    get contentContainer(): HTMLDivElement | null;
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: IScrollablePaneProps, nextState: IScrollablePaneState): boolean;
    componentDidUpdate(prevProps: IScrollablePaneProps, prevState: IScrollablePaneState): void;
    render(): JSX.Element;
    setStickiesDistanceFromTop(): void;
    forceLayoutUpdate(): void;
    subscribe: (handler: Function) => void;
    unsubscribe: (handler: Function) => void;
    addSticky: (sticky: Sticky) => void;
    removeSticky: (sticky: Sticky) => void;
    sortSticky: (sticky: Sticky, sortAgain?: boolean | undefined) => void;
    updateStickyRefHeights: () => void;
    notifySubscribers: () => void;
    getScrollPosition: () => number;
    syncScrollSticky: (sticky: Sticky) => void;
    private _getScrollablePaneContext;
    private _checkStickyStatus;
    private _addToStickyContainer;
    private _removeStickyFromContainers;
    private _onWindowResize;
    private _getStickyContainerStyle;
    private _getScrollbarWidth;
    private _getScrollbarHeight;
    private _onScroll;
}

export declare const ScrollablePaneContext: React.Context<IScrollablePaneContext>;

/**
 * {@docCategory ScrollablePane}
 */
export declare const ScrollbarVisibility: {
    auto: "auto";
    always: "always";
};

/**
 * {@docCategory ScrollablePane}
 */
export declare type ScrollbarVisibility = typeof ScrollbarVisibility[keyof typeof ScrollbarVisibility];

/**
 * {@docCategory List}
 */
export declare const ScrollToMode: {
    /**
     * Does not make any consideration to where in the viewport the item should align to.
     */
    auto: 0;
    /**
     * Attempts to scroll the list so the top of the desired item is aligned with the top of the viewport.
     */
    top: 1;
    /**
     * Attempts to scroll the list so the bottom of the desired item is aligned with the bottom of the viewport.
     */
    bottom: 2;
    /**
     * Attempts to scroll the list so the desired item is in the exact center of the viewport.
     */
    center: 3;
};

/**
 * {@docCategory List}
 */
export declare type ScrollToMode = typeof ScrollToMode[keyof typeof ScrollToMode];

export declare const SearchBox: React.FunctionComponent<ISearchBoxProps>;

export declare const SearchBoxBase: React.FunctionComponent<ISearchBoxProps>;

export declare enum SelectableOptionMenuItemType {
    Normal = 0,
    Divider = 1,
    Header = 2
}

/**
 * Standard People Picker.
 */
export declare class SelectedPeopleList extends BasePeopleSelectedItemsList {
    static defaultProps: any;
    protected renderItems: () => JSX.Element[];
    private _renderItem;
    private _beginEditing;
    private _completeEditing;
    private _createMenuItems;
}
export { Selection }
export { SELECTION_CHANGE }
export { SelectionDirection }
export { SelectionMode }

/**
 * {@docCategory Selection}
 */
export declare class SelectionZone extends React.Component<ISelectionZoneProps, ISelectionZoneState> {
    static defaultProps: {
        isSelectedOnFocus: boolean;
        selectionMode: SelectionMode;
    };
    private _async;
    private _events;
    private _root;
    private _isCtrlPressed;
    private _isShiftPressed;
    private _isMetaPressed;
    private _isTabPressed;
    private _shouldHandleFocus;
    private _shouldHandleFocusTimeoutId;
    private _isTouch;
    private _isTouchTimeoutId;
    static getDerivedStateFromProps(nextProps: ISelectionZoneProps, prevState: ISelectionZoneState): ISelectionZoneState;
    constructor(props: ISelectionZoneProps);
    componentDidMount(): void;
    render(): JSX.Element;
    componentDidUpdate(previousProps: ISelectionZoneProps): void;
    componentWillUnmount(): void;
    /**
     * In some cases, the consuming scenario requires to set focus on a row without having SelectionZone
     * react to the event. Note that focus events in IE \<= 11 will occur asynchronously after .focus() has
     * been called on an element, so we need a flag to store the idea that we will bypass the "next"
     * focus event that occurs. This method does that.
     */
    ignoreNextFocus: () => void;
    private _onSelectionChange;
    private _onMouseDownCapture;
    /**
     * When we focus an item, for single/multi select scenarios, we should try to select it immediately
     * as long as the focus did not originate from a mouse down/touch event. For those cases, we handle them
     * specially.
     */
    private _onFocus;
    private _onMouseDown;
    private _onTouchStartCapture;
    private _onClick;
    private _onContextMenu;
    private _isSelectionDisabled;
    /**
     * In multi selection, if you double click within an item's root (but not within the invoke element or
     * input elements), we should execute the invoke handler.
     */
    private _onDoubleClick;
    private _onKeyDownCapture;
    private _onKeyDown;
    private _onToggleAllClick;
    private _onToggleClick;
    private _onInvokeClick;
    private _onItemSurfaceClick;
    private _onInvokeMouseDown;
    /**
     * To avoid high startup cost of traversing the DOM on component mount,
     * defer finding the scrollable parent until a click interaction.
     *
     * The styles will probably already calculated since we're running in a click handler,
     * so this is less likely to cause layout thrashing then doing it in mount.
     */
    private _findScrollParentAndTryClearOnEmptyClick;
    private _tryClearOnEmptyClick;
    private _clearAndSelectIndex;
    /**
     * We need to track the modifier key states so that when focus events occur, which do not contain
     * modifier states in the Event object, we know how to behave.
     */
    private _updateModifiers;
    private _findItemRoot;
    private _getItemIndex;
    private _shouldAutoSelect;
    private _hasAttribute;
    private _isInputElement;
    private _isNonHandledClick;
    private _handleNextFocus;
    private _setIsTouch;
    private _getSelectionMode;
}

export declare enum SemanticColorSlots {
    bodyBackground = 0,
    bodyText = 1,
    disabledBackground = 2,
    disabledText = 3
}

export declare const Separator: React.FunctionComponent<ISeparatorProps>;

export declare const SeparatorBase: React.FunctionComponent<ISeparatorProps>;

/**
 * Converts a whole set of KeySequences into one keytip ID, which will be the ID for the last keytip sequence specified
 * keySequences should not include the initial keytip 'start' sequence.
 *
 * @param keySequences - Full path of IKeySequences for one keytip.
 * @returns String to use for the keytip ID.
 */
export declare function sequencesToID(keySequences: string[]): string;

/** Shades of a given color, from softest to strongest. */
export declare enum Shade {
    Unshaded = 0,
    Shade1 = 1,
    Shade2 = 2,
    Shade3 = 3,
    Shade4 = 4,
    Shade5 = 5,
    Shade6 = 6,
    Shade7 = 7,
    Shade8 = 8
}

export declare const Shimmer: React.FunctionComponent<IShimmerProps>;

/**
 * {@docCategory Shimmer}
 */
export declare const ShimmerBase: React.FunctionComponent<IShimmerProps>;

export declare const ShimmerCircle: React.FunctionComponent<IShimmerCircleProps>;

export declare const ShimmerCircleBase: React.FunctionComponent<IShimmerCircleProps>;

/**
 * Describes the default heights for shimmer elements when omitted in implementation.
 * {@docCategory Shimmer}
 */
export declare enum ShimmerElementsDefaultHeights {
    /**
     * Default height of the line element when not provided by user: 16px
     */
    line = 16,
    /**
     * Default height of the gap element when not provided by user: 16px
     */
    gap = 16,
    /**
     * Default height of the circle element when not provided by user: 24px
     */
    circle = 24
}

export declare const ShimmerElementsGroup: React.FunctionComponent<IShimmerElementsGroupProps>;

/**
 * {@docCategory Shimmer}
 */
export declare const ShimmerElementsGroupBase: React.FunctionComponent<IShimmerElementsGroupProps>;

/**
 * Describes the possible types for shimmer elements used.
 * {@docCategory Shimmer}
 */
export declare enum ShimmerElementType {
    /**
     * Line element type
     */
    line = 1,
    /**
     * Circle element type
     */
    circle = 2,
    /**
     * Gap element type
     */
    gap = 3
}

export declare const ShimmerGap: React.FunctionComponent<IShimmerGapProps>;

/**
 * {@docCategory Shimmer}
 */
export declare const ShimmerGapBase: React.FunctionComponent<IShimmerGapProps>;

export declare const ShimmerLine: React.FunctionComponent<IShimmerLineProps>;

/**
 * {@docCategory Shimmer}
 */
export declare const ShimmerLineBase: React.FunctionComponent<IShimmerLineProps>;

export declare const sizeBoolean: (size: PersonaSize) => {
    isSize8: boolean;
    isSize10: boolean;
    isSize16: boolean;
    isSize24: boolean;
    isSize28: boolean;
    isSize32: boolean;
    isSize40: boolean;
    isSize48: boolean;
    isSize56: boolean;
    isSize72: boolean;
    isSize100: boolean;
    isSize120: boolean;
};

export declare const sizeToPixels: {
    [key: number]: number;
};

/**
 * The SpinButton control and related tabs pattern are used for navigating frequently accessed,
 * distinct content categories. SpinButtons allow for navigation between two or more content
 * views and relies on text headers to articulate the different sections of content.
 */
export declare const SpinButton: React.FunctionComponent<ISpinButtonProps>;

export declare const Spinner: React.FunctionComponent<ISpinnerProps>;

export declare class SpinnerBase extends React.Component<ISpinnerProps, any> {
    static defaultProps: ISpinnerProps;
    render(): JSX.Element;
}

/**
 * Possible locations of the label in regards to the spinner
 * @defaultvalue bottom
 * {@docCategory Spinner}
 */
export declare type SpinnerLabelPosition = 'top' | 'right' | 'bottom' | 'left';

/**
 * Possible variations of the spinner circle size.
 * {@docCategory Spinner}
 */
export declare enum SpinnerSize {
    /**
     * 12px Spinner diameter
     */
    xSmall = 0,
    /**
     * 16px Spinner diameter
     */
    small = 1,
    /**
     * 20px Spinner diameter
     */
    medium = 2,
    /**
     * 28px Spinner diameter
     */
    large = 3
}

/**
 * Deprecated at v2.0.0, use `SpinnerSize` instead.
 * @deprecated Use `SpinnerSize` instead.
 * {@docCategory Spinner}
 */
export declare enum SpinnerType {
    /**
     * Deprecated and will be removed at \>= 2.0.0. Use `SpinnerSize.medium` instead.
     * @deprecated Use `SpinnerSize.medium` instead.
     */
    normal = 0,
    /**
     * Deprecated and will be removed at \>= 2.0.0. Use `SpinnerSize.large` instead.
     * @deprecated Use `SpinnerSize.large` instead.
     */
    large = 1
}

export declare const Stack: React.FunctionComponent<IStackProps> & {
    Item: React.FunctionComponent<IStackItemProps>;
};

export declare const StackItem: React.FunctionComponent<IStackItemProps>;

export declare class Sticky extends React.Component<IStickyProps, IStickyState> {
    static defaultProps: IStickyProps;
    static contextType: React.Context<IScrollablePaneContext>;
    private _root;
    private _stickyContentTop;
    private _stickyContentBottom;
    private _nonStickyContent;
    private _placeHolder;
    private _activeElement;
    constructor(props: IStickyProps);
    get root(): HTMLDivElement | null;
    get placeholder(): HTMLDivElement | null;
    get stickyContentTop(): HTMLDivElement | null;
    get stickyContentBottom(): HTMLDivElement | null;
    get nonStickyContent(): HTMLDivElement | null;
    get canStickyTop(): boolean;
    get canStickyBottom(): boolean;
    syncScroll: (container: HTMLElement) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: IStickyProps, prevState: IStickyState): void;
    shouldComponentUpdate(nextProps: IStickyProps, nextState: IStickyState): boolean;
    render(): JSX.Element;
    addSticky(stickyContent: HTMLDivElement): void;
    resetSticky(): void;
    setDistanceFromTop(container: HTMLDivElement): void;
    private _getContext;
    private _getContentStyles;
    private _getStickyPlaceholderHeight;
    private _getNonStickyPlaceholderHeightAndWidth;
    private _onScrollEvent;
    private _getStickyDistanceFromTop;
    private _getStickyDistanceFromTopForFooter;
    private _getNonStickyDistanceFromTop;
    private _getBackground;
}

export declare enum StickyPositionType {
    Both = 0,
    Header = 1,
    Footer = 2
}

/**
 * Enum to help identify which suggestions action button is selected.
 * {@docCategory Pickers}
 */
export declare enum SuggestionActionType {
    /** None of the actions is selected. */
    none = 0,
    /** ForceResolve action is selected. */
    forceResolve = 1,
    /** SearchMore action is selected. */
    searchMore = 2
}

export declare enum SuggestionItemType {
    header = 0,
    suggestion = 1,
    footer = 2
}

/**
 * {@docCategory Pickers}
 */
export declare class Suggestions<T> extends React.Component<ISuggestionsProps<T>, ISuggestionsState> {
    protected _forceResolveButton: React.RefObject<IButton>;
    protected _searchForMoreButton: React.RefObject<IButton>;
    protected _selectedElement: React.RefObject<HTMLDivElement>;
    private activeSelectedElement;
    private _classNames;
    constructor(suggestionsProps: ISuggestionsProps<T>);
    componentDidMount(): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    /**
     * Returns true if the event was handled, false otherwise
     */
    tryHandleKeyDown: (keyCode: number, currentSuggestionIndex: number) => boolean;
    hasSuggestedAction(): boolean;
    hasSuggestedActionSelected(): boolean;
    executeSelectedAction(): void;
    focusAboveSuggestions(): void;
    focusBelowSuggestions(): void;
    focusSearchForMoreButton(): void;
    scrollSelected(): void;
    private _getAlertText;
    private _renderSuggestions;
    private _getMoreResults;
    private _forceResolve;
    private _shouldShowForceResolve;
    private _onClickTypedSuggestionsItem;
    private _refocusOnSuggestions;
    private _onRemoveTypedSuggestionsItem;
}

/**
 * Class when used with SuggestionsStore, renders a suggestions control with customizable headers and footers
 */
export declare class SuggestionsControl<T> extends React.Component<ISuggestionsControlProps<T>, ISuggestionsControlState<T>> {
    protected _forceResolveButton: IButton;
    protected _searchForMoreButton: IButton;
    protected _selectedElement: React.RefObject<HTMLDivElement>;
    protected _suggestions: React.RefObject<SuggestionsCore<T>>;
    private SuggestionsOfProperType;
    constructor(suggestionsProps: ISuggestionsControlProps<T>);
    componentDidMount(): void;
    componentDidUpdate(oldProps: ISuggestionsControlProps<T>): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    get currentSuggestion(): ISuggestionModel<T> | undefined;
    get currentSuggestionIndex(): number;
    get selectedElement(): HTMLDivElement | undefined;
    hasSuggestionSelected(): boolean;
    hasSelection(): boolean;
    executeSelectedAction(): void;
    removeSuggestion(index?: number): void;
    /**
     * Handles the key down, returns true, if the event was handled, false otherwise
     * @param keyCode - The keyCode to handle
     */
    handleKeyDown(keyCode: number): boolean;
    scrollSelected(): void;
    protected renderHeaderItems(): JSX.Element | null;
    protected renderFooterItems(): JSX.Element | null;
    protected _renderSuggestions(): JSX.Element;
    /**
     * Selects the next selectable item
     */
    protected selectNextItem(itemType: SuggestionItemType, originalItemType?: SuggestionItemType): void;
    /**
     * Selects the previous selectable item
     */
    protected selectPreviousItem(itemType: SuggestionItemType, originalItemType?: SuggestionItemType): void;
    /**
     * Resets the selected state and selects the first selectable item
     */
    protected resetSelectedItem(): void;
    /**
     * Selects the first item
     */
    protected selectFirstItem(): void;
    /**
     * Selects the last item
     */
    protected selectLastItem(): void;
    /**
     * Selects the next item in the suggestion item type group, given the current index
     * If none is able to be selected, returns false, otherwise returns true
     * @param itemType - The suggestion item type
     * @param currentIndex - The current index, default is -1
     */
    private _selectNextItemOfItemType;
    /**
     * Selects the previous item in the suggestion item type group, given the current index
     * If none is able to be selected, returns false, otherwise returns true
     * @param itemType - The suggestion item type
     * @param currentIndex - The current index. If none is provided, the default is the items length of specified type
     */
    private _selectPreviousItemOfItemType;
    private _getCurrentIndexForType;
    private _getNextItemSectionType;
    private _getPreviousItemSectionType;
}

/**
 * {@docCategory Pickers}
 */
export declare class SuggestionsController<T> {
    currentIndex: number;
    currentSuggestion: ISuggestionModel<T> | undefined;
    suggestions: ISuggestionModel<T>[];
    constructor();
    updateSuggestions(newSuggestions: T[], selectedIndex?: number): void;
    /**
     * Increments the suggestion index and gets the next suggestion in the list.
     */
    nextSuggestion(): boolean;
    /**
     * Decrements the suggestion index and gets the previous suggestion in the list.
     */
    previousSuggestion(): boolean;
    getSuggestions(): ISuggestionModel<T>[];
    getCurrentItem(): ISuggestionModel<T>;
    getSuggestionAtIndex(index: number): ISuggestionModel<T>;
    hasSelectedSuggestion(): boolean;
    removeSuggestion(index: number): void;
    createGenericSuggestion(itemToConvert: ISuggestionModel<T> | T): void;
    convertSuggestionsToSuggestionItems(suggestions: Array<ISuggestionModel<T> | T>): ISuggestionModel<T>[];
    deselectAllSuggestions(): void;
    setSelectedSuggestion(index: number): void;
    private _isSuggestionModel;
    private _ensureSuggestionModel;
}

/**
 * Class when used with SuggestionsStore, renders a basic suggestions control
 */
export declare class SuggestionsCore<T> extends React.Component<ISuggestionsCoreProps<T>, {}> {
    currentIndex: number;
    currentSuggestion: ISuggestionModel<T> | undefined;
    protected _selectedElement: React.RefObject<HTMLDivElement>;
    private SuggestionsItemOfProperType;
    constructor(suggestionsProps: ISuggestionsCoreProps<T>);
    /**
     * Increments the selected suggestion index
     */
    nextSuggestion(): boolean;
    /**
     * Decrements the selected suggestion index
     */
    previousSuggestion(): boolean;
    get selectedElement(): HTMLDivElement | undefined;
    getCurrentItem(): ISuggestionModel<T>;
    getSuggestionAtIndex(index: number): ISuggestionModel<T>;
    hasSuggestionSelected(): boolean;
    removeSuggestion(index: number): void;
    deselectAllSuggestions(): void;
    setSelectedSuggestion(index: number): void;
    componentDidUpdate(): void;
    render(): JSX.Element;
    scrollSelected(): void;
    private _onClickTypedSuggestionsItem;
    private _onRemoveTypedSuggestionsItem;
}

export declare class SuggestionsHeaderFooterItem extends React.Component<ISuggestionsHeaderFooterItemProps, {}> {
    constructor(props: ISuggestionsHeaderFooterItemProps);
    render(): JSX.Element;
}

/**
 * {@docCategory Pickers}
 */
export declare class SuggestionsItem<T> extends React.Component<ISuggestionItemProps<T>, {}> {
    constructor(props: ISuggestionItemProps<T>);
    render(): JSX.Element;
}

export declare class SuggestionsStore<T> {
    suggestions: ISuggestionModel<T>[];
    private getAriaLabel?;
    constructor(options?: SuggestionsStoreOptions<T>);
    updateSuggestions(newSuggestions: T[]): void;
    getSuggestions(): ISuggestionModel<T>[];
    getSuggestionAtIndex(index: number): ISuggestionModel<T>;
    removeSuggestion(index: number): void;
    convertSuggestionsToSuggestionItems(suggestions: Array<ISuggestionModel<T> | T>): ISuggestionModel<T>[];
    private _isSuggestionModel;
    private _ensureSuggestionModel;
}

export declare type SuggestionsStoreOptions<T> = {
    getAriaLabel?: (item: T) => string;
};

export declare const SwatchColorPicker: React.FunctionComponent<ISwatchColorPickerProps>;

export declare const SwatchColorPickerBase: React.FunctionComponent<ISwatchColorPickerProps>;

export declare const TagItem: React.FunctionComponent<ITagItemProps>;

/**
 * {@docCategory TagPicker}
 */
export declare const TagItemBase: (props: ITagItemProps) => JSX.Element;

export declare const TagItemSuggestion: React.FunctionComponent<ITagItemSuggestionProps>;

/**
 * {@docCategory TagPicker}
 */
export declare const TagItemSuggestionBase: (props: ITagItemSuggestionProps) => JSX.Element;

export declare const TagPicker: React.FunctionComponent<ITagPickerProps>;

/**
 * {@docCategory TagPicker}
 */
export declare class TagPickerBase extends BasePicker<ITag, ITagPickerProps> {
    static defaultProps: {
        onRenderItem: (props: ITagItemProps) => JSX.Element;
        onRenderSuggestionsItem: (props: ITag) => JSX.Element;
    };
    constructor(props: ITagPickerProps);
}
export { Target }

export declare const TeachingBubble: React.FunctionComponent<ITeachingBubbleProps>;

export declare const TeachingBubbleBase: React.FunctionComponent<ITeachingBubbleProps>;

export declare const TeachingBubbleContent: React.FunctionComponent<ITeachingBubbleProps>;

export declare const TeachingBubbleContentBase: React.FunctionComponent<ITeachingBubbleProps>;

export declare const Text: React.FunctionComponent<ITextProps>;

export declare const TextField: React.FunctionComponent<ITextFieldProps>;

export declare class TextFieldBase extends React.Component<ITextFieldProps, ITextFieldState, ITextFieldSnapshot> implements ITextField {
    static defaultProps: ITextFieldProps;
    /** Fallback ID if none is provided in props. Access proper value via `this._id`. */
    private _fallbackId;
    private _descriptionId;
    private _labelId;
    private _delayedValidate;
    private _lastValidation;
    private _latestValidateValue;
    private _hasWarnedNullValue;
    private _textElement;
    private _classNames;
    private _async;
    /** Most recent value from a change or input event, to help avoid processing events twice */
    private _lastChangeValue;
    constructor(props: ITextFieldProps);
    /**
     * Gets the current value of the text field.
     */
    get value(): string | undefined;
    componentDidMount(): void;
    componentWillUnmount(): void;
    getSnapshotBeforeUpdate(prevProps: ITextFieldProps, prevState: ITextFieldState): ITextFieldSnapshot | null;
    componentDidUpdate(prevProps: ITextFieldProps, prevState: ITextFieldState, snapshot: ITextFieldSnapshot): void;
    render(): JSX.Element;
    /**
     * Sets focus on the text field
     */
    focus(): void;
    /**
     * Blurs the text field.
     */
    blur(): void;
    /**
     * Selects the text field
     */
    select(): void;
    /**
     * Sets the selection start of the text field to a specified value
     */
    setSelectionStart(value: number): void;
    /**
     * Sets the selection end of the text field to a specified value
     */
    setSelectionEnd(value: number): void;
    /**
     * Gets the selection start of the text field
     */
    get selectionStart(): number | null;
    /**
     * Gets the selection end of the text field
     */
    get selectionEnd(): number | null;
    /**
     * Sets the start and end positions of a selection in a text field.
     * @param start - Index of the start of the selection.
     * @param end - Index of the end of the selection.
     */
    setSelectionRange(start: number, end: number): void;
    private _warnControlledUsage;
    /** Returns `props.id` if available, or a fallback if not. */
    private get _id();
    private get _isControlled();
    private _onFocus;
    private _onBlur;
    private _onRenderLabel;
    private _onRenderDescription;
    private _onRenderPrefix;
    private _onRenderSuffix;
    /**
     * Current error message from either `props.errorMessage` or the result of `props.onGetErrorMessage`.
     *
     * - If there is no validation error or we have not validated the input value, errorMessage is an empty string.
     * - If we have done the validation and there is validation error, errorMessage is the validation error message.
     */
    private get _errorMessage();
    /**
     * Renders error message based on the type of the message.
     *
     * - If error message is string, it will render using the built in styles.
     * - If error message is an element, user has full control over how it's rendered.
     */
    private _renderErrorMessage;
    /**
     * If a custom description render function is supplied then treat description as always available.
     * Otherwise defer to the presence of description or error message text.
     */
    private get _isDescriptionAvailable();
    private _renderTextArea;
    private _renderInput;
    private _onRevealButtonClick;
    private _onInputChange;
    private _validate;
    private _notifyAfterValidate;
    private _adjustInputHeight;
}

export declare const TextStyles: ITextComponent['styles'];

export declare const TextView: ITextComponent['view'];

export declare class ThemeGenerator {
    /**
     * Sets an IThemeSlotRule to the given color and cascades it to the rest of the theme, updating other IThemeSlotRules
     * in the theme that inherit from that color.
     * @param isInverted - whether it's a dark theme or not, which affects the algorithm used to generate shades
     * @param isCustomization - should be true only if it's a user action, and indicates overwriting the slot's
     * inheritance (if any)
     * @param overwriteCustomColor - A slot could have a generated color based on its inheritance rules (isCustomized
     * is false), or a custom color based on user input (isCustomized is true). This bool tells us whether to override
     * existing customized colors.
     */
    static setSlot(rule: IThemeSlotRule, color: string | IColor, isInverted?: boolean, isCustomization?: boolean, overwriteCustomColor?: boolean): void;
    /**
     * Sets the color of each slot based on its rule. Slots that don't inherit must have a color already.
     * If this completes without error, then the theme is ready to use. (All slots will have a color.)
     * setSlot() can be called before this, but this must be called before getThemeAs*().
     * Does not override colors of rules where isCustomized is true (i.e. doesn't override existing customizations).
     */
    static insureSlots(slotRules: IThemeRules, isInverted: boolean): void;
    /**
     * Gets the JSON-formatted blob that describes the theme, usable with the REST request endpoints:
     * ```
     * { [theme slot name as string] : [color as string],
     *  "tokenName": "#f00f00",
     *  "tokenName2": "#ba2ba2",
     *   ... }
     * ```
     */
    static getThemeAsJson(slotRules: IThemeRules): any;
    /**
     * Gets code-formatted load theme blob that can be copy and pasted.
     * Only used for the old theme designer, where loadTheme usage is acceptable,
     * unlike in the new theme designer.
     */
    static getThemeAsCode(slotRules: IThemeRules): any;
    /**
     * Gets code-formatted load theme blob, specifically for the new theme designer,
     * aka.ms/themedesigner. Shouldn't use loadTheme like the old theme designer since it's deprecated.
     * We want to use the theme object from createTheme and use the Customizations.applySettings API instead.
     */
    static getThemeAsCodeWithCreateTheme(slotRules: IThemeRules): any;
    /**
     * Gets the theme as a list of SASS variables that can be used in code
     * ```
     * $tokenName: "[theme:tokenName, default:#f00f00]";
     * $tokenName2: "[theme:tokenName2, default:#ba2ba2]";
     * ...
     * ```
     */
    static getThemeAsSass(slotRules: IThemeRules): any;
    /**
     * Gets the theme formatted for PowerShell scripts
     * ```
     * @{
     * "tokenName" = "#f00f00";
     * "tokenName2" = "#ba2ba2";
     * ...
     * }
     * ```
     */
    static getThemeForPowerShell(slotRules: IThemeRules): any;
    /**
     * Sets the given slot's color to the appropriate color, shading it if necessary.
     * Then, iterates through all other rules (that are this rule's dependents) to update them accordingly.
     * @param isCustomization - If true, it's a user-provided color, which should be to that raw color.
     * If false, the rule it's inheriting from changed, so updated using asShade.
     */
    private static _setSlot;
    /**
     * Makes the rest of the code that's used for the load theme blob in the exported codepens of
     * both the older sharepoint-specific theme designer and the new theme designer. Takes in
     * theme rules and converts them to format fitting a list of palette colors and their values.
     * Resulting output looks like:
     * ```
     * const _theme = createTheme({
     *  palette: {
     *    themePrimary: '#0078d4',
     *    themeLighterAlt: '#f3f9fd',
     *    ...
     *  }});
     * ```
     * The first line is loadTheme instead of createTheme for the old sharepoint theme designer.
     */
    private static _makeRemainingCode;
}

export declare function themeRulesStandardCreator(): IThemeRules;

export declare const Tooltip: React.FunctionComponent<ITooltipProps>;

export declare class TooltipBase extends React.Component<ITooltipProps, any> {
    static defaultProps: Partial<ITooltipProps>;
    private _classNames;
    render(): JSX.Element;
    private _onRenderContent;
}

/**
 * {@docCategory Tooltip}
 */
export declare enum TooltipDelay {
    zero = 0,
    /** 300 ms delay before showng the tooltip */
    medium = 1,
    /** 500 ms delay before showing the tooltip */
    long = 2
}

export declare const TooltipHost: React.FunctionComponent<ITooltipHostProps>;

export declare class TooltipHostBase extends React.Component<ITooltipHostProps, ITooltipHostState> implements ITooltipHost {
    static defaultProps: {
        delay: TooltipDelay;
    };
    private static _currentVisibleTooltip;
    private _tooltipHost;
    private _classNames;
    private _async;
    private _dismissTimerId;
    private _openTimerId;
    private _defaultTooltipId;
    constructor(props: ITooltipHostProps);
    render(): JSX.Element;
    componentWillUnmount(): void;
    show: () => void;
    dismiss: () => void;
    private _getTargetElement;
    private _onTooltipMouseEnter;
    private _onTooltipMouseLeave;
    private _onTooltipKeyDown;
    private _clearDismissTimer;
    private _clearOpenTimer;
    private _hideTooltip;
    private _toggleTooltip;
    private _getDelayTime;
}

/**
 * {@docCategory Tooltip}
 */
export declare enum TooltipOverflowMode {
    /** Only show tooltip if parent DOM element is overflowing */
    Parent = 0,
    /**
     * Only show tooltip if tooltip host's content is overflowing.
     * Note that this does not check the children for overflow, only the TooltipHost root.
     */
    Self = 1
}

/**
 * Tests for equality between two IKeytipTransitionKeys.
 *
 * @param key1 - First IKeytipTransitionKey.
 * @param key2 - Second IKeytipTransitionKey.
 * @returns T/F if the transition keys are equal.
 */
export declare function transitionKeysAreEqual(key1: IKeytipTransitionKey, key2: IKeytipTransitionKey): boolean;

/**
 * Tests if 'key' is present in 'keys'.
 *
 * @param keys - Array of IKeytipTransitionKey.
 * @param key - IKeytipTransitionKey to find in 'keys'.
 * @returns T/F if 'keys' contains 'key'.
 */
export declare function transitionKeysContain(keys: IKeytipTransitionKey[], key: IKeytipTransitionKey): boolean;

/**
 * Gets a color with the given alpha value and the same other components as `color`.
 * Does not modify the original color.
 */
export declare function updateA(color: IColor, a: number): IColor;

/**
 * Gets a color with the same saturation and value as `color` and the other components updated
 * to match the given hue.
 *
 * Does not modify the original `color` and does not supply a default alpha value.
 */
export declare function updateH(color: IColor, h: number): IColor;

/**
 * Gets a color with a single RGBA component updated to a new value.
 * Does not modify the original `color`. Alpha defaults to 100 if not set.
 */
export declare function updateRGB(color: IColor, component: keyof IRGB, value: number): IColor;

/**
 * Gets a color with the same hue as `color` and other components updated to match the given
 * saturation and value.
 *
 * Does not modify the original `color` and does not supply a default alpha value.
 */
export declare function updateSV(color: IColor, s: number, v: number): IColor;

/**
 * Gets a color with the given transparency value and the same other components as `color`.
 * Does not modify the original color.
 */
export declare function updateT(color: IColor, t: number): IColor;

export declare function useHeightOffset({ finalHeight }: IPositioningContainerProps, contentHost: React.RefObject<HTMLDivElement | null>): number;

/**
 * Hook that creates a ref which is used for passing to Keytip target element.
 * The ref will handle setting the attributes needed for Keytip to work.
 */
export declare function useKeytipRef<TElement extends HTMLElement = HTMLElement>(options: KeytipDataOptions): React.Ref<TElement>;

/**
 * Validation state of the user's input.
 * {@docCategory Pickers}
 */
export declare enum ValidationState {
    /** User input is valid. */
    valid = 0,
    /** User input could be valid or invalid, its state is not known yet. */
    warning = 1,
    /** User input is invalid. */
    invalid = 2
}

export declare const VerticalDivider: React.FunctionComponent<IVerticalDividerProps>;

export * from "@fluentui/font-icons-mdl2";
export * from "@fluentui/react-focus";
export * from "@fluentui/react-theme-provider";
export * from "@fluentui/react-window-provider";
export * from "@fluentui/style-utilities";
export * from "@fluentui/theme";
export * from "@fluentui/utilities";

export { }
