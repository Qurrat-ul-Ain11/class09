function Navbar(){
    return(
        <nav className="flex justify-around items-center bg-sky-900 h-20">
            <div className="bg-cyan-500 h-10 w-10"></div>
            <div className="bg-orange-400 h-10 w-20">
                
            </div>
            <div>
                <ul className="flex">
                    <li className="bg-green-200 h-10 w-10"></li>
                    <li className="bg-green-400 h-10 w-10"></li>
                    <li className="bg-green-600 h-10 w-10"></li>
                    <li className="bg-green-800 h-10 w-10"></li>
                    <li className="bg-green-950 h-10 w-10"></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar