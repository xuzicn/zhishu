module.exports = {
    pages: {
        index: 'src/main.js',
        mobile: {
            // entry for the page
            entry: 'src-mb/main.js',
            // the source template
            template: 'public/mobile.html',
            // output as dist/index.html
            filename: 'mobile.html'
        }
    }
}