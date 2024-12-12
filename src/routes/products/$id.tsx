import { getProductById } from "@/api/products";
import { createFileRoute } from "@tanstack/react-router";

// types import
// import { ProductType } from "@/types/product";

export const Route = createFileRoute("/product/$id")({
  component: Product,
  loader: async ({ params }) => getProductById(params?.id),
});

function Product() {
  // fetch product information
  const productInfo = Route.useLoaderData();
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <img
          src={productInfo.thumbnail}
          alt={productInfo.title}
          className="w-full h-auto object-cover rounded-lg"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">{productInfo.title}</h1>
          <p className="text-gray-700 text-lg mb-4">
            {productInfo.description}
          </p>
          <p className="text-2xl font-bold text-green-600 mb-4">
            ${productInfo.price}
          </p>
          <p className="text-sm bg-gray-100 inline-block px-3 py-1 rounded-full text-gray-600 mb-4">
            Category: {productInfo.category}
          </p>
        </div>
      </div>
    </div>
  );
}
