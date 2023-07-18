import { Footer } from "@../../Component/Footer";
import { Header } from "@../../Component/Header";
import { Task } from "@../../Component/Task";
import { TaskInput } from "@../../Component/TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput></TaskInput>
        {/* task */}
        <Task title="Read a book"></Task>
        {/* task */}
        <Task title="Take a shower"></Task>
        {/* task */}
        <Task title="Sleep"></Task>
      </div>

      {/* //footer section */}
      <Footer
        year="2023"
        fullName="Pimmada Wangsombat"
        studentId="650610793"
      ></Footer>
    </div>
  );
}
