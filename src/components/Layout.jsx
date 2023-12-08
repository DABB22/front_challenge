import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="mt-10 bg-teal-400 rounded-lg">
        <div>
            <h1 className=" font-bold uppercase text-center text-6xl sm:p-3 text-indigo-900">Trivia Challenge!</h1>
        </div>

        <main className="text-center">
            <Outlet/>
        </main>
    </div>
  )
}

export default Layout