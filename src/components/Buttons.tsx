interface Props {
    children: string;
    color?: 'primary' | 'secondary';
    onClick: () => void;
} 

const Buttons = ({children, color='primary', onClick} : Props) => {
    return ( 
        <div>
            <button type="button" className={'btn btn-' + color} onClick={onClick}>{children}</button>
        </div>
    )
}

export default Buttons
