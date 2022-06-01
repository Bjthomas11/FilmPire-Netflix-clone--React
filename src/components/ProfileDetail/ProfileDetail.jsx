import React from "react";
import authSlice from "../../features/authSlice";
// get access to user from redux state
// display user info

const ProfileDetail = () => {
  const { data } = authSlice();
  // console.log(data);
  return <div>ProfileDetail</div>;
};

export default ProfileDetail;
