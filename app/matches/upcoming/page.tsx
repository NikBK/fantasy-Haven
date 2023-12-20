import UpcomingMatches from "@/app/ui/matches/UpcomingMatches";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Upcoming"
}

export default function page() {

    return (
        <UpcomingMatches />
    )
}
