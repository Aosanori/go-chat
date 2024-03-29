import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Rooms extends jspb.Message {
  getRoomid(): string;
  setRoomid(value: string): Rooms;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rooms.AsObject;
  static toObject(includeInstance: boolean, msg: Rooms): Rooms.AsObject;
  static serializeBinaryToWriter(message: Rooms, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rooms;
  static deserializeBinaryFromReader(message: Rooms, reader: jspb.BinaryReader): Rooms;
}

export namespace Rooms {
  export type AsObject = {
    roomid: string,
  }
}

export class Message extends jspb.Message {
  getRoomid(): string;
  setRoomid(value: string): Message;

  getUserid(): string;
  setUserid(value: string): Message;

  getText(): string;
  setText(value: string): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    roomid: string,
    userid: string,
    text: string,
  }
}

export class MessageResponse extends jspb.Message {
  getContent(): Message | undefined;
  setContent(value?: Message): MessageResponse;
  hasContent(): boolean;
  clearContent(): MessageResponse;

  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): MessageResponse;
  hasTimestamp(): boolean;
  clearTimestamp(): MessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MessageResponse): MessageResponse.AsObject;
  static serializeBinaryToWriter(message: MessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageResponse;
  static deserializeBinaryFromReader(message: MessageResponse, reader: jspb.BinaryReader): MessageResponse;
}

export namespace MessageResponse {
  export type AsObject = {
    content?: Message.AsObject,
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateMessageRequest extends jspb.Message {
  getContent(): Message | undefined;
  setContent(value?: Message): CreateMessageRequest;
  hasContent(): boolean;
  clearContent(): CreateMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMessageRequest): CreateMessageRequest.AsObject;
  static serializeBinaryToWriter(message: CreateMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMessageRequest;
  static deserializeBinaryFromReader(message: CreateMessageRequest, reader: jspb.BinaryReader): CreateMessageRequest;
}

export namespace CreateMessageRequest {
  export type AsObject = {
    content?: Message.AsObject,
  }
}

export class CreateMessageResponse extends jspb.Message {
  getResult(): string;
  setResult(value: string): CreateMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMessageResponse): CreateMessageResponse.AsObject;
  static serializeBinaryToWriter(message: CreateMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMessageResponse;
  static deserializeBinaryFromReader(message: CreateMessageResponse, reader: jspb.BinaryReader): CreateMessageResponse;
}

export namespace CreateMessageResponse {
  export type AsObject = {
    result: string,
  }
}

