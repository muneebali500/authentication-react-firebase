import { useState, useEffect } from "react";
import auth from "../../model/firebase";
import { onAuthStateChanged, updateProfile, updateEmail } from "@firebase/auth";

import {
  contact,
  contact_title,
  contact_details,
} from "../../styles/contactInfo.module.scss";

export default function ContactInfo({ title }) {
  const [user, setUser] = useState({});
  // const [inputValues, setInputValue] = useState(user);

  useEffect(() => {
    console.log(`useEffect called`);

    onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        setUser(userInfo);
      }
    });
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function updateUserProfile(e) {
    e.preventDefault();

    console.log(user);

    updateProfile(auth.currentUser, {
      displayName: user.displayName,
      // emailVerified: user.emailVerified,
    })
      .then(() => {
        alert(`database is updated`);
      })
      .catch((err) => console.log(err));

    updateEmail(auth.currentUser, user.email)
      .then(() => {
        alert(`email updated`);
        // ...
      })
      .catch((error) => {
        alert(error);
        // ...
      });
  }

  return (
    <div className={contact}>
      <h2 className={contact_title}>{title}</h2>
      <div className={contact_details}>
        <form className="contact_Info_form" onSubmit={updateUserProfile}>
          <input
            type="text"
            className="name"
            value={user.displayName}
            name="displayName"
            onChange={handleChange}
          />
          <input
            type="email"
            className="email"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
          <button className="update_profile">Update Profile</button>
        </form>
      </div>
    </div>
  );
}
