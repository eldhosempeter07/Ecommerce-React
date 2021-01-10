import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySection } from '../../redux/directory/directory.selectors'
import MenuItem from "../menu-item/menu-item.component"
import "./directory.styles.scss"
const Directory = ({sections}) => {
    


        return (
            <div className='directory-menu'>
                {sections.map(({id,...otherSection})=>(
                    <MenuItem key={id} {...otherSection}  />
                )
                )}
            </div>
        )
    }

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySection
})

export default connect(mapStateToProps) (Directory)
