class HashMap {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }

    return hash;
  }

  set(key, val) {
    const idx = this._hash(key);

    if (!this.dataMap[idx]) {
      this.dataMap[idx] = [];
    }

    this.dataMap[idx].push([key, val]);
  }

  get(key) {
    const idx = this._hash(key);

    if (!this.dataMap[idx]) return null;

    for (let i = 0; i < this.dataMap[idx].length; i++) {
      if (this.dataMap[idx][i][0] === key) {
        return this.dataMap[idx][i][1];
      }
    }
  }
}
