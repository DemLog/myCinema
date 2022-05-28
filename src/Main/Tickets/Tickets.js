import React, {useEffect} from "react";

import {
    Box, Container, CssBaseline, List, ListItem, ListItemText, Toolbar, Typography
} from "@mui/material";

import {Header} from "../../Components/Header";

import {observer} from "mobx-react-lite";

import storeTickets from "../../Store/storeTickets";

const Tickets = observer((props) => {

    const displayTickets = () => {
        if (storeTickets.listTickets.length === 0) {
            return (<Box sx={{
                height: "30em", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: 'column'
            }}>
                <Typography variant="h5">Пока что нет новых покупок :)</Typography>
            </Box>);
        }

        const response = [];
        storeTickets.listTickets.forEach(ticket => {
            response.push(<ListItem>
                <ListItemText
                    primary={"Билет №" + ticket.num_ticket.num_ticket + " | Клиент: " + ticket.phone_client.name_client}
                    secondary={"Сеанс: " + ticket.num_ticket.num_session.num_session + " | Место: " + ticket.place.num_place +
                        " | Кассир: " + ticket.name_cashier.name_cashier}/>
            </ListItem>)
        })
        return (<List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>{response}</List>);

    }

    useEffect(() => {
        storeTickets.autoGetTickets();
    }, []);

    return (<React.Fragment>
        <CssBaseline/>
        <Header title="Билеты"/>
        <Toolbar/>
        <Container>
            {displayTickets()}
        </Container>
    </React.Fragment>);
});

export default Tickets;