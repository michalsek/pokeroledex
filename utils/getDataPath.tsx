export default function getDataPath(
  characterPath?: string | string[],
  ...args: string[]
) {
  if (characterPath instanceof Array) {
    return [...characterPath, ...args];
  }

  if (characterPath) {
    return [characterPath, ...args];
  }

  return [...args];
}
