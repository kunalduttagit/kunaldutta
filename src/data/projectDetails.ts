interface projectDetailsItem {
    subtitle: string;
    title: string;
    description: string;
    images: string[];
    links: string[];

}
export const projectDetails : projectDetailsItem[] = [
    {
        subtitle: "Hybrid Movie Reccomendor System",
        title: "Motion",
        description: "Engineered a <strong>hybrid movie recommender</strong> system built on Next.JS platform using content-based (<strong>TF-IDF, Doc2Vec</strong>) and collaborative filtering (<strong>KNN, SVD, NCF</strong>) techniques on a custom <strong>10,000</strong> most popular movies dataset using TMDB API. <br /> <br /> &ensp;  <strong>Recommended Credentials:</strong> <br /> &ensp;  <strong>email: </strong> kunal@motion.com <br /> &ensp;  <strong>password: </strong> 123",
        images: [
            "/assets/images/project/p11.png",
            "/assets/images/project/p12.png",
            "/assets/images/project/p13.png",
            "/assets/images/project/p14.png",
            "/assets/images/project/p15.png",
            "/assets/images/project/p16.png",
        ],
        links: ['https://motion.kunal.tech', 'https://github.com/kunalduttagit/motion/']
    },
    {
        subtitle: "One to One & Group Chats",
        title: "Nifty Chat",
        description: "A chatting app with <strong>One-to-One</strong> Chat and <strong>Group Chat</strong> functionality. Uses Socket.IO for <strong>real-time</strong> chatting. Implemented authentication, session and data encryption using JWT and Bcrypt.",
        images: [
            "/assets/images/project/p21.png",
            "/assets/images/project/p21.png",
        ],
        links: ['https://chat.kunal.tech', 'https://github.com/kunalduttagit/niftychat']
    },
    {
        subtitle: "Mobile Music Player",
        title: "Records",
        description: "Music player built using Flutter that integrates with the <strong>Spotify&copy; API</strong> to retrieve song, artist, and album details. Audio content is sourced from <strong>YouTube&copy;</strong>, available in either multiplexed (muxed) format or audio-only at the highest bitrate supported by YouTube, up to <strong>256 kbps</strong>. The player includes features such as seek, play/pause, previous and next track controls, and automatically adds entire <strong>playlist or album queues</strong> or <strong>recommended songs</strong> for a seamless listening experience. Songs are prefetched to ensure uninterrupted playback. Switch between <strong>dark & light</strong> mode",
        images: [
            "/assets/images/project/p31.png",
            "/assets/images/project/p32.png",
            "/assets/images/project/p33.png",
            "/assets/images/project/p34.png",
            "/assets/images/project/p35.png",
            "/assets/images/project/p36.png",
        ],
        links: ['https://github.com/kunalduttagit/records']
    },
    {
        subtitle: "Neural Network Simulation",
        title: "Self Driving Car",
        description: "Created a <strong>library-free</strong> simulator with <strong>HTML Canvas API</strong> for visuals, car dynamics and artificial sensors. Developed <strong>custom neural networks</strong>, optimized it using parallelization, fitness functions, and Genetic Algorithms (G.As).",
        images: [
            "/assets/images/project/p41.png",
            "/assets/images/project/p42.png",
        ],
        links: ['https://mlcar.vercel.app', 'https://github.com/kunalduttagit/mlcar']
    },
    {
        subtitle: "Just a calculator",
        title: "Neumorphic Calculator",
        description: "A <strong>beautiful calculator</strong> crafted with a <strong>soft neumorphic design</strong>, emphasizing <strong>gentle lighting and shadows</strong> with subtle animations. The buttons are designed to mimic <strong>soft rubber</strong>, responding gracefully to every interaction. As you hover, they seem to adhere to your touch, as if gently pulled by the air. Upon clicking, they sink with a <strong>satisfying cushioned embrace</strong>, providing a tactile and immersive experience.",
        images: [
            "/assets/images/project/p51.png",
            "/assets/images/project/p52.png",
        ],
        links: ['https://kunalduttagit.github.io/Calculator/', 'https://github.com/kunalduttagit/Calculator']
    },
]