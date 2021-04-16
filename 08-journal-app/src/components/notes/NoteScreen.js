import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <form >
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>

                    <div className="notes__image">
                        <img src="https://thumbs.dreamstime.com/t/monta%C3%B1a-jap%C3%B3n-landsapce-de-fuji-con-el-cielo-del-bule-121611711.jpg" alt="paisaje"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
