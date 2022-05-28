import {
    BottomNavigation,
    BottomNavigationAction,
    Fab,
    Paper
} from "@mui/material";
import {styled} from '@mui/material/styles';

import MovieIcon from '@mui/icons-material/Movie';
import DoorSlidingIcon from '@mui/icons-material/DoorSliding';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

import {observer} from "mobx-react-lite";
import storeTabs from "../Store/storeTabs";

export const TabBar = observer((props) => {

    const handleChange = (e, value) => {
        storeTabs.changeTab(value);
    };

    return (
        <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
            <BottomNavigation value={storeTabs.activeTab} onChange={handleChange}>
                <BottomNavigationAction
                    label="Фильмы"
                    value="films"
                    icon={<MovieIcon/>}
                />
                <BottomNavigationAction
                    label="Залы"
                    value="hells"
                    icon={<DoorSlidingIcon/>}
                />
                <BottomNavigationAction
                    label="Билеты"
                    value="tickets"
                    icon={<ConfirmationNumberIcon/>}
                />
            </BottomNavigation>
        </Paper>
    );
});