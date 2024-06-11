// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {MCTest, StdChains, console2} from "@devkit/Flattened.sol";

import {TestUtils} from "test/fixtures/TestUtils.sol";

import {DeployLib} from "script/DeployLib.sol";
import {TextDAOFacade, Schema} from "bundle/textDAO/interfaces/TextDAOFacade.sol";

import {Types} from "bundle/textDAO/storages/Types.sol";

contract TextDAOAnvilSimulation is MCTest {
    TextDAOFacade textDAO;

    function setUp() public {
        vm.createSelectFork(getChain("anvil").rpcUrl);
        textDAO = TextDAOFacade(vm.envAddress("ANVIL_TEXT_DAO_ADDR"));
    }

    function test_scenario() public {
        address[] memory initialMembers = new address[](1);
        initialMembers[0] = address(this); // Example initial member address
        try textDAO.initialize(initialMembers, Schema.ProposalsConfig({
            expiryDuration: 2 minutes,
            tallyInterval: 1 minutes,
            repsNum: 1,
            quorumScore: 3
        })) {} catch {
            console2.log("Initialization failed but skipped.");
        }


        vm.warp(block.timestamp + 20);


        Schema.ProposalMeta memory proposalMeta = Schema.ProposalMeta({
            currentScore: 0,
            headerRank: new uint[](0),
            cmdRank: new uint[](0),
            nextHeaderTallyFrom: 0,
            nextCmdTallyFrom: 0,
            reps: new address[](1),
            nextRepId: 0,
            createdAt: block.timestamp
        });
        proposalMeta.reps[0] = address(this);
        proposalMeta.nextRepId = 1;
        Types.ProposalArg memory proposalArg = Types.ProposalArg({
            header: Schema.Header({
                id: 0,
                currentScore: 0,
                metadataURI: bytes32("Implement MemberJoinProtected"),
                tagIds: new uint[](0)
            }),
            cmd: Schema.Command({
                id: 0,
                actions: new Schema.Action[](1),
                currentScore: 0
            }),
            proposalMeta: proposalMeta
        });

        uint plannedProposalId = 0;
        Schema.Member[] memory candidates = new Schema.Member[](1); // Assuming there's one candidate for demonstration
        candidates[0] = Schema.Member({
            id: 123, // Example candidate ID
            addr: 0x1234567890123456789012345678901234567890, // Example candidate address
            metadataURI: "exampleURI" // Example metadata URI
        });

        proposalArg.cmd.actions[0] = Schema.Action({
            func: "memberJoin(uint256,address[])",
            abiParams: abi.encode(plannedProposalId, candidates)
        });
        uint proposalId = textDAO.propose(proposalArg);
        require(plannedProposalId == proposalId, "Proposal IDs do not match");


        vm.warp(block.timestamp + 20);


        uint[3] memory cmdIds = [uint(0), uint(1), uint(2)]; // Example cmdIds, replace with actual command IDs
        textDAO.voteCmds(proposalId, cmdIds);

    }

}