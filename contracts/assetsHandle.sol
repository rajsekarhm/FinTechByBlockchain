// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

contract assetHandling{
    IUniswapV2Router02 public uniswapRouter;
    address payable  admin;

    receive() external payable { }
    mapping (address => uint256) balances;
    event balanceEmit(uint256);
    event approverEvent(bool);
    modifier etherValidate(){
        require(address(this).balance >= msg.value, "Not Enought Amount  In Your Walled");
        _;
    }
       constructor() {
        admin = payable (msg.sender);
    }

    function checkBalanace(address payable _addressbalance) public view  returns (uint256){
        return  address(_addressbalance).balance;
    }

    function transferEther(address _sentTo) public payable  etherValidate returns (bool){
       (bool success, ) =  payable(_sentTo).call {value:msg.value} ('');
       balances[_sentTo] = address(_sentTo).balance;
       emit balanceEmit(address(_sentTo).balance);
    }

    function bidAtPrice(uint256 bid_Amt)public returns (bool){
        // need to code
        return  waitForApprove();
    }

    function waitForApprove() internal  returns (bool){
        // need to code
        emit approverEvent(true);
        return  true;
    }

    function getBalance(address payable addressToBalanceCheck) public  returns(uint256){
        emit balanceEmit(balances[addressToBalanceCheck]);
        return balances[addressToBalanceCheck];
    }
}