import {
    Slide,
    useScrollTrigger
} from "@mui/material";

export const HideOnScroll = (props) => {
    const { children, window, direction } = props;

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction={direction} in={!trigger}>
            {children}
        </Slide>
    );
};