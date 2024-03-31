import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class GetRoomsRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): GetRoomsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomsRequest): GetRoomsRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoomsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomsRequest;
  static deserializeBinaryFromReader(message: GetRoomsRequest, reader: jspb.BinaryReader): GetRoomsRequest;
}

export namespace GetRoomsRequest {
  export type AsObject = {
    userid: string,
  }
}

export class GetRoomsResponse extends jspb.Message {
  getRoomidsList(): Array<string>;
  setRoomidsList(value: Array<string>): GetRoomsResponse;
  clearRoomidsList(): GetRoomsResponse;
  addRoomids(value: string, index?: number): GetRoomsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoomsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoomsResponse): GetRoomsResponse.AsObject;
  static serializeBinaryToWriter(message: GetRoomsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoomsResponse;
  static deserializeBinaryFromReader(message: GetRoomsResponse, reader: jspb.BinaryReader): GetRoomsResponse;
}

export namespace GetRoomsResponse {
  export type AsObject = {
    roomidsList: Array<string>,
  }
}

export class ChatMessage extends jspb.Message {
  getRoomid(): string;
  setRoomid(value: string): ChatMessage;

  getUserid(): string;
  setUserid(value: string): ChatMessage;

  getText(): string;
  setText(value: string): ChatMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessage.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
  static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessage;
  static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
  export type AsObject = {
    roomid: string,
    userid: string,
    text: string,
  }
}

export class GetChatMessageRequest extends jspb.Message {
  getRoomid(): string;
  setRoomid(value: string): GetChatMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatMessageRequest): GetChatMessageRequest.AsObject;
  static serializeBinaryToWriter(message: GetChatMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatMessageRequest;
  static deserializeBinaryFromReader(message: GetChatMessageRequest, reader: jspb.BinaryReader): GetChatMessageRequest;
}

export namespace GetChatMessageRequest {
  export type AsObject = {
    roomid: string,
  }
}

export class GetChatMessageResponse extends jspb.Message {
  getContent(): ChatMessage | undefined;
  setContent(value?: ChatMessage): GetChatMessageResponse;
  hasContent(): boolean;
  clearContent(): GetChatMessageResponse;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): GetChatMessageResponse;
  hasTimestamp(): boolean;
  clearTimestamp(): GetChatMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetChatMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetChatMessageResponse): GetChatMessageResponse.AsObject;
  static serializeBinaryToWriter(message: GetChatMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetChatMessageResponse;
  static deserializeBinaryFromReader(message: GetChatMessageResponse, reader: jspb.BinaryReader): GetChatMessageResponse;
}

export namespace GetChatMessageResponse {
  export type AsObject = {
    content?: ChatMessage.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateChatMessageRequest extends jspb.Message {
  getContent(): ChatMessage | undefined;
  setContent(value?: ChatMessage): CreateChatMessageRequest;
  hasContent(): boolean;
  clearContent(): CreateChatMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatMessageRequest): CreateChatMessageRequest.AsObject;
  static serializeBinaryToWriter(message: CreateChatMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatMessageRequest;
  static deserializeBinaryFromReader(message: CreateChatMessageRequest, reader: jspb.BinaryReader): CreateChatMessageRequest;
}

export namespace CreateChatMessageRequest {
  export type AsObject = {
    content?: ChatMessage.AsObject,
  }
}

export class CreateChatMessageResponse extends jspb.Message {
  getResult(): string;
  setResult(value: string): CreateChatMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateChatMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateChatMessageResponse): CreateChatMessageResponse.AsObject;
  static serializeBinaryToWriter(message: CreateChatMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateChatMessageResponse;
  static deserializeBinaryFromReader(message: CreateChatMessageResponse, reader: jspb.BinaryReader): CreateChatMessageResponse;
}

export namespace CreateChatMessageResponse {
  export type AsObject = {
    result: string,
  }
}

