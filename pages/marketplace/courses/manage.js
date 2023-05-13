import { BaseLayout } from "@/components/ui/common/layout";
import OwnedCourseCard from "@/components/ui/course/card/OwnedCourseCard";
import { MarketHeader } from "@/components/ui/marketplace";

export default function ManageCourses() {
  return (
    <BaseLayout>
      <MarketHeader />
      <section className="grid grid-cols-1">
        <OwnedCourseCard />
      </section>
    </BaseLayout>
  );
}
