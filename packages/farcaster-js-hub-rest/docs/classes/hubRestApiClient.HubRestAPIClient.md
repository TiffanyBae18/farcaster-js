[@standard-crypto/farcaster-js-hub-rest](../README.md) / [Modules](../modules.md) / [hubRestApiClient](../modules/hubRestApiClient.md) / HubRestAPIClient

# Class: HubRestAPIClient

[hubRestApiClient](../modules/hubRestApiClient.md).HubRestAPIClient

## Table of contents

### Constructors

- [constructor](hubRestApiClient.HubRestAPIClient.md#constructor)

### Properties

- [apis](hubRestApiClient.HubRestAPIClient.md#apis)

### Methods

- [followUser](hubRestApiClient.HubRestAPIClient.md#followuser)
- [getCastById](hubRestApiClient.HubRestAPIClient.md#getcastbyid)
- [getHubEventById](hubRestApiClient.HubRestAPIClient.md#gethubeventbyid)
- [getHubInfo](hubRestApiClient.HubRestAPIClient.md#gethubinfo)
- [getLinkById](hubRestApiClient.HubRestAPIClient.md#getlinkbyid)
- [getOnChainIdRegistryEventByAddress](hubRestApiClient.HubRestAPIClient.md#getonchainidregistryeventbyaddress)
- [getOnChainSignerEventBySigner](hubRestApiClient.HubRestAPIClient.md#getonchainsignereventbysigner)
- [getReactionById](hubRestApiClient.HubRestAPIClient.md#getreactionbyid)
- [getSpecificUserDataByFid](hubRestApiClient.HubRestAPIClient.md#getspecificuserdatabyfid)
- [getStorageLimitsByFid](hubRestApiClient.HubRestAPIClient.md#getstoragelimitsbyfid)
- [getUsernameProof](hubRestApiClient.HubRestAPIClient.md#getusernameproof)
- [listAllUserDataByFid](hubRestApiClient.HubRestAPIClient.md#listalluserdatabyfid)
- [listCastsByFid](hubRestApiClient.HubRestAPIClient.md#listcastsbyfid)
- [listCastsByMention](hubRestApiClient.HubRestAPIClient.md#listcastsbymention)
- [listCastsByParent](hubRestApiClient.HubRestAPIClient.md#listcastsbyparent)
- [listFids](hubRestApiClient.HubRestAPIClient.md#listfids)
- [listHubEvents](hubRestApiClient.HubRestAPIClient.md#listhubevents)
- [listLinksByFid](hubRestApiClient.HubRestAPIClient.md#listlinksbyfid)
- [listLinksByTargetFid](hubRestApiClient.HubRestAPIClient.md#listlinksbytargetfid)
- [listOnChainEventsByFid](hubRestApiClient.HubRestAPIClient.md#listonchaineventsbyfid)
- [listReactionsByCast](hubRestApiClient.HubRestAPIClient.md#listreactionsbycast)
- [listReactionsByFid](hubRestApiClient.HubRestAPIClient.md#listreactionsbyfid)
- [listReactionsByTarget](hubRestApiClient.HubRestAPIClient.md#listreactionsbytarget)
- [listUsernameProofsForFid](hubRestApiClient.HubRestAPIClient.md#listusernameproofsforfid)
- [listVerificationsByFid](hubRestApiClient.HubRestAPIClient.md#listverificationsbyfid)
- [removeCast](hubRestApiClient.HubRestAPIClient.md#removecast)
- [removeLink](hubRestApiClient.HubRestAPIClient.md#removelink)
- [removeReaction](hubRestApiClient.HubRestAPIClient.md#removereaction)
- [removeVerification](hubRestApiClient.HubRestAPIClient.md#removeverification)
- [submitCast](hubRestApiClient.HubRestAPIClient.md#submitcast)
- [submitLink](hubRestApiClient.HubRestAPIClient.md#submitlink)
- [submitReaction](hubRestApiClient.HubRestAPIClient.md#submitreaction)
- [submitVerification](hubRestApiClient.HubRestAPIClient.md#submitverification)
- [unfollowUser](hubRestApiClient.HubRestAPIClient.md#unfollowuser)
- [validateMessage](hubRestApiClient.HubRestAPIClient.md#validatemessage)
- [isApiErrorResponse](hubRestApiClient.HubRestAPIClient.md#isapierrorresponse)

## Constructors

### constructor

• **new HubRestAPIClient**(`«destructured»?`): [`HubRestAPIClient`](hubRestApiClient.HubRestAPIClient.md)

Instantiates a HubRestAPIClient

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`HubRestAPIClientConfig`](../interfaces/hubRestApiClient.HubRestAPIClientConfig.md) |

#### Returns

[`HubRestAPIClient`](hubRestApiClient.HubRestAPIClient.md)

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:120](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L120)

## Properties

### apis

• `Readonly` **apis**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `casts` | [`CastsApi`](openapi.CastsApi.md) |
| `fids` | [`FIDsApi`](openapi.FIDsApi.md) |
| `hubEvents` | [`HubEventsApi`](openapi.HubEventsApi.md) |
| `info` | [`InfoApi`](openapi.InfoApi.md) |
| `links` | [`LinksApi`](openapi.LinksApi.md) |
| `onChainEvents` | [`OnChainEventsApi`](openapi.OnChainEventsApi.md) |
| `reactions` | [`ReactionsApi`](openapi.ReactionsApi.md) |
| `storage` | [`StorageApi`](openapi.StorageApi.md) |
| `submitMessage` | [`SubmitMessageApi`](openapi.SubmitMessageApi.md) |
| `userData` | [`UserDataApi`](openapi.UserDataApi.md) |
| `usernames` | [`UsernamesApi`](openapi.UsernamesApi.md) |
| `validateMessage` | [`ValidateMessageApi`](openapi.ValidateMessageApi.md) |
| `verifications` | [`VerificationsApi`](openapi.VerificationsApi.md) |

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:101](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L101)

## Methods

### followUser

▸ **followUser**(`targetFid`, `fid`, `signer`): `Promise`\<[`LinkAdd`](../modules/openapi.md#linkadd)\>

Follows a User. Wraps submitLink.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/submitmessage.html#submitmessage)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetFid` | `number` | The FID of the user to follow |
| `fid` | `number` | The FID of the signer |
| `signer` | `string` \| `Signer` | The signer's hex private key or Signer object |

#### Returns

`Promise`\<[`LinkAdd`](../modules/openapi.md#linkadd)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:323](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L323)

___

### getCastById

▸ **getCastById**(`«destructured»`): `Promise`\<``null`` \| [`CastAdd`](../modules/openapi.md#castadd)\>

Get a cast by its FID and Hash.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/casts.html#castbyid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`CastId`](../interfaces/openapi.CastId.md) |

#### Returns

`Promise`\<``null`` \| [`CastAdd`](../modules/openapi.md#castadd)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:607](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L607)

___

### getHubEventById

▸ **getHubEventById**(`eventId`): `Promise`\<``null`` \| [`HubEvent`](../modules/openapi.md#hubevent)\>

Get a hub event by its Id.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/events.html#eventbyid)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventId` | `number` | The Hub Id of the event |

#### Returns

`Promise`\<``null`` \| [`HubEvent`](../modules/openapi.md#hubevent)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:1179](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L1179)

___

### getHubInfo

▸ **getHubInfo**\<`T`\>(`«destructured»?`): `Promise`\<[`HubInfo`](../modules/hubRestApiClient.md#hubinfo)\<`T`\>\>

Get the Hub's info.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/info.html#info)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `undefined` \| `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `includeDbStats?` | `T` |

#### Returns

`Promise`\<[`HubInfo`](../modules/hubRestApiClient.md#hubinfo)\<`T`\>\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:177](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L177)

___

### getLinkById

▸ **getLinkById**(`sourceFid`, `targetFid`): `Promise`\<``null`` \| [`LinkAdd`](../modules/openapi.md#linkadd)\>

Get a link by its FID and target FID.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/links.html#linkbyid)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sourceFid` | `number` | The FID of the link's creator |
| `targetFid` | `number` | The FID of the link's target |

#### Returns

`Promise`\<``null`` \| [`LinkAdd`](../modules/openapi.md#linkadd)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:849](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L849)

___

### getOnChainIdRegistryEventByAddress

▸ **getOnChainIdRegistryEventByAddress**(`address`): `Promise`\<``null`` \| [`OnChainEventIdRegister`](../modules/openapi.md#onchaineventidregister)\>

Get a specific on-chain ID registration event by address.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/onchain.html#onchainidregistryeventbyaddress)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The ETH address being requested |

#### Returns

`Promise`\<``null`` \| [`OnChainEventIdRegister`](../modules/openapi.md#onchaineventidregister)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:1153](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L1153)

___

### getOnChainSignerEventBySigner

▸ **getOnChainSignerEventBySigner**(`fid`, `signer`): `Promise`\<``null`` \| [`OnChainEventSigner`](../modules/openapi.md#onchaineventsigner)\>

Get a specific on-chain signer event by FID and signer.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/onchain.html#onchainsignersbyfid)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fid` | `number` | The FID being requested |
| `signer` | `string` | The key of signer |

#### Returns

`Promise`\<``null`` \| [`OnChainEventSigner`](../modules/openapi.md#onchaineventsigner)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:1126](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L1126)

___

### getReactionById

▸ **getReactionById**(`id`): `Promise`\<``null`` \| [`Reaction`](../modules/openapi.md#reaction)\>

Get a reaction by its created FID and target Cast.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/reactions.html#reactionbyid)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | [`ReactionsApiGetReactionByIdRequest`](../interfaces/openapi.ReactionsApiGetReactionByIdRequest.md) | The source and target of the reaction, and the reaction type |

#### Returns

`Promise`\<``null`` \| [`Reaction`](../modules/openapi.md#reaction)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:721](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L721)

___

### getSpecificUserDataByFid

▸ **getSpecificUserDataByFid**(`fid`, `userDataType`): `Promise`\<``null`` \| [`UserDataAdd`](../modules/openapi.md#userdataadd)\>

Get a specific type of UserData for a FID.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/userdata.html#userdatabyfid)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fid` | `number` | The FID that's being requested |
| `userDataType` | [`UserDataType`](../enums/openapi.UserDataType.md) | The type of UserData requested |

#### Returns

`Promise`\<``null`` \| [`UserDataAdd`](../modules/openapi.md#userdataadd)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:942](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L942)

___

### getStorageLimitsByFid

▸ **getStorageLimitsByFid**(`fid`): `Promise`\<[`StorageLimit`](../interfaces/openapi.StorageLimit.md)[]\>

Get an FID's storage limits.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/storagelimits.html#storagelimitsbyfid)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fid` | `number` | The FID that's being requested |

#### Returns

`Promise`\<[`StorageLimit`](../interfaces/openapi.StorageLimit.md)[]\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:1029](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L1029)

___

### getUsernameProof

▸ **getUsernameProof**(`username`): `Promise`\<``null`` \| [`UserNameProof`](../interfaces/openapi.UserNameProof.md)\>

Get an proof for a username by the Farcaster username.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/usernameproof.html#usernameproofbyname)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | The Farcaster username or ENS address |

#### Returns

`Promise`\<``null`` \| [`UserNameProof`](../interfaces/openapi.UserNameProof.md)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:1040](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L1040)

___

### listAllUserDataByFid

▸ **listAllUserDataByFid**(`fid`, `options?`): `AsyncGenerator`\<[`UserDataAdd`](../modules/openapi.md#userdataadd), `void`, `undefined`\>

Get all UserData for a FID. Returns an empty iterator if FID has no user data or does not exist.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/userdata.html#userdatabyfid)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fid` | `number` | The FID that's being requested |
| `options?` | [`PaginationOptions`](../interfaces/hubRestApiClient.PaginationOptions.md) | - |

#### Returns

`AsyncGenerator`\<[`UserDataAdd`](../modules/openapi.md#userdataadd), `void`, `undefined`\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:969](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L969)

___

### listCastsByFid

▸ **listCastsByFid**(`fid`, `options?`): `AsyncGenerator`\<[`CastAdd`](../modules/openapi.md#castadd), `void`, `undefined`\>

Fetch all casts for authored by an FID.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/casts.html#castsbyfid)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fid` | `number` | The FID of the cast's creator |
| `options?` | [`PaginationOptions`](../interfaces/hubRestApiClient.PaginationOptions.md) |  |

#### Returns

`AsyncGenerator`\<[`CastAdd`](../modules/openapi.md#castadd), `void`, `undefined`\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:628](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L628)

___

### listCastsByMention

▸ **listCastsByMention**(`fid`, `options?`): `AsyncGenerator`\<[`CastAdd`](../modules/openapi.md#castadd), `void`, `undefined`\>

Fetch all casts that mention an FID.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/casts.html#castsbymention)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fid` | `number` | The FID that is mentioned in a cast |
| `options?` | [`PaginationOptions`](../interfaces/hubRestApiClient.PaginationOptions.md) |  |

#### Returns

`AsyncGenerator`\<[`CastAdd`](../modules/openapi.md#castadd), `void`, `undefined`\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:659](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L659)

___

### listCastsByParent

▸ **listCastsByParent**(`parent`, `options?`): `AsyncGenerator`\<[`CastAdd`](../modules/openapi.md#castadd), `void`, `undefined`\>

Fetch all casts by parent cast's FID and Hash OR by the parent's URL.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/casts.html#castsbyparent)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`CastId`](../interfaces/openapi.CastId.md) \| \{ `url`: `string`  } |
| `options?` | [`PaginationOptions`](../interfaces/hubRestApiClient.PaginationOptions.md) |

#### Returns

`AsyncGenerator`\<[`CastAdd`](../modules/openapi.md#castadd), `void`, `undefined`\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:690](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L690)

___

### listFids

▸ **listFids**(`options?`): `AsyncGenerator`\<`number`, `void`, `undefined`\>

Get a list of all the FIDs.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/fids.html#fids)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`PaginationOptions`](../interfaces/hubRestApiClient.PaginationOptions.md) |

#### Returns

`AsyncGenerator`\<`number`, `void`, `undefined`\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:1000](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L1000)

___

### listHubEvents

▸ **listHubEvents**(`fromEventId?`): `AsyncGenerator`\<[`HubEvent`](../modules/openapi.md#hubevent), `void`, `undefined`\>

Get a page of Hub events.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/events.html#events)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fromEventId?` | `number` | An optional Hub Id to start getting events from. |

#### Returns

`AsyncGenerator`\<[`HubEvent`](../modules/openapi.md#hubevent), `void`, `undefined`\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:1201](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L1201)

___

### listLinksByFid

▸ **listLinksByFid**(`fid`, `options?`): `AsyncGenerator`\<[`LinkAdd`](../modules/openapi.md#linkadd), `void`, `undefined`\>

Get all links from a source FID.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/links.html#linksbyfid)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fid` | `number` | The FID of the link's originator |
| `options?` | [`PaginationOptions`](../interfaces/hubRestApiClient.PaginationOptions.md) |  |

#### Returns

`AsyncGenerator`\<[`LinkAdd`](../modules/openapi.md#linkadd), `void`, `undefined`\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:877](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L877)

___

### listLinksByTargetFid

▸ **listLinksByTargetFid**(`targetFid`, `options?`): `AsyncGenerator`\<[`LinkAdd`](../modules/openapi.md#linkadd), `void`, `undefined`\>

Get all links to a target FID.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/links.html#linksbytargetfid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetFid` | `number` |
| `options?` | [`PaginationOptions`](../interfaces/hubRestApiClient.PaginationOptions.md) |

#### Returns

`AsyncGenerator`\<[`LinkAdd`](../modules/openapi.md#linkadd), `void`, `undefined`\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:909](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L909)

___

### listOnChainEventsByFid

▸ **listOnChainEventsByFid**\<`T`\>(`fid`, `eventType`): `Promise`\<[`OnChainEventsReturnType`](../modules/hubRestApiClient.md#onchaineventsreturntype)\<`T`\>[]\>

Get a list of on-chain events by an FID.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/onchain.html#onchaineventsbyfid)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`OnChainEventType`](../enums/openapi.OnChainEventType.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fid` | `number` | The FID being requested |
| `eventType` | `T` | The event type being requested |

#### Returns

`Promise`\<[`OnChainEventsReturnType`](../modules/hubRestApiClient.md#onchaineventsreturntype)\<`T`\>[]\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:1108](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L1108)

___

### listReactionsByCast

▸ **listReactionsByCast**(`targetFid`, `targetHash`, `reactionType`, `options?`): `AsyncGenerator`\<[`Reaction`](../modules/openapi.md#reaction), `void`, `undefined`\>

Get all reactions to a cast.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/reactions.html#reactionsbycast)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetFid` | `number` | The FID of the cast's creator |
| `targetHash` | `string` | The hash of the cast |
| `reactionType` | [`ReactionType`](../enums/openapi.ReactionType.md) | The type of reaction |
| `options?` | [`PaginationOptions`](../interfaces/hubRestApiClient.PaginationOptions.md) |  |

#### Returns

`AsyncGenerator`\<[`Reaction`](../modules/openapi.md#reaction), `void`, `undefined`\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:780](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L780)

___

### listReactionsByFid

▸ **listReactionsByFid**(`fid`, `reactionType`, `options?`): `AsyncGenerator`\<[`Reaction`](../modules/openapi.md#reaction), `void`, `undefined`\>

Get all reactions by an FID.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/reactions.html#reactionsbyfid)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fid` | `number` | The FID of the reaction's creator |
| `reactionType` | [`ReactionType`](../enums/openapi.ReactionType.md) | The type of reaction |
| `options?` | [`PaginationOptions`](../interfaces/hubRestApiClient.PaginationOptions.md) |  |

#### Returns

`AsyncGenerator`\<[`Reaction`](../modules/openapi.md#reaction), `void`, `undefined`\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:745](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L745)

___

### listReactionsByTarget

▸ **listReactionsByTarget**(`url`, `reactionType`, `options?`): `AsyncGenerator`\<[`Reaction`](../modules/openapi.md#reaction), `void`, `undefined`\>

Get all reactions to cast's target URL.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/reactions.html#reactionsbytarget)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | The URL of the parent cast |
| `reactionType` | [`ReactionType`](../enums/openapi.ReactionType.md) | The type of reaction |
| `options?` | [`PaginationOptions`](../interfaces/hubRestApiClient.PaginationOptions.md) |  |

#### Returns

`AsyncGenerator`\<[`Reaction`](../modules/openapi.md#reaction), `void`, `undefined`\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:816](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L816)

___

### listUsernameProofsForFid

▸ **listUsernameProofsForFid**(`fid`): `Promise`\<[`UserNameProof`](../interfaces/openapi.UserNameProof.md)[]\>

Get a list of proofs provided by an FID.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/usernameproof.html#usernameproofsbyfid)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fid` | `number` | The FID being requested |

#### Returns

`Promise`\<[`UserNameProof`](../interfaces/openapi.UserNameProof.md)[]\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:1065](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L1065)

___

### listVerificationsByFid

▸ **listVerificationsByFid**(`fid`, `options?`): `AsyncGenerator`\<[`Verification`](../modules/openapi.md#verification), `void`, `undefined`\>

Get a list of verifications provided by an FID.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/verification.html)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fid` | `number` | The FID being requested |
| `options?` | [`PaginationOptions`](../interfaces/hubRestApiClient.PaginationOptions.md) & \{ `address?`: `string`  } | The optional ETH address to filter by |

#### Returns

`AsyncGenerator`\<[`Verification`](../modules/openapi.md#verification), `void`, `undefined`\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:1076](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L1076)

___

### removeCast

▸ **removeCast**(`castHash`, `fid`, `signer`): `Promise`\<[`CastRemove`](../modules/openapi.md#castremove)\>

Deletes a Cast.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/submitmessage.html#submitmessage)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `castHash` | `string` | The hash of the cast to delete |
| `fid` | `number` | The FID of the signer |
| `signer` | `string` \| `Signer` | The signer's hex private key or Signer object |

#### Returns

`Promise`\<[`CastRemove`](../modules/openapi.md#castremove)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:250](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L250)

___

### removeLink

▸ **removeLink**(`link`, `fid`, `signer`): `Promise`\<[`LinkRemove`](../modules/openapi.md#linkremove)\>

Removes a Link. Used to unfollow users
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/submitmessage.html#submitmessage)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `link` | `Object` | The link to remove |
| `link.displayTimestamp?` | `number` | - |
| `link.targetFid?` | `number` | - |
| `link.type` | `string` | - |
| `fid` | `number` | The FID of the signer |
| `signer` | `string` \| `Signer` | The signer's hex private key or Signer object |

#### Returns

`Promise`\<[`LinkRemove`](../modules/openapi.md#linkremove)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:342](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L342)

___

### removeReaction

▸ **removeReaction**(`reaction`, `fid`, `signer`): `Promise`\<[`ReactionRemove`](../modules/openapi.md#reactionremove)\>

Removes a Reaction. Used to un-like or un-recast.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/submitmessage.html#submitmessage)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reaction` | `Object` | The reaction to remove |
| `reaction.target` | [`CastId`](../interfaces/openapi.CastId.md) \| \{ `url`: `string`  } | - |
| `reaction.type` | ``"like"`` \| ``"recast"`` | - |
| `fid` | `number` | The FID of the signer |
| `signer` | `string` \| `Signer` | The signer's hex private key or Signer object |

#### Returns

`Promise`\<[`ReactionRemove`](../modules/openapi.md#reactionremove)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:449](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L449)

___

### removeVerification

▸ **removeVerification**(`address`, `fid`, `signer`): `Promise`\<[`VerificationRemove`](../modules/openapi.md#verificationremove)\>

Removes a Verification.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/submitmessage.html#submitmessage)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address to remove the verification for |
| `fid` | `number` | The FID of the signer |
| `signer` | `string` \| `Signer` | The signer's hex private key or Signer object |

#### Returns

`Promise`\<[`VerificationRemove`](../modules/openapi.md#verificationremove)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:573](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L573)

___

### submitCast

▸ **submitCast**(`cast`, `fid`, `signer`): `Promise`\<[`CastAdd`](../modules/openapi.md#castadd)\>

Submits a Cast.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/submitmessage.html#submitmessage)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cast` | `Object` | The cast to submit |
| `cast.embeds?` | `Embed`[] | - |
| `cast.embedsDeprecated?` | `string`[] | - |
| `cast.mentions?` | `number`[] | - |
| `cast.mentionsPositions?` | `number`[] | - |
| `cast.parentCastId?` | [`CastId`](../interfaces/openapi.CastId.md) | - |
| `cast.parentUrl?` | `string` | - |
| `cast.text` | `string` | - |
| `fid` | `number` | The FID of the signer |
| `signer` | `string` \| `Signer` | The signer's hex private key or Signer object |

#### Returns

`Promise`\<[`CastAdd`](../modules/openapi.md#castadd)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:191](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L191)

___

### submitLink

▸ **submitLink**(`link`, `fid`, `signer`): `Promise`\<[`LinkAdd`](../modules/openapi.md#linkadd)\>

Submits a Link. Used to follow users.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/submitmessage.html#submitmessage)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `link` | `Object` | The link to submit |
| `link.displayTimestamp?` | `number` | - |
| `link.targetFid?` | `number` | - |
| `link.type` | `string` | - |
| `fid` | `number` | The FID of the signer |
| `signer` | `string` \| `Signer` | The signer's hex private key or Signer object |

#### Returns

`Promise`\<[`LinkAdd`](../modules/openapi.md#linkadd)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:288](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L288)

___

### submitReaction

▸ **submitReaction**(`reaction`, `fid`, `signer`): `Promise`\<[`Reaction`](../modules/openapi.md#reaction)\>

Submits a Reaction. Used to like or recast.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/submitmessage.html#submitmessage)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reaction` | `Object` | The reaction to submit |
| `reaction.target` | [`CastId`](../interfaces/openapi.CastId.md) \| \{ `url`: `string`  } | - |
| `reaction.type` | ``"like"`` \| ``"recast"`` | - |
| `fid` | `number` | The FID of the signer |
| `signer` | `string` \| `Signer` | The signer's hex private key or Signer object |

#### Returns

`Promise`\<[`Reaction`](../modules/openapi.md#reaction)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:396](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L396)

___

### submitVerification

▸ **submitVerification**(`verification`, `fid`, `signer`): `Promise`\<[`Verification`](../modules/openapi.md#verification)\>

Submits a Verification.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/submitmessage.html#submitmessage)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `verification` | `Object` | The verification to submit |
| `verification.chainId` | `number` | - |
| `verification.network` | ``"MAINNET"`` \| ``"TESTNET"`` \| ``"DEVNET"`` | - |
| `verification.verificationType` | ``"EOA"`` \| ``"contract"`` | - |
| `verification.verifiedAddressMnemonicOrPrivateKey` | `string` | - |
| `fid` | `number` | The FID of the signer |
| `signer` | `string` \| `Signer` | The signer's hex private key or Signer object |

#### Returns

`Promise`\<[`Verification`](../modules/openapi.md#verification)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:502](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L502)

___

### unfollowUser

▸ **unfollowUser**(`targetFid`, `fid`, `signer`): `Promise`\<[`LinkRemove`](../modules/openapi.md#linkremove)\>

Un-follows a User. Wraps removeLink.
See [farcaster documentation](https://www.thehubble.xyz/docs/httpapi/submitmessage.html#submitmessage)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `targetFid` | `number` | The FID of the user to unfollow |
| `fid` | `number` | The FID of the signer |
| `signer` | `string` \| `Signer` | The signer's hex private key or Signer object |

#### Returns

`Promise`\<[`LinkRemove`](../modules/openapi.md#linkremove)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:377](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L377)

___

### validateMessage

▸ **validateMessage**(`encodedMessage`): `Promise`\<[`ValidateMessageResponse`](../interfaces/openapi.ValidateMessageResponse.md)\>

Validate a signed protobuf-serialized message with the Hub.
This can be used to verify that the hub will consider the message valid.
Or to validate message that cannot be submitted (e.g. Frame actions).
See [farcaster documentation](https://github.com/farcasterxyz/hub-monorepo/blob/main/apps/hubble/www/docs/docs/httpapi/message.md#validatemessage)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `encodedMessage` | `string` | A signed protobuf-serialized message to validate. |

#### Returns

`Promise`\<[`ValidateMessageResponse`](../interfaces/openapi.ValidateMessageResponse.md)\>

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:1228](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L1228)

___

### isApiErrorResponse

▸ **isApiErrorResponse**(`error`): error is Object

Utility for parsing errors returned by a hub's REST API server. Returns true
if the given error is caused by an error response from the server, and
narrows the type of `error` accordingly.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `any` |

#### Returns

error is Object

#### Defined in

[packages/farcaster-js-hub-rest/src/hubRestApiClient.ts:1245](https://github.com/standard-crypto/farcaster-js/blob/main/packages/farcaster-js-hub-rest/src/hubRestApiClient.ts#L1245)
