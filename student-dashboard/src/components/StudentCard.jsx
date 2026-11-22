
function StudentCard(props) {
  return (
    <div className="student-card">
      <div className="student-avatar">
        {props.student.name.charAt(0)}
      </div>

      <h2>{props.student.name}</h2>

      <p className="student-role">
        {props.student.department} Student
      </p>

      <div className="student-details">
        <p><strong>Register No:</strong> {props.student.id}</p>
        <p><strong>Department:</strong> {props.student.department}</p>
        <p><strong>Year:</strong> {props.student.year}</p>
        <p><strong>Email:</strong> {props.student.email}</p>
      </div>

      <span className="status">Active Student</span>
    </div>
  );
}

export default StudentCard;
