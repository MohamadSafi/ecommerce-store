import { useEthPrice } from "@/components/providers/web3/hooks/useEthPrice";
import Image from "next/image";

export default function EthRates() {
  const { eth } = useEthPrice();
  return (
    <div className="grid grid-cols-4 mb-5 py-4">
      <div className="flex flex-1 items-stretch text-center">
        <div className="p-10 border drop-shadow rounded-md bg-indigo-800">
          <div className="flex items-center">
            <p className=" text-gray-100 text-2xl">1</p>
            <Image height="35" width="35" src="/small-eth.webp" />
            <span className="text-2xl text-white font-bold">= {eth.data}$</span>
          </div>
          <p className="text-xl text-gray-100">Current eth Price</p>
        </div>
      </div>
      <div className="flex flex-1 items-stretch text-center">
        <div className="p-10 border drop-shadow rounded-md bg-indigo-800">
          <div className="flex items-center">
            <span className="text-2xl text-white font-bold">{eth.perItem}</span>
            <Image
              layout="fixed"
              height="35"
              width="35"
              src="/small-eth.webp"
            />
            <span className="text-2xl text-white font-bold">= 15$</span>
          </div>
          <p className="text-xl text-gray-100">Price per course</p>
        </div>
      </div>
    </div>
  );
}
