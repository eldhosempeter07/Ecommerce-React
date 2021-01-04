import './custom-button.style.scss'

export const CustomButton = ({children,isGoogleSignIn,inverted,...otherProps}) => (
            <button className={`${inverted ? 'inverted' : ''} ${
                isGoogleSignIn ? 'google-sign-in' : ''
                } custom-button`} 
                {...otherProps}
                >
                {children}
            </button>

    )
