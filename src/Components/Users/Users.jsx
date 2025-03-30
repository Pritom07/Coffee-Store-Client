import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleUpdateUser = (id) => {
    console.log(id);
  };

  const handleUserDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete user!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
            }
          });
      }
    });
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/Images/more/11.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center mt-5">
        <h1 className="font-rancho text-[#374151] text-5xl">
          List of all Users
        </h1>
        <p className="font-railway text-[#1B1A1A] text-xl text-center mt-3.5">
          Our coffee store users are passionate coffee lovers who enjoy rich
          flavors and cozy atmospheres. They appreciate high-quality brews,
          whether it's a strong espresso or a creamy latte. Many visit
          regularly, making the café a part of their daily routine. Their love
          for great coffee and warm conversations creates a welcoming community.
        </p>
      </div>
      <div className="overflow-x-auto max-w-5xl mx-auto mt-5 px-1">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, id) => (
              <tr key={user._id}>
                <th>{id + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => handleUpdateUser(user._id)}
                    className="bg-[#3C393B] py-2 px-3 rounded-[5px] text-white font-semibold cursor-pointer"
                  >
                    <MdModeEditOutline className="inline mr-1.5" />
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleUserDelete(user._id)}
                    className=" bg-[#EA4744] p-2 rounded-[5px] text-white font-semibold cursor-pointer"
                  >
                    <MdDelete className="inline mr-1.5" />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
