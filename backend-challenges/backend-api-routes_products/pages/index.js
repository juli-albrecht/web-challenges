import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json())

export default function HomePage() {
    const { data: products, isLoading, error } = useSWR("/api/products", fetcher);

    if (!products || isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to load products</p>;
  }


  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>
            <br />
            Price: {product.price}
            <br />
            Category: {product.category}
          </li>
        ))}
      </ul>
    </main>
  );
}
