import React from "react";
import Link from "next/link";
import getUsers from "@/jsonData/getUsers";

const UsersList = async () => {
  const getUserList = getUsers();
  const users = await getUserList;
  const user = users.users;
  console.log(user[0]);
  return (
    <div className="">
      <div>Users List</div>
      <div className="">
        <div className="">
          {user.map((item) => (
            <h2 key={item.id}>
              <Link href={`/home/${item.id}`}>{item.firstName}</Link>
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
