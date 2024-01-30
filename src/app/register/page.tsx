import { RegisterForm } from "../components/register-form";

export default function Page() {
    return <>
        <div className="flex justify-center py-5">
            <div>
                <h1 className="h1">Register</h1>
                <div className="card p-3 md:p-5 w-fit">
                    <RegisterForm></RegisterForm>
                </div>
            </div>
        </div>
    </>
}