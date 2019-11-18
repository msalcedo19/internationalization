import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobsList";

ReactDOM.render(
    <IntlProvider locale={navigator.language} messages= {navigator.language === 'es' ? localeEsMessages:localeEnMessages}>
        <JobsList/>
        {console.log(navigator.language)}
    </IntlProvider>, document.getElementById("root")
);
