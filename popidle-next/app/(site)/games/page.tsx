import FriendPromo from "@/components/page/FriendPromo";
import Header from "@/components/page/Header";
import { Friend } from "@/types/Friend";

export default function GamesPage() {

    const friends: Friend[] = [
        {
            title: "PopIdle80s", 
            description: "Guess the 80's album from the pixelated artwork.", 
            imageUrl: "/friends/80s.png", 
            linkUrl: "https://80s.popidle.app"
        },
        {
            title: "PopIdle90s", 
            description: "Guess the 90's album from the pixelated artwork.", 
            imageUrl: "/friends/90s.png", 
            linkUrl: "https://90s.popidle.app"
        },
        {
            title: "PopIdle", 
            description: "The original PopIdle game. Guess the album from the pixelated artwork.", 
            imageUrl: "/friends/PopIdle.jpg", 
            linkUrl: "https://popidle.the-sound.co.uk"
        },
        {
            title: "ScreenIdle", 
            description: "Can you guess the movie from the pixelated image of the poster or the movie tagline?", 
            imageUrl: "/friends/ScreenIdle.png", 
            linkUrl: "https://screenidle.app"
        }
    ]

    return (
        <>
        <Header title={'Friend\'s games'} subtitle="Play more daily games" />
        <main className="grow">
          <div className="max-w-md p-4 mx-auto md:max-w-screen-lg md:px-8">
            <div className="grid grid-cols md:grid-cols-3 gap-2 md:gap-4">
            {
                friends.filter((friend: Friend) => friend.title !== process.env.GAME_TITLE)
                    .map((friend: Friend, index: number) => (
                    <FriendPromo key={index} {...friend} />
                ))
            }
            </div>
          </div>
        </main>
      </>
    )
}