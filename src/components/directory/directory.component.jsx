import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySection } from '../../redux/directory/directory.selectors'
import MenuItem from "../menu-item/menu-item.component"
import { DirectoryMenuContainer } from './directory.styles'
const Directory = ({sections}) => {
    


        return (
            <DirectoryMenuContainer>
                {sections.map(({id,...otherSection})=>(
                    <MenuItem key={id} {...otherSection}  />
                )
                )}
            </DirectoryMenuContainer>
        )
    }

const mapStateToProps = createStructuredSelector({
    sections:selectDirectorySection
})

export default connect(mapStateToProps) (Directory)
