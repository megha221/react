import {useParams} from 'react-router-dom'
function User(){
    const {id} = useParams()
    const students =[
        {id:1,name:"Meghana",role:"Developer"},
        {id:2,name:"Neha",role:"Tester"},
        {id:3,name:"Ravi",role:"Teacher"}
    ]


    const student = students.find(s=> String(s.id) === String(id))
    if(!student){
        return <h1>user not found</h1>
    }
    return(
        <h1>
            Hello user 
            Name:{student.name}
            Role:{student.role}
        </h1>
    )
}
export default User