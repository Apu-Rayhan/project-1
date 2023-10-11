import React from "react";
import getUsers from "@/jsonData/getUsers";

const page = async (props) => {
  const getUserList = getUsers();
  const users = await getUserList;
  const currentId = props.params.userId;
  const userData = users[currentId - 1];
  console.log(users[currentId]);
  return (
    <div>
      <div className="">
        <h3>User Detail page</h3>
      </div>
    </div>
  );
};

export default page;
