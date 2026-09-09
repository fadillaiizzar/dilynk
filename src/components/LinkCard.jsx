import { useState } from 'react'
import LinkMenu from './LinkMenu'

function LinkCard({ title, url, icon }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="relative w-full">

        {/* Link utama */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative
            flex
            h-[68px]
            w-full
            items-center
            rounded-full
            border
            border-[#DEDAD3]
            bg-white
            px-4
            shadow-sm
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:border-[#B9B3A8]
            hover:shadow-md
            active:scale-[0.985]
          "
        >
          {/* Icon */}
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-black/10
              bg-white
            "
          >
            <img
              src={icon}
              alt=""
              className="h-10 w-10 object-contain"
            />
          </div>

          {/* Nama */}
          <span
            className="
              absolute
              left-1/2
              -translate-x-1/2
              text-sm
              font-medium
              text-[#292927]
            "
          >
            {title}
          </span>
        </a>

        {/* Titik tiga */}
        <button
          type="button"
          aria-label={`Menu ${title}`}
          aria-haspopup="dialog"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
          className="
            absolute
            right-3
            top-1/2
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            text-[#77736C]
            transition
            hover:bg-[#F4F2EF]
            hover:text-[#292927]
          "
        >
          <span className="text-xl leading-none">
            ⋮
          </span>
        </button>

      </div>

      {/* Popup */}
      {isMenuOpen && (
        <LinkMenu
          title={title}
          url={url}
          icon={icon}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
    </>
  )
}

export default LinkCard