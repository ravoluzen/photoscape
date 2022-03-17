import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
   const [progress, setProgress] = useState(0);
   const [error, setError] = useState(null);
   const [url, setUrl] = useState(null);
   
   useEffect(() => {
       //creating a reference to the uploaded file's memory location
       const storageRef = projectStorage.ref(file.name)
       const collectionRef = projectFirestore.collection('images');

       //updating the reference when the state changes
       storageRef.put(file).on('state_changed', (snap) => {
           let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;

           //setting the progress to the percentage of the file's size uploaded
           setProgress(percentage);
       }, (err) => {
           setError(err);
       }, async () => {
           //after the upload is complete, we get the file's url
           const url = await storageRef.getDownloadURL();
           const createdAt = timestamp();
           collectionRef.add({ url, createdAt })
           setUrl(url);
       })
   }, [file]);

   return { progress, url, error }
}

export default useStorage;