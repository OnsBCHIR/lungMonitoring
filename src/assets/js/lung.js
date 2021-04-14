var gui = null;
function renderLung() {
  var div = document.getElementById("container-lung");

  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
    var container, stats;
    var camera, cameraTarget, scene, renderer, lungMesh;
    var clearColor = 0xcccccc;
    var lungColor = 0xff5533;
    var lungMaterialInterior = new THREE.MeshPhongMaterial({
        color: lungColor, emissive: lungColor, emissiveIntensity: 0.2,
        specular: 0x111111, shininess: 10,
        shading: THREE.SmoothShading,
        side: THREE.FrontSide
    });
    var lungMaterialExterior = new THREE.MeshPhongMaterial({
        color: lungColor, emissive: lungColor, emissiveIntensity: 0.2,
        specular: 0x111111, shininess: 10,
        shading: THREE.SmoothShading,
        side: THREE.BackSide
    });
    var directionalLights = [];
    var params = {showInterior: false};
    gui = new dat.GUI();

    init();
    animate();

    function init() {
        container = document.getElementById('container-lung');
        container.style.width = "1680px";
        container.style.height = "800px";
        // document.body.appendChild(container);

        scene = new THREE.Scene();
        scene.fog = new THREE.Fog(clearColor, 0.1, 8);

        camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 15);
        camera.position.set(3, 0.8, 3);
        cameraTarget = new THREE.Vector3(0, 0, 0);
        scene.add(camera);

        // Lung

        var loader = new THREE.STLLoader();
        loader.crossOrigin = '';
        loader.load('../../../assets/lung_surface_simplified.stl', function (geometry) {
            lungMesh = new THREE.Mesh(geometry, lungMaterialExterior);
            lungMesh.position.set(0, 0, 0);
            lungMesh.rotation.set(-Math.PI / 2, 0, 0);
            lungMesh.scale.set(0.005, 0.005, 0.005);
            lungMesh.castShadow = true;
            lungMesh.receiveShadow = true;
            scene.add(lungMesh);
        } );

        // Ground
        var plane = new THREE.Mesh(new THREE.PlaneBufferGeometry(40, 40),
            new THREE.MeshPhongMaterial({color: clearColor, specular: 0x111111}));
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -0.5;
        scene.add(plane);
        plane.receiveShadow = true;

        // Lights
        scene.add(new THREE.HemisphereLight(0x443333, 0x111122, 1));
        addShadowedLight(0.75, 0.5, 0, 0xffffff, 0.6);
        addShadowedLight(-0.75, 0.5, 0, 0xffffff, 0.6);

        // Renderer
        renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setClearColor(clearColor);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(900, 800);
        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.cullFace = THREE.CullFaceBack;
        container.appendChild(renderer.domElement);



        // Interaction
        window.addEventListener('resize', onWindowResize, false);
        gui.add(params, 'showInterior').onFinishChange(function(value) {
            if (value) {
                lungMesh.material = lungMaterialInterior;
            } else {
                lungMesh.material = lungMaterialExterior;
            }
        });
    }

    function addShadowedLight(x, y, z, color, intensity) {
        var directionalLight = new THREE.DirectionalLight(color, intensity);
        directionalLight.position.set(x, y, z);
        camera.add(directionalLight);
        directionalLight.castShadow = true;
        var d = 0.75;
        directionalLight.shadow.camera.left = -d;
        directionalLight.shadow.camera.right = d;
        directionalLight.shadow.camera.top = d;
        directionalLight.shadow.camera.bottom = -d;
        directionalLight.shadow.camera.near = 1;
        directionalLight.shadow.camera.far = 8;
        directionalLight.shadow.mapSize.width = 800;
        directionalLight.shadow.mapSize.height = 800;
        directionalLight.shadow.bias = -0.005;
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
    }

    function render() {
        var timer = Date.now() * 0.0005;
        camera.position.x = Math.cos(timer) * 2 + Math.sin(timer / 200) * 0.25;
        camera.position.y = Math.cos(timer * 4 / 3) * 0.25 + 0.25;
        camera.position.z = Math.sin(timer) * 2 + Math.cos(timer / 200) * 0.25;
        camera.lookAt(cameraTarget);
        renderer.render(scene, camera);
    }
}