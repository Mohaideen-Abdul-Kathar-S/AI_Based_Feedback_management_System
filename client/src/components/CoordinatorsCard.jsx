import React from 'react'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import '../Styles/CoordinatorsCard.css';
export default function CoordinatorsCard({Cname, Cdept, cid  }) {
  return (
    <div className="coordinators-card">
        <div className='text-area'>
            <p className='coordinator-email'>{Cname}</p>
            <p className='coordinator-dept'> {Cdept} </p>
        </div>
        <div className='icon-area'>
<FiEdit
              className="icon1"
              onClick={() => handleEdit(cid)}
            />
            <FiTrash2
              className="icon2"
              onClick={() => handleDelete(cid)}
            />
        </div>
    </div>
  )
}
