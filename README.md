👇

🧠 What This Page Does

This is your Signup Page in React, built with Bootstrap.
Its purpose is to:

Display a registration form (Full Name, Email, Password).

Capture user input.

Handle form submission (for now, it just logs data or shows an alert).

Give a navigation link to go to the Login page.

⚙️ How It Works — Line by Line
1️⃣ React Setup
import { useState } from "react";
import { Link } from "react-router-dom";


useState → React hook to store form data.

Link → from React Router for switching pages without reloading (to /login).

2️⃣ State for Form Data
const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
});


This keeps track of the input values (like typing in text fields).
Initially, all fields are empty.

3️⃣ Handling Input Changes
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};


🧩 This updates the formData whenever the user types something.
It works dynamically using the field’s name attribute (like name, email, password).

4️⃣ Submitting the Form
const handleSubmit = (e) => {
  e.preventDefault(); // prevents page reload
  console.log("Signup Data:", formData);
  alert("Account created successfully!");
};


When you press “Sign Up”:

It prevents the page refresh.

Logs the data in the console.

Shows a success message (you can later connect it to MongoDB via API).

5️⃣ HTML Form Structure
<form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="form-label">Full Name</label>
    <input type="text" name="name" className="form-control" placeholder="Enter your name" />
  </div>
  ...
</form>


This is a Bootstrap form.

form-control → gives a clean input style.

mb-3 → adds spacing between fields.

6️⃣ Centering the Box
<div className="d-flex align-items-center justify-content-center vh-100 bg-light">
  <div className="card p-4 shadow-sm" style={{ width: "22rem" }}>
    {/* form inside */}
  </div>
</div>


This is the main layout:

d-flex → enables flexbox.

align-items-center → centers vertically.

justify-content-center → centers horizontally.

vh-100 → makes the div full screen height.

bg-light → adds a light background color.

card → gives a neat Bootstrap card design with padding, shadow, and rounded corners.

That’s why your signup box is perfectly centered like in the image 🎯

7️⃣ Link to Login Page
<p className="text-center mt-3">
  Already have an account? <Link to="/login">Login here</Link>
</p>


👉 This uses Link from React Router to navigate between pages (no reload).

✨ Output Summary

✅ Clean Bootstrap UI
✅ Centered box
✅ Responsive on all screens
✅ Working navigation between Login ↔ Signup
✅ Ready for backend connection

💡 Next Steps (Suggestions)

If you’re ready to take this further, here are ideas:

Step	Feature	Description
1️⃣	Connect Backend	Connect to Node.js + MongoDB API to actually save users.
2️⃣	Add Validation	Check password length, email format, etc.
3️⃣	Add Toast	Use Bootstrap toast or alert for success/error messages.
4️⃣	Add Loading Spinner	Show a spinner during form submission.
