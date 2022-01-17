export const addForm = (form) => async (dispatch) => {
  const response = await fetch("http://localhost:8080/forms/post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: form.title, content: form.content }),
  })
    .then((res) => res.json())
    .then((resData) => resData)
    .catch((err) => console.log(err));
  console.log(response);
  dispatch({
    type: "ADD_FORM",
    payload: response.form,
  });
  
};

export const editForm = (form) => async (dispatch) => {

    const response = await fetch(`http://localhost:8080/forms/post/${form._id}`,{
        method: 'PUT',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({title: form.title, content: form.content})
    }).then(res => res.json()).then(resData =>resData).catch(err=>console.log(err));

    console.log(response.result)
  dispatch({
    type: "EDIT_FORM",
    payload: response.result
  });
};

export const deleteForm = (id) => async(dispatch) =>{

    await fetch(`http://localhost:8080/forms/post/${id}`,{
        method:'DELETE'
    })

    dispatch({
        type:'DELETE_FORM',
        payload: id
    })
}

export const getForms = () => async (dispatch) => {
  const response = await fetch("http://localhost:8080/forms/posts")
    .then((res) => res.json())
    .then((resData) => resData)
    .catch((err) => console.log(err));

  dispatch({
    type: "GET_FORMS",
    payload: response,
  });
};

export const getForm = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:8080/forms/post/${id}`)
    .then((res) => res.json())
    .then((resData) => resData)
    .catch((err) => console.log(err));
  dispatch({
    type: "GET_FORM",
    payload: response.form,
  });
};

export const clearForm = () => {
  return {
    type: "CLEAR_FORM",
  };
};
