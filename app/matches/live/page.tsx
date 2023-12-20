import LiveMatches from "@/app/ui/matches/LiveMatches";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Live"
}

export default function page() {

    return (
        <LiveMatches />
    )
}
