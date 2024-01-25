import { LoginForm } from "../components/auth/login-form";

export default function Page() {
    return <>
        <div className="flex justify-center py-5">
            <div>
                <h1 className="h1">Login</h1>
                <div className="card p-3 md:p-5 lg:w-1/2">
                    <LoginForm></LoginForm>
                </div>
            </div>
        </div>
    </>
}