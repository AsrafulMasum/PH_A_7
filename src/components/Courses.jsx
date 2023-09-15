
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

  const [cart, setCart] = useState([])
  const [creditHr, setCreditHr] = useState(0)
  const [priceUSD, setPriceUSD] = useState(0)

  const handleCart = (course) => {
    let credit = course.credit_hours
    let price = course.price
    {
      cart.forEach(item => {
        credit += item.credit_hours
        price += item.price
      })
    }

    const isExist = cart.find(item => item.id === course.id)
  

    if(isExist){
      return toast('This course is already enrolled.')
    }
    else{
      if(credit>20){
        return toast('You have reached maximum credit hours.')
      }
      else{
        setPriceUSD(price)
        setCreditHr(credit);
        const newCart = [...cart, course]
        setCart(newCart)
      }
      
    }
    
  }

  return (
    <div className="mx-4 flex flex-col-reverse lg:flex-row justify-center gap-4 pt-8">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-3/4">
        {
          courses.map((course, index) => <Course key={index} course={course} handleCart={handleCart}></Course>)
        }
      </div>

      <div className="lg:w-1/4">
        <Cart cart={cart} price={priceUSD} credit={creditHr}></Cart>
      </div>
    </div>
  );
};

export default Courses;