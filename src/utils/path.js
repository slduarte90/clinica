export function localPath(baseUrl, path = '') {
  return `${baseUrl}${path.replace(/^\/+/, '')}`;
}
