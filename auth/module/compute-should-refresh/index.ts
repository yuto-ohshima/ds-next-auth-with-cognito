const THRESHOLD = 0.75;

type Props = {
  expiresIn: number;
};

/**
 * ライフタイムを 75% まで残してトークンを更新するかどうかを計算する
 * @param props
 * @returns
 */
export const computeShouldRefresh = (props: Props): boolean => {
  const refreshAt = Date.now() + props.expiresIn * THRESHOLD * 1000;
  return refreshAt < Date.now();
};
