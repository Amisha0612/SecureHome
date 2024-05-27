/* eslint no-restricted-globals: 0 */
// import React, { useEffect } from 'react';
// import './healthtracker.css';
// import '../css/healthtracker.css';

// function Healthtracker() {

//     // script.js 

//     const editIcon = `<i class="fas fa-edit"></i>`

//     const deleteIcon = `<i class="fas fa-trash"></i>`

//     function clearInputs() {
//         wInput.value = ""
//         eInput.value = ""
//         bInput.value = ""
//     }

//     function addToLocalStorage() {
//         localStorage.setItem("date", JSON.stringify(date))
//         localStorage.setItem("water", JSON.stringify(water))
//         localStorage.setItem("exercise", JSON.stringify(exercise))
//         localStorage.setItem("bloodsugar", JSON.stringify(bloodsugar))
//     }

//     function activateEdit(i) {
//         wInput.value = water[i]
//         eInput.value = exercise[i]
//         bInput.value = bloodsugar[i]
//         editIndex = i
//         submitButton.classList.add("hidden")
//         editSection.classList.remove("hidden")
//     }


//     function cancelEdit() {
//         clearInputs()
//         editIndex = -1
//         submitButton.classList.remove("hidden")
//         editSection.classList.add("hidden")
//     }

//     function editRow() {
//         if (editIndex === -1) return
//         water[editIndex] = wInput.value
//         exercise[editIndex] = eInput.value
//         bloodsugar[editIndex] = bInput.value
//         fillTable()
//         addToLocalStorage()
//         cancelEdit()
//     }

//     function deleteRow(i) {
//         if (!confirm(
//             `Confirm that you want to delete the entry: 
// 	\n ${date[i]}: ${water[i]}ml, ${exercise[i]}min, 
// ${bloodsugar[i]}mg/dL`))
//             return
//         date.splice(i, 1)
//         water.splice(i, 1)
//         exercise.splice(i, 1)
//         bloodsugar.splice(i, 1)
//         document.querySelector(`#output > tr:nth-child(${i + 1})`)
//             .classList.add("delete-animation")
//         addToLocalStorage()
//         setTimeout(fillTable, 500)
//     }

//     function fillTable(activateEdit, deleteRow) {
//         console.log(activateEdit);
//         const tbody = document.getElementById("output")
//         const rows =
//             Math.max(water.length, exercise.length, bloodsugar.length)
//         let html = ""
//         for (let i = 0; i < rows; i++) {
//             let w = water[i] || "N/A"
//             let e = exercise[i] || "N/A"
//             let b = bloodsugar[i] || "N/A"
//             let d = date[i] || "N/A"
//             html += `<tr> 
//                 <td>${d}</td> 
//                 <td>${w}</td> 
//                 <td>${e}</td> 
//                 <td>${b}</td> 
//                 <td> 
//                     <button onClick="activateEdit(${i})" 
//                             class="edit">${editIcon} 
//                     </button> 
//                 </td> 
//                 <td> 
//                     <button  
//                         onClick="deleteRow(${i})" 
//                         class="delete">${deleteIcon} 
//                     </button> 
//                 </td> 
//             </tr>`
//         }
//         if (tbody) {
//             tbody.innerHTML = html;
//         }
//     }


//     let editIndex = -1;

//     let date =
//         JSON.parse(localStorage.getItem("date")) || []
//     let water =
//         JSON.parse(localStorage.getItem("water")) || []
//     let exercise =
//         JSON.parse(localStorage.getItem("exercise")) || []
//     let bloodsugar =
//         JSON.parse(localStorage.getItem("bloodsugar")) || []

//     const wInput = document.getElementById("water")
//     const eInput = document.getElementById("exercise")
//     const bInput = document.getElementById("bloodsugerlevel")

//     const submitButton = document.getElementById("submit")
//     const editSection = document.getElementById("editSection")

//     fillTable()

//     if (submitButton) {
//         submitButton.addEventListener("click", () => {
//             const w = wInput.value || null;
//             const e = eInput.value || null;
//             const b = bInput.value || null;
//             if (w === null || e === null || b === null) {
//                 alert("Please enter all the fields.")
//                 return
//             }
//             const d = new Date().toLocaleDateString()
//             date = [d, ...date]
//             water = [w, ...water]
//             exercise = [e, ...exercise]
//             bloodsugar = [b, ...bloodsugar]
//             clearInputs()
//             fillTable(activateEdit, deleteRow);
//             addToLocalStorage()
//         })
//     }

//     useEffect(() => {
//         const tbody = document.getElementById("output");
//         if (tbody) {
//             fillTable();
//         }
//     }, [date, water, exercise, bloodsugar]);



//     return (
//         <>
//             <div className="body">
//                 <div className="app">
//                     <h1>Health Tracker App</h1>
//                     <div className="inputs">
//                         <div>
//                             <label htmlFor="water">Water Intake (in ml)</label>
//                             <input id="water" type="number" />
//                         </div>
//                         <div>
//                             <label htmlFor="exercise">Exercise Duration (in min)</label>
//                             <input id="exercise" type="number" />
//                         </div>
//                         <div>
//                             <label htmlFor="bloodsugerlevel">Blood Sugar Level (in mg/dL)</label>
//                             <input id="bloodsugerlevel" type="number" />
//                         </div>
//                     </div>
//                     <button id="submit">Submit</button>
//                     <div id="editSection" className="hidden">
//                         <button id="cancelEdit" onClick="cancelEdit()">
//                             Cancel
//                         </button>
//                         <button id="updateEntry" onClick="editRow()">
//                             Update
//                         </button>
//                     </div>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Date</th>
//                                 <th>
//                                     Water Intake <br /> (in ml)
//                                 </th>
//                                 <th>
//                                     Exercise Duration <br /> (in min)
//                                 </th>
//                                 <th>
//                                     Blood Sugar Level <br /> (in mg/dL)
//                                 </th>
//                                 <th>Edit</th>
//                                 <th>Delete</th>
//                             </tr>
//                         </thead>
//                         <tbody id="output"></tbody>
//                     </table>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Healthtracker;













import React, { useState, useEffect } from 'react';
import '../css/healthtracker.css';


const HealthTracker = () => {
    const [date, setDate] = useState(JSON.parse(localStorage.getItem('date')) || []);
    const [water, setWater] = useState(JSON.parse(localStorage.getItem('water')) || []);
    const [exercise, setExercise] = useState(JSON.parse(localStorage.getItem('exercise')) || []);
    const [bloodsugar, setBloodsugar] = useState(JSON.parse(localStorage.getItem('bloodsugar')) || []);
    const [editIndex, setEditIndex] = useState(-1);
    const [inputs, setInputs] = useState({ water: '', exercise: '', bloodsugar: '' });

    useEffect(() => {
        fillTable();
    }, [date, water, exercise, bloodsugar]);

    const clearInputs = () => {
        setInputs({ water: '', exercise: '', bloodsugar: '' });
    };

    const addToLocalStorage = () => {
        localStorage.setItem('date', JSON.stringify(date));
        localStorage.setItem('water', JSON.stringify(water));
        localStorage.setItem('exercise', JSON.stringify(exercise));
        localStorage.setItem('bloodsugar', JSON.stringify(bloodsugar));
    };

    const activateEdit = (i) => {
        setInputs({ water: water[i], exercise: exercise[i], bloodsugar: bloodsugar[i] });
        setEditIndex(i);
        document.getElementById('submit').classList.add('hidden');
        document.getElementById('editSection').classList.remove('hidden');
    };

    const cancelEdit = () => {
        clearInputs();
        setEditIndex(-1);
        document.getElementById('submit').classList.remove('hidden');
        document.getElementById('editSection').classList.add('hidden');
    };

    const editRow = () => {
        if (editIndex === -1) return;
        const updatedWater = [...water];
        const updatedExercise = [...exercise];
        const updatedBloodsugar = [...bloodsugar];

        updatedWater[editIndex] = inputs.water;
        updatedExercise[editIndex] = inputs.exercise;
        updatedBloodsugar[editIndex] = inputs.bloodsugar;

        setWater(updatedWater);
        setExercise(updatedExercise);
        setBloodsugar(updatedBloodsugar);
        addToLocalStorage();
        cancelEdit();
    };

    const deleteRow = (i) => {
        if (!window.confirm(`Confirm that you want to delete the entry: \n ${date[i]}: ${water[i]}ml, ${exercise[i]}min, ${bloodsugar[i]}mg/dL`)) return;

        const updatedDate = date.filter((_, index) => index !== i);
        const updatedWater = water.filter((_, index) => index !== i);
        const updatedExercise = exercise.filter((_, index) => index !== i);
        const updatedBloodsugar = bloodsugar.filter((_, index) => index !== i);

        setDate(updatedDate);
        setWater(updatedWater);
        setExercise(updatedExercise);
        setBloodsugar(updatedBloodsugar);
        addToLocalStorage();
    };

    const handleSubmit = () => {
        if (!inputs.water || !inputs.exercise || !inputs.bloodsugar) {
            alert('Please enter all the fields.');
            return;
        }

        const newDate = new Date().toLocaleDateString();

        setDate([newDate, ...date]);
        setWater([inputs.water, ...water]);
        setExercise([inputs.exercise, ...exercise]);
        setBloodsugar([inputs.bloodsugar, ...bloodsugar]);
        clearInputs();
        addToLocalStorage();
    };

    const fillTable = () => {
        // This function is used to trigger a re-render if needed
    };

    return (
        <div className="body">
            <div className="app">
                <h1>Health Tracker App</h1>
                <div className="inputs">
                    <div>
                        <label htmlFor="water">Water Intake (in ml)</label>
                        <input
                            id="water"
                            type="tel"
                            maxLength={4}
                            value={inputs.water}
                            onChange={(e) => setInputs({ ...inputs, water: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="exercise">Exercise Duration (in min)</label>
                        <input
                            id="exercise"
                            type="tel"
                            maxLength={4}
                            value={inputs.exercise}
                            onChange={(e) => setInputs({ ...inputs, exercise: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="bloodsugerlevel">Blood Sugar Level (in mg/dL)</label>
                        <input
                            id="bloodsugerlevel"
                            type="tel"
                            maxLength={3}
                            value={inputs.bloodsugar}
                            onChange={(e) => setInputs({ ...inputs, bloodsugar: e.target.value })}
                        />
                    </div>
                </div>
                <button id="submit" onClick={handleSubmit}>
                    Submit
                </button>
                <div id="editSection" className={editIndex === -1 ? 'hidden' : ''}>
                    <button id="cancelEdit" onClick={cancelEdit}>
                        Cancel
                    </button>
                    <button id="updateEntry" onClick={editRow}>
                        Update
                    </button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Water Intake <br /> (in ml)</th>
                            <th>Exercise Duration <br /> (in min)</th>
                            <th>Blood Sugar Level <br /> (in mg/dL)</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody id="output">
                        {date.map((d, i) => (
                            <tr key={i}>
                                <td>{d}</td>
                                <td>{water[i] || 'N/A'}</td>
                                <td>{exercise[i] || 'N/A'}</td>
                                <td>{bloodsugar[i] || 'N/A'}</td>
                                <td>
                                    <button onClick={() => activateEdit(i)} className="edit">
                                        <i className="fas fa-edit"></i>
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => deleteRow(i)} className="delete">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HealthTracker;


