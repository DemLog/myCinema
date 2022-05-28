import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import bridge from "@vkontakte/vk-bridge";

import App from "./App";

bridge.send("VKWebAppInit", {});
ReactDOM.render(<App/>, document.getElementById('root'));

reportWebVitals();
