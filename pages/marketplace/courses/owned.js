import { Button, Message } from "@/components/ui/common";
import { BaseLayout } from "@/components/ui/common/layout";
import OwnedCourseCard from "@/components/ui/course/card/OwnedCourseCard";
import { MarketHeader } from "@/components/ui/marketplace";

export default function OwnedCourses() {
  return (
    <BaseLayout>
      <div className="py-4">
        <MarketHeader />
      </div>
      <section className="grid grid-cols-1">
        <OwnedCourseCard>
          <Message>Purchased</Message>
          <Button>Watch the course</Button>
        </OwnedCourseCard>
      </section>
    </BaseLayout>
  );
}
