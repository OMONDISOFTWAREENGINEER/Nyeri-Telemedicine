const auth = (req, res, next) => {
    const token = req.cookies.token; // Get token from cookies
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });
  
    try {
      const decoded = verify(token, process.env.JWT_SECRET); // Use the secret from environment variables
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Token is not valid' });
    }
  };
  
  export default auth;
  