import React from 'react';
import Button from '../Button/Button';
import './Table.css'

const Table = (props) => {
    
    const {openModal} =props;
    const renderData = () => {
      return (
        <tr>
          <td>Sample 1</td>
          <td>Content 1</td>
          <td className='table__actions'>
            <Button name="Edit" style="btn-primary" onClickBtn={openModal}/>
            <Button name="Delete" style="btn-primary" />
          </td>
        </tr>
      );
    };

    return (
        <table>
            <thead>
                <tr>
                    <th width='30%'>Title</th>
                    <th width='40%'>Content</th>
                    <th width='30%'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderData()}
            </tbody>
        </table>
    )
}

export default Table
