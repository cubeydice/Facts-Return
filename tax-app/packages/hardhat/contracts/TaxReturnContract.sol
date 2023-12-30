//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

contract TaxReturns {
	
  struct TaxReturn {
		address walletAddress;
		uint year;
		uint income;
		uint refund;
	}

	TaxReturn[] public taxReturns;

	function addTaxReturn(
		address _walletAddress,
		uint _year,
		uint _income,
		uint _refund
	) public {
		TaxReturn memory newTaxReturn = TaxReturn({
			walletAddress: _walletAddress,
			year: _year,
			income: _income,
			refund: _refund
		});
		taxReturns.push(newTaxReturn);
	}

	function getTaxReturn(
		uint index
	) public view returns (address, uint, uint, uint) {
		TaxReturn memory taxReturn = taxReturns[index];
		return (
			taxReturn.walletAddress,
			taxReturn.year,
			taxReturn.income,
			taxReturn.refund
		);
	}
}
