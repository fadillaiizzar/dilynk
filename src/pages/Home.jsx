import LinkCard from '../components/LinkCard'
import links from '../data/links'

function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden px-5 py-8 sm:py-10"
      style={{
        background: `
          radial-gradient(
            ellipse 70% 55% at 50% 38%,
            rgba(238, 232, 223, 0.95) 0%,
            rgba(205, 198, 190, 0.78) 32%,
            transparent 72%
          ),
          radial-gradient(
            ellipse 55% 70% at 8% 42%,
            rgba(72, 91, 121, 0.78) 0%,
            rgba(72, 91, 121, 0.34) 42%,
            transparent 76%
          ),
          radial-gradient(
            ellipse 55% 65% at 92% 35%,
            rgba(116, 74, 78, 0.42) 0%,
            rgba(154, 126, 111, 0.22) 38%,
            transparent 74%
          ),
          radial-gradient(
            ellipse 70% 55% at 50% 100%,
            rgba(25, 38, 61, 0.88) 0%,
            rgba(47, 57, 75, 0.68) 42%,
            transparent 78%
          ),
          linear-gradient(
            135deg,
            #5D6879 0%,
            #767B83 32%,
            #85817E 52%,
            #626A78 75%,
            #303B50 100%
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
            'linear-gradient(90deg, #16264A 0%, #7A1F2B 50%, #C9A66B 100%)',
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
              text-[#F8F5EF]
              drop-shadow-[0_1px_5px_rgba(15,23,42,0.28)]
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
                bg-[#16264A]
                shadow-[0_12px_35px_rgba(0,0,0,0.28)]
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
              color: '#FFFDF8',
              textShadow:
                '0 3px 18px rgba(10,18,32,0.38)',
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
              text-[#FFF9ED]
              drop-shadow-[0_2px_6px_rgba(10,18,32,0.65)]
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
                via-[#D6B970]/60
                to-[#E4C98F]
                shadow-[0_0_4px_rgba(214,185,112,0.35)]
              "
            />

            <span
              className="
                h-2
                w-2
                shrink-0
                rotate-45
                border
                border-[#F0D49A]
                bg-[#C9A66B]
                shadow-[0_0_9px_rgba(214,185,112,0.65)]
              "
            />

            <span
              className="
                h-[1.5px]
                flex-1
                bg-gradient-to-l
                from-transparent
                via-[#D6B970]/60
                to-[#E4C98F]
                shadow-[0_0_4px_rgba(214,185,112,0.35)]
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
              text-[#FFF9F1]
              drop-shadow-[0_1px_6px_rgba(10,18,32,0.38)]
              sm:px-0
            "
          >
            Pilih platform pemesanan atau hubungi admin kami di bawah ini.
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
            />
          ))}
        </section>

        {/* Footer */}
        <div className="mt-9 flex justify-center">
          <span
            className="
              rounded-full
              border border-[#E8DCC5]/30
              bg-[#16264A]/20
              px-5 py-2
              text-xs
              font-medium
              tracking-wide
              text-[#EEE8DE]
              shadow-sm
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