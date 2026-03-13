import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturesProducts from "@/components/home/FeaturesProducts";
import Hero from "@/components/home/Hero";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';
export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
       <FeaturesProducts />
      </Suspense>
    </>
  );
}
