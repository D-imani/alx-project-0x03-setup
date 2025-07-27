import React from "react";
import Header from "@/components/layouts/Header";
import Layout from "@/components/layouts/Layout";
import Footer from "@/components/layouts/Footer";

const Page : React.FC = () => {
  return(
    <div className="text-center">
      < Header/>
      <h1 className="text-center text-white">My App</h1>
      <Layout children={undefined}/>
      <Footer />
    </div>
  )
} 

export default Page;
