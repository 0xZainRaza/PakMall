
const jwt = require('jsonwebtoken');
function verifyToken(req, res, next) {
const token = req.cookies?.Authorization;

console.log(`Middleware token ${token}`)
if (!token){
    res.redirect('/auth/login')
}
try {
 const decoded = jwt.verify(token, 'your-secret-key');
 req.userId = decoded.userId;
 next();
 } catch (error) {
 res.status(401).json({ error: 'Invalid token' });
 }
 };

module.exports = verifyToken;