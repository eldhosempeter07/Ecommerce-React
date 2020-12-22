import { CollectionItem } from "../collection-item/collection-item.component";
import "./collection-preview.style.scss";

export const CollectionPreview = ({title,items}) => {
    return (
        <div className="collection-preview">
            <h1>{title.toUpperCase()}</h1>
                <div className="preview">
                    {items
                        .filter((item,idx)=>idx < 4)
                        .map(({id,...otherItemProps})=>( 
                        <CollectionItem key={id} {...otherItemProps}/>
                    ))}
                </div>
        </div>
    )
}
