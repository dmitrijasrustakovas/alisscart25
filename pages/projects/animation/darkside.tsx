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
                <Windows title="DArkSide" icons={tools}>

                    {/* Описание */}
                    <div className={`${styles.textSection} ${styles.sectionContent}`}>
                        <div className={styles.sectionTitle}>
                            <img
                                src="/mainpage/ui/folder.png"
                                alt="folder"
                                className={styles.folderIcon}
                            />DArkSide <span className={styles.labelAccent}>{'{animation}'}</span>
                        </div>
                        {/* Spotify */}
                        <div className={`${styles.spotifySection} ${styles.sectionContent}`}>
                            <iframe
                                style={{ borderRadius: "16px", width: "100%", maxWidth: "420px", margin: "0 auto", display: "block" }}
                                src="https://open.spotify.com/embed/track/7mczLeiFeYKRb7vtiPjuMb?utm_source=generator"
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </div>
                        <p className={styles.sectionDesc}>
                            I created this project in just one intense week — from initial ideas to final render. The goal wasn’t just to make something visually appealing, but to build a full atmosphere where sound and visuals work together. Every scene, including the zombie animations, dynamic lighting, and color accents, was handcrafted from scratch.
                            <br /><br />
                            The work wasn’t limited to Blender — I used additional tools for post-processing to achieve the exact mood I wanted: unsettling yet captivating. The character’s outfit was also custom-modeled, focusing on the contrast between iconic stillness and organic, living elements. Every frame was designed to feel like a standalone digital painting.
                            <br /><br />
                            The rendering took a good chunk of time, especially with the complex geometry and lighting in a foggy, reflective environment. But the result was worth every frame — something between a dream, cyberpunk, and a mystical ritual.
                            <br /><br />
                            This project was created for the track “DArkSide” by Bring Me The Horizon as a visual interpretation of the darker side within us — and a way to express it through digital art.
                        </p>
                    </div>


                    <div className={styles.videoSection}>
                        <h4 className={styles.videoTitle}>watch the Back Process:</h4>
                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/darkside/main10000-0180.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>
                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/darkside/act4a0336-0450.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>
                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/darkside/middlefront10543-0626.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>
                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/darkside/middleUP10543-0626.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>
                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/darkside/final scene10940-1048.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>
                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/darkside/main20276-0318.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={styles.projectVideo}
                            />
                        </div>
                        <div className={styles.videoContainer}>
                            <video
                                src="/mainpage/projects/darkside/main10251-0276.mp4"
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