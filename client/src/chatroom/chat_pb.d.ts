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

export class ChatMessageForSending extends jspb.Message {
  getContentsList(): Array<Message>;
  setContentsList(value: Array<Message>): ChatMessageForSending;
  clearContentsList(): ChatMessageForSending;
  addContents(value?: Message, index?: number): Message;

  getTimestampsList(): Array<google_protobuf_timestamp_pb.Timestamp>;
  setTimestampsList(value: Array<google_protobuf_timestamp_pb.Timestamp>): ChatMessageForSending;
  clearTimestampsList(): ChatMessageForSending;
  addTimestamps(value?: google_protobuf_timestamp_pb.Timestamp, index?: number): google_protobuf_timestamp_pb.Timestamp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessageForSending.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessageForSending): ChatMessageForSending.AsObject;
  static serializeBinaryToWriter(message: ChatMessageForSending, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessageForSending;
  static deserializeBinaryFromReader(message: ChatMessageForSending, reader: jspb.BinaryReader): ChatMessageForSending;
}

export namespace ChatMessageForSending {
  export type AsObject = {
    contentsList: Array<Message.AsObject>,
    timestampsList: Array<google_protobuf_timestamp_pb.Timestamp.AsObject>,
  }
}

export class ChatMessageForReceiving extends jspb.Message {
  getContent(): Message | undefined;
  setContent(value?: Message): ChatMessageForReceiving;
  hasContent(): boolean;
  clearContent(): ChatMessageForReceiving;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChatMessageForReceiving.AsObject;
  static toObject(includeInstance: boolean, msg: ChatMessageForReceiving): ChatMessageForReceiving.AsObject;
  static serializeBinaryToWriter(message: ChatMessageForReceiving, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChatMessageForReceiving;
  static deserializeBinaryFromReader(message: ChatMessageForReceiving, reader: jspb.BinaryReader): ChatMessageForReceiving;
}

export namespace ChatMessageForReceiving {
  export type AsObject = {
    content?: Message.AsObject,
  }
}

