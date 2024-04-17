import { Metadata } from "next";
import LoginForm from "./login-form";

export const metadata: Metadata = {
    title: "Login"
};

export default function Login() {
    return (
        <div className='login'>
            <h2>Login</h2>
            <LoginForm />
        </div>
    )
}