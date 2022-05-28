import "./style/main.css";

import {View} from "../Components/View";
import Films from "./Films/films";

import {observer} from "mobx-react-lite";
import storeTabs from "../Store/storeTabs";
import storeView from "../Store/storeView";
import {TabBar} from "../Components/TabBar";
import React from "react";
import {Toolbar} from "@mui/material";
import Hells from "./Hells/Hells";
import Tickets from "./Tickets/Tickets";


const Main = observer((props) => {

    return (
        <View activeView={storeView.activeView.main}>
            <View id="main" activeView={storeTabs.activeTab}>
                <Films id="films"/>
                <Hells id="hells"/>
                <Tickets id="tickets"/>
            </View>
            <Toolbar/>
            <TabBar/>
        </View>
    );
});

export default Main;