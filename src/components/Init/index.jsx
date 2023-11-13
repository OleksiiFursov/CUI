import {useEffect} from "react";


const onPointerMove = ({currentTarget, pageX, pageY}) => {
    currentTarget.style = `--x: ${pageX}px; --y:${pageY}px;`;
};
const b = document.body;
function Init() {

    useEffect(() => {
      b.addEventListener("pointermove", onPointerMove);
        return () => {
            b.removeEventListener("pointermove", onPointerMove);
        }
    }, []);

}


export default Init;