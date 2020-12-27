import "./form-input.style.scss"

export const FormInput = ({label,handleChange,...otherProps}) => (
        <div className="group">
            <input 
                className="form-input"
                onChange={handleChange}
                {...otherProps}
            />
            {label ? (
                    <label 
                       
                        className={`{otherProps.value.length ? 'shrink' :''} form-input-label`}
                    >
                        {label}    
                    </label>
                ):null}
        </div>
    )
