//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract ControlAcceso {
    address public owner = msg.sender;
    uint public creationTime = block.timestamp;

    modifier onlyBy(address _account) {
        require(
            msg.sender == _account,
            "Sender not authorized."
        );
        _;
    }
    function changeOwner(address _newOwner) public onlyBy(owner) {
        owner = _newOwner;
    }
    modifier onlyAfter(uint _time) {
        require(
            block.timestamp >= _time,
            "Function called too early."
        );
        _;
    }
    function disown() public onlyBy(owner) onlyAfter(creationTime + 1 seconds) {
        delete owner;
    }

}
