import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { axiosInstance } from "../../utils/axiosInstance";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getIphones = async () => {
      const response = await fetch("http://localhost:2025/iphones");
      const data = await response.json();

      setProducts(data?.products);
    };
    // const getIphones = async () => {
    //   const response = await axiosInstance("iphones");
    //   setProducts(response.data.products);
    // };
    getIphones();
  }, []);

  let flip = true;
  return (
    <>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">Iphones</h1>
              <div className="brief-description mb-5">
                The best for the brightest.
              </div>
            </div>
          </div>
        </div>
      </section>

      {products?.map((singleProduct) => {
        let id = singleProduct.product_id;
        let Brief = singleProduct.product_brief_description;
        let StartPrice = singleProduct.starting_price;
        let PriceRange = singleProduct.price_range;
        let productPage = "/iphone/" + id;
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

export default Iphone;
