import * as THREE from 'three';

// TODO: 동적으로 캔버스 조립하기
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

const canvas = document.querySelector('#three-canvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// TODO: position 속성으로 위치를 셋팅할 수 있다. 만약 셋팅을 안해주면 기본 값으로 0, 0, 0이다.
camera.position.z = 5;
scene.add(camera);