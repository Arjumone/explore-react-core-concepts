// export default function Todo({task,isDone}){
//     return(
//         <div>
//             <li>Task:{task}</li>
//         </div>
//     )
// }


// conditional rendering 1:
// export default function Todo({task,isDone}){
//     if(isDone===true){
//         return <li>Task:{task}</li>
//     }
//     else{
//         return <li>Work on:{task}</li>
//     }
// }

// conditional rendering 2:
// export default function Todo({task,isDone}){
//     if(isDone){
//         return <li>Task:{task}</li>
//     }
//     return <li>Work on:{task}</li>
// }

// conditional rendering 3: ternary operator
// export default function Todo({task,isDone}){
//     return (
//         <li>{task} .....{isDone ? 'finish':'work on'} </li>
//     )
// }

// conditional rendering 4: and operator(&&)
// export default function Todo({task,isDone}){
//     return (
//         <li>{task} {isDone && 'Done'}</li>
//     )
// }
// conditional rendering 5: or operator(||)
// export default function Todo({task,isDone}){
//     return (
//         <li>{task} {isDone || 'Well Done'}</li>
//     )
// }

// conditional rendering 6:
export default function Todo({task,isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Task:{task}</li>
    }
    else{
        listItem= <li>Work on:{task}</li>
    }
    return listItem   
}