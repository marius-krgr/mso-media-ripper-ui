import React from 'react';
import classNames from 'classnames';
import styles from './start.module.scss';


function start() {

    const devider = () => {
        console.log("Hi ich bin im devider");

        return(
            <div className="ui placeholder segment">
                <div className="ui two column very relaxed stackable grid">
                    
                    {/* 1. Option */}
                    <div className="column">
                        <h1 className={classNames(styles.h1)}>Option 1</h1>
                        <h2 className={classNames(styles.h2)}>Einfache Bedienung!</h2>
                        <p>
                            Hallo, willkommen zur ersten Funktion!<br/>
                            Hier ist es einfach und unkompliziert!!<br/>
                            ert!!<br/>
                            ert!!<br/>
                            ert!!<br/>
                            ert!!<br/>
                            ert!!<br/>
                            ert!!<br/>
                            ert!!<br/>
                            ert!!<br/>
                            ert!!<br/>
                            ert!!<br/>
                            ert!!<br/>
                            Was Sie benötigen: ...
                        </p>


                            <a href="./beforeEasy">
                                <button className="ui animated fluid fade massive green button" tabIndex="0">
                                    <div className="visible content">Starten</div>
                                    <div className="hidden content">
                                        Los gehts!
                                    </div>
                                </button>
                            </a>

                    </div>

                    {/* 2. Option */}
                    <div className="middle aligned column">
                        <h1 className={classNames(styles.h1)}>Option 2</h1>
                        <h2 className={classNames(styles.h2)}>Mehr Möglichkeiten!</h2>
                            <p>
                                Hallo, willkommen zur zweiten Funktion! <br/>
                                Diese ist erweitert!<br/>
                                Hier ist es auch nicht schwer!...<br/>
                                ...Aber es gibt mehr Einstellmöglichkeiten!<br/>
                            </p>

                        <a href="/beforeAdvanced">
                            <button className="ui animated fluid fade massive green button" tabIndex="0">
                                <div className="visible content">Starten</div>
                                <div className="hidden content">
                                    Los gehts!
                                </div>
                            </button>
                        </a>
                    </div>
                </div>

                <div className="ui vertical divider">
                    ODER
                </div>
            </div>
        
        );
    }

    return (
        <React.Fragment>
            {/* <div className="ui raised segment">Hi!dddd</div> */}
            <h1 className={classNames(styles.h1)}>MSO-Media-Digitalisierer</h1>
            {devider()}
        </React.Fragment>
    )

}
//exportiert start, um von anderen Dateien darauf zuzugreifen
export default start;