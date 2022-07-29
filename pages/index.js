import { useState } from 'react'
export default function Home() {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="h-screen grid grid-cols-1">
        <div className="place-self-center">
          <div className="text-3xl py-6">Introducing...</div>
          <div className="text-5xl md:text-7xl lg:text-8xl font-bold text-zinc-600">SAGreenXYZ</div>
          <div className="text-center py-6">a.k.a. Scott A. Green</div>
          <div class="text-center py-10">
            <button onClick={() => setShow(!show)} class="shadow-2xl hover:bg-zinc-700 text-zinc-700 font-semibold hover:text-white py-2 px-4 border border-zinc-700 hover:border-transparent rounded">
              Start
            </button>
            <div className={show ? "visible py-6 text-5xl text-orange-500" : "invisible py-6 text-5xl"}>
              Not Yet!...  We're not quite ready.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
