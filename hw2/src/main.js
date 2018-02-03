import React from "react";
import { render } from "react-dom";
import Greeting from './Greeting';
import Button from './Button';
import 'semantic-ui-css/semantic.min.css';
import './style.less';

render(
    <div class="ui container segment">
        <Greeting name = "Kostya"/>
        <Button name = "Push"
                alertType="info"
                alertTitle="Bugaga"
                alertText="a little step for a man a big step for the mankind"
                color="red" size="massive"/>
        <Button name = "Press"
                alertType="success"
                alertTitle="Wellcome"
                alertText="Hello world!"
                color="violet" size="mini"/>
    </div>,
    document.getElementById('app')
)
