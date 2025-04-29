const THRESHOLD = 0.75;

type Props = {
  /** 有効期限（秒） */
  expiresAt: number;
};

/**
 * ライフタイムを 75% まで残してトークンを更新するかどうかを計算する
 * @param props
 * @returns
 */
export const computeShouldRefresh = (props: Props): boolean => {
  const currentAt = Date.now() / 1000;
  const refreshAt = props.expiresAt * THRESHOLD;
  return currentAt >= refreshAt;
};
