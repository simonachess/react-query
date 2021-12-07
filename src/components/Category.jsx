import React from 'react';
import { useLocalStorage } from "../useLocalStorage";


const Category = ({ index, title, subcategories }) => {

    const [checkedChildren, setCheckedChildren] = useLocalStorage("checked", []);

    const handleChange = (e) => {
        const subCatIds = subcategories.map(i => i.id);
        if (subCatIds.length === checkedChildren.length) {
            setCheckedChildren([])
        } else {
            setCheckedChildren(subCatIds)
        }
    }

    const handleChildChange = (e, id) => {
        let checkedChildrenCopy = e.target.checked ? [...checkedChildren, id] : checkedChildren.filter(item => item !== id)
        setCheckedChildren(checkedChildrenCopy);
        localStorage.setItem("checked", JSON.stringify(checkedChildrenCopy));
    }

    if (localStorage.length) {
        return (
            <div key={index} >
                <input type="checkbox" onChange={handleChange} checked={checkedChildren.length === subcategories.length}></input>
                <span>{title}
                </span>
                {subcategories.map(i => {
                    let checkedChildrenState = checkedChildren.indexOf(i.id) !== -1
                    return (
                        <ul key={i.id}>
                            <div>
                                <span>{i.name}</span>
                                <input type="checkbox" checked={checkedChildrenState} onChange={(e) => handleChildChange(e, i.id)}></input>
                            </div>
                        </ul>
                    )
                })}
            </div>
        )
    }
}

export default Category