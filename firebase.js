// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  setDoc,
  doc,
  updateDoc,
  runTransaction,
} from "firebase/firestore";
import { nanoid } from "nanoid/non-secure";
import { Alert } from "react-native";
import { setCurrentUser } from "./slices/userSlice";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwbYGO3OOG7qXEBYULLsKhvRZ5IQ1ujbI",
  authDomain: "forest-focus.firebaseapp.com",
  projectId: "forest-focus",
  storageBucket: "forest-focus.appspot.com",
  messagingSenderId: "997691955753",
  appId: "1:997691955753:web:f370f753b5cb5f6973da38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();


export async function initializeUserLands(userId) {
  for (let i = 0; i < 25; i++) {
    await setDoc(doc(db, "lands", `${userId}-${i}`), {
      userId: userId,
      plant: { id: -1, level: 0},
    });
  }
}

export async function signup(
  name,
  surname,
  password,
  email,
  navigation,
  dispatch
) {
  const id = nanoid();
  const q = query(
    collection(db, "users"),
    where("email", "==", email)
  );
  getDocs(q)
    .then((res) => {
      if (res.docs.length === 0) {
        setDoc(doc(db, "users", id), {
          name,
          surname,
          password,
          email,
        })
          .then(() => {
            initializeUserLands(id);
            dispatch(setCurrentUser(id));
          })
          .then(() => setTimeout(() => {
            navigation.navigate("FieldSelection")
          }, 2000));
      } else {
        Alert.alert('Hesap mevcut', 'Email zaten kayıtlı. Başka bir emaille tekrar dene',[{text:'Kapat'}]);
      }
    })

  
  
}

export async function signin(email, password, dispatch, navigation) {
  const q = query(
    collection(db, "users"),
    where("email", "==", email),
    where("password", "==", password)
  );
  getDocs(q)
    .then((res) => {
      if (res.docs.length === 0) {
        alert("yok");
      } else {
        dispatch(setCurrentUser(res.docs[0].id));
        navigation.navigate("FieldSelection");
      }
    })
    .catch((err) => console.log(err));
}

export async function getUsersLands(userId, setLands) {
  const q = query(collection(db, "lands"), where("userId", "==", userId));
  getDocs(q).then((res) => {
    res.docs.forEach((doc) => {
      setLands((prev) => [...prev, { id: doc.id, plant: doc.data().plant }]);
    });
  });
}


export async function handleLevel(selectedLand, selectedSeed) {
  const sfDocRef = doc(db, "lands", selectedLand);

  try {
    const newPopulation = await runTransaction(db, async (transaction) => {
      const sfDoc = await transaction.get(sfDocRef);
      if (!sfDoc.exists()) {
        throw "Document does not exist!";
      }

      const newLevel = sfDoc.data().plant.level + 1;
      const id = sfDoc.data().plant.level===0?selectedSeed:sfDoc.data().plant.id;
      if (newLevel <= 5) {
        transaction.update(sfDocRef, { plant: { id: id, level: newLevel } });
        return newLevel;
      }
    });
  } catch (e) {
    // This will be a "population is too big" error.
    console.error(e);
  }
}
