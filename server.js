APP.get('/ana-ekrana-ekle/manifest.json', function(req, res) {
    res.append('Content-Type', 'text/javascript');
    res.sendFile(path.join(root, "manifest.json"));
});

APP.get('/ana-ekrana-ekle/sw.js', function(req, res) {
    res.append('Content-Type', 'text/javascript');
    res.sendFile(path.join(root, "sw.js"));
});