import Logo from '../../Component/Logo';
import Footer from '../../Component/Footer';
import SideBar from '../../Component/SideBar';
import ContentList from '../../Component/ContentList';
import HeaderContent from '../../Component/HeaderContent';

function App() {
  return (
    <div className="App">
      <SideBar />
      <div className="container">
        <div className="wrapper">
          <Logo />
          <HeaderContent />
          <ContentList />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
