import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = ( collection ) => { //collection to get documents from
    const [docs, setDocs] = useState([]); 

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => { // takes a snapshot of the collection whenever a change occurs in the database
            let documents = [];
            snap.forEach(doc => { // cycles thru every document present when the snapshot is registered 
                documents.push({...doc.data(), id:doc.id}) //destructuring the data in the document and pushing it into the documents array
            });
            setDocs(documents);
        });
        return () => unsub();

    }, [collection])

    return { docs };
}

export default useFirestore;