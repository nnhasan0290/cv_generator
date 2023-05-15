const SectionHead = ({children}) => {
    return(
        <div className="section__head">

            {/* <hr className="section__divider" /> */}
              <h2 className="section__title">{children}</h2>
            <hr className="section__divider" />
        </div>
    )
}

export default SectionHead