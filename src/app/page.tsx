import AuthoreCard from "@/components/AuthoreCard";
import Feature from "@/components/Feature";
import Mega from "@/components/Mega";
import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Feature/>
      <Mega />
      <AuthoreCard />
      <Footer/>
    </div>
  );
}
