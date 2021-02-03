import React from "react";
import WithRouterSample from "./WithRouterSample";

const data = {
  daejeon: {
    description: "교통의 중심",
  },
  daegu: {
    description: "대프리카",
  },
};

const Profile = ({ match }) => {
  console.log(match); // {path: "/profile/:city", url: "/profile/daegu", isExact: true, params: {…}}
  const { city } = match.params;
  const profile = data[city];
  console.log(profile); // {description: "대프리카"}
  if (!profile) {
    return <div>존재하지 않는 사용자입니다!</div>;
  }
  return (
    <div>
      <h3>
        {city}({profile.description})
      </h3>
      <WithRouterSample />
    </div>
  );
};

export default Profile;
