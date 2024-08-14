import jwt from "jsonwebtoken"

const AdminAuth = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "").trim();
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN); 
        req.admin = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

export{ AdminAuth}
