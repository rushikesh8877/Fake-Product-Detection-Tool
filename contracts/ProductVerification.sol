// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProductVerification {

    struct Product {
        string name;
        string manufacturer;
        uint256 manufactureDate;
        bool exists;
    }

    mapping(string => Product) private products;

    function registerProduct(
        string memory _productId,
        string memory _name,
        string memory _manufacturer,
        uint256 _manufactureDate
    ) public {
        require(!products[_productId].exists, "Product already exists");

        products[_productId] = Product(
            _name,
            _manufacturer,
            _manufactureDate,
            true
        );
    }

    function verifyProduct(string memory _productId)
        public
        view
        returns (string memory, string memory, uint256, bool)
    {
        Product memory product = products[_productId];
        return (
            product.name,
            product.manufacturer,
            product.manufactureDate,
            product.exists
        );
    }
}
