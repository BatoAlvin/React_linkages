/* eslint-disable */
import { app } from "../firebase/firebase";
import {
  getFirestore,
  getDoc,
  getDocs,
  collection,
  addDoc,
  doc,
  updateDoc
} from "@firebase/firestore";

const db = getFirestore();

const fetchAll = async (collectionName) => {
  const data = [];
  const querySnapshot = await getDocs(collection(db, collectionName));
  querySnapshot.forEach((doc) => {
    return data.push({ ...doc.data(), id: doc.id });
  });
  return data;
};

const fetchOne = async (collectionName, id) => {
  const data = await getDoc(doc(db, collectionName, id));
  return data.data();
};

const addDocument = async (collectionName, data)=>{
  const docRef = await addDoc(collection(db,collectionName), {...data})
  return docRef.id
}

const updateDocument = async (collectionName, data, id)=> {
const docRef = doc(db, collectionName, id)
const result = await updateDoc(docRef, {...data})
return result

}
export { fetchAll, fetchOne, addDocument, updateDocument };
