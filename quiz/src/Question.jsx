import React from 'react'

const Question = ({ question }) => {

    return (
        <div>
            <h1>
                {question.question}
            </h1>
        </div>
    )
}

export default Question