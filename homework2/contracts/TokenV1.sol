// SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract HomeWorkToken2 is Initializable, ERC20Upgradeable {
    uint256 private _state1;

    function initialize() public initializer {
        __ERC20_init("HomeWorkToken2", "HWT2");
    }

    // Add your custom functions here
     function setState1(uint256 state1_) public {
        _state1 = state1_;
    }

    function state1() public view returns (uint256) {
        return _state1;
    }
}