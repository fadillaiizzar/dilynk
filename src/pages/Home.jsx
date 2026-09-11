import LinkCard from '../components/LinkCard'
import links from '../data/links'

function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden px-5 py-8 sm:py-10"
      style={{
      background: `
        radial-gradient(
          ellipse 72% 58% at 50% 30%,
          rgba(255, 239, 214, 0.94) 0%,
          rgba(255, 205, 159, 0.82) 34%,
          transparent 72%
        ),
        radial-gradient(
          ellipse 62% 68% at 2% 42%,
          rgba(246, 130, 61, 0.76) 0%,
          rgba(250, 163, 89, 0.50) 44%,
          transparent 77%
        ),
        radial-gradient(
          ellipse 60% 65% at 98% 35%,
          rgba(235, 111, 53, 0.58) 0%,
          rgba(249, 156, 91, 0.32) 43%,
          transparent 76%
        ),
        radial-gradient(
          ellipse 72% 54% at 50% 100%,
          rgba(116, 58, 39, 0.78) 0%,
          rgba(185, 86, 45, 0.55) 44%,
          transparent 80%
        ),
        linear-gradient(
          135deg,
          #F07A3A 0%,
          #F69A57 28%,
          #FAC17D 52%,
          #F29A58 75%,
          #B85B38 100%
        )
      `,
      fontFamily: "'DM Sans', sans-serif",
    }}
    >
      {/* Brand strip */}
      <div
        className="fixed inset-x-0 top-0 z-10 h-[3px]"
        style={{
          background:
            'linear-gradient(90deg, #542A1B 0%, #8A4B35 50%, #C9A66B 100%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-xl">

        {/* Header */}
        <header className="text-center">

          {/* Jargon */}
          <p
            className="
              mb-4
              text-[13px]
              font-semibold
              tracking-[0.04em]
              text-[#45261B]
            "
          >
            Sewa Apartmen & Hotel Harian di Yogyakarta
          </p>

          {/* Logo */}
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
            <div
              className="
                flex h-full w-full items-center justify-center
                overflow-hidden rounded-full
                border border-[#D6B970]/80
                bg-[#542A1B]
                shadow-[0_12px_35px_rgba(70,30,10,0.25)]
              "
            >
              <img
                src="/icons/logo luxuryroom.jpeg"
                alt="Logo Luxury Room Apartment Jogja"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Nama usaha */}
          <h1
            className="
              inline-block
              text-[2.15rem]
              font-semibold
              leading-tight
              tracking-[-0.025em]
              sm:text-[2.65rem]
            "
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: '#402217',
              textShadow: '0 2px 9px rgba(255,248,232,0.50)',
            }}
          >
            Luxury Room
          </h1>

          {/* Subjudul */}
          <p
            className="
              mt-1
              text-[13px]
              font-bold
              uppercase
              tracking-[0.24em]
              text-[#542B1E]
            "
          >
            Apartment Jogja
          </p>

          {/* Divider */}
          <div
            className="
              mx-auto
              mt-3
              flex
              w-48
              items-center
              justify-center
              gap-2.5
              sm:w-56
            "
            aria-hidden="true"
          >
            <span
              className="
                h-[1.5px]
                flex-1
                bg-gradient-to-r
                from-transparent
                via-[#985A3B]/60
                to-[#74402A]
              "
            />

            <span
              className="
                h-2
                w-2
                shrink-0
                rotate-45
                border
                border-[#8B542B]
                bg-[#C9A66B]
                shadow-[0_0_8px_rgba(255,220,155,0.55)]
              "
            />

            <span
              className="
                h-[1.5px]
                flex-1
                bg-gradient-to-l
                from-transparent
                via-[#985A3B]/60
                to-[#74402A]
              "
            />
          </div>

          {/* Deskripsi */}
          <p
            className="
              mx-auto
              mt-4
              max-w-md
              px-2
              text-[14px]
              font-medium
              leading-6
              text-[#45261B]
              sm:px-0
            "
          >
            Pilih Platform Pemesanan atau Hubungi Admin Kami di Bawah Ini.
          </p>
        </header>

        {/* Links */}
        <section className="mt-8 space-y-3">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              title={link.title}
              subtitle={link.subtitle}
              url={link.url}
              icon={link.icon}
              menuIcon={link.menuIcon}
            />
          ))}
        </section>

        {/* Footer */}
        <div className="mt-9 flex justify-center">
          <span
            className="
              rounded-full
              border border-[#F1D5B5]
              bg-[#FFF5E8]/95
              px-5 py-2
              text-xs
              font-semibold
              tracking-wide
              text-[#542A1B]
              shadow-[0_5px_18px_rgba(70,30,10,0.16)]
              backdrop-blur-md
            "
          >
            Luxury Room · Apartment Jogja
          </span>
        </div>

      </div>
    </main>
  )
}

export default Home