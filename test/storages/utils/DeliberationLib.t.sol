// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {MCTest, console2} from "@devkit/Flattened.sol";

import {DeliberationLib} from "bundle/textDAO/storages/utils/DeliberationLib.sol";
import {Storage, Schema} from "bundle/textdao/storages/Storage.sol";

contract DeliberationLibTest is MCTest {
    using DeliberationLib for Schema.Deliberation;

    function test_createProposal() public {
        vm.record();
        Storage.Deliberation().createProposal();
        (, bytes32[] memory writes) = vm.accesses(
            address(this)
        );
    }

    function test_createProposal_withoutLib() public {
        vm.record();
        Schema.Proposal storage proposal = Storage.Deliberation().proposals.push();
        proposal.headers.push();
        proposal.cmds.push();

        proposal.proposalMeta.createdAt = block.timestamp;
        (, bytes32[] memory writes) = vm.accesses(
            address(this)
        );

    }


}
