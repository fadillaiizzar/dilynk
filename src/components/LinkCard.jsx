import { useState } from 'react'
import LinkMenu from './LinkMenu'

function LinkCard({ title, subtitle, url, icon }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <div className="relative w-full">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            flex min-h-[68px] w-full items-center gap-3
            rounded-full
            border border-white/70
            bg-[#F8F6F1]/95
            py-2.5 pl-3 pr-14
            shadow-[0_8px_24px_rgba(15,23,42,0.16)]
            backdrop-blur-md
            transition-all duration-200 ease-out
            hover:-translate-y-1
            hover:border-[#D1B878]/80
            hover:bg-[#FFFDF9]
            hover:shadow-[0_14px_32px_rgba(15,23,42,0.22)]
            active:translate-y-0
            active:scale-[0.985]
          "
        >
          {/* Icon */}
          <div
            className="
              flex h-11 w-11 shrink-0 items-center justify-center
              overflow-hidden rounded-full
              border border-[#16264A]/10
              bg-white
              shadow-[0_3px_10px_rgba(15,23,42,0.08)]
              transition-all duration-200
              group-hover:border-[#C9A66B]/40
              group-hover:shadow-[0_4px_12px_rgba(201,166,107,0.16)]
            "
          >
            <img
              src={icon}
              alt=""
              className="h-9 w-9 object-contain"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <span className="min-w-0 flex-1 text-center">
            <span
              className="
                block truncate
                text-[15px]
                font-semibold
                text-[#182238]
                transition-colors duration-200
                group-hover:text-[#16264A]
              "
            >
              {title}
            </span>

            {subtitle && (
              <span
                className="
                  mt-0.5 block truncate
                  text-[12px]
                  font-medium
                  text-[#737680]
                "
              >
                {subtitle}
              </span>
            )}
          </span>

          {/* Subtle right highlight */}
          <span
            className="
              pointer-events-none
              absolute inset-y-2 right-12
              w-px
              bg-gradient-to-b
              from-transparent
              via-[#D1B878]/25
              to-transparent
              opacity-0
              transition-opacity duration-200
              group-hover:opacity-100
            "
          />
        </a>

        {/* Menu */}
        <button
          type="button"
          aria-label={`Menu ${title}`}
          aria-haspopup="dialog"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
          className="
            absolute right-2.5 top-1/2
            flex h-9 w-9 -translate-y-1/2
            items-center justify-center
            rounded-full
            text-[#596174]
            transition-all duration-200
            hover:bg-[#16264A]/[0.06]
            hover:text-[#16264A]
            active:scale-95
          "
        >
          <span className="text-xl font-semibold leading-none">
            ⋮
          </span>
        </button>
      </div>

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