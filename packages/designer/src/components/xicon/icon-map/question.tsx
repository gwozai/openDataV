import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  setup() {
    return () => {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 16 16"
        >
          <g fill="none">
            <path
              d="M9.5 9a1.5 1.5 0 0 1 1.5 1.5v.5c0 1.971-1.86 4-5 4c-3.14 0-5-2.029-5-4v-.5A1.5 1.5 0 0 1 2.5 9h7zm0 1h-7a.5.5 0 0 0-.5.5v.5c0 1.438 1.432 3 4 3s4-1.562 4-3v-.5a.5.5 0 0 0-.5-.5zM13 7a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5zM6 2.5A2.75 2.75 0 1 1 6 8a2.75 2.75 0 0 1 0-5.5zm0 1A1.75 1.75 0 1 0 6 7a1.75 1.75 0 0 0 0-3.5zM13 1a2 2 0 0 1 2 2c0 .73-.212 1.14-.754 1.708l-.264.27c-.377.393-.482.605-.482 1.022a.5.5 0 0 1-1 0c0-.73.212-1.14.754-1.708l.264-.27C13.895 3.63 14 3.418 14 3a1 1 0 1 0-2 0a.5.5 0 0 1-1 0a2 2 0 0 1 2-2z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
      )
    }
  }
})
