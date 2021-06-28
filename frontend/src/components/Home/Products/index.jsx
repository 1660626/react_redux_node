import React from "react";
import { Row, Col } from "antd";
import imggg from "../img/149_1499551.png";
const Products = () => {
  return (
    <section className="section__PRODUCTS">
      <div className="container">
        <div className="products">
          <Row>
            <Col span={6}>
              <div className="block">
                <div>
                  <img src={imggg} alt="a" width="100%" />
                </div>
              </div>
            </Col>
            <Col span={6}>
              {" "}
              <div className="block">
                <div>
                  <img src={imggg} alt="a" width="100%" />
                </div>
              </div>
            </Col>
            <Col span={6}>
              {" "}
              <div className="block">
                <div>
                  <img src={imggg} alt="a" width="100%" />
                </div>
              </div>
            </Col>
            <Col span={6}>
              {" "}
              <div className="block">
                <div>
                  <img src={imggg} alt="a" width="100%" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
export default Products;
