import { getUserByEmail } from "@/app/lib/data";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

const authOptions = {
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials, req) {
                const user = await getUserByEmail(credentials?.email || "");
                const isPasswordCorrect = await bcrypt.compare(credentials?.password || "", user.password);

                if (isPasswordCorrect) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        username: user.username
                    };
                }
                console.log("Failed logging in ", user, ", Is password correct ? ", isPasswordCorrect);
                return null;
            }
        })
    ]
}

const handler = NextAuth({
    ...authOptions,
    session: { strategy: 'jwt' },
    pages: {
        signIn: '/login'
    }
});

export { handler as GET, handler as POST };