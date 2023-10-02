import { CourseCard, List } from "@/components/ui/course";
import { BaseLayout } from "@/components/ui/common/layout";
import { getAllCourses } from "@/content/courses/fetcher";
import { Button } from "@/components/ui/common";
import { OrderModal } from "@/components/ui/order";
import { useState } from "react";
import { MarketHeader } from "@/components/ui/marketplace";
import { Web3Provider, useWeb3 } from "@/components/providers";
import { useWalletInfo } from "@/components/web3/hooks";
import { useAccount } from "@/components/web3/hooks";

export default function Marketplace({ courses }) {
  const Web3Utils = require("web3-utils");

  const web3 = useWeb3;
  const [selectedCourse, setSelectedCourse] = useState(null);
  const account = "0x6e10895D28Db3B443860FFa09027A4B997851b0c";

  const purchaseCourse = (order) => {
    const hexCoursesetId = Web3Utils.utf8ToHex(selectedCourse.id);

    const orderHash = Web3Utils.soliditySha3(
      { type: "bytes16", value: hexCoursesetId },
      { type: "address", value: account }
    );

    const emailHash = Web3Utils.sha3(order.email);

    const proof = Web3Utils.soliditySha3(
      { type: "bytes32", value: emailHash },
      { type: "bytes32", value: orderHash.slice(2) }
    );

    try {
      contract.methods
        .purchaseCourse(hexCoursesetId, proof)
        .send({ from: account, value });
    } catch {
      console.log("operation faild");
    }
  };

  return (
    <BaseLayout>
      <Web3Provider>
        <MarketHeader />
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
            onSubmit={purchaseCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}{" "}
      </Web3Provider>
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
