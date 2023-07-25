import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#c0c0c0',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;