// api imports
import { getProducts } from "@/api/products";

// router imports
import { createFileRoute, Link } from "@tanstack/react-router";

// types imports
import { ProductType } from "@/types/product";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: HomePage,
  loader: async () => getProducts(),
});

function HomePage() {
  // states
  const [searchQuery, setSearchQuery] = useState("");

  // querry
  // const filteredProducts = products?.filter(product =>
  //   product.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // get products
  const { products } = Route.useLoaderData();

  // ///
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading products.</div>;
  return (
    <div className="container mx-auto p-6">
      {/* SEARCH BAR */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          // value={searchQuery}
          // onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      {/* FILTER */}

      {/*Products List*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((item: ProductType) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <Card className="shadow-lg p-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-700 mb-2">{item.description}</p>
              <p className="text-md font-semibold text-green-600">
                ${item.price}
              </p>
            </Card>
          </Link>
        ))}
        {/* PAGINATION */}
      </div>
    </div>
  );
}
