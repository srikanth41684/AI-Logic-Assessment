"use client"

import { loginSuccess } from "@/redux/auth/authSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";


export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    // const login = useSelector((state) => state?.auth)

    const dispatch = useDispatch();

    useEffect(() => {
        loginCheckHandler()
    }, [])

    const loginCheckHandler = () => {
        const login = localStorage.getItem("login");
        console.log("login", login);
        if(login) {
            router.push('/products');
        }
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })

            const data = await response?.json();

            console.log("data", data);
            

            if(!response?.ok) {
                throw new Error (data.message || " login Failed");
            }

            dispatch(loginSuccess(data?.user));
            router.push('/products');
            localStorage.setItem("login", true);
            // router.refresh();
        } catch (err) {
            setError(err?.message || "Failed")
        } 
    }

    return (
        <div className="login-container">
            <div className="text-4xl">Login Page</div>

            <form onSubmit={submitHandler} className="flex flex-col gap-4">
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        className="w-full p-2 border-gray-400 border"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        className="w-full p-2 border-gray-400 border"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button className="w-full p-3 bg-green-300 rounded-[4px] cursor-pointer text-black" type="submit">Login</button>
            </form>
        </div>
    )
}