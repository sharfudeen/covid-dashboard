import { React, useState, useEffect } from "react";
import axios from "axios";

const getProducts = () => {
  return axios.get("https://5cdd0a92b22718001417c19d.mockapi.io/api/products");
};

const SimpleCart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const handleAddToCart = (product) => {
    setCart((cart) => [...cart, product]);
    setTotal((total) => total + product.price);
  };
  const handleRemoveCart = (index) => {
    setCart((cart) =>
      cart.filter((item, i) => {
        return index !== i;
      })
    );
    setTotal((total) => total - cart[index].price);
    console.log("cart index :::", index);
  };
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res.data);
      console.log("products ::: ", res.data);
    });
  }, []);
  return (
    <>
      <div className="flex w-full p-6">
        <div className="flex flex-row flex-wrap w-3/4 justify-evenly">
          {products.map((product, index) => {
            return (
              <>
                <div className="flex flex-col w-1/4 m-5 border" key={index}>
                  <div className="">
                    <img src={product.image} alt="" />
                    <div className="w-full p-3">
                      <h3 className="text-xl font-bold">
                        {product.productName}
                      </h3>
                      <p className="text-sm">Rs. {product.price}</p>
                      <button
                        className="px-2 py-1 text-white bg-green-600 rounded"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="w-1/4">
          <div className="flex flex-col w-full mt-5 border divide-y rounded-md">
            {cart.length === 0 ? (
              <>
                <div className="text-center">Cart is Empty</div>
              </>
            ) : (
              cart.map((product, index) => {
                return (
                  <>
                    <div className="flex flex-row p-2" key={index}>
                      <div className="w-9/12">
                        <p className="text-lg">{product.productName}</p>
                        <p>{product.price}</p>
                      </div>
                      <div className="flex flex-row items-center justify-center w-3/12">
                        <button
                          className="block w-6 h-6 font-bold text-white bg-red-600 rounded-full"
                          onClick={() => handleRemoveCart(index)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  </>
                );
              })
            )}
          </div>
          <p className="text-xl font-bold">Total: {total}</p>
        </div>
      </div>
    </>
  );
};

export default SimpleCart;
