import React from "react";

const UserInfo = ({ users }) => {
  const user = users.map(user => {
    return <div>{user}</div>;
  });
  return user;
};
export default UserInfo;
