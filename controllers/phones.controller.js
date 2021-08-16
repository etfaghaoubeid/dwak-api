exports.allAccess = async (req, res) => {
    return res.send('public content')
}
exports.userBoard = async (req, res) => {
    return res.send('user content')
};
exports.adminBoard = async (req, res) => {
    return res.send('admom content')
};
exports.moderatorBoard = async (req, res) => {
    return res.send('moderator content')
};
