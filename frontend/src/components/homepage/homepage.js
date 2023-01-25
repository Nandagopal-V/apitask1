import React,{useState} from 'react'
import axios from 'axios'
import './Homepage.css'

const Homepage = () => {

    const [file, setFile] = useState();

    const onChangeHandler=(e) => {
        setFile(e.target.files[0])
      }

      const uploadFile=(e)=>{
        e.preventDefault()
        const url = 'http://localhost:4000';
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileName', file.name);
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };

        try{
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
          });
        } catch (err) {
            console.error(err);
          }
      }


  return (
    <div className="Homepage">
    <form onSubmit={ uploadFile}>
      <h1> Upload Your File Here</h1>
      <input type="file"  onChange={onChangeHandler} required/>
      <button className='button1' type="submit">Upload</button>
    </form>
</div>
  )
}

export default Homepage