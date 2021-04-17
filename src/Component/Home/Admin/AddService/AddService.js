import { faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../../Learner/LearnerBook/Sidebar/Sidebar';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(newInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.description);
        formData.append('email', info.title);

        fetch('https://secure-harbor-26795.herokuapp.com/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(success => {
                if (success) {
                    faAlignCenter('Add Service Successfully');
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-7">
                <h3>Add Service</h3>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputTitle">Service Title</label>
                        <input type="text"
                            onBlur={handleBlur}
                            class="form-control"
                            name="Title"
                            placeholder="Service Title" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Description</label>
                        <input onBlur={handleBlur} type="text" class="form-control"
                            name="Description"
                            placeholder="Description" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;