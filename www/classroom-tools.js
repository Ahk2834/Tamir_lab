(() => {
  const DB_NAME = 'yenilikcilab-local';
  const STORE_NAME = 'project-photos';
  let dbPromise;

  function parseList(key) {
    try {
      let raw = localStorage.getItem(key);
      if (raw === null && key === 'yenilikcilab-favorites') raw = localStorage.getItem('tamirlab-favorites');
      const value = JSON.parse(raw || '[]');
      return Array.isArray(value) ? value : [];
    } catch (_) {
      return [];
    }
  }

  function storeList(key, items) {
    try { localStorage.setItem(key, JSON.stringify([...items])); return true; }
    catch (_) { return false; }
  }

  function database() {
    if (!('indexedDB' in window)) return Promise.reject(new Error('Bu tarayıcı yerel fotoğraf saklamayı desteklemiyor.'));
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => {
        if (!request.result.objectStoreNames.contains(STORE_NAME)) request.result.createObjectStore(STORE_NAME, { keyPath: 'id' });
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error('Yerel kayıt açılamadı.'));
    });
    return dbPromise;
  }

  async function withStore(mode, action) {
    const db = await database();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, mode);
      const request = action(transaction.objectStore(STORE_NAME));
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error || new Error('Yerel kayıt işlemi tamamlanamadı.'));
    });
  }

  function resizePhoto(file) {
    return new Promise((resolve, reject) => {
      if (!file || !file.type || !file.type.startsWith('image/')) return reject(new Error('Lütfen bir görsel seç.'));
      if (file.size > 12 * 1024 * 1024) return reject(new Error('Görsel 12 MB sınırını aşıyor.'));
      const url = URL.createObjectURL(file);
      const image = new Image();
      image.onload = () => {
        const scale = Math.min(1, 1100 / Math.max(image.naturalWidth, image.naturalHeight));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
        canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
        const context = canvas.getContext('2d');
        if (!context) { URL.revokeObjectURL(url); return reject(new Error('Görsel işlenemedi.')); }
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);
        resolve(canvas.toDataURL('image/jpeg', 0.78));
      };
      image.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Görsel açılamadı.')); };
      image.src = url;
    });
  }

  const status = document.getElementById('connectionStatus');
  let statusTimer;
  function updateConnectionStatus(showOnline = false) {
    if (!status) return;
    if (!navigator.onLine) {
      status.textContent = 'Çevrim dışısın · kayıtlı proje içerikleri cihazında kullanılabilir.';
      status.classList.add('is-offline');
      status.hidden = false;
      return;
    }
    status.classList.remove('is-offline');
    if (showOnline) {
      status.textContent = 'Bağlantı yeniden kuruldu.';
      status.hidden = false;
      clearTimeout(statusTimer);
      statusTimer = setTimeout(() => { status.hidden = true; }, 2400);
    } else status.hidden = true;
  }
  window.addEventListener('online', () => updateConnectionStatus(true));
  window.addEventListener('offline', () => updateConnectionStatus());
  updateConnectionStatus();

  window.YenilikciLabTools = {
    parseList,
    storeList,
    getPhoto: id => withStore('readonly', store => store.get(id)),
    savePhoto: async (id, file) => {
      const dataUrl = await resizePhoto(file);
      await withStore('readwrite', store => store.put({ id, dataUrl, savedAt: Date.now() }));
      return true;
    },
    removePhoto: id => withStore('readwrite', store => store.delete(id))
  };
})();
