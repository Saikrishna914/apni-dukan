



//   import React, { useState, useEffect, useCallback } from "react";
//   import Layout from "./../components/Layout/Layout";
//   import axios from "axios";
//   import { useParams, useNavigate } from "react-router-dom";
//   import "../styles/ProductDetailsStyles.css";
  
//   const ProductDetails = () => {
//     const params = useParams();
//     const navigate = useNavigate();
//     const [product, setProduct] = useState({});
//     const [relatedProducts, setRelatedProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
  
//     // Memoized getProduct function using useCallback
//     const getProduct = useCallback(async () => {
//       try {
//         setLoading(true);
//         const { data } = await axios.get(
//           `/api/v1/product/get-product/${params.slug}`
//         );
  
//         if (data?.product) {
//           setProduct(data.product);
//           getSimilarProduct(data.product._id, data.product.category._id);
//         } else {
//           setError("Product not found");
//         }
//       } catch (error) {
//         console.error("Error fetching product:", error);
//         setError("Error fetching product");
//       } finally {
//         setLoading(false);
//       }
//     }, [params?.slug]);
  
//     // useEffect with getProduct and relevant dependencies
//     useEffect(() => {
//       if (params?.slug) {
//         getProduct();
//       }
//     }, [getProduct, params?.slug]);
  
//     // getSimilarProduct function remains the same
//     const getSimilarProduct = async (pid, cid) => {
//       try {
//         const { data } = await axios.get(
//           `/api/v1/product/related-product/${pid}/${cid}`
//         );
//         setRelatedProducts(data?.products);
//       } catch (error) {
//         console.error("Error fetching related products:", error);
//         setError("Error fetching related products");
//       }
//     };
  
//     return (
//       <Layout>
//        <div className="row container product-details">
//         <div className="col-md-6">
//           <img
//             src={`/api/v1/product/product-photo/${product._id}`}
//             className="card-img-top"
//             alt={product.name}
//             height="300"
//             width={"350px"}
//           />
//         </div>
//         <div className="col-md-6 product-details-info">
//           {/* <h1 className="text-center">Product Details</h1>
//           <hr />
//           <h6>Name : {product.name}</h6>
//           <h6>Description : {product.description}</h6>
//           <h6>
//             Price :
//             {product?.price?.toLocaleString("en-US", {
//               style: "currency",
//               currency: "USD",
//             })}
//           </h6>
//           <h6>Category : {product?.category?.name}</h6>
//           <button class="btn btn-secondary ms-1">ADD TO CART</button>
//         </div>
//       </div>
//       <hr />
//       <div className="row container similar-products">
//         <h4>Similar Products ➡️</h4>
//         {relatedProducts.length < 1 && (
//           <p className="text-center">No Similar Products found</p>
//         )}
//         <div className="d-flex flex-wrap">
//           {relatedProducts?.map((p) => (
//             <div className="card m-2" key={p._id}>
//               <img
//                 src={`/api/v1/product/product-photo/${p._id}`}
//                 className="card-img-top"
//                 alt={p.name}
//               />
//               <div className="card-body">
//                 <div className="card-name-price">
//                   <h5 className="card-title">{p.name}</h5>
//                   <h5 className="card-title card-price">
//                     {p.price.toLocaleString("en-US", {
//                       style: "currency",
//                       currency: "USD",
//                     })}
//                   </h5>
//                 </div>
//                 <p className="card-text ">
//                   {p.description.substring(0, 60)}...
//                 </p> */}
//                 <div className="card-name-price">
//                   <button
//                     className="btn btn-info ms-1"
//                     onClick={() => navigate(`/product/${p.slug}`)}
//                   >
//                     More Details
//                   </button>
//                   { <button
//                   className="btn btn-dark ms-1"
//                   onClick={() => {
//                     setCart([...cart, p]);
//                     localStorage.setItem(
//                       "cart",
//                       JSON.stringify([...cart, p])
//                     );
//                     toast.success("Item Added to cart");
//                   }}
//                 >
//                   ADD TO CART
//                 </button> }
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>  
//       </Layout>
//     );
//   };
    





//   import React, { useState, useEffect, useCallback } from "react";
// import Layout from "./../components/Layout/Layout";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "../styles/ProductDetailsStyles.css";

// const ProductDetails = () => {
//   const params = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState({});
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [cart, setCart] = useState([]); // Define the cart state

//   // Memoized getProduct function using useCallback
//   const getProduct = useCallback(async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.get(
//         `/api/v1/product/get-product/${params.slug}`
//       );

//       if (data?.product) {
//         setProduct(data.product);
//         getSimilarProduct(data.product._id, data.product.category._id);
//       } else {
//         setError("Product not found");
//       }
//     } catch (error) {
//       console.error("Error fetching product:", error);
//       setError("Error fetching product");
//     } finally {
//       setLoading(false);
//     }
//   }, [params?.slug]);

//   // useEffect with getProduct and relevant dependencies
//   useEffect(() => {
//     if (params?.slug) {
//       getProduct();
//     }
//   }, [getProduct, params?.slug]);

//   // getSimilarProduct function remains the same
//   const getSimilarProduct = async (pid, cid) => {
//     try {
//       const { data } = await axios.get(
//         `/api/v1/product/related-product/${pid}/${cid}`
//       );
//       setRelatedProducts(data?.products);
//     } catch (error) {
//       console.error("Error fetching related products:", error);
//       setError("Error fetching related products");
//     }
//   };

//   return (
//     <Layout>
//       <div className="row container product-details">
//       <div className="col-md-6">
//           <img
//             src={`/api/v1/product/product-photo/${product._id}`}
//             className="card-img-top"
//             alt={product.name}
//             height="300"
//             width={"350px"}
//           />
//         </div>
//         <div className="col-md-6 product-details-info">
//         <h1 className="text-center">Product Details</h1>
//           <hr />
//           <h6>Name : {product.name}</h6>
//           <h6>Description : {product.description}</h6>
//           <h6>
//             Price :
//             {product?.price?.toLocaleString("en-US", {
//               style: "currency",
//               currency: "USD",
//             })}
//           </h6>
//           <h6>Category : {product?.category?.name}</h6>
//           <button class="btn btn-secondary ms-1">ADD TO CART</button>
//         </div>
//       </div>
//       <hr />
//       <div className="row container similar-products">
//         <h4>Similar Products ➡️</h4>
//         {relatedProducts.length < 1 && (
//           <p className="text-center">No Similar Products found</p>
//         )}
//         <div className="d-flex flex-wrap">
//           {relatedProducts?.map((p) => (
//             <div className="card m-2" key={p._id}>
//               <img
//                 src={`/api/v1/product/product-photo/${p._id}`}
//                 className="card-img-top"
//                 alt={p.name}
//               />
//               <div className="card-body">
//                 <div className="card-name-price">
//                   <h5 className="card-title">{p.name}</h5>
//                   <h5 className="card-title card-price">
//                     {p.price.toLocaleString("en-US", {
//                       style: "currency",
//                       currency: "USD",
//                     })}
//                   </h5>
//                 </div>
//                 <p className="card-text ">
//                   {p.description.substring(0, 60)}...
//                 </p>
//           <div className="card-name-price">
//             <button
//               className="btn btn-info ms-1"
//               onClick={() => navigate(`/product/${product.slug}`)}
//             >
//               More Details
//             </button>
//             <button
//               className="btn btn-dark ms-1"
//               onClick={() => {
//                 setCart([...cart, product]); // Add the current product to cart
//                 localStorage.setItem("cart", JSON.stringify([...cart, product]));
//                 toast.success("Item Added to cart");
//               }}
//             >
//               ADD TO CART
//             </button>
//           </div>
//         </div>
//       </div>
      
     
//     </Layout>
//   );
// };


// export default ProductDetails;


import React, { useState, useEffect, useCallback } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";

import { toast } from "react-toastify"; // Import toast from the library
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]); // Add this line to define cart state


  // Memoized getProduct function using useCallback
  const getProduct = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/get-product/${params.slug}`);

      if (data?.product) {
        setProduct(data.product);
        getSimilarProduct(data.product._id, data.product.category._id);
      } else {
        setError("Product not found");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
      setError("Error fetching product");
    } finally {
      setLoading(false);
    }
  }, [params?.slug]);

  // useEffect with getProduct and relevant dependencies
  useEffect(() => {
    if (params?.slug) {
      getProduct();
    }
  }, [getProduct, params?.slug]);

  // getSimilarProduct function remains the same
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(`/api/v1/product/related-product/${pid}/${cid}`);
      setRelatedProducts(data?.products);
    } catch (error) {
      console.error("Error fetching related products:", error);
      setError("Error fetching related products");
    }
  };

  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Product Details</h1>
          <hr />
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>
            Price :
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h6>
          <h6>Category : {product?.category?.name}</h6>
          <button className="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
      </div>
      <hr />
      <div className="row container similar-products">
        <h4>Similar Products ➡️</h4>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" key={p._id}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name}</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </h5>
                </div>
                <p className="card-text ">
                  {p.description.substring(0, 60)}...
                </p>
                <div className="card-name-price">
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${product.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-dark ms-1"

                    onClick={() => {
                                       setCart([...cart, product]); // Add the current product to cart
                                   localStorage.setItem("cart", JSON.stringify([...cart, product]));
                                     toast.success("Item Added to cart");
                                }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
