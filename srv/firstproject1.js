const firstproject1 = function(srv) {
    srv.on('hello', (req) => {
        return "Hello " + req.data.to + "|";
    });
}
module.exports = firstproject1