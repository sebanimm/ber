import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
	const { userName } = useParams();
	return <div>{userName}</div>;
};

export default Profile;
