import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import YoutubeVideo from "./components/YoutubeVideo/YoutubeVideo";
import { Route, Routes } from "react-router-dom";
import Iphone from "./components/Iphone";
import Wrapsec from "./components/wrapsection/Wrapsec";
import Shared from "./components/sharedlayout/Shared";
import Mac from "./components/Mac";
import Product from "./components/Product";
import Ipad from "./components/Ipad/Ipad";
import Watch from "./components/Watch/Watch";
import TV from "./components/Tv/Tv";
import Music from "./components/Music/Music";
import Support from "./components/Support/Support";
import Search from "./components/Search/Search";
import Cart from "./components/cart/cart";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route path="/" element={<Wrapsec />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="ipad"element ={<Ipad/>}/>
          <Route path="watch"element={<Watch/>}/>
          <Route path="tv" element={<TV/>}/>
          <Route path="music"element={<Music/>}/>
          <Route path="support"element={<Support/>}/>
          <Route path="search"element={<Search/>}/>
          <Route path="cart"element={<Cart/>}/>
          <Route path="iphone/:id" element={<Product />} />
          <Route path="youtube" element={<YoutubeVideo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
