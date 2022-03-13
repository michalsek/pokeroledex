export default function getDataPath(characterPath?: string, ...args: string[]) {
  if (characterPath) {
    return [characterPath, ...args];
  }

  return [...args];
}
