/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

const Cart = ({cart, credit, price}) => {

  return (
    <div>
      <div className="card bg-base-100 p-4">
          <div className="p-4">

            <div className="py-4">
              <h2 className="text-[#2F80ED] text-lg font-bold">
                Credit Hour Remaining {20 - credit} hr
              </h2>
            </div>

            <hr />

            <div className="py-4">
              <h2 className="text-[#1C1B1B] text-xl font-bold pb-4">Course Name</h2>
              <ol>
                {
                  cart.map((item, index) => <li className="list-decimal list-inside text-[#1C1B1B99]" key={index}>{item.course_name}</li>)
                }
              </ol>
            </div>

            <hr />

            <div className="py-4">
              <h2 className="text-[1C1B1B80] font-medium">Total Credit Hour : {credit}</h2>
            </div>

            <hr />

            <div className="py-4">
              <h2 className="text-[1C1B1B80] font-medium">Total Price : {price} USD</h2>
            </div>

            <hr />

          </div>
        </div>
    </div>
  );
};

Cart.propTypes = {
  cart : PropTypes.array.isRequired
}

export default Cart;