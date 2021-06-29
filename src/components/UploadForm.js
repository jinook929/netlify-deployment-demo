import React, {useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/png', 'image/jpeg']

    const handelInputChange = e => {
        let selected = e.target.files[0]
        // console.log(selected)
        if(selected && types.includes(selected.type)) {
            setFile(selected)
            setError(null)
        } else {
            setFile(null)
            setError("Please choose an image file (png or jpeg)")
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={handelInputChange} />
                <span>+</span>
            </label>
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
        </form>
    )

}

export default UploadForm