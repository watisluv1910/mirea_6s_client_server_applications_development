import {Outlet} from "react-router-dom";

export function Topics() {

    return (
        <div style={{padding: 20}}>
            <h2>Topics</h2>
            <Outlet/>
        </div>
    );
}
