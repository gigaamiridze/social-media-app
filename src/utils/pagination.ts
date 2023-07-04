export const pagination = (data: any[], pageNumber: number, pageSize: number, isPosts: boolean, setStoryPageNumber: any, setPostPageNumber: any) => {
  const startIndex = (pageNumber - 1) * pageSize;
  
  if (startIndex > data.length) {
    return [];
  }

  if (!isPosts) {
    setStoryPageNumber(pageNumber);
  } else {
    setPostPageNumber(pageNumber);
  }

  return data.slice(startIndex, startIndex + pageSize);
}