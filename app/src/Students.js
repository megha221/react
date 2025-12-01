function Students(){
    const students=[
        {id:1,name:"Meghana",role:"Developer"},
        {id:2,name:"neha",role:"tester"},
        {id:3,name:'ravi',role:"manager"}
    ]
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
        </>
    )
}

export default Students;