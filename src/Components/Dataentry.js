import React, { useState } from 'react'
import axios from "axios"
// import { useHistory } from 'react-router-dom'
// import '../../Components/register/reg.css'
import './dataentry.css'

export default function Dataentry() {

    const [user, setUser] = useState({
        type: "",
        year: "",
        capacity: "",
        production: "",
        capacityU: "",
        imports: "",
        exports: "",
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const feed = () => {
        console.log("jay")
        const { capacity, production, capacityU, imports, exports, type, year } = user
        if (capacity && production && capacityU, imports, exports, type, year) {
            alert("Data feeded")
            axios.post("http://localhost:9004/feed", user)
                .then(res => console.log(res))
        } else {
            alert('Fill all data')
        }


        // .then(res => console.log(res))

        /////This is to be done after making backend

    }
    //   const history = useHistory()



    return (
        <>

            <div className="container my-5">
                {console.log("User", user)}
                <h1>Enter your Company's Production Data</h1>
                <div class="col-md-3 my-3">
                    <label for="validationDefault04" class="form-label">Group of Various Petrochemicals</label>
                    <select class="form-select" id="validationDefault04" onChange={handleChange} name="type" value={user.type} required>
                        <option>Synthetic Fibres/Yarn</option>
                        <option>Polymers</option>
                        <option >Synthetic Rubber</option>
                        <option >Synthetic Detergent Intermediates</option>
                        <option >Performance Plastics</option>
                        <option >Total Basic Major Petrochemicals</option>
                    </select>
                </div>
                <div className='mb-3'>
                    <label for="exampleInputEmail1" class="form-label">Year</label>
                    <input type="text" className="form-control is-invalid" id="validationServer03" placeholder='Enter Year' name="year" value={user.year} onChange={handleChange} />
                    <div id="validationServer03Feedback" class="invalid-feedback">
                        Please correct Year
                    </div>
                </div>
                <div className='mb-3'>
                    <label for="exampleInputEmail1" class="form-label">Enter Capacity</label>
                    <input type="text" className="form-control" placeholder='Enter Capacity' name="capacity" value={user.capacity} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label for="exampleInputPassword1" class="form-label">Enter Production</label>
                    <input type="text" className="form-control" placeholder='Enter Production' name="production" value={user.production} onChange={handleChange} />
                </div>

                <div className='mb-3'>
                    <label for="exampleInputPassword1" class="form-label">Enter Capacity Utilisation</label>
                    <input type="text" className="form-control" placeholder='Enter Capacity Utilisation' name="capacityU" value={user.capacityU} onChange={handleChange} />
                </div>

                <div className='mb-3'>
                    <label for="exampleInputPassword1" class="form-label">Enter Imports</label>
                    <input type="text" className="form-control" placeholder='Enter Imports' name="imports" value={user.imports} onChange={handleChange} />
                </div>
                <div className='mb-3'>
                    <label for="exampleInputPassword1" class="form-label">Enter Exports</label>
                    <input type="text" className="form-control" placeholder='Enter Exports' name="exports" value={user.exports} onChange={handleChange} />
                </div>


                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>



                <button type="submit" class="btn btn-primary" onClick={feed}>Submit</button>

                {/* <button type="submit" class="btn btn-primary" onClick={() => history.push("/login")}>Login</button> */}

            </div>

        </>
    )
}
