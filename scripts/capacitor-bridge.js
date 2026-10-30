import { Directory, Filesystem } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';

window.YenilikciLabNative = {
  isNative: () => Boolean(window.Capacitor?.isNativePlatform?.()),
  sharePdf: async (blob, fileName, title) => {
    const bytes = new Uint8Array(await blob.arrayBuffer());
    let binary = '';
    const chunkSize = 0x8000;
    for (let offset = 0; offset < bytes.length; offset += chunkSize) {
      binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
    }
    const base64 = btoa(binary);
    const saved = await Filesystem.writeFile({
      path: fileName,
      data: base64,
      directory: Directory.Cache,
      recursive: true,
    });
    return Share.share({
      title,
      text: 'PDF föyü yazdırmak veya Dosyalar’a kaydetmek için paylaşım hedefi seçin.',
      url: saved.uri,
      dialogTitle: 'PDF föyünü paylaş veya yazdır',
    });
  },
};
