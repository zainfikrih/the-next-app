export function parseJwt(token: string) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(decodeBase64(base64));
}

export function decodeBase64(data: string) {
    return Buffer.from(data, 'base64').toString('utf-8')
}
