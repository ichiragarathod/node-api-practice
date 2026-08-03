import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  userId?: string;
}
const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    // Header format: "Authorization: Bearer <token>"
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided, access denied" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token as string, process.env.JWT_SECRET as string) as { userId: string };

    req.userId = decoded.userId; // token માંથી userId route માં પણ મળી શકે
    next(); // આગળ route handler ને request મોકલો
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

export default authMiddleware;