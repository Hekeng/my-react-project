
interface socialProps{
	className:string
}



export const FacebookIcon = ({ className }: socialProps) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}

  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

export const LinkedInIcon = ({ className }: socialProps) => (
	<svg  viewBox="-2 -2 24 24" fill="currentColor" className= {className}>
		<path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457-.592 0-.945.398-1.1.784-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066 1.41 0 2.468.922 2.468 2.902M6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115-.014-.632-.465-1.114-1.199-1.114m-1.086 9.556h2.144V8.38H5.127z"/>
		<path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10"/>
	</svg>
)


export const XIcon = ({ className }: socialProps) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    width="24" 
    height="24"
  >
    {/* Фон (подложка) */}
    <path 
      fill="currentColor" 
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    />
  </svg>
)
export const GitIcon = ({ className }:socialProps) => (
	<svg viewBox="0 0 24 24" fill="currentColor"  className= {className}>
	<path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.1.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.83 1.32 3.52 1 .11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.33-5.47-5.92 0-1.31.47-2.38 1.25-3.22-.13-.31-.54-1.56.12-3.25 0 0 1.02-.33 3.35 1.23a11.6 11.6 0 0 1 6.1 0c2.33-1.56 3.35-1.23 3.35-1.23.66 1.69.25 2.94.12 3.25.78.84 1.25 1.91 1.25 3.22 0 4.6-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.57A12 12 0 0 0 12 .5z"/>
	</svg>

)


/* ================= INSTAGRAM ================= */

export const InstagramIcon = ({ className }: socialProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="
        M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2
        M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2
        M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6
        M17.2 6.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4
      "
    />
  </svg>
)

/* ================= YOUTUBE ================= */

export const YouTubeIcon = ({ className }: socialProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="
        M3 7.5c0-1.38 1.12-2.5 2.5-2.5h13c1.38 0 2.5 1.12 2.5 2.5v9c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 19 3 17.88 3 16.5v-9
        M10 9.2v5.6l4.8-2.8L10 9.2z
      "
    />
  </svg>
)

/* ================= TIKTOK ================= */

export const TikTokIcon = ({ className }: socialProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="
        M3 3h18v18H3z
        M14 6.5c.7 1.2 1.9 2 3.2 2.2v2.3c-1.3-.1-2.4-.5-3.2-1v4.7a4 4 0 1 1-4-4c.3 0 .6 0 .9.1v2.4a1.8 1.8 0 1 0 1.1 1.7V6.5h2z
      "
    />
  </svg>
)

/* ================= TELEGRAM ================= */

export const TelegramIcon = ({ className }: socialProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="
        M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20
        M16.8 7.6l-2.2 10.2c-.1.5-.4.6-.8.4l-3-2.2-1.4 1.4c-.2.2-.3.3-.6.3l.3-3.1 6.4-5.8c.3-.3 0-.5-.4-.3l-7.9 5-3.4-1.1c-.7-.2-.7-.7.1-1l12.3-4.7c.6-.2 1 .2.8.9z
      "
    />
  </svg>
)


// export const FacebookIcon = ({ className }: socialProps) => (
//   <svg 
    
//     viewBox="0 0 95.333 95.333" 
//     fill="currentColor" 
//     className={className}
//   >
//     <path d="M93.333 0H2C.896 0 0 .896 0 2v91.332c0 1.104.896 2 2 2h48.525V63.477H40.284c-.885 0-1.602-.717-1.602-1.602V48.961c0-.885.717-1.603 1.602-1.603h10.242v-8.913c0-11.744 7.395-19.332 18.839-19.332l10.188.016c.883.001 1.6.718 1.6 1.602v11.991c0 .885-.717 1.602-1.602 1.602l-6.863.003c-4.729 0-5.595 1.844-5.595 5.475v7.556h11.979c.425 0 .832.169 1.133.47.3.301.469.708.469 1.133l-.004 12.915c0 .885-.717 1.603-1.602 1.603H67.092v31.854h26.24c1.104 0 2-.896 2-2V2c.001-1.105-.894-2-1.999-2"/>
//   </svg>
// )