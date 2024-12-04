var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    accessToken: 'pk.eyJ1Ijoicm9zZW5jbyIsImEiOiJjbGluY3I4dncwNTVhM2dtdHpqY2JtMHBsIn0.VErLoNQV5RYb9giBVW6DEw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'The Rise of the Private Tech City',
    subtitle: 'Private investors are quietly creating tech hubs around the world. In some cases, federal governmental bodies are providing the groundwork to incentivize the infusion of international companies.',
    byline: 'Elizabeth Rosenbloom',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    // updateNewPanelContent: true,
    // Initialize the Mapbox map
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'Prospera, Honduras',
            image: './Prospera_Aerial.jpeg',
            image2: 'FullyAutonomous.png',
            //TODO: add image2 to all the other chapters
            description: 'Prospera, located on the island of Roatán, Honduras, is a highly autonomous charter city developed as part of Honduras ZEDE framework. The investment-based city started with a collection of tech founders and invested in by venture capitalists like Peter Thiel, Balaji Srinivasan, and Marc Andreessen. Prospera enjoys its own legal and regulatory systems, distinct from the rest of Honduras, allowing it to implement international business laws and a more business-friendly governance model. It offers significant tax incentives, streamlined regulations, and privatized governance structures designed to attract foreign investment and innovation. The city is governed by a private entity, with its own judicial, arbitration, and administrative bodies, making it semi-independent from the national legal system.',
            location: {
                center: [-86.51090, 16.32953],
                zoom: 12.5,
                pitch: 60,
                bearing: -45,
            title2: 'butt',
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            // updateNewPanelContent: 'Prospera',
            onChapterEnter: [
           // {
            //    layer: 'layer-name',
            //    opacity: 1,
            //    duration: 5000
           // },
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'NEOM, Saudi Arabia',
            image: 'Neom_picture.webp',
            image2: 'MostlyAutonomous.png',
            description: 'NEOM is positioned as a global innovation hub, with a heavy emphasis on technology, artificial intelligence (AI), biotechnology, renewable energy, and advanced manufacturing. It is designed to be a smart city, integrating cutting-edge technology into all aspects of its infrastructure, from transportation to governance. NEOM is best described as a charter city with special economic zone (SEZ) characteristics. It will have its own legal and regulatory framework, separate from Saudi Arabia, making it highly autonomous. The city is designed to be a global hub for innovation, sustainability, and cutting-edge technology, and its governance structure is tailored to attract international investment and talent. With ambitious projects like The Line and a focus on renewable energy, NEOM aims to redefine urban living on a massive scale, while operating within the framework of Vision 2030 to diversify Saudi Arabia’s economy away from oil.',
            location: {
                center: [34.920757, 28.131088],
                zoom: 12.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'King Abdullah Economic City',
            image: 'KAEC.jpg',
            image2: 'MostlyAutonomous.png',
            description: 'King Abdullah Economic City (KAEC) is a vast, privately developed urban area located on the Red Sea coast of Saudi Arabia. It was launched in 2005 with the aim of becoming a global logistics, industrial, and commercial hub, complementing Saudi Arabias national goal of economic diversification. The city offers special tax benefits and streamlined regulations for businesses, particularly in logistics, manufacturing, and trade. KAEC is home to one of the largest ports in the region, King Abdullah Port, and is positioned to attract foreign investment by offering modern infrastructure and economic incentives. While it enjoys some regulatory flexibility, KAEC remains under Saudi Arabias broader governance and legal frameworks. Its development highlights the countrys push to modernize and reduce its reliance on oil revenues. The city is also approximately an hour and 20 minutes away from the city of Mecca and 3 hours from Medina by car. The city is one of five cities Saudi Arabia has developed to place the country among the worlds top ten competative investment destinations.',
            location: {
                center: [39.1335549, 22.4486944],
                zoom: 11,
                pitch: 45,
                bearing: 9.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Macau',
            image: 'Macau.jpeg',
            image2: 'MostlyAutonomous.png',
            description: 'Macau can be classified as a semi-autonomous special administrative region (SAR), which places it in a unique category that shares some characteristics with both charter cities and special economic zones (SEZs). While not a private city, Macau enjoys a high degree of autonomy in its governance and legal systems under the "One Country, Two Systems" policy of China. This arrangement allows Macau to maintain its own laws, economic policies, and governance separate from mainland China, especially in areas like taxation, legal frameworks, and international trade. It has its own currency, independent judicial system, and is governed by local authorities, making it functionally similar to charter cities, though its autonomy is not based on private or decentralized governance but rather on a political agreement with China.',
            location: {
                center: [113.54611, 22.20056],
                zoom: 12.5,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: true,
            title: 'Fifth Title',
            image: './path/to/image/source.png',
            image2: 'MostlyAutonomous.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [114.062996, 22.542883],
                zoom: 10,
                pitch: 60,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Shenzhen',
            image: 'shenzhen-skyline.jpeg',
            image2: 'MostlyAutonomous.png',
            description: 'Shenzhen started as a Special Economic Zone (SEZ) with policies distinct from the rest of China, encouraging foreign investment and rapid economic growth. While not a full charter city, it serves as a model for how special regulatory frameworks can spur urban development.',
            location: {
                center: [114.062996, 22.542883],
                zoom: 13,
                pitch: 60,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'right',
            hidden: true,
            title: 'Greater Springfield, Austraila',
            image: 'Springfield_Austrailia.webp',
            image2: 'moderatelyAuto.png',
            description: 'Greater Springfield is Australia’s first private city. Built from scratch on 7,000 acres of bush by Australia’s 39th richest man, the city now houses 40,000 residents.',
            location: {
                center: [151.368, -33.424],
                zoom: 12,
                pitch: 60,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eigth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Greater Springfield, Austraila',
            image: 'Springfield_Austrailia.webp',
            image2: 'moderatelyAuto.png',
            description: 'Greater Springfield is Australia’s first private city. Built from scratch on 7,000 acres of bush by Australia’s 39th richest man, the city now houses 40,000 residents. While not autonomous like a charter city, Springfields private management and long-term planning have positioned it as a leading example of smart urban development, with the ability to adapt to future economic and environmental needs.',
            location: {
                center: [151.368111, -33.424111],
                zoom: 15,
                pitch: 60,
                bearing: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Developments in Africa',
            image: '',
            image2: 'moderatelyAuto.png',
            description: 'Several developments are underway across Africa, with many nations turning their focus toward economic diversification and attracting international companies. Among these initiatives are emerging cities that, though still in the early stages of construction, reflect a growing global trend toward technology and sustainability-driven urban planning. These cities aim to serve as hubs for innovation and economic growth. Africas rapid urbanization and greenfield development opportunities provide a unique chance to build smart, sustainable cities from the ground up. Combined with the continents ability to leapfrog older technologies and attract global partnerships, Africa is well-positioned to adopt cutting-edge solutions and secure investment for future-ready urban growth.',
            location: {
                center: [39.16, -6.16],
                zoom: 3,
                pitch: 60,
                bearing: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Silicon Zanzibar, Tanzania',
            image: '',
            image2: 'moderatelyAuto.png',
            description: 'Silicon Zanzibar is part of Tanzanias effort to transform Zanzibar into a tech hub by offering significant incentives to Pan-African and global tech companies. As a key initiative, the Zanzibar Free Economic Zone provides tech companies with substantial tax breaks, including a 10-year exemption from corporate tax. Additionally, the government has streamlined the visa process for tech workers, making it easier for startups to attract and retain global talent. While Silicon Zanzibar operates under Tanzania’s legal framework, the incentives offered within the Free Economic Zone make it an attractive destination for entrepreneurs and tech companies seeking a supportive environment for growth. Though not autonomous like a charter city, its special economic regulations and focus on tech position it as a rising innovation center in East Africa.',
            location: {
                center: [39.29027, -6.29519],
                zoom: 10,
                pitch: 60,
                bearing: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleventh-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Itana, Zambia',
            image: '',
            image2: 'moderatelyAuto.png',
            description: 'Itana is a new, privately developed urban project in Zambia that aims to build a technologically advanced and sustainable community, with a focus on innovation, technology, and entrepreneurship. The city is under development, and does not yet have associated coordinates (the closest large city is Mongu). Itana can be classified as a private city because it is privately funded and managed, with a focus on tech-driven innovation and sustainability. It operates within Zambia’s national legal system, meaning it does not enjoy the special legal or governance autonomy found in charter cities or special economic zones (SEZs). Its appeal lies in its modern infrastructure, technology integration, and focus on creating a sustainable urban environment.',
            location: {
                center: [23.14885, -15.25905],
                zoom: 8,
                pitch: 60,
                bearing: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
        id: 'final-chapter',
        alignment: 'center',
        hidden: false,
        title: 'About the Autonomy Meter',
        image: 'AutonomousCircle.png',
        image2: 'AutonomyMeter.png',
        description: 'The Autonomy Meter was made considering economic and governmental autonomy within the city’s legal structure as separate from federal law. Cities ranking in the pink zone of the Autonomy Meter enjoy unique laws and economic policies that differ from national law. These cities have lowered or eliminated federal oversight in the interest of attracting wealthy private entities worldwide.',
        location: {
            center: [180,-30],
            zoom: 4,
            pitch: 40,
            bearing: 45
        },
        mapAnimation: 'flyTo',
        rotateAnimation: true,
        callback: '',
        onChapterEnter: [],
        onChapterExit: []
        },
        {
            id: 'test-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Credits',
            image: '',
            image2: 'RosenCo_whitelogo.PNG',
            description: 'Storymap Created by Elizabeth Rosenbloom | Creative Property of Rosen Design LLC',
            location: {
                center: [-122.4194,37.7749],
                zoom: 5,
                pitch: 40,
                bearing: 45
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
            }
            
    ]
};