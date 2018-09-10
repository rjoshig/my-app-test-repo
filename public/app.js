"use strict";

var app = {
    ethAddressList: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var ethAddress = e.target.elements.ethAddress.value;
    console.log(ethAddress);
    if (ethAddress) {
        app.ethAddressList.push(ethAddress);
    }
    e.target.elements.ethAddress.value = '';
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            " My App Heading from src/app.js "
        ),
        React.createElement(
            "div",
            null,
            React.createElement(
                "form",
                { onSubmit: onFormSubmit },
                React.createElement(
                    "p",
                    null,
                    "Enter ETH Address"
                ),
                React.createElement("input", { type: "text", name: "ethAddress" }),
                React.createElement(
                    "button",
                    null,
                    " Submit "
                )
            ),
            React.createElement(
                "div",
                null,
                React.createElement(
                    "ol",
                    null,
                    app.ethAddressList.map(function (ethAddress) {
                        return React.createElement(
                            "li",
                            null,
                            "Addr: ",
                            ethAddress,
                            " "
                        );
                    })
                )
            )
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

render();
