//Style
import style from "./register.module.css";
// //hooks
import { useState } from "react";
export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("+998");
  const [birthday, setBirthday] = useState("");

  const resetForm = () => {
    setFirstName(""), setLastName(""), setPhoneNumber("+998"), setBirthday("");
  };

  const data = [];

  const handleSubit = (e) => {
    e.preventDefault();
    const userInfo = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      birthday: birthday,
    };
    data.push(userInfo);
    resetForm();
  };

  return (
    <div className={style.register}>
      <div className={style.register_card}>
        <h1>Welcome</h1>
        <form className={style.register_form} onSubmit={handleSubit}>
          <lebel>
            First name:
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </lebel>
          <lebel>
            Last name:
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </lebel>
          <lebel>
            Phone number:
            <input
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </lebel>
          <lebel>
            Data birth:
            <input
              type="date"
              onChange={(e) => setBirthday(e.target.value)}
              value={birthday}
            />
          </lebel>
          <button type="submit">Sent</button>
        </form>
      </div>
    </div>
  );
};
