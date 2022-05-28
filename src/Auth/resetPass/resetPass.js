import {Alert, Box, Button, Container, TextField, Toolbar, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {BackHeader} from "../../Components/Header";
import React from "react";

const ResetPass = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'flex-start',
        }}>
            <BackHeader title="Сброс пароля" backView={props.back}/>
            <Toolbar/>
            <Container component="main" sx={{p: 3}}>
                <Alert variant="filled" severity="info">
                    Внимание: myIIT не имеет доступа к аккаунту вашего Moodle. Введенный вами пароль
                    хранится в зашифрованном виде, не давая возможности использовать его для авторизации
                    посторонним лицам. Но при смене пароля в системе Moodle, пароль в базе myIIT
                    не обновляется. Пожалуйста, пройдите повторную авторизацию с актуальными данными.
                </Alert>
                <Box sx={{mt: 3}}>
                    <Typography variant="subtitle1" gutterBottom component="div">Поиск аккаунта в базе</Typography>
                    <TextField fullWidth label="Логин Moodle" name="login"/>
                    <Button startIcon={<SearchIcon/>} sx={{mt: 1}} variant="contained">
                        Найти
                    </Button>
                </Box>
            </Container>
        </Box>
    )
};

export default ResetPass;