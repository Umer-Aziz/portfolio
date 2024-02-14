import React from 'react'

const page = () => {
  return (
   <>
   <main>
    <div className='padd-x padd-y max-width'>
        <section className='grid grid-cols-2'>
            <div>
                <div className='text-primary flex items-center gap-3'>
                    <div className='w-6 h-0.5 border-t-2 border-primary'></div>
                    <span>Say hello 👋</span>
                </div>
                <h1 className='text-5xl mt-3 mb-4'>Let's Work <br />Together.</h1>
                <p className='max-w-64 text-sm'>Lorem ipsum dolor sit amet constetur elit. Perspiciatis ex deserunt corrupti.</p>
            </div>
            <div></div>
        </section>
        <section>
            <div></div>
            <div></div>
        </section>
    </div>
   </main>
   </>
  )
}

export default page