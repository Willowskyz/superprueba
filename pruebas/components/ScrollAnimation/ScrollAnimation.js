import { useState, useEffect, useRef } from "react"

const ScrollAnimation = () => {
    const [background, setBackground] = useState('pink')

    const divRef = useRef()

    useEffect(() => {
        const handleScroll = (e) => {
            console.log(e)
            const div = divRef.current

            const { y } = div.getBoundingClientRect()

            const backgroundColor = y <= 0 ? 'orange' : 'pink'
            setBackground(backgroundColor)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            <div ref={divRef} style={{ height: '180vh', background }}>
                <h1 onClick={(e) => console.log(e)}>Scrollear para cambiar el color de fondo</h1>
            </div>
        </div>
    )
}

export default ScrollAnimation