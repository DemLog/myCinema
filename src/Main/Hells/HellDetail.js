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

import {BackHeader, Header} from "../../Components/Header";

import {observer} from "mobx-react-lite";

import storeHalls from "../../Store/storeHells";

const HellDetail = observer((props) => {

    const displayHell = () => {
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
            <BackHeader title="Залы"/>
            <Toolbar/>
            <Container>
            </Container>
        </React.Fragment>
    );
});

export default HellDetail;