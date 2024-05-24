import classNames from "classnames";
import { FC, ReactNode } from "react";

interface Props {
    children : ReactNode
    className? : string
}

const Wrapper:FC<Props> = ({children, className}) => {

    return(
      <section className={classNames(className, 'w-full')}>{children}</section>
    )
}

export default Wrapper