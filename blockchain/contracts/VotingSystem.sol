// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract VotingSystem {

    struct Vote {

        address voter;

        uint256 electionId;

        uint256 candidateIndex;

        uint256 timestamp;
    }

    Vote[] public votes;

    mapping(address => bool) public hasVoted;

    event VoteCast(
        address voter,
        uint256 electionId,
        uint256 candidateIndex,
        uint256 timestamp
    );



    function castVote(

        uint256 _electionId,

        uint256 _candidateIndex

    ) public {

        require(
            !hasVoted[msg.sender],
            "You already voted"
        );

        votes.push(
            Vote(
                msg.sender,
                _electionId,
                _candidateIndex,
                block.timestamp
            )
        );

        hasVoted[msg.sender] = true;

        emit VoteCast(
            msg.sender,
            _electionId,
            _candidateIndex,
            block.timestamp
        );
    }



    function getTotalVotes()

        public

        view

        returns(uint256)

    {
        return votes.length;
    }

}