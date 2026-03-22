import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log('[authMiddleware] Authorization header:', authHeader ? `${authHeader.slice(0, 30)}...` : 'MISSING');
    console.log('[authMiddleware] JWT_SECRET set:', !!process.env.JWT_SECRET);
    const token = authHeader && authHeader.startsWith('Bearer ') && authHeader.slice(7);

    if (!token) {
        return res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Invalid or expired token.' });
    }
};
