import { newMockEvent } from "matchstick-as";
import { ethereum, Bytes, BigInt } from "@graphprotocol/graph-ts";
import { CommandProposed, HeaderProposed } from "../generated/Propose/Propose";

export function createHeaderProposed(
  id: i32,
  pid: i32,
  currentScore: i32,
  metadataURIHex: string,
  tagId1: i32,
  tagId2: i32
): HeaderProposed {
  let header = new ethereum.Tuple();
  header.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(id)));
  header.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(currentScore)));
  header.push(ethereum.Value.fromBytes(Bytes.fromHexString(metadataURIHex)));
  header.push(
    ethereum.Value.fromArray([
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tagId1)),
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tagId2)),
    ])
  );

  let event = changetype<HeaderProposed>(newMockEvent());
  event.parameters = new Array();
  event.parameters.push(
    new ethereum.EventParam(
      "pid",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(pid))
    )
  );
  event.parameters.push(
    new ethereum.EventParam("header", ethereum.Value.fromTuple(header))
  );

  return event;
}

export function createCommandProposed(
  id: i32,
  pid: i32,
  func1: string,
  func2: string,
  abiParams1Hex: string,
  abiParams2Hex: string,
  currentScore: i32,
  txHash: string
): CommandProposed {
  let action1 = new ethereum.Tuple();
  action1.push(ethereum.Value.fromString(func1));
  action1.push(ethereum.Value.fromBytes(Bytes.fromHexString(abiParams1Hex)));
  let action2 = new ethereum.Tuple();
  action2.push(ethereum.Value.fromString(func2));
  action2.push(ethereum.Value.fromBytes(Bytes.fromHexString(abiParams2Hex)));
  let command = new ethereum.Tuple();
  command.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(id)));
  command.push(
    ethereum.Value.fromArray([
      ethereum.Value.fromTuple(action1),
      ethereum.Value.fromTuple(action2),
    ])
  );
  command.push(ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(currentScore)));

  let event = changetype<CommandProposed>(newMockEvent());
  event.parameters = new Array();
  event.parameters.push(
    new ethereum.EventParam(
      "pid",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(pid))
    )
  );
  event.parameters.push(
    new ethereum.EventParam("command", ethereum.Value.fromTuple(command))
  );
  event.transaction.hash = Bytes.fromHexString(txHash);

  return event;
}