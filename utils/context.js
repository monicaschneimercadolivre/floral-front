const { createContext, useContext } = require('react');

const CartContext = createContext([])

const useCartContext =() => useContext(CartContext)

module.exports = {
    CartContext,
    useCartContext
};
