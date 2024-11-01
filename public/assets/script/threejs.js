let pCount;
function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function hasLowRAM() {
    if (navigator.deviceMemory) {
        
        return navigator.deviceMemory < 2;
    }
    console.log('Device Memory not available.');
    return false;
}

function detectWebGL() {
    try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
        return false;
    }
}

function init() {
    if (isMobile() && hasLowRAM()) {
        console.log('Removing Three.js scripts and canvas for low-end mobile device');
        removeCanvas();
        $('body').addClass('body-dark');
        return;
    }
    if (!detectWebGL()) {
        console.log('WebGL not supported. Animation disabled.');
        removeCanvas();
        return;
    }
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.onload = () => {
        initializeThreeJS();
    };
    document.body.appendChild(script);
}

function removeCanvas() {
    const canvas = document.getElementById('myCanvas');
    if (canvas) canvas.hide();
    return true;
}

function initializeThreeJS() {
    const canvas = document.getElementById('myCanvas');
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    function detectDevice() {
        const userAgent = navigator.userAgent;
        const deviceMemory = navigator.deviceMemory || 2;

        if (/Mobile|Android|iPhone/i.test(userAgent)) {
            if (deviceMemory < 2) {
                
                pCount = 1500;
                return "Old Mobile";
            } else {
                
                pCount = 4000;
                return "New Mobile";
            }
        } else if (/Tablet|iPad/i.test(userAgent)) {
            
            pCount = 5500;
            return "Tablet";
        } else if (/Windows NT|Macintosh|Linux/i.test(userAgent)) {
            
            if (deviceMemory < 2) {
                pCount = 10000;
                return "Desktop";
            } else {
                pCount = 7000;
                return "Laptop";
            }
        }
        
        return "Unknown Device";
    }

    const deviceType = detectDevice();

    const particleCount = pCount;
    
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = Math.random() * 200 - 100;
        positions[i * 3 + 1] = Math.random() * 200 - 100;
        positions[i * 3 + 2] = Math.random() * 200 - 100;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: 0x888888, size: 0.1 });
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    let isAnimating = true;

    function animate() {
        if (!isAnimating) return;
        requestAnimationFrame(animate);
        const positions = particleSystem.geometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
            positions[i * 3 + 2] += 0.1;
            if (positions[i * 3 + 2] > 100) {
                positions[i * 3 + 2] = -100;
            }
        }
        particleSystem.geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
    }

    animate();
}

init();