import Animation from "../Animation/animation";

const Header = () => {

    return (
        <div className="header-wrapper flex justify-center mt-20 mx-20" id="about">
            <div className="w-full flex gap-4 items-center">
                <div className="w-4/6 m-6">
                    <h1 className="flex justify-center text-5xl text-decoration-primary" >Mateusz Stolarczyk</h1>
                    <h2 className="flex justify-center text-2xl bg-gradient-to-r from-blue-700 to-green-300 text-transparent bg-clip-text">Web Developer & Software engineer</h2>
                    <div className="flex justify-center mx-20 text-lg">I'm 23 and passionate about programming and continuous learning. I first dabbled in HTML and a bit of CSS at 15, just for fun. Now, I'm expanding my skills by building more complex websites with various technologies. </div>
                </div>
                <div className="w-2/6 m-8"><Animation /></div>
            </div>
        </div>
    )
}
export default Header;