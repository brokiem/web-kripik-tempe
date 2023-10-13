import keripikImage from "./assets/keripik.png";

function App() {
    return (
      <>
          <div class={"bg-[#f8ca70]/5"}>
              <div class={"max-w-5xl mx-auto pt-5"}>
                    <div class={"h-screen"}>
                        <Navbar/>
                        <Header/>
                    </div>
                </div>
            </div>

            <div class={"bg-white"}>
                <div id={"content"} class={"flex flex-col items-center justify-center max-w-5xl mx-auto h-screen"}>
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
                         src={"https://cdn.discordapp.com/attachments/1108708719178567750/1162226015431561267/pkwu_punya_Yanin_1.png?ex=653b2a53&is=6528b553&hm=f59985e7d321e9c491467e2cd41cc45cace698b1e25592debba0b69f05ac7fe5"}
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
                <div class={"flex flex-row gap-48"}>
                    <div class={"flex flex-col gap-4"}>
                        <h1 class={"text-5xl font-semibold text-[rgba(60,60,67)]"}>Keripik Tempe <span
                          class={"text-[#d99846]"}>Enak</span> dan <span class={"text-[#d99846]"}>Sehat</span></h1>
                        <p class={"text-[#67676c] text-lg"}>Keripik tempe yang dibuat dengan bahan-bahan pilihan dan
                            tanpa bahan pengawet. Cocok untuk
                            cemilan sehari-hari.</p>

                        <div class={"flex gap-4"}>
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
                  <img class={"h-[300px] w-auto"} src={keripikImage}
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
                <h1 class={"text-3xl font-semibold text-center text-[#d99846]"}>Manfaat Keripik Tempe</h1>
                <p class={"text-center"}>Keripik tempe sendiri memiliki segudang manfaat dan khasiat, antara lain</p>
            </div>

            <div class={"grid grid-cols-3 gap-4"}>
                {/*    Card with usefulness of keripik tempe */}
                <Card title={"Tinggi Protein"}
                      description={"Keripik tempe mengandung protein yang tinggi menjadikan keripik tempe sebagai alternatif camilan yang lebih sehat."}/>
                <Card title={"Rendah Lemak"}
                      description={"Keripik tempe mengandung lemak yang rendah sehingga cocok untuk camilan sehari-hari."}/>
                <Card title={"Vitamin dan Mineral"}
                      description={"Vitamin B1, Vitamin B2, Vitamin B3, Vitamin B6, Vitamin E, kalsium, zat besi, dan fosfor, semua didalam keripik tempe."}/>
                <Card title={"Sumber Serat"}
                      description={"Keripik tempe juga merupakan sumber serat yang baik. Serat dibutuhkan oleh tubuh untuk menjaga kesehatan pencernaan."}/>
                <Card title={"Enak"}
                      description={"Keripik tempe dibuat dengan bahan-bahan pilihan dan tanpa bahan pengawet sehingga menjadikan keripik tempe enak"}/>
                <Card title={"Sehat"}
                      description={"Keripik tempe dibuat dengan bahan-bahan pilihan dan tanpa bahan pengawet sehingga menjadikan keripik tempe sehat"}/>
            </div>
        </>
    )
}

function Card({title, description}: { title: string, description: string }) {
    return (
      <>
          <div class={"bg-[#f6f6f7] rounded-md p-4"}>
              <h1 class={"text-2xl font-semibold text-[#3c3c43]"}>{title}</h1>
              <p class={"text-[#65656a] mt-3"}>{description}</p>
          </div>
      </>
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
