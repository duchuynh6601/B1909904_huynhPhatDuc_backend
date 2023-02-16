exports.create = (req, res) => {
    res.sent({ message: "create handler" });
};

exports.findAll = (req, res) => {
    res.sent({ message: "findAll handler" });
};

exports.findOne = (req, res) => {
    res.sent({ message: "findOne handler" });
};

exports.update = (req, res) => {
    res.sent({ message: "update handler" });
};

exports.delete = (req, res) => {
    res.sent({ message: "delete handler" });
};

exports.deleteALL = (req, res) => {
    res.sent({ message: "deleteAll handler" });
};

exports.findAllFavorite = (req, res) => {
    res.sent({ message: "findAllFavorite handler" });
};