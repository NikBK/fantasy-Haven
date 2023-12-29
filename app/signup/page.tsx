import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import SignupForm from "@/app/ui/signup/SignupForm"

const page = async () => {
    const session = await getServerSession();
    if (session) {
        redirect("/");
    }

    return (
        <SignupForm />
    )
}

export default page
