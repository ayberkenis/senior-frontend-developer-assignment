// src/components/ProductList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct";

// Define the initial limit and skip values
const initialLimit = 10;
const initialSkip = 0;

const ProductList = () => {
  const [products, setProducts] = useState([]); // Products array
  const [limit] = useState(initialLimit); // Limit is the number of products to fetch at a time, default is 10, can be changed
  const [skip, setSkip] = useState(initialSkip); // Skip is the number of products to skip, default is 0, can be changed
  const [filter, setFilter] = useState("all"); // Filter is the filter value, default is all, can be changed
  const [sort, setSort] = useState("none"); // Sort is the sort value, default is none, can be changed

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.documentElement.scrollHeight -
          (window.innerHeight + document.documentElement.scrollTop) <
        100
      ) {
        // Reached the bottom of the page with a 100px threshold
        // Increase the skip value to load the next set of data
        setSkip((prevSkip) => prevSkip + limit);
      }
    };
  
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
  
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [limit, skip]);
  
  // Fetch data based on the current limit and skip values
  useEffect(() => {
    const apiUrl = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
  
    axios
      .get(apiUrl)
      .then((response) => {
        // Check if the response contains new products
        if (response.data.products.length > 0) {
          // Append new products to the existing products array
          setProducts((prevProducts) => [...prevProducts, ...response.data.products]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [limit, skip]);
  


  const handleScroll = () => {
    if (
      document.documentElement.scrollHeight -
        (window.innerHeight + document.documentElement.scrollTop) <
      100
    ) {
      // Reached the bottom of the page with a 100px threshold
      // Increase the skip value to load the next set of data
      setSkip(skip + limit);
    }
  };
  useEffect(() => {
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, [skip]);

  useEffect(() => {
    // Reset the skip value when limit changes
    setSkip(initialSkip);
  }, [limit]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const handleSortChange = (e) => {
    setSort(e.target.value);
    };

// Filter and sort the products based on the selected filter and sort options
const filteredAndSortedProducts = products
.filter((product) => {
  if (filter === "all") {
    return true; // Show all products if the filter is "all"
  } else if (filter === "under-500" && product.price <= 500) {
    return true;
  } else if (filter === "under-1000" && product.price <= 1000) {
    return true;
  } else if (filter === "under-2000" && product.price <= 2000) {
    return true;
  } else if (filter === "over-2000" && product.price >= 2000) {
    return true;
  } else {
    return false; // Exclude products that don't match the filter
  }
})
// Sort products based on the selected sorting option
.sort((a, b) => {
    if (sort === "price-low-to-high") {
      return a.price - b.price;
    } else if (sort === "price-high-to-low") {
      return b.price - a.price;
    } else if (sort === "rating-low-to-high") {
      return a.rating - b.rating; // Sort by rating in ascending order
    } else if (sort === "rating-high-to-low") {
      return b.rating - a.rating; // Sort by rating in descending order
    } else {
      return 0; // No sorting
    }
  });
  
return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center">
        {/* Add Filter input */}
        <div className="flex flex-col justify-center items-center">
          <label className="text-xxl font-bold">Filter</label>
          <select
            className="text-xxl font-bold shadow-xl border-2 border-opacity-20 border-black rounded-lg p-2 m-2"
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="under-500">$500 or less</option>
            <option value="under-1000">$1000 or less</option>
            <option value="under-2000">$2000 or less</option>
            <option value="over-2000">$2000 or more</option>
          </select>
        </div>
        <div className="flex flex-col justify-center items-center">
          <label className="text-xxl font-bold">Sort by</label>
          <select
            className="text-xxl font-bold shadow-xl border-2 border-opacity-20 border-black rounded-lg p-2 m-2"
            value={sort}
            onChange={handleSortChange}
          >
            <option value="none">None</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="rating-low-to-high">Rating: Low to High</option>
            <option value="rating-high-to-low">Rating: High to Low</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 text-xxl p-12 justify-center content-center w-full">
  {filteredAndSortedProducts.length > 0 ? (
    filteredAndSortedProducts.map((product) => (
      <SingleProduct product={product} key={product.id} />
    ))
  ) : (
    <p>No products found.</p>
  )}
</div>

    </div>
  );
};


export default ProductList;
