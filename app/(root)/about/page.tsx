import React from 'react'

function AboutPage() {
  return (
    <section className="py-16 px-4 sm:px-8">
      <h1 className='mt-10 flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl text-gray-700'>
        We Love

        <span className='bg-accent py-2 px-4 rounded-lg tracking-widest text-white'>
          Cozy Spaces
        </span>
      </h1>

      <p className='mt-6 text-lg max-w-2xl mx-auto text-center text-gray-600'>
        At GizmoNest, we believe your home should be a sanctuary. From soft pastel chairs to charming décor, every piece is curated to bring calm, style, and Instagram-worthy vibes to your living space.
      </p>
    </section>
  )
}

export default AboutPage