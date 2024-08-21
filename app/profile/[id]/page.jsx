"use client";
import Profile from "@components/profile";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPost, setUserPost] = useState([]);

  useEffect(() => {
    const fetchUserPost = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);

      const data = await response.json(); // Parse JSON if response is okay
      setUserPost(data);
    };
    if (params?.id) fetchUserPost();
  }, [params.id]);
  return (
    <Profile
      name={userName}
      desc={` welcome to ${userName} profile page .explore ${userName}'s expectionals prompts and be inspired by the power of their imagenation `}
      data={userPost}
    />
  );
};

export default UserProfile;
