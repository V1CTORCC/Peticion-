import { useState } from "react";
import JSConfetti from 'js-confetti'
function App() {


  const jsConfetti = new JSConfetti()
  const [randomValor, setRandomValor] = useState({})

  const [imagenCargada, setImagenCargada] = useState(false);
  const [agrandar, setAgrandar] = useState(45)


  const [valueSi, setValueSi] = useState(false)

  let random = [{
    id: 1,
    description: "Ya pues :(",
    img: "https://64.media.tumblr.com/7983c31f2c18fe5f24e7d4b2dc559900/074712d719c4b8e6-8c/s400x600/3837f1fe1d4b6c3b4dfb3cd9389e96e00b841615.gif"
  },
  {
    id: 1,
    description: "Tu sabes que quieres :)",
    img: "https://i.pinimg.com/originals/a9/fb/d4/a9fbd437bf2255bf60b6bff1fabf4bed.gif"
  }
    ,
  {
    id: 2,
    description: "AmorrrrRRRRRRRR :c",
    img: "https://graziamagazine.com/es/wp-content/uploads/sites/12/2016/02/16162009/047_tired_cat_gifs.gif"
  },
  {
    id: 3,
    description: "Te hare tu amborgesita :b",
    img: "https://i.gifer.com/ICZZ.gif"
  },
  {
    id: 4,
    description: "El si es mas grande :b",
    img: "https://img.huffingtonpost.es/uploads/2023/01/13/63c09f8f5dd81.gif"
  },
  {
    id: 5,
    description: "Yo no me rindo amor 0.o",
    img: "https://i.gifer.com/9Wh4.gif"
  },
  {
    id: 6,
    description: "Yo se que tienes ganasssss",
    img: "https://i.gifer.com/YyYj.gif"
  },
  {
    id: 7,
    description: "No voy a parar 0.o",
    img: "https://i.gifer.com/Sbj6.gif"
  },
  {
    id: 8,
    description: "Yo se que quieres que estemos juntos amorrrrRRRR",
    img: "https://i.gifer.com/WFvj.gif"
  },
  {
    id: 9,
    description: "Ya di que siiiiiiiiiii",
    img: "https://i.gifer.com/5TmI.gif"
  },
  {
    id: 10,
    description: "Te va a gustarrrRRRRRR",
    img: "https://i.gifer.com/9Wh4.gif"
  }]

  const randomResponse = () => {
    let index = Math.floor(Math.random() * 11);
    console.log(random[index])
    if (agrandar <= 500) {
      setAgrandar(agrandar + 10)
    }
    setRandomValor(random[index]);
  }


  const handleImageLoad = () => {
    setImagenCargada(true);
  }


  return (
    <main id="canvas" className="fondo w-screen h-screen bg-no-repeat bg-cover flex items-center justify-center bg-center ">
      {
        !valueSi ? (
          <div className="p-5">
            <h1 className="text-white font-bold text-5xl text-center">¿Quieres ser mi San Valentin?</h1>
            <img src={Object.keys(randomValor).length === 0 ?
              "https://i.pinimg.com/originals/db/aa/c1/dbaac13f6278b91a15e480752b8a7242.gif" : randomValor.img} alt="San Valentin" className="mx-auto" width={400} height={400} />
            <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
              <button onClick={() => {
                setValueSi(true)

                jsConfetti.addConfetti({
                  emojis: ['🌹', '💐', '❤️', '💞'],
                  emojiSize: 70,
                  confettiNumber: 80,
                })

              }} className={`bg-green-500 text-white font-bold p-2 rounded-md text-xl h-${agrandar}`} style={{ height: agrandar }}>
                Si
              </button>
              <button
                className="bg-red-500 text-white font-bold p-2 rounded-md text-xl"
                onClick={randomResponse}
                disabled={imagenCargada} // Deshabilita el botón si la imagen no se ha cargado
              >
                {Object.keys(randomValor).length === 0 ? "No" : randomValor.description}
                <span hidden>{document.title = Object.keys(randomValor).length === 0 ? "¿Quieres ser mi San Valentin?" : randomValor.description}</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col space-y-10">
            <h1 className="text-4xl text-white font-bold">Sabia que dirias que si ❤️!</h1>
            <img src="https://i.pinimg.com/originals/9b/dc/c6/9bdcc6206c1d36a37149d31108c6bb41.gif" alt="" className="mx-auto" />
            <span hidden>{document.title = 'Ya sabia jejeje, Te amoooooooooo mi amorrrrrrrrrrRRRRRRR💞'}</span>
          </div>
        )
      }
    </main>
  )
}

export default App
