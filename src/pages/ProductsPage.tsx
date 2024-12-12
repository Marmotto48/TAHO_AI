import { useProducts } from "../hooks/useProducts";
// import { Card } from '@shadcn/ui';

function ProductsPage() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products?.map((product) => (
        <>
          {" "}
          {/* <Card key={product.id} className="shadow-lg p-4"> */}
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-lg font-bold mb-2">{product.title}</h2>
          <p className="text-sm text-gray-700 mb-2">{product.description}</p>
          <p className="text-md font-semibold text-green-600">
            ${product.price}
          </p>
          {/* </Card> */}
        </>
      ))}
    </div>
  );
}

export default ProductsPage;
