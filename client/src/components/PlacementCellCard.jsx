import React from 'react'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import '../Styles/CoordinatorsCard.css';
import '../Styles/PlacementCellCard.css';
export default function PlacementCellCard({Cname, cid  }) {
  return (
    <div className="coordinators-card">
            <div className='text-area'>
                <p className='Placement-email'>{Cname}</p>

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
