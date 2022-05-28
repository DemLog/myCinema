import React, {useState} from "react";

import {CssBaseline, Toolbar} from "@mui/material";

import {View} from "../../Components/View";
import {Header} from "../../Components/Header";

import {observer} from "mobx-react-lite";
import {ScreenSpinner} from "../../Components/ScreenSpinner";
import storeView from "../../Store/storeView";
import {TabBar} from "../../Components/TabBar";
import FilmsList from "./filmsList";

const Films = observer((props) => {
    const [spinner, openSpinner] = useState(false);

    return (
        <React.Fragment>
            <CssBaseline/>
            <Header title="Фильмы"/>
            <Toolbar/>
            <View activeView={storeView.activeView.films}>
                <FilmsList id="list"/>
            </View>
        </React.Fragment>
    );
});

export default Films;