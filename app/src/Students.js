import { useState } from "react";
function Students(){
    const [students,setStudents]=useState([
        {id:1,name:"Meghana",role:"Developer"},
        {id:2,name:"neha",role:"tester"},
        {id:3,name:'ravi',role:"manager"}
    ])
    const [name,setName]= useState("");
    const [role,setRole]= useState("");
 const addStudent=(e)=>{
  e.preventDefault();


  const newStudent={
    id:students.length+1,
    name:name,
    role:role
  }
  setStudents([...students,newStudent])
  setName("");
  setRole("");
 }

    return(
        <>
        <h1>students</h1>
      {/* {students.map((student)=>(
        <h1 key={student.id}>{student.name}- {student.role}</h1>
      ))} */}
      {students.map((student)=>{
        return(
            <h1 key={student.id}>{student.name}- {student.role}</h1>
        )
      })}

      <div>
        <h1>Add new student</h1>
        <form onSubmit={addStudent}>
          <input type="name" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="role" placeholder="role" value={role} onChange={(e)=>setRole(e.target.value)}/>
          <button type="submit">Add student details</button>
        </form>
        </div>
        </>
    )
}

export default Students;