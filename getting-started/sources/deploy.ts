import base64url from 'base64url';
import qs from 'qs';
import { Address, beginCell, storeStateInit, contractAddress, toNano } from '@ton/core';
import { Counter } from './output/counter_Counter';
 
// Forming an init package
(async()=>{
  let owner = Address.parse("UQCI6ip3Z2_vq24K7eNx4x_zuTK0Nm8Nu8hkXoQ-OXEer7HB");
console.log("owner",owner);

let init = await Counter.init(owner);
let testnet = true;
 
// Contract address
let address = contractAddress(0, init);
console.log("address",address);

 
// Amount of TONs to attach to a deploy message
let deployAmount = toNano("0.5");
 
// Create string representation of an init package
let initStr = base64url(
  beginCell().store(storeStateInit(init)).endCell().toBoc({ idx: false })
);
 
// Create a deploy link
console.log(
  `ton://transfer/` +
    address.toString({ testOnly: testnet }) +
    "?" +
    qs.stringify({
      text: "Deploy",
      amount: deployAmount.toString(10),
      init: initStr,
    })
);
})()