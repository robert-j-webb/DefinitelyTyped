// Type definitions for express-enforces-ssl 1.1
// Project: https://github.com/aredo/express-enforces-ssl
// Definitions by: Kevin Stubbs <https://github.com/kevinstubbs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Request, Response, NextFunction } from 'express';

/**
 * Enforces HTTPS connections on any incoming requests.
 */
declare function enforceHTTPS(): (req: Request, res: Response, next: NextFunction) => void;

declare namespace enforceHTTPS {
}

export = enforceHTTPS;
