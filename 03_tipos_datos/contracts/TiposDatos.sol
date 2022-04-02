// SPDX-License-Identifier: Business Source License 1.1
pragma solidity ^0.8.0;

contract TiposDatos {
     // bool
    bool public booleano;
    // int
    int private entero;
    // uint
    uint public enteroSinSigno;
    // uint256
    uint256 public enteroSinSigno256;
    // string
    string private cadena;
    // address
    address public direccion;

    // entero a convertir
    uint8 private entero8;

    // constructor sin parámetros
    constructor(){
        // tipo booleano
        booleano = true;
        // número entero
        entero = -1;
        // entero sin signo
        enteroSinSigno = 17;
        // entero sin signo 256 bits
        enteroSinSigno256 = 2000;
        // cadena de caracteres
        cadena = "Valor inicial";
        // direccion 0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
        direccion = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266; // corregido el checksum
        // inicializa uint8
        entero8 = 8;
    }

    function setEntero(int _entero) public {
        entero = _entero;
    }

    function getEntero() public view returns (int){
        return entero;
    }
    function getCadena() public view returns (string memory){
        return cadena;
    }
    function setCadena(string memory _cadena) public {
        cadena=_cadena;
    }
    function getEntero8() public view returns (uint8){
        return entero8;
    }
    function castingEntero()public view returns (uint16){
        return uint16(entero8);
    }
}
