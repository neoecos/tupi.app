require.config({
    baseUrl: 'js/lib',
      shim: {
        'paper' : {
            exports: 'paper'
        },
       }
});


requirejs(["../app","jquery","paper"], function ($,paper) {
    alert(paper);
});