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
		int originalReturn;
		uint serviceFee;
		int finalReturn; // Using int to handle negative values
	}

	TaxReturn[] public taxReturns;
	address public owner;
	uint public percentageFee; // Percentage of refund
	uint public flatFee; // Flat fee for negative refund

	constructor(uint _percentageFee, uint _flatFee) {
		owner = msg.sender;
		percentageFee = _percentageFee;
		flatFee = _flatFee;
	}

	function addTaxReturn(
		address _walletAddress,
		uint _year,
		uint _income,
		int _originalReturn,
		uint _serviceFee,
		int _finalReturn
	) public {
		taxReturns.push(
			TaxReturn(
				_walletAddress,
				_year,
				_income,
				_originalReturn,
				_serviceFee,
				_finalReturn
			)
		);
	}

	function getTaxReturn(
		uint index
	) public view returns (TaxReturn memory taxReturn) {
		return taxReturns[index];
	}

	function calculateServiceFee(
		TaxReturn memory taxReturn
	) private view returns (uint serviceFee) {
		int originalReturn = taxReturn.originalReturn;

		if (originalReturn > 0) {
			serviceFee = (uint(originalReturn) * percentageFee) / 100;
		} else {
			serviceFee = flatFee;
		}

		return serviceFee;
	}

	// modifier areFundsEnough() {}

	function calculateReturnDetails(
		uint index
	)
		public
		view
		returns (int originalReturn, uint serviceFee, int finalReturn)
	{
		TaxReturn memory taxReturn = getTaxReturn(index);
		originalReturn = taxReturn.originalReturn;
		serviceFee = calculateServiceFee(taxReturn);
		finalReturn = originalReturn - int(serviceFee);

		return (originalReturn, serviceFee, finalReturn);
	}

	function payServiceFee(uint index) public payable {
		TaxReturn storage taxReturn = taxReturns[index];
		require(msg.sender == taxReturn.walletAddress, "Unauthorized");

		uint serviceFee = calculateServiceFee(taxReturn);
		require(msg.value >= serviceFee, "Insufficient fee");
		// Additional logic to handle payments
	}

	// Functions to update fees, restricted to owner

	modifier isOwner() {
		// msg.sender: predefined variable that represents address of the account that called the current function
		require(msg.sender == owner, "Not the Owner");
		_;
	}

	function updatePercentageFee(uint _newPercentageFee) public isOwner {
		percentageFee = _newPercentageFee;
	}

	function updateFlatFee(uint _newFlatFee) public isOwner {
		flatFee = _newFlatFee;
	}

	function withdraw() public isOwner {
		(bool success, ) = owner.call{ value: address(this).balance }("");
		require(success, "Failed to send Ether");
	}
}