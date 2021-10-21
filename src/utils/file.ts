import fs from 'fs';

export const deleteFile = async (filenname: string) => {
  try {
    await fs.promises.stat(filenname);
  } catch {
    return;
  }

  await fs.promises.unlink(filenname);
};
