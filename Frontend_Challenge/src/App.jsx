import Main from "./Components/Main"
import Sidebar from "./Components/Sidebar"

function App() {

  return (
    <>
      <div className="3xl:container !px-0 m-auto scrollbars relative">
        <div className="flex">
          <Sidebar />
          <Main />
        </div>
      </div>
    </>
  )
}

export default App
