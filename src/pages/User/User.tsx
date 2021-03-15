import React from "react";
import FormUser from "../../components/FormUser/FormUser";
import Header from "../../components/Header/Header";
import UserList from "../../components/UserList/UserList";

const User = () => {
  return (
    <div>
      <Header />
      <FormUser />
      <UserList />
    </div>
  );
};

export default User;
