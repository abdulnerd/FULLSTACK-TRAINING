
import StudentCard from "../components/StudentCard";
import Counter from "../components/Counter";

function Home() {

  const students = [
    {
      id: "311824102001",
      name: "Abdul Rahman",
      department: "Computer Science",
      year: "3rd Year",
      email: "abdul00702@gmail.com"
    },

    {
      id: "311824102035",
      name: "Mohammed Ibrahim SM",
      department: "Computer Science",
      year: "3rd Year",
      email: "mohammedibbu09@gmail.com"
    },
    {
      id: "311824102054",
      name: "Sayed Al Fahad",
      department: "Computer Science",
      year: "3rd Year",
      email: "sayedalfahad33@gmail.com"
    },
    {
      id: "311824103030",
      name: "IT Mohideen Hisham",
      department: "Information Technology",
      year: "3rd Year",
      email: "hisham009@gmail.com"
    }
  ];

  return (
    <div className="page">
         <div className="counter-widget">
           <Counter />
        </div>

     <h1>Student Dashboard</h1>

      <p className="subtitle">
        Welcome to your student dashboard.
      </p>

      <div className="students-container">

      {students.map((student) => (
        <StudentCard
         key={student.id}
         student={student}
      />
      ))}

</div>

    </div>
  );
}

export default Home;
