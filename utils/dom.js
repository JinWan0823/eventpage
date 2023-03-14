export const makeDOMwithProperties = (domtype,propertyMap) => {
    const dom = document.createElement(domtype);
    Object.keys(propertyMap).map((key)=>{
        dom[key] = propertyMap[key];
    });
    return dom;
};


export const appendChildrenList = (target,childrenList) => {
    if(!Array.isArray(childrenList)) return;

    childrenList.forEach((v)=>{
        target.appendChild(v);
    })
};