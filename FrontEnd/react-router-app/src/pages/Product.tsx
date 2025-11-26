import { useParams } from "react-router-dom";

export default function Product() {
    const { id } = useParams(); // Get the dynamic parameter 'id' from the URL
    return (
    <div>
      <h1>Product Page</h1>
      <p>This is the Product Page with ID: {id}</p>
    </div>
  );
}