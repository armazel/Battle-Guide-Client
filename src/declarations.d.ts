// We need to tell TypeScript that when we write "import styles from './styles.less' we mean to load a module (to look for a './styles.scss.d.ts'). 
declare module '*.less';