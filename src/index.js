import './style/main.styl'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
/*
textures
*/ 

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (_event) =>
{
    cursor.x = _event.clientX / sizes.width - 0.5
    cursor.y = _event.clientY / sizes.height - 0.5
})

/**
 * Scene
 */
const scene = new THREE.Scene()

/**
 * Camera
 */

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 20)
camera.position.z = 8
scene.add(camera)

/*object*/

const objectGroup = new THREE.Group()
scene.add(objectGroup)

// Material

/*house*/

const houseGroup = new THREE.Group()
scene.add(houseGroup)

/*walls*/

const wallsGeometry = new THREE.BoxGeometry(5, 2.5, 5)
const wallsMaterial = new THREE.MeshBasicMaterial({ color: 0xffcc99 })
const walls = new THREE.Mesh(wallsGeometry, wallsMaterial)
scene.add(walls)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer()
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

/**
 * Camera controls
 */
const cameraControls = new OrbitControls(camera, renderer.domElement)

/**
 * Resize
 */
window.addEventListener('resize', () =>
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Loop
 */
const loop = () =>
{
    window.requestAnimationFrame(loop)

        // Update objects

    // // Animation
    // mesh.rotation.y += 0.01

    // Camera
    // camera.position.y = - cursor.y * 2
    // camera.position.x = cursor.x * 2

    // camera.position.x = Math.cos(cursor.x * Math.PI * 2) * 3
    // camera.position.z = Math.sin(cursor.x * Math.PI * 2) * 3
    // camera.position.y = - cursor.y * 5
    // camera.lookAt(scene.position)

    cameraControls.update()

    // Render
    renderer.render(scene, camera)
}

loop()