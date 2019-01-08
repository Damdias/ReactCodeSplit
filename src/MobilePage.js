import React, {Suspense,lazy} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Master from "./Master";
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import("./components/About"));
const Mobile  = (props) => {
    return (
        <div>
            <Master>
                <Router>
                    <Suspense fallback={<div>loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                        </Switch>
                    </Suspense>
                </Router>
            </Master>
        </div>
    )
}
export default Mobile;