function Body(){
    return(
        <main>
            <div>
            <h1 className="bg-red-400 h-44 my-3"></h1>
            </div>

            {/* Cards */}
            <div>
                <ul className="flex bg-red-200 h-40 my-2">
                    <li className="bg-fuchsia-700 w-4/12 h-32 m-2 shadow-slate-600 shadow-lg rounded-lg"></li>
                    <li className="bg-fuchsia-800 w-4/12 h-32 m-2 shadow-slate-600 shadow-lg rounded-lg"></li>
                    <li className="bg-fuchsia-900 w-4/12 h-32 m-2 shadow-slate-600 shadow-lg rounded-lg"></li>

                </ul>
            </div>
        </main>
    )
};

export default Body