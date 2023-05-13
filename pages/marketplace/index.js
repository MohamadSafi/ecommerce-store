import { CourseCard, List } from "@/components/ui/course";
import { BaseLayout } from "@/components/ui/common/layout";
import { getAllCourses } from "@/content/courses/fetcher";
import WalletBar from "@/components/ui/web3/walletbar";
import EthRates from "@/components/ui/web3/ethRates";
import { Button } from "@/components/ui/common";
import { OrderModal } from "@/components/ui/order";
import { useState } from "react";
import { useAccount, useNetwork } from "@/components/web3/hooks";

export default function Marketplace({ courses }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  return (
    <BaseLayout>
      <WalletBar />
      <EthRates />
      <List courses={courses}>
        {(course) => (
          <CourseCard
            course={course}
            key={course.id}
            Footer={({ canPurchaseCourse }) => (
              <div className="mt-3 flex justify-end mr-3">
                <Button
                  variant="lightPurple"
                  disabled={!canPurchaseCourse}
                  onClick={() => setSelectedCourse(course)}
                >
                  Purchase
                </Button>
              </div>
            )}
          />
        )}
      </List>
      {selectedCourse && (
        <OrderModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}{" "}
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
