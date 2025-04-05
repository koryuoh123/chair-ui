import type { Directive, DirectiveBinding } from 'vue'

const chairLoading: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (binding.value?.visible) {
      const loadingIcon = document.createElement('div')
      loadingIcon.className = 'chair-default-loading-icon'
      loadingIcon.style.setProperty('--theme-color', binding.value?.color || '')
      loadingIcon.style.setProperty('--buttonbg', binding.value?.color2 || '')
      el.style.position = 'relative'
      el.appendChild(loadingIcon)
    }
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    const loadingIcon = el.querySelector('.chair-default-loading-icon')
    if (binding.value?.visible && !loadingIcon) {
      const newLoadingIcon = document.createElement('div')
      newLoadingIcon.className = 'chair-default-loading-icon'
      newLoadingIcon.style.setProperty('--theme-color', binding.value?.color || '')
      newLoadingIcon.style.setProperty('--buttonbg', binding.value?.color2 || '')
      el.appendChild(newLoadingIcon)
    } else if (!binding.value?.visible && loadingIcon) {
      loadingIcon.remove()
    }
  },
}

export default chairLoading
