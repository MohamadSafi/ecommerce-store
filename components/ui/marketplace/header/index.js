import WalletBar from "@/components/ui/web3/walletbar";
import EthRates from "@/components/ui/web3/ethRates";
import { Breadcrumbs } from "@/components/ui/common";

const LINKS = [
  {
    href: "/marketplace",
    value: "Buy",
  },
  {
    href: "/marketplace/courses/owned",
    value: "My Courses",
  },
  {
    href: "/marketplace/courses/manage",
    value: "Manage Courses",
  },
];

export default function Header() {
  return (
    <>
      <WalletBar />
      <EthRates />
      <div className="pb-4 px-4 sm:px-6 lg:px-8 flex justify-center">
        <Breadcrumbs items={LINKS} />
      </div>
    </>
  );
}
