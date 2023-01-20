import styles from "./client-layout.module.css"
import classNames from "classnames/bind";
const cx = classNames.bind(styles)

function ClientStyles({ children }) {
    return children
}

export default ClientStyles;
export {cx}