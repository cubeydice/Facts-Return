//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

contract Users {
    struct User {
        string name;
        address wallet;
    }

    User[] public users;
    mapping(address => string) public userNames;

    function addUser(string memory _name, address _wallet) public {
        users.push(User(_name, _wallet));
    }

    function getUserByIdx(uint256 index)
        public
        view
        returns (string memory, address)
    {
        return (users[index].name, users[index].wallet);
    }

    function getUserName(address _userAddress)
        public
        view
        returns (string memory)
    {
        return userNames[_userAddress];
    }
}
