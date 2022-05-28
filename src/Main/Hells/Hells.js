import React, {useEffect} from "react";

import {
    Box,
    Container,
    CssBaseline,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography
} from "@mui/material";

import {Header} from "../../Components/Header";

import {observer} from "mobx-react-lite";

import storeHalls from "../../Store/storeHells";
import storeView from "../../Store/storeView";

const Hells = observer((props) => {

    const displayHalls = () => {
        if (storeHalls.listHalls.length === 0) {
            return (
                <Box sx={{
                    height: "30em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'column'
                }}>
                    <Typography variant="h5">Пока что нет новых залов :)</Typography>
                </Box>
            );
        }

        const response = [];
        storeHalls.listHalls.forEach(hall => {
            response.push(
                <ListItem>
                    <ListItemText primary={"Зал " + hall.num_hell}
                                  secondary={"Свободные места: " + hall.num_free_places + " | Занятые места: " + hall.num_occup_places}/>
                </ListItem>
            )
        })
        return (<List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>{response}</List>);

    }

    useEffect(() => {
        storeHalls.autoGetHalls();
    }, []);

    return (
        <React.Fragment>
            <CssBaseline/>
            {storeView.activeView.hells === "list" ? <Header title="Залы"/> : null}
            <Toolbar/>
            <Container>
                {displayHalls()}
            </Container>
        </React.Fragment>
    );
});

export default Hells;