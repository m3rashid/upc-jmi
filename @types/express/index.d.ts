import { JwtPayload } from "jsonwebtoken";

interface IJwtPayload extends JwtPayload {
  sub?: {
    id: string
    role: string
  }
}

declare global {
  namespace Express {
    interface Request {
      user?: IJwtPayload;
    }
  }
}
