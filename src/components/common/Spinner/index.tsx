
interface Props {
    size?: 'xs' | 'sm' | 'md'
}


export default function Spinner({size = 'md'}: Props ) {
    return(
        <span className="material-symbols-outlined animate-spin" 
            style={{
                fontSize: size == 'md' ? '1rem' : size == 'xs' ? '0.875rme' : '0.75rem'
             }}
        >
            progress_activity
        </span>
    )
}