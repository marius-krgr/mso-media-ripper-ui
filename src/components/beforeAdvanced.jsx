import React from 'react';
function beforeAdvanced() {

        console.log("im BeforeAdvanced drin!");
    
    return (
        <React.Fragment>
            <h1>Advanced!!</h1>
        </React.Fragment>
    );

}

//exportiert beforeAdvanced, um von anderen Dateien darauf zuzugreifen
export default beforeAdvanced;