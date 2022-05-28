import React, {useState} from "react";

import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";

import Main from "./Main/main";
import Auth from "./Auth/auth"
import {View} from "./Components/View";

import {observer} from "mobx-react-lite";
import storeView from "./Store/storeView";

const App = observer((props) => {
    const [themeUI, setThemeUI] = useState(createTheme({palette: {mode: 'light',},})); // переезд

    return (
        <ThemeProvider theme={themeUI}>
            <CssBaseline>
                <View activeView={storeView.activeView.app}>
                    <Main id="main"/>
                    <Auth id="auth"/>
                </View>
            </CssBaseline>
        </ThemeProvider>
    );
});

export default App;