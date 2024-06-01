import ProductForm from "@/components/ProductForm";
import Layout from "@/components/layout";
import React, { useState } from "react";

const NewProducts = () => {
  return (
    <Layout>
      <h1>New Products</h1>

      <ProductForm />
    </Layout>
  );
};

export default NewProducts;
