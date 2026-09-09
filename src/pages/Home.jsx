import LinkCard from '../components/LinkCard'
import links from '../data/links'

function Home() {
  return (
    <main className="min-h-screen bg-[#F4F2EF] px-5 py-10 text-[#242424]">
      <div className="mx-auto w-full max-w-xl">

        {/* Header */}
        <header className="text-center">

          {/* Jargon */}
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#77736C]">
            Jargon usaha kamu di sini
          </p>

          {/* Logo */}
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-[#292927] shadow-md">
            <span className="text-3xl font-semibold text-white">
              D
            </span>
          </div>

          {/* Nama usaha */}
          <h1 className="text-2xl font-semibold tracking-tight">
            Dilynk
          </h1>

          {/* Deskripsi */}
          <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-[#77736C]">
            Semua informasi dan link penting dalam satu tempat.
          </p>

        </header>

        {/* Links */}
        <section className="mt-9 space-y-4">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              title={link.title}
              url={link.url}
              icon={link.icon}
            />
          ))}
        </section>

        {/* Footer */}
        <div className="mt-8 flex justify-center">
          <span
            className="
              rounded-full
              border
              border-[#292927]/10
              bg-[#292927]/5
              px-5
              py-2
              text-xs
              font-medium
              tracking-wide
              text-[#292927]/70
              backdrop-blur-sm
            "
          >
            Dilynk
          </span>
        </div>

      </div>
    </main>
  )
}

export default Home