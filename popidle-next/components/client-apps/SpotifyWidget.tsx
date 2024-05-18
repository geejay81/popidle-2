"use client"

type SpotifyWidgetProps = {
    albumId: string
}

export default function SpotifyWidget({albumId}: SpotifyWidgetProps) {
    return (
        <iframe style={{borderRadius: '12px'}}
            src={`https://open.spotify.com/embed/album/${albumId}?utm_source=generator&theme=0`} width="100%" height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    )
}