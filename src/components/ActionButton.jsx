import React from 'react';
function ActionButton() {
    
    const handleClick = () => {
        console.log("handleClick");
        alert("Yayy, du hast mich gefunden!!!");
        
    }

    const makeButtons = (offset) => {
        const colors = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "red", "orange",];
        const length = 13;
        const buttons = [];
        for (let index = 0; index < length; index++) {
            let index2 = 0;
            if ((index + offset) >= 13) {
                index2 = index - offset;
            } else {
                index2 = index;
            }
            const colorget = "ui basic " + colors[index2 + offset] +" button";
            buttons[index] = <button className={colorget}>Boom!!!!!!</button>;
        }
        return buttons;
    }
    const offset1 = 0;
    const offset2 = 3;
    return (
        <React.Fragment>
        <div>
            {makeButtons(offset1)}
            <button onClick={handleClick} className="ui basic yellow button">Buum!!!!!!</button>
            
            {makeButtons(offset2)}
        </div>

        
        </React.Fragment>
        )
    
}

//exportiert ActionButton, um von anderen Dateien darauf zuzugreifen
export default ActionButton;