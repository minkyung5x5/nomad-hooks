import React, { useState } from "react";


const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    if (!allTabs || Array.isArray(allTabs)) {
        return;
    };

    return ({
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    });
}

export default useTabs;

const App = () => {
    const content = [
        {
            tab: "Section 1",
            content: "I'm the content of the Section 1",
        },
        {
            tab: "Section 2",
            content: "I'm the content of the Section 2",
        }
    ];
    const { currentItem, changeItem } = useTabs(0, content);

    return (
        <div>
            {content.map((section, index) => (
                <button onClick={() => changeItem(index)}> {section.tab}</button>
            ))}
            {currentItem.content}
        </div>
    );

};
