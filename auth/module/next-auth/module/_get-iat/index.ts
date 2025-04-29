/**
 * 現在時刻をUnixタイムスタンプ（秒）で返す
 * @returns number
 */
export const getIat = (): number => {
  return Math.floor(Date.now() / 1000);
};
