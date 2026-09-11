import LinkIcon from './LinkIcon'
import linkActions from '../data/linkActions'

function LinkMenu({ title, url, icon, menuIcon, onClose }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      onClose()
    } catch {
      // Gagal menyalin
    }
  }

  const handleShareWhatsApp = () => {
    const message = `Hai! Cek ${title} di sini:\n${url}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    onClose()
  }

  const handleShare = async () => {
    if (!navigator.share) {
      await handleCopy()
      return
    }

    try {
      await navigator.share({
        title,
        url,
      })

      onClose()
    } catch {
      // User membatalkan share
    }
  }

  const handleAction = async (type) => {
    if (type === 'copy') {
      await handleCopy()
    }

    if (type === 'whatsapp') {
      handleShareWhatsApp()
    }

    if (type === 'share') {
      await handleShare()
    }
  }

  return (
    <div
      className="
        fixed inset-0 z-50
        flex min-h-screen items-center justify-center
        bg-[#3A2118]/55 px-5
        backdrop-blur-[5px]
      "
      onClick={onClose}
    >
      <div
        className="
          relative w-full max-w-sm overflow-hidden
          rounded-[28px]
          border border-[#E5D9BD]
          bg-[#FFFDF9] p-5
          shadow-[0_24px_60px_rgba(60,30,15,0.30)]
        "
        onClick={(event) => event.stopPropagation()}
      >
        {/* Top accent */}
        <span
          className="
            pointer-events-none absolute inset-x-0 top-0 h-1
            bg-gradient-to-r
            from-transparent via-[#C9A66B] to-transparent
          "
        />

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="
            absolute right-4 top-4
            flex h-9 w-9 items-center justify-center
            rounded-full
            text-xl text-[#806A5D]
            transition-all
            hover:bg-[#7B3F20]/[0.06]
            hover:text-[#542A1B]
            active:scale-95
          "
        >
          ×
        </button>

        {/* Icon */}
        <div className="flex justify-center pt-3">
          <div
            className="
              flex h-24 w-24 items-center justify-center
              overflow-hidden rounded-[24px]
              border border-[#7B3F20]/10
              bg-[#F8F3EC]
              shadow-sm
            "
          >
            <img
              src={menuIcon || icon}
              alt=""
              className="h-16 w-16 object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <div className="mt-4 text-center">
          <h2
            className="text-base font-semibold text-[#542A1B]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            {title}
          </h2>
        </div>

        {/* Actions */}
        <div className="mt-5 space-y-2">
          {linkActions.map((action) => (
            <button
              key={action.type}
              type="button"
              onClick={() => handleAction(action.type)}
              className="
                flex w-full items-center gap-4
                rounded-2xl
                border border-[#7B3F20]/10
                bg-[#FFFDF9]
                px-4 py-3.5
                text-left
                transition-all duration-200
                hover:border-[#C9A66B]/60
                hover:bg-[#F8EFE3]
                active:scale-[0.99]
              "
            >
              <span
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-[#7B3F20]/[0.07]
                  text-[#542A1B]
                "
              >
                <LinkIcon type={action.type} />
              </span>

              <span>
                <span className="block text-sm font-semibold text-[#542A1B]">
                  {action.title}
                </span>

                <span className="block text-xs text-[#806A5D]">
                  {action.description}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LinkMenu