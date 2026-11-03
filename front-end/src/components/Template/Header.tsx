function Header() {
  return (
    <section className="relative overflow-hidden border-b border-[#F6E8E9] bg-[#FFF9F6]">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-[#F8DDE2]/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-[#FCE9E5]/70 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1600px] px-8 py-16 text-center sm:px-10 md:px-12 md:py-20 lg:px-16 xl:px-20 2xl:px-24">
        <div className="inline-flex items-center gap-3">
          <span className="h-px w-8 bg-[#E9A5B2]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9798B]">
            Our Collection
          </span>
          <span className="h-px w-8 bg-[#E9A5B2]" />
        </div>

        <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-[#72545B] sm:text-5xl md:text-6xl">
          Find Your Perfect
          <span className="block italic text-[#D98E9E]">
            Wedding Invitation.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#806D70] sm:text-base sm:leading-8">
          Temukan desain undangan pernikahan digital yang sesuai dengan
          kepribadian dan cerita cintamu. Pilih template favorit dan
          ciptakan undangan yang berkesan untuk hari istimewamu.
        </p>
      </div>
    </section>
  );
}

export default Header;