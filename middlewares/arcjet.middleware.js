import aj from '../config/arcjet.js';

const arcjetMiddleware =  async (req, res, next) => {
    try {
        const decision = await aj.protect(req, {requested: 1});

        // Allow local requests (127.0.0.1 or localhost)
        if (req.ip === '127.0.0.1' || req.hostname === 'localhost') {
            console.log("✅ Allowing local request from", req.ip);
            return next();
        }

        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({message: 'Rate limit exceeded'});
            }
            if (decision.reason.isBot()) {
                return res.status(403).json({message: 'Bot Detected'});
            }
            return res.status(403).json({error: 'Access denied'});
        }
        next();
    } catch (err) {
        console.log(`Arcjet Middleware Error: ${err}`);
        next(err);
    }
}

export default arcjetMiddleware;