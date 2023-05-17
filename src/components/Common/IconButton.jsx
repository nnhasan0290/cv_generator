
const IconButton = ({icon, onClick}) => {
    return(
        <div className="iconBtn" onClick={onClick}>
            {icon}
        </div>
    )
}


export default IconButton;