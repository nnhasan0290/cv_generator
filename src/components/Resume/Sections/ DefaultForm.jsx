import DefaultInput from "./DefaultInput";

const DefaultForm = ({onSubmit, items}) => {
    return(
        <form className="defaultForm" action="" onSubmit={onSubmit}>
            {
                items.map((item, i) => (
                    <DefaultInput key={i} label={item.label} type={item.type} options={item.options}/>
                ))
            }
           
            <input className="defaultForm__submit" type="Submit" value="Save" />
          </form>
    )
}


export default DefaultForm;