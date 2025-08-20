import React from "react";
import Product_table from "../../../old/Product_table/Product_table";

function Tab_products_internal() {
  return (
    <div className="w-full h-full tabs tabs-lift">
      <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 1" />
      <div className="bg-base-100 p-6 border-base-300 tab-content">
        <Product_table />
      </div>

      <input
        type="radio"
        name="my_tabs_3"
        className="tab"
        aria-label="Tab 2"
        defaultChecked
      />
      <div className="bg-base-100 p-6 border-base-300 tab-content">
        <Product_table />
      </div>

      <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 3" />
      <div className="bg-base-100 p-6 border-base-300 tab-content">
        <Product_table />
      </div>
    </div>
  );
}

export default Tab_products_internal;
