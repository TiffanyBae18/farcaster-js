/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

/** OneOf type helpers */
type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;
type OneOf<T extends any[]> = T extends [infer Only]
  ? Only
  : T extends [infer A, infer B, ...infer Rest]
  ? OneOf<[XOR<A, B>, ...Rest]>
  : never;

export interface paths {
  "/v1/castById": {
    /** Get a cast by its FID and Hash. */
    get: operations["GetCastById"];
  };
  "/v1/castsByFid": {
    /** Fetch all casts authored by an FID. */
    get: operations["ListCastsByFid"];
  };
  "/v1/castsByMention": {
    /** Fetch all casts that mention an FID */
    get: operations["ListCastsByMention"];
  };
  "/v1/castsByParent": {
    /** Fetch all casts by parent cast's FID and Hash OR by the parent's URL */
    get: operations["ListCastsByParent"];
  };
  "/v1/storageLimitsByFid": {
    /** Get an FID's storage limits. */
    get: operations["GetStorageLimitsByFid"];
  };
  "/v1/events": {
    /** Get a page of Hub events */
    get: operations["ListEvents"];
  };
  "/v1/eventById": {
    /** Get an event by its ID */
    get: operations["GetEventById"];
  };
  "/v1/fids": {
    /** Get a list of all the FIDs */
    get: operations["ListFids"];
  };
  "/v1/info": {
    /** Sync Methods */
    get: operations["GetInfo"];
  };
  "/v1/linkById": {
    /** Get a link by its FID and target FID. */
    get: operations["GetLinkById"];
  };
  "/v1/linksByFid": {
    /** Get all links from a source FID */
    get: operations["ListLinksByFid"];
  };
  "/v1/linksByTargetFid": {
    /** Get all links to a target FID */
    get: operations["ListLinksByTargetFid"];
  };
  "/v1/onChainIdRegistryEventByAddress": {
    /** Get an on chain ID Registry Event for a given Address */
    get: operations["GetOnChainIdRegistrationByAddress"];
  };
  "/v1/onChainEventsByFid": {
    /** Get a list of on-chain events provided by an FID */
    get: operations["ListOnChainEventsByFid"];
  };
  "/v1/onChainSignersByFid": {
    /**
     * Get a list of signers provided by an FID
     * @description **Note:** one of two different response schemas is returned  based on whether the caller provides the `signer` parameter. If included, a single `OnChainEventSigner` message is returned (or a `not_found` error). If omitted, a  non-paginated list of `OnChainEventSigner` messages is returned instead
     */
    get: operations["ListOnChainSignersByFid"];
  };
  "/v1/reactionById": {
    /** Get a reaction by its created FID and target Cast. */
    get: operations["GetReactionById"];
  };
  "/v1/reactionsByCast": {
    /** Get all reactions to a cast */
    get: operations["ListReactionsByCast"];
  };
  "/v1/reactionsByFid": {
    /** Get all reactions by an FID */
    get: operations["ListReactionsByFid"];
  };
  "/v1/reactionsByTarget": {
    get: operations["ListReactionsByTarget"];
  };
  "/v1/userDataByFid": {
    /**
     * Get UserData for a FID.
     * @description **Note:** one of two different response schemas is returned  based on whether the caller provides the `user_data_type` parameter. If included, a single `UserDataAdd` message is returned (or a `not_found` error). If omitted, a paginated list of `UserDataAdd` messages is returned instead
     */
    get: operations["GetUserDataByFid"];
  };
  "/v1/userNameProofsByFid": {
    /** Get a list of proofs provided by an FID */
    get: operations["ListUsernameProofsByFid"];
  };
  "/v1/userNameProofByName": {
    /** Get an proof for a username by the Farcaster username */
    get: operations["GetUsernameProof"];
  };
  "/v1/verificationsByFid": {
    /** Get a list of verifications provided by an FID */
    get: operations["ListVerificationsByFid"];
  };
  "/v1/submitMessage": {
    /** Submit a signed protobuf-serialized message to the Hub */
    post: operations["SubmitMessage"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    CastAdd: components["schemas"]["MessageCommon"] & {
      data: components["schemas"]["MessageDataCastAdd"];
    };
    /** * Adds a new Cast */
    CastAddBody: {
      /** URLs to be embedded in the cast */
      embedsDeprecated?: string[];
      /** Fids mentioned in the cast */
      mentions?: number[];
      parentCastId?: components["schemas"]["CastId"];
      /**
       * Parent URL
       * @example chain://eip155:1/erc721:0x39d89b649ffa044383333d297e325d42d31329b2
       */
      parentUrl?: string;
      /** Text of the cast */
      text?: string;
      /** Positions of the mentions in the text */
      mentionsPositions?: number[];
      /** URLs or cast ids to be embedded in the cast */
      embeds?: components["schemas"]["Embed"][];
    };
    CastRemove: components["schemas"]["MessageCommon"] & {
      data?: components["schemas"]["MessageDataCastRemove"];
    };
    /** * Identifier used to look up a Cast */
    CastId: {
      /**
       * Fid of the user who created the cast
       * Format: uint64
       */
      fid: number;
      hash: components["schemas"]["CastHash"];
    };
    CastHash: string;
    /** * Removes an existing Cast */
    CastRemoveBody: {
      /**
       * Hash of the cast to remove
       * Format: byte
       */
      targetHash?: string;
    };
    DbStats: {
      /** Format: uint64 */
      numMessages: number;
      /** Format: uint64 */
      numFidEvents: number;
      /** Format: uint64 */
      numFnameEvents: number;
    };
    Embed: {
      /** Format: uri */
      url?: string;
      castId?: components["schemas"]["CastId"];
    };
    ErrorResponse: {
      errCode: string;
      presentable: boolean;
      name: string;
      code: number;
      details: string;
      metadata: {
        errcode: string[];
      };
    };
    /**
     * * Farcaster network the message is intended for
     * @description - FARCASTER_NETWORK_MAINNET: Public primary network
     *  - FARCASTER_NETWORK_TESTNET: Public test network
     *  - FARCASTER_NETWORK_DEVNET: Private test network
     * @default FARCASTER_NETWORK_MAINNET
     * @enum {string}
     */
    FarcasterNetwork:
      | "FARCASTER_NETWORK_MAINNET"
      | "FARCASTER_NETWORK_TESTNET"
      | "FARCASTER_NETWORK_DEVNET";
    FidsResponse: {
      fids: number[];
      /** Format: byte */
      nextPageToken: string;
    };
    /**
     * * Type of hashing scheme used to produce a digest of MessageData
     * @description - HASH_SCHEME_BLAKE3: Default scheme for hashing MessageData
     * @default HASH_SCHEME_BLAKE3
     * @enum {string}
     */
    HashScheme: "HASH_SCHEME_BLAKE3";
    HubEvent:
      | components["schemas"]["HubEventMergeMessage"]
      | components["schemas"]["HubEventPruneMessage"]
      | components["schemas"]["HubEventRevokeMessage"]
      | components["schemas"]["HubEventMergeUsernameProof"]
      | components["schemas"]["HubEventMergeOnChainEvent"];
    HubEventMergeMessage: {
      /** @example HUB_EVENT_TYPE_MERGE_MESSAGE */
      type: string;
      /** Format: uint64 */
      id: number;
      mergeMessageBody: components["schemas"]["MergeMessageBody"];
    };
    HubEventPruneMessage: {
      /** @example HUB_EVENT_TYPE_PRUNE_MESSAGE */
      type: string;
      /** Format: uint64 */
      id: number;
      pruneMessageBody: components["schemas"]["PruneMessageBody"];
    };
    HubEventRevokeMessage: {
      /** @example HUB_EVENT_TYPE_REVOKE_MESSAGE */
      type: string;
      /** Format: uint64 */
      id: number;
      revokeMessageBody: components["schemas"]["RevokeMessageBody"];
    };
    HubEventMergeUsernameProof: {
      /** @example HUB_EVENT_TYPE_MERGE_USERNAME_PROOF */
      type: string;
      /** Format: uint64 */
      id: number;
      mergeUsernameProofBody: components["schemas"]["MergeUserNameProofBody"];
    };
    HubEventMergeOnChainEvent: {
      /** @example HUB_EVENT_TYPE_MERGE_ON_CHAIN_EVENT */
      type: string;
      /** Format: uint64 */
      id: number;
      mergeOnChainEventBody: components["schemas"]["MergeOnChainEventBody"];
    };
    /**
     * - HUB_EVENT_TYPE_MERGE_USERNAME_PROOF: Deprecated
     *  HUB_EVENT_TYPE_MERGE_ID_REGISTRY_EVENT = 4;
     *  HUB_EVENT_TYPE_MERGE_NAME_REGISTRY_EVENT = 5;
     *  - HUB_EVENT_TYPE_MERGE_ON_CHAIN_EVENT: Deprecated
     *  HUB_EVENT_TYPE_MERGE_RENT_REGISTRY_EVENT = 7;
     *  HUB_EVENT_TYPE_MERGE_STORAGE_ADMIN_REGISTRY_EVENT = 8;
     * @default HUB_EVENT_TYPE_MERGE_MESSAGE
     * @enum {string}
     */
    HubEventType:
      | "HUB_EVENT_TYPE_MERGE_MESSAGE"
      | "HUB_EVENT_TYPE_PRUNE_MESSAGE"
      | "HUB_EVENT_TYPE_REVOKE_MESSAGE"
      | "HUB_EVENT_TYPE_MERGE_USERNAME_PROOF"
      | "HUB_EVENT_TYPE_MERGE_ON_CHAIN_EVENT";
    /** Response Types for the Sync RPC Methods */
    HubInfoResponse: {
      version: string;
      isSyncing: boolean;
      nickname: string;
      rootHash: string;
      dbStats?: components["schemas"]["DbStats"];
      peerId: string;
      /** Format: uint64 */
      hubOperatorFid: number;
    };
    IdRegisterEventBody: {
      to: string;
      eventType: components["schemas"]["IdRegisterEventType"];
      /** @example 0x */
      from: string;
      /** @example 0x00000000fcd5a8e45785c8a4b9a718c9348e4f18 */
      recoveryAddress: string;
    };
    /**
     * @default ID_REGISTER_EVENT_TYPE_REGISTER
     * @enum {string}
     */
    IdRegisterEventType:
      | "ID_REGISTER_EVENT_TYPE_REGISTER"
      | "ID_REGISTER_EVENT_TYPE_TRANSFER"
      | "ID_REGISTER_EVENT_TYPE_CHANGE_RECOVERY";
    LinkAdd: components["schemas"]["MessageCommon"] & {
      data: components["schemas"]["MessageDataLink"];
    };
    /** * Adds or removes a Link */
    LinkBody: {
      type?: components["schemas"]["LinkType"];
      /**
       * User-defined timestamp that preserves original timestamp when message.data.timestamp needs to be updated for compaction
       * Format: int64
       */
      displayTimestamp?: number;
      /**
       * The fid the link relates to
       * Format: uint64
       */
      targetFid?: number;
    };
    LinkRemove: components["schemas"]["MessageCommon"] & {
      data?: components["schemas"]["MessageDataLink"];
    };
    /**
     * * Type of Link
     * @description - follow: Follow another user
     * @default follow
     * @enum {string}
     */
    LinkType: "follow";
    MergeMessageBody: {
      message: components["schemas"]["Message"];
      deletedMessages: components["schemas"]["Message"][];
    };
    MergeOnChainEventBody: {
      onChainEvent?: components["schemas"]["OnChainEvent"];
    };
    MergeUserNameProofBody: {
      usernameProof?: components["schemas"]["UserNameProof"];
      deletedUsernameProof?: components["schemas"]["UserNameProof"];
      usernameProofMessage?: components["schemas"]["Message"];
      deletedUsernameProofMessage?: components["schemas"]["Message"];
    };
    /**
     * @description *
     * A Message is a delta operation on the Farcaster network. The message protobuf is an envelope
     * that wraps a MessageData object and contains a hash and signature which can verify its authenticity.
     */
    Message: {
      data:
        | components["schemas"]["MessageDataCastAdd"]
        | components["schemas"]["MessageDataCastRemove"]
        | components["schemas"]["MessageDataReaction"]
        | components["schemas"]["MessageDataLink"]
        | components["schemas"]["MessageDataVerificationAdd"]
        | components["schemas"]["MessageDataVerificationRemove"]
        | components["schemas"]["MessageDataUserDataAdd"]
        | components["schemas"]["MessageDataUsernameProof"];
    } & components["schemas"]["MessageCommon"];
    MessageCommon: {
      /**
       * Hash digest of data
       * @example 0xd2b1ddc6c88e865a33cb1a565e0058d757042974
       */
      hash: string;
      hashScheme: components["schemas"]["HashScheme"];
      /**
       * Signature of the hash digest
       * Format: byte
       */
      signature: string;
      signatureScheme: components["schemas"]["SignatureScheme"];
      /** Public key or address of the key pair that produced the signature */
      signer: string;
    };
    MessageDataCommon: {
      type: components["schemas"]["MessageType"];
      /**
       * Farcaster ID of the user producing the message
       * Format: uint64
       * @example 2
       */
      fid: number;
      /**
       * Farcaster epoch timestamp in seconds
       * Format: int64
       * @example 48994466
       */
      timestamp: number;
      network: components["schemas"]["FarcasterNetwork"];
    };
    MessageDataCastAdd: components["schemas"]["MessageDataCommon"] & {
      castAddBody: components["schemas"]["CastAddBody"];
    };
    MessageDataCastRemove: components["schemas"]["MessageDataCommon"] & {
      castRemoveBody: components["schemas"]["CastRemoveBody"];
    };
    MessageDataLink: components["schemas"]["MessageDataCommon"] & {
      linkBody: components["schemas"]["LinkBody"];
    };
    MessageDataReaction: components["schemas"]["MessageDataCommon"] & {
      reactionBody: components["schemas"]["ReactionBody"];
    };
    MessageDataUserDataAdd: components["schemas"]["MessageDataCommon"] & {
      userDataBody: components["schemas"]["UserDataBody"];
    };
    MessageDataUsernameProof: components["schemas"]["MessageDataCommon"] & {
      usernameProofBody: components["schemas"]["UserNameProof"];
    };
    MessageDataVerificationAdd: components["schemas"]["MessageDataCommon"] & {
      verificationAddEthAddressBody: components["schemas"]["VerificationAddEthAddressBody"];
    };
    MessageDataVerificationRemove: components["schemas"]["MessageDataCommon"] & {
      verificationRemoveBody: components["schemas"]["VerificationRemoveBody"];
    };
    /**
     * * Type of the MessageBody
     * @description - MESSAGE_TYPE_CAST_ADD: Add a new Cast
     *  - MESSAGE_TYPE_CAST_REMOVE: Remove an existing Cast
     *  - MESSAGE_TYPE_REACTION_ADD: Add a Reaction to a Cast
     *  - MESSAGE_TYPE_REACTION_REMOVE: Remove a Reaction from a Cast
     *  - MESSAGE_TYPE_LINK_ADD: Add a new Link
     *  - MESSAGE_TYPE_LINK_REMOVE: Remove an existing Link
     *  - MESSAGE_TYPE_VERIFICATION_ADD_ETH_ADDRESS: Add a Verification of an Ethereum Address
     *  - MESSAGE_TYPE_VERIFICATION_REMOVE: Remove a Verification
     *  - MESSAGE_TYPE_USER_DATA_ADD: Deprecated
     *  MESSAGE_TYPE_SIGNER_ADD = 9; // Add a new Ed25519 key pair that signs messages for a user
     *  MESSAGE_TYPE_SIGNER_REMOVE = 10; // Remove an Ed25519 key pair that signs messages for a user
     *
     * Add metadata about a user
     *  - MESSAGE_TYPE_USERNAME_PROOF: Add or replace a username proof
     * @default MESSAGE_TYPE_CAST_ADD
     * @enum {string}
     */
    MessageType:
      | "MESSAGE_TYPE_CAST_ADD"
      | "MESSAGE_TYPE_CAST_REMOVE"
      | "MESSAGE_TYPE_REACTION_ADD"
      | "MESSAGE_TYPE_REACTION_REMOVE"
      | "MESSAGE_TYPE_LINK_ADD"
      | "MESSAGE_TYPE_LINK_REMOVE"
      | "MESSAGE_TYPE_VERIFICATION_ADD_ETH_ADDRESS"
      | "MESSAGE_TYPE_VERIFICATION_REMOVE"
      | "MESSAGE_TYPE_USER_DATA_ADD"
      | "MESSAGE_TYPE_USERNAME_PROOF";
    OnChainEvent:
      | components["schemas"]["OnChainEventSigner"]
      | components["schemas"]["OnChainEventSignerMigrated"]
      | components["schemas"]["OnChainEventIdRegister"]
      | components["schemas"]["OnChainEventStorageRent"];
    OnChainEventCommon: {
      /** @example EVENT_TYPE_SIGNER */
      type: string;
      chainId: number;
      blockNumber: number;
      /** @example 0x75fbbb8b2a4ede67ac350e1b0503c6a152c0091bd8e3ef4a6927d58e088eae28 */
      blockHash: string;
      blockTimestamp: number;
      /** @example 0x36ef79e6c460e6ae251908be13116ff0065960adb1ae032b4cc65a8352f28952 */
      transactionHash: string;
      logIndex: number;
      txIndex: number;
      fid: number;
    };
    OnChainEventSigner: components["schemas"]["OnChainEventCommon"] & {
      signerEventBody: components["schemas"]["SignerEventBody"];
    };
    OnChainEventSignerMigrated: components["schemas"]["OnChainEventCommon"] & {
      signerMigratedEventBody: components["schemas"]["SignerMigratedEventBody"];
    };
    OnChainEventIdRegister: components["schemas"]["OnChainEventCommon"] & {
      idRegisterEventBody: components["schemas"]["IdRegisterEventBody"];
    };
    OnChainEventStorageRent: components["schemas"]["OnChainEventCommon"] & {
      storageRentEventBody: components["schemas"]["StorageRentEventBody"];
    };
    /**
     * @default EVENT_TYPE_SIGNER
     * @enum {string}
     */
    OnChainEventType:
      | "EVENT_TYPE_SIGNER"
      | "EVENT_TYPE_SIGNER_MIGRATED"
      | "EVENT_TYPE_ID_REGISTER"
      | "EVENT_TYPE_STORAGE_RENT";
    PruneMessageBody: {
      message?: components["schemas"]["Message"];
    };
    Reaction: components["schemas"]["MessageCommon"] & {
      data: components["schemas"]["MessageDataReaction"];
    };
    /** * Adds or removes a Reaction from a Cast */
    ReactionBody: {
      type: components["schemas"]["ReactionType"];
      targetCastId?: components["schemas"]["CastId"];
      /** URL to react to */
      targetUrl?: string;
    };
    ReactionRemove: components["schemas"]["MessageCommon"] & {
      data?: components["schemas"]["MessageDataReaction"];
    };
    /**
     * * Type of Reaction
     * @description - REACTION_TYPE_LIKE: Like the target cast
     *  - REACTION_TYPE_RECAST: Share target cast to the user's audience
     * @default REACTION_TYPE_LIKE
     * @enum {string}
     */
    ReactionType: "REACTION_TYPE_LIKE" | "REACTION_TYPE_RECAST";
    RevokeMessageBody: {
      message?: components["schemas"]["Message"];
    };
    /**
     * * Type of signature scheme used to sign the Message hash
     * @description - SIGNATURE_SCHEME_ED25519: Ed25519 signature (default)
     *  - SIGNATURE_SCHEME_EIP712: ECDSA signature using EIP-712 scheme
     * @default SIGNATURE_SCHEME_ED25519
     * @enum {string}
     */
    SignatureScheme: "SIGNATURE_SCHEME_ED25519" | "SIGNATURE_SCHEME_EIP712";
    SignerEventBody: {
      key: string;
      /** Format: int64 */
      keyType: number;
      eventType: components["schemas"]["SignerEventType"];
      /** Format: byte */
      metadata: string;
      /** Format: int64 */
      metadataType: number;
    };
    /**
     * @default SIGNER_EVENT_TYPE_ADD
     * @enum {string}
     */
    SignerEventType:
      | "SIGNER_EVENT_TYPE_ADD"
      | "SIGNER_EVENT_TYPE_REMOVE"
      | "SIGNER_EVENT_TYPE_ADMIN_RESET";
    SignerMigratedEventBody: {
      /** Format: int64 */
      migratedAt: number;
    };
    StorageLimit: {
      storeType: components["schemas"]["StoreType"];
      /** Format: uint64 */
      limit: number;
    };
    StorageLimitsResponse: {
      limits: components["schemas"]["StorageLimit"][];
    };
    StorageRentEventBody: {
      /** Format: byte */
      payer: string;
      /** Format: int64 */
      units: number;
      /** Format: int64 */
      expiry: number;
    };
    /**
     * @default STORE_TYPE_CASTS
     * @enum {string}
     */
    StoreType:
      | "STORE_TYPE_CASTS"
      | "STORE_TYPE_LINKS"
      | "STORE_TYPE_REACTIONS"
      | "STORE_TYPE_USER_DATA"
      | "STORE_TYPE_VERIFICATIONS"
      | "STORE_TYPE_USERNAME_PROOFS";
    UserDataAdd: components["schemas"]["MessageCommon"] & {
      data: components["schemas"]["MessageDataUserDataAdd"];
    };
    /** * Adds metadata about a user */
    UserDataBody: {
      type: components["schemas"]["UserDataType"];
      /** Value of the metadata */
      value: string;
    };
    /**
     * * Type of UserData
     * @description - USER_DATA_TYPE_PFP: Profile Picture for the user
     *  - USER_DATA_TYPE_DISPLAY: Display Name for the user
     *  - USER_DATA_TYPE_BIO: Bio for the user
     *  - USER_DATA_TYPE_URL: URL of the user
     *  - USER_DATA_TYPE_USERNAME: Preferred Name for the user
     * @default USER_DATA_TYPE_PFP
     * @enum {string}
     */
    UserDataType:
      | "USER_DATA_TYPE_PFP"
      | "USER_DATA_TYPE_DISPLAY"
      | "USER_DATA_TYPE_BIO"
      | "USER_DATA_TYPE_URL"
      | "USER_DATA_TYPE_USERNAME";
    UserNameProof: {
      /** Format: uint64 */
      timestamp: number;
      /** @example gavi */
      name: string;
      owner: string;
      /** Format: byte */
      signature: string;
      /** Format: uint64 */
      fid: number;
      type: components["schemas"]["UserNameType"];
    };
    UsernameProofsResponse: {
      proofs: components["schemas"]["UserNameProof"][];
    };
    /**
     * @default USERNAME_TYPE_FNAME
     * @enum {string}
     */
    UserNameType: "USERNAME_TYPE_FNAME" | "USERNAME_TYPE_ENS_L1";
    Verification: components["schemas"]["MessageCommon"] & {
      data: components["schemas"]["MessageDataVerificationAdd"];
    };
    /** * Adds a Verification of ownership of an Ethereum Address */
    VerificationAddEthAddressBody: {
      /** Ethereum address being verified */
      address: string;
      /**
       * Signature produced by the user's Ethereum address
       * Format: byte
       */
      ethSignature: string;
      /** Hash of the latest Ethereum block when the signature was produced */
      blockHash: string;
    };
    VerificationRemove: components["schemas"]["MessageCommon"] & {
      data?: components["schemas"]["MessageDataVerificationRemove"];
    };
    /** * Removes a Verification of any type */
    VerificationRemoveBody: {
      /** Address of the Verification to remove */
      address: string;
    };
  };
  responses: {
    /** @description An unexpected error response. */
    ErrorResponse: {
      content: {
        "application/json": components["schemas"]["ErrorResponse"];
      };
    };
  };
  parameters: {
    /** @description Maximum number of messages to return in a single response */
    pageSize?: number;
    /** @description Reverse the sort order, returning latest messages first */
    paginationReverse?: boolean;
    /** @description The page token returned by the previous query, to fetch the next page. If this parameter is empty, fetch the first page */
    pageToken?: string;
  };
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {
  /** Get a cast by its FID and Hash. */
  GetCastById: {
    parameters: {
      query: {
        /** @description The FID of the cast's creator */
        fid: number;
        /** @description The cast's hash */
        hash: string;
      };
    };
    responses: {
      /** @description The requested Cast. */
      200: {
        content: {
          "application/json": components["schemas"]["CastAdd"];
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Fetch all casts authored by an FID. */
  ListCastsByFid: {
    parameters: {
      query: {
        /** @description The FID of the casts' creator */
        fid: number;
        pageSize?: components["parameters"]["pageSize"];
        reverse?: components["parameters"]["paginationReverse"];
        pageToken?: components["parameters"]["pageToken"];
      };
    };
    responses: {
      /** @description The requested Casts. */
      200: {
        content: {
          "application/json": {
            messages: components["schemas"]["CastAdd"][];
            /** Format: byte */
            nextPageToken: string;
          };
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Fetch all casts that mention an FID */
  ListCastsByMention: {
    parameters: {
      query: {
        /** @description The FID that is mentioned in a cast */
        fid: number;
        pageSize?: components["parameters"]["pageSize"];
        reverse?: components["parameters"]["paginationReverse"];
        pageToken?: components["parameters"]["pageToken"];
      };
    };
    responses: {
      /** @description The requested Casts. */
      200: {
        content: {
          "application/json": {
            messages: components["schemas"]["CastAdd"][];
            /** Format: byte */
            nextPageToken: string;
          };
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Fetch all casts by parent cast's FID and Hash OR by the parent's URL */
  ListCastsByParent: {
    parameters: {
      query?: {
        /** @description The FID of the parent cast */
        fid?: number;
        /** @description The parent cast's hash */
        hash?: string;
        url?: string;
        pageSize?: components["parameters"]["pageSize"];
        reverse?: components["parameters"]["paginationReverse"];
        pageToken?: components["parameters"]["pageToken"];
      };
    };
    responses: {
      /** @description The requested Casts. */
      200: {
        content: {
          "application/json": {
            messages: components["schemas"]["CastAdd"][];
            /** Format: byte */
            nextPageToken: string;
          };
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Get an FID's storage limits. */
  GetStorageLimitsByFid: {
    parameters: {
      query: {
        fid: number;
      };
    };
    responses: {
      /** @description A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["StorageLimitsResponse"];
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Get a page of Hub events */
  ListEvents: {
    parameters: {
      query?: {
        /** @description An optional Hub Id to start getting events from.  This is also returned from the API as nextPageEventId, which  can be used to page through all the Hub events. Set it to 0  to start from the first event */
        from_event_id?: number;
      };
    };
    responses: {
      /** @description A successful response. */
      200: {
        content: {
          "application/json": {
            nextPageEventId: number;
            events: components["schemas"]["HubEvent"][];
          };
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Get an event by its ID */
  GetEventById: {
    parameters: {
      query: {
        /** @description The Hub Id of the event */
        event_id: number;
      };
    };
    responses: {
      /** @description A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["HubEvent"];
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Get a list of all the FIDs */
  ListFids: {
    parameters: {
      query?: {
        pageSize?: components["parameters"]["pageSize"];
        reverse?: components["parameters"]["paginationReverse"];
        pageToken?: components["parameters"]["pageToken"];
      };
    };
    responses: {
      /** @description A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["FidsResponse"];
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Sync Methods */
  GetInfo: {
    parameters: {
      query: {
        /** @description Whether to return DB stats */
        dbstats: boolean;
      };
    };
    responses: {
      /** @description A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["HubInfoResponse"];
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Get a link by its FID and target FID. */
  GetLinkById: {
    parameters: {
      query: {
        /** @description The FID of the link's originator */
        fid: number;
        /** @description The FID of the target of the link */
        target_fid: number;
        /** @description The type of link, as a string value */
        link_type: components["schemas"]["LinkType"];
      };
    };
    responses: {
      /** @description The requested Link. */
      200: {
        content: {
          "application/json": components["schemas"]["LinkAdd"];
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Get all links from a source FID */
  ListLinksByFid: {
    parameters: {
      query: {
        /** @description The FID of the link's originator */
        fid: number;
        /** @description The type of link, as a string value */
        link_type?: components["schemas"]["LinkType"];
        pageSize?: components["parameters"]["pageSize"];
        reverse?: components["parameters"]["paginationReverse"];
        pageToken?: components["parameters"]["pageToken"];
      };
    };
    responses: {
      /** @description The requested Links. */
      200: {
        content: {
          "application/json": {
            messages: components["schemas"]["LinkAdd"][];
            /** Format: byte */
            nextPageToken: string;
          };
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Get all links to a target FID */
  ListLinksByTargetFid: {
    parameters: {
      query: {
        /** @description The FID of the target of the link */
        target_fid: number;
        /** @description The type of link, as a string value */
        link_type?: components["schemas"]["LinkType"];
        pageSize?: components["parameters"]["pageSize"];
        reverse?: components["parameters"]["paginationReverse"];
        pageToken?: components["parameters"]["pageToken"];
      };
    };
    responses: {
      /** @description The requested Links. */
      200: {
        content: {
          "application/json": {
            messages: components["schemas"]["LinkAdd"][];
            /** Format: byte */
            nextPageToken: string;
          };
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Get an on chain ID Registry Event for a given Address */
  GetOnChainIdRegistrationByAddress: {
    parameters: {
      query: {
        /** @description The ETH address being requested */
        address: string;
      };
    };
    responses: {
      /** @description A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["OnChainEventIdRegister"];
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Get a list of on-chain events provided by an FID */
  ListOnChainEventsByFid: {
    parameters: {
      query: {
        /** @description The FID being requested */
        fid: number;
        /** @description The numeric of string value of the event type being requested. */
        event_type: components["schemas"]["OnChainEventType"];
      };
    };
    responses: {
      /** @description A successful response. */
      200: {
        content: {
          "application/json": {
            events: components["schemas"]["OnChainEvent"][];
          };
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /**
   * Get a list of signers provided by an FID
   * @description **Note:** one of two different response schemas is returned  based on whether the caller provides the `signer` parameter. If included, a single `OnChainEventSigner` message is returned (or a `not_found` error). If omitted, a  non-paginated list of `OnChainEventSigner` messages is returned instead
   */
  ListOnChainSignersByFid: {
    parameters: {
      query: {
        /** @description The FID being requested */
        fid: number;
        /**
         * @description The optional key of signer
         * @example 0x0852c07b5695ff94138b025e3f9b4788e06133f04e254f0ea0eb85a06e999cdd
         */
        signer?: string;
      };
    };
    responses: {
      /** @description A successful response. */
      200: {
        content: {
          "application/json": OneOf<
            [
              components["schemas"]["OnChainEventSigner"],
              {
                events: components["schemas"]["OnChainEventSigner"][];
              }
            ]
          >;
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Get a reaction by its created FID and target Cast. */
  GetReactionById: {
    parameters: {
      query: {
        /** @description The FID of the reaction's creator */
        fid: number;
        /** @description The FID of the cast's creator */
        target_fid: number;
        /** @description The cast's hash */
        target_hash: string;
        /** @description The type of reaction, either as a numerical enum value or string representation */
        reaction_type: components["schemas"]["ReactionType"];
      };
    };
    responses: {
      /** @description The requested Reaction. */
      200: {
        content: {
          "application/json": components["schemas"]["Reaction"];
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Get all reactions to a cast */
  ListReactionsByCast: {
    parameters: {
      query: {
        /** @description The FID of the cast's creator */
        target_fid: number;
        /** @description The hash of the cast */
        target_hash: string;
        /** @description The type of reaction, either as a numerical enum value or string representation */
        reaction_type: components["schemas"]["ReactionType"];
        pageSize?: components["parameters"]["pageSize"];
        reverse?: components["parameters"]["paginationReverse"];
        pageToken?: components["parameters"]["pageToken"];
      };
    };
    responses: {
      /** @description The requested Reactions. */
      200: {
        content: {
          "application/json": {
            messages: components["schemas"]["Reaction"][];
            /** Format: byte */
            nextPageToken: string;
          };
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Get all reactions by an FID */
  ListReactionsByFid: {
    parameters: {
      query: {
        /** @description The FID of the reaction's creator */
        fid: number;
        /** @description The type of reaction, either as a numerical enum value or string representation */
        reaction_type: components["schemas"]["ReactionType"];
        pageSize?: components["parameters"]["pageSize"];
        reverse?: components["parameters"]["paginationReverse"];
        pageToken?: components["parameters"]["pageToken"];
      };
    };
    responses: {
      /** @description The requested Reactions. */
      200: {
        content: {
          "application/json": {
            messages: components["schemas"]["Reaction"][];
            /** Format: byte */
            nextPageToken: string;
          };
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  ListReactionsByTarget: {
    parameters: {
      query: {
        /** @description The URL of the parent cast */
        url: string;
        /** @description The type of reaction, either as a numerical enum value or string representation */
        reaction_type: components["schemas"]["ReactionType"];
        pageSize?: components["parameters"]["pageSize"];
        reverse?: components["parameters"]["paginationReverse"];
        pageToken?: components["parameters"]["pageToken"];
      };
    };
    responses: {
      /** @description The requested Reactions. */
      200: {
        content: {
          "application/json": {
            messages: components["schemas"]["Reaction"][];
            /** Format: byte */
            nextPageToken: string;
          };
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /**
   * Get UserData for a FID.
   * @description **Note:** one of two different response schemas is returned  based on whether the caller provides the `user_data_type` parameter. If included, a single `UserDataAdd` message is returned (or a `not_found` error). If omitted, a paginated list of `UserDataAdd` messages is returned instead
   */
  GetUserDataByFid: {
    parameters: {
      query: {
        /** @description The FID that's being requested */
        fid: number;
        /** @description The type of user data, either as a numerical value or type string. If this is omitted, all user data for the FID is returned */
        user_data_type?: components["schemas"]["UserDataType"];
        pageSize?: components["parameters"]["pageSize"];
        reverse?: components["parameters"]["paginationReverse"];
        pageToken?: components["parameters"]["pageToken"];
      };
    };
    responses: {
      /** @description The requested UserData. */
      200: {
        content: {
          "application/json": OneOf<
            [
              components["schemas"]["UserDataAdd"],
              {
                messages: components["schemas"]["UserDataAdd"][];
                /** Format: byte */
                nextPageToken: string;
              }
            ]
          >;
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Get a list of proofs provided by an FID */
  ListUsernameProofsByFid: {
    parameters: {
      query: {
        /** @description The FID being requested */
        fid: number;
      };
    };
    responses: {
      /** @description A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["UsernameProofsResponse"];
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Get an proof for a username by the Farcaster username */
  GetUsernameProof: {
    parameters: {
      query: {
        /** @description The Farcaster username or ENS address */
        name: string;
      };
    };
    responses: {
      /** @description A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["UserNameProof"];
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Get a list of verifications provided by an FID */
  ListVerificationsByFid: {
    parameters: {
      query: {
        /** @description The FID being requested */
        fid: number;
        /** @description The optional ETH address to filter by */
        address?: string;
        pageSize?: components["parameters"]["pageSize"];
        reverse?: components["parameters"]["paginationReverse"];
        pageToken?: components["parameters"]["pageToken"];
      };
    };
    responses: {
      /** @description The requested Reactions. */
      200: {
        content: {
          "application/json": {
            messages: components["schemas"]["Verification"][];
            /** Format: byte */
            nextPageToken: string;
          };
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
  /** Submit a signed protobuf-serialized message to the Hub */
  SubmitMessage: {
    /**
     * @description *
     * A Message is a delta operation on the Farcaster network. The message protobuf is an envelope
     * that wraps a MessageData object and contains a hash and signature which can verify its authenticity.
     */
    requestBody: {
      content: {
        "application/json": components["schemas"]["Message"];
      };
    };
    responses: {
      /** @description A successful response. */
      200: {
        content: {
          "application/json": components["schemas"]["Message"];
        };
      };
      default: components["responses"]["ErrorResponse"];
    };
  };
}
