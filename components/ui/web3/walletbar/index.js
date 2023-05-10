import { useNetwork } from "@/components/web3/hooks/useNetwork";

export default function WalletBar() {
  const { network } = useNetwork();
  const { targetNetwork } = network.data;
  const { isSupported } = network.isSupported;

  return (
    <div className=" pt-11">
      <section className="text-white bg-indigo-800 rounded-md">
        <div className="p-8">
          <h1 className="text-2xl">Hello there</h1>
          <h2 className="subtitle mb-5 text-xl">
            I hope you are having a great day!
          </h2>
          <div className="flex justify-between items-center">
            <div className="sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
                >
                  Learn how to purchase
                </a>
              </div>
            </div>
            <div>
              {network.hasFinishedFirstFetch && !network.isSupported && (
                <div className="bg-red-500 p-3 rounded-lg">
                  <div> Connected to the wrong Network</div>
                  <div>
                    Connect to: <strong>{network.target}</strong>
                  </div>
                </div>
              )}
              {network.data && (
                <div className=" pt-4">
                  <span>Currently on </span>
                  <strong className="text-2xl">{network.data}</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
