'use strict';

import * as THREE from 'three';

// TODO: ----- 주제: 브라우저 창 사이즈 변경에 대응하기

export default function example2() {
    // TODO: Renderer
    const canvas = document.querySelector('#three-canvas');
    const renderer = new THREE.WebGLRenderer({
        canvas,
        // TODO: antialias -> Mesh의 계단현상(안티에이징)이 생기는데 true 해주면 부드럽게 해준다. 대신에 성능에서는 약간 떨어질 수 있다.
        antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    //TODO: setPixelRatio -> Three js에서 고해상도 처리 ( 성능 유리 )
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

// TODO: Scene
    const scene = new THREE.Scene();

// TODO: Camera
// TODO: Perspective Camera(원근 카메라)
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

// TODO: position 속성으로 위치를 셋팅할 수 있다. 만약 셋팅을 안해주면 기본 값으로 0, 0, 0이다.
    camera.position.x = 1;
    camera.position.y = 2;
    camera.position.z = 5;

    scene.add(camera);


// TODO Mesh : geometry + material
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({
        color: 'red'
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

// TODO: 그리기
    renderer.render(scene, camera);

    function setSize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        // TODO: updateProjectionMatrix -> 카메라 투영에 관련된 값에 변화가 있을 경우 실행해야 함
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    }

    // TODO: 이벤트
    window.addEventListener('resize', setSize);
}