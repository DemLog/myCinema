import {useEffect, useState} from "react";

import {
    Box, Button,
    Card, CardActions,
    CardContent,
    CardHeader,
    Container, Divider,
    Skeleton,
    Tab,
    Tabs,
    tabsClasses,
    Typography
} from "@mui/material";

import {observer} from "mobx-react-lite";
import storeFilms from "../../Store/storeFilms";
import storeTabs from "../../Store/storeTabs";

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


const FilmsList = observer((props) => {

    const displayFilms = () => {
        if (storeFilms.listFilms.length === 0) {
            return (
                <Box sx={{
                    height: "30em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: 'column'
                }}>
                    <Typography variant="h5">Пока что нет новых фильмов :)</Typography>
                </Box>
            );
        }

        const response = [];
        storeFilms.listFilms.forEach(film => {
            response.push(
                <Card sx={{mt: 3}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Сеансов: {film.session_num}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {film.name_film}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {film.dic_film}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Купить билет</Button>
                    </CardActions>
                </Card>
            )
        })
        return (<Box>{response}</Box>);

    };

    const displaySkeleton = () => {
        return (
            <Box>
                {[...new Array(6)]
                    .map(() => <Card sx={{mt: 3}}>
                            <CardHeader
                                title={<Skeleton
                                    animation="wave"
                                    height={30}
                                    width="80%"
                                    style={{marginBottom: 6}}
                                />}
                                subheader={<Skeleton animation="wave" height={15} width="40%"/>}
                            />
                            <CardContent>
                                <Skeleton animation="wave" height={10} style={{marginBottom: 6}}/>
                                <Skeleton animation="wave" height={10} style={{marginBottom: 6}}/>
                                <Skeleton animation="wave" height={10} style={{marginBottom: 6}}/>
                                <Skeleton animation="wave" height={10}/>
                            </CardContent>
                        </Card>
                    )
                }
            </Box>
        );
    };

    useEffect(() => {
        storeFilms.autoGetFilms();
    }, []);

    return (
        <Container>
            {displayFilms()}
        </Container>
    );
});

export default FilmsList;