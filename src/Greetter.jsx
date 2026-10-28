        const e = React.createElement;
        function Greetter(){            
            return e(
                "ul",
                { data: "something"},
                e("li", null, "Hi1"),
                e("li", null, "Hi2"),
                e("li", null, "Hi3")
            );
        }

        const target = document.getElementById("target");
        const root = ReactDOM.createRoot(target);
        root.render(React.createElement(Greetter));