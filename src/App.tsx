function App() {
  return (
    <>
      <div class={"bg-[#f8ca70]/5"}>
        <div class={"max-w-5xl mx-5 lg:mx-auto pt-5"}>
          <div class={"min-h-screen"}>
            <Navbar/>
            <Header/>
          </div>
        </div>
      </div>

      <div class={"bg-white"}>
        <div id={"content"}
             class={"flex flex-col items-center justify-center max-w-5xl min-h-screen mx-5 lg:mx-auto my-16 lg:my-0"}>
          <Content/>
        </div>

        <Footer/>
      </div>
    </>
  )
}

function Navbar() {
  return (
    <>
      <nav class={"flex flex-row justify-between items-center"}>
        <div id={"logo"}>
          <img class={"w-[60px]"}
               src={"logo.png"}
               alt={"logo"}/>
        </div>
        <div id={"nav"} class={"flex gap-6"}>
          <a href={"/"} class={"text-[#d99846]"}>Beranda</a>
          <a href={"https://wa.me/6285738064586?text=Halo%20saya%20mau%20pesan%20keripik%20tempe"}
             target={"_blank"} class={"text-black"}>Pesan</a>
          <a href={"https://wa.me/6285738064586?text=Halo"} target={"_blank"} class={"text-black"}>Kontak</a>
        </div>
      </nav>
    </>
  )
}

function Header() {
  return (
    <>
      <div id={"header"} class={"flex flex-col justify-center items-center mt-28"}>
        <div class={"md:flex flex-row items-center justify-center content-center gap-36"}>
          <div class={"flex flex-col gap-5"}>
            <h1 class={"text-5xl font-semibold text-[rgba(30,30,37)] drop-shadow-md"}>Keripik Tempe <span
              class={"text-[#d99846] text-6xl underline"}>Enak</span> dan <span
              class={"text-[#d99846] text-6xl underline"}>Sehat</span></h1>
            <p class={"text-[#67676c] text-lg drop-shadow-sm"}>Keripik tempe yang dibuat dengan bahan-bahan pilihan dan
              tanpa bahan pengawet. Cocok untuk
              cemilan sehari-hari.</p>

            <div class={"flex gap-3"}>
              <button
                onClick={() => {
                  // scroll to content section
                  const content = document.getElementById("content")
                  if (content) {
                    content.scrollIntoView({behavior: "smooth"})
                  }
                }}
                class={"bg-[#d99846] px-8 py-1.5 rounded-md w-fit text-white mt-7"}>
                Lihat
              </button>
              <button
                onClick={() => {
                  window.open("https://wa.me/6285738064586?text=Halo%20saya%20mau%20pesan%20keripik%20tempe")
                }}
                class={"border border-[#d99846] px-8 py-1.5 rounded-md w-fit text-[#d99846] mt-7"}>
                Pesan
              </button>
            </div>
          </div>
          <img class={"h-[350px] w-auto hidden lg:block"} src={"keripik.png"}
               style={"filter: drop-shadow(0 0 70px #f5ca7e);"} alt={"logo"}/>
        </div>
      </div>
    </>
  )
}

function Content() {
  return (
    <>
      <div class={"mb-8"}>
        <h1 class={"text-4xl font-semibold text-center text-[#d99846] tracking-wider"}>Keripik Tempe</h1>
        <p class={"text-center"}>Variasi rasa keripik tempe yang kami jual</p>
      </div>

      <div class={"grid grid-cols-1 lg:grid-cols-3 gap-4"}>
        {/*    Card with usefulness of keripik tempe */}
        <Card title={"Original"}
              description={"Keripik tempe rasa original yang dibuat dengan bahan-bahan pilihan dan tanpa bahan pengawet."}/>
        <Card title={"Pedas Manis"}
              description={"Keripik tempe rasa pedas manis yang dibuat dengan bahan-bahan pilihan dan tanpa bahan pengawet."}/>
        <Card title={"Balado"}
              description={"Keripik tempe rasa balado yang dibuat dengan bahan-bahan pilihan dan tanpa bahan pengawet."}/>
      </div>
    </>
  )
}

function Card({title, description, price}: { title: string, description: string, price?: number }) {
  return (
    <div class={"flex flex-col"}>
      <div>
        <img class={"max-h-[100px] w-full object-cover rounded-t-md"}
             src={"keripik-tempe.jpg"}
             alt={"keripik"}/>
      </div>
      <div class={"bg-[#f6f6f7] rounded-b-md p-4"}>
        <h1 class={"text-2xl font-semibold text-[#3c3c43]"}>{title}</h1>
        <p class={"text-[#65656a] mt-3"}>{description}</p>

        <div class={"flex flex-row justify-between items-center mt-5 my-auto"}>
          <div class={"flex flex-col"}>
            <p class={"text-[#65656a]"}>Harga</p>
            <p class={"text-[#65656a]"}>{price ? `Rp${price}` : "Rp10.000"}</p>
          </div>

          <button
            onClick={() => {
              window.open("https://wa.me/6285738064586?text=Halo%20saya%20mau%20pesan%20keripik%20tempe")
            }}
            class={"border border-[#d99846] px-8 py-1.5 rounded-md w-fit text-[#d99846]"}>
            Pesan
          </button>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <>
      <hr/>

      <div class={"flex flex-col items-center justify-center h-32 text-center"}>
        <p>Website ini dibuat dengan sepenuh hati ❤</p>
        <p>Copyright © 2023 - brokiem & Peserta Kelompok 69</p>
      </div>
    </>
  )
}

export default App
