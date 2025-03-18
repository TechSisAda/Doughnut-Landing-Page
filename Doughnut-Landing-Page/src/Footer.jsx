export default function Footer(){

    return(
        <div className=" bg-gray-100 mx-auto px-100 pt-40 pb-12 w-[80%] h-dvh">
            <footer className="flex justify-between items-center w-[40%] mx-auto">
                <img src="src/assets/facebook.png" alt="facebook" className="h-5 w-5 cursor-pointer" />
                <img src="src/assets/twitter.png" alt="twitter" className="h-5 w-5 cursor-pointer" />
                <img src="src/assets/youtube.png" alt="youtube"  className="h-5 w-5 cursor-pointer"/>
                <img src="src/assets/instagram.png" alt="instagram"  className="h-5 w-5 cursor-pointer"/>
                <img src="src/assets/pinterest.png" alt="pinterest"  className="h-5 w-5 cursor-pointer"/>
            </footer>
            <p className="text-center pt-6 text-gray-400 ">Copyright &copy; Yummy Donut {new Date().getFullYear()}</p>

        </div>
    )
}