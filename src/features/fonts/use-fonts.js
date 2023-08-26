import { useDispatch, useSelector } from "react-redux";
import { setFonts } from "./fonts-slice";
import { useEffect } from "react";

export const useFonts = () => {
    const dispatch = useDispatch();
    const fonts = useSelector(state => state.fonts);

    const mySetFonts = (fonts) => dispatch(setFonts(fonts))

    useEffect(() => {
        document.body.setAttribute('data-font', fonts);
    }, [fonts])

    return [fonts, mySetFonts]
}