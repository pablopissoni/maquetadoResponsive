import { ContainerCards } from "./components/ContainerCards.jsx";
import { Header } from "./components/Header.jsx";
import { MainArticle } from "./components/MainArticle.jsx";
import { NewContainer } from "./components/NewContainer.jsx";

function App() {
  return (
    <>
      <main className="px-4 pt-6">
        <Header />
        <div className="lg:flex lg:gap-8">
          <MainArticle />
          <NewContainer />
        </div >

        {/* <div className="sm:flex my-5"> */}
          <ContainerCards/>
        {/* </div> */}
      </main>
    </>
  );
}

export default App;
