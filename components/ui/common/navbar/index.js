import { useWeb3 } from "@/components/providers";
import Link from "next/link";
import { useAccount } from "@/components/web3/hooks";

export default function Navbar() {
  const { connect, isLoading, isWeb3Loaded, hooks } = useWeb3();
  const { account } = useAccount();
  return (
    <nav className="bg-white border-gray-200 dark:bg-indigo-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/monzo--v1.png"
            className="h-8 mr-1"
            alt="just M"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Safi
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden
           hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
           dark:hover:bg-indigo-800 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-[#000000] md:dark:bg-indigo-800 dark:border-indigo-800">
            <li>
              <Link legacyBehavior href={`/`}>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href={`/marketplace`}>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Marketplace
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href={`#`}>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Blogs
                </a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href={`#`}>
                <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Wishlist
                </a>
              </Link>
            </li>
            <li>
              {isLoading ? (
                <button
                  onClick={connect}
                  disabled={true}
                  className="px-5 py-1 border rounded-lg border-indigo-800 tect-base font-medium text-white hover:text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Loading...
                </button>
              ) : isWeb3Loaded ? (
                account.data ? (
                  <div>
                    <a className="pl-5 py-1 border rounded-lg border-indigo-800 tect-base font-medium text-[#5bff3a]  bg-indigo-800 hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed">
                      Connected to
                    </a>
                    {account.isAdmin ? (
                      <a className="pl-2 border rounded-lg border-indigo-800 tect-base font-medium text-white  bg-indigo-800 hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed">
                        Admin
                      </a>
                    ) : (
                      <a className="pl-2 border rounded-lg border-indigo-800 tect-base font-medium text-white  bg-indigo-800 hover:bg-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed">
                        {account.data.substring(0, 5)}...
                        {account.data.substring(
                          account.data.length - 4,
                          account.data.length
                        )}
                      </a>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={connect}
                    className="px-5 py-1 border rounded-lg border-indigo-800 tect-base font-medium text-white hover:text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Connect to Wallet
                  </button>
                )
              ) : (
                <button
                  onClick={() =>
                    window.open("https://metamask.io/download.html", "_blank")
                  }
                  className="px-5 py-1 border rounded-lg border-indigo-800 tect-base font-medium text-white hover:text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Install Metamask
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
