window.$docsify = {
  plugins: [
    function(hook) {
      var footer = [
        '<hr/>',
        '<footer>',
        '<span><a href="">Ewan</a> &copy;2017.</span>',
        '<span>Proudly published with <a href="https://github.com/docsifyjs/docsify" target="_blank">docsify</a>.</span>',
        '</footer>'
      ].join('');

      hook.afterEach(function(html) {
        return html + footer;
      });
    }
  ]
};