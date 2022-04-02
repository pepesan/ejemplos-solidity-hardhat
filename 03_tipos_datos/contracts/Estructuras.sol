// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Estructuras {

    struct Book {
        string title;
        string author;
        uint book_id;
    }
    Book book;

    function setBook() public {
        book = Book('Learn Solidity', 'David Vaquero', 1);
    }
    function getBookId() public view returns (uint) {
        return book.book_id;
    }

    function getBook() public view returns (Book memory){
        return book;
    }
}
