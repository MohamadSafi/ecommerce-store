import { Hero } from "@/components/ui/common";
import { CourseCard, List } from "@/components/ui/course";
import { BaseLayout } from "@/components/ui/common/layout";
import { getAllCourses } from "@/content/courses/fetcher";

export default function Home({ courses }) {
  return (
    <BaseLayout>
      <Hero />
      <List courses={courses}>
        {(course) => <CourseCard course={course} key={course.id} />}
      </List>
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
