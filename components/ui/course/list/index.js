import CourseCard from "../card";

export default function List({ courses }) {
  return (
    <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
        >
          <CourseCard course={course} />
        </div>
      ))}
    </section>
  );
}
