declare module '*.scss'
declare module '*.svg'
declare module '*.json'

type Messages = typeof import('@/messages/ru.json')
declare interface IntlMessages extends Messages {}
declare global {
  interface Window {
    Pusher: typeof Pusher
  }
}
