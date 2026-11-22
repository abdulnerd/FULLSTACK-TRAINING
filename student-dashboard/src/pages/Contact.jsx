
function Contact() {

  function handleSubmit(event) {
    event.preventDefault();

    alert("Form submitted successfully!");

    event.target.reset();
  }

  return (
    <div className="page">

      <h1>Student Details Form</h1>

      <p className="subtitle">
        Please enter your details below.
      </p>

      <form className="student-form" onSubmit={handleSubmit}>

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          required
        />

        <label>Register Number</label>
        <input
          type="text"
          placeholder="Enter your register number"
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <label>Department</label>
        <select required defaultValue="">
          <option value="" disabled>Select Department</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Electronics">Electronics</option>
        </select>

        <label>Message</label>
        <textarea
          placeholder="Enter your message"
          rows="4"
          required
        />

        <button type="submit">
          Submit Form
        </button>

      </form>

    </div>
  );
}

export default Contact;
