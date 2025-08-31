import React, { useEffect, useState } from "react";
import Navbar from "../../../layouts/admin/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";

const AdminAddFoodItem = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    imageUrl: "",
    available: "",
  });
  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  //*********************************************** */
  //            GET FOOD ITEMS
  //************************************************ */
  const getallCategories = async () => {
    try {
      const response = await fetch("http://localhost:3000/getallcategory", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      //  console.log(json)
      setCategories(json.categories);
    } catch (error) {
      console.log(error);
    }
  };
  //****
 const handleSubmit = async (e) => {
  e.preventDefault();
  const payload = new FormData();
  for (const key in formData) {
    if (formData[key]) {
      payload.append(key, formData[key]);
    }
  }
  try {
    const response = await fetch("http://localhost:3000/addfooditem", {
      method: "POST",
      body: payload,
    });
    const res_data = await response.json();
    if (response.ok) {
      toast.success("Food Item Added Successfully.");
      navigate("/admin/fooditems");
    } else {
      toast.error(res_data.message || "Failed to add food item");
    }
  } catch (err) {
    console.log(err);
  }
};

  useEffect(() => {
    getallCategories();
  }, []);
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Navbar title="Green CEO " />
      <div className="p-5 flex flex-col gap-5">
        <form
          onSubmit={handleSubmit}
          action=""
          className=" md:w-1/2 bg-gray-700 p-5 rounded-md flex flex-col gap-3"
        >
          <Link to="/admin/fooditems" className="ml-auto text-2xl">
            <IoMdCloseCircleOutline />
          </Link>

          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-md lg:text-lg font-sketch font-medium"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray p-2 text-black outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-md lg:text-lg font-sketch font-medium"
            >
              Category
            </label>
            <select
              name="category"
              id=""
              value={formData.category}
              onChange={handleChange}
              className="bg-gray p-2 text-black outline-none rounded-md"
            >
              <option value="">Select Category</option>
              {categories &&
                categories.map((val) => (
                  <option key={val._id} className="capitalize" value={val.categoryname}>
                    {val.categoryname}
                  </option>
                ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-md lg:text-lg font-sketch font-medium"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="bg-gray p-2 text-black outline-none rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-md lg:text-lg font-sketch font-medium"
            >
              Description
            </label>
            <textarea
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="bg-gray p-2 text-black outline-none rounded-md"
            ></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor=""
              className="text-md lg:text-lg font-sketch font-medium"
            >
              Image
            </label>
            <input
              type="file"
              name="imageUrl"
              onChange={handleChange}
              className="bg-gray p-2 text-black outline-none rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-yellow duration-700 cursor-pointer p-2 roumd text-md font-sketch text-black rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddFoodItem;
