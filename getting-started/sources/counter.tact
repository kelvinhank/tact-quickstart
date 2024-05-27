contract Counter {
 
    owner: Address;
    counter: Int as uint32;
 
    // this function is called before contract is deployed 
    init(owner: Address) {
        self.owner = owner;
        self.counter = 0;
    }
 
    receive("increment") {
        self.counter = (self.counter + 1);
    }
    // call when an empty message to the contract
    // receive()

    //- called when an arbitrary text message is sent to the contract
    // receive(str: String) 
 

    //- called when binary message of type MyMessage is sent to the contract
    // receive(msg: MyMessage)

    // - called when binary message of unknown type is sent to the contract
    // receive(msg: Slice) 

    // - called when outgoing message bounced
    // bounced(msg: Slice) 


    // not accessible from other contracts and exported only to off-chain world.
    get fun counter(): Int {
        return self.counter;
    }
 
    get fun owner(): Address {
        return self.owner;
    }
}