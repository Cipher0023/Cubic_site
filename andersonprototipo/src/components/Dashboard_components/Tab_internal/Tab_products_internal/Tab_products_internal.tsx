import React from "react";
import Product_table from "@/components/Dashboard_components/Product_table/Product_table";

function Tab_products_internal() {
  return (
    <div className="tabs tabs-lift w-full h-full">
      <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 1" />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <Product_table />
      </div>

      <input
        type="radio"
        name="my_tabs_3"
        className="tab"
        aria-label="Tab 2"
        defaultChecked
      />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <Product_table />
      </div>

      <input type="radio" name="my_tabs_3" className="tab" aria-label="Tab 3" />
      <div className="tab-content bg-base-100 border-base-300 p-6">
        <Product_table />
      </div>
    </div>
  );
}

export default Tab_products_internal;
