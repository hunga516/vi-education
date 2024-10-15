import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleAuthProvider } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { AuthModalContext } from "./AuthModalContext";
import { createUserInDatabase, getUserByEmail } from "../utils/request";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState()
    const navigate = useNavigate();
    const AuthModalContextValue = useContext(AuthModalContext)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                console.log("User logged in:", currentUser.email);
                const user = await getUserByEmail(currentUser.email); // Thêm await
                setUserId(user._id);
                console.log("User id is: ", user._id); // Sử dụng user._id thay vì userId
                setUser(currentUser)
            } else {
                setUser(null);
                console.log("User not logged in.");
                navigate("/reels");
            }
        });

        return () => unsubscribe();
    }, [navigate]);

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

    return (
        <AuthContext.Provider value={{ user, userId, handleSignIn, handleSignOut }}>
            {children}
        </AuthContext.Provider>
    );
};
