import React, { useEffect, useState } from "react";
import Navbar from "../../../layouts/admin/Navbar";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AdminOrder = () => {
  const [item, setItem] = useState([]);
  //*********************************************** */
  //            DELETE FOOD ITEMS
  //************************************************ */
  const deleteOrder = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Image ?"
    );
    if (!confirmDelete) return;
    try {
      const response = await fetch(
        `http://localhost:3000/deleteGalleryImage/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res_data = await response.json();
      if (response.ok) {
        toast.success(res_data.message || "Food Item Deleted Successfully.");
        getallgalleryImages();
      }
    } catch (err) {
      console.log(err);
    }
  };
  //*********************************************** */
  //            GET ALL FOOD ITEMS
  //************************************************ */
  const getallorders = async () => {
    try {
      const response = await fetch("http://localhost:3000/getallorders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      //  console.log(json)
      setItem(json.message);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getallorders();
  }, []);
  console.log(item);
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Navbar />
      <div className="p-5 flex flex-col gap-5">
        <h1 className="text-3xl font-semibold font-sketch mt-3">Your Orders </h1>
        <table className="min-w-full divide-y divide-gray-200 mt-3">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Customer Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Time
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Status
              </th>

              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y text-black divide-gray-200">
            {item.map((val, index) => {
              const formattedDate = new Date(val.createdAt).toLocaleString(
                "en-US",
                {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }
              );
              return (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {val.user.firstName + " " + val.user.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formattedDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap capitalize">
                  <div className={`bg-red-500 p-1 font-medium text-sm rounded-md text-white m-auto text-center`}>
                      {val.status}
                  </div>
                  </td>
                  <td className="flex gap-2 px-6 py-6 whitespace-nowrap">
                    <button className="px-2 py-1 text-[14px] cursor-not-allowed bg-green-500 font-medium text-white rounded-md">
                      View
                    </button>
                    <Link
                      to={`/admin/update-gallery-image/${val._id}`}
                      className="px-2 py-1 cursor-pointer text-[14px] bg-yellow-500 font-medium text-white rounded-md"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => {
                        deleteGalleryImage(val._id);
                      }}
                      className="px-2 py-1 cursor-pointer text-[14px] bg-red-500 font-medium text-white rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AdminOrder;
