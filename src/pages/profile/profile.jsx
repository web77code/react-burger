import ProfileSidebar from "../../components/profile-sidebar";
import ProfileForm from "../../components/profile-form";

import styles from "./profile.module.css";

const Profile = () => {

  return (
    <div className={"mt-30 " + styles.container}>
      <ProfileSidebar description="В этом разделе вы можете изменить свои персональные данные" />
      <ProfileForm />
    </div>
  );
};

export default Profile;
