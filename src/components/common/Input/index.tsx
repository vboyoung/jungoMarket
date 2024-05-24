import classNames from "classnames";
import { ComponentPropsWithoutRef, forwardRef } from "react";


interface Props extends ComponentPropsWithoutRef<'input'> {}


const Input = forwardRef<HTMLInputElement, Props>(
    ({...props}, ref) => { 
    return(
      <input 
         {...props} 
         ref={ref}
         className={classNames(
            props.className,
            'border text-base p-2 outline-none text-black diabled:opacity-50'
         )}
       />
    )
    }
)
export default Input;

