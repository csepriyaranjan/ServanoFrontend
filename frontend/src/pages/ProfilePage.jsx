import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import UserProfile from "../components/userProfile";

const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <userProfile />
      <Footer />
    </div>
  );
}   

export default ProfilePage;