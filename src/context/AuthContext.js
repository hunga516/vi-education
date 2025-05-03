import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleAuthProvider } from "../utils/firebase";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AuthModalContext } from "./AuthModalContext";
import { createUserInDatabase, getUserByEmail } from "../utils/request";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState()
    const navigate = useNavigate();
    const AuthModalContextValue = useContext(AuthModalContext)
    const [searchParams] = useSearchParams();

   useEffect(() => {
       console.log(searchParams.get("name"));
       console.log(searchParams.get("age"));
   }, [])

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    //         if (currentUser) {
    //             console.log("User logged in:", currentUser.email);
    //             const user = await getUserByEmail(currentUser.email);
    //             setUserId(user._id);
    //             console.log("User id is: ", user._id);
    //             setUser(currentUser)
    //             setUserOnline(user._id)
    //         } else {
    //             setUserOffline(userId)
    //             setUser(null);
    //             console.log("User not logged in.");
    //             navigate("/");
    //             AuthModalContextValue.toggleLoginModal();
    //         }
    //     });

    //     return () => unsubscribe();
    // }, [navigate]);

    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithPopup(auth, googleAuthProvider);
            setUser(userCredential.user); // Cập nhật trạng thái người dùng
            AuthModalContextValue.toggleLoginModal(); // Ẩn modal sau khi đăng nhập thành công
            // navigate("/");

            console.log(userCredential.user);

            createUserInDatabase(userCredential.user);
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    };

    // const handleSignUp = async () => {
    //     try {
    //         const user = await axios.post('')
    //     } catch (error) {
    //         console.log(error);

    //     }
    // }


    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setUser(null);
            navigate('/');
        } catch (error) {
            console.error("Error during sign-out:", error);
        }
    };

    const setUserOnline = async (userId) => {
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/users/online`, { userId })
        } catch (error) {
            console.log(error);
        }
    }

    const setUserOffline = async () => {
        if (!userId) return;
        console.log(userId + 'da ofline user');
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/users/offline`, { userId })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{ user, userId, handleSignIn, handleSignOut }}>
            {children}
        </AuthContext.Provider>
    );
};
