export default function InitMiddleware(middleware) {
    return (req, res, next) =>
        middleware(req, res, (result) => {
            if (result instanceof Error) {
                return next(result);
            }
            return next();
        });
}