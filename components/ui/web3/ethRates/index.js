export default function EthRates() {
  return (
    <div className="grid grid-cols-4 mb-5 py-4">
      <div className="flex flex-1 items-stretch text-center">
        <div className="p-10 border drop-shadow rounded-md bg-indigo-800">
          <div>
            <span className="text-2xl font-bold text-white">ETH = 3145.1$</span>
          </div>
          <p className="text-xl text-gray-100">Current eth Price</p>
        </div>
      </div>
      <div className="flex flex-1 items-stretch text-center">
        <div className="p-10 border drop-shadow rounded-md bg-indigo-800">
          <div>
            <span className="text-2xl font-bold text-white">
              0.004769 = 15$
            </span>
          </div>
          <p className="text-xl text-gray-100">Price per course</p>
        </div>
      </div>
    </div>
  );
}