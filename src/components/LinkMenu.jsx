import LinkIcon from './LinkIcon'
import linkActions from '../data/linkActions'

function LinkMenu({ title, url, icon, onClose }) {

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

    const whatsappUrl =
      `https://wa.me/?text=${encodeURIComponent(message)}`

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    )

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
        fixed
        inset-0
        z-50
        flex
        min-h-screen
        items-center
        justify-center
        bg-black/30
        px-5
        backdrop-blur-[3px]
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          w-full
          max-w-sm
          overflow-hidden
          rounded-[28px]
          border
          border-black/10
          bg-[#FDFCF9]
          p-5
          shadow-2xl
        "
        onClick={(event) => event.stopPropagation()}
      >

        {/* Tombol close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="
            absolute
            right-4
            top-4
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            text-xl
            text-[#77736C]
            transition
            hover:bg-[#F0EEE9]
            hover:text-[#292927]
          "
        >
          ×
        </button>

        {/* Icon / gambar */}
        <div className="flex justify-center pt-3">
          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              overflow-hidden
              rounded-[24px]
              border
              border-black/10
              bg-white
              shadow-sm
            "
          >
            <img
              src={icon}
              alt=""
              className="h-16 w-16 object-contain"
            />
          </div>
        </div>

        {/* Nama */}
        <div className="mt-4 text-center">
          <h2 className="text-base font-semibold text-[#292927]">
            {title}
          </h2>
        </div>

        {/* Action */}
        <div className="mt-5 space-y-2">
          {linkActions.map((action) => (
            <button
              key={action.type}
              type="button"
              onClick={() => handleAction(action.type)}
              className="
                flex
                w-full
                items-center
                gap-4
                rounded-2xl
                border
                border-[#DEDAD3]
                bg-white
                px-4
                py-3.5
                text-left
                transition-all
                duration-200
                hover:border-[#B9B3A8]
                hover:bg-[#F4F2EF]
                active:scale-[0.99]
              "
            >
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F0EEE9]
                  text-[#292927]
                "
              >
                <LinkIcon type={action.type} />
              </span>

              <span>
                <span className="block text-sm font-medium text-[#292927]">
                  {action.title}
                </span>

                <span className="block text-xs text-[#8A867F]">
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