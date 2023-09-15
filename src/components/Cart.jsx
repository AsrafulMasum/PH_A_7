

const Cart = ({cart}) => {
  console.log(cart);
  return (
    <div>
      <div className="card bg-base-100 p-4">
          <div className="p-4">
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
          </div>
        </div>
    </div>
  );
};

export default Cart;