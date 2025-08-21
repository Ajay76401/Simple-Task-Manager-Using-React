import React, { useState } from 'react'

function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const { name, value } = event.target

        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            }
        })
    }
    function SubmitNote(event){
        props.onAdd(note)
        setNote({
            title:"",
            content:""
        })
      
        event.preventDefault()
    }


    return (
        <div className='formBlock'>
            <form className='form1'  onSubmit={SubmitNote}>
                <input
                    className='formTitle'
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder='Enter Title'
                />
                <textarea
                    className='formContent'
                    name="content"
                    onChange={handleChange}
                    value={note.content}
                    placeholder='Write your Content'
                    rows={3}
                ></textarea>
                <button type='submit'>Add</button>
            </form>

        </div>
    )
}

export default CreateArea
