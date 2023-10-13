function App() {
    return (
        <div class={"mb-52"}>
            <div class={"bg-[rgba(240,252,252,255)]"}>
                <div class={"max-w-4xl mx-auto pt-5"}>
                    <div class={"h-screen"}>
                        <Navbar/>
                        <Header/>
                    </div>
                </div>
            </div>

            <div class={"bg-white"}>
                <div id={"content"} class={"max-w-4xl mx-auto pt-16"}>
                    <Content/>
                    <Footer/>
                </div>
            </div>
        </div>
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
                    <a href={"/"} class={"text-[#65c98f]"}>Beranda</a>
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
                <div class={"flex flex-row gap-8"}>
                    <div class={"flex flex-col gap-4"}>
                        <h1 class={"text-4xl font-semibold"}>Keripik Tempe <span
                            class={"text-[#22b15c]"}>Enak</span> dan <span class={"text-[#22b15c]"}>Sehat</span> <span
                            class={"text-[#d99846]"}>Untuk Dinikmati Sehari-hari</span></h1>
                        <p>Keripik tempe yang dibuat dengan bahan-bahan pilihan dan tanpa bahan pengawet. Bagus untuk
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
                                class={"bg-[#32b768] px-8 py-1.5 rounded-md w-fit text-white mt-7"}>
                                Lihat
                            </button>
                            <button
                                onClick={() => {
                                    window.open("https://wa.me/6285738064586?text=Halo%20saya%20mau%20pesan%20keripik%20tempe")
                                }}
                                class={"border border-[#32b768] px-8 py-1.5 rounded-md w-fit text-[#32b768] mt-7"}>
                                Pesan
                            </button>
                        </div>
                    </div>
                    <img class={"h-[300px] w-auto"} src={"/keripik.png"} alt={"logo"}/>
                </div>
            </div>
        </>
    )
}

function Content() {
    return (
        <>
            <div>
                <h1 class={"text-4xl font-semibold mb-4 text-[#d99846]"}>Keripik Tempe</h1>
                <div class={"flex justify-between gap-6"}>
                    <img class={"w-80 h-auto rounded object-cover"} src={"/keripik-tempe.jpg"} alt={"logo"}/>
                    <div>
                        <p class={"text-[#965328]"}>Keripik tempe adalah salah satu camilan khas Indonesia yang terbuat
                            dari tempe yang digoreng hingga renyah. Cemilan ini memiliki cita rasa yang gurih dan lezat,
                            serta kaya akan nutrisi. Keripik tempe juga dapat dijadikan sebagai camilan yang sehat dan
                            bergizi.</p>
                        <br/>
                        <p class={"text-[#965328]"}>Dibuat dengan bahan-bahan pilihan dan tanpa bahan pengawet. Kaya
                            akan nutrisi dan protein. Bagus untuk cemilan sehari-hari.</p>
                        <br/>
                        <p class={"text-[#965328]"}>Keripik tempe dapat disajikan langsung atau ditambahkan dengan saus
                            sambal, saus tomat, atau mayonnaise. Keripik tempe juga dapat dijadikan sebagai topping
                            pizza, salad, atau sandwich.</p>
                        <br/>
                        <p class={"text-[#965328]"}>Keripik tempe adalah camilan yang enak dan bergizi. Cemilan ini
                            dapat dikonsumsi oleh berbagai kalangan, mulai dari anak-anak hingga orang dewasa.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

function Footer() {
    return (
        <>
        </>
    )
}

export default App
