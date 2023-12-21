import React from "react";

const UserProfile = ({ params }) => {
  console.log(params.userId);
  console.log("hello");
  return <div>UserProfile : {params.userId}</div>;
};

export default UserProfile;
