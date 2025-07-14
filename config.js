var config = {
    style: 'mapbox://styles/laurisasastoque/cmd2yxve1064k01shep6435g3',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibGF1cmlzYXNhc3RvcXVlIiwiYSI6ImNtMmVzbHF4eTAxaWgyaXNhOTl2OWwwamMifQ.X7SLXCfwa4HQTpoaCg2nDw',
    showMarkers: false,
    markerColor: '#d2cbcb',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Counter-Mapping Diaspora and Crime',
    subtitle: 'A Digital Study of Colombian Spatialities in New York and London',
    byline: 'By Laurisa Sastoque',
    footer: '<a href="https://docs.google.com/presentation/d/1Ohap8dLFfNERPKzDDULhDtYHV3tMhIdYNbrtKN366mc/edit?usp=sharing">For Sources and Contact</a> <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: '',
            description: 'DH2025 Conference <br> July 2025 <br> Lisbon, Portugal',
            image: './assets/dh2025-logo.jpg',
            location: {
                center: [-74.33876, 4.65135],
                zoom: 4.25,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'colombia1',
            alignment: 'center',
            hidden: false,
            title: 'The Media and Spatial Narratives',
            description: 'When it comes to the representations of Colombians abroad, few have done justice to the variety of roles that migrants have fulfilled and the histories that they have experienced.',
            image: './assets/spatial-narratives.png',
            location: {
                center: [-74.33876, 4.65135],
                zoom: 6.25,
                pitch: 0,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [],
        },
        {
            id: 'us',
            alignment: 'center',
            hidden: false,
            title: 'The Effects of Hegemonic Discourse',
            description: `
            <ul>
                <li>Social fragmentation (Guarnizo, et al., 1999)</li>
                <li>“Good” Colombians vs. “bad” Colombians, and</li>
                <li>Aspirational whiteness (Ochoa Camacho, 2016)</li>
                <li>A spatial representation that does not reproduce power relations?</li>
            </ul>
        `,
            image: './assets/hegemonic-discourse.png',
            location: {
                center: [-89.57439, 31.38369],
                zoom: 5.79,
                pitch: 0,
                bearing: 0.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'layering',
            alignment: 'center',
            hidden: false,
            title: 'Methodology: A Process of Layering',
            description: '',
            image: './assets/layering.png',
            location: {
                center: [-89.57439, 31.38369],
                zoom: 5.79,
                pitch: 42,
                bearing: 0.00,
                speed: 0.05,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'example',
            alignment: 'center',
            hidden: false,
            title: '',
            description: '',
            image: './assets/example.png',
            location: {
                center: [-89.57439, 31.38369],
                zoom: 5.79,
                pitch: 42,
                bearing: 0.00,
                speed: 0.05,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'jackson-heights',
            alignment: 'left',
            hidden: false,
            title: 'How does spatial criminalization take place?',
            showMarkers: false,
            image: './assets/jackson-heights.png',
            description: 'Depicted: Jackson Heights, Queens, NYC',
            location: {
                center: [-73.89534, 40.75543],
                zoom: 13.21,
                pitch: 42.50,
                bearing: 0,
                speed: 2, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'polygons-dh2025',
                     opacity: 0.5,
                     duration: 5000
                 },
                 {
                    layer: 'vectors-dh2025',
                    opacity: 0,
                },
                {
                    layer: 'points-dh2025',
                    opacity: 0,
                },
            ],
            onChapterExit: [
                 {
                     layer: 'polygons-dh2025',
                     opacity: 0
                 }
            ]
        },
        {
            id: 'roosevelt-avenue',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './assets/line7.png',
            description: 'Depicted: Roosevelt Avenue, and Metro Line 7',
            location: {
                center: [-73.89534, 40.75543],
                zoom: 13.21,
                pitch: 42.50,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'vectors-dh2025',
                    opacity: 0.5,
                    duration: 5000
                }                
            ],
            onChapterExit: [
                {
                    layer: 'vectors-dh2025',
                    opacity: 0
                }              
            ]
        },
        {
            id: 'orlando',
            alignment: 'left',
            hidden: false,
            title: 'Orlando Travel and Prevision Exequial',
            image: './assets/tobon.png',
            description: 'Depicted: Roosevelt Shopping Mall',
            location: {
                center: [-73.88031, 40.74795],
                zoom: 16.14,
                pitch: 36,
                bearing: -178.36,
                speed: 0.1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'polygons-dh2025',
                    opacity: 0.5,
                    duration: 5000
                },
                {
                    layer: 'points-dh2025',
                    opacity: 1,
                    duration: 5000
                },
            ],
            onChapterExit: []
        },
        {
            id: 'london',
            alignment: 'center',
            hidden: false,
            title: 'Colombian Spatialities in London',
            image: './assets/london.png',
            description: '',
            location: {
                center: [-0.19427, 51.50045],
                zoom: 10.37,
                pitch: 0,
                bearing: 0,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'points-dh2025',
                    opacity: 0
                },
                {
                    layer: 'vectors-dh2025',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'film',
            alignment: 'left',
            hidden: false,
            title: 'Transnational/Translocal Colombians',
            image: '',
            description: 'Depicted: Brixton, Elephant & Castle, Seven Sisters',
            location: {
                center: [-0.19139, 51.51423],
                zoom: 10.85,
                pitch: 0,
                bearing: 0,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'translocal',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './assets/film-stills.png',
            description: 'Depicted: Alba and Xiomara\'s Voyage',
            location: {
                center: [-0.04750, 51.50730],
                zoom: 11.29,
                pitch: 0,
                bearing: 0,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'points-dh2025',
                    opacity: 1,
                    duration: 5000
                },
                {
                    layer: 'vectors-dh2025',
                    opacity: 1,
                    duration: 5000
                }
            ],
            onChapterExit: []
        },
        {
            id: 'moving-forward',
            alignment: 'centre',
            hidden: false,
            title: 'Moving Forward',
            image: '',
            description: `
            <ul>
                <li>Building out a map: what does a “counter-narrative” mean in each of these contexts? What visualizations/functionalities can help bring these forth?</li>
                <li>How do we account for a global imaginary of drug trade criminality that nonetheless has specific and variable manifestations at the local level?</li>
                <li>How can we continue to expand the data collection efforts that input data into the map?</li>
            </ul>
        `,
            location: {
                center: [-74.08349, 4.63402],
                zoom: 4.35,
                pitch: 0,
                bearing: 0,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
