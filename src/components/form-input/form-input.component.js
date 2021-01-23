import { GroupContainer,FormInputContainer,FormInputLabel } from "./form-input.style"

export const FormInput = ({label,handleChange, ...props}) => (
        <GroupContainer>
            <FormInputContainer
                onChange={handleChange}
                {...props}
            />
    {label ? (
      <FormInputLabel  className={props.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
        </GroupContainer>
    )
