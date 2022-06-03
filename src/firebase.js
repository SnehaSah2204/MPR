import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, setDoc, doc, getDocs, Firestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAPimJrtLTDYJrdUh_Se4eQGheJZlayclc",
    authDomain: "majorproject-f72fb.firebaseapp.com",
    projectId: "majorproject-f72fb",
    storageBucket: "majorproject-f72fb.appspot.com",
    messagingSenderId: "949977708897",
    appId: "1:949977708897:web:8a6a2c93a047ca4ff16d20"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  
  function generateString(length) {
        const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }
  

  export const createUser =async(user)=>{
    try{
        const User = collection(db, 'Users');
        const res = await setDoc(doc(User,user.email),user);
        return res;
    } catch(err){
        return err;
    }
  }

  export const addpost = async(post)=>{
    const User = collection(db, 'Users');
    var Post = {
        text: post.text,
        anonymous: post.anonymous,
        postedBy: post.state.name,
        likes:[]
    }
    var id = generateString(11);
    
    try{
        const Posts = collection(db, 'Posts');
        const res = await setDoc(doc(Posts,id),Post);
        return true;
      } catch(err){
        //   return err;
        console.log(err);
        return false;
      }
  }

  export const getpost = async(setPost) =>{
    const Posts = collection(db, 'Posts');
    const Snapshot = await getDocs(Posts);
    const List = [];
    Snapshot.docs.map((dc) => {
      List.push({
        id:dc.id,
        text:dc.data().text,
        likes:dc.data().likes,
        postedBy:dc.data().postedBy
      })
      });
     setPost(List);
  }

  export const login =async(user)=>{
    try{
        const docRef = doc(db, 'Users', user.email);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            if(docSnap.data().password !== user.password){
                alert('Password does not match!');
                return false;
            }
                return docSnap.data();
        }else{
            alert('No user found with that email!')
        }
        return false;
    } catch(err){
        console.log(err);
        return false;
    }
  }


  export default db;
  