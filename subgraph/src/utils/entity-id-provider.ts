import { BigInt, Bytes } from "@graphprotocol/graph-ts";

export function genHeaderId(pid: BigInt, headerId: BigInt): string {
    return pid.toString() + "-" + headerId.toString();
}

export function genHeaderIds(
    pid: BigInt,
    headerIdsBigInt: Array<BigInt>
): Array<string> {
    let headerIds: Array<string> = [];
    for (let i = 0; i < headerIdsBigInt.length; i++) {
        headerIds.push(genHeaderId(pid, headerIdsBigInt[i]));
    }
    return headerIds;
}

export function genCommandId(pid: BigInt, commandId: BigInt): string {
    return pid.toString() + "-" + commandId.toString();
}

export function genCommandIds(
    pid: BigInt,
    commandIdsBigInt: Array<BigInt>
): Array<string> {
    let commandIds: Array<string> = [];
    for (let i = 0; i < commandIdsBigInt.length; i++) {
        commandIds.push(genCommandId(pid, commandIdsBigInt[i]));
    }
    return commandIds;
}

export function genProposalId(pid: BigInt): string {
    return pid.toString();
}

export function genVoteId(pid: BigInt, rep: Bytes): string {
    return pid.toString() + "-" + rep.toString();
}

export function genActionId(
    pid: BigInt,
    commandId: BigInt,
    actionId: number
): string {
    return (
        pid.toString() + "-" + commandId.toString() + "-" + actionId.toString()
    );
}

export function genTextId(textId: BigInt): string {
    return textId.toString();
}