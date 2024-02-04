"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ArrowPathIcon, ArrowRightIcon, AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";

const LoginForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        if (!response?.error) {
            // if (response?.url) {
            //     let redirectUrl = decodeURIComponent(response.url);
            //     let callbackUrl = redirectUrl.split("callbackUrl=")[1];
            //     if (callbackUrl) {
            //         router.push(callbackUrl);
            //     }
            //     else {
            //         router.push(redirectUrl);
            //     }
            // }
            // else {
            //     router.push('/');
            // }
            router.push('/');
            router.refresh();
        }

        setLoading(false);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                <h1 className={`${lusitana.className} mb-3 text-2xl`}>
                    Please log in to continue.
                </h1>
                <div className="w-full">
                    <div>
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                            />
                            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <input
                                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter password"
                                required
                                minLength={6}
                            />
                            <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                        </div>
                    </div>
                </div>

                <button aria-disabled={loading} className="mt-4 w-full flex gap-2 items-center justify-center text-white bg-blue-600 hover:bg-blue-500 p-2" >
                    {loading ?
                        <>Loading <ArrowPathIcon className="h-5 w-5 text-gray-50" /> </>
                        :
                        <>Log in <ArrowRightIcon className="h-5 w-5 text-gray-50" /> </>
                    }
                </button>

                <div className="text-sm text-center mt-2">Don't have an Account ? <Link href={'/signup'} className="text-blue-700">signup</Link></div>

            </div>

            <TestUser />
        </form>
    )
}

const TestUser = () => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Test User Information</h2>
            <p className="text-gray-600 mb-2">
                <span className="font-bold">Email:</span> tester@gmail.com
            </p>
            <p className="text-gray-600">
                <span className="font-bold">Password:</span> mytest123
            </p>
        </div>
    );
};

export default LoginForm;
