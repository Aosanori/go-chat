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

export class MessagesResponse extends jspb.Message {
  getContentsList(): Array<Message>;
  setContentsList(value: Array<Message>): MessagesResponse;
  clearContentsList(): MessagesResponse;
  addContents(value?: Message, index?: number): Message;

  getTimestampsList(): Array<google_protobuf_timestamp_pb.Timestamp>;
  setTimestampsList(value: Array<google_protobuf_timestamp_pb.Timestamp>): MessagesResponse;
  clearTimestampsList(): MessagesResponse;
  addTimestamps(value?: google_protobuf_timestamp_pb.Timestamp, index?: number): google_protobuf_timestamp_pb.Timestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MessagesResponse): MessagesResponse.AsObject;
  static serializeBinaryToWriter(message: MessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessagesResponse;
  static deserializeBinaryFromReader(message: MessagesResponse, reader: jspb.BinaryReader): MessagesResponse;
}

export namespace MessagesResponse {
  export type AsObject = {
    contentsList: Array<Message.AsObject>,
    timestampsList: Array<google_protobuf_timestamp_pb.Timestamp.AsObject>,
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

