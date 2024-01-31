export interface VideoInfo {
    page: string;
    player_response: PlayerResponse;
    response: Response;
    html5player: string;
    formats: Format2[];
    related_videos: any[];
    videoDetails: VideoDetails3;
    full: boolean;
}

export interface PlayerResponse {
    responseContext: ResponseContext;
    playabilityStatus: PlayabilityStatus;
    streamingData: StreamingData;
    playerAds: PlayerAd[];
    playbackTracking: PlaybackTracking;
    videoDetails: VideoDetails;
    annotations: Annotation[];
    playerConfig: PlayerConfig;
    storyboards: Storyboards;
    microformat: Microformat;
    cards: Cards;
    trackingParams: string;
    attestation: Attestation;
    messages: Message2[];
    adPlacements: AdPlacement[];
    adSlots: AdSlot[];
    adBreakHeartbeatParams: string;
    frameworkUpdates: FrameworkUpdates;
}

export interface ResponseContext {
    serviceTrackingParams: ServiceTrackingParam[];
    maxAgeSeconds: number;
    mainAppWebResponseContext: MainAppWebResponseContext;
    webResponseContextExtensionData: WebResponseContextExtensionData;
}

export interface ServiceTrackingParam {
    service: string;
    params: Param[];
}

export interface Param {
    key: string;
    value: string;
}

export interface MainAppWebResponseContext {
    loggedOut: boolean;
    trackingParam: string;
}

export interface WebResponseContextExtensionData {
    hasDecorated: boolean;
}

export interface PlayabilityStatus {
    status: string;
    playableInEmbed: boolean;
    miniplayer: Miniplayer;
    contextParams: string;
}

export interface Miniplayer {
    miniplayerRenderer: MiniplayerRenderer;
}

export interface MiniplayerRenderer {
    playbackMode: string;
}

export interface StreamingData {
    expiresInSeconds: string;
    formats: Format[];
    adaptiveFormats: AdaptiveFormat[];
}

export interface Format {
    itag: number;
    mimeType: string;
    bitrate: number;
    width: number;
    height: number;
    lastModified: string;
    quality: string;
    fps: number;
    qualityLabel: string;
    projectionType: string;
    audioQuality: string;
    approxDurationMs: string;
    audioSampleRate: string;
    audioChannels: number;
    s: string;
    sp: string;
    url: string;
}

export interface AdaptiveFormat {
    itag: number;
    mimeType: string;
    bitrate: number;
    width?: number;
    height?: number;
    initRange: InitRange;
    indexRange: IndexRange;
    lastModified: string;
    contentLength: string;
    quality: string;
    fps?: number;
    qualityLabel?: string;
    projectionType: string;
    averageBitrate: number;
    approxDurationMs: string;
    s: string;
    sp: string;
    url: string;
    colorInfo?: ColorInfo;
    highReplication?: boolean;
    audioQuality?: string;
    audioSampleRate?: string;
    audioChannels?: number;
    loudnessDb?: number;
}

export interface InitRange {
    start: string;
    end: string;
}

export interface IndexRange {
    start: string;
    end: string;
}

export interface ColorInfo {
    primaries: string;
    transferCharacteristics: string;
    matrixCoefficients: string;
}

export interface PlayerAd {
    playerLegacyDesktopWatchAdsRenderer: PlayerLegacyDesktopWatchAdsRenderer;
}

export interface PlayerLegacyDesktopWatchAdsRenderer {
    playerAdParams: PlayerAdParams;
    gutParams: GutParams;
    showCompanion: boolean;
    showInstream: boolean;
    useGut: boolean;
}

export interface PlayerAdParams {
    showContentThumbnail: boolean;
    enabledEngageTypes: string;
}

export interface GutParams {
    tag: string;
}

export interface PlaybackTracking {
    videostatsPlaybackUrl: VideostatsPlaybackUrl;
    videostatsDelayplayUrl: VideostatsDelayplayUrl;
    videostatsWatchtimeUrl: VideostatsWatchtimeUrl;
    ptrackingUrl: PtrackingUrl;
    qoeUrl: QoeUrl;
    atrUrl: AtrUrl;
    videostatsScheduledFlushWalltimeSeconds: number[];
    videostatsDefaultFlushIntervalSeconds: number;
}

export interface VideostatsPlaybackUrl {
    baseUrl: string;
}

export interface VideostatsDelayplayUrl {
    baseUrl: string;
}

export interface VideostatsWatchtimeUrl {
    baseUrl: string;
}

export interface PtrackingUrl {
    baseUrl: string;
}

export interface QoeUrl {
    baseUrl: string;
}

export interface AtrUrl {
    baseUrl: string;
    elapsedMediaTimeSeconds: number;
}

export interface VideoDetails {
    videoId: string;
    title: string;
    lengthSeconds: string;
    keywords: string[];
    channelId: string;
    isOwnerViewing: boolean;
    shortDescription: string;
    isCrawlable: boolean;
    thumbnail: Thumbnail;
    allowRatings: boolean;
    viewCount: string;
    author: string;
    isPrivate: boolean;
    isUnpluggedCorpus: boolean;
    isLiveContent: boolean;
}

export interface Thumbnail {
    thumbnails: Thumbnail2[];
}

export interface Thumbnail2 {
    url: string;
    width: number;
    height: number;
}

export interface Annotation {
    playerAnnotationsExpandedRenderer: PlayerAnnotationsExpandedRenderer;
}

export interface PlayerAnnotationsExpandedRenderer {
    featuredChannel: FeaturedChannel;
    allowSwipeDismiss: boolean;
    annotationId: string;
}

export interface FeaturedChannel {
    startTimeMs: string;
    endTimeMs: string;
    watermark: Watermark;
    trackingParams: string;
    navigationEndpoint: NavigationEndpoint;
    channelName: string;
    subscribeButton: SubscribeButton;
}

export interface Watermark {
    thumbnails: Thumbnail3[];
}

export interface Thumbnail3 {
    url: string;
    width: number;
    height: number;
}

export interface NavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata;
    browseEndpoint: BrowseEndpoint;
}

export interface CommandMetadata {
    webCommandMetadata: WebCommandMetadata;
}

export interface WebCommandMetadata {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint {
    browseId: string;
}

export interface SubscribeButton {
    subscribeButtonRenderer: SubscribeButtonRenderer;
}

export interface SubscribeButtonRenderer {
    buttonText: ButtonText;
    subscribed: boolean;
    enabled: boolean;
    type: string;
    channelId: string;
    showPreferences: boolean;
    subscribedButtonText: SubscribedButtonText;
    unsubscribedButtonText: UnsubscribedButtonText;
    trackingParams: string;
    unsubscribeButtonText: UnsubscribeButtonText;
    serviceEndpoints: ServiceEndpoint[];
    subscribeAccessibility: SubscribeAccessibility;
    unsubscribeAccessibility: UnsubscribeAccessibility;
    signInEndpoint: SignInEndpoint;
}

export interface ButtonText {
    runs: Run[];
}

export interface Run {
    text: string;
}

export interface SubscribedButtonText {
    runs: Run2[];
}

export interface Run2 {
    text: string;
}

export interface UnsubscribedButtonText {
    runs: Run3[];
}

export interface Run3 {
    text: string;
}

export interface UnsubscribeButtonText {
    runs: Run4[];
}

export interface Run4 {
    text: string;
}

export interface ServiceEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata2;
    subscribeEndpoint?: SubscribeEndpoint;
    signalServiceEndpoint?: SignalServiceEndpoint;
}

export interface CommandMetadata2 {
    webCommandMetadata: WebCommandMetadata2;
}

export interface WebCommandMetadata2 {
    sendPost: boolean;
    apiUrl?: string;
}

export interface SubscribeEndpoint {
    channelIds: string[];
    params: string;
}

export interface SignalServiceEndpoint {
    signal: string;
    actions: Action[];
}

export interface Action {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction;
}

export interface OpenPopupAction {
    popup: Popup;
    popupType: string;
}

export interface Popup {
    confirmDialogRenderer: ConfirmDialogRenderer;
}

export interface ConfirmDialogRenderer {
    trackingParams: string;
    dialogMessages: DialogMessage[];
    confirmButton: ConfirmButton;
    cancelButton: CancelButton;
    primaryIsCancel: boolean;
}

export interface DialogMessage {
    runs: Run5[];
}

export interface Run5 {
    text: string;
}

export interface ConfirmButton {
    buttonRenderer: ButtonRenderer;
}

export interface ButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text;
    serviceEndpoint: ServiceEndpoint2;
    accessibility: Accessibility;
    trackingParams: string;
}

export interface Text {
    runs: Run6[];
}

export interface Run6 {
    text: string;
}

export interface ServiceEndpoint2 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata3;
    unsubscribeEndpoint: UnsubscribeEndpoint;
}

export interface CommandMetadata3 {
    webCommandMetadata: WebCommandMetadata3;
}

export interface WebCommandMetadata3 {
    sendPost: boolean;
    apiUrl: string;
}

export interface UnsubscribeEndpoint {
    channelIds: string[];
    params: string;
}

export interface Accessibility {
    label: string;
}

export interface CancelButton {
    buttonRenderer: ButtonRenderer2;
}

export interface ButtonRenderer2 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text2;
    accessibility: Accessibility2;
    trackingParams: string;
}

export interface Text2 {
    runs: Run7[];
}

export interface Run7 {
    text: string;
}

export interface Accessibility2 {
    label: string;
}

export interface SubscribeAccessibility {
    accessibilityData: AccessibilityData;
}

export interface AccessibilityData {
    label: string;
}

export interface UnsubscribeAccessibility {
    accessibilityData: AccessibilityData2;
}

export interface AccessibilityData2 {
    label: string;
}

export interface SignInEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata4;
}

export interface CommandMetadata4 {
    webCommandMetadata: WebCommandMetadata4;
}

export interface WebCommandMetadata4 {
    url: string;
}

export interface PlayerConfig {
    audioConfig: AudioConfig;
    streamSelectionConfig: StreamSelectionConfig;
    mediaCommonConfig: MediaCommonConfig;
    webPlayerConfig: WebPlayerConfig;
}

export interface AudioConfig {
    loudnessDb: number;
    perceptualLoudnessDb: number;
    enablePerFormatLoudness: boolean;
}

export interface StreamSelectionConfig {
    maxBitrate: string;
}

export interface MediaCommonConfig {
    dynamicReadaheadConfig: DynamicReadaheadConfig;
}

export interface DynamicReadaheadConfig {
    maxReadAheadMediaTimeMs: number;
    minReadAheadMediaTimeMs: number;
    readAheadGrowthRateMs: number;
}

export interface WebPlayerConfig {
    useCobaltTvosDash: boolean;
    webPlayerActionsPorting: WebPlayerActionsPorting;
}

export interface WebPlayerActionsPorting {
    getSharePanelCommand: GetSharePanelCommand;
    subscribeCommand: SubscribeCommand;
    unsubscribeCommand: UnsubscribeCommand;
    addToWatchLaterCommand: AddToWatchLaterCommand;
    removeFromWatchLaterCommand: RemoveFromWatchLaterCommand;
}

export interface GetSharePanelCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata5;
    webPlayerShareEntityServiceEndpoint: WebPlayerShareEntityServiceEndpoint;
}

export interface CommandMetadata5 {
    webCommandMetadata: WebCommandMetadata5;
}

export interface WebCommandMetadata5 {
    sendPost: boolean;
    apiUrl: string;
}

export interface WebPlayerShareEntityServiceEndpoint {
    serializedShareEntity: string;
}

export interface SubscribeCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata6;
    subscribeEndpoint: SubscribeEndpoint2;
}

export interface CommandMetadata6 {
    webCommandMetadata: WebCommandMetadata6;
}

export interface WebCommandMetadata6 {
    sendPost: boolean;
    apiUrl: string;
}

export interface SubscribeEndpoint2 {
    channelIds: string[];
    params: string;
}

export interface UnsubscribeCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata7;
    unsubscribeEndpoint: UnsubscribeEndpoint2;
}

export interface CommandMetadata7 {
    webCommandMetadata: WebCommandMetadata7;
}

export interface WebCommandMetadata7 {
    sendPost: boolean;
    apiUrl: string;
}

export interface UnsubscribeEndpoint2 {
    channelIds: string[];
    params: string;
}

export interface AddToWatchLaterCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata8;
    playlistEditEndpoint: PlaylistEditEndpoint;
}

export interface CommandMetadata8 {
    webCommandMetadata: WebCommandMetadata8;
}

export interface WebCommandMetadata8 {
    sendPost: boolean;
    apiUrl: string;
}

export interface PlaylistEditEndpoint {
    playlistId: string;
    actions: Action2[];
}

export interface Action2 {
    addedVideoId: string;
    action: string;
}

export interface RemoveFromWatchLaterCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata9;
    playlistEditEndpoint: PlaylistEditEndpoint2;
}

export interface CommandMetadata9 {
    webCommandMetadata: WebCommandMetadata9;
}

export interface WebCommandMetadata9 {
    sendPost: boolean;
    apiUrl: string;
}

export interface PlaylistEditEndpoint2 {
    playlistId: string;
    actions: Action3[];
}

export interface Action3 {
    action: string;
    removedVideoId: string;
}

export interface Storyboards {
    playerStoryboardSpecRenderer: PlayerStoryboardSpecRenderer;
}

export interface PlayerStoryboardSpecRenderer {
    spec: string;
    recommendedLevel: number;
    highResolutionRecommendedLevel: number;
}

export interface Microformat {
    playerMicroformatRenderer: PlayerMicroformatRenderer;
}

export interface PlayerMicroformatRenderer {
    thumbnail: Thumbnail4;
    embed: Embed;
    title: Title;
    description: Description;
    lengthSeconds: string;
    ownerProfileUrl: string;
    externalChannelId: string;
    isFamilySafe: boolean;
    availableCountries: string[];
    isUnlisted: boolean;
    hasYpcMetadata: boolean;
    viewCount: string;
    category: string;
    publishDate: string;
    ownerChannelName: string;
    uploadDate: string;
}

export interface Thumbnail4 {
    thumbnails: Thumbnail5[];
}

export interface Thumbnail5 {
    url: string;
    width: number;
    height: number;
}

export interface Embed {
    iframeUrl: string;
    width: number;
    height: number;
}

export interface Title {
    simpleText: string;
}

export interface Description {
    simpleText: string;
}

export interface Cards {
    cardCollectionRenderer: CardCollectionRenderer;
}

export interface CardCollectionRenderer {
    cards: Card[];
    headerText: HeaderText;
    icon: Icon;
    closeButton: CloseButton;
    trackingParams: string;
    allowTeaserDismiss: boolean;
    logIconVisibilityUpdates: boolean;
}

export interface Card {
    cardRenderer: CardRenderer;
}

export interface CardRenderer {
    teaser: Teaser;
    cueRanges: CueRange[];
    trackingParams: string;
}

export interface Teaser {
    simpleCardTeaserRenderer: SimpleCardTeaserRenderer;
}

export interface SimpleCardTeaserRenderer {
    message: Message;
    trackingParams: string;
    prominent: boolean;
    logVisibilityUpdates: boolean;
    onTapCommand: OnTapCommand;
}

export interface Message {
    simpleText: string;
}

export interface OnTapCommand {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction;
}

export interface ChangeEngagementPanelVisibilityAction {
    targetId: string;
    visibility: string;
}

export interface CueRange {
    startCardActiveMs: string;
    endCardActiveMs: string;
    teaserDurationMs: string;
    iconAfterTeaserMs: string;
}

export interface HeaderText {
    simpleText: string;
}

export interface Icon {
    infoCardIconRenderer: InfoCardIconRenderer;
}

export interface InfoCardIconRenderer {
    trackingParams: string;
}

export interface CloseButton {
    infoCardIconRenderer: InfoCardIconRenderer2;
}

export interface InfoCardIconRenderer2 {
    trackingParams: string;
}

export interface Attestation {
    playerAttestationRenderer: PlayerAttestationRenderer;
}

export interface PlayerAttestationRenderer {
    challenge: string;
    botguardData: BotguardData;
}

export interface BotguardData {
    program: string;
    interpreterSafeUrl: InterpreterSafeUrl;
    serverEnvironment: number;
}

export interface InterpreterSafeUrl {
    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: string;
}

export interface Message2 {
    mealbarPromoRenderer: MealbarPromoRenderer;
}

export interface MealbarPromoRenderer {
    messageTexts: MessageText[];
    actionButton: ActionButton;
    dismissButton: DismissButton;
    triggerCondition: string;
    style: string;
    trackingParams: string;
    impressionEndpoints: ImpressionEndpoint[];
    isVisible: boolean;
    messageTitle: MessageTitle;
}

export interface MessageText {
    runs: Run8[];
}

export interface Run8 {
    text: string;
}

export interface ActionButton {
    buttonRenderer: ButtonRenderer3;
}

export interface ButtonRenderer3 {
    style: string;
    size: string;
    text: Text3;
    trackingParams: string;
    command: Command;
}

export interface Text3 {
    runs: Run9[];
}

export interface Run9 {
    text: string;
}

export interface Command {
    clickTrackingParams: string;
    commandExecutorCommand: CommandExecutorCommand;
}

export interface CommandExecutorCommand {
    commands: Command2[];
}

export interface Command2 {
    clickTrackingParams?: string;
    commandMetadata: CommandMetadata10;
    urlEndpoint?: UrlEndpoint;
    feedbackEndpoint?: FeedbackEndpoint;
}

export interface CommandMetadata10 {
    webCommandMetadata: WebCommandMetadata10;
}

export interface WebCommandMetadata10 {
    url?: string;
    webPageType?: string;
    rootVe?: number;
    sendPost?: boolean;
    apiUrl?: string;
}

export interface UrlEndpoint {
    url: string;
    target: string;
}

export interface FeedbackEndpoint {
    feedbackToken: string;
    uiActions: UiActions;
}

export interface UiActions {
    hideEnclosingContainer: boolean;
}

export interface DismissButton {
    buttonRenderer: ButtonRenderer4;
}

export interface ButtonRenderer4 {
    style: string;
    size: string;
    text: Text4;
    trackingParams: string;
    command: Command3;
}

export interface Text4 {
    runs: Run10[];
}

export interface Run10 {
    text: string;
}

export interface Command3 {
    clickTrackingParams: string;
    commandExecutorCommand: CommandExecutorCommand2;
}

export interface CommandExecutorCommand2 {
    commands: Command4[];
}

export interface Command4 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata11;
    feedbackEndpoint: FeedbackEndpoint2;
}

export interface CommandMetadata11 {
    webCommandMetadata: WebCommandMetadata11;
}

export interface WebCommandMetadata11 {
    sendPost: boolean;
    apiUrl: string;
}

export interface FeedbackEndpoint2 {
    feedbackToken: string;
    uiActions: UiActions2;
}

export interface UiActions2 {
    hideEnclosingContainer: boolean;
}

export interface ImpressionEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata12;
    feedbackEndpoint: FeedbackEndpoint3;
}

export interface CommandMetadata12 {
    webCommandMetadata: WebCommandMetadata12;
}

export interface WebCommandMetadata12 {
    sendPost: boolean;
    apiUrl: string;
}

export interface FeedbackEndpoint3 {
    feedbackToken: string;
    uiActions: UiActions3;
}

export interface UiActions3 {
    hideEnclosingContainer: boolean;
}

export interface MessageTitle {
    runs: Run11[];
}

export interface Run11 {
    text: string;
}

export interface AdPlacement {
    adPlacementRenderer: AdPlacementRenderer;
}

export interface AdPlacementRenderer {
    config: Config;
    renderer: Renderer;
    adSlotLoggingData: AdSlotLoggingData;
}

export interface Config {
    adPlacementConfig: AdPlacementConfig;
}

export interface AdPlacementConfig {
    kind: string;
    adTimeOffset: AdTimeOffset;
    hideCueRangeMarker: boolean;
}

export interface AdTimeOffset {
    offsetStartMilliseconds: string;
    offsetEndMilliseconds: string;
}

export interface Renderer {
    instreamVideoAdRenderer?: InstreamVideoAdRenderer;
    adBreakServiceRenderer?: AdBreakServiceRenderer;
}

export interface InstreamVideoAdRenderer {
    playerOverlay: PlayerOverlay;
    trackingParams: string;
    layoutId: string;
    associatedPlayerBytesLayoutId: string;
}

export interface PlayerOverlay {
    instreamAdPlayerOverlayRenderer: InstreamAdPlayerOverlayRenderer;
}

export interface InstreamAdPlayerOverlayRenderer {
    skipOrPreviewRenderer: SkipOrPreviewRenderer;
    trackingParams: string;
    visitAdvertiserRenderer: VisitAdvertiserRenderer;
    adBadgeRenderer: AdBadgeRenderer;
    adDurationRemaining: AdDurationRemaining;
    adInfoRenderer: AdInfoRenderer;
    adLayoutLoggingData: AdLayoutLoggingData;
    elementId: string;
    inPlayerSlotId: string;
    inPlayerLayoutId: string;
}

export interface SkipOrPreviewRenderer {
    adPreviewRenderer: AdPreviewRenderer;
}

export interface AdPreviewRenderer {
    thumbnail: Thumbnail6;
    trackingParams: string;
    staticPreview: StaticPreview;
}

export interface Thumbnail6 {
    thumbnail: Thumbnail7;
    trackingParams: string;
}

export interface Thumbnail7 {
    thumbnails: Thumbnail8[];
}

export interface Thumbnail8 {
    url: string;
    width: number;
    height: number;
}

export interface StaticPreview {
    text: string;
    isTemplated: boolean;
    trackingParams: string;
}

export interface VisitAdvertiserRenderer {
    buttonRenderer: ButtonRenderer5;
}

export interface ButtonRenderer5 {
    style: string;
    text: Text5;
    icon: Icon2;
    navigationEndpoint: NavigationEndpoint2;
    trackingParams: string;
}

export interface Text5 {
    simpleText: string;
}

export interface Icon2 {
    iconType: string;
}

export interface NavigationEndpoint2 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata13;
    urlEndpoint: UrlEndpoint2;
}

export interface CommandMetadata13 {
    webCommandMetadata: WebCommandMetadata13;
}

export interface WebCommandMetadata13 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface UrlEndpoint2 {
    url: string;
    target: string;
}

export interface AdBadgeRenderer {
    simpleAdBadgeRenderer: SimpleAdBadgeRenderer;
}

export interface SimpleAdBadgeRenderer {
    text: Text6;
    trackingParams: string;
}

export interface Text6 {
    text: string;
    isTemplated: boolean;
    trackingParams: string;
}

export interface AdDurationRemaining {
    adDurationRemainingRenderer: AdDurationRemainingRenderer;
}

export interface AdDurationRemainingRenderer {
    templatedCountdown: TemplatedCountdown;
    trackingParams: string;
}

export interface TemplatedCountdown {
    templatedAdText: TemplatedAdText;
}

export interface TemplatedAdText {
    text: string;
    isTemplated: boolean;
    trackingParams: string;
}

export interface AdInfoRenderer {
    adHoverTextButtonRenderer: AdHoverTextButtonRenderer;
}

export interface AdHoverTextButtonRenderer {
    button: Button;
    hoverText: HoverText;
    trackingParams: string;
}

export interface Button {
    buttonRenderer: ButtonRenderer6;
}

export interface ButtonRenderer6 {
    style: string;
    size: string;
    isDisabled: boolean;
    serviceEndpoint: ServiceEndpoint3;
    icon: Icon3;
    trackingParams: string;
    accessibilityData: AccessibilityData3;
}

export interface ServiceEndpoint3 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction2;
}

export interface OpenPopupAction2 {
    popup: Popup2;
    popupType: string;
}

export interface Popup2 {
    aboutThisAdRenderer: AboutThisAdRenderer;
}

export interface AboutThisAdRenderer {
    url: Url;
    trackingParams: string;
}

export interface Url {
    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: string;
}

export interface Icon3 {
    iconType: string;
}

export interface AccessibilityData3 {
    accessibilityData: AccessibilityData4;
}

export interface AccessibilityData4 {
    label: string;
}

export interface HoverText {
    simpleText: string;
}

export interface AdLayoutLoggingData {
    serializedAdServingDataEntry: string;
}

export interface AdBreakServiceRenderer {
    prefetchMilliseconds: string;
    getAdBreakUrl: string;
}

export interface AdSlotLoggingData {
    serializedSlotAdServingDataEntry: string;
}

export interface AdSlot {
    adSlotRenderer: AdSlotRenderer;
}

export interface AdSlotRenderer {
    adSlotMetadata: AdSlotMetadata;
    fulfillmentContent: FulfillmentContent;
    slotEntryTrigger: SlotEntryTrigger;
    slotFulfillmentTriggers: SlotFulfillmentTrigger[];
    slotExpirationTriggers: SlotExpirationTrigger[];
}

export interface AdSlotMetadata {
    slotId: string;
    slotType: string;
    adSlotLoggingData: AdSlotLoggingData2;
    triggerEvent: string;
}

export interface AdSlotLoggingData2 {
    serializedSlotAdServingDataEntry: string;
}

export interface FulfillmentContent {
    fulfilledLayout: FulfilledLayout;
}

export interface FulfilledLayout {
    playerBytesAdLayoutRenderer: PlayerBytesAdLayoutRenderer;
}

export interface PlayerBytesAdLayoutRenderer {
    adLayoutMetadata: AdLayoutMetadata;
    renderingContent: RenderingContent;
    layoutExitNormalTriggers: LayoutExitNormalTrigger[];
    layoutExitMuteTriggers: LayoutExitMuteTrigger[];
}

export interface AdLayoutMetadata {
    layoutId: string;
    layoutType: string;
    adLayoutLoggingData: AdLayoutLoggingData2;
}

export interface AdLayoutLoggingData2 {
    serializedAdServingDataEntry: string;
}

export interface RenderingContent {
    instreamVideoAdRenderer: InstreamVideoAdRenderer2;
}

export interface InstreamVideoAdRenderer2 {
    pings: Pings;
    clickthroughEndpoint: ClickthroughEndpoint;
    csiParameters: CsiParameter[];
    playerVars: string;
    elementId: string;
    trackingParams: string;
    externalVideoId: string;
    adLayoutLoggingData: AdLayoutLoggingData3;
    layoutId: string;
}

export interface Pings {
    impressionPings: ImpressionPing[];
    errorPings: ErrorPing[];
    mutePings: MutePing[];
    unmutePings: UnmutePing[];
    pausePings: PausePing[];
    rewindPings: RewindPing[];
    resumePings: ResumePing[];
    closePings: ClosePing[];
    clickthroughPings: ClickthroughPing[];
    fullscreenPings: FullscreenPing[];
    activeViewViewablePings: ActiveViewViewablePing[];
    endFullscreenPings: EndFullscreenPing[];
    activeViewMeasurablePings: ActiveViewMeasurablePing[];
    abandonPings: AbandonPing[];
    activeViewFullyViewableAudibleHalfDurationPings: ActiveViewFullyViewableAudibleHalfDurationPing[];
    startPings: StartPing[];
    firstQuartilePings: FirstQuartilePing[];
    secondQuartilePings: SecondQuartilePing[];
    thirdQuartilePings: ThirdQuartilePing[];
    completePings: CompletePing[];
    activeViewTracking: ActiveViewTracking;
}

export interface ImpressionPing {
    baseUrl: string;
}

export interface ErrorPing {
    baseUrl: string;
}

export interface MutePing {
    baseUrl: string;
}

export interface UnmutePing {
    baseUrl: string;
}

export interface PausePing {
    baseUrl: string;
}

export interface RewindPing {
    baseUrl: string;
}

export interface ResumePing {
    baseUrl: string;
}

export interface ClosePing {
    baseUrl: string;
}

export interface ClickthroughPing {
    baseUrl: string;
}

export interface FullscreenPing {
    baseUrl: string;
}

export interface ActiveViewViewablePing {
    baseUrl: string;
}

export interface EndFullscreenPing {
    baseUrl: string;
}

export interface ActiveViewMeasurablePing {
    baseUrl: string;
}

export interface AbandonPing {
    baseUrl: string;
}

export interface ActiveViewFullyViewableAudibleHalfDurationPing {
    baseUrl: string;
}

export interface StartPing {
    baseUrl: string;
}

export interface FirstQuartilePing {
    baseUrl: string;
}

export interface SecondQuartilePing {
    baseUrl: string;
}

export interface ThirdQuartilePing {
    baseUrl: string;
}

export interface CompletePing {
    baseUrl: string;
}

export interface ActiveViewTracking {
    trafficType: string;
}

export interface ClickthroughEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata14;
    urlEndpoint: UrlEndpoint3;
}

export interface CommandMetadata14 {
    webCommandMetadata: WebCommandMetadata14;
}

export interface WebCommandMetadata14 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface UrlEndpoint3 {
    url: string;
    target: string;
}

export interface CsiParameter {
    key: string;
    value: string;
}

export interface AdLayoutLoggingData3 {
    serializedAdServingDataEntry: string;
}

export interface LayoutExitNormalTrigger {
    id: string;
    onLayoutSelfExitRequestedTrigger: OnLayoutSelfExitRequestedTrigger;
}

export interface OnLayoutSelfExitRequestedTrigger {
    triggeringLayoutId: string;
}

export interface LayoutExitMuteTrigger {
    id: string;
    skipRequestedTrigger: SkipRequestedTrigger;
}

export interface SkipRequestedTrigger {
    triggeringLayoutId: string;
}

export interface SlotEntryTrigger {
    id: string;
    beforeContentVideoIdStartedTrigger: BeforeContentVideoIdStartedTrigger;
}

export interface BeforeContentVideoIdStartedTrigger { }

export interface SlotFulfillmentTrigger {
    id: string;
    slotIdEnteredTrigger: SlotIdEnteredTrigger;
}

export interface SlotIdEnteredTrigger {
    triggeringSlotId: string;
}

export interface SlotExpirationTrigger {
    id: string;
    slotIdExitedTrigger?: SlotIdExitedTrigger;
    onNewPlaybackAfterContentVideoIdTrigger?: OnNewPlaybackAfterContentVideoIdTrigger;
}

export interface SlotIdExitedTrigger {
    triggeringSlotId: string;
}

export interface OnNewPlaybackAfterContentVideoIdTrigger { }

export interface FrameworkUpdates {
    entityBatchUpdate: EntityBatchUpdate;
}

export interface EntityBatchUpdate {
    mutations: Mutation[];
    timestamp: Timestamp;
}

export interface Mutation {
    entityKey: string;
    type: string;
    payload: Payload;
}

export interface Payload {
    offlineabilityEntity: OfflineabilityEntity;
}

export interface OfflineabilityEntity {
    key: string;
    addToOfflineButtonState: string;
}

export interface Timestamp {
    seconds: string;
    nanos: number;
}

export interface Response {
    responseContext: ResponseContext2;
    contents: Contents;
    currentVideoEndpoint: CurrentVideoEndpoint;
    trackingParams: string;
    playerOverlays: PlayerOverlays;
    onResponseReceivedEndpoints: OnResponseReceivedEndpoint[];
    engagementPanels: EngagementPanel[];
    topbar: Topbar;
    pageVisualEffects: PageVisualEffect[];
    frameworkUpdates: FrameworkUpdates2;
}

export interface ResponseContext2 {
    serviceTrackingParams: ServiceTrackingParam2[];
    mainAppWebResponseContext: MainAppWebResponseContext2;
    webResponseContextExtensionData: WebResponseContextExtensionData2;
}

export interface ServiceTrackingParam2 {
    service: string;
    params: Param2[];
}

export interface Param2 {
    key: string;
    value: string;
}

export interface MainAppWebResponseContext2 {
    loggedOut: boolean;
    trackingParam: string;
}

export interface WebResponseContextExtensionData2 {
    ytConfigData: YtConfigData;
    hasDecorated: boolean;
}

export interface YtConfigData {
    visitorData: string;
    rootVisualElementType: number;
}

export interface Contents {
    twoColumnWatchNextResults: TwoColumnWatchNextResults;
}

export interface TwoColumnWatchNextResults {
    results: Results;
    secondaryResults: SecondaryResults;
}

export interface Results {
    results: Results2;
}

export interface Results2 {
    contents: Content[];
    trackingParams: string;
}

export interface Content {
    videoPrimaryInfoRenderer?: VideoPrimaryInfoRenderer;
    videoSecondaryInfoRenderer?: VideoSecondaryInfoRenderer;
    itemSectionRenderer?: ItemSectionRenderer;
}

export interface VideoPrimaryInfoRenderer {
    title: Title2;
    viewCount: ViewCount;
    videoActions: VideoActions;
    trackingParams: string;
    dateText: DateText;
    relativeDateText: RelativeDateText;
}

export interface Title2 {
    runs: Run12[];
}

export interface Run12 {
    text: string;
}

export interface ViewCount {
    videoViewCountRenderer: VideoViewCountRenderer;
}

export interface VideoViewCountRenderer {
    viewCount: ViewCount2;
    shortViewCount: ShortViewCount;
    originalViewCount: string;
}

export interface ViewCount2 {
    simpleText: string;
}

export interface ShortViewCount {
    simpleText: string;
}

export interface VideoActions {
    menuRenderer: MenuRenderer;
}

export interface MenuRenderer {
    items: Item[];
    trackingParams: string;
    topLevelButtons: TopLevelButton[];
    accessibility: Accessibility3;
    flexibleItems: FlexibleItem[];
}

export interface Item {
    menuNavigationItemRenderer: MenuNavigationItemRenderer;
}

export interface MenuNavigationItemRenderer {
    text: Text7;
    icon: Icon4;
    navigationEndpoint: NavigationEndpoint3;
    trackingParams: string;
}

export interface Text7 {
    runs: Run13[];
}

export interface Run13 {
    text: string;
}

export interface Icon4 {
    iconType: string;
}

export interface NavigationEndpoint3 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata15;
    modalEndpoint: ModalEndpoint;
}

export interface CommandMetadata15 {
    webCommandMetadata: WebCommandMetadata15;
}

export interface WebCommandMetadata15 {
    ignoreNavigation: boolean;
}

export interface ModalEndpoint {
    modal: Modal;
}

export interface Modal {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer;
}

export interface ModalWithTitleAndButtonRenderer {
    title: Title3;
    content: Content2;
    button: Button2;
}

export interface Title3 {
    runs: Run14[];
}

export interface Run14 {
    text: string;
}

export interface Content2 {
    runs: Run15[];
}

export interface Run15 {
    text: string;
}

export interface Button2 {
    buttonRenderer: ButtonRenderer7;
}

export interface ButtonRenderer7 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text8;
    navigationEndpoint: NavigationEndpoint4;
    trackingParams: string;
}

export interface Text8 {
    simpleText: string;
}

export interface NavigationEndpoint4 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata16;
    signInEndpoint: SignInEndpoint2;
}

export interface CommandMetadata16 {
    webCommandMetadata: WebCommandMetadata16;
}

export interface WebCommandMetadata16 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SignInEndpoint2 {
    hack: boolean;
}

export interface TopLevelButton {
    segmentedLikeDislikeButtonViewModel?: SegmentedLikeDislikeButtonViewModel;
    buttonRenderer?: ButtonRenderer10;
}

export interface SegmentedLikeDislikeButtonViewModel {
    likeButtonViewModel: LikeButtonViewModel;
    dislikeButtonViewModel: DislikeButtonViewModel;
    iconType: string;
    likeCountEntity: LikeCountEntity;
    dynamicLikeCountUpdateData: DynamicLikeCountUpdateData;
}

export interface LikeButtonViewModel {
    likeButtonViewModel: LikeButtonViewModel2;
}

export interface LikeButtonViewModel2 {
    toggleButtonViewModel: ToggleButtonViewModel;
    likeStatusEntityKey: string;
    likeStatusEntity: LikeStatusEntity;
}

export interface ToggleButtonViewModel {
    toggleButtonViewModel: ToggleButtonViewModel2;
}

export interface ToggleButtonViewModel2 {
    defaultButtonViewModel: DefaultButtonViewModel;
    toggledButtonViewModel: ToggledButtonViewModel;
    identifier: string;
    trackingParams: string;
    isTogglingDisabled: boolean;
}

export interface DefaultButtonViewModel {
    buttonViewModel: ButtonViewModel;
}

export interface ButtonViewModel {
    iconName: string;
    title: string;
    onTap: OnTap;
    accessibilityText: string;
    style: string;
    trackingParams: string;
    isFullWidth: boolean;
    type: string;
    buttonSize: string;
    accessibilityId: string;
    tooltip: string;
}

export interface OnTap {
    serialCommand: SerialCommand;
}

export interface SerialCommand {
    commands: Command5[];
}

export interface Command5 {
    logGestureCommand?: LogGestureCommand;
    innertubeCommand?: InnertubeCommand;
}

export interface LogGestureCommand {
    gestureType: string;
    trackingParams: string;
}

export interface InnertubeCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata17;
    modalEndpoint: ModalEndpoint2;
}

export interface CommandMetadata17 {
    webCommandMetadata: WebCommandMetadata17;
}

export interface WebCommandMetadata17 {
    ignoreNavigation: boolean;
}

export interface ModalEndpoint2 {
    modal: Modal2;
}

export interface Modal2 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer2;
}

export interface ModalWithTitleAndButtonRenderer2 {
    title: Title4;
    content: Content3;
    button: Button3;
}

export interface Title4 {
    simpleText: string;
}

export interface Content3 {
    simpleText: string;
}

export interface Button3 {
    buttonRenderer: ButtonRenderer8;
}

export interface ButtonRenderer8 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text9;
    navigationEndpoint: NavigationEndpoint5;
    trackingParams: string;
}

export interface Text9 {
    simpleText: string;
}

export interface NavigationEndpoint5 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata18;
    signInEndpoint: SignInEndpoint3;
}

export interface CommandMetadata18 {
    webCommandMetadata: WebCommandMetadata18;
}

export interface WebCommandMetadata18 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SignInEndpoint3 {
    nextEndpoint: NextEndpoint;
    idamTag: string;
}

export interface NextEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata19;
    likeEndpoint: LikeEndpoint;
}

export interface CommandMetadata19 {
    webCommandMetadata: WebCommandMetadata19;
}

export interface WebCommandMetadata19 {
    sendPost: boolean;
    apiUrl: string;
}

export interface LikeEndpoint {
    status: string;
    target: Target;
    likeParams: string;
}

export interface Target {
    videoId: string;
}

export interface ToggledButtonViewModel {
    buttonViewModel: ButtonViewModel2;
}

export interface ButtonViewModel2 {
    iconName: string;
    title: string;
    onTap: OnTap2;
    accessibilityText: string;
    style: string;
    trackingParams: string;
    isFullWidth: boolean;
    type: string;
    buttonSize: string;
    accessibilityId: string;
    tooltip: string;
}

export interface OnTap2 {
    serialCommand: SerialCommand2;
}

export interface SerialCommand2 {
    commands: Command6[];
}

export interface Command6 {
    logGestureCommand?: LogGestureCommand2;
    innertubeCommand?: InnertubeCommand2;
}

export interface LogGestureCommand2 {
    gestureType: string;
    trackingParams: string;
}

export interface InnertubeCommand2 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata20;
    likeEndpoint: LikeEndpoint2;
}

export interface CommandMetadata20 {
    webCommandMetadata: WebCommandMetadata20;
}

export interface WebCommandMetadata20 {
    sendPost: boolean;
    apiUrl: string;
}

export interface LikeEndpoint2 {
    status: string;
    target: Target2;
    removeLikeParams: string;
}

export interface Target2 {
    videoId: string;
}

export interface LikeStatusEntity {
    key: string;
    likeStatus: string;
}

export interface DislikeButtonViewModel {
    dislikeButtonViewModel: DislikeButtonViewModel2;
}

export interface DislikeButtonViewModel2 {
    toggleButtonViewModel: ToggleButtonViewModel3;
    dislikeEntityKey: string;
}

export interface ToggleButtonViewModel3 {
    toggleButtonViewModel: ToggleButtonViewModel4;
}

export interface ToggleButtonViewModel4 {
    defaultButtonViewModel: DefaultButtonViewModel2;
    toggledButtonViewModel: ToggledButtonViewModel2;
    trackingParams: string;
    isTogglingDisabled: boolean;
}

export interface DefaultButtonViewModel2 {
    buttonViewModel: ButtonViewModel3;
}

export interface ButtonViewModel3 {
    iconName: string;
    title: string;
    onTap: OnTap3;
    accessibilityText: string;
    style: string;
    trackingParams: string;
    isFullWidth: boolean;
    type: string;
    buttonSize: string;
    accessibilityId: string;
    tooltip: string;
}

export interface OnTap3 {
    serialCommand: SerialCommand3;
}

export interface SerialCommand3 {
    commands: Command7[];
}

export interface Command7 {
    logGestureCommand?: LogGestureCommand3;
    innertubeCommand?: InnertubeCommand3;
}

export interface LogGestureCommand3 {
    gestureType: string;
    trackingParams: string;
}

export interface InnertubeCommand3 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata21;
    modalEndpoint: ModalEndpoint3;
}

export interface CommandMetadata21 {
    webCommandMetadata: WebCommandMetadata21;
}

export interface WebCommandMetadata21 {
    ignoreNavigation: boolean;
}

export interface ModalEndpoint3 {
    modal: Modal3;
}

export interface Modal3 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer3;
}

export interface ModalWithTitleAndButtonRenderer3 {
    title: Title5;
    content: Content4;
    button: Button4;
}

export interface Title5 {
    simpleText: string;
}

export interface Content4 {
    simpleText: string;
}

export interface Button4 {
    buttonRenderer: ButtonRenderer9;
}

export interface ButtonRenderer9 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text10;
    navigationEndpoint: NavigationEndpoint6;
    trackingParams: string;
}

export interface Text10 {
    simpleText: string;
}

export interface NavigationEndpoint6 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata22;
    signInEndpoint: SignInEndpoint4;
}

export interface CommandMetadata22 {
    webCommandMetadata: WebCommandMetadata22;
}

export interface WebCommandMetadata22 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SignInEndpoint4 {
    nextEndpoint: NextEndpoint2;
    idamTag: string;
}

export interface NextEndpoint2 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata23;
    likeEndpoint: LikeEndpoint3;
}

export interface CommandMetadata23 {
    webCommandMetadata: WebCommandMetadata23;
}

export interface WebCommandMetadata23 {
    sendPost: boolean;
    apiUrl: string;
}

export interface LikeEndpoint3 {
    status: string;
    target: Target3;
    dislikeParams: string;
}

export interface Target3 {
    videoId: string;
}

export interface ToggledButtonViewModel2 {
    buttonViewModel: ButtonViewModel4;
}

export interface ButtonViewModel4 {
    iconName: string;
    title: string;
    onTap: OnTap4;
    accessibilityText: string;
    style: string;
    trackingParams: string;
    isFullWidth: boolean;
    type: string;
    buttonSize: string;
    accessibilityId: string;
    tooltip: string;
}

export interface OnTap4 {
    serialCommand: SerialCommand4;
}

export interface SerialCommand4 {
    commands: Command8[];
}

export interface Command8 {
    logGestureCommand?: LogGestureCommand4;
    innertubeCommand?: InnertubeCommand4;
}

export interface LogGestureCommand4 {
    gestureType: string;
    trackingParams: string;
}

export interface InnertubeCommand4 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata24;
    likeEndpoint: LikeEndpoint4;
}

export interface CommandMetadata24 {
    webCommandMetadata: WebCommandMetadata24;
}

export interface WebCommandMetadata24 {
    sendPost: boolean;
    apiUrl: string;
}

export interface LikeEndpoint4 {
    status: string;
    target: Target4;
    removeLikeParams: string;
}

export interface Target4 {
    videoId: string;
}

export interface LikeCountEntity {
    key: string;
}

export interface DynamicLikeCountUpdateData {
    updateStatusKey: string;
    placeholderLikeCountValuesKey: string;
    updateDelayLoopId: string;
    updateDelaySec: number;
}

export interface ButtonRenderer10 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text11;
    serviceEndpoint: ServiceEndpoint4;
    icon: Icon5;
    tooltip: string;
    trackingParams: string;
    accessibilityData: AccessibilityData5;
}

export interface Text11 {
    runs: Run16[];
}

export interface Run16 {
    text: string;
}

export interface ServiceEndpoint4 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata25;
    shareEntityServiceEndpoint: ShareEntityServiceEndpoint;
}

export interface CommandMetadata25 {
    webCommandMetadata: WebCommandMetadata25;
}

export interface WebCommandMetadata25 {
    sendPost: boolean;
    apiUrl: string;
}

export interface ShareEntityServiceEndpoint {
    serializedShareEntity: string;
    commands: Command9[];
}

export interface Command9 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction3;
}

export interface OpenPopupAction3 {
    popup: Popup3;
    popupType: string;
    beReused: boolean;
}

export interface Popup3 {
    unifiedSharePanelRenderer: UnifiedSharePanelRenderer;
}

export interface UnifiedSharePanelRenderer {
    trackingParams: string;
    showLoadingSpinner: boolean;
}

export interface Icon5 {
    iconType: string;
}

export interface AccessibilityData5 {
    accessibilityData: AccessibilityData6;
}

export interface AccessibilityData6 {
    label: string;
}

export interface Accessibility3 {
    accessibilityData: AccessibilityData7;
}

export interface AccessibilityData7 {
    label: string;
}

export interface FlexibleItem {
    menuFlexibleItemRenderer: MenuFlexibleItemRenderer;
}

export interface MenuFlexibleItemRenderer {
    menuItem: MenuItem;
    topLevelButton: TopLevelButton2;
}

export interface MenuItem {
    menuServiceItemDownloadRenderer?: MenuServiceItemDownloadRenderer;
    menuServiceItemRenderer?: MenuServiceItemRenderer;
}

export interface MenuServiceItemDownloadRenderer {
    serviceEndpoint: ServiceEndpoint5;
    trackingParams: string;
}

export interface ServiceEndpoint5 {
    clickTrackingParams: string;
    offlineVideoEndpoint: OfflineVideoEndpoint;
}

export interface OfflineVideoEndpoint {
    videoId: string;
    onAddCommand: OnAddCommand;
}

export interface OnAddCommand {
    clickTrackingParams: string;
    getDownloadActionCommand: GetDownloadActionCommand;
}

export interface GetDownloadActionCommand {
    videoId: string;
    params: string;
    offlineabilityEntityKey: string;
}

export interface MenuServiceItemRenderer {
    text: Text12;
    icon: Icon6;
    serviceEndpoint: ServiceEndpoint6;
    trackingParams: string;
}

export interface Text12 {
    runs: Run17[];
}

export interface Run17 {
    text: string;
}

export interface Icon6 {
    iconType: string;
}

export interface ServiceEndpoint6 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata26;
    modalEndpoint: ModalEndpoint4;
}

export interface CommandMetadata26 {
    webCommandMetadata: WebCommandMetadata26;
}

export interface WebCommandMetadata26 {
    ignoreNavigation: boolean;
}

export interface ModalEndpoint4 {
    modal: Modal4;
}

export interface Modal4 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer4;
}

export interface ModalWithTitleAndButtonRenderer4 {
    title: Title6;
    content: Content5;
    button: Button5;
}

export interface Title6 {
    runs: Run18[];
}

export interface Run18 {
    text: string;
}

export interface Content5 {
    runs: Run19[];
}

export interface Run19 {
    text: string;
}

export interface Button5 {
    buttonRenderer: ButtonRenderer11;
}

export interface ButtonRenderer11 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text13;
    navigationEndpoint: NavigationEndpoint7;
    trackingParams: string;
}

export interface Text13 {
    simpleText: string;
}

export interface NavigationEndpoint7 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata27;
    signInEndpoint: SignInEndpoint5;
}

export interface CommandMetadata27 {
    webCommandMetadata: WebCommandMetadata27;
}

export interface WebCommandMetadata27 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SignInEndpoint5 {
    nextEndpoint: NextEndpoint3;
    idamTag: string;
}

export interface NextEndpoint3 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata28;
    watchEndpoint: WatchEndpoint;
}

export interface CommandMetadata28 {
    webCommandMetadata: WebCommandMetadata28;
}

export interface WebCommandMetadata28 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface WatchEndpoint {
    videoId: string;
    watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}

export interface WatchEndpointSupportedOnesieConfig {
    html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig;
}

export interface Html5PlaybackOnesieConfig {
    commonConfig: CommonConfig;
}

export interface CommonConfig {
    url: string;
}

export interface TopLevelButton2 {
    downloadButtonRenderer?: DownloadButtonRenderer;
    buttonViewModel?: ButtonViewModel5;
}

export interface DownloadButtonRenderer {
    trackingParams: string;
    style: string;
    size: string;
    targetId: string;
    command: Command10;
}

export interface Command10 {
    clickTrackingParams: string;
    offlineVideoEndpoint: OfflineVideoEndpoint2;
}

export interface OfflineVideoEndpoint2 {
    videoId: string;
    onAddCommand: OnAddCommand2;
}

export interface OnAddCommand2 {
    clickTrackingParams: string;
    getDownloadActionCommand: GetDownloadActionCommand2;
}

export interface GetDownloadActionCommand2 {
    videoId: string;
    params: string;
    offlineabilityEntityKey: string;
}

export interface ButtonViewModel5 {
    iconName: string;
    title: string;
    onTap: OnTap5;
    accessibilityText: string;
    style: string;
    trackingParams: string;
    isFullWidth: boolean;
    type: string;
    buttonSize: string;
    tooltip: string;
}

export interface OnTap5 {
    serialCommand: SerialCommand5;
}

export interface SerialCommand5 {
    commands: Command11[];
}

export interface Command11 {
    logGestureCommand?: LogGestureCommand5;
    innertubeCommand?: InnertubeCommand5;
}

export interface LogGestureCommand5 {
    gestureType: string;
    trackingParams: string;
}

export interface InnertubeCommand5 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata29;
    modalEndpoint: ModalEndpoint5;
}

export interface CommandMetadata29 {
    webCommandMetadata: WebCommandMetadata29;
}

export interface WebCommandMetadata29 {
    ignoreNavigation: boolean;
}

export interface ModalEndpoint5 {
    modal: Modal5;
}

export interface Modal5 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer5;
}

export interface ModalWithTitleAndButtonRenderer5 {
    title: Title7;
    content: Content6;
    button: Button6;
}

export interface Title7 {
    runs: Run20[];
}

export interface Run20 {
    text: string;
}

export interface Content6 {
    runs: Run21[];
}

export interface Run21 {
    text: string;
}

export interface Button6 {
    buttonRenderer: ButtonRenderer12;
}

export interface ButtonRenderer12 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text14;
    navigationEndpoint: NavigationEndpoint8;
    trackingParams: string;
}

export interface Text14 {
    simpleText: string;
}

export interface NavigationEndpoint8 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata30;
    signInEndpoint: SignInEndpoint6;
}

export interface CommandMetadata30 {
    webCommandMetadata: WebCommandMetadata30;
}

export interface WebCommandMetadata30 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SignInEndpoint6 {
    nextEndpoint: NextEndpoint4;
    idamTag: string;
}

export interface NextEndpoint4 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata31;
    watchEndpoint: WatchEndpoint2;
}

export interface CommandMetadata31 {
    webCommandMetadata: WebCommandMetadata31;
}

export interface WebCommandMetadata31 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface WatchEndpoint2 {
    videoId: string;
    watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig2;
}

export interface WatchEndpointSupportedOnesieConfig2 {
    html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig2;
}

export interface Html5PlaybackOnesieConfig2 {
    commonConfig: CommonConfig2;
}

export interface CommonConfig2 {
    url: string;
}

export interface DateText {
    simpleText: string;
}

export interface RelativeDateText {
    accessibility: Accessibility4;
    simpleText: string;
}

export interface Accessibility4 {
    accessibilityData: AccessibilityData8;
}

export interface AccessibilityData8 {
    label: string;
}

export interface VideoSecondaryInfoRenderer {
    owner: Owner;
    subscribeButton: SubscribeButton2;
    metadataRowContainer: MetadataRowContainer;
    showMoreText: ShowMoreText;
    showLessText: ShowLessText;
    trackingParams: string;
    defaultExpanded: boolean;
    descriptionCollapsedLines: number;
    showMoreCommand: ShowMoreCommand;
    showLessCommand: ShowLessCommand;
    attributedDescription: AttributedDescription;
    headerRuns: HeaderRun[];
}

export interface Owner {
    videoOwnerRenderer: VideoOwnerRenderer;
}

export interface VideoOwnerRenderer {
    thumbnail: Thumbnail9;
    title: Title8;
    subscriptionButton: SubscriptionButton;
    navigationEndpoint: NavigationEndpoint10;
    subscriberCountText: SubscriberCountText;
    trackingParams: string;
    badges: Badge[];
}

export interface Thumbnail9 {
    thumbnails: Thumbnail10[];
}

export interface Thumbnail10 {
    url: string;
    width: number;
    height: number;
}

export interface Title8 {
    runs: Run22[];
}

export interface Run22 {
    text: string;
    navigationEndpoint: NavigationEndpoint9;
}

export interface NavigationEndpoint9 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata32;
    browseEndpoint: BrowseEndpoint2;
}

export interface CommandMetadata32 {
    webCommandMetadata: WebCommandMetadata32;
}

export interface WebCommandMetadata32 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint2 {
    browseId: string;
    canonicalBaseUrl: string;
}

export interface SubscriptionButton {
    type: string;
}

export interface NavigationEndpoint10 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata33;
    browseEndpoint: BrowseEndpoint3;
}

export interface CommandMetadata33 {
    webCommandMetadata: WebCommandMetadata33;
}

export interface WebCommandMetadata33 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint3 {
    browseId: string;
    canonicalBaseUrl: string;
}

export interface SubscriberCountText {
    accessibility: Accessibility5;
    simpleText: string;
}

export interface Accessibility5 {
    accessibilityData: AccessibilityData9;
}

export interface AccessibilityData9 {
    label: string;
}

export interface Badge {
    metadataBadgeRenderer: MetadataBadgeRenderer;
}

export interface MetadataBadgeRenderer {
    icon: Icon7;
    style: string;
    tooltip: string;
    trackingParams: string;
    accessibilityData: AccessibilityData10;
}

export interface Icon7 {
    iconType: string;
}

export interface AccessibilityData10 {
    label: string;
}

export interface SubscribeButton2 {
    subscribeButtonRenderer: SubscribeButtonRenderer2;
}

export interface SubscribeButtonRenderer2 {
    buttonText: ButtonText2;
    subscribed: boolean;
    enabled: boolean;
    type: string;
    channelId: string;
    showPreferences: boolean;
    subscribedButtonText: SubscribedButtonText2;
    unsubscribedButtonText: UnsubscribedButtonText2;
    trackingParams: string;
    unsubscribeButtonText: UnsubscribeButtonText2;
    subscribeAccessibility: SubscribeAccessibility2;
    unsubscribeAccessibility: UnsubscribeAccessibility2;
    notificationPreferenceButton: NotificationPreferenceButton;
    targetId: string;
    signInEndpoint: SignInEndpoint7;
    subscribedEntityKey: string;
    onSubscribeEndpoints: OnSubscribeEndpoint[];
    onUnsubscribeEndpoints: OnUnsubscribeEndpoint[];
}

export interface ButtonText2 {
    runs: Run23[];
}

export interface Run23 {
    text: string;
}

export interface SubscribedButtonText2 {
    runs: Run24[];
}

export interface Run24 {
    text: string;
}

export interface UnsubscribedButtonText2 {
    runs: Run25[];
}

export interface Run25 {
    text: string;
}

export interface UnsubscribeButtonText2 {
    runs: Run26[];
}

export interface Run26 {
    text: string;
}

export interface SubscribeAccessibility2 {
    accessibilityData: AccessibilityData11;
}

export interface AccessibilityData11 {
    label: string;
}

export interface UnsubscribeAccessibility2 {
    accessibilityData: AccessibilityData12;
}

export interface AccessibilityData12 {
    label: string;
}

export interface NotificationPreferenceButton {
    subscriptionNotificationToggleButtonRenderer: SubscriptionNotificationToggleButtonRenderer;
}

export interface SubscriptionNotificationToggleButtonRenderer {
    states: State[];
    currentStateId: number;
    trackingParams: string;
    command: Command12;
    targetId: string;
    secondaryIcon: SecondaryIcon;
}

export interface State {
    stateId: number;
    nextStateId: number;
    state: State2;
}

export interface State2 {
    buttonRenderer: ButtonRenderer13;
}

export interface ButtonRenderer13 {
    style: string;
    size: string;
    isDisabled: boolean;
    icon: Icon8;
    accessibility: Accessibility6;
    trackingParams: string;
    accessibilityData: AccessibilityData13;
}

export interface Icon8 {
    iconType: string;
}

export interface Accessibility6 {
    label: string;
}

export interface AccessibilityData13 {
    accessibilityData: AccessibilityData14;
}

export interface AccessibilityData14 {
    label: string;
}

export interface Command12 {
    clickTrackingParams: string;
    commandExecutorCommand: CommandExecutorCommand3;
}

export interface CommandExecutorCommand3 {
    commands: Command13[];
}

export interface Command13 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction4;
}

export interface OpenPopupAction4 {
    popup: Popup4;
    popupType: string;
}

export interface Popup4 {
    menuPopupRenderer: MenuPopupRenderer;
}

export interface MenuPopupRenderer {
    items: Item2[];
}

export interface Item2 {
    menuServiceItemRenderer: MenuServiceItemRenderer2;
}

export interface MenuServiceItemRenderer2 {
    text: Text15;
    icon: Icon9;
    serviceEndpoint: ServiceEndpoint7;
    trackingParams: string;
    isSelected?: boolean;
}

export interface Text15 {
    simpleText?: string;
    runs?: Run27[];
}

export interface Run27 {
    text: string;
}

export interface Icon9 {
    iconType: string;
}

export interface ServiceEndpoint7 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata34;
    modifyChannelNotificationPreferenceEndpoint?: ModifyChannelNotificationPreferenceEndpoint;
    signalServiceEndpoint?: SignalServiceEndpoint2;
}

export interface CommandMetadata34 {
    webCommandMetadata: WebCommandMetadata34;
}

export interface WebCommandMetadata34 {
    sendPost: boolean;
    apiUrl?: string;
}

export interface ModifyChannelNotificationPreferenceEndpoint {
    params: string;
}

export interface SignalServiceEndpoint2 {
    signal: string;
    actions: Action4[];
}

export interface Action4 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction5;
}

export interface OpenPopupAction5 {
    popup: Popup5;
    popupType: string;
}

export interface Popup5 {
    confirmDialogRenderer: ConfirmDialogRenderer2;
}

export interface ConfirmDialogRenderer2 {
    trackingParams: string;
    dialogMessages: DialogMessage2[];
    confirmButton: ConfirmButton2;
    cancelButton: CancelButton2;
    primaryIsCancel: boolean;
}

export interface DialogMessage2 {
    runs: Run28[];
}

export interface Run28 {
    text: string;
}

export interface ConfirmButton2 {
    buttonRenderer: ButtonRenderer14;
}

export interface ButtonRenderer14 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text16;
    serviceEndpoint: ServiceEndpoint8;
    accessibility: Accessibility7;
    trackingParams: string;
}

export interface Text16 {
    runs: Run29[];
}

export interface Run29 {
    text: string;
}

export interface ServiceEndpoint8 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata35;
    unsubscribeEndpoint: UnsubscribeEndpoint3;
}

export interface CommandMetadata35 {
    webCommandMetadata: WebCommandMetadata35;
}

export interface WebCommandMetadata35 {
    sendPost: boolean;
    apiUrl: string;
}

export interface UnsubscribeEndpoint3 {
    channelIds: string[];
    params: string;
}

export interface Accessibility7 {
    label: string;
}

export interface CancelButton2 {
    buttonRenderer: ButtonRenderer15;
}

export interface ButtonRenderer15 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text17;
    accessibility: Accessibility8;
    trackingParams: string;
}

export interface Text17 {
    runs: Run30[];
}

export interface Run30 {
    text: string;
}

export interface Accessibility8 {
    label: string;
}

export interface SecondaryIcon {
    iconType: string;
}

export interface SignInEndpoint7 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata36;
    modalEndpoint: ModalEndpoint6;
}

export interface CommandMetadata36 {
    webCommandMetadata: WebCommandMetadata36;
}

export interface WebCommandMetadata36 {
    ignoreNavigation: boolean;
}

export interface ModalEndpoint6 {
    modal: Modal6;
}

export interface Modal6 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer6;
}

export interface ModalWithTitleAndButtonRenderer6 {
    title: Title9;
    content: Content7;
    button: Button7;
}

export interface Title9 {
    simpleText: string;
}

export interface Content7 {
    simpleText: string;
}

export interface Button7 {
    buttonRenderer: ButtonRenderer16;
}

export interface ButtonRenderer16 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text18;
    navigationEndpoint: NavigationEndpoint11;
    trackingParams: string;
}

export interface Text18 {
    simpleText: string;
}

export interface NavigationEndpoint11 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata37;
    signInEndpoint: SignInEndpoint8;
}

export interface CommandMetadata37 {
    webCommandMetadata: WebCommandMetadata37;
}

export interface WebCommandMetadata37 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SignInEndpoint8 {
    nextEndpoint: NextEndpoint5;
    continueAction: string;
    idamTag: string;
}

export interface NextEndpoint5 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata38;
    watchEndpoint: WatchEndpoint3;
}

export interface CommandMetadata38 {
    webCommandMetadata: WebCommandMetadata38;
}

export interface WebCommandMetadata38 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface WatchEndpoint3 {
    videoId: string;
    watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig3;
}

export interface WatchEndpointSupportedOnesieConfig3 {
    html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig3;
}

export interface Html5PlaybackOnesieConfig3 {
    commonConfig: CommonConfig3;
}

export interface CommonConfig3 {
    url: string;
}

export interface OnSubscribeEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata39;
    subscribeEndpoint: SubscribeEndpoint3;
}

export interface CommandMetadata39 {
    webCommandMetadata: WebCommandMetadata39;
}

export interface WebCommandMetadata39 {
    sendPost: boolean;
    apiUrl: string;
}

export interface SubscribeEndpoint3 {
    channelIds: string[];
    params: string;
}

export interface OnUnsubscribeEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata40;
    signalServiceEndpoint: SignalServiceEndpoint3;
}

export interface CommandMetadata40 {
    webCommandMetadata: WebCommandMetadata40;
}

export interface WebCommandMetadata40 {
    sendPost: boolean;
}

export interface SignalServiceEndpoint3 {
    signal: string;
    actions: Action5[];
}

export interface Action5 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction6;
}

export interface OpenPopupAction6 {
    popup: Popup6;
    popupType: string;
}

export interface Popup6 {
    confirmDialogRenderer: ConfirmDialogRenderer3;
}

export interface ConfirmDialogRenderer3 {
    trackingParams: string;
    dialogMessages: DialogMessage3[];
    confirmButton: ConfirmButton3;
    cancelButton: CancelButton3;
    primaryIsCancel: boolean;
}

export interface DialogMessage3 {
    runs: Run31[];
}

export interface Run31 {
    text: string;
}

export interface ConfirmButton3 {
    buttonRenderer: ButtonRenderer17;
}

export interface ButtonRenderer17 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text19;
    serviceEndpoint: ServiceEndpoint9;
    accessibility: Accessibility9;
    trackingParams: string;
}

export interface Text19 {
    runs: Run32[];
}

export interface Run32 {
    text: string;
}

export interface ServiceEndpoint9 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata41;
    unsubscribeEndpoint: UnsubscribeEndpoint4;
}

export interface CommandMetadata41 {
    webCommandMetadata: WebCommandMetadata41;
}

export interface WebCommandMetadata41 {
    sendPost: boolean;
    apiUrl: string;
}

export interface UnsubscribeEndpoint4 {
    channelIds: string[];
    params: string;
}

export interface Accessibility9 {
    label: string;
}

export interface CancelButton3 {
    buttonRenderer: ButtonRenderer18;
}

export interface ButtonRenderer18 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text20;
    accessibility: Accessibility10;
    trackingParams: string;
}

export interface Text20 {
    runs: Run33[];
}

export interface Run33 {
    text: string;
}

export interface Accessibility10 {
    label: string;
}

export interface MetadataRowContainer {
    metadataRowContainerRenderer: MetadataRowContainerRenderer;
}

export interface MetadataRowContainerRenderer {
    collapsedItemCount: number;
    trackingParams: string;
}

export interface ShowMoreText {
    simpleText: string;
}

export interface ShowLessText {
    simpleText: string;
}

export interface ShowMoreCommand {
    clickTrackingParams: string;
    commandExecutorCommand: CommandExecutorCommand4;
}

export interface CommandExecutorCommand4 {
    commands: Command14[];
}

export interface Command14 {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction2;
    scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommand;
}

export interface ChangeEngagementPanelVisibilityAction2 {
    targetId: string;
    visibility: string;
}

export interface ScrollToEngagementPanelCommand {
    targetId: string;
}

export interface ShowLessCommand {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction3;
}

export interface ChangeEngagementPanelVisibilityAction3 {
    targetId: string;
    visibility: string;
}

export interface AttributedDescription {
    content: string;
    commandRuns: CommandRun[];
    styleRuns: StyleRun[];
}

export interface CommandRun {
    startIndex: number;
    length: number;
    onTap: OnTap6;
}

export interface OnTap6 {
    innertubeCommand: InnertubeCommand6;
}

export interface InnertubeCommand6 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata42;
    urlEndpoint: UrlEndpoint4;
}

export interface CommandMetadata42 {
    webCommandMetadata: WebCommandMetadata42;
}

export interface WebCommandMetadata42 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface UrlEndpoint4 {
    url: string;
    target: string;
    nofollow: boolean;
}

export interface StyleRun {
    startIndex: number;
    length: number;
    styleRunExtensions: StyleRunExtensions;
    fontFamilyName: string;
}

export interface StyleRunExtensions {
    styleRunColorMapExtension: StyleRunColorMapExtension;
}

export interface StyleRunColorMapExtension {
    colorMap: ColorMap[];
}

export interface ColorMap {
    key: string;
    value: number;
}

export interface HeaderRun {
    startIndex: number;
    length: number;
    headerMapping: string;
}

export interface ItemSectionRenderer {
    contents: Content8[];
    trackingParams: string;
    sectionIdentifier: string;
    targetId?: string;
}

export interface Content8 {
    continuationItemRenderer?: ContinuationItemRenderer;
    commentsEntryPointHeaderRenderer?: CommentsEntryPointHeaderRenderer;
}

export interface ContinuationItemRenderer {
    trigger: string;
    continuationEndpoint: ContinuationEndpoint;
}

export interface ContinuationEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata43;
    continuationCommand: ContinuationCommand;
}

export interface CommandMetadata43 {
    webCommandMetadata: WebCommandMetadata43;
}

export interface WebCommandMetadata43 {
    sendPost: boolean;
    apiUrl: string;
}

export interface ContinuationCommand {
    token: string;
    request: string;
}

export interface CommentsEntryPointHeaderRenderer {
    headerText: HeaderText2;
    onTap: OnTap7;
    trackingParams: string;
    commentCount: CommentCount;
    contentRenderer: ContentRenderer;
    targetId: string;
}

export interface HeaderText2 {
    runs: Run34[];
}

export interface Run34 {
    text: string;
}

export interface OnTap7 {
    clickTrackingParams: string;
    commandExecutorCommand: CommandExecutorCommand5;
}

export interface CommandExecutorCommand5 {
    commands: Command15[];
}

export interface Command15 {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction4;
    scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommand2;
}

export interface ChangeEngagementPanelVisibilityAction4 {
    targetId: string;
    visibility: string;
}

export interface ScrollToEngagementPanelCommand2 {
    targetId: string;
}

export interface CommentCount {
    simpleText: string;
}

export interface ContentRenderer {
    commentsEntryPointTeaserRenderer: CommentsEntryPointTeaserRenderer;
}

export interface CommentsEntryPointTeaserRenderer {
    teaserAvatar: TeaserAvatar;
    teaserContent: TeaserContent;
    trackingParams: string;
}

export interface TeaserAvatar {
    thumbnails: Thumbnail11[];
    accessibility: Accessibility11;
}

export interface Thumbnail11 {
    url: string;
    width: number;
    height: number;
}

export interface Accessibility11 {
    accessibilityData: AccessibilityData15;
}

export interface AccessibilityData15 {
    label: string;
}

export interface TeaserContent {
    simpleText: string;
}

export interface SecondaryResults {
    secondaryResults: SecondaryResults2;
}

export interface SecondaryResults2 {
    results: Result[];
    trackingParams: string;
    targetId: string;
}

export interface Result {
    continuationItemRenderer: ContinuationItemRenderer2;
}

export interface ContinuationItemRenderer2 {
    trigger: string;
    continuationEndpoint: ContinuationEndpoint2;
    button: Button8;
}

export interface ContinuationEndpoint2 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata44;
    continuationCommand: ContinuationCommand2;
}

export interface CommandMetadata44 {
    webCommandMetadata: WebCommandMetadata44;
}

export interface WebCommandMetadata44 {
    sendPost: boolean;
    apiUrl: string;
}

export interface ContinuationCommand2 {
    token: string;
    request: string;
}

export interface Button8 {
    buttonRenderer: ButtonRenderer19;
}

export interface ButtonRenderer19 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text21;
    trackingParams: string;
    command: Command16;
}

export interface Text21 {
    runs: Run35[];
}

export interface Run35 {
    text: string;
}

export interface Command16 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata45;
    continuationCommand: ContinuationCommand3;
}

export interface CommandMetadata45 {
    webCommandMetadata: WebCommandMetadata45;
}

export interface WebCommandMetadata45 {
    sendPost: boolean;
    apiUrl: string;
}

export interface ContinuationCommand3 {
    token: string;
    request: string;
}

export interface CurrentVideoEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata46;
    watchEndpoint: WatchEndpoint4;
}

export interface CommandMetadata46 {
    webCommandMetadata: WebCommandMetadata46;
}

export interface WebCommandMetadata46 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface WatchEndpoint4 {
    videoId: string;
    watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig4;
}

export interface WatchEndpointSupportedOnesieConfig4 {
    html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig4;
}

export interface Html5PlaybackOnesieConfig4 {
    commonConfig: CommonConfig4;
}

export interface CommonConfig4 {
    url: string;
}

export interface PlayerOverlays {
    playerOverlayRenderer: PlayerOverlayRenderer;
}

export interface PlayerOverlayRenderer {
    shareButton: ShareButton;
    addToMenu: AddToMenu;
    videoDetails: VideoDetails2;
    decoratedPlayerBarRenderer: DecoratedPlayerBarRenderer;
    speedmasterUserEdu: SpeedmasterUserEdu;
}

export interface ShareButton {
    buttonRenderer: ButtonRenderer20;
}

export interface ButtonRenderer20 {
    style: string;
    size: string;
    isDisabled: boolean;
    icon: Icon10;
    navigationEndpoint: NavigationEndpoint12;
    tooltip: string;
    trackingParams: string;
}

export interface Icon10 {
    iconType: string;
}

export interface NavigationEndpoint12 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata47;
    shareEntityServiceEndpoint: ShareEntityServiceEndpoint2;
}

export interface CommandMetadata47 {
    webCommandMetadata: WebCommandMetadata47;
}

export interface WebCommandMetadata47 {
    sendPost: boolean;
    apiUrl: string;
}

export interface ShareEntityServiceEndpoint2 {
    serializedShareEntity: string;
    commands: Command17[];
}

export interface Command17 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction7;
}

export interface OpenPopupAction7 {
    popup: Popup7;
    popupType: string;
    beReused: boolean;
}

export interface Popup7 {
    unifiedSharePanelRenderer: UnifiedSharePanelRenderer2;
}

export interface UnifiedSharePanelRenderer2 {
    trackingParams: string;
    showLoadingSpinner: boolean;
}

export interface AddToMenu {
    menuRenderer: MenuRenderer2;
}

export interface MenuRenderer2 {
    trackingParams: string;
}

export interface VideoDetails2 {
    playerOverlayVideoDetailsRenderer: PlayerOverlayVideoDetailsRenderer;
}

export interface PlayerOverlayVideoDetailsRenderer {
    title: Title10;
    subtitle: Subtitle;
}

export interface Title10 {
    simpleText: string;
}

export interface Subtitle {
    runs: Run36[];
}

export interface Run36 {
    text: string;
}

export interface DecoratedPlayerBarRenderer {
    decoratedPlayerBarRenderer: DecoratedPlayerBarRenderer2;
}

export interface DecoratedPlayerBarRenderer2 {
    playerBar: PlayerBar;
}

export interface PlayerBar {
    multiMarkersPlayerBarRenderer: MultiMarkersPlayerBarRenderer;
}

export interface MultiMarkersPlayerBarRenderer {
    visibleOnLoad: VisibleOnLoad;
    trackingParams: string;
}

export interface VisibleOnLoad {
    key: string;
}

export interface SpeedmasterUserEdu {
    speedmasterEduViewModel: SpeedmasterEduViewModel;
}

export interface SpeedmasterEduViewModel {
    bodyText: BodyText;
}

export interface BodyText {
    content: string;
}

export interface OnResponseReceivedEndpoint {
    clickTrackingParams: string;
    commandMetadata?: CommandMetadata48;
    signalServiceEndpoint?: SignalServiceEndpoint4;
    loadMarkersCommand?: LoadMarkersCommand;
}

export interface CommandMetadata48 {
    webCommandMetadata: WebCommandMetadata48;
}

export interface WebCommandMetadata48 {
    sendPost: boolean;
}

export interface SignalServiceEndpoint4 {
    signal: string;
    actions: Action6[];
}

export interface Action6 {
    clickTrackingParams: string;
    signalAction: SignalAction;
}

export interface SignalAction {
    signal: string;
}

export interface LoadMarkersCommand {
    visibleOnLoadKeys: string[];
    entityKeys: string[];
}

export interface EngagementPanel {
    engagementPanelSectionListRenderer: EngagementPanelSectionListRenderer;
}

export interface EngagementPanelSectionListRenderer {
    content: Content9;
    targetId: string;
    visibility: string;
    loggingDirectives: LoggingDirectives2;
    panelIdentifier?: string;
    header?: Header2;
    veType?: number;
}

export interface Content9 {
    adsEngagementPanelContentRenderer?: AdsEngagementPanelContentRenderer;
    structuredDescriptionContentRenderer?: StructuredDescriptionContentRenderer;
    sectionListRenderer?: SectionListRenderer;
}

export interface AdsEngagementPanelContentRenderer {
    hack: boolean;
}

export interface StructuredDescriptionContentRenderer {
    items: Item3[];
}

export interface Item3 {
    videoDescriptionHeaderRenderer?: VideoDescriptionHeaderRenderer;
    expandableVideoDescriptionBodyRenderer?: ExpandableVideoDescriptionBodyRenderer;
    horizontalCardListRenderer?: HorizontalCardListRenderer;
    videoDescriptionInfocardsSectionRenderer?: VideoDescriptionInfocardsSectionRenderer;
}

export interface VideoDescriptionHeaderRenderer {
    title: Title11;
    channel: Channel;
    views: Views;
    publishDate: PublishDate;
    factoid: Factoid[];
    channelNavigationEndpoint: ChannelNavigationEndpoint;
    channelThumbnail: ChannelThumbnail;
}

export interface Title11 {
    runs: Run37[];
}

export interface Run37 {
    text: string;
}

export interface Channel {
    simpleText: string;
}

export interface Views {
    simpleText: string;
}

export interface PublishDate {
    simpleText: string;
}

export interface Factoid {
    factoidRenderer?: FactoidRenderer;
    viewCountFactoidRenderer?: ViewCountFactoidRenderer;
}

export interface FactoidRenderer {
    value: Value;
    label: Label;
    accessibilityText: string;
}

export interface Value {
    simpleText: string;
}

export interface Label {
    simpleText: string;
}

export interface ViewCountFactoidRenderer {
    viewCountEntityKey: string;
    factoid: Factoid2;
    viewCountType: string;
}

export interface Factoid2 {
    factoidRenderer: FactoidRenderer2;
}

export interface FactoidRenderer2 {
    value: Value2;
    label: Label2;
    accessibilityText: string;
}

export interface Value2 {
    simpleText: string;
}

export interface Label2 {
    simpleText: string;
}

export interface ChannelNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata49;
    browseEndpoint: BrowseEndpoint4;
}

export interface CommandMetadata49 {
    webCommandMetadata: WebCommandMetadata49;
}

export interface WebCommandMetadata49 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint4 {
    browseId: string;
    canonicalBaseUrl: string;
}

export interface ChannelThumbnail {
    thumbnails: Thumbnail12[];
}

export interface Thumbnail12 {
    url: string;
}

export interface ExpandableVideoDescriptionBodyRenderer {
    showMoreText: ShowMoreText2;
    showLessText: ShowLessText2;
    attributedDescriptionBodyText: AttributedDescriptionBodyText;
    headerRuns: HeaderRun2[];
}

export interface ShowMoreText2 {
    simpleText: string;
}

export interface ShowLessText2 {
    simpleText: string;
}

export interface AttributedDescriptionBodyText {
    content: string;
    commandRuns: CommandRun2[];
    styleRuns: StyleRun2[];
}

export interface CommandRun2 {
    startIndex: number;
    length: number;
    onTap: OnTap8;
}

export interface OnTap8 {
    innertubeCommand: InnertubeCommand7;
}

export interface InnertubeCommand7 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata50;
    urlEndpoint: UrlEndpoint5;
}

export interface CommandMetadata50 {
    webCommandMetadata: WebCommandMetadata50;
}

export interface WebCommandMetadata50 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface UrlEndpoint5 {
    url: string;
    target: string;
    nofollow: boolean;
}

export interface StyleRun2 {
    startIndex: number;
    length: number;
    styleRunExtensions: StyleRunExtensions2;
    fontFamilyName: string;
}

export interface StyleRunExtensions2 {
    styleRunColorMapExtension: StyleRunColorMapExtension2;
}

export interface StyleRunColorMapExtension2 {
    colorMap: ColorMap2[];
}

export interface ColorMap2 {
    key: string;
    value: number;
}

export interface HeaderRun2 {
    startIndex: number;
    length: number;
    headerMapping: string;
}

export interface HorizontalCardListRenderer {
    cards: Card2[];
    trackingParams: string;
    header: Header;
    style: Style;
    footerButton: FooterButton;
}

export interface Card2 {
    videoAttributeViewModel: VideoAttributeViewModel;
}

export interface VideoAttributeViewModel {
    image: Image;
    imageStyle: string;
    title: string;
    subtitle: string;
    secondarySubtitle: SecondarySubtitle;
    orientation: string;
    sizingRule: string;
    overflowMenuOnTap: OverflowMenuOnTap;
    overflowMenuA11yLabel: string;
    loggingDirectives: LoggingDirectives;
}

export interface Image {
    sources: Source[];
}

export interface Source {
    url: string;
}

export interface SecondarySubtitle {
    content: string;
}

export interface OverflowMenuOnTap {
    innertubeCommand: InnertubeCommand8;
}

export interface InnertubeCommand8 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata51;
    confirmDialogEndpoint: ConfirmDialogEndpoint;
}

export interface CommandMetadata51 {
    webCommandMetadata: WebCommandMetadata51;
}

export interface WebCommandMetadata51 {
    ignoreNavigation: boolean;
}

export interface ConfirmDialogEndpoint {
    content: Content10;
}

export interface Content10 {
    confirmDialogRenderer: ConfirmDialogRenderer4;
}

export interface ConfirmDialogRenderer4 {
    title: Title12;
    trackingParams: string;
    dialogMessages: DialogMessage4[];
    confirmButton: ConfirmButton4;
    primaryIsCancel: boolean;
}

export interface Title12 {
    runs: Run38[];
}

export interface Run38 {
    text: string;
}

export interface DialogMessage4 {
    runs: Run39[];
}

export interface Run39 {
    text: string;
    bold?: boolean;
}

export interface ConfirmButton4 {
    buttonRenderer: ButtonRenderer21;
}

export interface ButtonRenderer21 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text22;
    trackingParams: string;
    accessibilityData: AccessibilityData16;
}

export interface Text22 {
    runs: Run40[];
}

export interface Run40 {
    text: string;
}

export interface AccessibilityData16 {
    accessibilityData: AccessibilityData17;
}

export interface AccessibilityData17 {
    label: string;
}

export interface LoggingDirectives {
    trackingParams: string;
    visibility: Visibility;
    enableDisplayloggerExperiment: boolean;
}

export interface Visibility {
    types: string;
}

export interface Header {
    richListHeaderRenderer: RichListHeaderRenderer;
}

export interface RichListHeaderRenderer {
    title: Title13;
    subtitle: Subtitle2;
    trackingParams: string;
}

export interface Title13 {
    simpleText: string;
}

export interface Subtitle2 {
    simpleText: string;
}

export interface Style {
    type: string;
}

export interface FooterButton {
    buttonViewModel: ButtonViewModel6;
}

export interface ButtonViewModel6 {
    iconName: string;
    onTap: OnTap9;
    style: string;
    trackingParams: string;
    type: string;
    buttonSize: string;
    titleFormatted: TitleFormatted;
}

export interface OnTap9 {
    innertubeCommand: InnertubeCommand9;
}

export interface InnertubeCommand9 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata52;
    browseEndpoint: BrowseEndpoint5;
}

export interface CommandMetadata52 {
    webCommandMetadata: WebCommandMetadata52;
}

export interface WebCommandMetadata52 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint5 {
    browseId: string;
}

export interface TitleFormatted {
    content: string;
}

export interface VideoDescriptionInfocardsSectionRenderer {
    sectionTitle: SectionTitle;
    creatorVideosButton: CreatorVideosButton;
    creatorAboutButton: CreatorAboutButton;
    sectionSubtitle: SectionSubtitle;
    channelAvatar: ChannelAvatar;
    channelEndpoint: ChannelEndpoint;
    trackingParams: string;
}

export interface SectionTitle {
    simpleText: string;
}

export interface CreatorVideosButton {
    buttonRenderer: ButtonRenderer22;
}

export interface ButtonRenderer22 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text23;
    icon: Icon11;
    trackingParams: string;
    command: Command18;
}

export interface Text23 {
    simpleText: string;
}

export interface Icon11 {
    iconType: string;
}

export interface Command18 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata53;
    browseEndpoint: BrowseEndpoint6;
}

export interface CommandMetadata53 {
    webCommandMetadata: WebCommandMetadata53;
}

export interface WebCommandMetadata53 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint6 {
    browseId: string;
    params: string;
}

export interface CreatorAboutButton {
    buttonRenderer: ButtonRenderer23;
}

export interface ButtonRenderer23 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text24;
    icon: Icon12;
    trackingParams: string;
    command: Command19;
}

export interface Text24 {
    simpleText: string;
}

export interface Icon12 {
    iconType: string;
}

export interface Command19 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata54;
    browseEndpoint: BrowseEndpoint7;
}

export interface CommandMetadata54 {
    webCommandMetadata: WebCommandMetadata54;
}

export interface WebCommandMetadata54 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint7 {
    browseId: string;
    params: string;
}

export interface SectionSubtitle {
    accessibility: Accessibility12;
    simpleText: string;
}

export interface Accessibility12 {
    accessibilityData: AccessibilityData18;
}

export interface AccessibilityData18 {
    label: string;
}

export interface ChannelAvatar {
    thumbnails: Thumbnail13[];
}

export interface Thumbnail13 {
    url: string;
}

export interface ChannelEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata55;
    browseEndpoint: BrowseEndpoint8;
}

export interface CommandMetadata55 {
    webCommandMetadata: WebCommandMetadata55;
}

export interface WebCommandMetadata55 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint8 {
    browseId: string;
    canonicalBaseUrl: string;
}

export interface SectionListRenderer {
    contents: Content11[];
    trackingParams: string;
}

export interface Content11 {
    itemSectionRenderer: ItemSectionRenderer2;
}

export interface ItemSectionRenderer2 {
    contents: Content12[];
    trackingParams: string;
    sectionIdentifier: string;
    targetId: string;
}

export interface Content12 {
    continuationItemRenderer: ContinuationItemRenderer3;
}

export interface ContinuationItemRenderer3 {
    trigger: string;
    continuationEndpoint: ContinuationEndpoint3;
}

export interface ContinuationEndpoint3 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata56;
    continuationCommand: ContinuationCommand4;
}

export interface CommandMetadata56 {
    webCommandMetadata: WebCommandMetadata56;
}

export interface WebCommandMetadata56 {
    sendPost: boolean;
    apiUrl: string;
}

export interface ContinuationCommand4 {
    token: string;
    request: string;
}

export interface LoggingDirectives2 {
    trackingParams: string;
    visibility: Visibility2;
    enableDisplayloggerExperiment: boolean;
}

export interface Visibility2 {
    types: string;
}

export interface Header2 {
    engagementPanelTitleHeaderRenderer: EngagementPanelTitleHeaderRenderer;
}

export interface EngagementPanelTitleHeaderRenderer {
    title: Title14;
    contextualInfo?: ContextualInfo;
    menu?: Menu;
    visibilityButton: VisibilityButton;
    trackingParams: string;
}

export interface Title14 {
    runs?: Run41[];
    simpleText?: string;
}

export interface Run41 {
    text: string;
}

export interface ContextualInfo {
    runs: Run42[];
}

export interface Run42 {
    text: string;
}

export interface Menu {
    sortFilterSubMenuRenderer: SortFilterSubMenuRenderer;
}

export interface SortFilterSubMenuRenderer {
    subMenuItems: SubMenuItem[];
    icon: Icon13;
    accessibility: Accessibility13;
    trackingParams: string;
}

export interface SubMenuItem {
    title: string;
    selected: boolean;
    serviceEndpoint: ServiceEndpoint10;
    trackingParams: string;
}

export interface ServiceEndpoint10 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata57;
    continuationCommand: ContinuationCommand5;
}

export interface CommandMetadata57 {
    webCommandMetadata: WebCommandMetadata57;
}

export interface WebCommandMetadata57 {
    sendPost: boolean;
    apiUrl: string;
}

export interface ContinuationCommand5 {
    token: string;
    request: string;
    command: Command20;
}

export interface Command20 {
    clickTrackingParams: string;
    showReloadUiCommand: ShowReloadUiCommand;
}

export interface ShowReloadUiCommand {
    targetId: string;
}

export interface Icon13 {
    iconType: string;
}

export interface Accessibility13 {
    accessibilityData: AccessibilityData19;
}

export interface AccessibilityData19 {
    label: string;
}

export interface VisibilityButton {
    buttonRenderer: ButtonRenderer24;
}

export interface ButtonRenderer24 {
    style?: string;
    size?: string;
    icon: Icon14;
    trackingParams: string;
    accessibilityData: AccessibilityData20;
    command: Command21;
}

export interface Icon14 {
    iconType: string;
}

export interface AccessibilityData20 {
    accessibilityData: AccessibilityData21;
}

export interface AccessibilityData21 {
    label: string;
}

export interface Command21 {
    clickTrackingParams: string;
    hideEngagementPanelEndpoint?: HideEngagementPanelEndpoint;
    commandExecutorCommand?: CommandExecutorCommand6;
}

export interface HideEngagementPanelEndpoint {
    panelIdentifier: string;
}

export interface CommandExecutorCommand6 {
    commands: Command22[];
}

export interface Command22 {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction5;
    updateToggleButtonStateCommand?: UpdateToggleButtonStateCommand;
}

export interface ChangeEngagementPanelVisibilityAction5 {
    targetId: string;
    visibility: string;
}

export interface UpdateToggleButtonStateCommand {
    toggled: boolean;
    buttonId: string;
}

export interface Topbar {
    desktopTopbarRenderer: DesktopTopbarRenderer;
}

export interface DesktopTopbarRenderer {
    logo: Logo;
    searchbox: Searchbox;
    trackingParams: string;
    countryCode: string;
    topbarButtons: TopbarButton[];
    hotkeyDialog: HotkeyDialog;
    backButton: BackButton;
    forwardButton: ForwardButton;
    a11ySkipNavigationButton: A11ySkipNavigationButton;
    voiceSearchButton: VoiceSearchButton;
}

export interface Logo {
    topbarLogoRenderer: TopbarLogoRenderer;
}

export interface TopbarLogoRenderer {
    iconImage: IconImage;
    tooltipText: TooltipText;
    endpoint: Endpoint;
    trackingParams: string;
    overrideEntityKey: string;
}

export interface IconImage {
    iconType: string;
}

export interface TooltipText {
    runs: Run43[];
}

export interface Run43 {
    text: string;
}

export interface Endpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata58;
    browseEndpoint: BrowseEndpoint9;
}

export interface CommandMetadata58 {
    webCommandMetadata: WebCommandMetadata58;
}

export interface WebCommandMetadata58 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint9 {
    browseId: string;
}

export interface Searchbox {
    fusionSearchboxRenderer: FusionSearchboxRenderer;
}

export interface FusionSearchboxRenderer {
    icon: Icon15;
    placeholderText: PlaceholderText;
    config: Config2;
    trackingParams: string;
    searchEndpoint: SearchEndpoint;
    clearButton: ClearButton;
}

export interface Icon15 {
    iconType: string;
}

export interface PlaceholderText {
    runs: Run44[];
}

export interface Run44 {
    text: string;
}

export interface Config2 {
    webSearchboxConfig: WebSearchboxConfig;
}

export interface WebSearchboxConfig {
    requestLanguage: string;
    requestDomain: string;
    hasOnscreenKeyboard: boolean;
    focusSearchbox: boolean;
}

export interface SearchEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata59;
    searchEndpoint: SearchEndpoint2;
}

export interface CommandMetadata59 {
    webCommandMetadata: WebCommandMetadata59;
}

export interface WebCommandMetadata59 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SearchEndpoint2 {
    query: string;
}

export interface ClearButton {
    buttonRenderer: ButtonRenderer25;
}

export interface ButtonRenderer25 {
    style: string;
    size: string;
    isDisabled: boolean;
    icon: Icon16;
    trackingParams: string;
    accessibilityData: AccessibilityData22;
}

export interface Icon16 {
    iconType: string;
}

export interface AccessibilityData22 {
    accessibilityData: AccessibilityData23;
}

export interface AccessibilityData23 {
    label: string;
}

export interface TopbarButton {
    topbarMenuButtonRenderer?: TopbarMenuButtonRenderer;
    buttonRenderer?: ButtonRenderer26;
}

export interface TopbarMenuButtonRenderer {
    icon: Icon17;
    menuRequest: MenuRequest;
    trackingParams: string;
    accessibility: Accessibility14;
    tooltip: string;
    style: string;
}

export interface Icon17 {
    iconType: string;
}

export interface MenuRequest {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata60;
    signalServiceEndpoint: SignalServiceEndpoint5;
}

export interface CommandMetadata60 {
    webCommandMetadata: WebCommandMetadata60;
}

export interface WebCommandMetadata60 {
    sendPost: boolean;
    apiUrl: string;
}

export interface SignalServiceEndpoint5 {
    signal: string;
    actions: Action7[];
}

export interface Action7 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction8;
}

export interface OpenPopupAction8 {
    popup: Popup8;
    popupType: string;
    beReused: boolean;
}

export interface Popup8 {
    multiPageMenuRenderer: MultiPageMenuRenderer;
}

export interface MultiPageMenuRenderer {
    trackingParams: string;
    style: string;
    showLoadingSpinner: boolean;
}

export interface Accessibility14 {
    accessibilityData: AccessibilityData24;
}

export interface AccessibilityData24 {
    label: string;
}

export interface ButtonRenderer26 {
    style: string;
    size: string;
    text: Text25;
    icon: Icon18;
    navigationEndpoint: NavigationEndpoint13;
    trackingParams: string;
    targetId: string;
}

export interface Text25 {
    runs: Run45[];
}

export interface Run45 {
    text: string;
}

export interface Icon18 {
    iconType: string;
}

export interface NavigationEndpoint13 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata61;
    signInEndpoint: SignInEndpoint9;
}

export interface CommandMetadata61 {
    webCommandMetadata: WebCommandMetadata61;
}

export interface WebCommandMetadata61 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SignInEndpoint9 {
    idamTag: string;
}

export interface HotkeyDialog {
    hotkeyDialogRenderer: HotkeyDialogRenderer;
}

export interface HotkeyDialogRenderer {
    title: Title15;
    sections: Section[];
    dismissButton: DismissButton2;
    trackingParams: string;
}

export interface Title15 {
    runs: Run46[];
}

export interface Run46 {
    text: string;
}

export interface Section {
    hotkeyDialogSectionRenderer: HotkeyDialogSectionRenderer;
}

export interface HotkeyDialogSectionRenderer {
    title: Title16;
    options: Option[];
}

export interface Title16 {
    runs: Run47[];
}

export interface Run47 {
    text: string;
}

export interface Option {
    hotkeyDialogSectionOptionRenderer: HotkeyDialogSectionOptionRenderer;
}

export interface HotkeyDialogSectionOptionRenderer {
    label: Label3;
    hotkey: string;
    hotkeyAccessibilityLabel?: HotkeyAccessibilityLabel;
}

export interface Label3 {
    runs: Run48[];
}

export interface Run48 {
    text: string;
}

export interface HotkeyAccessibilityLabel {
    accessibilityData: AccessibilityData25;
}

export interface AccessibilityData25 {
    label: string;
}

export interface DismissButton2 {
    buttonRenderer: ButtonRenderer27;
}

export interface ButtonRenderer27 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text26;
    trackingParams: string;
}

export interface Text26 {
    runs: Run49[];
}

export interface Run49 {
    text: string;
}

export interface BackButton {
    buttonRenderer: ButtonRenderer28;
}

export interface ButtonRenderer28 {
    trackingParams: string;
    command: Command23;
}

export interface Command23 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata62;
    signalServiceEndpoint: SignalServiceEndpoint6;
}

export interface CommandMetadata62 {
    webCommandMetadata: WebCommandMetadata62;
}

export interface WebCommandMetadata62 {
    sendPost: boolean;
}

export interface SignalServiceEndpoint6 {
    signal: string;
    actions: Action8[];
}

export interface Action8 {
    clickTrackingParams: string;
    signalAction: SignalAction2;
}

export interface SignalAction2 {
    signal: string;
}

export interface ForwardButton {
    buttonRenderer: ButtonRenderer29;
}

export interface ButtonRenderer29 {
    trackingParams: string;
    command: Command24;
}

export interface Command24 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata63;
    signalServiceEndpoint: SignalServiceEndpoint7;
}

export interface CommandMetadata63 {
    webCommandMetadata: WebCommandMetadata63;
}

export interface WebCommandMetadata63 {
    sendPost: boolean;
}

export interface SignalServiceEndpoint7 {
    signal: string;
    actions: Action9[];
}

export interface Action9 {
    clickTrackingParams: string;
    signalAction: SignalAction3;
}

export interface SignalAction3 {
    signal: string;
}

export interface A11ySkipNavigationButton {
    buttonRenderer: ButtonRenderer30;
}

export interface ButtonRenderer30 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text27;
    trackingParams: string;
    command: Command25;
}

export interface Text27 {
    runs: Run50[];
}

export interface Run50 {
    text: string;
}

export interface Command25 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata64;
    signalServiceEndpoint: SignalServiceEndpoint8;
}

export interface CommandMetadata64 {
    webCommandMetadata: WebCommandMetadata64;
}

export interface WebCommandMetadata64 {
    sendPost: boolean;
}

export interface SignalServiceEndpoint8 {
    signal: string;
    actions: Action10[];
}

export interface Action10 {
    clickTrackingParams: string;
    signalAction: SignalAction4;
}

export interface SignalAction4 {
    signal: string;
}

export interface VoiceSearchButton {
    buttonRenderer: ButtonRenderer31;
}

export interface ButtonRenderer31 {
    style: string;
    size: string;
    isDisabled: boolean;
    serviceEndpoint: ServiceEndpoint11;
    icon: Icon20;
    tooltip: string;
    trackingParams: string;
    accessibilityData: AccessibilityData28;
}

export interface ServiceEndpoint11 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata65;
    signalServiceEndpoint: SignalServiceEndpoint9;
}

export interface CommandMetadata65 {
    webCommandMetadata: WebCommandMetadata65;
}

export interface WebCommandMetadata65 {
    sendPost: boolean;
}

export interface SignalServiceEndpoint9 {
    signal: string;
    actions: Action11[];
}

export interface Action11 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction9;
}

export interface OpenPopupAction9 {
    popup: Popup9;
    popupType: string;
}

export interface Popup9 {
    voiceSearchDialogRenderer: VoiceSearchDialogRenderer;
}

export interface VoiceSearchDialogRenderer {
    placeholderHeader: PlaceholderHeader;
    promptHeader: PromptHeader;
    exampleQuery1: ExampleQuery1;
    exampleQuery2: ExampleQuery2;
    promptMicrophoneLabel: PromptMicrophoneLabel;
    loadingHeader: LoadingHeader;
    connectionErrorHeader: ConnectionErrorHeader;
    connectionErrorMicrophoneLabel: ConnectionErrorMicrophoneLabel;
    permissionsHeader: PermissionsHeader;
    permissionsSubtext: PermissionsSubtext;
    disabledHeader: DisabledHeader;
    disabledSubtext: DisabledSubtext;
    microphoneButtonAriaLabel: MicrophoneButtonAriaLabel;
    exitButton: ExitButton;
    trackingParams: string;
    microphoneOffPromptHeader: MicrophoneOffPromptHeader;
}

export interface PlaceholderHeader {
    runs: Run51[];
}

export interface Run51 {
    text: string;
}

export interface PromptHeader {
    runs: Run52[];
}

export interface Run52 {
    text: string;
}

export interface ExampleQuery1 {
    runs: Run53[];
}

export interface Run53 {
    text: string;
}

export interface ExampleQuery2 {
    runs: Run54[];
}

export interface Run54 {
    text: string;
}

export interface PromptMicrophoneLabel {
    runs: Run55[];
}

export interface Run55 {
    text: string;
}

export interface LoadingHeader {
    runs: Run56[];
}

export interface Run56 {
    text: string;
}

export interface ConnectionErrorHeader {
    runs: Run57[];
}

export interface Run57 {
    text: string;
}

export interface ConnectionErrorMicrophoneLabel {
    runs: Run58[];
}

export interface Run58 {
    text: string;
}

export interface PermissionsHeader {
    runs: Run59[];
}

export interface Run59 {
    text: string;
}

export interface PermissionsSubtext {
    runs: Run60[];
}

export interface Run60 {
    text: string;
}

export interface DisabledHeader {
    runs: Run61[];
}

export interface Run61 {
    text: string;
}

export interface DisabledSubtext {
    runs: Run62[];
}

export interface Run62 {
    text: string;
}

export interface MicrophoneButtonAriaLabel {
    runs: Run63[];
}

export interface Run63 {
    text: string;
}

export interface ExitButton {
    buttonRenderer: ButtonRenderer32;
}

export interface ButtonRenderer32 {
    style: string;
    size: string;
    isDisabled: boolean;
    icon: Icon19;
    trackingParams: string;
    accessibilityData: AccessibilityData26;
}

export interface Icon19 {
    iconType: string;
}

export interface AccessibilityData26 {
    accessibilityData: AccessibilityData27;
}

export interface AccessibilityData27 {
    label: string;
}

export interface MicrophoneOffPromptHeader {
    runs: Run64[];
}

export interface Run64 {
    text: string;
}

export interface Icon20 {
    iconType: string;
}

export interface AccessibilityData28 {
    accessibilityData: AccessibilityData29;
}

export interface AccessibilityData29 {
    label: string;
}

export interface PageVisualEffect {
    cinematicContainerRenderer: CinematicContainerRenderer;
}

export interface CinematicContainerRenderer {
    presentationStyle: string;
    config: Config3;
}

export interface Config3 {
    lightThemeBackgroundColor: number;
    darkThemeBackgroundColor: number;
    animationConfig: AnimationConfig;
    colorSourceSizeMultiplier: number;
    applyClientImageBlur: boolean;
    bottomColorSourceHeightMultiplier: number;
    maxBottomColorSourceHeight: number;
    colorSourceWidthMultiplier: number;
    colorSourceHeightMultiplier: number;
    blurStrength: number;
    watchFullscreenConfig: WatchFullscreenConfig;
    enableInLightTheme: boolean;
}

export interface AnimationConfig {
    minImageUpdateIntervalMs: number;
    crossfadeDurationMs: number;
    crossfadeStartOffset: number;
    maxFrameRate: number;
}

export interface WatchFullscreenConfig {
    colorSourceWidthMultiplier: number;
    colorSourceHeightMultiplier: number;
    scrimWidthMultiplier: number;
    scrimHeightMultiplier: number;
    scrimGradientConfig: ScrimGradientConfig;
}

export interface ScrimGradientConfig {
    gradientType: string;
    gradientStartPointX: number;
    gradientStartPointY: number;
    gradientEndPointX: number;
    gradientEndPointY: number;
}

export interface FrameworkUpdates2 {
    entityBatchUpdate: EntityBatchUpdate2;
}

export interface EntityBatchUpdate2 {
    mutations: Mutation2[];
    timestamp: Timestamp2;
}

export interface Mutation2 {
    entityKey: string;
    type: string;
    options?: Options;
    payload?: Payload2;
}

export interface Options {
    persistenceOption: string;
}

export interface Payload2 {
    subscriptionStateEntity?: SubscriptionStateEntity;
    likeStatusEntity?: LikeStatusEntity2;
    macroMarkersListEntity?: MacroMarkersListEntity;
}

export interface SubscriptionStateEntity {
    key: string;
    subscribed: boolean;
}

export interface LikeStatusEntity2 {
    key: string;
    likeStatus: string;
}

export interface MacroMarkersListEntity {
    key: string;
    externalVideoId: string;
    markersList: MarkersList;
}

export interface MarkersList {
    markerType: string;
    markers: Marker[];
    markersMetadata: MarkersMetadata;
    markersDecoration: MarkersDecoration;
}

export interface Marker {
    startMillis: string;
    durationMillis: string;
    intensityScoreNormalized: number;
}

export interface MarkersMetadata {
    heatmapMetadata: HeatmapMetadata;
}

export interface HeatmapMetadata {
    maxHeightDp: number;
    minHeightDp: number;
    showHideAnimationDurationMillis: number;
}

export interface MarkersDecoration {
    timedMarkerDecorations: TimedMarkerDecoration[];
}

export interface TimedMarkerDecoration {
    visibleTimeRangeStartMillis: number;
    visibleTimeRangeEndMillis: number;
    decorationTimeMillis: number;
    label: Label4;
    icon: string;
}

export interface Label4 {
    runs: Run65[];
}

export interface Run65 {
    text: string;
}

export interface Timestamp2 {
    seconds: string;
    nanos: number;
}

export interface Format2 {
    mimeType: string;
    qualityLabel?: string;
    bitrate: number;
    audioBitrate?: number;
    itag: number;
    width?: number;
    height?: number;
    initRange?: InitRange2;
    indexRange?: IndexRange2;
    lastModified: string;
    contentLength?: string;
    quality: string;
    fps?: number;
    projectionType: string;
    averageBitrate?: number;
    approxDurationMs: string;
    s: string;
    sp: string;
    url: string;
    hasVideo: boolean;
    hasAudio: boolean;
    container: string;
    codecs: string;
    videoCodec?: string;
    audioCodec?: string;
    isLive: boolean;
    isHLS: boolean;
    isDashMPD: boolean;
    colorInfo?: ColorInfo2;
    highReplication?: boolean;
    audioQuality?: string;
    audioSampleRate?: string;
    audioChannels?: number;
    loudnessDb?: number;
}

export interface InitRange2 {
    start: string;
    end: string;
}

export interface IndexRange2 {
    start: string;
    end: string;
}

export interface ColorInfo2 {
    primaries: string;
    transferCharacteristics: string;
    matrixCoefficients: string;
}

export interface VideoDetails3 {
    embed: Embed2;
    title: string;
    description: string;
    lengthSeconds: string;
    ownerProfileUrl: string;
    externalChannelId: string;
    isFamilySafe: boolean;
    availableCountries: string[];
    isUnlisted: boolean;
    hasYpcMetadata: boolean;
    viewCount: string;
    category: string;
    publishDate: string;
    ownerChannelName: string;
    uploadDate: string;
    videoId: string;
    keywords: string[];
    channelId: string;
    isOwnerViewing: boolean;
    isCrawlable: boolean;
    allowRatings: boolean;
    author: Author;
    isPrivate: boolean;
    isUnpluggedCorpus: boolean;
    isLiveContent: boolean;
    media: Media;
    likes: any;
    dislikes: any;
    age_restricted: boolean;
    video_url: string;
    storyboards: Storyboard[];
    chapters: any[];
    thumbnails: Thumbnail15[];
}

export interface Embed2 {
    iframeUrl: string;
    width: number;
    height: number;
}

export interface Author {
    id: string;
    name: string;
    user: string;
    channel_url: string;
    external_channel_url: string;
    user_url: string;
    thumbnails: Thumbnail14[];
    verified: boolean;
    subscriber_count: number;
}

export interface Thumbnail14 {
    url: string;
    width: number;
    height: number;
}

export interface Media { }

export interface Storyboard {
    templateUrl: string;
    thumbnailWidth: number;
    thumbnailHeight: number;
    thumbnailCount: number;
    interval: number;
    columns: number;
    rows: number;
    storyboardCount: number;
}

export interface Thumbnail15 {
    url: string;
    width: number;
    height: number;
}

export interface VideoBasicInfo {
    page: string;
    player_response: PlayerResponse;
    response: Response;
    html5player: string;
    formats: Format2[];
    related_videos: any[];
    videoDetails: VideoDetails3;
    full: boolean;
}

export interface PlayerResponse {
    responseContext: ResponseContext;
    playabilityStatus: PlayabilityStatus;
    streamingData: StreamingData;
    playerAds: PlayerAd[];
    playbackTracking: PlaybackTracking;
    videoDetails: VideoDetails;
    annotations: Annotation[];
    playerConfig: PlayerConfig;
    storyboards: Storyboards;
    microformat: Microformat;
    cards: Cards;
    trackingParams: string;
    attestation: Attestation;
    messages: Message2[];
    adPlacements: AdPlacement[];
    adSlots: AdSlot[];
    adBreakHeartbeatParams: string;
    frameworkUpdates: FrameworkUpdates;
}

export interface ResponseContext {
    serviceTrackingParams: ServiceTrackingParam[];
    maxAgeSeconds: number;
    mainAppWebResponseContext: MainAppWebResponseContext;
    webResponseContextExtensionData: WebResponseContextExtensionData;
}

export interface ServiceTrackingParam {
    service: string;
    params: Param[];
}

export interface Param {
    key: string;
    value: string;
}

export interface MainAppWebResponseContext {
    loggedOut: boolean;
    trackingParam: string;
}

export interface WebResponseContextExtensionData {
    hasDecorated: boolean;
}

export interface PlayabilityStatus {
    status: string;
    playableInEmbed: boolean;
    miniplayer: Miniplayer;
    contextParams: string;
}

export interface Miniplayer {
    miniplayerRenderer: MiniplayerRenderer;
}

export interface MiniplayerRenderer {
    playbackMode: string;
}

export interface StreamingData {
    expiresInSeconds: string;
    formats: Format[];
    adaptiveFormats: AdaptiveFormat[];
}

export interface Format {
    itag: number;
    mimeType: string;
    bitrate: number;
    width: number;
    height: number;
    lastModified: string;
    quality: string;
    fps: number;
    qualityLabel: string;
    projectionType: string;
    audioQuality: string;
    approxDurationMs: string;
    audioSampleRate: string;
    audioChannels: number;
    s: string;
    sp: string;
    url: string;
}

export interface AdaptiveFormat {
    itag: number;
    mimeType: string;
    bitrate: number;
    width?: number;
    height?: number;
    initRange: InitRange;
    indexRange: IndexRange;
    lastModified: string;
    contentLength: string;
    quality: string;
    fps?: number;
    qualityLabel?: string;
    projectionType: string;
    averageBitrate: number;
    approxDurationMs: string;
    s: string;
    sp: string;
    url: string;
    colorInfo?: ColorInfo;
    highReplication?: boolean;
    audioQuality?: string;
    audioSampleRate?: string;
    audioChannels?: number;
    loudnessDb?: number;
}

export interface InitRange {
    start: string;
    end: string;
}

export interface IndexRange {
    start: string;
    end: string;
}

export interface ColorInfo {
    primaries: string;
    transferCharacteristics: string;
    matrixCoefficients: string;
}

export interface PlayerAd {
    playerLegacyDesktopWatchAdsRenderer: PlayerLegacyDesktopWatchAdsRenderer;
}

export interface PlayerLegacyDesktopWatchAdsRenderer {
    playerAdParams: PlayerAdParams;
    gutParams: GutParams;
    showCompanion: boolean;
    showInstream: boolean;
    useGut: boolean;
}

export interface PlayerAdParams {
    showContentThumbnail: boolean;
    enabledEngageTypes: string;
}

export interface GutParams {
    tag: string;
}

export interface PlaybackTracking {
    videostatsPlaybackUrl: VideostatsPlaybackUrl;
    videostatsDelayplayUrl: VideostatsDelayplayUrl;
    videostatsWatchtimeUrl: VideostatsWatchtimeUrl;
    ptrackingUrl: PtrackingUrl;
    qoeUrl: QoeUrl;
    atrUrl: AtrUrl;
    videostatsScheduledFlushWalltimeSeconds: number[];
    videostatsDefaultFlushIntervalSeconds: number;
}

export interface VideostatsPlaybackUrl {
    baseUrl: string;
}

export interface VideostatsDelayplayUrl {
    baseUrl: string;
}

export interface VideostatsWatchtimeUrl {
    baseUrl: string;
}

export interface PtrackingUrl {
    baseUrl: string;
}

export interface QoeUrl {
    baseUrl: string;
}

export interface AtrUrl {
    baseUrl: string;
    elapsedMediaTimeSeconds: number;
}

export interface VideoDetails {
    videoId: string;
    title: string;
    lengthSeconds: string;
    keywords: string[];
    channelId: string;
    isOwnerViewing: boolean;
    shortDescription: string;
    isCrawlable: boolean;
    thumbnail: Thumbnail;
    allowRatings: boolean;
    viewCount: string;
    author: string;
    isPrivate: boolean;
    isUnpluggedCorpus: boolean;
    isLiveContent: boolean;
}

export interface Thumbnail {
    thumbnails: Thumbnail2[];
}

export interface Thumbnail2 {
    url: string;
    width: number;
    height: number;
}

export interface Annotation {
    playerAnnotationsExpandedRenderer: PlayerAnnotationsExpandedRenderer;
}

export interface PlayerAnnotationsExpandedRenderer {
    featuredChannel: FeaturedChannel;
    allowSwipeDismiss: boolean;
    annotationId: string;
}

export interface FeaturedChannel {
    startTimeMs: string;
    endTimeMs: string;
    watermark: Watermark;
    trackingParams: string;
    navigationEndpoint: NavigationEndpoint;
    channelName: string;
    subscribeButton: SubscribeButton;
}

export interface Watermark {
    thumbnails: Thumbnail3[];
}

export interface Thumbnail3 {
    url: string;
    width: number;
    height: number;
}

export interface NavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata;
    browseEndpoint: BrowseEndpoint;
}

export interface CommandMetadata {
    webCommandMetadata: WebCommandMetadata;
}

export interface WebCommandMetadata {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint {
    browseId: string;
}

export interface SubscribeButton {
    subscribeButtonRenderer: SubscribeButtonRenderer;
}

export interface SubscribeButtonRenderer {
    buttonText: ButtonText;
    subscribed: boolean;
    enabled: boolean;
    type: string;
    channelId: string;
    showPreferences: boolean;
    subscribedButtonText: SubscribedButtonText;
    unsubscribedButtonText: UnsubscribedButtonText;
    trackingParams: string;
    unsubscribeButtonText: UnsubscribeButtonText;
    serviceEndpoints: ServiceEndpoint[];
    subscribeAccessibility: SubscribeAccessibility;
    unsubscribeAccessibility: UnsubscribeAccessibility;
    signInEndpoint: SignInEndpoint;
}

export interface ButtonText {
    runs: Run[];
}

export interface Run {
    text: string;
}

export interface SubscribedButtonText {
    runs: Run2[];
}

export interface Run2 {
    text: string;
}

export interface UnsubscribedButtonText {
    runs: Run3[];
}

export interface Run3 {
    text: string;
}

export interface UnsubscribeButtonText {
    runs: Run4[];
}

export interface Run4 {
    text: string;
}

export interface ServiceEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata2;
    subscribeEndpoint?: SubscribeEndpoint;
    signalServiceEndpoint?: SignalServiceEndpoint;
}

export interface CommandMetadata2 {
    webCommandMetadata: WebCommandMetadata2;
}

export interface WebCommandMetadata2 {
    sendPost: boolean;
    apiUrl?: string;
}

export interface SubscribeEndpoint {
    channelIds: string[];
    params: string;
}

export interface SignalServiceEndpoint {
    signal: string;
    actions: Action[];
}

export interface Action {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction;
}

export interface OpenPopupAction {
    popup: Popup;
    popupType: string;
}

export interface Popup {
    confirmDialogRenderer: ConfirmDialogRenderer;
}

export interface ConfirmDialogRenderer {
    trackingParams: string;
    dialogMessages: DialogMessage[];
    confirmButton: ConfirmButton;
    cancelButton: CancelButton;
    primaryIsCancel: boolean;
}

export interface DialogMessage {
    runs: Run5[];
}

export interface Run5 {
    text: string;
}

export interface ConfirmButton {
    buttonRenderer: ButtonRenderer;
}

export interface ButtonRenderer {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text;
    serviceEndpoint: ServiceEndpoint2;
    accessibility: Accessibility;
    trackingParams: string;
}

export interface Text {
    runs: Run6[];
}

export interface Run6 {
    text: string;
}

export interface ServiceEndpoint2 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata3;
    unsubscribeEndpoint: UnsubscribeEndpoint;
}

export interface CommandMetadata3 {
    webCommandMetadata: WebCommandMetadata3;
}

export interface WebCommandMetadata3 {
    sendPost: boolean;
    apiUrl: string;
}

export interface UnsubscribeEndpoint {
    channelIds: string[];
    params: string;
}

export interface Accessibility {
    label: string;
}

export interface CancelButton {
    buttonRenderer: ButtonRenderer2;
}

export interface ButtonRenderer2 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text2;
    accessibility: Accessibility2;
    trackingParams: string;
}

export interface Text2 {
    runs: Run7[];
}

export interface Run7 {
    text: string;
}

export interface Accessibility2 {
    label: string;
}

export interface SubscribeAccessibility {
    accessibilityData: AccessibilityData;
}

export interface AccessibilityData {
    label: string;
}

export interface UnsubscribeAccessibility {
    accessibilityData: AccessibilityData2;
}

export interface AccessibilityData2 {
    label: string;
}

export interface SignInEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata4;
}

export interface CommandMetadata4 {
    webCommandMetadata: WebCommandMetadata4;
}

export interface WebCommandMetadata4 {
    url: string;
}

export interface PlayerConfig {
    audioConfig: AudioConfig;
    streamSelectionConfig: StreamSelectionConfig;
    mediaCommonConfig: MediaCommonConfig;
    webPlayerConfig: WebPlayerConfig;
}

export interface AudioConfig {
    loudnessDb: number;
    perceptualLoudnessDb: number;
    enablePerFormatLoudness: boolean;
}

export interface StreamSelectionConfig {
    maxBitrate: string;
}

export interface MediaCommonConfig {
    dynamicReadaheadConfig: DynamicReadaheadConfig;
}

export interface DynamicReadaheadConfig {
    maxReadAheadMediaTimeMs: number;
    minReadAheadMediaTimeMs: number;
    readAheadGrowthRateMs: number;
}

export interface WebPlayerConfig {
    useCobaltTvosDash: boolean;
    webPlayerActionsPorting: WebPlayerActionsPorting;
}

export interface WebPlayerActionsPorting {
    getSharePanelCommand: GetSharePanelCommand;
    subscribeCommand: SubscribeCommand;
    unsubscribeCommand: UnsubscribeCommand;
    addToWatchLaterCommand: AddToWatchLaterCommand;
    removeFromWatchLaterCommand: RemoveFromWatchLaterCommand;
}

export interface GetSharePanelCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata5;
    webPlayerShareEntityServiceEndpoint: WebPlayerShareEntityServiceEndpoint;
}

export interface CommandMetadata5 {
    webCommandMetadata: WebCommandMetadata5;
}

export interface WebCommandMetadata5 {
    sendPost: boolean;
    apiUrl: string;
}

export interface WebPlayerShareEntityServiceEndpoint {
    serializedShareEntity: string;
}

export interface SubscribeCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata6;
    subscribeEndpoint: SubscribeEndpoint2;
}

export interface CommandMetadata6 {
    webCommandMetadata: WebCommandMetadata6;
}

export interface WebCommandMetadata6 {
    sendPost: boolean;
    apiUrl: string;
}

export interface SubscribeEndpoint2 {
    channelIds: string[];
    params: string;
}

export interface UnsubscribeCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata7;
    unsubscribeEndpoint: UnsubscribeEndpoint2;
}

export interface CommandMetadata7 {
    webCommandMetadata: WebCommandMetadata7;
}

export interface WebCommandMetadata7 {
    sendPost: boolean;
    apiUrl: string;
}

export interface UnsubscribeEndpoint2 {
    channelIds: string[];
    params: string;
}

export interface AddToWatchLaterCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata8;
    playlistEditEndpoint: PlaylistEditEndpoint;
}

export interface CommandMetadata8 {
    webCommandMetadata: WebCommandMetadata8;
}

export interface WebCommandMetadata8 {
    sendPost: boolean;
    apiUrl: string;
}

export interface PlaylistEditEndpoint {
    playlistId: string;
    actions: Action2[];
}

export interface Action2 {
    addedVideoId: string;
    action: string;
}

export interface RemoveFromWatchLaterCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata9;
    playlistEditEndpoint: PlaylistEditEndpoint2;
}

export interface CommandMetadata9 {
    webCommandMetadata: WebCommandMetadata9;
}

export interface WebCommandMetadata9 {
    sendPost: boolean;
    apiUrl: string;
}

export interface PlaylistEditEndpoint2 {
    playlistId: string;
    actions: Action3[];
}

export interface Action3 {
    action: string;
    removedVideoId: string;
}

export interface Storyboards {
    playerStoryboardSpecRenderer: PlayerStoryboardSpecRenderer;
}

export interface PlayerStoryboardSpecRenderer {
    spec: string;
    recommendedLevel: number;
    highResolutionRecommendedLevel: number;
}

export interface Microformat {
    playerMicroformatRenderer: PlayerMicroformatRenderer;
}

export interface PlayerMicroformatRenderer {
    thumbnail: Thumbnail4;
    embed: Embed;
    title: Title;
    description: Description;
    lengthSeconds: string;
    ownerProfileUrl: string;
    externalChannelId: string;
    isFamilySafe: boolean;
    availableCountries: string[];
    isUnlisted: boolean;
    hasYpcMetadata: boolean;
    viewCount: string;
    category: string;
    publishDate: string;
    ownerChannelName: string;
    uploadDate: string;
}

export interface Thumbnail4 {
    thumbnails: Thumbnail5[];
}

export interface Thumbnail5 {
    url: string;
    width: number;
    height: number;
}

export interface Embed {
    iframeUrl: string;
    width: number;
    height: number;
}

export interface Title {
    simpleText: string;
}

export interface Description {
    simpleText: string;
}

export interface Cards {
    cardCollectionRenderer: CardCollectionRenderer;
}

export interface CardCollectionRenderer {
    cards: Card[];
    headerText: HeaderText;
    icon: Icon;
    closeButton: CloseButton;
    trackingParams: string;
    allowTeaserDismiss: boolean;
    logIconVisibilityUpdates: boolean;
}

export interface Card {
    cardRenderer: CardRenderer;
}

export interface CardRenderer {
    teaser: Teaser;
    cueRanges: CueRange[];
    trackingParams: string;
}

export interface Teaser {
    simpleCardTeaserRenderer: SimpleCardTeaserRenderer;
}

export interface SimpleCardTeaserRenderer {
    message: Message;
    trackingParams: string;
    prominent: boolean;
    logVisibilityUpdates: boolean;
    onTapCommand: OnTapCommand;
}

export interface Message {
    simpleText: string;
}

export interface OnTapCommand {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction;
}

export interface ChangeEngagementPanelVisibilityAction {
    targetId: string;
    visibility: string;
}

export interface CueRange {
    startCardActiveMs: string;
    endCardActiveMs: string;
    teaserDurationMs: string;
    iconAfterTeaserMs: string;
}

export interface HeaderText {
    simpleText: string;
}

export interface Icon {
    infoCardIconRenderer: InfoCardIconRenderer;
}

export interface InfoCardIconRenderer {
    trackingParams: string;
}

export interface CloseButton {
    infoCardIconRenderer: InfoCardIconRenderer2;
}

export interface InfoCardIconRenderer2 {
    trackingParams: string;
}

export interface Attestation {
    playerAttestationRenderer: PlayerAttestationRenderer;
}

export interface PlayerAttestationRenderer {
    challenge: string;
    botguardData: BotguardData;
}

export interface BotguardData {
    program: string;
    interpreterSafeUrl: InterpreterSafeUrl;
    serverEnvironment: number;
}

export interface InterpreterSafeUrl {
    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: string;
}

export interface Message2 {
    mealbarPromoRenderer: MealbarPromoRenderer;
}

export interface MealbarPromoRenderer {
    messageTexts: MessageText[];
    actionButton: ActionButton;
    dismissButton: DismissButton;
    triggerCondition: string;
    style: string;
    trackingParams: string;
    impressionEndpoints: ImpressionEndpoint[];
    isVisible: boolean;
    messageTitle: MessageTitle;
}

export interface MessageText {
    runs: Run8[];
}

export interface Run8 {
    text: string;
}

export interface ActionButton {
    buttonRenderer: ButtonRenderer3;
}

export interface ButtonRenderer3 {
    style: string;
    size: string;
    text: Text3;
    trackingParams: string;
    command: Command;
}

export interface Text3 {
    runs: Run9[];
}

export interface Run9 {
    text: string;
}

export interface Command {
    clickTrackingParams: string;
    commandExecutorCommand: CommandExecutorCommand;
}

export interface CommandExecutorCommand {
    commands: Command2[];
}

export interface Command2 {
    clickTrackingParams?: string;
    commandMetadata: CommandMetadata10;
    urlEndpoint?: UrlEndpoint;
    feedbackEndpoint?: FeedbackEndpoint;
}

export interface CommandMetadata10 {
    webCommandMetadata: WebCommandMetadata10;
}

export interface WebCommandMetadata10 {
    url?: string;
    webPageType?: string;
    rootVe?: number;
    sendPost?: boolean;
    apiUrl?: string;
}

export interface UrlEndpoint {
    url: string;
    target: string;
}

export interface FeedbackEndpoint {
    feedbackToken: string;
    uiActions: UiActions;
}

export interface UiActions {
    hideEnclosingContainer: boolean;
}

export interface DismissButton {
    buttonRenderer: ButtonRenderer4;
}

export interface ButtonRenderer4 {
    style: string;
    size: string;
    text: Text4;
    trackingParams: string;
    command: Command3;
}

export interface Text4 {
    runs: Run10[];
}

export interface Run10 {
    text: string;
}

export interface Command3 {
    clickTrackingParams: string;
    commandExecutorCommand: CommandExecutorCommand2;
}

export interface CommandExecutorCommand2 {
    commands: Command4[];
}

export interface Command4 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata11;
    feedbackEndpoint: FeedbackEndpoint2;
}

export interface CommandMetadata11 {
    webCommandMetadata: WebCommandMetadata11;
}

export interface WebCommandMetadata11 {
    sendPost: boolean;
    apiUrl: string;
}

export interface FeedbackEndpoint2 {
    feedbackToken: string;
    uiActions: UiActions2;
}

export interface UiActions2 {
    hideEnclosingContainer: boolean;
}

export interface ImpressionEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata12;
    feedbackEndpoint: FeedbackEndpoint3;
}

export interface CommandMetadata12 {
    webCommandMetadata: WebCommandMetadata12;
}

export interface WebCommandMetadata12 {
    sendPost: boolean;
    apiUrl: string;
}

export interface FeedbackEndpoint3 {
    feedbackToken: string;
    uiActions: UiActions3;
}

export interface UiActions3 {
    hideEnclosingContainer: boolean;
}

export interface MessageTitle {
    runs: Run11[];
}

export interface Run11 {
    text: string;
}

export interface AdPlacement {
    adPlacementRenderer: AdPlacementRenderer;
}

export interface AdPlacementRenderer {
    config: Config;
    renderer: Renderer;
    adSlotLoggingData: AdSlotLoggingData;
}

export interface Config {
    adPlacementConfig: AdPlacementConfig;
}

export interface AdPlacementConfig {
    kind: string;
    adTimeOffset: AdTimeOffset;
    hideCueRangeMarker: boolean;
}

export interface AdTimeOffset {
    offsetStartMilliseconds: string;
    offsetEndMilliseconds: string;
}

export interface Renderer {
    instreamVideoAdRenderer?: InstreamVideoAdRenderer;
    adBreakServiceRenderer?: AdBreakServiceRenderer;
}

export interface InstreamVideoAdRenderer {
    playerOverlay: PlayerOverlay;
    trackingParams: string;
    layoutId: string;
    associatedPlayerBytesLayoutId: string;
}

export interface PlayerOverlay {
    instreamAdPlayerOverlayRenderer: InstreamAdPlayerOverlayRenderer;
}

export interface InstreamAdPlayerOverlayRenderer {
    skipOrPreviewRenderer: SkipOrPreviewRenderer;
    trackingParams: string;
    visitAdvertiserRenderer: VisitAdvertiserRenderer;
    adBadgeRenderer: AdBadgeRenderer;
    adDurationRemaining: AdDurationRemaining;
    adInfoRenderer: AdInfoRenderer;
    adLayoutLoggingData: AdLayoutLoggingData;
    elementId: string;
    inPlayerSlotId: string;
    inPlayerLayoutId: string;
}

export interface SkipOrPreviewRenderer {
    adPreviewRenderer: AdPreviewRenderer;
}

export interface AdPreviewRenderer {
    thumbnail: Thumbnail6;
    trackingParams: string;
    staticPreview: StaticPreview;
}

export interface Thumbnail6 {
    thumbnail: Thumbnail7;
    trackingParams: string;
}

export interface Thumbnail7 {
    thumbnails: Thumbnail8[];
}

export interface Thumbnail8 {
    url: string;
    width: number;
    height: number;
}

export interface StaticPreview {
    text: string;
    isTemplated: boolean;
    trackingParams: string;
}

export interface VisitAdvertiserRenderer {
    buttonRenderer: ButtonRenderer5;
}

export interface ButtonRenderer5 {
    style: string;
    text: Text5;
    icon: Icon2;
    navigationEndpoint: NavigationEndpoint2;
    trackingParams: string;
}

export interface Text5 {
    simpleText: string;
}

export interface Icon2 {
    iconType: string;
}

export interface NavigationEndpoint2 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata13;
    urlEndpoint: UrlEndpoint2;
}

export interface CommandMetadata13 {
    webCommandMetadata: WebCommandMetadata13;
}

export interface WebCommandMetadata13 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface UrlEndpoint2 {
    url: string;
    target: string;
}

export interface AdBadgeRenderer {
    simpleAdBadgeRenderer: SimpleAdBadgeRenderer;
}

export interface SimpleAdBadgeRenderer {
    text: Text6;
    trackingParams: string;
}

export interface Text6 {
    text: string;
    isTemplated: boolean;
    trackingParams: string;
}

export interface AdDurationRemaining {
    adDurationRemainingRenderer: AdDurationRemainingRenderer;
}

export interface AdDurationRemainingRenderer {
    templatedCountdown: TemplatedCountdown;
    trackingParams: string;
}

export interface TemplatedCountdown {
    templatedAdText: TemplatedAdText;
}

export interface TemplatedAdText {
    text: string;
    isTemplated: boolean;
    trackingParams: string;
}

export interface AdInfoRenderer {
    adHoverTextButtonRenderer: AdHoverTextButtonRenderer;
}

export interface AdHoverTextButtonRenderer {
    button: Button;
    hoverText: HoverText;
    trackingParams: string;
}

export interface Button {
    buttonRenderer: ButtonRenderer6;
}

export interface ButtonRenderer6 {
    style: string;
    size: string;
    isDisabled: boolean;
    serviceEndpoint: ServiceEndpoint3;
    icon: Icon3;
    trackingParams: string;
    accessibilityData: AccessibilityData3;
}

export interface ServiceEndpoint3 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction2;
}

export interface OpenPopupAction2 {
    popup: Popup2;
    popupType: string;
}

export interface Popup2 {
    aboutThisAdRenderer: AboutThisAdRenderer;
}

export interface AboutThisAdRenderer {
    url: Url;
    trackingParams: string;
}

export interface Url {
    privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: string;
}

export interface Icon3 {
    iconType: string;
}

export interface AccessibilityData3 {
    accessibilityData: AccessibilityData4;
}

export interface AccessibilityData4 {
    label: string;
}

export interface HoverText {
    simpleText: string;
}

export interface AdLayoutLoggingData {
    serializedAdServingDataEntry: string;
}

export interface AdBreakServiceRenderer {
    prefetchMilliseconds: string;
    getAdBreakUrl: string;
}

export interface AdSlotLoggingData {
    serializedSlotAdServingDataEntry: string;
}

export interface AdSlot {
    adSlotRenderer: AdSlotRenderer;
}

export interface AdSlotRenderer {
    adSlotMetadata: AdSlotMetadata;
    fulfillmentContent: FulfillmentContent;
    slotEntryTrigger: SlotEntryTrigger;
    slotFulfillmentTriggers: SlotFulfillmentTrigger[];
    slotExpirationTriggers: SlotExpirationTrigger[];
}

export interface AdSlotMetadata {
    slotId: string;
    slotType: string;
    adSlotLoggingData: AdSlotLoggingData2;
    triggerEvent: string;
}

export interface AdSlotLoggingData2 {
    serializedSlotAdServingDataEntry: string;
}

export interface FulfillmentContent {
    fulfilledLayout: FulfilledLayout;
}

export interface FulfilledLayout {
    playerBytesAdLayoutRenderer: PlayerBytesAdLayoutRenderer;
}

export interface PlayerBytesAdLayoutRenderer {
    adLayoutMetadata: AdLayoutMetadata;
    renderingContent: RenderingContent;
    layoutExitNormalTriggers: LayoutExitNormalTrigger[];
    layoutExitMuteTriggers: LayoutExitMuteTrigger[];
}

export interface AdLayoutMetadata {
    layoutId: string;
    layoutType: string;
    adLayoutLoggingData: AdLayoutLoggingData2;
}

export interface AdLayoutLoggingData2 {
    serializedAdServingDataEntry: string;
}

export interface RenderingContent {
    instreamVideoAdRenderer: InstreamVideoAdRenderer2;
}

export interface InstreamVideoAdRenderer2 {
    pings: Pings;
    clickthroughEndpoint: ClickthroughEndpoint;
    csiParameters: CsiParameter[];
    playerVars: string;
    elementId: string;
    trackingParams: string;
    externalVideoId: string;
    adLayoutLoggingData: AdLayoutLoggingData3;
    layoutId: string;
}

export interface Pings {
    impressionPings: ImpressionPing[];
    errorPings: ErrorPing[];
    mutePings: MutePing[];
    unmutePings: UnmutePing[];
    pausePings: PausePing[];
    rewindPings: RewindPing[];
    resumePings: ResumePing[];
    closePings: ClosePing[];
    clickthroughPings: ClickthroughPing[];
    fullscreenPings: FullscreenPing[];
    activeViewViewablePings: ActiveViewViewablePing[];
    endFullscreenPings: EndFullscreenPing[];
    activeViewMeasurablePings: ActiveViewMeasurablePing[];
    abandonPings: AbandonPing[];
    activeViewFullyViewableAudibleHalfDurationPings: ActiveViewFullyViewableAudibleHalfDurationPing[];
    startPings: StartPing[];
    firstQuartilePings: FirstQuartilePing[];
    secondQuartilePings: SecondQuartilePing[];
    thirdQuartilePings: ThirdQuartilePing[];
    completePings: CompletePing[];
    activeViewTracking: ActiveViewTracking;
}

export interface ImpressionPing {
    baseUrl: string;
}

export interface ErrorPing {
    baseUrl: string;
}

export interface MutePing {
    baseUrl: string;
}

export interface UnmutePing {
    baseUrl: string;
}

export interface PausePing {
    baseUrl: string;
}

export interface RewindPing {
    baseUrl: string;
}

export interface ResumePing {
    baseUrl: string;
}

export interface ClosePing {
    baseUrl: string;
}

export interface ClickthroughPing {
    baseUrl: string;
}

export interface FullscreenPing {
    baseUrl: string;
}

export interface ActiveViewViewablePing {
    baseUrl: string;
}

export interface EndFullscreenPing {
    baseUrl: string;
}

export interface ActiveViewMeasurablePing {
    baseUrl: string;
}

export interface AbandonPing {
    baseUrl: string;
}

export interface ActiveViewFullyViewableAudibleHalfDurationPing {
    baseUrl: string;
}

export interface StartPing {
    baseUrl: string;
}

export interface FirstQuartilePing {
    baseUrl: string;
}

export interface SecondQuartilePing {
    baseUrl: string;
}

export interface ThirdQuartilePing {
    baseUrl: string;
}

export interface CompletePing {
    baseUrl: string;
}

export interface ActiveViewTracking {
    trafficType: string;
}

export interface ClickthroughEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata14;
    urlEndpoint: UrlEndpoint3;
}

export interface CommandMetadata14 {
    webCommandMetadata: WebCommandMetadata14;
}

export interface WebCommandMetadata14 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface UrlEndpoint3 {
    url: string;
    target: string;
}

export interface CsiParameter {
    key: string;
    value: string;
}

export interface AdLayoutLoggingData3 {
    serializedAdServingDataEntry: string;
}

export interface LayoutExitNormalTrigger {
    id: string;
    onLayoutSelfExitRequestedTrigger: OnLayoutSelfExitRequestedTrigger;
}

export interface OnLayoutSelfExitRequestedTrigger {
    triggeringLayoutId: string;
}

export interface LayoutExitMuteTrigger {
    id: string;
    skipRequestedTrigger: SkipRequestedTrigger;
}

export interface SkipRequestedTrigger {
    triggeringLayoutId: string;
}

export interface SlotEntryTrigger {
    id: string;
    beforeContentVideoIdStartedTrigger: BeforeContentVideoIdStartedTrigger;
}

export interface BeforeContentVideoIdStartedTrigger { }

export interface SlotFulfillmentTrigger {
    id: string;
    slotIdEnteredTrigger: SlotIdEnteredTrigger;
}

export interface SlotIdEnteredTrigger {
    triggeringSlotId: string;
}

export interface SlotExpirationTrigger {
    id: string;
    slotIdExitedTrigger?: SlotIdExitedTrigger;
    onNewPlaybackAfterContentVideoIdTrigger?: OnNewPlaybackAfterContentVideoIdTrigger;
}

export interface SlotIdExitedTrigger {
    triggeringSlotId: string;
}

export interface OnNewPlaybackAfterContentVideoIdTrigger { }

export interface FrameworkUpdates {
    entityBatchUpdate: EntityBatchUpdate;
}

export interface EntityBatchUpdate {
    mutations: Mutation[];
    timestamp: Timestamp;
}

export interface Mutation {
    entityKey: string;
    type: string;
    payload: Payload;
}

export interface Payload {
    offlineabilityEntity: OfflineabilityEntity;
}

export interface OfflineabilityEntity {
    key: string;
    addToOfflineButtonState: string;
}

export interface Timestamp {
    seconds: string;
    nanos: number;
}

export interface Response {
    responseContext: ResponseContext2;
    contents: Contents;
    currentVideoEndpoint: CurrentVideoEndpoint;
    trackingParams: string;
    playerOverlays: PlayerOverlays;
    onResponseReceivedEndpoints: OnResponseReceivedEndpoint[];
    engagementPanels: EngagementPanel[];
    topbar: Topbar;
    pageVisualEffects: PageVisualEffect[];
    frameworkUpdates: FrameworkUpdates2;
}

export interface ResponseContext2 {
    serviceTrackingParams: ServiceTrackingParam2[];
    mainAppWebResponseContext: MainAppWebResponseContext2;
    webResponseContextExtensionData: WebResponseContextExtensionData2;
}

export interface ServiceTrackingParam2 {
    service: string;
    params: Param2[];
}

export interface Param2 {
    key: string;
    value: string;
}

export interface MainAppWebResponseContext2 {
    loggedOut: boolean;
    trackingParam: string;
}

export interface WebResponseContextExtensionData2 {
    ytConfigData: YtConfigData;
    hasDecorated: boolean;
}

export interface YtConfigData {
    visitorData: string;
    rootVisualElementType: number;
}

export interface Contents {
    twoColumnWatchNextResults: TwoColumnWatchNextResults;
}

export interface TwoColumnWatchNextResults {
    results: Results;
    secondaryResults: SecondaryResults;
}

export interface Results {
    results: Results2;
}

export interface Results2 {
    contents: Content[];
    trackingParams: string;
}

export interface Content {
    videoPrimaryInfoRenderer?: VideoPrimaryInfoRenderer;
    videoSecondaryInfoRenderer?: VideoSecondaryInfoRenderer;
    itemSectionRenderer?: ItemSectionRenderer;
}

export interface VideoPrimaryInfoRenderer {
    title: Title2;
    viewCount: ViewCount;
    videoActions: VideoActions;
    trackingParams: string;
    dateText: DateText;
    relativeDateText: RelativeDateText;
}

export interface Title2 {
    runs: Run12[];
}

export interface Run12 {
    text: string;
}

export interface ViewCount {
    videoViewCountRenderer: VideoViewCountRenderer;
}

export interface VideoViewCountRenderer {
    viewCount: ViewCount2;
    shortViewCount: ShortViewCount;
    originalViewCount: string;
}

export interface ViewCount2 {
    simpleText: string;
}

export interface ShortViewCount {
    simpleText: string;
}

export interface VideoActions {
    menuRenderer: MenuRenderer;
}

export interface MenuRenderer {
    items: Item[];
    trackingParams: string;
    topLevelButtons: TopLevelButton[];
    accessibility: Accessibility3;
    flexibleItems: FlexibleItem[];
}

export interface Item {
    menuNavigationItemRenderer: MenuNavigationItemRenderer;
}

export interface MenuNavigationItemRenderer {
    text: Text7;
    icon: Icon4;
    navigationEndpoint: NavigationEndpoint3;
    trackingParams: string;
}

export interface Text7 {
    runs: Run13[];
}

export interface Run13 {
    text: string;
}

export interface Icon4 {
    iconType: string;
}

export interface NavigationEndpoint3 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata15;
    modalEndpoint: ModalEndpoint;
}

export interface CommandMetadata15 {
    webCommandMetadata: WebCommandMetadata15;
}

export interface WebCommandMetadata15 {
    ignoreNavigation: boolean;
}

export interface ModalEndpoint {
    modal: Modal;
}

export interface Modal {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer;
}

export interface ModalWithTitleAndButtonRenderer {
    title: Title3;
    content: Content2;
    button: Button2;
}

export interface Title3 {
    runs: Run14[];
}

export interface Run14 {
    text: string;
}

export interface Content2 {
    runs: Run15[];
}

export interface Run15 {
    text: string;
}

export interface Button2 {
    buttonRenderer: ButtonRenderer7;
}

export interface ButtonRenderer7 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text8;
    navigationEndpoint: NavigationEndpoint4;
    trackingParams: string;
}

export interface Text8 {
    simpleText: string;
}

export interface NavigationEndpoint4 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata16;
    signInEndpoint: SignInEndpoint2;
}

export interface CommandMetadata16 {
    webCommandMetadata: WebCommandMetadata16;
}

export interface WebCommandMetadata16 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SignInEndpoint2 {
    hack: boolean;
}

export interface TopLevelButton {
    segmentedLikeDislikeButtonViewModel?: SegmentedLikeDislikeButtonViewModel;
    buttonRenderer?: ButtonRenderer10;
}

export interface SegmentedLikeDislikeButtonViewModel {
    likeButtonViewModel: LikeButtonViewModel;
    dislikeButtonViewModel: DislikeButtonViewModel;
    iconType: string;
    likeCountEntity: LikeCountEntity;
    dynamicLikeCountUpdateData: DynamicLikeCountUpdateData;
}

export interface LikeButtonViewModel {
    likeButtonViewModel: LikeButtonViewModel2;
}

export interface LikeButtonViewModel2 {
    toggleButtonViewModel: ToggleButtonViewModel;
    likeStatusEntityKey: string;
    likeStatusEntity: LikeStatusEntity;
}

export interface ToggleButtonViewModel {
    toggleButtonViewModel: ToggleButtonViewModel2;
}

export interface ToggleButtonViewModel2 {
    defaultButtonViewModel: DefaultButtonViewModel;
    toggledButtonViewModel: ToggledButtonViewModel;
    identifier: string;
    trackingParams: string;
    isTogglingDisabled: boolean;
}

export interface DefaultButtonViewModel {
    buttonViewModel: ButtonViewModel;
}

export interface ButtonViewModel {
    iconName: string;
    title: string;
    onTap: OnTap;
    accessibilityText: string;
    style: string;
    trackingParams: string;
    isFullWidth: boolean;
    type: string;
    buttonSize: string;
    accessibilityId: string;
    tooltip: string;
}

export interface OnTap {
    serialCommand: SerialCommand;
}

export interface SerialCommand {
    commands: Command5[];
}

export interface Command5 {
    logGestureCommand?: LogGestureCommand;
    innertubeCommand?: InnertubeCommand;
}

export interface LogGestureCommand {
    gestureType: string;
    trackingParams: string;
}

export interface InnertubeCommand {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata17;
    modalEndpoint: ModalEndpoint2;
}

export interface CommandMetadata17 {
    webCommandMetadata: WebCommandMetadata17;
}

export interface WebCommandMetadata17 {
    ignoreNavigation: boolean;
}

export interface ModalEndpoint2 {
    modal: Modal2;
}

export interface Modal2 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer2;
}

export interface ModalWithTitleAndButtonRenderer2 {
    title: Title4;
    content: Content3;
    button: Button3;
}

export interface Title4 {
    simpleText: string;
}

export interface Content3 {
    simpleText: string;
}

export interface Button3 {
    buttonRenderer: ButtonRenderer8;
}

export interface ButtonRenderer8 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text9;
    navigationEndpoint: NavigationEndpoint5;
    trackingParams: string;
}

export interface Text9 {
    simpleText: string;
}

export interface NavigationEndpoint5 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata18;
    signInEndpoint: SignInEndpoint3;
}

export interface CommandMetadata18 {
    webCommandMetadata: WebCommandMetadata18;
}

export interface WebCommandMetadata18 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SignInEndpoint3 {
    nextEndpoint: NextEndpoint;
    idamTag: string;
}

export interface NextEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata19;
    likeEndpoint: LikeEndpoint;
}

export interface CommandMetadata19 {
    webCommandMetadata: WebCommandMetadata19;
}

export interface WebCommandMetadata19 {
    sendPost: boolean;
    apiUrl: string;
}

export interface LikeEndpoint {
    status: string;
    target: Target;
    likeParams: string;
}

export interface Target {
    videoId: string;
}

export interface ToggledButtonViewModel {
    buttonViewModel: ButtonViewModel2;
}

export interface ButtonViewModel2 {
    iconName: string;
    title: string;
    onTap: OnTap2;
    accessibilityText: string;
    style: string;
    trackingParams: string;
    isFullWidth: boolean;
    type: string;
    buttonSize: string;
    accessibilityId: string;
    tooltip: string;
}

export interface OnTap2 {
    serialCommand: SerialCommand2;
}

export interface SerialCommand2 {
    commands: Command6[];
}

export interface Command6 {
    logGestureCommand?: LogGestureCommand2;
    innertubeCommand?: InnertubeCommand2;
}

export interface LogGestureCommand2 {
    gestureType: string;
    trackingParams: string;
}

export interface InnertubeCommand2 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata20;
    likeEndpoint: LikeEndpoint2;
}

export interface CommandMetadata20 {
    webCommandMetadata: WebCommandMetadata20;
}

export interface WebCommandMetadata20 {
    sendPost: boolean;
    apiUrl: string;
}

export interface LikeEndpoint2 {
    status: string;
    target: Target2;
    removeLikeParams: string;
}

export interface Target2 {
    videoId: string;
}

export interface LikeStatusEntity {
    key: string;
    likeStatus: string;
}

export interface DislikeButtonViewModel {
    dislikeButtonViewModel: DislikeButtonViewModel2;
}

export interface DislikeButtonViewModel2 {
    toggleButtonViewModel: ToggleButtonViewModel3;
    dislikeEntityKey: string;
}

export interface ToggleButtonViewModel3 {
    toggleButtonViewModel: ToggleButtonViewModel4;
}

export interface ToggleButtonViewModel4 {
    defaultButtonViewModel: DefaultButtonViewModel2;
    toggledButtonViewModel: ToggledButtonViewModel2;
    trackingParams: string;
    isTogglingDisabled: boolean;
}

export interface DefaultButtonViewModel2 {
    buttonViewModel: ButtonViewModel3;
}

export interface ButtonViewModel3 {
    iconName: string;
    title: string;
    onTap: OnTap3;
    accessibilityText: string;
    style: string;
    trackingParams: string;
    isFullWidth: boolean;
    type: string;
    buttonSize: string;
    accessibilityId: string;
    tooltip: string;
}

export interface OnTap3 {
    serialCommand: SerialCommand3;
}

export interface SerialCommand3 {
    commands: Command7[];
}

export interface Command7 {
    logGestureCommand?: LogGestureCommand3;
    innertubeCommand?: InnertubeCommand3;
}

export interface LogGestureCommand3 {
    gestureType: string;
    trackingParams: string;
}

export interface InnertubeCommand3 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata21;
    modalEndpoint: ModalEndpoint3;
}

export interface CommandMetadata21 {
    webCommandMetadata: WebCommandMetadata21;
}

export interface WebCommandMetadata21 {
    ignoreNavigation: boolean;
}

export interface ModalEndpoint3 {
    modal: Modal3;
}

export interface Modal3 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer3;
}

export interface ModalWithTitleAndButtonRenderer3 {
    title: Title5;
    content: Content4;
    button: Button4;
}

export interface Title5 {
    simpleText: string;
}

export interface Content4 {
    simpleText: string;
}

export interface Button4 {
    buttonRenderer: ButtonRenderer9;
}

export interface ButtonRenderer9 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text10;
    navigationEndpoint: NavigationEndpoint6;
    trackingParams: string;
}

export interface Text10 {
    simpleText: string;
}

export interface NavigationEndpoint6 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata22;
    signInEndpoint: SignInEndpoint4;
}

export interface CommandMetadata22 {
    webCommandMetadata: WebCommandMetadata22;
}

export interface WebCommandMetadata22 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SignInEndpoint4 {
    nextEndpoint: NextEndpoint2;
    idamTag: string;
}

export interface NextEndpoint2 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata23;
    likeEndpoint: LikeEndpoint3;
}

export interface CommandMetadata23 {
    webCommandMetadata: WebCommandMetadata23;
}

export interface WebCommandMetadata23 {
    sendPost: boolean;
    apiUrl: string;
}

export interface LikeEndpoint3 {
    status: string;
    target: Target3;
    dislikeParams: string;
}

export interface Target3 {
    videoId: string;
}

export interface ToggledButtonViewModel2 {
    buttonViewModel: ButtonViewModel4;
}

export interface ButtonViewModel4 {
    iconName: string;
    title: string;
    onTap: OnTap4;
    accessibilityText: string;
    style: string;
    trackingParams: string;
    isFullWidth: boolean;
    type: string;
    buttonSize: string;
    accessibilityId: string;
    tooltip: string;
}

export interface OnTap4 {
    serialCommand: SerialCommand4;
}

export interface SerialCommand4 {
    commands: Command8[];
}

export interface Command8 {
    logGestureCommand?: LogGestureCommand4;
    innertubeCommand?: InnertubeCommand4;
}

export interface LogGestureCommand4 {
    gestureType: string;
    trackingParams: string;
}

export interface InnertubeCommand4 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata24;
    likeEndpoint: LikeEndpoint4;
}

export interface CommandMetadata24 {
    webCommandMetadata: WebCommandMetadata24;
}

export interface WebCommandMetadata24 {
    sendPost: boolean;
    apiUrl: string;
}

export interface LikeEndpoint4 {
    status: string;
    target: Target4;
    removeLikeParams: string;
}

export interface Target4 {
    videoId: string;
}

export interface LikeCountEntity {
    key: string;
}

export interface DynamicLikeCountUpdateData {
    updateStatusKey: string;
    placeholderLikeCountValuesKey: string;
    updateDelayLoopId: string;
    updateDelaySec: number;
}

export interface ButtonRenderer10 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text11;
    serviceEndpoint: ServiceEndpoint4;
    icon: Icon5;
    tooltip: string;
    trackingParams: string;
    accessibilityData: AccessibilityData5;
}

export interface Text11 {
    runs: Run16[];
}

export interface Run16 {
    text: string;
}

export interface ServiceEndpoint4 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata25;
    shareEntityServiceEndpoint: ShareEntityServiceEndpoint;
}

export interface CommandMetadata25 {
    webCommandMetadata: WebCommandMetadata25;
}

export interface WebCommandMetadata25 {
    sendPost: boolean;
    apiUrl: string;
}

export interface ShareEntityServiceEndpoint {
    serializedShareEntity: string;
    commands: Command9[];
}

export interface Command9 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction3;
}

export interface OpenPopupAction3 {
    popup: Popup3;
    popupType: string;
    beReused: boolean;
}

export interface Popup3 {
    unifiedSharePanelRenderer: UnifiedSharePanelRenderer;
}

export interface UnifiedSharePanelRenderer {
    trackingParams: string;
    showLoadingSpinner: boolean;
}

export interface Icon5 {
    iconType: string;
}

export interface AccessibilityData5 {
    accessibilityData: AccessibilityData6;
}

export interface AccessibilityData6 {
    label: string;
}

export interface Accessibility3 {
    accessibilityData: AccessibilityData7;
}

export interface AccessibilityData7 {
    label: string;
}

export interface FlexibleItem {
    menuFlexibleItemRenderer: MenuFlexibleItemRenderer;
}

export interface MenuFlexibleItemRenderer {
    menuItem: MenuItem;
    topLevelButton: TopLevelButton2;
}

export interface MenuItem {
    menuServiceItemDownloadRenderer?: MenuServiceItemDownloadRenderer;
    menuServiceItemRenderer?: MenuServiceItemRenderer;
}

export interface MenuServiceItemDownloadRenderer {
    serviceEndpoint: ServiceEndpoint5;
    trackingParams: string;
}

export interface ServiceEndpoint5 {
    clickTrackingParams: string;
    offlineVideoEndpoint: OfflineVideoEndpoint;
}

export interface OfflineVideoEndpoint {
    videoId: string;
    onAddCommand: OnAddCommand;
}

export interface OnAddCommand {
    clickTrackingParams: string;
    getDownloadActionCommand: GetDownloadActionCommand;
}

export interface GetDownloadActionCommand {
    videoId: string;
    params: string;
    offlineabilityEntityKey: string;
}

export interface MenuServiceItemRenderer {
    text: Text12;
    icon: Icon6;
    serviceEndpoint: ServiceEndpoint6;
    trackingParams: string;
}

export interface Text12 {
    runs: Run17[];
}

export interface Run17 {
    text: string;
}

export interface Icon6 {
    iconType: string;
}

export interface ServiceEndpoint6 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata26;
    modalEndpoint: ModalEndpoint4;
}

export interface CommandMetadata26 {
    webCommandMetadata: WebCommandMetadata26;
}

export interface WebCommandMetadata26 {
    ignoreNavigation: boolean;
}

export interface ModalEndpoint4 {
    modal: Modal4;
}

export interface Modal4 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer4;
}

export interface ModalWithTitleAndButtonRenderer4 {
    title: Title6;
    content: Content5;
    button: Button5;
}

export interface Title6 {
    runs: Run18[];
}

export interface Run18 {
    text: string;
}

export interface Content5 {
    runs: Run19[];
}

export interface Run19 {
    text: string;
}

export interface Button5 {
    buttonRenderer: ButtonRenderer11;
}

export interface ButtonRenderer11 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text13;
    navigationEndpoint: NavigationEndpoint7;
    trackingParams: string;
}

export interface Text13 {
    simpleText: string;
}

export interface NavigationEndpoint7 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata27;
    signInEndpoint: SignInEndpoint5;
}

export interface CommandMetadata27 {
    webCommandMetadata: WebCommandMetadata27;
}

export interface WebCommandMetadata27 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SignInEndpoint5 {
    nextEndpoint: NextEndpoint3;
    idamTag: string;
}

export interface NextEndpoint3 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata28;
    watchEndpoint: WatchEndpoint;
}

export interface CommandMetadata28 {
    webCommandMetadata: WebCommandMetadata28;
}

export interface WebCommandMetadata28 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface WatchEndpoint {
    videoId: string;
    watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig;
}

export interface WatchEndpointSupportedOnesieConfig {
    html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig;
}

export interface Html5PlaybackOnesieConfig {
    commonConfig: CommonConfig;
}

export interface CommonConfig {
    url: string;
}

export interface TopLevelButton2 {
    downloadButtonRenderer?: DownloadButtonRenderer;
    buttonViewModel?: ButtonViewModel5;
}

export interface DownloadButtonRenderer {
    trackingParams: string;
    style: string;
    size: string;
    targetId: string;
    command: Command10;
}

export interface Command10 {
    clickTrackingParams: string;
    offlineVideoEndpoint: OfflineVideoEndpoint2;
}

export interface OfflineVideoEndpoint2 {
    videoId: string;
    onAddCommand: OnAddCommand2;
}

export interface OnAddCommand2 {
    clickTrackingParams: string;
    getDownloadActionCommand: GetDownloadActionCommand2;
}

export interface GetDownloadActionCommand2 {
    videoId: string;
    params: string;
    offlineabilityEntityKey: string;
}

export interface ButtonViewModel5 {
    iconName: string;
    title: string;
    onTap: OnTap5;
    accessibilityText: string;
    style: string;
    trackingParams: string;
    isFullWidth: boolean;
    type: string;
    buttonSize: string;
    tooltip: string;
}

export interface OnTap5 {
    serialCommand: SerialCommand5;
}

export interface SerialCommand5 {
    commands: Command11[];
}

export interface Command11 {
    logGestureCommand?: LogGestureCommand5;
    innertubeCommand?: InnertubeCommand5;
}

export interface LogGestureCommand5 {
    gestureType: string;
    trackingParams: string;
}

export interface InnertubeCommand5 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata29;
    modalEndpoint: ModalEndpoint5;
}

export interface CommandMetadata29 {
    webCommandMetadata: WebCommandMetadata29;
}

export interface WebCommandMetadata29 {
    ignoreNavigation: boolean;
}

export interface ModalEndpoint5 {
    modal: Modal5;
}

export interface Modal5 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer5;
}

export interface ModalWithTitleAndButtonRenderer5 {
    title: Title7;
    content: Content6;
    button: Button6;
}

export interface Title7 {
    runs: Run20[];
}

export interface Run20 {
    text: string;
}

export interface Content6 {
    runs: Run21[];
}

export interface Run21 {
    text: string;
}

export interface Button6 {
    buttonRenderer: ButtonRenderer12;
}

export interface ButtonRenderer12 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text14;
    navigationEndpoint: NavigationEndpoint8;
    trackingParams: string;
}

export interface Text14 {
    simpleText: string;
}

export interface NavigationEndpoint8 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata30;
    signInEndpoint: SignInEndpoint6;
}

export interface CommandMetadata30 {
    webCommandMetadata: WebCommandMetadata30;
}

export interface WebCommandMetadata30 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SignInEndpoint6 {
    nextEndpoint: NextEndpoint4;
    idamTag: string;
}

export interface NextEndpoint4 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata31;
    watchEndpoint: WatchEndpoint2;
}

export interface CommandMetadata31 {
    webCommandMetadata: WebCommandMetadata31;
}

export interface WebCommandMetadata31 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface WatchEndpoint2 {
    videoId: string;
    watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig2;
}

export interface WatchEndpointSupportedOnesieConfig2 {
    html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig2;
}

export interface Html5PlaybackOnesieConfig2 {
    commonConfig: CommonConfig2;
}

export interface CommonConfig2 {
    url: string;
}

export interface DateText {
    simpleText: string;
}

export interface RelativeDateText {
    accessibility: Accessibility4;
    simpleText: string;
}

export interface Accessibility4 {
    accessibilityData: AccessibilityData8;
}

export interface AccessibilityData8 {
    label: string;
}

export interface VideoSecondaryInfoRenderer {
    owner: Owner;
    subscribeButton: SubscribeButton2;
    metadataRowContainer: MetadataRowContainer;
    showMoreText: ShowMoreText;
    showLessText: ShowLessText;
    trackingParams: string;
    defaultExpanded: boolean;
    descriptionCollapsedLines: number;
    showMoreCommand: ShowMoreCommand;
    showLessCommand: ShowLessCommand;
    attributedDescription: AttributedDescription;
    headerRuns: HeaderRun[];
}

export interface Owner {
    videoOwnerRenderer: VideoOwnerRenderer;
}

export interface VideoOwnerRenderer {
    thumbnail: Thumbnail9;
    title: Title8;
    subscriptionButton: SubscriptionButton;
    navigationEndpoint: NavigationEndpoint10;
    subscriberCountText: SubscriberCountText;
    trackingParams: string;
    badges: Badge[];
}

export interface Thumbnail9 {
    thumbnails: Thumbnail10[];
}

export interface Thumbnail10 {
    url: string;
    width: number;
    height: number;
}

export interface Title8 {
    runs: Run22[];
}

export interface Run22 {
    text: string;
    navigationEndpoint: NavigationEndpoint9;
}

export interface NavigationEndpoint9 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata32;
    browseEndpoint: BrowseEndpoint2;
}

export interface CommandMetadata32 {
    webCommandMetadata: WebCommandMetadata32;
}

export interface WebCommandMetadata32 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint2 {
    browseId: string;
    canonicalBaseUrl: string;
}

export interface SubscriptionButton {
    type: string;
}

export interface NavigationEndpoint10 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata33;
    browseEndpoint: BrowseEndpoint3;
}

export interface CommandMetadata33 {
    webCommandMetadata: WebCommandMetadata33;
}

export interface WebCommandMetadata33 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint3 {
    browseId: string;
    canonicalBaseUrl: string;
}

export interface SubscriberCountText {
    accessibility: Accessibility5;
    simpleText: string;
}

export interface Accessibility5 {
    accessibilityData: AccessibilityData9;
}

export interface AccessibilityData9 {
    label: string;
}

export interface Badge {
    metadataBadgeRenderer: MetadataBadgeRenderer;
}

export interface MetadataBadgeRenderer {
    icon: Icon7;
    style: string;
    tooltip: string;
    trackingParams: string;
    accessibilityData: AccessibilityData10;
}

export interface Icon7 {
    iconType: string;
}

export interface AccessibilityData10 {
    label: string;
}

export interface SubscribeButton2 {
    subscribeButtonRenderer: SubscribeButtonRenderer2;
}

export interface SubscribeButtonRenderer2 {
    buttonText: ButtonText2;
    subscribed: boolean;
    enabled: boolean;
    type: string;
    channelId: string;
    showPreferences: boolean;
    subscribedButtonText: SubscribedButtonText2;
    unsubscribedButtonText: UnsubscribedButtonText2;
    trackingParams: string;
    unsubscribeButtonText: UnsubscribeButtonText2;
    subscribeAccessibility: SubscribeAccessibility2;
    unsubscribeAccessibility: UnsubscribeAccessibility2;
    notificationPreferenceButton: NotificationPreferenceButton;
    targetId: string;
    signInEndpoint: SignInEndpoint7;
    subscribedEntityKey: string;
    onSubscribeEndpoints: OnSubscribeEndpoint[];
    onUnsubscribeEndpoints: OnUnsubscribeEndpoint[];
}

export interface ButtonText2 {
    runs: Run23[];
}

export interface Run23 {
    text: string;
}

export interface SubscribedButtonText2 {
    runs: Run24[];
}

export interface Run24 {
    text: string;
}

export interface UnsubscribedButtonText2 {
    runs: Run25[];
}

export interface Run25 {
    text: string;
}

export interface UnsubscribeButtonText2 {
    runs: Run26[];
}

export interface Run26 {
    text: string;
}

export interface SubscribeAccessibility2 {
    accessibilityData: AccessibilityData11;
}

export interface AccessibilityData11 {
    label: string;
}

export interface UnsubscribeAccessibility2 {
    accessibilityData: AccessibilityData12;
}

export interface AccessibilityData12 {
    label: string;
}

export interface NotificationPreferenceButton {
    subscriptionNotificationToggleButtonRenderer: SubscriptionNotificationToggleButtonRenderer;
}

export interface SubscriptionNotificationToggleButtonRenderer {
    states: State[];
    currentStateId: number;
    trackingParams: string;
    command: Command12;
    targetId: string;
    secondaryIcon: SecondaryIcon;
}

export interface State {
    stateId: number;
    nextStateId: number;
    state: State2;
}

export interface State2 {
    buttonRenderer: ButtonRenderer13;
}

export interface ButtonRenderer13 {
    style: string;
    size: string;
    isDisabled: boolean;
    icon: Icon8;
    accessibility: Accessibility6;
    trackingParams: string;
    accessibilityData: AccessibilityData13;
}

export interface Icon8 {
    iconType: string;
}

export interface Accessibility6 {
    label: string;
}

export interface AccessibilityData13 {
    accessibilityData: AccessibilityData14;
}

export interface AccessibilityData14 {
    label: string;
}

export interface Command12 {
    clickTrackingParams: string;
    commandExecutorCommand: CommandExecutorCommand3;
}

export interface CommandExecutorCommand3 {
    commands: Command13[];
}

export interface Command13 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction4;
}

export interface OpenPopupAction4 {
    popup: Popup4;
    popupType: string;
}

export interface Popup4 {
    menuPopupRenderer: MenuPopupRenderer;
}

export interface MenuPopupRenderer {
    items: Item2[];
}

export interface Item2 {
    menuServiceItemRenderer: MenuServiceItemRenderer2;
}

export interface MenuServiceItemRenderer2 {
    text: Text15;
    icon: Icon9;
    serviceEndpoint: ServiceEndpoint7;
    trackingParams: string;
    isSelected?: boolean;
}

export interface Text15 {
    simpleText?: string;
    runs?: Run27[];
}

export interface Run27 {
    text: string;
}

export interface Icon9 {
    iconType: string;
}

export interface ServiceEndpoint7 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata34;
    modifyChannelNotificationPreferenceEndpoint?: ModifyChannelNotificationPreferenceEndpoint;
    signalServiceEndpoint?: SignalServiceEndpoint2;
}

export interface CommandMetadata34 {
    webCommandMetadata: WebCommandMetadata34;
}

export interface WebCommandMetadata34 {
    sendPost: boolean;
    apiUrl?: string;
}

export interface ModifyChannelNotificationPreferenceEndpoint {
    params: string;
}

export interface SignalServiceEndpoint2 {
    signal: string;
    actions: Action4[];
}

export interface Action4 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction5;
}

export interface OpenPopupAction5 {
    popup: Popup5;
    popupType: string;
}

export interface Popup5 {
    confirmDialogRenderer: ConfirmDialogRenderer2;
}

export interface ConfirmDialogRenderer2 {
    trackingParams: string;
    dialogMessages: DialogMessage2[];
    confirmButton: ConfirmButton2;
    cancelButton: CancelButton2;
    primaryIsCancel: boolean;
}

export interface DialogMessage2 {
    runs: Run28[];
}

export interface Run28 {
    text: string;
}

export interface ConfirmButton2 {
    buttonRenderer: ButtonRenderer14;
}

export interface ButtonRenderer14 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text16;
    serviceEndpoint: ServiceEndpoint8;
    accessibility: Accessibility7;
    trackingParams: string;
}

export interface Text16 {
    runs: Run29[];
}

export interface Run29 {
    text: string;
}

export interface ServiceEndpoint8 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata35;
    unsubscribeEndpoint: UnsubscribeEndpoint3;
}

export interface CommandMetadata35 {
    webCommandMetadata: WebCommandMetadata35;
}

export interface WebCommandMetadata35 {
    sendPost: boolean;
    apiUrl: string;
}

export interface UnsubscribeEndpoint3 {
    channelIds: string[];
    params: string;
}

export interface Accessibility7 {
    label: string;
}

export interface CancelButton2 {
    buttonRenderer: ButtonRenderer15;
}

export interface ButtonRenderer15 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text17;
    accessibility: Accessibility8;
    trackingParams: string;
}

export interface Text17 {
    runs: Run30[];
}

export interface Run30 {
    text: string;
}

export interface Accessibility8 {
    label: string;
}

export interface SecondaryIcon {
    iconType: string;
}

export interface SignInEndpoint7 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata36;
    modalEndpoint: ModalEndpoint6;
}

export interface CommandMetadata36 {
    webCommandMetadata: WebCommandMetadata36;
}

export interface WebCommandMetadata36 {
    ignoreNavigation: boolean;
}

export interface ModalEndpoint6 {
    modal: Modal6;
}

export interface Modal6 {
    modalWithTitleAndButtonRenderer: ModalWithTitleAndButtonRenderer6;
}

export interface ModalWithTitleAndButtonRenderer6 {
    title: Title9;
    content: Content7;
    button: Button7;
}

export interface Title9 {
    simpleText: string;
}

export interface Content7 {
    simpleText: string;
}

export interface Button7 {
    buttonRenderer: ButtonRenderer16;
}

export interface ButtonRenderer16 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text18;
    navigationEndpoint: NavigationEndpoint11;
    trackingParams: string;
}

export interface Text18 {
    simpleText: string;
}

export interface NavigationEndpoint11 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata37;
    signInEndpoint: SignInEndpoint8;
}

export interface CommandMetadata37 {
    webCommandMetadata: WebCommandMetadata37;
}

export interface WebCommandMetadata37 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SignInEndpoint8 {
    nextEndpoint: NextEndpoint5;
    continueAction: string;
    idamTag: string;
}

export interface NextEndpoint5 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata38;
    watchEndpoint: WatchEndpoint3;
}

export interface CommandMetadata38 {
    webCommandMetadata: WebCommandMetadata38;
}

export interface WebCommandMetadata38 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface WatchEndpoint3 {
    videoId: string;
    watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig3;
}

export interface WatchEndpointSupportedOnesieConfig3 {
    html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig3;
}

export interface Html5PlaybackOnesieConfig3 {
    commonConfig: CommonConfig3;
}

export interface CommonConfig3 {
    url: string;
}

export interface OnSubscribeEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata39;
    subscribeEndpoint: SubscribeEndpoint3;
}

export interface CommandMetadata39 {
    webCommandMetadata: WebCommandMetadata39;
}

export interface WebCommandMetadata39 {
    sendPost: boolean;
    apiUrl: string;
}

export interface SubscribeEndpoint3 {
    channelIds: string[];
    params: string;
}

export interface OnUnsubscribeEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata40;
    signalServiceEndpoint: SignalServiceEndpoint3;
}

export interface CommandMetadata40 {
    webCommandMetadata: WebCommandMetadata40;
}

export interface WebCommandMetadata40 {
    sendPost: boolean;
}

export interface SignalServiceEndpoint3 {
    signal: string;
    actions: Action5[];
}

export interface Action5 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction6;
}

export interface OpenPopupAction6 {
    popup: Popup6;
    popupType: string;
}

export interface Popup6 {
    confirmDialogRenderer: ConfirmDialogRenderer3;
}

export interface ConfirmDialogRenderer3 {
    trackingParams: string;
    dialogMessages: DialogMessage3[];
    confirmButton: ConfirmButton3;
    cancelButton: CancelButton3;
    primaryIsCancel: boolean;
}

export interface DialogMessage3 {
    runs: Run31[];
}

export interface Run31 {
    text: string;
}

export interface ConfirmButton3 {
    buttonRenderer: ButtonRenderer17;
}

export interface ButtonRenderer17 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text19;
    serviceEndpoint: ServiceEndpoint9;
    accessibility: Accessibility9;
    trackingParams: string;
}

export interface Text19 {
    runs: Run32[];
}

export interface Run32 {
    text: string;
}

export interface ServiceEndpoint9 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata41;
    unsubscribeEndpoint: UnsubscribeEndpoint4;
}

export interface CommandMetadata41 {
    webCommandMetadata: WebCommandMetadata41;
}

export interface WebCommandMetadata41 {
    sendPost: boolean;
    apiUrl: string;
}

export interface UnsubscribeEndpoint4 {
    channelIds: string[];
    params: string;
}

export interface Accessibility9 {
    label: string;
}

export interface CancelButton3 {
    buttonRenderer: ButtonRenderer18;
}

export interface ButtonRenderer18 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text20;
    accessibility: Accessibility10;
    trackingParams: string;
}

export interface Text20 {
    runs: Run33[];
}

export interface Run33 {
    text: string;
}

export interface Accessibility10 {
    label: string;
}

export interface MetadataRowContainer {
    metadataRowContainerRenderer: MetadataRowContainerRenderer;
}

export interface MetadataRowContainerRenderer {
    collapsedItemCount: number;
    trackingParams: string;
}

export interface ShowMoreText {
    simpleText: string;
}

export interface ShowLessText {
    simpleText: string;
}

export interface ShowMoreCommand {
    clickTrackingParams: string;
    commandExecutorCommand: CommandExecutorCommand4;
}

export interface CommandExecutorCommand4 {
    commands: Command14[];
}

export interface Command14 {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction2;
    scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommand;
}

export interface ChangeEngagementPanelVisibilityAction2 {
    targetId: string;
    visibility: string;
}

export interface ScrollToEngagementPanelCommand {
    targetId: string;
}

export interface ShowLessCommand {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction: ChangeEngagementPanelVisibilityAction3;
}

export interface ChangeEngagementPanelVisibilityAction3 {
    targetId: string;
    visibility: string;
}

export interface AttributedDescription {
    content: string;
    commandRuns: CommandRun[];
    styleRuns: StyleRun[];
}

export interface CommandRun {
    startIndex: number;
    length: number;
    onTap: OnTap6;
}

export interface OnTap6 {
    innertubeCommand: InnertubeCommand6;
}

export interface InnertubeCommand6 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata42;
    urlEndpoint: UrlEndpoint4;
}

export interface CommandMetadata42 {
    webCommandMetadata: WebCommandMetadata42;
}

export interface WebCommandMetadata42 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface UrlEndpoint4 {
    url: string;
    target: string;
    nofollow: boolean;
}

export interface StyleRun {
    startIndex: number;
    length: number;
    styleRunExtensions: StyleRunExtensions;
    fontFamilyName: string;
}

export interface StyleRunExtensions {
    styleRunColorMapExtension: StyleRunColorMapExtension;
}

export interface StyleRunColorMapExtension {
    colorMap: ColorMap[];
}

export interface ColorMap {
    key: string;
    value: number;
}

export interface HeaderRun {
    startIndex: number;
    length: number;
    headerMapping: string;
}

export interface ItemSectionRenderer {
    contents: Content8[];
    trackingParams: string;
    sectionIdentifier: string;
    targetId?: string;
}

export interface Content8 {
    continuationItemRenderer?: ContinuationItemRenderer;
    commentsEntryPointHeaderRenderer?: CommentsEntryPointHeaderRenderer;
}

export interface ContinuationItemRenderer {
    trigger: string;
    continuationEndpoint: ContinuationEndpoint;
}

export interface ContinuationEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata43;
    continuationCommand: ContinuationCommand;
}

export interface CommandMetadata43 {
    webCommandMetadata: WebCommandMetadata43;
}

export interface WebCommandMetadata43 {
    sendPost: boolean;
    apiUrl: string;
}

export interface ContinuationCommand {
    token: string;
    request: string;
}

export interface CommentsEntryPointHeaderRenderer {
    headerText: HeaderText2;
    onTap: OnTap7;
    trackingParams: string;
    commentCount: CommentCount;
    contentRenderer: ContentRenderer;
    targetId: string;
}

export interface HeaderText2 {
    runs: Run34[];
}

export interface Run34 {
    text: string;
}

export interface OnTap7 {
    clickTrackingParams: string;
    commandExecutorCommand: CommandExecutorCommand5;
}

export interface CommandExecutorCommand5 {
    commands: Command15[];
}

export interface Command15 {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction4;
    scrollToEngagementPanelCommand?: ScrollToEngagementPanelCommand2;
}

export interface ChangeEngagementPanelVisibilityAction4 {
    targetId: string;
    visibility: string;
}

export interface ScrollToEngagementPanelCommand2 {
    targetId: string;
}

export interface CommentCount {
    simpleText: string;
}

export interface ContentRenderer {
    commentsEntryPointTeaserRenderer: CommentsEntryPointTeaserRenderer;
}

export interface CommentsEntryPointTeaserRenderer {
    teaserAvatar: TeaserAvatar;
    teaserContent: TeaserContent;
    trackingParams: string;
}

export interface TeaserAvatar {
    thumbnails: Thumbnail11[];
    accessibility: Accessibility11;
}

export interface Thumbnail11 {
    url: string;
    width: number;
    height: number;
}

export interface Accessibility11 {
    accessibilityData: AccessibilityData15;
}

export interface AccessibilityData15 {
    label: string;
}

export interface TeaserContent {
    simpleText: string;
}

export interface SecondaryResults {
    secondaryResults: SecondaryResults2;
}

export interface SecondaryResults2 {
    results: Result[];
    trackingParams: string;
    targetId: string;
}

export interface Result {
    continuationItemRenderer: ContinuationItemRenderer2;
}

export interface ContinuationItemRenderer2 {
    trigger: string;
    continuationEndpoint: ContinuationEndpoint2;
    button: Button8;
}

export interface ContinuationEndpoint2 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata44;
    continuationCommand: ContinuationCommand2;
}

export interface CommandMetadata44 {
    webCommandMetadata: WebCommandMetadata44;
}

export interface WebCommandMetadata44 {
    sendPost: boolean;
    apiUrl: string;
}

export interface ContinuationCommand2 {
    token: string;
    request: string;
}

export interface Button8 {
    buttonRenderer: ButtonRenderer19;
}

export interface ButtonRenderer19 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text21;
    trackingParams: string;
    command: Command16;
}

export interface Text21 {
    runs: Run35[];
}

export interface Run35 {
    text: string;
}

export interface Command16 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata45;
    continuationCommand: ContinuationCommand3;
}

export interface CommandMetadata45 {
    webCommandMetadata: WebCommandMetadata45;
}

export interface WebCommandMetadata45 {
    sendPost: boolean;
    apiUrl: string;
}

export interface ContinuationCommand3 {
    token: string;
    request: string;
}

export interface CurrentVideoEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata46;
    watchEndpoint: WatchEndpoint4;
}

export interface CommandMetadata46 {
    webCommandMetadata: WebCommandMetadata46;
}

export interface WebCommandMetadata46 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface WatchEndpoint4 {
    videoId: string;
    watchEndpointSupportedOnesieConfig: WatchEndpointSupportedOnesieConfig4;
}

export interface WatchEndpointSupportedOnesieConfig4 {
    html5PlaybackOnesieConfig: Html5PlaybackOnesieConfig4;
}

export interface Html5PlaybackOnesieConfig4 {
    commonConfig: CommonConfig4;
}

export interface CommonConfig4 {
    url: string;
}

export interface PlayerOverlays {
    playerOverlayRenderer: PlayerOverlayRenderer;
}

export interface PlayerOverlayRenderer {
    shareButton: ShareButton;
    addToMenu: AddToMenu;
    videoDetails: VideoDetails2;
    decoratedPlayerBarRenderer: DecoratedPlayerBarRenderer;
    speedmasterUserEdu: SpeedmasterUserEdu;
}

export interface ShareButton {
    buttonRenderer: ButtonRenderer20;
}

export interface ButtonRenderer20 {
    style: string;
    size: string;
    isDisabled: boolean;
    icon: Icon10;
    navigationEndpoint: NavigationEndpoint12;
    tooltip: string;
    trackingParams: string;
}

export interface Icon10 {
    iconType: string;
}

export interface NavigationEndpoint12 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata47;
    shareEntityServiceEndpoint: ShareEntityServiceEndpoint2;
}

export interface CommandMetadata47 {
    webCommandMetadata: WebCommandMetadata47;
}

export interface WebCommandMetadata47 {
    sendPost: boolean;
    apiUrl: string;
}

export interface ShareEntityServiceEndpoint2 {
    serializedShareEntity: string;
    commands: Command17[];
}

export interface Command17 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction7;
}

export interface OpenPopupAction7 {
    popup: Popup7;
    popupType: string;
    beReused: boolean;
}

export interface Popup7 {
    unifiedSharePanelRenderer: UnifiedSharePanelRenderer2;
}

export interface UnifiedSharePanelRenderer2 {
    trackingParams: string;
    showLoadingSpinner: boolean;
}

export interface AddToMenu {
    menuRenderer: MenuRenderer2;
}

export interface MenuRenderer2 {
    trackingParams: string;
}

export interface VideoDetails2 {
    playerOverlayVideoDetailsRenderer: PlayerOverlayVideoDetailsRenderer;
}

export interface PlayerOverlayVideoDetailsRenderer {
    title: Title10;
    subtitle: Subtitle;
}

export interface Title10 {
    simpleText: string;
}

export interface Subtitle {
    runs: Run36[];
}

export interface Run36 {
    text: string;
}

export interface DecoratedPlayerBarRenderer {
    decoratedPlayerBarRenderer: DecoratedPlayerBarRenderer2;
}

export interface DecoratedPlayerBarRenderer2 {
    playerBar: PlayerBar;
}

export interface PlayerBar {
    multiMarkersPlayerBarRenderer: MultiMarkersPlayerBarRenderer;
}

export interface MultiMarkersPlayerBarRenderer {
    visibleOnLoad: VisibleOnLoad;
    trackingParams: string;
}

export interface VisibleOnLoad {
    key: string;
}

export interface SpeedmasterUserEdu {
    speedmasterEduViewModel: SpeedmasterEduViewModel;
}

export interface SpeedmasterEduViewModel {
    bodyText: BodyText;
}

export interface BodyText {
    content: string;
}

export interface OnResponseReceivedEndpoint {
    clickTrackingParams: string;
    commandMetadata?: CommandMetadata48;
    signalServiceEndpoint?: SignalServiceEndpoint4;
    loadMarkersCommand?: LoadMarkersCommand;
}

export interface CommandMetadata48 {
    webCommandMetadata: WebCommandMetadata48;
}

export interface WebCommandMetadata48 {
    sendPost: boolean;
}

export interface SignalServiceEndpoint4 {
    signal: string;
    actions: Action6[];
}

export interface Action6 {
    clickTrackingParams: string;
    signalAction: SignalAction;
}

export interface SignalAction {
    signal: string;
}

export interface LoadMarkersCommand {
    visibleOnLoadKeys: string[];
    entityKeys: string[];
}

export interface EngagementPanel {
    engagementPanelSectionListRenderer: EngagementPanelSectionListRenderer;
}

export interface EngagementPanelSectionListRenderer {
    content: Content9;
    targetId: string;
    visibility: string;
    loggingDirectives: LoggingDirectives2;
    panelIdentifier?: string;
    header?: Header2;
    veType?: number;
}

export interface Content9 {
    adsEngagementPanelContentRenderer?: AdsEngagementPanelContentRenderer;
    structuredDescriptionContentRenderer?: StructuredDescriptionContentRenderer;
    sectionListRenderer?: SectionListRenderer;
}

export interface AdsEngagementPanelContentRenderer {
    hack: boolean;
}

export interface StructuredDescriptionContentRenderer {
    items: Item3[];
}

export interface Item3 {
    videoDescriptionHeaderRenderer?: VideoDescriptionHeaderRenderer;
    expandableVideoDescriptionBodyRenderer?: ExpandableVideoDescriptionBodyRenderer;
    horizontalCardListRenderer?: HorizontalCardListRenderer;
    videoDescriptionInfocardsSectionRenderer?: VideoDescriptionInfocardsSectionRenderer;
}

export interface VideoDescriptionHeaderRenderer {
    title: Title11;
    channel: Channel;
    views: Views;
    publishDate: PublishDate;
    factoid: Factoid[];
    channelNavigationEndpoint: ChannelNavigationEndpoint;
    channelThumbnail: ChannelThumbnail;
}

export interface Title11 {
    runs: Run37[];
}

export interface Run37 {
    text: string;
}

export interface Channel {
    simpleText: string;
}

export interface Views {
    simpleText: string;
}

export interface PublishDate {
    simpleText: string;
}

export interface Factoid {
    factoidRenderer?: FactoidRenderer;
    viewCountFactoidRenderer?: ViewCountFactoidRenderer;
}

export interface FactoidRenderer {
    value: Value;
    label: Label;
    accessibilityText: string;
}

export interface Value {
    simpleText: string;
}

export interface Label {
    simpleText: string;
}

export interface ViewCountFactoidRenderer {
    viewCountEntityKey: string;
    factoid: Factoid2;
    viewCountType: string;
}

export interface Factoid2 {
    factoidRenderer: FactoidRenderer2;
}

export interface FactoidRenderer2 {
    value: Value2;
    label: Label2;
    accessibilityText: string;
}

export interface Value2 {
    simpleText: string;
}

export interface Label2 {
    simpleText: string;
}

export interface ChannelNavigationEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata49;
    browseEndpoint: BrowseEndpoint4;
}

export interface CommandMetadata49 {
    webCommandMetadata: WebCommandMetadata49;
}

export interface WebCommandMetadata49 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint4 {
    browseId: string;
    canonicalBaseUrl: string;
}

export interface ChannelThumbnail {
    thumbnails: Thumbnail12[];
}

export interface Thumbnail12 {
    url: string;
}

export interface ExpandableVideoDescriptionBodyRenderer {
    showMoreText: ShowMoreText2;
    showLessText: ShowLessText2;
    attributedDescriptionBodyText: AttributedDescriptionBodyText;
    headerRuns: HeaderRun2[];
}

export interface ShowMoreText2 {
    simpleText: string;
}

export interface ShowLessText2 {
    simpleText: string;
}

export interface AttributedDescriptionBodyText {
    content: string;
    commandRuns: CommandRun2[];
    styleRuns: StyleRun2[];
}

export interface CommandRun2 {
    startIndex: number;
    length: number;
    onTap: OnTap8;
}

export interface OnTap8 {
    innertubeCommand: InnertubeCommand7;
}

export interface InnertubeCommand7 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata50;
    urlEndpoint: UrlEndpoint5;
}

export interface CommandMetadata50 {
    webCommandMetadata: WebCommandMetadata50;
}

export interface WebCommandMetadata50 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface UrlEndpoint5 {
    url: string;
    target: string;
    nofollow: boolean;
}

export interface StyleRun2 {
    startIndex: number;
    length: number;
    styleRunExtensions: StyleRunExtensions2;
    fontFamilyName: string;
}

export interface StyleRunExtensions2 {
    styleRunColorMapExtension: StyleRunColorMapExtension2;
}

export interface StyleRunColorMapExtension2 {
    colorMap: ColorMap2[];
}

export interface ColorMap2 {
    key: string;
    value: number;
}

export interface HeaderRun2 {
    startIndex: number;
    length: number;
    headerMapping: string;
}

export interface HorizontalCardListRenderer {
    cards: Card2[];
    trackingParams: string;
    header: Header;
    style: Style;
    footerButton: FooterButton;
}

export interface Card2 {
    videoAttributeViewModel: VideoAttributeViewModel;
}

export interface VideoAttributeViewModel {
    image: Image;
    imageStyle: string;
    title: string;
    subtitle: string;
    secondarySubtitle: SecondarySubtitle;
    orientation: string;
    sizingRule: string;
    overflowMenuOnTap: OverflowMenuOnTap;
    overflowMenuA11yLabel: string;
    loggingDirectives: LoggingDirectives;
}

export interface Image {
    sources: Source[];
}

export interface Source {
    url: string;
}

export interface SecondarySubtitle {
    content: string;
}

export interface OverflowMenuOnTap {
    innertubeCommand: InnertubeCommand8;
}

export interface InnertubeCommand8 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata51;
    confirmDialogEndpoint: ConfirmDialogEndpoint;
}

export interface CommandMetadata51 {
    webCommandMetadata: WebCommandMetadata51;
}

export interface WebCommandMetadata51 {
    ignoreNavigation: boolean;
}

export interface ConfirmDialogEndpoint {
    content: Content10;
}

export interface Content10 {
    confirmDialogRenderer: ConfirmDialogRenderer4;
}

export interface ConfirmDialogRenderer4 {
    title: Title12;
    trackingParams: string;
    dialogMessages: DialogMessage4[];
    confirmButton: ConfirmButton4;
    primaryIsCancel: boolean;
}

export interface Title12 {
    runs: Run38[];
}

export interface Run38 {
    text: string;
}

export interface DialogMessage4 {
    runs: Run39[];
}

export interface Run39 {
    text: string;
    bold?: boolean;
}

export interface ConfirmButton4 {
    buttonRenderer: ButtonRenderer21;
}

export interface ButtonRenderer21 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text22;
    trackingParams: string;
    accessibilityData: AccessibilityData16;
}

export interface Text22 {
    runs: Run40[];
}

export interface Run40 {
    text: string;
}

export interface AccessibilityData16 {
    accessibilityData: AccessibilityData17;
}

export interface AccessibilityData17 {
    label: string;
}

export interface LoggingDirectives {
    trackingParams: string;
    visibility: Visibility;
    enableDisplayloggerExperiment: boolean;
}

export interface Visibility {
    types: string;
}

export interface Header {
    richListHeaderRenderer: RichListHeaderRenderer;
}

export interface RichListHeaderRenderer {
    title: Title13;
    subtitle: Subtitle2;
    trackingParams: string;
}

export interface Title13 {
    simpleText: string;
}

export interface Subtitle2 {
    simpleText: string;
}

export interface Style {
    type: string;
}

export interface FooterButton {
    buttonViewModel: ButtonViewModel6;
}

export interface ButtonViewModel6 {
    iconName: string;
    onTap: OnTap9;
    style: string;
    trackingParams: string;
    type: string;
    buttonSize: string;
    titleFormatted: TitleFormatted;
}

export interface OnTap9 {
    innertubeCommand: InnertubeCommand9;
}

export interface InnertubeCommand9 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata52;
    browseEndpoint: BrowseEndpoint5;
}

export interface CommandMetadata52 {
    webCommandMetadata: WebCommandMetadata52;
}

export interface WebCommandMetadata52 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint5 {
    browseId: string;
}

export interface TitleFormatted {
    content: string;
}

export interface VideoDescriptionInfocardsSectionRenderer {
    sectionTitle: SectionTitle;
    creatorVideosButton: CreatorVideosButton;
    creatorAboutButton: CreatorAboutButton;
    sectionSubtitle: SectionSubtitle;
    channelAvatar: ChannelAvatar;
    channelEndpoint: ChannelEndpoint;
    trackingParams: string;
}

export interface SectionTitle {
    simpleText: string;
}

export interface CreatorVideosButton {
    buttonRenderer: ButtonRenderer22;
}

export interface ButtonRenderer22 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text23;
    icon: Icon11;
    trackingParams: string;
    command: Command18;
}

export interface Text23 {
    simpleText: string;
}

export interface Icon11 {
    iconType: string;
}

export interface Command18 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata53;
    browseEndpoint: BrowseEndpoint6;
}

export interface CommandMetadata53 {
    webCommandMetadata: WebCommandMetadata53;
}

export interface WebCommandMetadata53 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint6 {
    browseId: string;
    params: string;
}

export interface CreatorAboutButton {
    buttonRenderer: ButtonRenderer23;
}

export interface ButtonRenderer23 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text24;
    icon: Icon12;
    trackingParams: string;
    command: Command19;
}

export interface Text24 {
    simpleText: string;
}

export interface Icon12 {
    iconType: string;
}

export interface Command19 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata54;
    browseEndpoint: BrowseEndpoint7;
}

export interface CommandMetadata54 {
    webCommandMetadata: WebCommandMetadata54;
}

export interface WebCommandMetadata54 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint7 {
    browseId: string;
    params: string;
}

export interface SectionSubtitle {
    accessibility: Accessibility12;
    simpleText: string;
}

export interface Accessibility12 {
    accessibilityData: AccessibilityData18;
}

export interface AccessibilityData18 {
    label: string;
}

export interface ChannelAvatar {
    thumbnails: Thumbnail13[];
}

export interface Thumbnail13 {
    url: string;
}

export interface ChannelEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata55;
    browseEndpoint: BrowseEndpoint8;
}

export interface CommandMetadata55 {
    webCommandMetadata: WebCommandMetadata55;
}

export interface WebCommandMetadata55 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint8 {
    browseId: string;
    canonicalBaseUrl: string;
}

export interface SectionListRenderer {
    contents: Content11[];
    trackingParams: string;
}

export interface Content11 {
    itemSectionRenderer: ItemSectionRenderer2;
}

export interface ItemSectionRenderer2 {
    contents: Content12[];
    trackingParams: string;
    sectionIdentifier: string;
    targetId: string;
}

export interface Content12 {
    continuationItemRenderer: ContinuationItemRenderer3;
}

export interface ContinuationItemRenderer3 {
    trigger: string;
    continuationEndpoint: ContinuationEndpoint3;
}

export interface ContinuationEndpoint3 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata56;
    continuationCommand: ContinuationCommand4;
}

export interface CommandMetadata56 {
    webCommandMetadata: WebCommandMetadata56;
}

export interface WebCommandMetadata56 {
    sendPost: boolean;
    apiUrl: string;
}

export interface ContinuationCommand4 {
    token: string;
    request: string;
}

export interface LoggingDirectives2 {
    trackingParams: string;
    visibility: Visibility2;
    enableDisplayloggerExperiment: boolean;
}

export interface Visibility2 {
    types: string;
}

export interface Header2 {
    engagementPanelTitleHeaderRenderer: EngagementPanelTitleHeaderRenderer;
}

export interface EngagementPanelTitleHeaderRenderer {
    title: Title14;
    contextualInfo?: ContextualInfo;
    menu?: Menu;
    visibilityButton: VisibilityButton;
    trackingParams: string;
}

export interface Title14 {
    runs?: Run41[];
    simpleText?: string;
}

export interface Run41 {
    text: string;
}

export interface ContextualInfo {
    runs: Run42[];
}

export interface Run42 {
    text: string;
}

export interface Menu {
    sortFilterSubMenuRenderer: SortFilterSubMenuRenderer;
}

export interface SortFilterSubMenuRenderer {
    subMenuItems: SubMenuItem[];
    icon: Icon13;
    accessibility: Accessibility13;
    trackingParams: string;
}

export interface SubMenuItem {
    title: string;
    selected: boolean;
    serviceEndpoint: ServiceEndpoint10;
    trackingParams: string;
}

export interface ServiceEndpoint10 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata57;
    continuationCommand: ContinuationCommand5;
}

export interface CommandMetadata57 {
    webCommandMetadata: WebCommandMetadata57;
}

export interface WebCommandMetadata57 {
    sendPost: boolean;
    apiUrl: string;
}

export interface ContinuationCommand5 {
    token: string;
    request: string;
    command: Command20;
}

export interface Command20 {
    clickTrackingParams: string;
    showReloadUiCommand: ShowReloadUiCommand;
}

export interface ShowReloadUiCommand {
    targetId: string;
}

export interface Icon13 {
    iconType: string;
}

export interface Accessibility13 {
    accessibilityData: AccessibilityData19;
}

export interface AccessibilityData19 {
    label: string;
}

export interface VisibilityButton {
    buttonRenderer: ButtonRenderer24;
}

export interface ButtonRenderer24 {
    style?: string;
    size?: string;
    icon: Icon14;
    trackingParams: string;
    accessibilityData: AccessibilityData20;
    command: Command21;
}

export interface Icon14 {
    iconType: string;
}

export interface AccessibilityData20 {
    accessibilityData: AccessibilityData21;
}

export interface AccessibilityData21 {
    label: string;
}

export interface Command21 {
    clickTrackingParams: string;
    hideEngagementPanelEndpoint?: HideEngagementPanelEndpoint;
    commandExecutorCommand?: CommandExecutorCommand6;
}

export interface HideEngagementPanelEndpoint {
    panelIdentifier: string;
}

export interface CommandExecutorCommand6 {
    commands: Command22[];
}

export interface Command22 {
    clickTrackingParams: string;
    changeEngagementPanelVisibilityAction?: ChangeEngagementPanelVisibilityAction5;
    updateToggleButtonStateCommand?: UpdateToggleButtonStateCommand;
}

export interface ChangeEngagementPanelVisibilityAction5 {
    targetId: string;
    visibility: string;
}

export interface UpdateToggleButtonStateCommand {
    toggled: boolean;
    buttonId: string;
}

export interface Topbar {
    desktopTopbarRenderer: DesktopTopbarRenderer;
}

export interface DesktopTopbarRenderer {
    logo: Logo;
    searchbox: Searchbox;
    trackingParams: string;
    countryCode: string;
    topbarButtons: TopbarButton[];
    hotkeyDialog: HotkeyDialog;
    backButton: BackButton;
    forwardButton: ForwardButton;
    a11ySkipNavigationButton: A11ySkipNavigationButton;
    voiceSearchButton: VoiceSearchButton;
}

export interface Logo {
    topbarLogoRenderer: TopbarLogoRenderer;
}

export interface TopbarLogoRenderer {
    iconImage: IconImage;
    tooltipText: TooltipText;
    endpoint: Endpoint;
    trackingParams: string;
    overrideEntityKey: string;
}

export interface IconImage {
    iconType: string;
}

export interface TooltipText {
    runs: Run43[];
}

export interface Run43 {
    text: string;
}

export interface Endpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata58;
    browseEndpoint: BrowseEndpoint9;
}

export interface CommandMetadata58 {
    webCommandMetadata: WebCommandMetadata58;
}

export interface WebCommandMetadata58 {
    url: string;
    webPageType: string;
    rootVe: number;
    apiUrl: string;
}

export interface BrowseEndpoint9 {
    browseId: string;
}

export interface Searchbox {
    fusionSearchboxRenderer: FusionSearchboxRenderer;
}

export interface FusionSearchboxRenderer {
    icon: Icon15;
    placeholderText: PlaceholderText;
    config: Config2;
    trackingParams: string;
    searchEndpoint: SearchEndpoint;
    clearButton: ClearButton;
}

export interface Icon15 {
    iconType: string;
}

export interface PlaceholderText {
    runs: Run44[];
}

export interface Run44 {
    text: string;
}

export interface Config2 {
    webSearchboxConfig: WebSearchboxConfig;
}

export interface WebSearchboxConfig {
    requestLanguage: string;
    requestDomain: string;
    hasOnscreenKeyboard: boolean;
    focusSearchbox: boolean;
}

export interface SearchEndpoint {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata59;
    searchEndpoint: SearchEndpoint2;
}

export interface CommandMetadata59 {
    webCommandMetadata: WebCommandMetadata59;
}

export interface WebCommandMetadata59 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SearchEndpoint2 {
    query: string;
}

export interface ClearButton {
    buttonRenderer: ButtonRenderer25;
}

export interface ButtonRenderer25 {
    style: string;
    size: string;
    isDisabled: boolean;
    icon: Icon16;
    trackingParams: string;
    accessibilityData: AccessibilityData22;
}

export interface Icon16 {
    iconType: string;
}

export interface AccessibilityData22 {
    accessibilityData: AccessibilityData23;
}

export interface AccessibilityData23 {
    label: string;
}

export interface TopbarButton {
    topbarMenuButtonRenderer?: TopbarMenuButtonRenderer;
    buttonRenderer?: ButtonRenderer26;
}

export interface TopbarMenuButtonRenderer {
    icon: Icon17;
    menuRequest: MenuRequest;
    trackingParams: string;
    accessibility: Accessibility14;
    tooltip: string;
    style: string;
}

export interface Icon17 {
    iconType: string;
}

export interface MenuRequest {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata60;
    signalServiceEndpoint: SignalServiceEndpoint5;
}

export interface CommandMetadata60 {
    webCommandMetadata: WebCommandMetadata60;
}

export interface WebCommandMetadata60 {
    sendPost: boolean;
    apiUrl: string;
}

export interface SignalServiceEndpoint5 {
    signal: string;
    actions: Action7[];
}

export interface Action7 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction8;
}

export interface OpenPopupAction8 {
    popup: Popup8;
    popupType: string;
    beReused: boolean;
}

export interface Popup8 {
    multiPageMenuRenderer: MultiPageMenuRenderer;
}

export interface MultiPageMenuRenderer {
    trackingParams: string;
    style: string;
    showLoadingSpinner: boolean;
}

export interface Accessibility14 {
    accessibilityData: AccessibilityData24;
}

export interface AccessibilityData24 {
    label: string;
}

export interface ButtonRenderer26 {
    style: string;
    size: string;
    text: Text25;
    icon: Icon18;
    navigationEndpoint: NavigationEndpoint13;
    trackingParams: string;
    targetId: string;
}

export interface Text25 {
    runs: Run45[];
}

export interface Run45 {
    text: string;
}

export interface Icon18 {
    iconType: string;
}

export interface NavigationEndpoint13 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata61;
    signInEndpoint: SignInEndpoint9;
}

export interface CommandMetadata61 {
    webCommandMetadata: WebCommandMetadata61;
}

export interface WebCommandMetadata61 {
    url: string;
    webPageType: string;
    rootVe: number;
}

export interface SignInEndpoint9 {
    idamTag: string;
}

export interface HotkeyDialog {
    hotkeyDialogRenderer: HotkeyDialogRenderer;
}

export interface HotkeyDialogRenderer {
    title: Title15;
    sections: Section[];
    dismissButton: DismissButton2;
    trackingParams: string;
}

export interface Title15 {
    runs: Run46[];
}

export interface Run46 {
    text: string;
}

export interface Section {
    hotkeyDialogSectionRenderer: HotkeyDialogSectionRenderer;
}

export interface HotkeyDialogSectionRenderer {
    title: Title16;
    options: Option[];
}

export interface Title16 {
    runs: Run47[];
}

export interface Run47 {
    text: string;
}

export interface Option {
    hotkeyDialogSectionOptionRenderer: HotkeyDialogSectionOptionRenderer;
}

export interface HotkeyDialogSectionOptionRenderer {
    label: Label3;
    hotkey: string;
    hotkeyAccessibilityLabel?: HotkeyAccessibilityLabel;
}

export interface Label3 {
    runs: Run48[];
}

export interface Run48 {
    text: string;
}

export interface HotkeyAccessibilityLabel {
    accessibilityData: AccessibilityData25;
}

export interface AccessibilityData25 {
    label: string;
}

export interface DismissButton2 {
    buttonRenderer: ButtonRenderer27;
}

export interface ButtonRenderer27 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text26;
    trackingParams: string;
}

export interface Text26 {
    runs: Run49[];
}

export interface Run49 {
    text: string;
}

export interface BackButton {
    buttonRenderer: ButtonRenderer28;
}

export interface ButtonRenderer28 {
    trackingParams: string;
    command: Command23;
}

export interface Command23 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata62;
    signalServiceEndpoint: SignalServiceEndpoint6;
}

export interface CommandMetadata62 {
    webCommandMetadata: WebCommandMetadata62;
}

export interface WebCommandMetadata62 {
    sendPost: boolean;
}

export interface SignalServiceEndpoint6 {
    signal: string;
    actions: Action8[];
}

export interface Action8 {
    clickTrackingParams: string;
    signalAction: SignalAction2;
}

export interface SignalAction2 {
    signal: string;
}

export interface ForwardButton {
    buttonRenderer: ButtonRenderer29;
}

export interface ButtonRenderer29 {
    trackingParams: string;
    command: Command24;
}

export interface Command24 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata63;
    signalServiceEndpoint: SignalServiceEndpoint7;
}

export interface CommandMetadata63 {
    webCommandMetadata: WebCommandMetadata63;
}

export interface WebCommandMetadata63 {
    sendPost: boolean;
}

export interface SignalServiceEndpoint7 {
    signal: string;
    actions: Action9[];
}

export interface Action9 {
    clickTrackingParams: string;
    signalAction: SignalAction3;
}

export interface SignalAction3 {
    signal: string;
}

export interface A11ySkipNavigationButton {
    buttonRenderer: ButtonRenderer30;
}

export interface ButtonRenderer30 {
    style: string;
    size: string;
    isDisabled: boolean;
    text: Text27;
    trackingParams: string;
    command: Command25;
}

export interface Text27 {
    runs: Run50[];
}

export interface Run50 {
    text: string;
}

export interface Command25 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata64;
    signalServiceEndpoint: SignalServiceEndpoint8;
}

export interface CommandMetadata64 {
    webCommandMetadata: WebCommandMetadata64;
}

export interface WebCommandMetadata64 {
    sendPost: boolean;
}

export interface SignalServiceEndpoint8 {
    signal: string;
    actions: Action10[];
}

export interface Action10 {
    clickTrackingParams: string;
    signalAction: SignalAction4;
}

export interface SignalAction4 {
    signal: string;
}

export interface VoiceSearchButton {
    buttonRenderer: ButtonRenderer31;
}

export interface ButtonRenderer31 {
    style: string;
    size: string;
    isDisabled: boolean;
    serviceEndpoint: ServiceEndpoint11;
    icon: Icon20;
    tooltip: string;
    trackingParams: string;
    accessibilityData: AccessibilityData28;
}

export interface ServiceEndpoint11 {
    clickTrackingParams: string;
    commandMetadata: CommandMetadata65;
    signalServiceEndpoint: SignalServiceEndpoint9;
}

export interface CommandMetadata65 {
    webCommandMetadata: WebCommandMetadata65;
}

export interface WebCommandMetadata65 {
    sendPost: boolean;
}

export interface SignalServiceEndpoint9 {
    signal: string;
    actions: Action11[];
}

export interface Action11 {
    clickTrackingParams: string;
    openPopupAction: OpenPopupAction9;
}

export interface OpenPopupAction9 {
    popup: Popup9;
    popupType: string;
}

export interface Popup9 {
    voiceSearchDialogRenderer: VoiceSearchDialogRenderer;
}

export interface VoiceSearchDialogRenderer {
    placeholderHeader: PlaceholderHeader;
    promptHeader: PromptHeader;
    exampleQuery1: ExampleQuery1;
    exampleQuery2: ExampleQuery2;
    promptMicrophoneLabel: PromptMicrophoneLabel;
    loadingHeader: LoadingHeader;
    connectionErrorHeader: ConnectionErrorHeader;
    connectionErrorMicrophoneLabel: ConnectionErrorMicrophoneLabel;
    permissionsHeader: PermissionsHeader;
    permissionsSubtext: PermissionsSubtext;
    disabledHeader: DisabledHeader;
    disabledSubtext: DisabledSubtext;
    microphoneButtonAriaLabel: MicrophoneButtonAriaLabel;
    exitButton: ExitButton;
    trackingParams: string;
    microphoneOffPromptHeader: MicrophoneOffPromptHeader;
}

export interface PlaceholderHeader {
    runs: Run51[];
}

export interface Run51 {
    text: string;
}

export interface PromptHeader {
    runs: Run52[];
}

export interface Run52 {
    text: string;
}

export interface ExampleQuery1 {
    runs: Run53[];
}

export interface Run53 {
    text: string;
}

export interface ExampleQuery2 {
    runs: Run54[];
}

export interface Run54 {
    text: string;
}

export interface PromptMicrophoneLabel {
    runs: Run55[];
}

export interface Run55 {
    text: string;
}

export interface LoadingHeader {
    runs: Run56[];
}

export interface Run56 {
    text: string;
}

export interface ConnectionErrorHeader {
    runs: Run57[];
}

export interface Run57 {
    text: string;
}

export interface ConnectionErrorMicrophoneLabel {
    runs: Run58[];
}

export interface Run58 {
    text: string;
}

export interface PermissionsHeader {
    runs: Run59[];
}

export interface Run59 {
    text: string;
}

export interface PermissionsSubtext {
    runs: Run60[];
}

export interface Run60 {
    text: string;
}

export interface DisabledHeader {
    runs: Run61[];
}

export interface Run61 {
    text: string;
}

export interface DisabledSubtext {
    runs: Run62[];
}

export interface Run62 {
    text: string;
}

export interface MicrophoneButtonAriaLabel {
    runs: Run63[];
}

export interface Run63 {
    text: string;
}

export interface ExitButton {
    buttonRenderer: ButtonRenderer32;
}

export interface ButtonRenderer32 {
    style: string;
    size: string;
    isDisabled: boolean;
    icon: Icon19;
    trackingParams: string;
    accessibilityData: AccessibilityData26;
}

export interface Icon19 {
    iconType: string;
}

export interface AccessibilityData26 {
    accessibilityData: AccessibilityData27;
}

export interface AccessibilityData27 {
    label: string;
}

export interface MicrophoneOffPromptHeader {
    runs: Run64[];
}

export interface Run64 {
    text: string;
}

export interface Icon20 {
    iconType: string;
}

export interface AccessibilityData28 {
    accessibilityData: AccessibilityData29;
}

export interface AccessibilityData29 {
    label: string;
}

export interface PageVisualEffect {
    cinematicContainerRenderer: CinematicContainerRenderer;
}

export interface CinematicContainerRenderer {
    presentationStyle: string;
    config: Config3;
}

export interface Config3 {
    lightThemeBackgroundColor: number;
    darkThemeBackgroundColor: number;
    animationConfig: AnimationConfig;
    colorSourceSizeMultiplier: number;
    applyClientImageBlur: boolean;
    bottomColorSourceHeightMultiplier: number;
    maxBottomColorSourceHeight: number;
    colorSourceWidthMultiplier: number;
    colorSourceHeightMultiplier: number;
    blurStrength: number;
    watchFullscreenConfig: WatchFullscreenConfig;
    enableInLightTheme: boolean;
}

export interface AnimationConfig {
    minImageUpdateIntervalMs: number;
    crossfadeDurationMs: number;
    crossfadeStartOffset: number;
    maxFrameRate: number;
}

export interface WatchFullscreenConfig {
    colorSourceWidthMultiplier: number;
    colorSourceHeightMultiplier: number;
    scrimWidthMultiplier: number;
    scrimHeightMultiplier: number;
    scrimGradientConfig: ScrimGradientConfig;
}

export interface ScrimGradientConfig {
    gradientType: string;
    gradientStartPointX: number;
    gradientStartPointY: number;
    gradientEndPointX: number;
    gradientEndPointY: number;
}

export interface FrameworkUpdates2 {
    entityBatchUpdate: EntityBatchUpdate2;
}

export interface EntityBatchUpdate2 {
    mutations: Mutation2[];
    timestamp: Timestamp2;
}

export interface Mutation2 {
    entityKey: string;
    type: string;
    options?: Options;
    payload?: Payload2;
}

export interface Options {
    persistenceOption: string;
}

export interface Payload2 {
    subscriptionStateEntity?: SubscriptionStateEntity;
    likeStatusEntity?: LikeStatusEntity2;
    macroMarkersListEntity?: MacroMarkersListEntity;
}

export interface SubscriptionStateEntity {
    key: string;
    subscribed: boolean;
}

export interface LikeStatusEntity2 {
    key: string;
    likeStatus: string;
}

export interface MacroMarkersListEntity {
    key: string;
    externalVideoId: string;
    markersList: MarkersList;
}

export interface MarkersList {
    markerType: string;
    markers: Marker[];
    markersMetadata: MarkersMetadata;
    markersDecoration: MarkersDecoration;
}

export interface Marker {
    startMillis: string;
    durationMillis: string;
    intensityScoreNormalized: number;
}

export interface MarkersMetadata {
    heatmapMetadata: HeatmapMetadata;
}

export interface HeatmapMetadata {
    maxHeightDp: number;
    minHeightDp: number;
    showHideAnimationDurationMillis: number;
}

export interface MarkersDecoration {
    timedMarkerDecorations: TimedMarkerDecoration[];
}

export interface TimedMarkerDecoration {
    visibleTimeRangeStartMillis: number;
    visibleTimeRangeEndMillis: number;
    decorationTimeMillis: number;
    label: Label4;
    icon: string;
}

export interface Label4 {
    runs: Run65[];
}

export interface Run65 {
    text: string;
}

export interface Timestamp2 {
    seconds: string;
    nanos: number;
}

export interface Format2 {
    mimeType: string;
    qualityLabel?: string;
    bitrate: number;
    audioBitrate?: number;
    itag: number;
    width?: number;
    height?: number;
    initRange?: InitRange2;
    indexRange?: IndexRange2;
    lastModified: string;
    contentLength?: string;
    quality: string;
    fps?: number;
    projectionType: string;
    averageBitrate?: number;
    approxDurationMs: string;
    s: string;
    sp: string;
    url: string;
    hasVideo: boolean;
    hasAudio: boolean;
    container: string;
    codecs: string;
    videoCodec?: string;
    audioCodec?: string;
    isLive: boolean;
    isHLS: boolean;
    isDashMPD: boolean;
    colorInfo?: ColorInfo2;
    highReplication?: boolean;
    audioQuality?: string;
    audioSampleRate?: string;
    audioChannels?: number;
    loudnessDb?: number;
}

export interface InitRange2 {
    start: string;
    end: string;
}

export interface IndexRange2 {
    start: string;
    end: string;
}

export interface ColorInfo2 {
    primaries: string;
    transferCharacteristics: string;
    matrixCoefficients: string;
}

export interface VideoDetails3 {
    embed: Embed2;
    title: string;
    description: string;
    lengthSeconds: string;
    ownerProfileUrl: string;
    externalChannelId: string;
    isFamilySafe: boolean;
    availableCountries: string[];
    isUnlisted: boolean;
    hasYpcMetadata: boolean;
    viewCount: string;
    category: string;
    publishDate: string;
    ownerChannelName: string;
    uploadDate: string;
    videoId: string;
    keywords: string[];
    channelId: string;
    isOwnerViewing: boolean;
    isCrawlable: boolean;
    allowRatings: boolean;
    author: Author;
    isPrivate: boolean;
    isUnpluggedCorpus: boolean;
    isLiveContent: boolean;
    media: Media;
    likes: any;
    dislikes: any;
    age_restricted: boolean;
    video_url: string;
    storyboards: Storyboard[];
    chapters: any[];
    thumbnails: Thumbnail15[];
}

export interface Embed2 {
    iframeUrl: string;
    width: number;
    height: number;
}

export interface Author {
    id: string;
    name: string;
    user: string;
    channel_url: string;
    external_channel_url: string;
    user_url: string;
    thumbnails: Thumbnail14[];
    verified: boolean;
    subscriber_count: number;
}

export interface Thumbnail14 {
    url: string;
    width: number;
    height: number;
}

export interface Media { }

export interface Storyboard {
    templateUrl: string;
    thumbnailWidth: number;
    thumbnailHeight: number;
    thumbnailCount: number;
    interval: number;
    columns: number;
    rows: number;
    storyboardCount: number;
}

export interface Thumbnail15 {
    url: string;
    width: number;
    height: number;
}

export const cache: Cache;
export const cookieCache: Cache;
export const watchPageCache: Cache;
export function getBasicInfo( id: string, options: Object): Promise<VideoBasicInfo>;
export function getInfo(id: string, options: Object): Promise<VideoInfo>;
import Cache = require("./cache");
export { validateID, validateURL, getURLVideoID, getVideoID };