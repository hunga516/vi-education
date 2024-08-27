import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, googleAuthProvider } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("User logged in:", currentUser);
                setUser(currentUser); // Đảm bảo set user trước khi điều hướng
                navigate("/"); // Điều hướng sau khi user đã được set
            } else {
                setUser(null);
                console.log("User not logged in.");
                navigate("/sign-in");
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [navigate]);

    const handleSignIn = async () => {
        try {
            const userCredential = await signInWithPopup(auth, googleAuthProvider);
            setUser(userCredential.user); // Cập nhật trạng thái người dùng
            navigate('/');
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setUser(null); // Reset trạng thái người dùng
            navigate('/');
        } catch (error) {
            console.error("Error during sign-out:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, handleSignIn, handleSignOut }}>
            {children}
        </AuthContext.Provider>
    );
};
