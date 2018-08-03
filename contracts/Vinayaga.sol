pragma solidity ^0.4.17;

contract Vinayaga {
    string public sloka;

    function Vinayaga(string initSloka) public {
        sloka = initSloka;
    }

    function setSloka(string newSloka) public {
        sloka = newSloka;
    }

}
