import PastMatches from "@/app/ui/matches/PastMatches";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Past"
}

export default function page() {

    return (
        <PastMatches />
    )
}
