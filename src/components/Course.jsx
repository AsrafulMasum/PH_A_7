

const Course = ({course, handleCart}) => {

  const {course_name, description, credit_hours, price, image_url} = course

  return (
    <div>

      <div className="card bg-base-100 h-full">

        <figure className="px-4 pt-4 h-full">

          <img src={image_url} alt="Shoes" className="rounded-xl" />

        </figure>

        <div className="flex flex-col justify-between items-center text-center p-4 gap-4 h-full">

          <h2 className="text-lg font-semibold text-[#1C1B1B]">{course_name}</h2>

          <p className="text-sm text-[#1C1B1B99]">{description}</p>

          <div className="flex justify-center items-center gap-4">

            <div className="flex justify-center items-center gap-2">

              <span className="material-symbols-rounded text-[#1C1B1B]">
                attach_money
              </span>

              <p className="font-medium text-sm text-[#1C1B1B99]">Price : {price}</p>

            </div>

            <div className="flex justify-center items-center gap-2">

              <span className="material-symbols-rounded text-[#1C1B1B]">
                menu_book
              </span>

              <p className="font-medium text-sm text-[#1C1B1B99]">Credit : {credit_hours} hours</p>

            </div>

          </div>

          <div className="flex w-full items-center justify-center">
            <button onClick={() => handleCart(course)} className="bg-[#2F80ED] w-full py-2 rounded-xl text-white">Select</button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Course;