import { Children } from "react";

function BaseButton({children}) {
    return (
        <button className="main-btn">{children}</button>
    )
}

export default BaseButton;