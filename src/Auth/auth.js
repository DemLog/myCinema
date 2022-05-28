import {useEffect, useState} from "react";

import {
    Alert, Container, Snackbar,
} from "@mui/material";

import Login from "./login/login";
import {About, Terms} from "./login/docs";
import {View} from "../Components/View";
import {ScreenSpinner} from "../Components/ScreenSpinner";

import {observer} from "mobx-react-lite";
import storeUser from "../Store/storeUser";
import storeView from "../Store/storeView";
import ResetPass from "./resetPass/resetPass";

const Auth = observer((props) => {

    const [alert, setAlert] = useState({
        show: false, msg: null
    });
    const showSnackBar = (msg, type) => {
        setAlert({
            show: true,
            msg: <Alert onClose={closeSnackBar} severity={type} sx={{width: '100%', p: 1, fontSize: 16}}>{msg}</Alert>
        });
    };
    const closeSnackBar = (e, reason) => {
        if (reason === 'clickaway') return;

        setAlert({
            show: false, msg: null
        });
    };

    const [spinner, openSpinner] = useState(false);

    const comeBackView = () => {
        storeView.changeView("auth", "login")
    };

    return (<Container component="main" sx={{p: 0, minHeight: "100vh"}}>
        <View activeView={storeView.activeView.auth}>
            <ScreenSpinner open={spinner}/>
            <Login id="login" showAlert={showSnackBar} spinner={openSpinner}/>
            <Terms id="terms" back={comeBackView}/>
            <About id="about" back={comeBackView}/>
            <ResetPass id="reset" back={comeBackView}/>

            <Snackbar open={alert.show} autoHideDuration={3000} onClose={closeSnackBar}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'central'}}>
                {alert.msg}
            </Snackbar>
        </View>
    </Container>);
});

export default Auth;