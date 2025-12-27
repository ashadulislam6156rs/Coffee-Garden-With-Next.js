"use client"
import { AuthContext } from '@/Context/AuthContext';
import PrivateRoute from '@/PrivateRoute/PrivateRoute';
import axios from 'axios';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';

const ViewBookMarks = () => {

const { user } = useContext(AuthContext);
const [myBookMarks, setMyBookMarks] = useState([]);

useEffect(() => {
  axios
    .get(
      `https://coffee-garden-server.vercel.app/coffees/book-mark?email=${user?.email}`
    )
    .then((data) => {
      setMyBookMarks(data.data);
    })
    .catch((err) => toast.error(err?.message));
}, [user?.email]);
    
    
    
    const handleDeletProduct = (_id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(
              `https://coffee-garden-server.vercel.app/coffees/book-mark/${_id}`,
              {
                method: "DELETE",
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your Product has been deleted.",
                    icon: "success",
                  });
                  const products = myBookMarks.filter((pro) => pro._id !== _id);
                  setMyBookMarks(products);
                }
              })
              .catch((err) => {
                Swal.fire({
                  icon: "error",
                  title: `${err?.message}`,
                  showConfirmButton: false,
                  timer: 1500,
                });
              });
          }
        });
      };
    

    return (
      <div>
        <PrivateRoute>
          <div className="max-w-7xl mx-auto px-5">
            <title>Manage My Products | Coffee Garden</title>
            <div className="py-10">
              <h1 className="text-3xl font-semibold pb-5 text-center">
                My Bookmarks Products: ({myBookMarks.length})
              </h1>

              {/* table data */}
              <div>
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead>
                      <tr className="font-extrabold text-black">
                        <th>S.NO.</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Available</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {myBookMarks.map((product, index) => (
                        <tr key={index}>
                          <th>{index + 1}</th>
                          <td>
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                  <img src={product.image} alt="Avatar" />
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{product.name}</div>
                                <div className="text-sm opacity-50">
                                  ৳ {product.price}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>{product.category}</td>
                          <td>{product.available ? "Yes" : "No"}</td>
                          <th>
                            <div className="flex items-center gap-2">
                              <Link
                                href={`/allproduct/${product.productId}`}
                                title="View Details"
                                className="btn bg-[#d1b48c] btn-square text-white w-fit h-fit p-2"
                              >
                                <FaEye />
                              </Link>
                              <button
                                onClick={() => handleDeletProduct(product._id)}
                                title="Delet Product"
                                className="btn bg-[#EA4744] text-white btn-square w-fit h-fit p-2"
                              >
                                <RiDeleteBin6Line />
                              </button>
                            </div>
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </PrivateRoute>
      </div>
    );
};

export default ViewBookMarks;