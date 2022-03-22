import React from "react";
import ReactDom from "react-dom";
import Card from "./components/Card";

function App(){
    return (
        <div>
            <div className="card-group">
                <Card cardTitle="Trabzonspor"/>

                <Card cardTitle="Bursaspor"/>

                <Card cardTitle="Samsunspor"/>
            </div>
        </div>
    )
}

ReactDom.render(
    <App/>,
    document.getElementById("root")
)