import React, { useState } from 'react'

function Form() {
    const [firstName, setFirstName] = useState("")
    const [emailId, setEmailId] = useState("")
    const [formData, setFormData] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        setFormData([...formData, { firstName, emailId, }])
        setEmailId("")
        setFirstName("")
    }

    return (<>
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Name">name </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <label htmlFor="Name"> Email id </label>
                <input type="text" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                <button type="submit"> Submit </button>
            </form>
        </div>
        <div>
            {
                formData?.map((data, i) => {
                    return (<div key={i}>
                        <p>Name {data.firstName}</p>
                        <p>Email {data.emailId}</p>
                    </div>
                    )
                })
            }
        </div>
    </>
    )
}

export default Form