import OrderSummary from "@/components/order-summary";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex justify-center items-center h-screen bg-blue-100">
      <OrderSummary />
    </div>
  );
}
