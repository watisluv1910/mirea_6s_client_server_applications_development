import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import {Home} from "./components/Home.tsx";
import {About} from "./components/About.tsx";
import {Topics} from "./components/containers/Topics.tsx";
import {NoMatch} from "./components/NoMatch.tsx";
import "./assets/styles/App.css"
import {TopicsList} from "./components/containers/TopicsList.tsx";
import {Topic} from "./components/Topic.tsx";

export default function App() {
    return (
        <Router>
            <>
                <nav className={"nav_panel"}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/topics">Topics</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/topics" element={<Topics/>}>
                        <Route index element={<TopicsList/>}/>
                        <Route path=":slug" element={<Topic/>}/>
                    </Route>
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </>
        </Router>
    );
}
