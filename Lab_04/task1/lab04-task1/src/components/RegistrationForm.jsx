import { useState } from "react";

const validateName = (name) => {
  if (!name.trim()) return "Name is required";
  if (name.trim().length < 2) return "Name must be at least 2 characters";
  return "";
};

const validateEmail = (email) => {
  if (!email.trim()) return "Email is required";
  const re = /[\s@]+@[\s@]+\.[\s@]+/;
  if (!re.test(email.trim())) return "Email format is invalid";
  return "";
};

const validateAge = (age) => {
  if (age === "" || age === null) return "Age is required";
  const num = Number(age);
  if (Number.isNaN(num)) return "Age must be a number";
  if (num < 18) return "Age must be 18 or older";
  return "";
};

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ageError, setAgeError] = useState("");

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // required: prevent default form submit :contentReference[oaicite:5]{index=5}

    const nErr = validateName(name);
    const eErr = validateEmail(email);
    const aErr = validateAge(age);

    setNameError(nErr);
    setEmailError(eErr);
    setAgeError(aErr);

    if (nErr || eErr || aErr) {
      setSuccess(false);
      return;
    }

    setSuccess(true);
    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 16, maxWidth: 420 }}>
      <h2>Registration</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              const value = e.target.value;
              setSuccess(false);
              setName(value);
              setNameError(validateName(value));
            }}
          />
          {nameError && <p style={{ color: "red" }}>{nameError}</p>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              const value = e.target.value;
              setSuccess(false);
              setEmail(value);
              setEmailError(validateEmail(value));
            }}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => {
              const value = e.target.value;
              setSuccess(false);
              setAge(value);
              setAgeError(validateAge(value));
            }}
          />
          {ageError && <p style={{ color: "red" }}>{ageError}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {success && (
        <p style={{ color: "green", marginTop: 12 }}>Registration successful!</p>
      )}
    </div>
  );
}