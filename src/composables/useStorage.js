import { ref, watch } from 'vue'

export function useStorage(key) {
  let val = localStorage.getItem(key);

  let item = ref(val);

  watch(item, (value) => {
    write(value)
  })

  function write(value) {
    localStorage.setItem(key, value)
  }

  return item
}