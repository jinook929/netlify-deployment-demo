import { useState, useEffect } from "react"
import { appFirestore } from "../firebase/config"

const useFirestore = collection => {
    const [docs, setDocs] = useState([])

    useEffect(() => {
        appFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot(snap => {
            let documents = []
            snap.forEach(doc => {
                documents.push({id: doc.id, ...doc.data()})
            })
            setDocs(documents)
        })
    }, [collection])

    return {docs}
}

export default useFirestore