function LinkIcon({ type }) {
  if (type === 'copy') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </svg>
    )
  }

  if (type === 'whatsapp') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <path d="M20 11.5a8.5 8.5 0 0 1-12.8 7.3L4 20l1.2-3.1A8.5 8.5 0 1 1 20 11.5Z" />

        <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.5c.1.2.1.4 0 .6l-.5.7c.6 1.1 1.5 2 2.6 2.6l.7-.5c.2-.1.4-.1.6 0l1.5.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.4.1-2.1-.5-4.1-1.8-5.6-3.3-1.5-1.5-2.8-3.5-3.3-5.6-.2-.5-.1-1 .1-1.5Z" />
      </svg>
    )
  }

  if (type === 'share') {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        <circle cx="18" cy="5" r="2.5" />
        <circle cx="6" cy="12" r="2.5" />
        <circle cx="18" cy="19" r="2.5" />
        <path d="m8.2 10.8 7.5-4.4M8.2 13.2l7.5 4.4" />
      </svg>
    )
  }

  return null
}

export default LinkIcon