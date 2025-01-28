import ProductCard from "../components/ProductCard";
import SearchFilter from "../components/SearchFilter";
import { useProducts } from "../hooks/useProducts";

import { useState } from "react";

const Home = () => {
  const { data: products, isLoading, isError } = useProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  if (isLoading)
    return <div className="text-center text-xl text-gray-600">Loading...</div>;
  if (isError)
    return (
      <div className="text-center text-xl text-red-500">
        Error fetching products
      </div>
    );

  const filteredProducts = products?.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
        Product Gallery
      </h1>
      <SearchFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
