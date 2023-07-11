import { useState } from "react"

function Api() {
    const [apiData, setApiData] = useState()

    const URL = `https://jsonplaceholder.typicode.com/todos`
    async function handleFetchData() {
        const jsonData = await fetch(URL)
        const data = await jsonData.json()
        setApiData(data);
    }

    return (<>
        <div>
            <button onClick={handleFetchData}>Click To Fetch Data</button>
        </div>
        {
            apiData?.map((data) => {
                return <p>{data.title}</p>
            })
        }
    </>
    )
}

export default Api