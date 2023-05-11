import { CourseCard, List } from "@/components/ui/course";
import { BaseLayout } from "@/components/ui/common/layout";
import { getAllCourses } from "@/content/courses/fetcher";
import WalletBar from "@/components/ui/web3/walletbar";
import EthRates from "@/components/ui/web3/ethRates";
import { Button, Modal } from "@/components/ui/common";

export default function Marketplace({ courses }) {
  return (
    <BaseLayout>
      <WalletBar />
      <EthRates />
      <List courses={courses}>
        {(course) => (
          <CourseCard
            course={course}
            key={course.id}
            Footer={() => (
              <div className="mt-3 flex justify-end mr-3">
                <Button variant="lightPurple">Purchase</Button>
              </div>
            )}
          />
        )}
      </List>
      <Modal isOpen={false} />
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
