import React from 'react';

const BookingsItem = ({booking}) => {
    const {photo,Name,Price} = booking
    return (
        <div>
                   <div className="overflow-x-auto w-full">
  <table className="table w-full">

    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Photo</th>
        <th>Title</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>

      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
            <h3 className='text-2xl'>{Name}</h3>
        </td>
        <td>
            <p>${Price}</p>
        </td>
        <th>
        <button className="btn btn-outline btn-primary">Pay Now</button>
        </th>
      </tr>
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default BookingsItem;