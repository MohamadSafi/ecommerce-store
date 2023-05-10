import { List } from "@/components/ui/course";
import { BaseLayout } from "@/components/ui/common/layout";
import { getAllCourses } from "@/content/courses/fetcher";
import WalletBar from "@/components/ui/web3/walletbar";
import EthRates from "@/components/ui/web3/ethRates";

export default function Marketplace({ courses }) {
  return (
    <BaseLayout>
      <WalletBar />
      <EthRates />
      <List courses={courses} />
    </BaseLayout>
  );
}

export function getStaticProps() {
  const { data } = getAllCourses();
  return {
    props: {
      courses: data,
    },
  };
}
