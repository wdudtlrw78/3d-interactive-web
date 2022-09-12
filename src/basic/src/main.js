import * as THREE from 'three';

// TODO: 동적으로 캔버스 조립하기
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

const canvas = document.querySelector('#three-canvas');
const renderer = new THREE.WebGLRenderer({
    canvas,
    // TODO: antialias -> Mesh의 계단현상(안티에이징)이 생기는데 true 해주면 부드럽게 해준다. 대신에 성능에서는 약간 떨어질 수 있다.
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

// TODO: Scene
const scene = new THREE.Scene();

// TODO: Camera
// TODO: Perspective Camera(원근 카메라)
// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// );
//
// // TODO: position 속성으로 위치를 셋팅할 수 있다. 만약 셋팅을 안해주면 기본 값으로 0, 0, 0이다.
// camera.position.x = 1;
// camera.position.y = 2;
// camera.position.z = 5;

// TODO: Orthographic Camera(직교 카메라)
const camera = new THREE.OrthographicCamera(
    -(window.innerWidth / window.innerHeight),
    window.innerWidth / window.innerHeight,
    1,
    -1,
    0.1,
        1000
);

camera.position.x = 1;
camera.position.y = 2;
camera.position.z = 5;
camera.lookAt(0, 0, 0);
camera.zoom = 0.5;
camera.updateProjectionMatrix();
scene.add(camera);


// TODO Mesh : geometry + material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    // color: '0xff0000'
    // color: '#ff0000'
    color: 'red'
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// TODO: 그리기
renderer.render(scene, camera);
