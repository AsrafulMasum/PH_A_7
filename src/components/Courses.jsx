import { useEffect } from "react";
import { useState } from "react";
import Course from "./Course";
import Cart from "./Cart";


const Courses = () => {

  const [courses, setCourses] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch('data.json')
      const data = await res.json()
      setCourses(data);
    }
    loadData()
  } , [])

  return (
    <div className="mx-4 flex flex-col-reverse lg:flex-row justify-center gap-4 pt-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-3/4">
        {
          courses.map((course, index) => <Course key={index} course={course}></Course>)
        }
      </div>

      <div className="lg:w-1/4">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Courses;