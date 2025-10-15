import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Mac() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getMacs = async () => {
      const response = await fetch("http://localhost:2025/macs");
      const data = await response.json();
      setProducts(data?.products);
    };
    getMacs();
  }, []);

  let flip = true;

  return (
    <>
     
      <section className="second-hightlight-wrapper">
        <div className="container">
          <div 
          className="new-alert">New</div>
          <div className="title-wraper bold black">MacBook Air</div>
          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>
          <div className="price-wrapper grey">From $999.</div>
          <div className="links-wrapper">
          
            <ul>
              <li>
                <a href="#">Learn more</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {products?.map((singleProduct) => {
        let id = singleProduct.product_id;
        let Brief = singleProduct.product_brief_description;
        let StartPrice = singleProduct.starting_price;
        let PriceRange = singleProduct.price_range;
        let productPage = "/mac/" + id;
        let order1 = 1;
        let order2 = 2;

        if (flip) {
          order1 = 2;
          order2 = 1;
          flip = !flip;
        } else {
          flip = !flip;
        }

        return (
          <div
            key={id}
            className="row justify-content-center text-center product-holder h-100"
          >
            <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
              <div className="product-title">{singleProduct.product_name}</div>
              <div className="product-brief">{Brief}</div>
              <div className="starting-price">
                {`Starting at ${StartPrice}`}
              </div>
              <div className="monthly-price">{PriceRange}</div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <Link to={productPage}>Learn more</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className={`col-sm-12 col-md-6 order-${order2}`}>
              <div className="product-image">
                <img src={singleProduct.product_img} alt="product" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Mac;

// function Mac() {
//   return (
//     <div>
//       <section className="internal-page-wrapper">
//         <div className="container">
//           <div className="row h-100 align-items-center justify-content-center text-center">
//             <div className="col-12 mt-5 pt-5">
//               <h1 className="font-weight-bold">Mac Page</h1>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
// export default Mac;
