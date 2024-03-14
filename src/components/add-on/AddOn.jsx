import React, { useState } from 'react';
import './AddOn.css';

function AddOn() {
  const [selectedQty, setSelectedQty] = useState(0);
  const [modalOpen, setModalOpen] = useState(true);

  const increment = () => {
    setSelectedQty(selectedQty + 1);
  };

  const decrement = () => {
    if (selectedQty > 0) {
      setSelectedQty(selectedQty - 1);
    }
  };

  const addToCartAddOns = () => {
    // Add your addToCartAddOns logic here
    console.log('Add to cart clicked');
    setModalOpen(false);
  };

  const skipBtn = () => {
    // Add your skipBtn logic here
    console.log('Skip clicked');
    setModalOpen(false); 
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <div className="overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="add-ons-heading">
              <h2>Available Add-ons</h2>
              <div className="close-btn">
                <span className="b-size icon" data-size="24">
                  <span>X</span>
                </span>
              </div>
            </div>
            <div className="add-ons">
              <ul className="add-ons-list">
                <li className="add-ons-item">
                  <div className="add-ons-carousel">
                    <div className="bx-wrapper">
                      <div className="bx-viewport">
                        <img
                          src="https://images.yapsody.com/yapsody/assets/images/add_on_no_image.jpg"
                          alt="Add on image"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="add-ons-content">
                    <div className="add-ons-title-wrapper">
                      <h3>add</h3>
                    </div>
                    <p className="ng-binding">add ondd</p>
                    <ul className="add-ons-variation-data">
                      <li className="variation">
                        <div className="variation-name">
                          <p className="ng-bind1">Regular</p>
                          <p className="ng-bind2">(Rs10.00)</p>
                        </div>
                        <div className="add-ons-selectors">
                          <div
                            className="add-ons-decrement"
                            onClick={decrement}
                          >
                            -
                          </div>
                          <div
                            className="add-ons-selected-qty"
                            id="selectedQty"
                          >
                            {selectedQty}
                          </div>
                          <div
                            className="add-ons-increment"
                            onClick={increment}
                          >
                            +
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>

              <div className="add-on-btn-grp">
                <div className="add-to-cart-btn">
                  <div className="add-to-cart" onClick={addToCartAddOns}>
                    Add To Cart
                  </div>
                </div>
                <div className="skip-btn">
                  <div className="skip" onClick={skipBtn}>
                    Skip
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddOn;
