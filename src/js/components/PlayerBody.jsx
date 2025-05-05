import React, { useEffect, useRef, useState } from "react";

const PlayerBody = () => {
    const [lista, setLista] = useState([])
    const activeSong = useRef()
    async function listaCancion() {

        try {
            const response = await fetch('https://playground.4geeks.com/sound/songs');
            // console.log(response)

            const data = await response.json()
            // console.log(data.songs)
            setLista(data.songs)

        } catch (error) {
            console.log(error)
        }


    }

    function reproducir(urlCancion) {
        let rutaBase = 'https://playground.4geeks.com'
        activeSong.current.src = rutaBase.concat(urlCancion)
        activeSong.current.play()

    }

    useEffect(() => {
        listaCancion()
    }, []) // Se ejecuta una sola vez

    return (

        <div className="ListaCancion">
            <div className="list-group">
                {lista.map((cancion, id) => (
                    <button key={id} type="button" onClick={() => reproducir(cancion.url)} value={cancion} className="list-group-item list-group-item-action" aria-current="true">
                        {cancion.name}
                    </button>

                ))}
            </div>
            <div className="ElpotifayButtons">
                <button id="play">
                    <audio controls ref={activeSong}>
                        <source src={activeSong} type="audio/mp3" />
                    </audio>
                </button>
            </div>

        </div>


    )

}

/*

const PlayerBody = () => { 

    const [songs] = useState([
        {
            id: 1,
            name: "Mario Castle",
            url: "/sound/files/mario/songs/castle.mp3",
            category: "category"
        },
        {
            id: 2,
            name: "Mario Star",
            url: "/sound/files/mario/songs/hurry-starman.mp3",
            category: "category"
        },
        {
            id: 3,
            name: "Mario Overworld",
            url: "/sound/files/mario/songs/overworld.mp3",
            category: "category"
        },
        {
            id: 4,
            name: "Mario Stage 1",
            url: "/sound/files/mario/songs/stage1.mp3",
            category: "category"
        },
        {
            id: 5,
            name: "Mario Stage 2",
            url: "/sound/files/mario/songs/stage2.mp3",
            category: "category"
        }
    ])

    return (

        <div className="ListaCancion">

            
        </div>

    )
};

*/





export default PlayerBody;