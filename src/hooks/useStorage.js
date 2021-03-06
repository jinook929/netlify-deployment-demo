import { useState, useEffect } from "react"
import { appStorage, appFirestore, timestamp } from "../firebase/config"

const useStorage = file => {
    const [progress, setProgress] = useState(0)
    const [url, setUrl] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const storageRef = appStorage.ref(file.name)
        const collectionRef = appFirestore.collection('images')

        storageRef.put(file).on('state_changed', snap => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            const createdAt = timestamp()
            collectionRef.add({url, createdAt})
            setUrl(url)
        })
    }, [file])

    return {progress, url, error}
}

export default useStorage