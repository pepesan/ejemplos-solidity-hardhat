// SPDX-License-Identifier: Business Source License 1.1
pragma solidity ^0.8.0;

contract TiposEstructurados {
    // array de enteros sin signo;
    uint[] public listadoUints;
    // array de direcciones
    address[] private holders;
    // mapping de direcciones a su balance en uint
    mapping(address => uint) public balances;

    constructor(){
        listadoUints = new uint[](2);
        listadoUints = [uint (10), 20];
        holders = new address[](0);
    }
    // función que devuelve un uint[] pública, no modifica y devuelve el dato en memoria
    function getAllItems() public view returns (uint[] memory){
        return listadoUints;
    }
    function setListadoByIndex(uint index, uint value) public{
        listadoUints[index] = value;
    }
    function getListadoByIndex(uint index) public view returns (uint){
        return listadoUints[index];
    }
    function getAllAddresses() public view returns (address[] memory) {
        return holders;
    }
    function addHolder(address _holder) public{
        holders.push(_holder);
    }
    function getAddressByIndex(uint _index) public view returns(address){
        return holders[_index];
    }

    function getAllBalanceAddresses() public view returns (uint[] memory){
        // no se puede recorrer un mapping normal debe hacerse con un array complementario
        uint[] memory ret = new uint[](holders.length);
        for (uint i = 0; i < holders.length; i++) {
            address oneAddress = holders[i];
            ret[i] = balances[oneAddress];
        }
        return ret;
    }

    function addZeroBalanceToAddress(address owner) public {
        balances[owner] = 0;
    }

    function balanceOf(address _owner) public view returns (uint){
        return balances[_owner];
    }

    function setBalanceOf(address _owner, uint value) public {
        balances[_owner]=value;
    }
}
