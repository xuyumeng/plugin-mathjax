require(["gitbook"], function(gitbook) {
    MathJax.Hub.Config({
        tex2jax: {}
        TeX: { equationNumbers: { autoNumber: "AMS" } }
    });


    gitbook.events.bind("page.change", function() {
        MathJax.Hub.Typeset()
    });
});

