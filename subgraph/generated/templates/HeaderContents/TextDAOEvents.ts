// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class CommandCreated extends ethereum.Event {
  get params(): CommandCreated__Params {
    return new CommandCreated__Params(this);
  }
}

export class CommandCreated__Params {
  _event: CommandCreated;

  constructor(event: CommandCreated) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get commandId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get actions(): Array<CommandCreatedActionsStruct> {
    return this._event.parameters[2].value.toTupleArray<CommandCreatedActionsStruct>();
  }
}

export class CommandCreatedActionsStruct extends ethereum.Tuple {
  get funcSig(): string {
    return this[0].toString();
  }

  get abiParams(): Bytes {
    return this[1].toBytes();
  }
}

export class DeliberationConfigUpdated extends ethereum.Event {
  get params(): DeliberationConfigUpdated__Params {
    return new DeliberationConfigUpdated__Params(this);
  }
}

export class DeliberationConfigUpdated__Params {
  _event: DeliberationConfigUpdated;

  constructor(event: DeliberationConfigUpdated) {
    this._event = event;
  }

  get config(): DeliberationConfigUpdatedConfigStruct {
    return changetype<DeliberationConfigUpdatedConfigStruct>(
      this._event.parameters[0].value.toTuple(),
    );
  }
}

export class DeliberationConfigUpdatedConfigStruct extends ethereum.Tuple {
  get expiryDuration(): BigInt {
    return this[0].toBigInt();
  }

  get snapInterval(): BigInt {
    return this[1].toBigInt();
  }

  get repsNum(): BigInt {
    return this[2].toBigInt();
  }

  get quorumScore(): BigInt {
    return this[3].toBigInt();
  }
}

export class DeliberationConfigUpdatedByProposal extends ethereum.Event {
  get params(): DeliberationConfigUpdatedByProposal__Params {
    return new DeliberationConfigUpdatedByProposal__Params(this);
  }
}

export class DeliberationConfigUpdatedByProposal__Params {
  _event: DeliberationConfigUpdatedByProposal;

  constructor(event: DeliberationConfigUpdatedByProposal) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get config(): DeliberationConfigUpdatedByProposalConfigStruct {
    return changetype<DeliberationConfigUpdatedByProposalConfigStruct>(
      this._event.parameters[1].value.toTuple(),
    );
  }
}

export class DeliberationConfigUpdatedByProposalConfigStruct extends ethereum.Tuple {
  get expiryDuration(): BigInt {
    return this[0].toBigInt();
  }

  get snapInterval(): BigInt {
    return this[1].toBigInt();
  }

  get repsNum(): BigInt {
    return this[2].toBigInt();
  }

  get quorumScore(): BigInt {
    return this[3].toBigInt();
  }
}

export class HeaderCreated extends ethereum.Event {
  get params(): HeaderCreated__Params {
    return new HeaderCreated__Params(this);
  }
}

export class HeaderCreated__Params {
  _event: HeaderCreated;

  constructor(event: HeaderCreated) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get headerId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get metadataCid(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class MemberAdded extends ethereum.Event {
  get params(): MemberAdded__Params {
    return new MemberAdded__Params(this);
  }
}

export class MemberAdded__Params {
  _event: MemberAdded;

  constructor(event: MemberAdded) {
    this._event = event;
  }

  get memberId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get addr(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get metadataCid(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class MemberAddedByProposal extends ethereum.Event {
  get params(): MemberAddedByProposal__Params {
    return new MemberAddedByProposal__Params(this);
  }
}

export class MemberAddedByProposal__Params {
  _event: MemberAddedByProposal;

  constructor(event: MemberAddedByProposal) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get memberId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get addr(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get metadataCid(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class MemberRemoved extends ethereum.Event {
  get params(): MemberRemoved__Params {
    return new MemberRemoved__Params(this);
  }
}

export class MemberRemoved__Params {
  _event: MemberRemoved;

  constructor(event: MemberRemoved) {
    this._event = event;
  }

  get memberId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get addr(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class MemberRemovedByProposal extends ethereum.Event {
  get params(): MemberRemovedByProposal__Params {
    return new MemberRemovedByProposal__Params(this);
  }
}

export class MemberRemovedByProposal__Params {
  _event: MemberRemovedByProposal;

  constructor(event: MemberRemovedByProposal) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get memberId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get addr(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class MemberUpdated extends ethereum.Event {
  get params(): MemberUpdated__Params {
    return new MemberUpdated__Params(this);
  }
}

export class MemberUpdated__Params {
  _event: MemberUpdated;

  constructor(event: MemberUpdated) {
    this._event = event;
  }

  get memberId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get addr(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get metadataCid(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class MemberUpdatedByProposal extends ethereum.Event {
  get params(): MemberUpdatedByProposal__Params {
    return new MemberUpdatedByProposal__Params(this);
  }
}

export class MemberUpdatedByProposal__Params {
  _event: MemberUpdatedByProposal;

  constructor(event: MemberUpdatedByProposal) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get memberId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get addr(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get metadataCid(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class ProposalExecuted extends ethereum.Event {
  get params(): ProposalExecuted__Params {
    return new ProposalExecuted__Params(this);
  }
}

export class ProposalExecuted__Params {
  _event: ProposalExecuted;

  constructor(event: ProposalExecuted) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get approvedCommandId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ProposalSnapped extends ethereum.Event {
  get params(): ProposalSnapped__Params {
    return new ProposalSnapped__Params(this);
  }
}

export class ProposalSnapped__Params {
  _event: ProposalSnapped;

  constructor(event: ProposalSnapped) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get epoch(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get top3HeaderIds(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get top3CommandIds(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }
}

export class ProposalTallied extends ethereum.Event {
  get params(): ProposalTallied__Params {
    return new ProposalTallied__Params(this);
  }
}

export class ProposalTallied__Params {
  _event: ProposalTallied;

  constructor(event: ProposalTallied) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get approvedHeaderId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get approvedCommandId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ProposalTalliedWithTie extends ethereum.Event {
  get params(): ProposalTalliedWithTie__Params {
    return new ProposalTalliedWithTie__Params(this);
  }
}

export class ProposalTalliedWithTie__Params {
  _event: ProposalTalliedWithTie;

  constructor(event: ProposalTalliedWithTie) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get topHeaderIds(): Array<BigInt> {
    return this._event.parameters[1].value.toBigIntArray();
  }

  get topCommandIds(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }

  get extendedExpirationTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Proposed extends ethereum.Event {
  get params(): Proposed__Params {
    return new Proposed__Params(this);
  }
}

export class Proposed__Params {
  _event: Proposed;

  constructor(event: Proposed) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get proposer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get createdAt(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get expirationTime(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class RepresentativesAssigned extends ethereum.Event {
  get params(): RepresentativesAssigned__Params {
    return new RepresentativesAssigned__Params(this);
  }
}

export class RepresentativesAssigned__Params {
  _event: RepresentativesAssigned;

  constructor(event: RepresentativesAssigned) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get reps(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }
}

export class TextCreated extends ethereum.Event {
  get params(): TextCreated__Params {
    return new TextCreated__Params(this);
  }
}

export class TextCreated__Params {
  _event: TextCreated;

  constructor(event: TextCreated) {
    this._event = event;
  }

  get textId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get metadataCid(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class TextCreatedByProposal extends ethereum.Event {
  get params(): TextCreatedByProposal__Params {
    return new TextCreatedByProposal__Params(this);
  }
}

export class TextCreatedByProposal__Params {
  _event: TextCreatedByProposal;

  constructor(event: TextCreatedByProposal) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get textId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get metadataCid(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class TextDeleted extends ethereum.Event {
  get params(): TextDeleted__Params {
    return new TextDeleted__Params(this);
  }
}

export class TextDeleted__Params {
  _event: TextDeleted;

  constructor(event: TextDeleted) {
    this._event = event;
  }

  get textId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class TextDeletedByProposal extends ethereum.Event {
  get params(): TextDeletedByProposal__Params {
    return new TextDeletedByProposal__Params(this);
  }
}

export class TextDeletedByProposal__Params {
  _event: TextDeletedByProposal;

  constructor(event: TextDeletedByProposal) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get textId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TextUpdated extends ethereum.Event {
  get params(): TextUpdated__Params {
    return new TextUpdated__Params(this);
  }
}

export class TextUpdated__Params {
  _event: TextUpdated;

  constructor(event: TextUpdated) {
    this._event = event;
  }

  get textId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get newMetadataCid(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class TextUpdatedByProposal extends ethereum.Event {
  get params(): TextUpdatedByProposal__Params {
    return new TextUpdatedByProposal__Params(this);
  }
}

export class TextUpdatedByProposal__Params {
  _event: TextUpdatedByProposal;

  constructor(event: TextUpdatedByProposal) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get textId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get newMetadataCid(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class VRFRequested extends ethereum.Event {
  get params(): VRFRequested__Params {
    return new VRFRequested__Params(this);
  }
}

export class VRFRequested__Params {
  _event: VRFRequested;

  constructor(event: VRFRequested) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get requestId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Voted extends ethereum.Event {
  get params(): Voted__Params {
    return new Voted__Params(this);
  }
}

export class Voted__Params {
  _event: Voted;

  constructor(event: Voted) {
    this._event = event;
  }

  get pid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get rep(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get vote(): VotedVoteStruct {
    return changetype<VotedVoteStruct>(
      this._event.parameters[2].value.toTuple(),
    );
  }
}

export class VotedVoteStruct extends ethereum.Tuple {
  get rankedHeaderIds(): Array<BigInt> {
    return this[0].toBigIntArray();
  }

  get rankedCommandIds(): Array<BigInt> {
    return this[1].toBigIntArray();
  }
}

export class WARN_CommandChoiceIsDuplicate extends ethereum.Event {
  get params(): WARN_CommandChoiceIsDuplicate__Params {
    return new WARN_CommandChoiceIsDuplicate__Params(this);
  }
}

export class WARN_CommandChoiceIsDuplicate__Params {
  _event: WARN_CommandChoiceIsDuplicate;

  constructor(event: WARN_CommandChoiceIsDuplicate) {
    this._event = event;
  }

  get commandChoice(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class WARN_CommandChoiceIsOutOfRange extends ethereum.Event {
  get params(): WARN_CommandChoiceIsOutOfRange__Params {
    return new WARN_CommandChoiceIsOutOfRange__Params(this);
  }
}

export class WARN_CommandChoiceIsOutOfRange__Params {
  _event: WARN_CommandChoiceIsOutOfRange;

  constructor(event: WARN_CommandChoiceIsOutOfRange) {
    this._event = event;
  }

  get commandChoice(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class WARN_HeaderChoiceIsDuplicate extends ethereum.Event {
  get params(): WARN_HeaderChoiceIsDuplicate__Params {
    return new WARN_HeaderChoiceIsDuplicate__Params(this);
  }
}

export class WARN_HeaderChoiceIsDuplicate__Params {
  _event: WARN_HeaderChoiceIsDuplicate;

  constructor(event: WARN_HeaderChoiceIsDuplicate) {
    this._event = event;
  }

  get headerChoice(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class WARN_HeaderChoiceIsOutOfRange extends ethereum.Event {
  get params(): WARN_HeaderChoiceIsOutOfRange__Params {
    return new WARN_HeaderChoiceIsOutOfRange__Params(this);
  }
}

export class WARN_HeaderChoiceIsOutOfRange__Params {
  _event: WARN_HeaderChoiceIsOutOfRange;

  constructor(event: WARN_HeaderChoiceIsOutOfRange) {
    this._event = event;
  }

  get headerChoice(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class TextDAOEvents extends ethereum.SmartContract {
  static bind(address: Address): TextDAOEvents {
    return new TextDAOEvents("TextDAOEvents", address);
  }
}