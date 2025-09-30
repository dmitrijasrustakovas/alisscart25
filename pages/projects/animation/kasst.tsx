// pages/projects/animations/pervaya.tsx
import React, { useState, useEffect } from 'react';
import HeadUp from '../../../components/HeadUp';
import Loader from '../../../components/Loader';
import Windows from '../../../components/Window';

import styles from '../../../styles/projects/nolavdj.module.css';

const tools = [
    { src: '/mainpage/ui/blender.png', alt: 'Blender' },
    { src: '/mainpage/ui/zbrush.png', alt: 'ZBrush' },
    { src: '/mainpage/ui/maxon.png', alt: 'Maxon' },
    { src: '/mainpage/ui/ae.png', alt: 'After Effects' },
    { src: '/mainpage/ui/substance.png', alt: 'Substance Painter' },
    { src: '/mainpage/ui/ue.png', alt: 'Unreal Engine' },
];

export default function PerkayaStage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    if (isLoading) return <Loader visible={true} />;

    return (
        <main className={styles.animationsMain}>
            <HeadUp />

            <div className={styles.windowContainer}>
                <Windows title="KAS:ST" icons={tools}>

                    {/* Описание */}
                    <div className={`${styles.textSection} ${styles.sectionContent}`}>
                        <div className={styles.sectionTitle}>
                            <img
                                src="/mainpage/ui/folder.png"
                                alt="folder"
                                className={styles.folderIcon}
                            />KAS:ST <span className={styles.labelAccent}>{'{Alpaloozafestival}'}</span>
                        </div>
                        {/* Spotify */}
                        <div className={`${styles.spotifySection} ${styles.sectionContent}`}>
                            <iframe
                                style={{ borderRadius: "16px", width: "100%", maxWidth: "420px", margin: "0 auto", display: "block" }}
                                src="https://open.spotify.com/embed/artist/7orlzf5LTqSnCzURkZFebN?utm_source=generator"
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </div>
                        <p className={styles.sectionDesc}>
                            This project was a true international collaboration — I worked closely with a teammate from the UK to create a high-energy 3D animation for the acclaimed artist <b>KAS:ST</b>, who regularly performs at major EDM festivals around the world.
                            <br /><br />
                            The animation was commissioned for <b>ALPALOOZA FESTIVAL 2023</b>, where our visuals were showcased live on the main stage in front of thousands of festival-goers. Our task was to amplify the atmosphere with visuals that matched KAS:ST’s signature blend of techno and emotional storytelling.
                            <br /><br />
                            We used both <b>Unreal Engine</b> and <b>Blender</b> to craft the full animation pipeline: Unreal handled real-time lighting, dynamic camera moves, and VJ-ready effects, while Blender was our go-to for detailed modeling, asset creation, and complex material setups. The workflow was all about speed and quality — bouncing ideas across countries and time zones, and combining our different skills into a seamless show.
                            <br /><br />
                            For me, this was more than just a festival gig — it was a chance to collaborate with a talented creative partner, push the limits of my 3D/VFX toolkit, and see our work electrify a real crowd. From concept sketches to the final big-screen performance, every frame was built to hype up the festival vibe and make KAS:ST’s set unforgettable.
                            <br /><br />
                            Projects like this are why I love digital art — they bring people together from all over the world and turn shared vision into something that lives and breathes on stage.
                        </p>
                    </div>



                    <div className={styles.videoSection}>
                        <h4 className={styles.videoTitle}>watch the Back Process:</h4>
                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/kasst/IMG_5832.mov"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>



                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/kasst/IMG_5829.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>

                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/kasst/IMG_5891.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>

                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/kasst/IMG_6265.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>

                    </div>




                </Windows>
            </div>
        </main>
    );
}