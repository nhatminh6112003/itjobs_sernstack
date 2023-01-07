import { useState } from "react";
const Product = () => {
  let [loading, setLoading] = useState(true);
  return (
    <>
      <div className="sweet-loading">
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      
      </div>
    </>
  );
};
export default Product;
