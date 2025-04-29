'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let controller = 1;

    while (controller !== 0) {
      let counter = 0;

      for (let i = 1; i < this.length; i++) {
        const a = this[i - 1];
        const b = this[i];

        if (!compareFunction) {
          const defaultDiffer = String(a) <= String(b);

          if (defaultDiffer) {
            continue;
          } else {
            this[i] = a;
            this[i - 1] = b;
            counter++;
          }
        } else {
          const result = compareFunction(a, b);

          if (result <= 0) {
            continue;
          } else {
            this[i] = a;
            this[i - 1] = b;
            counter++;
          }
        }
      }
      controller = counter;
    }

    return this;
  };
}

module.exports = applyCustomSort;
