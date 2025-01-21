import React from 'react'
import './TaskCard.css'
import { Tag } from './Tag'
import deleteIcon from '../assets/delete.png'

const TaskCard = () => {
  return (
    <article className='task_card'>
       <p className='task_text'>
        This Is Sample Text.
       </p>
       <div className='task_card_bottom_line'>
        <div className='tasl_card_tags'>
            <Tag tagName="HTML"/>
            <Tag tagName="Css"/>
            <Tag tagName="JavaScript"/>
        </div>
        <div className='task_delete'>
            <img src={deleteIcon} alt="" className='delete_icon' />
        </div>
       </div>
    </article>
  )
}

export default TaskCard