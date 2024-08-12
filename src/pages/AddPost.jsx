import React, { useState } from 'react';
import { useMenu } from '../Contexts/MenuContext';

const AddPost = () => {
  const setMenu = useMenu();
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState(null);
  let user_id = localStorage.getItem('user_id');

  async function addPost(e) {
    e.preventDefault();

    alert(text,photo,user_id);
    const formData = new FormData();
    formData.append('text', text);
    formData.append('photo', photo);
    formData.append('user_id', user_id); 
    // Dodaj user_id u bazu

    try {
      let result = await fetch('http://127.0.0.1:8000/api/addpost', {
        method: 'POST',
        body: formData
      });
      if (result.ok) {
        alert("Post je sačuvan!");
      } else {
        alert("Post nije sačuvan!");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Došlo je do greške :(");
    }
  }

  return (
    <div className={setMenu === false ? "dashboard" : "dashboard active"}>
      <h3>Nova objava</h3>
      <div className='wrapper'>
        <form onSubmit={addPost}>
          <div className='inputBox'>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Text' required />
          </div>
          <div className=''>
            <input type="file" onChange={(e) => setPhoto(e.target.files[0])} placeholder='Photo' required />
          </div>
          <br/>
          <button type='submit'>Objavi</button>
        </form>
      </div>
    </div>
  );
}

export default AddPost;