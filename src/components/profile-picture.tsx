import me from "@/assets/me.png"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function ProfilePicture() {
  return (
    <div className="w-full max-w-[12rem]">
      <AspectRatio ratio={1 / 1} className="bg-muted rounded-lg">
        <img src={me} alt="My profile picture" className="rounded-lg" />
      </AspectRatio>
    </div>
  )
}
