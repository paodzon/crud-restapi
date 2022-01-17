import React from 'react';
import Button from '../Button/Button';
import {Link} from 'react-router-dom';
import { useSelector,useDispatch} from 'react-redux';
import { getForm, deleteForm } from '../../actions';
import './Table.css'

const Table = (props) => {

    const data = useSelector((state) => state?.form.formList);
    const dispatch = useDispatch();

    const {openModal} =props;
    const renderData = () => {
      if(data.length <= 0){
        return(<tr>
          <td colSpan="3"><h1>NO DATA</h1></td>
        </tr>)
      }

      return data.map((item, i) => {
        return (
          
            <tr key={i}>
              <Link to={`/view/${item._id}`} >
              <td>{item.title}</td>
              <td>{item.content}</td>
              </Link>
              <td className="table__actions" onClick={() =>dispatch(getForm(item._id))}>
                <Button
                  name="Edit"
                  style="btn-primary"
                  onClickBtn={openModal}
                />
                <Button name="Delete" style="btn-primary" onClickBtn={() => dispatch(deleteForm(item._id))}/>
              </td>
            </tr>
          
        );
      });

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
