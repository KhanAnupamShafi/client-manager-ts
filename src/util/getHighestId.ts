// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getHighestId = (data: any[]) => {
  const maxId = data.reduce((prev, current) =>
    prev.id && prev.id > current.id ? prev : current
  );

  return maxId.id + 1;
};
