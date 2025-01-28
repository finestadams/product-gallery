import { Product } from "../types/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="w-full h-56  flex justify-center items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {product.title}
        </h2>
        <p className="text-gray-500 text-sm">{product.category}</p>
        <p className="text-xl font-bold text-gray-900 mt-2">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
